/**
 * draw the synoptic
 * @param {JsonFile} json content of json file
 * @param {HMIScreenInterface} Screen only for testing purposes
 * @param {HMIRuntime} HMIRuntime only for testing
 */
export function drawSynoptic(json, Screen, HMIRuntime) {
  function generatePoints(x1, y1, x2, y2) {
    // Überprüfe, ob die Punkte horizontal oder vertikal ausgerichtet sind
    if (x1 === x2 || y1 === y2) {
      // Wenn horizontal oder vertikal, gib die vier Punkte zurück
      return [x1, y1, x2, y2];
    }
    // Andernfalls berechne die vier Punkte, die horizontal und vertikal verbinden
    // Die erste Linie verläuft vertikal bis zur Mitte
    const halfY = (y1 + y2) / 2;
    const point1 = [x1, y1];
    const point2 = [x1, halfY];
    // Dann biegt sie horizontal ab
    const point3 = [x2, halfY];
    // Schließlich verläuft die zweite Linie vertikal zur Zielposition
    const point4 = [x2, y2];
    return [...point1, ...point2, ...point3, ...point4];
  }

  const fpStepScreenItems = [];
  const connectorScreenItems = [];  // names of all screen items on the screen:
  for (const screenItem of Screen.Items) {
    switch (screenItem.constructor.name) {
    case 'HmiFaceplateContainer':
      // HMIRuntime.Trace(screenItem.ContainedType);
      if (screenItem.ContainedType.includes('Step')) {
        fpStepScreenItems.push({ ScreenItem: screenItem });
      }
      break;
    case 'HmiPolyline':
      connectorScreenItems.push(screenItem);
      break;
    default:
      // HMIRuntime.Trace(screenItem.constructor.name + '  ' + screenItem.Name);
      break;
    }
  }

  for (let i = 0; i < fpStepScreenItems.length; i++) {
    const fpStep = fpStepScreenItems[i];
    if (i < json.Steps.length) {
      const step = json.Steps[i];
      fpStep.StepId = step.Id;
      fpStep.ScreenItem.Left = step.Left;
      fpStep.ScreenItem.Top = step.Top;
      fpStep.ScreenItem.Properties.HmiTag.Tag = step.GlobalDb ? step.GlobalDb + '_' + step.HmiTag : step.HmiTag;
      fpStep.ScreenItem.Properties.Comment = step.HmiTag + '   ' + step.Comment[HMIRuntime.Language];
    } else {
      fpStep.ScreenItem.Left = 200;
      fpStep.ScreenItem.Top = 260;
    }
  }
  const stepRectWidth = 30;
  const stepRectHeight = 30;
  for (let i = 0; i < connectorScreenItems.length; i++) {
    const plConnector = connectorScreenItems[i];
    if (i < json.Connectors.length) {
      const connector = json.Connectors[i];
      const sourceStep = fpStepScreenItems.find(x => x.StepId === connector.SourceId).ScreenItem;
      const destinationStep = fpStepScreenItems.find(x => x.StepId === connector.DestinationId).ScreenItem;
      plConnector.Left = plConnector.Top = 0;
      const x1 = sourceStep.Left + stepRectWidth / 2;
      const y1 = sourceStep.Top + stepRectHeight;
      const x2 = destinationStep.Left + stepRectWidth / 2;
      const y2 = destinationStep.Top;
      plConnector.Points = generatePoints(x1, y1, x2, y2);
    } else {
      plConnector.Left = 30;
      plConnector.Top = 260;
    }
  }
}
