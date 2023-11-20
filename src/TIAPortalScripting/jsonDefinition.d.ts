
interface JsonFile {
  Name: string
  Steps: [
    {
      Id: number,
      HmiTag: string,
      GlobalDb: string,
      Top: number,
      Left: number,
      Comment: {
        "1033": string,
        "1031": string
      }
    }
  ]
  Connectors: [
    {
      SourceId: 21,
      DestinationId: 22
    }
  ]
}
