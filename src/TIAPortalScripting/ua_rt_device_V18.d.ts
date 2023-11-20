interface HMILoggedAlarmStateResult {
  /**
   * instance ID of Alarm
   */
  InstanceID: number;
  /**
   * Name of the alarm class
   */
  AlarmClassName: string;
  /**
   * Symbol of the alarm class
   */
  AlarmClassSymbol: string;
  /**
   * state of the alarm
   */
  State: number;
  /**
   * Text for the state of alarm
   */
  StateText: string;
  /**
   * Color for the text of alarm
   */
  TextColor: number;
  /**
   * Back Color for the alarm text
   */
  BackColor: number;
  /**
   * Time of alarm modified
   */
  ModificationTime: number | string;
  /**
   * Reason for change in alarm state
   */
  ChangeReason: number;
  /**
   * Time when alarm was raised
   */
  RaiseTime: number | string;
  /**
   * Time of alarm acknowledgement
   */
  AcknowledgementTime: number | string;
  /**
   * Time of clearing alarm
   */
  ClearTime: number | string;
  /**
   * Time of resetting alarm
   */
  ResetTime: number | string;
  /**
   * State of whether alarm is suppressed from viewing or not
   */
  SuppressionState: number;
  /**
   * Priority of alarm
   */
  Priority: number;
  /**
   * Text for the alarm event
   */
  EventText: string;
  /**
   * Text for the alarm
   */
  AlarmText: string[];
  /**
   * Values of alarm parameter for the maximum count of parameters set
   */
  AlarmParameterValues: any[];
  /**
   * Flag for valid/invalid state of alarm
   */
  InvalidFlags: number;
  /**
   * Origin of Alarm
   */
  Origin: string;
  /**
   * Area of the generated alarm
   */
  Area: string;
  /**
   * Value for alarm
   */
  Value: any;
  /**
   * Quality of generated alarm value
   */
  ValueQuality: number;
  /**
   * Limit of alarm value
   */
  ValueLimit: any;
  /**
   * Connection name for which alarm is generated
   */
  Connection: string;
  /**
   * User name in case of operator input alarms
   */
  UserName: string;
  /**
   * Indicates the expected user response for generated alarm
   */
  UserResponse: number;
  /**
   * The dead band of the trigger tag
   */
  Deadband: any;
  /**
   * Name of the machine that hosts the originator of the alarm.
   */
  HostName: boolean;
  /**
   */
  ID: number;
  /**
   */
  InfoText: string;
  /**
   */
  SourceType: number;
  /**
   */
  StateMachine: number;
  /**
   */
  SingleAcknowledgement: boolean;
  /**
   */
  LoggedAlarmStateObjectID: string;
  /**
   * Alarm Group ID for PLC Alarm.
   */
  AlarmGroupID: number;
  /**
   * Duration of Alarm.
   */
  Duration: undefined;
}

interface HMIAlarmLoggingSysFct {
  /**
   * Removes all the records from the specified Alarm Logging Archive
   *
   * The method clears the archive, deletes all segments except one and assigns a new left time bound to the current segment. This method does not make a backup before emptying the log.
   *
   * @param LogName Specifies the name of the archive to which the records shall be removed
   *
   * @returns Promise
   */
  ClearAlarmLog(LogName: string): Promise<{}>;
}

interface HMIAlarmLogging {
  SysFct: HMIAlarmLoggingSysFct;
  /**
   * Read logged alarms from the AlarmLog
   *
   * @param dateFrom Specifies the end of the time range
   * @param dateTo Specifies the beginning of the time range
   * @param language  The language for all texts and also for the filter setting.
   * @param systemNames Array of system names
   *
   * @returns Promise
   */
  Read(dateFrom: number | string, dateTo: number | string, filter: string, language: number, systemNames?: string[]): Promise<HMILoggedAlarmStateResult[]>;
  /**
   * Add a comment for a HmiLoggedAlarmState. LoggedAlarmStateObjectID, InstanceID and TimeStamp have to be taken from a HMILoggedAlarmStateResult.
   *
   *
   * @returns Promise
   */
  AddComment(LoggedAlarmStateObjectID: string, InstanceID: number, TimeStamp: number | string, Language: number, Comment: string): Promise<{}>;
}

interface HMIAlarmingSysFct {
  /**
   * Creates an operator input notification in the AlarmLog
   *
   *
   * @returns ErrorCode
   */
  CreateOperatorInputInformation(AlarmText: string, Area?: string, AlarmParameterValue1?: any, AlarmParameterValue2?: any, AlarmParameterValue3?: any, AlarmParameterValue4?: any, AlarmParameterValue5?: any, AlarmParameterValue6?: any, AlarmParameterValue7?: any): number;
  /**
   * Creates a SystemAlarm which requires acknowledgement
   *
   *
   * @returns ErrorCode
   */
  CreateSystemAlarm(AlarmText: string, Area?: string, AlarmParameterValue1?: any, AlarmParameterValue2?: any, AlarmParameterValue3?: any, AlarmParameterValue4?: any, AlarmParameterValue5?: any, AlarmParameterValue6?: any, AlarmParameterValue7?: any): number;
  /**
   * Creates a SystemInformation in the AlarmLog
   *
   * @param AlarmText The alarm text
   * @param Area Area specifier
   * @param AlarmParameterValue1 1st alarm parameter
   * @param AlarmParameterValue2 2nd alarm parameter
   * @param AlarmParameterValue3 3rd alarm parameter
   * @param AlarmParameterValue4 4th alarm parameter
   * @param AlarmParameterValue5 5th alarm parameter
   * @param AlarmParameterValue6 6th alarm parameter
   * @param AlarmParameterValue7 7th alarm parameter
   *
   * @returns ErrorCode
   */
  CreateSystemInformation(AlarmText: string, Area?: string, AlarmParameterValue1?: any, AlarmParameterValue2?: any, AlarmParameterValue3?: any, AlarmParameterValue4?: any, AlarmParameterValue5?: any, AlarmParameterValue6?: any, AlarmParameterValue7?: any): number;
}

interface HMIAlarmResult {
  /**
   * instance ID of Alarm
   */
  InstanceID: number;
  /**
   * Source ID of Alarm
   */
  SourceID: string;
  /**
   * Name of the alarm
   */
  Name: HMIAlarm;
  /**
   * Name of the alarm class
   */
  AlarmClassName: string;
  /**
   * Symbol of the alarm class
   */
  AlarmClassSymbol: string;
  /**
   * state of the alarm
   */
  State: number;
  /**
   * Text for the state of alarm
   */
  StateText: string;
  /**
   * Color for the text of alarm
   */
  TextColor: number;
  /**
   * Back Color for the alarm text
   */
  BackColor: number;
  /**
   *  Property to enable/disable flashing
   */
  Flashing: boolean;
  /**
   * Time of alarm modified
   */
  ModificationTime: number | string;
  /**
   * Reason for change in alarm state
   */
  ChangeReason: number;
  /**
   * Time when alarm was raised
   */
  RaiseTime: number | string;
  /**
   * Time of alarm acknowledgement
   */
  AcknowledgementTime: number | string;
  /**
   * Time of clearing alarm
   */
  ClearTime: number | string;
  /**
   * Time of resetting alarm
   */
  ResetTime: number | string;
  /**
   * State of whether alarm is suppressed from viewing or not
   */
  SuppressionState: number;
  /**
   * Priority of alarm
   */
  Priority: number;
  /**
   * Text for the alarm event
   */
  EventText: string;
  /**
   * Text for the alarm
   */
  AlarmText: string[];
  /**
   * Values of alarm parameter for the maximum count of parameters set
   */
  AlarmParameterValues: any[];
  /**
   * Flag for valid/invalid state of alarm
   */
  InvalidFlags: number;
  /**
   * Origin of Alarm
   */
  Origin: string;
  /**
   * Area of the generated alarm
   */
  Area: string;
  /**
   * Value for alarm
   */
  Value: any;
  /**
   * Quality of generated alarm value
   */
  ValueQuality: number;
  /**
   * Limit of alarm value
   */
  ValueLimit: any;
  /**
   * Connection name for which alarm is generated
   */
  Connection: string;
  /**
   * Severity of alarm
   */
  SystemSeverity: number;
  /**
   * User name in case of operator input alarms
   */
  UserName: string;
  /**
   * Indicates the expected user response for generated alarm
   */
  UserResponse: number;
  /**
   * The "Loop In Alarm" function is used to visualize a measuring point which triggered an alarm in a loop display on the faceplate, or as process picture that has been linked in the Component List Editor
   */
  LoopInAlarm: string;
  /**
   * List arguments (parameter values) to the loop-in-alarm function, e.g. reference to the Screen for function OpenScreen
   */
  LoopInAlarmParameterValues: any[];
  /**
   * The reason code why this entry was notified.
   *
   * 
					Possible values:
					0: unknown (e.g. when reading from archive)
					1: add
					2: modify
					3: remove
				
   */
  NotificationReason: number;
  /**
   * Alarm Group ID for PLC Alarm.
   */
  AlarmGroupID: number;
  /**
   * Specific alarm number to identify alarm.
   */
  ID: number;
  /**
   * Duration of alarm.
   */
  Duration: undefined;
}

interface HMIAlarm {
  /**
   * Name of alarm
   */
  Name: HMIAlarm;
  /**
   * Error code returned by called function
   */
  ErrorCode: number;
  /**
   * Enables single alarm
   *
   * Example "var EnableErrorcode = alarm.Enable(); "
   *
   * @returns ErrorCode
   */
  Enable(): number;
  /**
   * Disable single alarm
   *
   * Example "var DisableErrorcode = alarm.Disable(); "
   *
   * @returns ErrorCode
   */
  Disable(): number;
  /**
   * To hide Alarm temporarily at runtime by shelving it
   *
   * Example "var Errorcode = alarm.Shelve(); "
   *
   * @returns ErrorCode
   */
  Shelve(): number;
  /**
   * To Unhide alarm at runtime by unshelving it
   *
   * Example "var Errorcode = alarm.Unshelve();"
   *
   * @returns ErrorCode
   */
  Unshelve(): number;
  /**
   * To acknowledge alarm
   *
   * Example "var AckErrorcode = alarm.Acknowledge();"
   *
   * @param InstanceID This is the  InstanceID of the Alarm to be acknowledged.
   *
   * @returns ErrorCode
   */
  Acknowledge(InstanceID?: number): number;
  /**
   * To reset the alarm
   *
   * @param InstanceID This is the  InstanceID of the Alarm to be acknowledged.
   *
   * @returns ErrorCode
   */
  Reset(InstanceID?: number): number;
}

interface HMIAlarmSet {
  /**
   * Count of alarms in alarm set
   */
  Count: number;
  /**
   * Accesses an HMIAlarm object within the AlarmSet
   *
   * @param name AlarmName or index (1..n)
   * @param InstanceID Alarm InstanceID
   *
   * @returns HMIAlarm
   */
  (name: ( HMIAlarm | string | number ), InstanceID?: number):HMIAlarm;
  Item(name: ( HMIAlarm | string | number ), InstanceID?: number): HMIAlarm;
  /**
   * To add alarm name(s) in alarm set
   *
   * Example "var name1 =  ResultSet[index].Name; var name2 =  ResultSet[index+1].Name; var alarmSet = HMIRuntime.Alarming.CreateAlarmSet(); var addedAlarms = alarmSet.Add([name1,name2]);"
   *
   * @param AlarmName This is either the name of a Alarm or an array of alarm names .
   * @param InstanceID Alarm InstanceID
   *
   * @returns HMIAlarm
   */
  Add(AlarmName: ( HMIAlarm | string | string[] | any[][] ), InstanceID?: number): HMIAlarm;
  /**
   * Removes alarm(s) from alarm set
   *
   * Example "var name1 =  ResultSet[index].Name; var alarmSet = HMIRuntime.Alarming.CreateAlarmSet([name1, 'alarm2']); alarmSet.remove([name1,'alarm2']);
   *
   * @param AlarmName Name of alarm(s) to be removed from collection
   * @param InstanceID Alarm InstanceID
   *
   * @returns ErrorCode
   */
  Remove(AlarmName: ( HMIAlarm | string | string[] ), InstanceID?: number): number;
  /**
   * Enables group of alarms
   *
   * Example "var alarmSet = HMIRuntime.Alarming.CreateAlarmSet('alarm1', 'alarm2'); var promise = alarmSet.Enable();"
   *
   * @returns Promise
   */
  Enable(): Promise<{}>;
  /**
   * Disables group of alarms
   *
   * Example "var alarmSet = HMIRuntime.Alarming.CreateAlarmSet('alarm1', 'alarm2'); var promise = alarmSet.Disable();"
   *
   * @returns Promise
   */
  Disable(): Promise<{}>;
  /**
   * To hide all alarms of AlarmSet temporarily at runtime by shelving it
   *
   * Example "var alarmSet = HMIRuntime.Alarming.CreateAlarmSet('alarm1', 'alarm2'); var promise = alarmSet.Shelve(); "
   *
   * @returns Promise
   */
  Shelve(): Promise<{}>;
  /**
   * To unshelve all alarms of AlarmSet 
   *
   * Example "var alarmSet = HMIRuntime.Alarming.CreateAlarmSet('alarm1', 'alarm2'); var shelveErrorcode = alarm.Unshelve(); "
   *
   * @returns Promise
   */
  Unshelve(): Promise<{}>;
  /**
   * To acknowledge all alarms of Alarmset
   *
   * Example "var alarmSet = HMIRuntime.Alarming.CreateAlarmSet('alarm1', 'alarm2', 'alarm3'); var promise = alarmSet.Acknowledge();"
   *
   * @returns Promise
   */
  Acknowledge(): Promise<{}>;
  /**
   * To reset all alarms of AlarmSet
   *
   * @returns Promise
   */
  Reset(): Promise<{}>;
}

interface HMIAlarmSubscription {
  /**
   * Filter for subscription
   */
  Filter: string;
  /**
   *  The language for all texts and also for the filter setting.
   */
  Language: number;
  /**
   * Array of system names
   */
  SystemNames: string[];
  /**
   * Callback function that is invoked to provide the alarm attributes through the AlarmResult array
   *
   * The prototype of the callback function needs to be: OnAlarm(errorCode, systemName, alarmResultArray)
   */
  OnAlarm: { (errorCode: number, systemName: string, alarmResultArray: ( HMIAlarmResult[] | any )): void };
  /**
   * To subscribe active alarms in scripting according to filter criteria given
   *
   * Example "var subs =  HMIRuntime.Alarming.CreateSubscription(); subs.SystemNames = "System24"; subs.Language = 1033; subs.OnAlarm = function (Errorcode, sysID, ResultSet){HMIRuntime.Trace("Script OnAlarm Called"); var alarmCount = ResultSet.length; HMIRuntime.Trace("Alarm count = " + alarmCount);}; subs.Start();"
   *
   * @returns ErrorCode
   */
  Start(): number;
  /**
   * To cancel subscription for alarms
   *
   * Example "var subs =  HMIRuntime.Alarming.CreateSubscription(); subs.SystemNames = "System24"; subs.Language = 1033; subs.OnAlarm = function (Errorcode, sysID, ResultSet){HMIRuntime.Trace("Script OnAlarm Called"); var alarmCount = ResultSet.length; HMIRuntime.Trace("Alarm count = " + alarmCount); subs.Stop();}; subs.Start();" 
   *
   * @returns ErrorCode
   */
  Stop(): number;
}

interface HMIAlarming {
  SysFct: HMIAlarmingSysFct;
  /**
   * To create AlarmSet/Group of alarms
   *
   * Example "var alarmSet = HMIRuntime.Alarming.CreateAlarmSet(['alarm1', 'alarm2']);"
   *
   * @param AlarmNames Names for alarms that needs to be available in the alarmset collection
   *
   * @returns HMIAlarmSet
   */
  CreateAlarmSet(AlarmNames?: ( HMIAlarm | string | string[] | any[][] )): HMIAlarmSet;
  /**
   * To create subscription for alarm
   *
   * Example "var subs = HMIRuntime.Alarming.CreateSubscription();"
   *
   * @returns HMIAlarmSubscription
   */
  CreateSubscription(): HMIAlarmSubscription;
  /**
   * To get alarm object
   *
   * Example "var alarm = HMIRuntime.Alarming.Alarms('alarm1');"
   *
   * @param AlarmName Name of the Alarm
   *
   * @returns HMIAlarm
   */
  Alarms(AlarmName: ( HMIAlarm | string )): HMIAlarm;
  /**
   * To get Active alarms without starting and stopping subscription in script.
   *
   * Example "var promise = HMIRuntime.Alarming.GetActiveAlarms(1033,"","RUNTIME_1");"
   *
   * @param Filter Filter for subscription
   * @param SystemNames Array of system names
   *
   * @returns Promise
   */
  GetActiveAlarms(Language: number, Filter?: string, SystemNames?: string[]): Promise<HMIAlarmResult[]>;
}

interface HMIAuditSysFct {
  /**
   * Stores an electronic record into the Audit Trail
   *
   *  This is an asynchronous function which returns an Error Code as result.
   *
   * @param ObjectName Name of the modified object
   * @param Category Category to classify the origin of the change
   * @param OperationType Type of change done in the object
   * @param OldValue Previous value of the modified object
   * @param NewValue New value for the modified object
   * @param ConfirmationType Type of confirmation required for the change
   * @param Reason Text list offered to simplify the selection of reasons
   * @param RequiredFunctionRights Required functtion rights for electronic signature
   *
   * @returns Promise
   */
  InsertElectronicRecord(ObjectName: string, Category: string, OperationType: hmiOperationType, OldValue: any, NewValue: any, ConfirmationType: hmiConfirmationType, Reason?: ( HMITextList | string ), RequiredFunctionRights?: hmiAuditRequiredRightsType): Promise<{}>;
  /**
   * Reads the Audit Electronic Records.
   *
   * @param dateFrom Specifies the beginning of the time range
   * @param dateTo Specifies the end of the time range
   * @param offSet The page number of the results. User together with More flag.
   *
   * @returns Promise
   */
  ReadElectronicRecord(dateFrom: number | string, dateTo: number | string, offSet: number): Promise<HMIElectronicRecordResult>;
}

interface HMIAuditEnums_hmiConfirmationType{
  /**
   * No confirmation is required.
   *
   * The current action does not require any confirmation.
   */
  hmiNone: 0;
  /**
   * Extra confirmation is required.
   *
   * An extra confirmation is required to proceed with the requested action.
   */
  hmiConfirmationRequired: 1;
  /**
   * Extra confirmation and reason are required.
   *
   * An extra confirmation and a reason for the change are required to proceed with the requested action.
   */
  hmiReasonRequired: 2;
  /**
   * Electronic signature is required .
   *
   * An extra electronic signature for the change is required to proceed with the requested action.
   */
  hmiSignatureRequired: 4;
  /**
   * Electronic signature and a reason is required.
   *
   * An extra electronic signature and a reason for the change are required to proceed with the requested action.
   */
  hmiSignatureAndCommentRequired: 6;
}

interface HMIAuditEnums_hmiOperationType{
  /**
   * New object has been created.
   *
   * Indicates that the specified object has been created.
   */
  hmiCreation: 1;
  /**
   * Object has been modified.
   *
   * Indicates that the specified object has been modified.
   */
  hmiUpdate: 2;
  /**
   * Object has been deleted.
   *
   * Indicates that the specified object has been removed.
   */
  hmiDeletion: 3;
}

interface HMIAuditEnums_hmiAuditRequiredRightsType{
  /**
   * A single signature right is required.
   *
   * One of the valid signature rights: First or Second signature is required to proceed with the action.
   */
  hmiSingleAuditRight: 0;
  /**
   * First signature right is required.
   *
   * A valid electronic signature with First signature right is required to proceed with the requested action.
   */
  hmiFirstRightOnly: 1;
  /**
   * Second signature  right  is required.
   *
   * A valid electronic signature with Second signature right is required to proceed with the requested action.
   */
  hmiSecondRightOnly: 2;
  /**
   * Double signature rights are required.
   *
   * Double electronic signatures with First and Second signature rights are required to proceed with the requested action.
   */
  hmiDoubleAuditRights: 3;
}

interface HMIAuditEnums {
  /**
   * Used by the InsertElectronicRecord() method to identify the confirmation behaviour.
   */
  hmiConfirmationType: HMIAuditEnums_hmiConfirmationType
  /**
   * Used by the InsertElectronicRecord() method to set the operation type.
   */
  hmiOperationType: HMIAuditEnums_hmiOperationType
  /**
   * Used by the InsertElectronicRecord() method to identify the required rights for signing behaviour.
   */
  hmiAuditRequiredRightsType: HMIAuditEnums_hmiAuditRequiredRightsType
}

interface HMIAudit {
  SysFct: HMIAuditSysFct;
  Enums: HMIAuditEnums;
}

interface HMIElectronicRecordResult {
  /**
   * True if the returned page is not the last one.
   */
  More: boolean;
  /**
   * The values of the query
   */
  Values: any;
  /**
   * The invalid values of the query
   */
  InvalidValues: any;
}

interface HMIElectronicRecordValueResult {
  /**
   * TimeStamp of the HMIElectronicRecordResult
   */
  TimeStamp: number | string;
  /**
   * AuditProviderType of the HMIElectronicRecordResult
   */
  AuditProviderType: number;
  /**
   * AuditProvider of the HMIElectronicRecordResult
   */
  AuditProvider: string;
  /**
   * ObjectReference of the HMIElectronicRecordResult
   */
  ObjectReference: any;
  /**
   * ObjectName of the HMIElectronicRecordResult
   */
  ObjectName: any;
  /**
   * OperationType of the HMIElectronicRecordResult
   */
  OperationType: number;
  /**
   * OperatorStation of the HMIElectronicRecordResult
   */
  OperatorStation: string;
  /**
   * User of the HMIElectronicRecordResult
   */
  User: string;
  /**
   * OldValue of the HMIElectronicRecordResult
   */
  OldValue: any;
  /**
   * NewValue of the HMIElectronicRecordResult
   */
  NewValue: any;
  /**
   * Reason of the HMIElectronicRecordResult
   */
  Reason: any;
  /**
   * Language of the HMIElectronicRecordResult
   */
  Language: number;
  /**
   * Signature of the HMIElectronicRecordResult
   */
  Signature: any;
  /**
   * Signature of the HMIElectronicRecordResult
   */
  Integrity: number;
}

interface HMIConnectionsEnums_hmiConnectionMode{
  /**
   * disable the connection
   */
  Disabled: 0;
  /**
   * enable the connection
   */
  Enabled: 1;
}

interface HMIConnectionsEnums {
  /**
   * Used by HMIConnection.SetConnectionMode()
   */
  hmiConnectionMode: HMIConnectionsEnums_hmiConnectionMode
}

interface HMIConnectionsSysFct {
  /**
   * Connects or disconnects a given connection
   *
   * @param ConnectionName Name of the HMIConnection
   * @param EnableState false = Disable connection, true = Enable connection
   *
   * @returns ErrorCode
   */
  SetConnectionMode(ConnectionName: ( HMIConnection | string ), EnableState: boolean): number;
  /**
   * Change address parameters for a given S7 connection.
   *
   * @param ConnectionName Name of the HMIConnection
   * @param IPv4Address A valid IP v4 address (e.g. 192.168.154.128) for the S7 driver.
   * @param Slot Slot value for the S7 driver.
   * @param Rack Rack value for the S7 driver.
   *
   * @returns ErrorCode
   */
  ChangeConnection(ConnectionName: ( HMIConnection | string ), IPv4Address: string, Slot?: number, Rack?: number): number;
  /**
   * Transfer the date and time of the HMI device to the S7+ PLC (S7-1200/1500)
   *
   * @param ConnectionName Name of the HMIS7PlusConnection. If empty, all S7+ connections are considered.
   *
   * @returns Promise
   */
  SetPLCDateTime(ConnectionName?: string): Promise<{}>;
}

interface HMIConnections {
  Enums: HMIConnectionsEnums;
  SysFct: HMIConnectionsSysFct;
  /**
   * Accesses a HMIConnection object
   *
   * @param name Name of the HMIConnection
   *
   * @returns HMIConnection
   */
  (name: ( HMIConnection | string )):HMIConnection;
  Item(name: ( HMIConnection | string )): HMIConnection;
}

interface HMIConnection {
  /**
   * Change to connection mode
   *
   * @param mode Mode of the HMIConnection, refer to the enum hmiConnectionMode
   *
   * @returns Promise
   */
  SetConnectionMode(mode: hmiConnectionMode): Promise<{}>;
}

interface HMIDatabaseStatementResult {
  /**
   * Array of Error result
   */
  Errors: HMIDatabaseDetailedError;
  /**
   * Array of rows for table
   */
  Rows: any[];
}

interface HMIDatabaseDetailedError {
  /**
   * Error Description
   */
  Message: string;
  /**
   * ODBC Error State
   */
  State: string;
}

interface HMIDatabaseResult {
  /**
   * Global Error code
   */
  GlobalError: number;
  /**
   * Results from select query
   */
  Results: HMIDatabaseStatementResult;
}

interface HMIDatabaseConnection {
  /**
   * Executes query on database
   *
   * @param query query string
   * @param values array of values
   *
   * @returns Promise
   */
  Execute(query: string, values?: ( any | any[] )): Promise<HMIDatabaseResult>;
  /**
   * close database connection
   *
   * @returns Promise
   */
  Close(): Promise<HMIDatabaseResult>;
}

interface HMIDatabase {
  /**
   * Establish connection to database using connection string
   *
   * @param connectionString Database connection string
   *
   * @returns Promise
   */
  CreateConnection(connectionString: string): Promise<HMIDatabaseConnection>;
}

interface HMIDataSet {
  /**
   * The total number of elements in the DataSet.
   */
  Count: number;
  /**
   * Accesses a single element within the DataSet collection and returns the value.
   *
   * @param name Name of the element in the DataSet
   *
   * @returns Variant
   */
  (name: string):any;
  Item(name: string): any;
  /**
   * Adds an element to the DataSet
   *
   * @param name The name of the element which has to be added to the DataSet. 
   * @param value The value of the corresponding element to be added to the DataSet 
   */
  Add(name: string, value: any): void;
  /**
   * Checks if an element is present in the DataSet or not.
   *
   * @param name The name of the element to be searched for in the DataSet.
   *
   * @returns Bool
   */
  Exists(name: string): boolean;
  /**
   * Removes an element from the DataSet
   *
   * @param name The name of the element to be removed from the DataSet.
   */
  Remove(name: string): void;
  /**
   * Removes all elements from the DataSet
   */
  Clear(): void;
}

interface HMIDataSetElement {
  /**
   * The Name of the element.
   */
  Name: string;
  /**
   * The Value of the element.
   */
  Value: any;
}

interface FoldersEnums_FolderId{
  /**
   * Special folder for temporary files.
   *
   * Special folder of the file system used for temporary files.
   */
  TempDir: 0;
  /**
   * Home directory of current user.
   *
   * Special folder of the file system containing files of current user.
   */
  HomeDir: 1;
}

interface FoldersEnums {
  /**
   * Used by the GetSpecialFolder() method of HMIRuntime.FileSystem
   */
  FolderId: FoldersEnums_FolderId
}

interface HMIFileSystem {
  Enums: FoldersEnums;
  /**
   * Reads a text file from the filesystem
   *
   * @param path Path to the file
   * @param encoding Encoding of the text file (e.g. utf8, utf16, ucs2, ...)
   *
   * @returns Promise
   */
  ReadFile(path: string, encoding: string): Promise<{}>;
  /**
   * Reads a binary file from the filesystem
   *
   * @param path Path to the file
   *
   * @returns Promise
   */
  ReadFileBinary(path: string): Promise<{}>;
  /**
   * Creates and writes text in a file
   *
   * @param path Path to the file
   * @param data Content of the file
   * @param encoding Encoding of the text file (e.g. utf8, utf16, ucs2, ...)
   *
   * @returns Promise
   */
  WriteFile(path: string, data: string, encoding: string): Promise<{}>;
  /**
   * Creates and writes binary data in a file
   *
   * @param path Path to the file
   * @param data Content of the file
   *
   * @returns Promise
   */
  WriteFileBinary(path: string, data: ArrayBuffer): Promise<{}>;
  /**
   * Appends and writes text data in a file
   *
   * @param path Path to the file
   * @param data Content of the file
   * @param encoding Encoding of the text file (e.g. utf8, utf16, ucs2, ...)
   *
   * @returns Promise
   */
  AppendFile(path: string, data: string, encoding: string): Promise<{}>;
  /**
   * Appends and writes binary data in a file
   *
   * @param path Path to the file
   * @param data Content of the file
   *
   * @returns Promise
   */
  AppendFileBinary(path: string, data: ArrayBuffer): Promise<{}>;
  /**
   * Delete a file
   *
   * @param path Path to the file
   *
   * @returns Promise
   */
  DeleteFile(path: string): Promise<{}>;
  /**
   * Create a directory
   *
   * @param path Path to the directory
   *
   * @returns Promise
   */
  CreateDirectory(path: string): Promise<{}>;
  /**
   * Delete a directory, sub-directory and all files
   *
   * @param path Path to the directory
   *
   * @returns Promise
   */
  DeleteDirectory(path: string): Promise<{}>;
  /**
   * Read path of special folder in file system.
   *
   * Example: let tempDir = HMIRuntime.FileSystem.GetSpecialFolder(HMIRuntime.FileSystem.Enums.FolderId.TempDir); "
   *
   * @param Folder Folder identifier
   *
   * @returns String
   */
  GetSpecialFolder(Folder: FolderId): string;
  /**
   * Gets a list of Files and Folders in a specific directory.
   *
   * @param path Path of directory
   * @param filter file filter, can contain the following wildcards: '*', '?'
   * @param recursive Set to true for browsing sub-folders. Default value is "false"
   *
   * @returns Promise
   */
  Browse(path: string, filter?: string, recursive?: boolean): Promise<{}>;
  /**
   * Returns true if the path points to a directory.
   *
   * @param path Path of directory
   *
   * @returns Bool
   */
  IsDirectory(path: string): boolean;
}

interface HMIErrorObject {
  /**
   * Error code received by scripting object model methods.
   */
  ErrorCode: number;
  /**
   * Additional value for the error text
   */
  ErrorValues: any[];
}

interface HMIRuntime {
  /**
   * The current user interface language id.
   *
   * Only available in a HmiScreen, not in the Script Scheduler. Can be used to change the language when writing it (e.g. 1031 for German/Germany, see also https://msdn.microsoft.com/en-us/goglobal/bb896001.aspx).
   */
  Language: number;
  AlarmLogging: HMIAlarmLogging;
  Alarming: HMIAlarming;
  Audit: HMIAudit;
  Connections: HMIConnections;
  Database: HMIDatabase;
  FileSystem: HMIFileSystem;
  Math: HMIMath;
  PlantModel: HMIPlantModel;
  Reporting: HMIReporting;
  Resources: HMIResources;
  TagLogging: HMITagLogging;
  Tags: HMITags;
  Timers: HMITimers;
  UI: HMIUI;
  Device: HMIDevice;
  ParameterSetTypes: HMIParameterSetTypes;
  /**
   * Writes a string to the trace buffer.
   *
   * @param message the string message for the trace buffer
   */
  Trace(message: string): void;
  /**
   * Returns a detailed error description of the passed error code.
   *
   * @param errorCode Error code received by scripting object model methods.
   *
   * @returns String
   */
  GetDetailedErrorDescription(errorCode: ( HMIErrorObject | number )): string;
}

interface HMISetValueCommandBase {
  /**
   * Used as helper function for SystemFunctions to set values (e.g. Tags)
   *
   *
   * @returns ErrorCode
   */
  (Value: any):number;
  SetValue(Value: any): number;
}

interface HMIMath {
  /**
   * Object is used to check if a particular value is a 64-Bit integer type (signed/unsigned)
   *
   * 
                    The returned object does not have any functionality it is only used in combination with the
                    javascript operator 'instanceof'. For example: if (myValue instanceof HMIRuntime.Math.Int64Base) {...}
                
   */
  Int64Base: HMIInt64Base;
  /**
   * Object represents an unsigned 64-Bit integer value.
   */
  Uint64: HMIUint64;
  /**
   * Object represents an signed 64-Bit integer value.
   */
  Int64: HMIInt64;
  /**
   * Object represents a precise time stamp using a 100 ns resolution.
   */
  DatePrecise: HMIDatePrecise;
  /**
   * This function converts RGBA value to hex value.
   *
   * This function converts RGBA value to hex value.
   *
   * @param R Value of red.
   * @param G Value of Green.
   * @param B Value of Blue.
   * @param A Value of Alpha/Opacity.
   *
   * @returns UInt32
   */
  RGB(R: number, G: number, B: number, A?: number): number;
  /**
   * This function converts RGBA value to hex value.
   *
   * This function converts RGBA value to hex value.
   *
   * @param RGB Value of red,green and blue in hex.
   * @param A Value of Alpha/Opacity in hex.
   *
   * @returns UInt32
   */
  RGBWeb(RGB: number, A?: number): number;
}

interface HMIInt64Base {
}

interface HMIInt64 {
  /**
   * The lower 32-Bit of the 64-Bit Value
   */
  Lo: number;
  /**
   * The upper 32-Bit of the 64-Bit Value
   */
  Hi: number;
  /**
   * Create an new signed 64-Bit integer object.
   *
   * For example: var newVal = HMIRuntime.Math.Int64('-6000000000000000000');
   *
   *
   * @returns HMIInt64
   */
  (value: any):HMIInt64;
  Item(value: any): HMIInt64;
  /**
   * Add a value
   *
   *
   * @returns HMIInt64
   */
  Add(value: ( HMIInt64 | HMIUint64 | any )): HMIInt64;
  /**
   * Substracts a value
   *
   *
   * @returns HMIInt64
   */
  Sub(value: ( HMIInt64 | HMIUint64 | any )): HMIInt64;
  /**
   * Multiplies a value
   *
   *
   * @returns HMIInt64
   */
  Mul(value: ( HMIInt64 | HMIUint64 | any )): HMIInt64;
  /**
   * Divides a value
   *
   *
   * @returns HMIInt64
   */
  Div(value: ( HMIInt64 | HMIUint64 | any )): HMIInt64;
  /**
   * Performs a bitwise AND operation
   *
   *
   * @returns HMIInt64
   */
  And(value: ( HMIInt64 | HMIUint64 | any )): HMIInt64;
  /**
   * Performs a bitwise OR operation
   *
   *
   * @returns HMIInt64
   */
  Or(value: ( HMIInt64 | HMIUint64 | any )): HMIInt64;
  /**
   * Performs a bitwise XOR operation
   *
   *
   * @returns HMIInt64
   */
  Xor(value: ( HMIInt64 | HMIUint64 | any )): HMIInt64;
  /**
   * Performs a left-shift operation
   *
   * The parameter specifies the amount of bits to shift.
   *
   *
   * @returns HMIInt64
   */
  ShiftLeft(value: number): HMIInt64;
  /**
   * Performs a right-shift operation
   *
   * The parameter specifies the amount of bits to shift.
   *
   *
   * @returns HMIInt64
   */
  ShiftRight(value: number): HMIInt64;
  /**
   * Converts the value to a string
   *
   * If no base is specified the base 10 is used to convert the 64-Bit value to a string.
   *
   *
   * @returns String
   */
  toString(base?: number): string;
}

interface HMIUint64 {
  /**
   * The lower 32-Bit of the 64-Bit Value
   */
  Lo: number;
  /**
   * The upper 32-Bit of the 64-Bit Value
   */
  Hi: number;
  /**
   * Create an new unsigned 64-Bit integer object.
   *
   * For example: var newVal = HMIRuntime.Math.Uint64('6000000000000000000');
   *
   *
   * @returns HMIUint64
   */
  (value: any):HMIUint64;
  Item(value: any): HMIUint64;
  /**
   * Add a value
   *
   *
   * @returns HMIUint64
   */
  Add(value: ( HMIInt64 | HMIUint64 | any )): HMIUint64;
  /**
   * Substracts a value
   *
   *
   * @returns HMIUint64
   */
  Sub(value: ( HMIInt64 | HMIUint64 | any )): HMIUint64;
  /**
   * Multiplies a value
   *
   *
   * @returns HMIUint64
   */
  Mul(value: ( HMIInt64 | HMIUint64 | any )): HMIUint64;
  /**
   * Divides a value
   *
   *
   * @returns HMIUint64
   */
  Div(value: ( HMIInt64 | HMIUint64 | any )): HMIUint64;
  /**
   * Performs a bitwise AND operation
   *
   *
   * @returns HMIUint64
   */
  And(value: ( HMIInt64 | HMIUint64 | any )): HMIUint64;
  /**
   * Performs a bitwise OR operation
   *
   *
   * @returns HMIUint64
   */
  Or(value: ( HMIInt64 | HMIUint64 | any )): HMIUint64;
  /**
   * Performs a bitwise XOR operation
   *
   *
   * @returns HMIUint64
   */
  Xor(value: ( HMIInt64 | HMIUint64 | any )): HMIUint64;
  /**
   * Performs a left-shift operation
   *
   * The parameter specifies the amount of bits to shift.
   *
   *
   * @returns HMIUint64
   */
  ShiftLeft(value: number): HMIUint64;
  /**
   * Performs a right-shift operation
   *
   * The parameter specifies the amount of bits to shift.
   *
   *
   * @returns HMIUint64
   */
  ShiftRight(value: number): HMIUint64;
  /**
   * Converts the value to a string
   *
   * If no base is specified the base 10 is used to convert the 64-Bit value to a string.
   *
   *
   * @returns String
   */
  toString(base?: number): string;
}

interface HMIDatePrecise {
  /**
   * Create an new DatePrecise object.
   *
   * @param year This parameter can be either the full year, a DatePrecise object, a Date object, a DOMHighResTimeStamp, a 'Number' of milliseconds or a hrtime.) 
   * @param month The number of the month from 0 (January) to 11 (December)
   * @param day The number of the day from 1 to 31
   * @param hours The number of the hour from 0 to 23
   * @param minutes The number of the minute from 0 to 59
   * @param seconds The number of the second from 0 to 59
   * @param milliseconds The number of the millisecond from 0 to 999
   * @param microseconds The number of the microsecond from 0 to 999
   * @param nanoseconds The number of the nanosecond from 0 to 999
   *
   * @returns HMIDatePrecise
   */
  (year?: ( HMIInt64 | HMIDatePrecise | any ), month?: number, day?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, microseconds?: number, nanoseconds?: number):HMIDatePrecise;
  Item(year?: ( HMIInt64 | HMIDatePrecise | any ), month?: number, day?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, microseconds?: number, nanoseconds?: number): HMIDatePrecise;
  /**
   * Get the time as DOMHighResTimeStamp
   *
   * The DOMHighResTimeStamp type is a double and is used to store a time value.
                    The value could be a discrete point in time (milliseconds since 1.1.1970) or the difference in time between
                    two discrete points in time. The unit is milliseconds and should be accurate to 5 µs (microseconds).
   *
   * @returns DOMHighResTimeStamp
   */
  valueOf(): DOMHighResTimeStamp;
  /**
   * Converts the value to a string
   *
   * The format of the string is yyyy-mm-dd hh:mm:ss.HundredNanoSeconds
                    (i.e.: 2020-07-04 11:30:22.5454118).
   *
   * @returns String
   */
  toString(): string;
  /**
   * Get the time as hrtime.
   *
   * The GetHrTime() method returns a high-resolution date
                    in a [seconds, nanoseconds] tuple Array.
                    i.e. 2020-10-04 11:30:22.5454118: [13238335822, 545411800] 
   *
   * @returns hrtime
   */
  GetHrTime(): hrtime;
  /**
   * Set the time as hrtime.
   *
   */
  SetHrTime(hrTime: number[]): void;
  /**
   * Get the time as DOMHighResTimeStamp
   *
   * @returns DOMHighResTimeStamp
   */
  GetTime(): DOMHighResTimeStamp;
  /**
   * Set the time as DOMHighResTimeStamp
   *
   */
  SetTime(time: number): void;
  /**
   * Get the number of microseconds (0 to 999)
   *
   * @returns UInt16
   */
  GetMicroseconds(): number;
  /**
   * Set the number of microseconds (0 to 999)
   *
   */
  SetMicroseconds(microSeconds: number): void;
  /**
   * Get the number of nanoseconds (0 to 999)
   *
   * @returns UInt16
   */
  GetNanoseconds(): number;
  /**
   * Set the number of nanoseconds (0 to 999)
   *
   */
  SetNanoseconds(nanoSeconds: number): void;
  /**
   * Get the time stamp as FILETIME (HMIUint64)
   *
   * @returns HMIInt64
   */
  GetFiletime(): HMIInt64;
  /**
   * Set the time stamp as FILETIME (HMIUint64)
   *
   */
  SetFiletime(fileTime?: ( HMIInt64 | any )): void;
}

interface HMIPlantObject {
  /**
   * Name of the HMIPlantObject
   */
  Name: HMIPlantObject;
  /**
   * Parent of the PlantObject. The base for the navigation is the ViewPath of the PlantObject.
   */
  Parent: HMIPlantObject;
  /**
   * Returns a HMIPlantObjectSet object
   *
   * The base for the navigation is the ViewPath of the PlantObject. Example use: var plantObjects = plantObject1.Children;
   */
  Children: any;
  /**
   * Map of the viewname to the path of the plantObject in that view.
   *
   * let pathCurrent = plantObject.PlantViewPaths[plantObject.CurrentPlantView];
let pathMaint = plantObject.PlantViewPaths["Maintenance"];
   */
  PlantViewPaths: string[][];
  /**
   * The name of the selected view of the plantObject object (e.g. 'Maintenance').
   *
   * "CurrentPlantView" selects the view which is used for navigation in the PlantObject view, e.g. for "Parent", "Children" and "GetChild". When a PlantObject is contained in multiple views, you have to set "CurrentPlantView" for the navigation.

examples:
// automatically selects the "Maintenance" view for further parent/children navigation 
let plantObject = PlantModel.GetPlantObject(".Maintenance::Plant1/Line3");
let maintChildren = plantObject.Children; // all children in the "Maintenance" view

// navigate in the "Technological" view
plantObject.CurrentPlantView = "Technological";
let techChildren = plantObject.Children; // all children in the "Technological" view

// the "CurrentPlantView" attribute of the returned children plantObjects is set to the same view as the plantObject object used for the navigation:
   */
  CurrentPlantView: string;
  /**
   * Last ErrorCode
   */
  LastError: number;
  /**
   * Collection of the visualization screens associated with plantObject.
   */
  InstanceScreens: string[];
  /**
   * Returns a PlantObject object
   *
   * The base for the navigation is the ViewPath of the PlantObject. Example use: var plantObjectChildPlantObject = plantObject1.GetChild('TemperatureSensor');
   *
   * @param ChildName Name of the child in the view.
   *
   * @returns HMIPlantObject
   */
  GetChild(ChildName: string): HMIPlantObject;
  /**
   * List of properties
   *
   * Example use: var plantObjectPropertySet = plantObject.GetProperties(['Speed', 'Temperature']);
   *
   *
   * @returns HMIPlantObjectPropertySet
   */
  GetProperties(propertyName?: ( string | string[] )): HMIPlantObjectPropertySet;
  /**
   * To get Active alarms of the PlantObject without starting and stopping subscription in script.
   *
   * Example "var promise = plan-tObject.GetActiveAlarms(1033);"
   *
   * @param IncludeChildren To indicate whether to include all the alarms belonging to children of current Plant object
   * @param Filter Filter for subscription
   *
   * @returns Promise
   */
  GetActiveAlarms(Language: number, IncludeChildren?: boolean, Filter?: string): Promise<HMIAlarmResult[]>;
  /**
   * To create subscription for alarm associated with a plant object
   *
   * Example "var po = PlantModel.GetPlantObject(".hierarchy::Node1\\Node2");
											var alarmsubscription = po.CreateAlarmSubscription(); "
   *
   * @returns HMIPlantObjectAlarmSubscription
   */
  CreateAlarmSubscription(): HMIPlantObjectAlarmSubscription;
}

interface HMIPlantObjectPropertySet {
  /**
   * The number of PlantObjectProperty in the PlantObjectPropertySet
   */
  Count: number;
  /**
   * Accesses a PlantObjectProperty object within the PlantObjectPropertySet
   *
   * @param name PlantObject name or index (0..n)
   *
   * @returns HMIPlantObjectProperty
   */
  (name: ( HMIPlantObjectProperty | string | number )):HMIPlantObjectProperty;
  Item(name: ( HMIPlantObjectProperty | string | number )): HMIPlantObjectProperty;
  /**
   * Accesses a PlantObjectProperty object within the PlantObjectPropertySet
   */
  Read(): void;
  /**
   * Reads the values of all HMIPlantObjectProperties in the PlantObjectPropertySet asynchronously using a Promise object.
   *
   * Reads the HMIPlantObjectProperties from the process images, sets all the members of the HMIPlantObjectProperties
The Promise will only be rejected when all items could not be read.
   *
   * @returns Promise
   */
  ReadAsync(): Promise<HMIPlantObjectPropertySet>;
  /**
   * Accesses a PlantObjectProperty object within the PlantObjectPropertySet
   */
  Write(): void;
  /**
   * Writes the values of all HMIPlantObjectProperties in the HMIPlantObjectPropertySet asynchronously using a Promise object.
   *
   * Writes the HMIPlantObjectProperty values, sets all the members of the HMIPlantObjectProperty.
The Promise will only be rejected when all items could not be written.
   *
   * @returns Promise
   */
  WriteAsync(): Promise<HMIPlantObjectPropertySet>;
  /**
   * Adds a single property or a set of properties into the property set.
   *
   * @param name Property names to be added to the property set
   *
   * @returns HMIPlantObjectProperty[]
   */
  Add(name: string): HMIPlantObjectProperty[];
  /**
   * Removes a single property or a set of properties from the property set.
   *
   * @param name Property names to be removed from the property set
   */
  Remove(name: string): void;
}

interface HMIPlantObjectProperty {
  /**
   * Name of the PlantObjectProperty
   */
  Name: string;
  /**
   * Value of the PlantObjectProperty
   */
  Value: any;
  /**
   * QualityCode of the Value
   */
  QualityCode: number;
  /**
   * TimeStamp of the Value
   */
  TimeStamp: number | string;
  /**
   * ErrorCode of the previous Read or Write operation
   */
  LastError: number;
  /**
   * Reads the value of the HMIPlantObjectProperty
   *
   * Reads the HMIPlantObjectProperty from the process images, sets all the members of the HMIPlantObjectProperty and returns the value.
   *
   * @returns Variant
   */
  Read(): any;
  /**
   * Writes the value of the HMIPlantObjectProperty.
   *
   * Writes the HMIPlantObjectProperty and, sets the attributes LastError and ErrorDescription. When the writeType hmiWriteNoWait is used,  the ErrorCode and LastError won't contain useful information.
   *
   */
  Write(value?: any): void;
}

interface HMIPlantObjectAlarmSubscription {
  /**
   * Filter for subscription
   */
  Filter: string;
  /**
   *  The language for all texts and also for the filter setting.
   */
  Language: number;
  /**
   * Array of system names
   */
  SystemNames: string[];
  /**
   * Callback function that is invoked to provide the alarm attributes through the AlarmResult array
   *
   * The prototype of the callback function needs to be: OnAlarm(errorCode, systemName, alarmResultArray)
   */
  OnAlarm: { (errorCode: number, systemName: string, alarmResultArray: ( HMIAlarmResult[] | any )): void };
  /**
   * To indicate whether to include all the alarms belonging to children of current Plant object
   */
  IncludeChildren: boolean;
  /**
   * To subscribe active alarms in scripting according to filter criteria given
   *
   * 
					Example "var po = PlantModel.GetPlantObject(".hierarchy::Node1\\Node2");
					var alarmsubscription = po.CreateAlarmSubscription(); // returns HMIPlantObjectAlarmSubscription 
					alarmsubscription.Language = 1033;
					alarmsubscription.OnAlarm = function(ErrorCode, SystemName, ResultSet) {
						for (let index in ResultSet) {
							HMIRuntime.Trace('Alarm Name_' + (index + 1) + ' = ' + ResultSet[index].Name);
							HMIRuntime.Trace(' Alarm State_' + (index + 1) + '= ' + ResultSet[index].State);
							HMIRuntime.Trace(' Alarm Area_' + (index + 1) + '= ' + ResultSet[index].Area);
						}
					};
					alarmsubscription.Filter = 'AlarmClassName=\'Alarm\'';
					alarmsubscription.IncludeChildren = true;
					alarmsubscription.Start();"
				
   *
   * @returns ErrorCode
   */
  Start(): number;
  /**
   * To cancel subscription for alarms
   *
   * 
					Example "var po = PlantModel.GetPlantObject(".hierarchy::Node1\\Node2");
					var alarmsubscription = po.CreateAlarmSubscription(); // returns HMIPlantObjectAlarmSubscription 
					alarmsubscription.Language = 1033;
					alarmsubscription.OnAlarm = function(ErrorCode, SystemName, ResultSet) {
						for (let index in ResultSet) {
							HMIRuntime.Trace('Alarm Name_' + (index + 1) + ' = ' + ResultSet[index].Name);
							HMIRuntime.Trace(' Alarm State_' + (index + 1) + '= ' + ResultSet[index].State);
							HMIRuntime.Trace(' Alarm Area_' + (index + 1) + '= ' + ResultSet[index].Area);
						}
					};
					alarmsubscription.Filter = 'AlarmClassName=\'Alarm\'';
					alarmsubscription.IncludeChildren = true;
					alarmsubscription.Start();"
				
   *
   * @returns ErrorCode
   */
  Stop(): number;
}

interface HMIPlantModel {
  /**
   * Last ErrorCode
   */
  LastError: number;
  /**
   * Returns a HMIPlantObject object
   *
   * Example 1 by view and path : var plantObject1 = PlantModel.GetPlantObject('.TechnologicalView::P1/S1/L2/LeftPump');
					Example 2 by HMIPlantObjectName : var plantObject2 = PlantModel.GetPlantObject('U4711');
   *
   * @param plantObject PlantObject path inside the view or a flat HMIPlantObjectName
   *
   * @returns HMIPlantObject
   */
  GetPlantObject(plantObject: ( HMIPlantObject | string )): HMIPlantObject;
  /**
   * Returns an array of HMIPlantObject objects
   *
   * Example use: var plantObjectArr = PlantModel.GetPlantObjectsByType("Motor");.
   *
   * @param PlantObjectType Name of a PlantObject type
   * @param ViewPath view path
   *
   * @returns HMIPlantObject[]
   */
  GetPlantObjectsByType(PlantObjectType: string, ViewPath?: string): HMIPlantObject[];
  /**
   * Returns an array of HMIPlantObject objects
   *
   * Example use: var plantObjectArr = PlantModel.GetPlantObjects(["PPP", "ABC"]);.
   *
   * @param PropertyNames list of property names
   * @param ViewPath view path
   *
   * @returns HMIPlantObject[]
   */
  GetPlantObjectsByPropertyNames(PropertyNames: ( HMIPlantObjectProperty | string | string[] ), ViewPath?: string): HMIPlantObject[];
  /**
   * Returns an array of HMIPlantObject objects
   *
   * Example use: var plantObjectArr = PlantModel.GetPlantObjectsByExpression("Temperature", "Motor", "Temperature>100");.
   *
   * @param PropertyNames list of property names
   * @param PlantObjectType Name of a PlantObject type
   * @param ExpressionFilter filter for property values
   * @param ViewPath view path
   *
   * @returns HMIPlantObject[]
   */
  GetPlantObjectsByExpression(PropertyNames: ( HMIPlantObjectProperty | string | string[] ), PlantObjectType: string, ExpressionFilter: string, ViewPath?: string): HMIPlantObject[];
}

interface HMIReportingSysFct {
  /**
   * Starts the specified report
   *
   * @param ReportTaskName Name of the report task
   *
   * @returns Promise
   */
  ExecuteReport(ReportTaskName: string): Promise<{}>;
}

interface HMIReporting {
  SysFct: HMIReportingSysFct;
}

interface HMIResourcesSysFct {
  /**
   * Retrieves a text from a text list based on index and selected language
   *
   * @param OutputText Tag to be filled with the selected text
   * @param index Index of the text list entry to be read
   * @param lcid LCID of the required language
   * @param TextListName Name of the text list
   *
   * @returns ErrorCode
   */
  LookUpText(OutputText: ( HMISetValueCommandBase | any ), index: any, lcid: number, TextListName: ( HMITextList | string )): number;
}

interface HMITextListEntry {
  /**
   * Index of an textlist entry
   */
  Index: number;
  /**
   * Retrieves an entry of a textlist
   *
   * @param lcid Language of the text
   *
   * @returns String
   */
  (lcid: number):string;
  Item(lcid: number): string;
}

interface HMITextList {
  /**
   * Name of the HMITextList
   */
  Name: HMITextList;
  /**
   * Retrieves an entry of a textlist
   *
   * @param index Index of TextList entry
   *
   * @returns HMITextListEntry
   */
  (index: number):HMITextListEntry;
  Item(index: number): HMITextListEntry;
}

interface HMITextLists {
  /**
   * Returns a HMITextList object
   *
   * Will normally be called as HMIRuntime.Resources.TextLists("textListName").
   *
   * @param textListName Name of the HMITextList
   *
   * @returns HMITextList
   */
  (textListName: ( HMITextList | string )):HMITextList;
  Item(textListName: ( HMITextList | string )): HMITextList;
}

interface HMIGraphic {
  /**
   * Fully qualified name of the graphic. example: "@GraphicLibrary.Home"
   */
  Name: string;
}

interface HMIGraphics {
  /**
   * Returns a HMIGraphic object
   *
   * Will normally be called as HMIRuntime.Resources.Graphics("@GraphicLibrary.Image3").
   *
   * @param graphicName Fully qualified name of the Graphic : "ContainerName.GraphicName" 
   *
   * @returns HMIGraphic
   */
  (graphicName: ( HMIGraphic | string )):HMIGraphic;
  Item(graphicName: ( HMIGraphic | string )): HMIGraphic;
}

interface HMIResources {
  /**
   * Used to access TextLists
   */
  TextLists: HMITextLists;
  /**
   * Used to access Graphics
   */
  Graphics: HMIGraphics;
  SysFct: HMIResourcesSysFct;
}

interface HmiUIEnums_HmiAggregationMode{
  /**
   * None
   */
  None: 0;
  /**
   * TimeAverageStepped
   */
  TimeAverageStepped: 1;
  /**
   * MinMax
   */
  MinMax: 2;
}

interface HmiUIEnums_HmiAlarmBlock{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * ID
   *
   * Alarm Identification
   */
  ID: 1;
  /**
   * Name
   */
  Name: 2;
  /**
   * Class
   */
  Class: 3;
  /**
   * Priority
   */
  Priority: 4;
  /**
   * Group
   */
  Group: 5;
  /**
   * Origin
   */
  Origin: 6;
  /**
   * Area
   */
  Area: 7;
  /**
   * Comments
   *
   * selects detailed view of an alarm; contains additionally the info text, the alarm parameter values and comments.
   */
  Comments: 8;
  /**
   * Information
   */
  Information: 9;
  /**
   * LoopInAlarm
   *
   * navigate to alarm source aka loop-in-alarm (at the moment only one target, later on context menu with 0..* targets)
   */
  LoopInAlarm: 10;
  /**
   * EventText
   */
  EventText: 11;
  /**
   * AlarmText1
   */
  AlarmText1: 12;
  /**
   * AlarmText2
   */
  AlarmText2: 13;
  /**
   * AlarmText3
   */
  AlarmText3: 14;
  /**
   * AlarmText4
   */
  AlarmText4: 15;
  /**
   * AlarmText5
   */
  AlarmText5: 16;
  /**
   * AlarmText6
   */
  AlarmText6: 17;
  /**
   * AlarmText7
   */
  AlarmText7: 18;
  /**
   * AlarmText8
   */
  AlarmText8: 19;
  /**
   * AlarmText9
   */
  AlarmText9: 20;
  /**
   * AlarmState
   */
  AlarmState: 21;
  /**
   * ModificationTime
   */
  ModificationTime: 22;
  /**
   * RaiseTime
   */
  RaiseTime: 23;
  /**
   * AcknowledgeTime
   */
  AcknowledgeTime: 24;
  /**
   * ClearTime
   */
  ClearTime: 25;
  /**
   * ResetTime
   */
  ResetTime: 26;
  /**
   * SuppresionsState
   */
  SuppresionsState: 27;
  /**
   * EscalationLevel
   */
  EscalationLevel: 28;
  /**
   * Context
   */
  Context: 29;
  /**
   * Duration
   */
  Duration: 30;
  /**
   * AcknowledgmentState
   */
  AcknowledgmentState: 31;
  /**
   * Value
   */
  Value: 32;
  /**
   * ValueQuality
   */
  ValueQuality: 33;
  /**
   * ValueLimit
   */
  ValueLimit: 34;
  /**
   * HostName
   */
  HostName: 36;
  /**
   * UserName
   */
  UserName: 37;
  /**
   * ProcessValue1
   */
  ProcessValue1: 38;
  /**
   * ProcessValue2
   */
  ProcessValue2: 39;
  /**
   * ProcessValue3
   */
  ProcessValue3: 40;
  /**
   * ProcessValue4
   */
  ProcessValue4: 41;
  /**
   * ProcessValue5
   */
  ProcessValue5: 42;
  /**
   * ProcessValue6
   */
  ProcessValue6: 43;
  /**
   * ProcessValue7
   */
  ProcessValue7: 44;
  /**
   * ProcessValue8
   */
  ProcessValue8: 45;
  /**
   * ProcessValue9
   */
  ProcessValue9: 46;
  /**
   * ProcessValue10
   */
  ProcessValue10: 47;
  /**
   * ClassSymbol
   */
  ClassSymbol: 48;
  /**
   * StateText
   */
  StateText: 49;
  /**
   * GroupID
   */
  GroupID: 50;
}

interface HmiUIEnums_HmiAlarmControlID{
  /**
   * None
   */
  None: 0;
  /**
   * AlarmStatisticsView
   *
   * Operation
   */
  AlarmStatisticsView: 5;
  /**
   * AlarmAnnunciator
   *
   * Operation
   */
  AlarmAnnunciator: 7;
  /**
   * SingleAcknowledgment
   *
   * Operation
   */
  SingleAcknowledgment: 8;
  /**
   * GroupAcknowledgment
   *
   * Operation
   */
  GroupAcknowledgment: 9;
  /**
   * AlwaysShowRecent
   *
   * Operation
   */
  AlwaysShowRecent: 10;
  /**
   * SelectionDisplay
   *
   * Operation
   */
  SelectionDisplay: 11;
  /**
   * DisplayOptionsSetup
   *
   * Operation
   */
  DisplayOptionsSetup: 12;
  /**
   * DisabledAlarmsSetup
   *
   * Operation
   */
  DisabledAlarmsSetup: 13;
  /**
   * FirstLine
   *
   * Operation
   */
  FirstLine: 14;
  /**
   * PreviousLine
   *
   * Operation
   */
  PreviousLine: 15;
  /**
   * NextLine
   *
   * Operation
   */
  NextLine: 16;
  /**
   * LastLine
   *
   * Operation
   */
  LastLine: 17;
  /**
   * InfoTextSetup
   *
   * Operation
   */
  InfoTextSetup: 18;
  /**
   * CommentsSetup
   *
   * Operation
   */
  CommentsSetup: 19;
  /**
   * DisableAlarm
   *
   * Operation
   */
  DisableAlarm: 21;
  /**
   * EnableAlarm
   *
   * Operation
   */
  EnableAlarm: 22;
  /**
   * ShelveAlarm
   *
   * Operation
   */
  ShelveAlarm: 23;
  /**
   * UnshelveAlarm
   *
   * Operation
   */
  UnshelveAlarm: 24;
  /**
   * SortSetup
   *
   * Operation
   */
  SortSetup: 25;
  /**
   * TimeBaseSetup
   *
   * Operation
   */
  TimeBaseSetup: 26;
  /**
   * CopyLines
   *
   * Operation
   */
  CopyLines: 27;
  /**
   * PreviousPage
   *
   * Operation
   */
  PreviousPage: 28;
  /**
   * NextPage
   *
   * Operation
   */
  NextPage: 29;
  /**
   * TimeBase
   *
   * Output
   */
  TimeBase: 256;
  /**
   * Date
   *
   * Output
   */
  Date: 257;
  /**
   * Time
   *
   * Output
   */
  Time: 258;
  /**
   * PendingAlarms
   *
   * Output
   */
  PendingAlarms: 259;
  /**
   * Alarms
   *
   * Output
   */
  Alarms: 260;
  /**
   * PendingAcknowledgeableAlarms
   *
   * Output
   */
  PendingAcknowledgeableAlarms: 261;
  /**
   * PendingShelvedAlarms
   *
   * Output
   */
  PendingShelvedAlarms: 262;
  /**
   * Selection
   *
   * Output
   */
  Selection: 263;
  /**
   * DisplayOption
   *
   * Output
   */
  DisplayOption: 264;
  /**
   * Disabled
   *
   * Output
   */
  Disabled: 265;
  /**
   * HasPendingShelvedAlarms
   *
   * Output
   */
  HasPendingShelvedAlarms: 272;
  /**
   * ConnectionStatus
   *
   * Output
   */
  ConnectionStatus: 273;
  /**
   * ShowActiveAlarms
   *
   * Operation
   */
  ShowActiveAlarms: 31;
  /**
   * ShowLoggedAlarms
   *
   * Operation
   */
  ShowLoggedAlarms: 32;
  /**
   * ShowLoggedAlarmsUpdated
   *
   * Operation
   */
  ShowLoggedAlarmsUpdated: 33;
  /**
   * ShowDefinedAlarms
   *
   * Operation
   */
  ShowDefinedAlarms: 34;
  /**
   * SingleReset
   *
   * Operation
   */
  SingleReset: 35;
  /**
   * Export
   *
   * Operation
   */
  Export: 36;
  /**
   * MoveToNextAcknowledgeableAlarm
   *
   * Operation
   */
  MoveToNextAcknowledgeableAlarm: 37;
  /**
   * StartTime
   *
   * Output
   */
  StartTime: 274;
  /**
   * EndTime
   *
   * Output
   */
  EndTime: 275;
  /**
   * CurrentContextHint
   *
   * Output (Describes the active context filter, e.g. product == Apple Juice)
   */
  CurrentContextHint: 276;
  /**
   * SelectContext
   *
   * Operation (Display "context selection" dialogue)
   */
  SelectContext: 38;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 277;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
  /**
   * PendingResettableAlarms
   *
   * Output (Shows number of alarms that can be resetted)
   */
  PendingResettableAlarms: 278;
  /**
   * StatisticsSetup
   *
   * Operation (displays "alarm statistics settings" dialogue)
   */
  StatisticsSetup: 39;
  /**
   * MaximumRecordsExceeded
   *
   * Output (shows that the number of records for the statistics view exceeds the MaximumRecords value)
   */
  MaximumRecordsExceeded: 279;
}

interface HmiUIEnums_HmiAlarmSourceType{
  /**
   * NotConfigured
   */
  NotConfigured: 0;
  /**
   * ActiveAlarms
   */
  ActiveAlarms: 1;
  /**
   * LoggedAlarms
   *
   * Historical data (replaces Classic's short term, but does not differentiate between short and long term anymore in IOWA)
   */
  LoggedAlarms: 2;
  /**
   * LoggedAlarmsUpdated
   *
   * Historical data, updates in the archive get notified.
   */
  LoggedAlarmsUpdated: 3;
  /**
   * AlarmDefinition
   *
   * The configuration view consideres the flags defined in ConfigurationViewSetup.
   */
  AlarmDefinition: 4;
  /**
   * AlarmStatistics
   */
  AlarmStatistics: 5;
}

interface HmiUIEnums_HmiAlarmStatisticBlock{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * AverageRaisedRaised
   *
   * Average time between raise event of annunciated alarms and the raise event of subsequent annunciated alarms
   */
  AverageRaisedRaised: 4097;
  /**
   * AverageRaisedCleared
   *
   * Average time between raise event of annunciated alarms and their clear event
   */
  AverageRaisedCleared: 4098;
  /**
   * AverageRaisedAcknowledged
   *
   * Average time between raise event of annunciated alarms and their acknowledgment
   */
  AverageRaisedAcknowledged: 4099;
  /**
   * AverageRaisedReset
   *
   * Average time between raise event of annunciated alarms and their reset
   */
  AverageRaisedReset: 4100;
  /**
   * Frequency
   *
   * Number of annunciated alarms per time [hour|day|…]
   */
  Frequency: 4101;
  /**
   * SumRaisedRaised
   *
   * Sum of times between raise event of annunciated alarms and the raise event of subsequent annunciated alarms
   */
  SumRaisedRaised: 4102;
  /**
   * SumRaisedCleared
   *
   * Sum of times between raise event of annunciated alarms and their clear event 
   */
  SumRaisedCleared: 4103;
  /**
   * SumRaisedAcknowledged
   *
   * Sum of times between raise event of annunciated alarms and their acknowledgment 
   */
  SumRaisedAcknowledged: 4104;
  /**
   * SumRaisedReset
   *
   * Sum of times between raise event of annunciated alarms and their reset 
   */
  SumRaisedReset: 4105;
  /**
   * ID
   */
  ID: 1;
  /**
   * Name
   */
  Name: 2;
  /**
   * Class
   */
  Class: 3;
  /**
   * Priority
   */
  Priority: 4;
  /**
   * Group
   */
  Group: 5;
  /**
   * Origin
   */
  Origin: 6;
  /**
   * Area
   */
  Area: 7;
  /**
   * Comments
   */
  Comments: 8;
  /**
   * Information
   */
  Information: 9;
  /**
   * LoopInAlarm
   */
  LoopInAlarm: 10;
  /**
   * EventText
   */
  EventText: 11;
  /**
   * AlarmText1
   */
  AlarmText1: 12;
  /**
   * AlarmText2
   */
  AlarmText2: 13;
  /**
   * AlarmText3
   */
  AlarmText3: 14;
  /**
   * AlarmText4
   */
  AlarmText4: 15;
  /**
   * AlarmText5
   */
  AlarmText5: 16;
  /**
   * AlarmText6
   */
  AlarmText6: 17;
  /**
   * AlarmText7
   */
  AlarmText7: 18;
  /**
   * AlarmText8
   */
  AlarmText8: 19;
  /**
   * AlarmText9
   */
  AlarmText9: 20;
  /**
   * AlarmState
   */
  AlarmState: 21;
  /**
   * ModificationTime
   */
  ModificationTime: 22;
  /**
   * RaiseTime
   */
  RaiseTime: 23;
  /**
   * AcknowledgeTime
   */
  AcknowledgeTime: 24;
  /**
   * ClearTime
   */
  ClearTime: 25;
  /**
   * ResetTime
   */
  ResetTime: 26;
  /**
   * SuppressionState
   */
  SuppressionState: 27;
  /**
   * EscalationLevel
   */
  EscalationLevel: 28;
  /**
   * Context
   */
  Context: 29;
  /**
   * Duration
   */
  Duration: 30;
  /**
   * AcknowledgmentState
   */
  AcknowledgmentState: 31;
  /**
   * Value
   */
  Value: 32;
  /**
   * ValueQuality
   */
  ValueQuality: 33;
  /**
   * ValueLimit
   */
  ValueLimit: 34;
  /**
   * TagName
   */
  TagName: 35;
  /**
   * Computer
   */
  Computer: 36;
  /**
   * User
   */
  User: 37;
  /**
   * ProcessValue1
   */
  ProcessValue1: 38;
  /**
   * ProcessValue2
   */
  ProcessValue2: 39;
  /**
   * ProcessValue3
   */
  ProcessValue3: 40;
  /**
   * ProcessValue4
   */
  ProcessValue4: 41;
  /**
   * ProcessValue5
   */
  ProcessValue5: 42;
  /**
   * ProcessValue6
   */
  ProcessValue6: 43;
  /**
   * ProcessValue7
   */
  ProcessValue7: 44;
  /**
   * ProcessValue8
   */
  ProcessValue8: 45;
  /**
   * ProcessValue9
   */
  ProcessValue9: 46;
  /**
   * ProcessValue10
   */
  ProcessValue10: 47;
  /**
   * ClassSymbol
   */
  ClassSymbol: 48;
  /**
   * StateText
   */
  StateText: 49;
}

interface HmiUIEnums_HmiApplicationState{
  /**
   * None
   */
  None: 0;
  /**
   * Running
   */
  Running: 1;
  /**
   * Terminated
   */
  Terminated: 2;
  /**
   * Crashed
   */
  Crashed: 3;
  /**
   * CreateFailed
   */
  CreateFailed: 4;
}

interface HmiUIEnums_HmiBackgroundFillMode{
  /**
   * Window
   *
   * The background is filled to fit the windows’s size.
   */
  Window: 0;
  /**
   * Screen
   *
   * The background is filled to fit the screen's size.
   */
  Screen: 1;
}

interface HmiUIEnums_HmiBarMode{
  /**
   * Segmented
   */
  Segmented: 0;
  /**
   * Unicolor
   *
   * was "Entire"
   */
  Unicolor: 1;
  /**
   * SegmentedStatic
   *
   * Full segments are in background. ProcessValueIndicator is moving in front of segments. Migration hint: Was called ColorGradient:Segmented in TIA Portal v14
   */
  SegmentedStatic: 2;
  /**
   * UnicolorStatic
   *
   * Background color changes according to current process value and limit colors. ProcessValueIndicator is moving in front of segments.
   */
  UnicolorStatic: 3;
}

interface HmiUIEnums_HmiCapType{
  /**
   * Square
   *
   * Caps are drawn outside of line end's coordinates with a factor of width/2.
   */
  Square: 256;
  /**
   * Round
   *
   * Caps are drawn outside of line end's coordinates with a factor of width/2.
   */
  Round: 0;
  /**
   * Flat
   *
   * Caps intersects the line end's coordinates. (Migration hint: Was called "Flush" in Classic)
   */
  Flat: 512;
}

interface HmiUIEnums_HmiCharSet{
  /**
   * Console
   *
   * depends on OS setting (at runtime)
   */
  Console: 0;
  /**
   * UTF8
   */
  UTF8: 1;
  /**
   * UTF16
   */
  UTF16: 2;
}

interface HmiUIEnums_HmiClientInfoType{
  /**
   * None
   */
  None: 0;
  /**
   * PrimaryDisplayWidth
   *
   * Width of primary display in DIU
   */
  PrimaryDisplayWidth: 1;
  /**
   * PrimaryDisplayHeight
   *
   * Height of primary display in DIU
   */
  PrimaryDisplayHeight: 2;
  /**
   * PrimaryDisplayPixelRatio
   *
   * Ratio of pixel to DIU for primary display (e.g. 1.5: 1000 DIU = 1500 pixel)
   */
  PrimaryDisplayPixelRatio: 3;
}

interface HmiUIEnums_HmiContentMode{
  /**
   * GraphicOrText
   *
   * Graphic has priority. If no graphic is available, text is used instead.
   */
  GraphicOrText: 0;
  /**
   * GraphicAndText
   */
  GraphicAndText: 1;
  /**
   * Text
   */
  Text: 2;
  /**
   * Graphic
   */
  Graphic: 3;
}

interface HmiUIEnums_HmiDashType{
  /**
   * Solid
   */
  Solid: 0;
  /**
   * Dash
   */
  Dash: 1;
  /**
   * Dot
   */
  Dot: 2;
  /**
   * DashDot
   */
  DashDot: 3;
  /**
   * DashDotDot
   */
  DashDotDot: 4;
}

interface HmiUIEnums_HmiDataGridHeaderType{
  /**
   * None
   */
  None: 0;
  /**
   * Index
   *
   * Number indicating the current line number or comparable.
   */
  Index: 1;
  /**
   * Content
   *
   * Applies only for columns. For rows to be considered later. The content feature settings is used
   */
  Content: 2;
}

interface HmiUIEnums_HmiDetailedParameterControlBlock{
  /**
   * None
   */
  None: 0;
  /**
   * ParameterSetElementName
   *
   * Has to be available always
   */
  ParameterSetElementName: 1;
  /**
   * ParameterSetValue
   *
   * Has to be available always
   */
  ParameterSetValue: 2;
  /**
   * ParameterSetElementUnit
   */
  ParameterSetElementUnit: 3;
}

interface HmiUIEnums_HmiDetailedParameterControlID{
  /**
   * None
   */
  None: 0;
  /**
   * Save
   *
   * Operation
   */
  Save: 49;
  /**
   * Create
   *
   * Operation
   */
  Create: 48;
  /**
   * SaveAs
   *
   * Operation
   */
  SaveAs: 50;
  /**
   * Delete
   *
   * Operation
   */
  Delete: 51;
  /**
   * Rename
   *
   * Operation
   */
  Rename: 52;
  /**
   * WriteToPLC
   *
   * Operation
   */
  WriteToPLC: 53;
  /**
   * ReadFromPLC
   *
   * Operation
   */
  ReadFromPLC: 54;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 256;
  /**
   * Export
   *
   * Operation
   */
  Export: 36;
  /**
   * Import
   *
   * Operation
   */
  Import: 37;
  /**
   * Cancel
   *
   * Operation
   */
  Cancel: 38;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
}

interface HmiUIEnums_HmiDisplayViewType{
  /**
   * Standard
   *
   * Default-specific default... usually list
   */
  Standard: 0;
  /**
   * List
   */
  List: 1;
  /**
   * Details
   */
  Details: 2;
  /**
   * SmallIcons
   */
  SmallIcons: 3;
  /**
   * MediumIcons
   */
  MediumIcons: 4;
  /**
   * LargeIcons
   */
  LargeIcons: 5;
}

interface HmiUIEnums_HmiEditMode{
  /**
   * None
   */
  None: 0;
  /**
   * Update
   */
  Update: 1;
  /**
   * Create
   */
  Create: 2;
  /**
   * Delete
   */
  Delete: 4;
}

interface HmiUIEnums_HmiEventTrigger{
  /**
   * Unknown
   */
  Unknown: 0;
  /**
   * Touch
   *
   * The event was triggered by a touch device.
   */
  Touch: 1;
  /**
   * Left
   *
   * The event was triggered by the left button of a mouse device.
   */
  Left: 16;
  /**
   * Middle
   *
   * The event was triggered by the middle button of a mouse device.
   */
  Middle: 17;
  /**
   * Right
   *
   * The event was triggered by the right button of a mouse device.
   */
  Right: 18;
  /**
   * Enter
   *
   * The event was triggered by the enter key of a keyboard.
   */
  Enter: 256;
  /**
   * Space
   *
   * The event was triggered by the space key of a keyboard.
   */
  Space: 257;
  /**
   * Escape
   *
   * The event was triggered by the escape key of a keyboard.
   */
  Escape: 258;
}

interface HmiUIEnums_HmiFillDirection{
  /**
   * BottomToTop
   */
  BottomToTop: 0;
  /**
   * TopToBottom
   */
  TopToBottom: 1;
  /**
   * LeftToRight
   */
  LeftToRight: 2;
  /**
   * RightToLeft
   */
  RightToLeft: 3;
}

interface HmiUIEnums_HmiFillPattern{
  /**
   * Solid
   */
  Solid: 0;
  /**
   * Transparent
   */
  Transparent: 65536;
  /**
   * BackwardDiagonal
   */
  BackwardDiagonal: 131075;
  /**
   * Cross
   */
  Cross: 131076;
  /**
   * DiagonalCross
   */
  DiagonalCross: 131077;
  /**
   * ForwardDiagonal
   */
  ForwardDiagonal: 131074;
  /**
   * Horizontal
   */
  Horizontal: 131072;
  /**
   * Vertical
   */
  Vertical: 131073;
  /**
   * GradientHorizontal
   */
  GradientHorizontal: 1048576;
  /**
   * GradientVertical
   */
  GradientVertical: 1048577;
  /**
   * GradientForwardDiagonal
   */
  GradientForwardDiagonal: 1048578;
  /**
   * GradientBackwardDiagonal
   */
  GradientBackwardDiagonal: 1048579;
  /**
   * GradientHorizontalTricolor
   */
  GradientHorizontalTricolor: 1048832;
  /**
   * GradientVerticalTricolor
   */
  GradientVerticalTricolor: 1048833;
  /**
   * GradientForwardDiagonalTricolor
   */
  GradientForwardDiagonalTricolor: 1048834;
  /**
   * GradientBackwardDiagonalTricolor
   */
  GradientBackwardDiagonalTricolor: 1048835;
}

interface HmiUIEnums_HmiFlashingCondition{
  /**
   * Never
   */
  Never: 0;
  /**
   * Always
   */
  Always: 1;
  /**
   * RangeViolation
   */
  RangeViolation: 2;
}

interface HmiUIEnums_HmiFlashingRate{
  /**
   * Slow
   *
   * 2 s
   */
  Slow: 0;
  /**
   * Medium
   *
   * 1 s
   */
  Medium: 1;
  /**
   * Fast
   *
   * 500 ms
   */
  Fast: 2;
  /**
   * None
   *
   * Flashing disabled
   */
  None: 255;
}

interface HmiUIEnums_HmiFlipMode{
  /**
   * None
   */
  None: 0;
  /**
   * Horizontal
   *
   * Flipping horizontal means flipping against vertical axis.
   */
  Horizontal: 1;
}

interface HmiUIEnums_HmiFontStrikeOut{
  /**
   * None
   */
  None: 0;
  /**
   * Single
   */
  Single: 1;
}

interface HmiUIEnums_HmiFontWeight{
  /**
   * Light
   */
  Light: 300;
  /**
   * Normal
   */
  Normal: 400;
  /**
   * SemiBold
   */
  SemiBold: 600;
  /**
   * Bold
   */
  Bold: 700;
  /**
   * None
   */
  None: 0;
}

interface HmiUIEnums_HmiFunctionTrendControlID{
  /**
   * None
   */
  None: 0;
  /**
   * Ruler
   *
   * Operation
   */
  Ruler: 3;
  /**
   * ZoomArea
   *
   * Operation
   */
  ZoomArea: 4;
  /**
   * ZoomPlusMinus
   *
   * Operation
   */
  ZoomPlusMinus: 5;
  /**
   * ZoomXAxisPlusMinus
   *
   * Operation
   */
  ZoomXAxisPlusMinus: 7;
  /**
   * ZoomYAxisPlusMinus
   *
   * Operation
   */
  ZoomYAxisPlusMinus: 8;
  /**
   * MoveTrendArea
   *
   * Operation
   */
  MoveTrendArea: 9;
  /**
   * MoveAxesArea
   *
   * Operation
   */
  MoveAxesArea: 10;
  /**
   * OriginalView
   *
   * Operation
   */
  OriginalView: 11;
  /**
   * SelectDataConnection
   *
   * Operation
   */
  SelectDataConnection: 12;
  /**
   * SelectTrends
   *
   * Operation
   */
  SelectTrends: 13;
  /**
   * SelectTimeRange
   *
   * Operation
   */
  SelectTimeRange: 14;
  /**
   * PreviousTrend
   *
   * Operation
   */
  PreviousTrend: 15;
  /**
   * NextTrend
   *
   * Operation
   */
  NextTrend: 16;
  /**
   * StartStop
   *
   * Operation
   */
  StartStop: 17;
  /**
   * ConnectionStatus
   *
   * Output
   */
  ConnectionStatus: 256;
  /**
   * Print
   *
   * Operation
   */
  Print: 30;
  /**
   * Export
   *
   * Operation
   */
  Export: 36;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 277;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
}

interface HmiUIEnums_HmiGesture{
  /**
   * SwipeLeft
   */
  SwipeLeft: 1;
  /**
   * SwipeRight
   */
  SwipeRight: 2;
  /**
   * SwipeUp
   */
  SwipeUp: 3;
  /**
   * SwipeDown
   */
  SwipeDown: 4;
  /**
   * Unknown
   */
  Unknown: 0;
}

interface HmiUIEnums_HmiGmpSetting{
  /**
   * None
   */
  None: 0;
  /**
   * GmpRelevant
   *
   * LogOperation
   */
  GmpRelevant: 1;
  /**
   * CommentRequired
   *
   * AskOperationMotive
   */
  CommentRequired: 2;
  /**
   * AcknowledgmentConfirmation
   */
  AcknowledgmentConfirmation: 4;
  /**
   * ElectronicSignatureConfirmation
   */
  ElectronicSignatureConfirmation: 8;
}

interface HmiUIEnums_HmiGraphicStretchMode{
  /**
   * None
   *
   * The graphic is not scaled and centered if not configured explicitly via a separate property.
   */
  None: 0;
  /**
   * Fill
   *
   * was "Stretch"
   */
  Fill: 1;
  /**
   * Uniform
   *
   * The graphic uses all the available space of the control without changing the aspect ratio. The graphic is not clipped, there might be transparent space either horizontally or vertically.
   */
  Uniform: 2;
  /**
   * UniformToFill
   *
   * The graphic uses all the available space of the control without changing the aspect ratio. The graphic is clipped so that there is no transparent space either horizontally or vertically.
   */
  UniformToFill: 3;
  /**
   * Tiled
   *
   * The graphic is not scaled but repeated in a tiled fashion.
   */
  Tiled: 4;
}

interface HmiUIEnums_HmiGraphOverviewBlock{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * Step
   *
   * Step
   */
  Step: 1;
  /**
   * StepName
   *
   * Step Name
   */
  StepName: 2;
}

interface HmiUIEnums_HmiGridColoringMode{
  /**
   * None
   */
  None: 0;
  /**
   * Columns
   */
  Columns: 1;
  /**
   * Rows
   */
  Rows: 2;
}

interface HmiUIEnums_HmiGridLine{
  /**
   * None
   */
  None: 0;
  /**
   * VerticalMajor
   *
   * Vertical Coarse
   */
  VerticalMajor: 1;
  /**
   * HorizontalMajor
   *
   * Horizontal Coarse
   */
  HorizontalMajor: 2;
  /**
   * VerticalMinor
   *
   * Vertical Fine
   */
  VerticalMinor: 4;
  /**
   * HorizontalMinor
   *
   * Horizontal Fine
   */
  HorizontalMinor: 8;
}

interface HmiUIEnums_HmiGridSelectionMode{
  /**
   * None
   */
  None: 0;
  /**
   * Single
   */
  Single: 1;
  /**
   * Multi
   */
  Multi: 2;
}

interface HmiUIEnums_HmiHorizontalAlignment{
  /**
   * Left
   */
  Left: 0;
  /**
   * Center
   */
  Center: 1;
  /**
   * Right
   */
  Right: 2;
  /**
   * Stretch
   *
   * only applicable with layout containers; fallback behaves like Center
   */
  Stretch: 3;
}

interface HmiUIEnums_HmiIOFieldType{
  /**
   * Output
   */
  Output: 0;
  /**
   * InputOutput
   */
  InputOutput: 2;
}

interface HmiUIEnums_HmiKeyboardModifier{
  /**
   * None
   */
  None: 0;
  /**
   * Control
   */
  Control: 1;
  /**
   * Shift
   */
  Shift: 2;
  /**
   * Alt
   */
  Alt: 4;
}

interface HmiUIEnums_HmiLineEndType{
  /**
   * Line
   */
  Line: 0;
  /**
   * EmptyArrow
   *
   * was "Arrow"
   */
  EmptyArrow: 1;
  /**
   * Arrow
   *
   * was "FilledArrow"
   */
  Arrow: 2;
  /**
   * ReversedArrow
   *
   * was "FilledArrowReversed"
   */
  ReversedArrow: 3;
  /**
   * EmptyCircle
   *
   * was "Circle"
   */
  EmptyCircle: 5;
  /**
   * Circle
   *
   * was "FilledCircle"
   */
  Circle: 6;
}

interface HmiUIEnums_HmiLineJoinType{
  /**
   * Round
   */
  Round: 0;
  /**
   * Bevel
   *
   * was "Flat"
   */
  Bevel: 4096;
  /**
   * Miter
   *
   * was "Pointed"
   */
  Miter: 8192;
}

interface HmiUIEnums_HmiMarkerType{
  /**
   * None
   */
  None: 0;
  /**
   * Point
   */
  Point: 1;
  /**
   * Square
   */
  Square: 2;
  /**
   * Circle
   */
  Circle: 3;
  /**
   * Graphic
   */
  Graphic: 4;
}

interface HmiUIEnums_HmiMeasurementUnit{
  /**
   * None
   */
  None: 0;
  /**
   * Name
   *
   * e.g. "Kilogramm"
   */
  Name: 1;
  /**
   * Symbol
   *
   * e.g. "kg"
   */
  Symbol: 2;
}

interface HmiUIEnums_HmiMediaControlID{
  /**
   * None
   */
  None: 0;
  /**
   * Play
   *
   * Operation
   */
  Play: 1;
  /**
   * Pause
   *
   * Operation
   */
  Pause: 2;
  /**
   * Stop
   *
   * Operation
   */
  Stop: 3;
  /**
   * SeekForward
   *
   * Operation
   */
  SeekForward: 4;
  /**
   * SeekBackward
   *
   * Operation
   */
  SeekBackward: 5;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 277;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
  /**
   * Mute
   *
   * Operation
   */
  Mute: 6;
}

interface HmiUIEnums_HmiOpenLinkMode{
  /**
   * None
   */
  None: 0;
  /**
   * Create
   *
   * create or terminate external process
   */
  Create: 1;
  /**
   * CreateAndConnect
   *
   * create pipe and close pipe
   */
  CreateAndConnect: 2;
  /**
   * Connect
   *
   * use a named pipe that already exists; (connect and disconnect)
   */
  Connect: 3;
}

interface HmiUIEnums_HmiOperability{
  /**
   * Operable
   */
  Operable: 0;
  /**
   * DisabledProgrammatically
   */
  DisabledProgrammatically: 1;
  /**
   * NoAuthorization
   */
  NoAuthorization: 2;
  /**
   * NoExplicitUnlock
   */
  NoExplicitUnlock: 4;
}

interface HmiUIEnums_HmiOrientation{
  /**
   * Horizontal
   */
  Horizontal: 0;
  /**
   * Vertical
   */
  Vertical: 1;
}

interface HmiUIEnums_HmiOverviewParameterControlBlock{
  /**
   * None
   */
  None: 0;
  /**
   * ParameterSetID
   */
  ParameterSetID: 1;
  /**
   * LastUser
   */
  LastUser: 2;
  /**
   * LastAccess
   */
  LastAccess: 3;
  /**
   * ParameterSetElementOdd
   *
   * Generic columns; starting at 1
   */
  ParameterSetElementOdd: 4;
  /**
   * ParameterSetElementEven
   *
   * Generic columns; starting at 2
   */
  ParameterSetElementEven: 5;
}

interface HmiUIEnums_HmiOverviewParameterControlID{
  /**
   * None
   */
  None: 0;
  /**
   * Help
   *
   * Operation
   */
  Help: 1;
  /**
   * Configuration
   *
   * Operation
   */
  Configuration: 2;
  /**
   * FirstLine
   *
   * Operation
   */
  FirstLine: 3;
  /**
   * PreviousLine
   *
   * Operation
   */
  PreviousLine: 4;
  /**
   * NextLine
   *
   * Operation
   */
  NextLine: 5;
  /**
   * LastLine
   *
   * Operation
   */
  LastLine: 6;
  /**
   * TimeBase
   *
   * Output
   */
  TimeBase: 256;
  /**
   * Date
   *
   * Output
   */
  Date: 257;
  /**
   * Time
   *
   * Output
   */
  Time: 258;
  /**
   * Column
   *
   * Output
   */
  Column: 259;
  /**
   * Row
   *
   * Output
   */
  Row: 260;
  /**
   * ParameterSetTypeName
   *
   * Output
   */
  ParameterSetTypeName: 261;
  /**
   * ConnectionStatus
   *
   * Output
   */
  ConnectionStatus: 262;
  /**
   * Selection
   *
   * Output
   */
  Selection: 263;
  /**
   * DeleteLine
   *
   * Operation
   */
  DeleteLine: 7;
  /**
   * CutLine
   *
   * Operation
   */
  CutLine: 8;
  /**
   * CopyLine
   *
   * Operation
   */
  CopyLine: 9;
  /**
   * InsertLine
   *
   * Operation
   */
  InsertLine: 16;
  /**
   * WriteToPLC
   *
   * Operation
   */
  WriteToPLC: 17;
  /**
   * ReadFromPLC
   *
   * Operation
   */
  ReadFromPLC: 18;
  /**
   * Status
   *
   * Output
   */
  Status: 264;
  /**
   * SortSetup
   *
   * Operation
   */
  SortSetup: 19;
  /**
   * TimeBaseSetup
   *
   * Operation
   */
  TimeBaseSetup: 20;
  /**
   * SelectParameterSetType
   *
   * Operation
   */
  SelectParameterSetType: 21;
  /**
   * Print
   *
   * Operation
   */
  Print: 30;
  /**
   * Export
   *
   * Operation
   */
  Export: 36;
  /**
   * Import
   *
   * Operation
   */
  Import: 37;
  /**
   * Cancel
   *
   * Operation
   */
  Cancel: 38;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 277;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
}

interface HmiUIEnums_HmiPeakIndicator{
  /**
   * None
   */
  None: 0;
  /**
   * Low
   */
  Low: 1;
  /**
   * High
   */
  High: 2;
}

interface HmiUIEnums_HmiPipeConnectionState{
  /**
   * Unavailable
   *
   * Initial state or closed
   */
  Unavailable: 0;
  /**
   * Connected
   */
  Connected: 1;
  /**
   * Disconnected
   */
  Disconnected: 2;
}

interface HmiUIEnums_HmiProcessControlID{
  /**
   * None
   */
  None: 0;
  /**
   * FirstRecord
   *
   * Operation
   */
  FirstRecord: 3;
  /**
   * PreviousRecord
   *
   * Operation
   */
  PreviousRecord: 4;
  /**
   * NextRecord
   *
   * Operation
   */
  NextRecord: 5;
  /**
   * LastRecord
   *
   * Operation
   */
  LastRecord: 6;
  /**
   * Edit
   *
   * Operation
   */
  Edit: 7;
  /**
   * SelectDataConnection
   *
   * Operation
   */
  SelectDataConnection: 9;
  /**
   * SelectTimeRange
   *
   * Operation
   */
  SelectTimeRange: 11;
  /**
   * PreviousColumn
   *
   * Operation
   */
  PreviousColumn: 12;
  /**
   * NextColumn
   *
   * Operation
   */
  NextColumn: 13;
  /**
   * StartStop
   *
   * Operation
   */
  StartStop: 14;
  /**
   * CreateArchiveValue
   *
   * Operation
   */
  CreateArchiveValue: 17;
  /**
   * TimeBase
   *
   * Output
   */
  TimeBase: 256;
  /**
   * Date
   *
   * Output
   */
  Date: 257;
  /**
   * Time
   *
   * Output
   */
  Time: 258;
  /**
   * ConnectionStatus
   *
   * Output
   */
  ConnectionStatus: 259;
  /**
   * Column
   *
   * Output
   */
  Column: 260;
  /**
   * Row
   *
   * Output
   */
  Row: 261;
  /**
   * Export
   *
   * Operation
   */
  Export: 36;
  /**
   * StartTime
   *
   * Output
   */
  StartTime: 274;
  /**
   * EndTime
   *
   * Output
   */
  EndTime: 275;
  /**
   * CurrentContextHint
   *
   * Output (Describes the active context filter, e.g. product == Apple Juice)
   */
  CurrentContextHint: 276;
  /**
   * DeleteArchiveValue
   *
   * Operation
   */
  DeleteArchiveValue: 18;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 277;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
}

interface HmiUIEnums_HmiProcessDiagnosisCriteriaAnalysisBlock{
  /**
   * SymbolName
   */
  SymbolName: 0;
  /**
   * Address
   */
  Address: 1;
  /**
   * Value
   */
  Value: 2;
  /**
   * Comment
   */
  Comment: 3;
}

interface HmiUIEnums_HmiProcessDiagnosisCriteriaAnalysisControlID{
  /**
   * None
   */
  None: 0;
  /**
   * ConnectionStatus
   */
  ConnectionStatus: 256;
}

interface HmiUIEnums_HmiProcessDiagnosisDetailViewType{
  /**
   * None
   *
   * PLC Code Viewer will not show the detail view if value is None
   */
  None: 0;
  /**
   * Ladder
   *
   * PLC Code Viewer will show ladder diagram if this enum value is set
   */
  Ladder: 1;
  /**
   * FunctionBlock
   *
   * PLC Code Viewer will show function block diagram if this enum value is set
   */
  FunctionBlock: 2;
}

interface HmiUIEnums_HmiProcessDiagnosisGraphOverviewControlID{
  /**
   * None
   */
  None: 0;
  /**
   * NextStep
   */
  NextStep: 1;
  /**
   * JumpToAlarmControl
   */
  JumpToAlarmControl: 2;
  /**
   * JumpToPlcCodeViewer
   */
  JumpToPlcCodeViewer: 3;
  /**
   * JumpToTiaPortal
   */
  JumpToTiaPortal: 4;
  /**
   * CriteriaAnalysis
   */
  CriteriaAnalysis: 256;
  /**
   * StepState
   */
  StepState: 257;
  /**
   * ConnectionStatus
   */
  ConnectionStatus: 258;
}

interface HmiUIEnums_HmiProcessDiagnosisOverviewControlID{
  /**
   * None
   */
  None: 0;
  /**
   * JumpToAlarmControl
   */
  JumpToAlarmControl: 1;
  /**
   * Information
   */
  Information: 256;
  /**
   * ConnectionStatus
   */
  ConnectionStatus: 257;
}

interface HmiUIEnums_HmiProcessDiagnosisPlcCodeViewerControlID{
  /**
   * None
   */
  None: 0;
  /**
   * Previous
   */
  Previous: 1;
  /**
   * Next
   */
  Next: 2;
  /**
   * ZoomIn
   */
  ZoomIn: 3;
  /**
   * ZoomOut
   */
  ZoomOut: 4;
  /**
   * ToggleGRAPHMode
   */
  ToggleGRAPHMode: 5;
  /**
   * ToggleDetailView
   */
  ToggleDetailView: 7;
  /**
   * ToggleCriteriaAnalysis
   */
  ToggleCriteriaAnalysis: 8;
  /**
   * ConnectionStatus
   */
  ConnectionStatus: 256;
  /**
   * StatusText
   */
  StatusText: 257;
}

interface HmiUIEnums_HmiProcessIndicatorMode{
  /**
   * Bar
   */
  Bar: 0;
  /**
   * Indicator
   *
   * Hair-Line or Needle, depends on the actual screen item. Does not show the process value itself (as number).
   */
  Indicator: 1;
  /**
   * DetailedIndicator
   *
   * Floater or comparable, carries also the process value.
   */
  DetailedIndicator: 2;
  /**
   * BarWithDetailedIndicator
   */
  BarWithDetailedIndicator: 3;
}

interface HmiUIEnums_HmiQuality{
  /**
   * Bad
   */
  Bad: 1;
  /**
   * Uncertain
   */
  Uncertain: 2;
  /**
   * Good
   */
  Good: 4;
  /**
   * UpperLimitViolation
   */
  UpperLimitViolation: 64;
  /**
   * LowerLimitViolation
   */
  LowerLimitViolation: 128;
  /**
   * None
   *
   * Uninitialized or undefined.
   */
  None: 0;
}

interface HmiUIEnums_HmiRequestResult{
  /**
   * None
   */
  None: 0;
  /**
   * Success
   *
   * Request was successful
   */
  Success: 1;
  /**
   * AccessDenied
   *
   * Request was rejected because of missing authorization
   */
  AccessDenied: 2;
}

interface HmiUIEnums_HmiResourceListType{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * Text
   */
  Text: 1;
  /**
   * Graphic
   */
  Graphic: 2;
  /**
   * TextAndGraphic
   */
  TextAndGraphic: 3;
}

interface HmiUIEnums_HmiRotationCenterPlacement{
  /**
   * AbsoluteFromCenter
   *
   * In DIU. In absence of HmiBoxFeature absolute in relation to CenterX, CenterY, otherwise in relation to the box's natural center pointer.
   */
  AbsoluteFromCenter: 0;
  /**
   * NormedFromCenter
   *
   * In absence of HmiBoxFeature relative to CenterX, CenterY, otherwise relative to the box's natural center pointer. From -1 .. center .. 1 according to bounding box, surface or radius. (Values are not limited to the range of -1 and 1, rotation center can also be outside of the item)
   */
  NormedFromCenter: 1;
  /**
   * AbsoluteToContainer
   *
   * In DIU. Absolute distance in relation to the screen's 0,0-point (Top, Left)
   */
  AbsoluteToContainer: 2;
}

interface HmiUIEnums_HmiScaleMode{
  /**
   * None
   */
  None: 0;
  /**
   * Labels
   */
  Labels: 1;
  /**
   * Ticks
   */
  Ticks: 2;
}

interface HmiUIEnums_HmiScalingType{
  /**
   * Linear
   */
  Linear: 0;
  /**
   * Logarithmic
   */
  Logarithmic: 1;
  /**
   * NegativeLogarithmic
   */
  NegativeLogarithmic: 2;
  /**
   * Tangent
   */
  Tangent: 4;
  /**
   * Quadratic
   */
  Quadratic: 5;
  /**
   * Cubic
   */
  Cubic: 6;
}

interface HmiUIEnums_HmiScreenWindowAdaption{
  /**
   * None
   *
   * Neither the screen nor the screen window does adapt their sizes.
   */
  None: 0;
  /**
   * WindowToScreen
   *
   * The screen window adapts its size to fit to the configured screen that is cur-rently shown. To achieve this, the window is resized accordingly.
   */
  WindowToScreen: 1;
  /**
   * ScreenToWindow
   *
   * The screen adapts its size to fit to the configured window it is hosted in. To achieve this, the screen is zoomed accordingly.
   */
  ScreenToWindow: 2;
}

interface HmiUIEnums_HmiScrollBarVisibility{
  /**
   * Automatic
   *
   * The scrollbar is only shown if the content is larger than the available space.
   */
  Automatic: 0;
  /**
   * Visible
   *
   * The scrollbar is shown.
   */
  Visible: 1;
  /**
   * Collapsed
   *
   * The scrollbar is hidden and does not require any space in the UI.
   */
  Collapsed: 2;
}

interface HmiUIEnums_HmiSelectionMode{
  /**
   * NonExclusive
   *
   * For Checkboxes
   */
  NonExclusive: 0;
  /**
   * Exclusive
   *
   * For Radio buttons
   */
  Exclusive: 1;
}

interface HmiUIEnums_HmiSimpleGridLine{
  /**
   * None
   */
  None: 0;
  /**
   * Vertical
   */
  Vertical: 1;
  /**
   * Horizontal
   */
  Horizontal: 2;
}

interface HmiUIEnums_HmiSimplePosition{
  /**
   * LeftOrTop
   *
   * Left applies for vertical orientation, top for horizontal
   */
  LeftOrTop: 0;
  /**
   * RightOrBottom
   *
   * Right applies for vertical orientation, bottom for horizontal
   */
  RightOrBottom: 1;
}

interface HmiUIEnums_HmiSortDirection{
  /**
   * None
   */
  None: 0;
  /**
   * Ascending
   */
  Ascending: 1;
  /**
   * Descending
   */
  Descending: 2;
}

interface HmiUIEnums_HmiSourceState{
  /**
   * Idle
   */
  Idle: 0;
  /**
   * Busy
   */
  Busy: 1;
}

interface HmiUIEnums_HmiSymbolEffect{
  /**
   * None
   */
  None: 0;
  /**
   * UseEffectColor
   */
  UseEffectColor: 1;
}

interface HmiUIEnums_HmiSystemDiagnosisControlBlock{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * Number
   */
  Number: 1;
  /**
   * DateTime
   */
  DateTime: 2;
  /**
   * EventMessage
   */
  EventMessage: 3;
  /**
   * EventType
   */
  EventType: 4;
  /**
   * EventState
   */
  EventState: 5;
}

interface HmiUIEnums_HmiSystemDiagnosisControlID{
  /**
   * None
   */
  None: 0;
  /**
   * Previous
   *
   * Operation
   */
  Previous: 2;
  /**
   * Next
   *
   * Operation
   */
  Next: 3;
  /**
   * Reload
   *
   * Operation
   */
  Reload: 6;
  /**
   * Home
   *
   * Operation
   */
  Home: 5;
  /**
   * Path
   *
   * Shows the current path, e.g. "Line_5 / PLC_1"
   */
  Path: 256;
  /**
   * ConnectionStatus
   *
   * Output
   */
  ConnectionStatus: 273;
  /**
   * FirstLine
   *
   * Operation
   */
  FirstLine: 14;
  /**
   * PreviousLine
   *
   * Operation
   */
  PreviousLine: 15;
  /**
   * NextLine
   *
   * Operation
   */
  NextLine: 16;
  /**
   * LastLine
   *
   * Operation
   */
  LastLine: 17;
  /**
   * SplitView
   *
   * Operation (to be used for toggling)
   */
  SplitView: 18;
  /**
   * Back
   *
   * Operation (goes back to MatrivView or previous MatxrixView)
   */
  Back: 19;
  /**
   * ShowDiagnosticBuffer
   *
   * Operation
   */
  ShowDiagnosticBuffer: 20;
}

interface HmiUIEnums_HmiSystemDiagnosisMatrixBlock{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * Status
   */
  Status: 1;
  /**
   * Name
   */
  Name: 2;
  /**
   * OperatingState
   */
  OperatingState: 3;
  /**
   * Rack
   */
  Rack: 4;
  /**
   * Slot
   */
  Slot: 5;
  /**
   * OrderNumber
   */
  OrderNumber: 6;
  /**
   * Address
   */
  Address: 7;
  /**
   * PlantDesignation
   */
  PlantDesignation: 8;
  /**
   * LocationIdentifier
   */
  LocationIdentifier: 9;
  /**
   * Subsystem
   */
  Subsystem: 10;
  /**
   * Station
   */
  Station: 11;
  /**
   * Subslot
   */
  Subslot: 12;
  /**
   * SubAddress
   */
  SubAddress: 13;
  /**
   * SoftwareVersion
   */
  SoftwareVersion: 14;
  /**
   * Installation
   */
  Installation: 15;
  /**
   * AdditionaInformation
   */
  AdditionaInformation: 16;
  /**
   * ErrorDescription
   */
  ErrorDescription: 17;
  /**
   * ManufacturerID
   */
  ManufacturerID: 18;
  /**
   * HardwareVersion
   */
  HardwareVersion: 19;
  /**
   * ProfileID
   */
  ProfileID: 20;
  /**
   * SpecificProfileData
   */
  SpecificProfileData: 21;
  /**
   * IandMDataVersion
   */
  IandMDataVersion: 22;
  /**
   * SerialNumber
   */
  SerialNumber: 23;
  /**
   * RevisionCounter
   */
  RevisionCounter: 24;
  /**
   * Type
   */
  Type: 25;
  /**
   * IPAddress
   */
  IPAddress: 32;
}

interface HmiUIEnums_HmiSystemDiagnosisViewType{
  /**
   * Diagnosis
   */
  Diagnosis: 0;
  /**
   * Matrix
   */
  Matrix: 1;
  /**
   * DistributedIO
   */
  DistributedIO: 2;
}

interface HmiUIEnums_HmiTextPosition{
  /**
   * Left
   */
  Left: 0;
  /**
   * Right
   */
  Right: 1;
  /**
   * Top
   */
  Top: 2;
  /**
   * Bottom
   */
  Bottom: 3;
  /**
   * Behind
   */
  Behind: 4;
  /**
   * InFront
   */
  InFront: 5;
}

interface HmiUIEnums_HmiTextTrimming{
  /**
   * None
   */
  None: 0;
  /**
   * CharacterEllipsis
   *
   * Ellipsis are always at the end.
   */
  CharacterEllipsis: 1;
}

interface HmiUIEnums_HmiTextWrapping{
  /**
   * NoWrap
   */
  NoWrap: 0;
  /**
   * WordWrap
   */
  WordWrap: 1;
}

interface HmiUIEnums_HmiThresholdIndicator{
  /**
   * None
   */
  None: 0;
  /**
   * Lines
   */
  Lines: 1;
  /**
   * Markers
   */
  Markers: 2;
}

interface HmiUIEnums_HmiThresholdMode{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * Upper
   */
  Upper: 1;
  /**
   * Lower
   */
  Lower: 2;
  /**
   * Normal
   */
  Normal: 3;
  /**
   * Minimum
   */
  Minimum: 4;
  /**
   * Maximum
   */
  Maximum: 5;
}

interface HmiUIEnums_HmiTimeRangeBase{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * Millisecond
   */
  Millisecond: 1;
  /**
   * Second
   */
  Second: 2;
  /**
   * Minute
   */
  Minute: 3;
  /**
   * Hour
   */
  Hour: 4;
  /**
   * Day
   */
  Day: 5;
  /**
   * Month
   */
  Month: 6;
  /**
   * Year
   */
  Year: 7;
}

interface HmiUIEnums_HmiTimeRangeStart{
  /**
   * Now
   *
   * The time range starts from the current time
   */
  Now: 0;
  /**
   * Fixed
   *
   * The time range starts from a fixed time (BeginTime property)
   */
  Fixed: 1;
}

interface HmiUIEnums_HmiTimeRangeType{
  /**
   * TimeRange
   */
  TimeRange: 0;
  /**
   * FromBeginToEnd
   */
  FromBeginToEnd: 1;
  /**
   * PointCount
   */
  PointCount: 2;
}

interface HmiUIEnums_HmiTrendCompanionID{
  /**
   * None
   */
  None: 0;
  /**
   * RulerWindow
   *
   * Operation
   */
  RulerWindow: 3;
  /**
   * DefineStatisticsArea
   *
   * Operation
   */
  DefineStatisticsArea: 4;
  /**
   * CalculateStatistics
   *
   * Operation
   */
  CalculateStatistics: 5;
  /**
   * TimeBase
   *
   * Output
   */
  TimeBase: 256;
  /**
   * Date
   *
   * Output
   */
  Date: 257;
  /**
   * Time
   *
   * Output
   */
  Time: 258;
  /**
   * Column
   *
   * Output
   */
  Column: 259;
  /**
   * Row
   *
   * Output
   */
  Row: 260;
  /**
   * Source
   *
   * Output
   */
  Source: 261;
  /**
   * ConnectionStatus
   *
   * Output
   */
  ConnectionStatus: 262;
  /**
   * Print
   *
   * Operation
   */
  Print: 30;
  /**
   * Export
   *
   * Operation
   */
  Export: 36;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 277;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
}

interface HmiUIEnums_HmiTrendCompanionMode{
  /**
   * Ruler
   */
  Ruler: 0;
  /**
   * StatisticArea
   */
  StatisticArea: 1;
  /**
   * StatisticResult
   */
  StatisticResult: 2;
}

interface HmiUIEnums_HmiTrendControlID{
  /**
   * None
   */
  None: 0;
  /**
   * FirstRecord
   *
   * Operation
   */
  FirstRecord: 2;
  /**
   * PreviousRecord
   *
   * Operation
   */
  PreviousRecord: 3;
  /**
   * NextRecord
   *
   * Operation
   */
  NextRecord: 4;
  /**
   * LastRecord
   *
   * Operation
   */
  LastRecord: 5;
  /**
   * Ruler
   *
   * Operation
   */
  Ruler: 6;
  /**
   * ZoomArea
   *
   * Operation
   */
  ZoomArea: 7;
  /**
   * ZoomPlusMinus
   *
   * Operation
   */
  ZoomPlusMinus: 8;
  /**
   * ZoomTimeAxisPlusMinus
   *
   * Operation
   */
  ZoomTimeAxisPlusMinus: 9;
  /**
   * ZoomValueAxisPlusMinus
   *
   * Operation
   */
  ZoomValueAxisPlusMinus: 10;
  /**
   * MoveTrendArea
   *
   * Operation
   */
  MoveTrendArea: 11;
  /**
   * MoveAxesArea
   *
   * Operation
   */
  MoveAxesArea: 12;
  /**
   * OriginalView
   *
   * Operation
   */
  OriginalView: 13;
  /**
   * SelectDataConnection
   *
   * Operation
   */
  SelectDataConnection: 14;
  /**
   * SelectTrends
   *
   * Operation
   */
  SelectTrends: 15;
  /**
   * SelectTimeRange
   *
   * Operation
   */
  SelectTimeRange: 16;
  /**
   * PreviousTrend
   *
   * Operation
   */
  PreviousTrend: 17;
  /**
   * NextTrend
   *
   * Operation
   */
  NextTrend: 18;
  /**
   * StartStop
   *
   * Operation
   */
  StartStop: 19;
  /**
   * DefineStatisticsArea
   *
   * Operation
   */
  DefineStatisticsArea: 20;
  /**
   * CalculateStatistics
   *
   * Operation
   */
  CalculateStatistics: 21;
  /**
   * TimeBase
   *
   * Output
   */
  TimeBase: 256;
  /**
   * Date
   *
   * Output
   */
  Date: 257;
  /**
   * Time
   *
   * Output
   */
  Time: 258;
  /**
   * ConnectionStatus
   *
   * Output
   */
  ConnectionStatus: 259;
  /**
   * Print
   *
   * Operation
   */
  Print: 30;
  /**
   * Export
   *
   * Operation
   */
  Export: 36;
  /**
   * SelectContext
   *
   * Operation (Display the "context selection" dialogue.)
   */
  SelectContext: 38;
  /**
   * StartTime
   *
   * Output (actual value only available if start time is selected via context selection dialogue.)
   */
  StartTime: 274;
  /**
   * EndTime
   *
   * Output (actual value only available if end time is selected via context selection dialogue.)
   */
  EndTime: 275;
  /**
   * CurrentContextHint
   *
   * Output (Describes the active context filter, e.g. product == Apple Juice)
   */
  CurrentContextHint: 276;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 277;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
}

interface HmiUIEnums_HmiTrendInfoBlock{
  /**
   * None
   */
  None: 0;
  /**
   * Name
   */
  Name: 1;
  /**
   * Index
   */
  Index: 2;
  /**
   * Label
   */
  Label: 3;
  /**
   * Show
   */
  Show: 4;
  /**
   * TagNameY
   */
  TagNameY: 5;
  /**
   * TagNameX
   */
  TagNameX: 6;
  /**
   * YValue
   */
  YValue: 7;
  /**
   * XValueOrTimestamp
   */
  XValueOrTimestamp: 8;
  /**
   * YValueLowerLimit
   */
  YValueLowerLimit: 9;
  /**
   * TimestampLowerLimit
   */
  TimestampLowerLimit: 10;
  /**
   * YValueUpperLimit
   */
  YValueUpperLimit: 11;
  /**
   * TimestampUpperLimit
   */
  TimestampUpperLimit: 12;
  /**
   * Minimum
   */
  Minimum: 13;
  /**
   * MinimumTimestamp
   */
  MinimumTimestamp: 14;
  /**
   * Maximum
   */
  Maximum: 15;
  /**
   * MaximumTimestamp
   */
  MaximumTimestamp: 16;
  /**
   * Average
   */
  Average: 17;
  /**
   * StandardDeviation
   */
  StandardDeviation: 18;
  /**
   * Integral
   */
  Integral: 19;
  /**
   * WeightedAverageValue
   */
  WeightedAverageValue: 20;
  /**
   * Duration
   */
  Duration: 21;
  /**
   * NumberOfValues
   */
  NumberOfValues: 22;
  /**
   * AreaName
   */
  AreaName: 23;
  /**
   * AreaNameLL
   */
  AreaNameLL: 24;
  /**
   * AreaNameHL
   */
  AreaNameHL: 25;
  /**
   * Sum
   */
  Sum: 32;
}

interface HmiUIEnums_HmiTrendMode{
  /**
   * Points
   */
  Points: 0;
  /**
   * Interpolated
   */
  Interpolated: 1;
  /**
   * Stepped
   */
  Stepped: 2;
  /**
   * Bar
   */
  Bar: 3;
  /**
   * Value
   */
  Value: 4;
}

interface HmiUIEnums_HmiValueTendency{
  /**
   * Steady
   *
   * Same value as before
   */
  Steady: 0;
  /**
   * Upwards
   *
   * New value is greater than last value
   */
  Upwards: 1;
  /**
   * Downwards
   *
   * New value is below last value
   */
  Downwards: 2;
}

interface HmiUIEnums_HmiVerticalAlignment{
  /**
   * Top
   */
  Top: 0;
  /**
   * Center
   */
  Center: 1;
  /**
   * Bottom
   */
  Bottom: 2;
  /**
   * Stretch
   *
   * only applicable with layout containers; fallback behaves like Center
   */
  Stretch: 3;
}

interface HmiUIEnums_HmiVideoOutput{
  /**
   * Undefined
   */
  Undefined: 0;
  /**
   * Stretch
   *
   * The video is scaled to fit
   */
  Stretch: 1;
  /**
   * PreserveAspectFit
   *
   * The Video is scaled uniformly to fit without cropping
   */
  PreserveAspectFit: 2;
  /**
   * PreserveAspectCrop
   *
   * The Video is scaled uniformly to fill, cropping if necessary
   */
  PreserveAspectCrop: 3;
}

interface HmiUIEnums_HmiVisibleAlarms{
  /**
   * None
   *
   * No alarms are shown.
   */
  None: 0;
  /**
   * UnSuppressed
   *
   * Show all alarms that are not suppressed.
   */
  UnSuppressed: 1;
  /**
   * Disabled
   *
   * Show alarms that are disabled. Only relevant for AlarmDefinitionViewSetup.
   */
  Disabled: 2;
  /**
   * SuppressedByDesign
   *
   * Show alarms that are suppressed by design.
   */
  SuppressedByDesign: 4;
  /**
   * Shelved
   *
   * Show alarms that are shelved.
   */
  Shelved: 8;
}

interface HmiUIEnums_HmiWebControlID{
  /**
   * None
   */
  None: 0;
  /**
   * Home
   *
   * Operation
   */
  Home: 5;
  /**
   * Reload
   *
   * Operation
   */
  Reload: 6;
  /**
   * Address
   *
   * Input
   */
  Address: 512;
  /**
   * StatusText
   *
   * Output
   */
  StatusText: 277;
  /**
   * Custom
   *
   * Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.
   */
  Custom: 65536;
}

interface HmiUIEnums_HmiWindowFlag{
  /**
   * None
   */
  None: 0;
  /**
   * ShowCaption
   *
   * Window caption is visible.
   */
  ShowCaption: 1;
  /**
   * ShowBorder
   *
   * Window border is visible.
   */
  ShowBorder: 2;
  /**
   * AlwaysOnTop
   *
   * Window is opened on top of all other windows.
   */
  AlwaysOnTop: 4;
  /**
   * CanSize
   *
   * Window is resizable.
   */
  CanSize: 8;
  /**
   * CanMove
   *
   * Window movable.
   */
  CanMove: 16;
  /**
   * CanMaximize
   *
   * Window has a 'Maximize' button.
   */
  CanMaximize: 32;
  /**
   * CanClose
   *
   * Window has a 'Close' button.
   */
  CanClose: 64;
  /**
   * AlwaysInParent
   *
   * Window cannot be moved out of the parent (Screen, Faceplate, etc.).
   */
  AlwaysInParent: 128;
}

interface HmiUIEnums_HmiWindowStartupPosition{
  /**
   * None
   *
   * Unspecified, use as configured.
   */
  None: 0;
  /**
   * CenteredMonitor
   *
   * Centered within the configured monitor.
   */
  CenteredMonitor: 1;
  /**
   * Maximized
   *
   * Maximized within the configured monitor.
   */
  Maximized: 2;
  /**
   * CenteredOwner
   *
   * Centered within the owner HmiScreen.
   */
  CenteredOwner: 3;
}

interface HmiUIEnums_HmiWindowState{
  /**
   * Normal
   *
   * A default sized window.
   */
  Normal: 0;
  /**
   * Maximized
   *
   * A maximized window.
   */
  Maximized: 1;
}

interface HmiUIEnums {
  /**
   * HmiAggregationMode
   */
  HmiAggregationMode: HmiUIEnums_HmiAggregationMode
  /**
   * HmiAlarmBlock
   *
   * Possible information to be displayed in an AlarmControl (a.k.a MessageBlocks).
For details on certain alarm blocks please refer to SDS CHROM Alarms.

Removed 0x23 TagName according to RQ 2832638 in TIA v15.1
   */
  HmiAlarmBlock: HmiUIEnums_HmiAlarmBlock
  /**
   * HmiAlarmControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiAlarmControl. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiAlarmControlID: HmiUIEnums_HmiAlarmControlID
  /**
   * HmiAlarmSourceType
   */
  HmiAlarmSourceType: HmiUIEnums_HmiAlarmSourceType
  /**
   * HmiAlarmStatisticBlock
   *
   * All time spans are in seconds.
   */
  HmiAlarmStatisticBlock: HmiUIEnums_HmiAlarmStatisticBlock
  /**
   * HmiApplicationState
   */
  HmiApplicationState: HmiUIEnums_HmiApplicationState
  /**
   * HmiBackgroundFillMode
   *
   * Migration hint: Was called "HmiBackGraphicAlignment" (and "HmiFillStyleAlignment", which was a subset of the other) in Classic
   */
  HmiBackgroundFillMode: HmiUIEnums_HmiBackgroundFillMode
  /**
   * HmiBarMode
   *
   * Migration hint: Was called "HmiBarSegmentColoring" in Classic.
   */
  HmiBarMode: HmiUIEnums_HmiBarMode
  /**
   * HmiCapType
   *
   * Defines how a line's caps are drawn (only valid for line EndType.Line)
Migration hint: Was called "HmiLineEndShapeStyle" in Classic.
   */
  HmiCapType: HmiUIEnums_HmiCapType
  /**
   * HmiCharSet
   */
  HmiCharSet: HmiUIEnums_HmiCharSet
  /**
   * HmiClientInfoType
   *
   * Specifies what kind of client information shall be obtained
   */
  HmiClientInfoType: HmiUIEnums_HmiClientInfoType
  /**
   * HmiContentMode
   *
   * Specifies what kind of content shall be displayed. Migration hint: Was formerly also known as "HmiButtonType", but can be used on various items now.
   */
  HmiContentMode: HmiUIEnums_HmiContentMode
  /**
   * HmiDashType
   *
   * Migration hint: Was called "HmiLineStyle" in Classic.
   */
  HmiDashType: HmiUIEnums_HmiDashType
  /**
   * HmiDataGridHeaderType
   */
  HmiDataGridHeaderType: HmiUIEnums_HmiDataGridHeaderType
  /**
   * HmiDetailedParameterControlBlock
   *
   * Defines the info blocks for HmiDetailedParameterControl
   */
  HmiDetailedParameterControlBlock: HmiUIEnums_HmiDetailedParameterControlBlock
  /**
   * HmiDetailedParameterControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiParameterControlOverview. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for input (e.g. input field or combo in the toolbar)
   */
  HmiDetailedParameterControlID: HmiUIEnums_HmiDetailedParameterControlID
  /**
   * HmiDisplayViewType
   */
  HmiDisplayViewType: HmiUIEnums_HmiDisplayViewType
  /**
   * HmiEditMode
   */
  HmiEditMode: HmiUIEnums_HmiEditMode
  /**
   * HmiEventTrigger
   */
  HmiEventTrigger: HmiUIEnums_HmiEventTrigger
  /**
   * HmiFillDirection
   *
   * Defines the direction an object's fill level will be rendered.
   */
  HmiFillDirection: HmiUIEnums_HmiFillDirection
  /**
   * HmiFillPattern
   */
  HmiFillPattern: HmiUIEnums_HmiFillPattern
  /**
   * HmiFlashingCondition
   */
  HmiFlashingCondition: HmiUIEnums_HmiFlashingCondition
  /**
   * HmiFlashingRate
   */
  HmiFlashingRate: HmiUIEnums_HmiFlashingRate
  /**
   * HmiFlipMode
   */
  HmiFlipMode: HmiUIEnums_HmiFlipMode
  /**
   * HmiFontStrikeOut
   *
   * Allows to specify how some text shall be striked out.
   */
  HmiFontStrikeOut: HmiUIEnums_HmiFontStrikeOut
  /**
   * HmiFontWeight
   *
   * Allows to specify a text's font weight. The values are aligned to the standard values also used by SDS CHROM General.
   */
  HmiFontWeight: HmiUIEnums_HmiFontWeight
  /**
   * HmiFunctionTrendControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiFunctionTrendControl. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiFunctionTrendControlID: HmiUIEnums_HmiFunctionTrendControlID
  /**
   * HmiGesture
   */
  HmiGesture: HmiUIEnums_HmiGesture
  /**
   * HmiGmpSetting
   *
   * Allows to specify how to handle Good Manufacturing Practice (GMP) relevant settings.
   */
  HmiGmpSetting: HmiUIEnums_HmiGmpSetting
  /**
   * HmiGraphicStretchMode
   */
  HmiGraphicStretchMode: HmiUIEnums_HmiGraphicStretchMode
  /**
   * HmiGraphOverviewBlock
   *
   * Column Ids used in HmiGraphOverviewControlColumnPart
   */
  HmiGraphOverviewBlock: HmiUIEnums_HmiGraphOverviewBlock
  /**
   * HmiGridColoringMode
   */
  HmiGridColoringMode: HmiUIEnums_HmiGridColoringMode
  /**
   * HmiGridLine
   */
  HmiGridLine: HmiUIEnums_HmiGridLine
  /**
   * HmiGridSelectionMode
   *
   * Allows to specify how many cells of a data grid can be selected at the same time.
   */
  HmiGridSelectionMode: HmiUIEnums_HmiGridSelectionMode
  /**
   * HmiHorizontalAlignment
   */
  HmiHorizontalAlignment: HmiUIEnums_HmiHorizontalAlignment
  /**
   * HmiIOFieldType
   *
   * TwoStates is no more. Input and InputOutput are implemented equally, removed Input.
   */
  HmiIOFieldType: HmiUIEnums_HmiIOFieldType
  /**
   * HmiKeyboardModifier
   */
  HmiKeyboardModifier: HmiUIEnums_HmiKeyboardModifier
  /**
   * HmiLineEndType
   *
   * was "HmiLineEndStyle"
   */
  HmiLineEndType: HmiUIEnums_HmiLineEndType
  /**
   * HmiLineJoinType
   *
   * Was called "HmiCornerStyle". The enum and its values have been renamed according to established names.
   */
  HmiLineJoinType: HmiUIEnums_HmiLineJoinType
  /**
   * HmiMarkerType
   */
  HmiMarkerType: HmiUIEnums_HmiMarkerType
  /**
   * HmiMeasurementUnit
   */
  HmiMeasurementUnit: HmiUIEnums_HmiMeasurementUnit
  /**
   * HmiMediaControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiMediaControl. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiMediaControlID: HmiUIEnums_HmiMediaControlID
  /**
   * HmiOpenLinkMode
   */
  HmiOpenLinkMode: HmiUIEnums_HmiOpenLinkMode
  /**
   * HmiOperability
   */
  HmiOperability: HmiUIEnums_HmiOperability
  /**
   * HmiOrientation
   */
  HmiOrientation: HmiUIEnums_HmiOrientation
  /**
   * HmiOverviewParameterControlBlock
   *
   * Defines the info blocks for HmiOverviewParameterControl
   */
  HmiOverviewParameterControlBlock: HmiUIEnums_HmiOverviewParameterControlBlock
  /**
   * HmiOverviewParameterControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiParameterControlOverview. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiOverviewParameterControlID: HmiUIEnums_HmiOverviewParameterControlID
  /**
   * HmiPeakIndicator
   *
   * Specifies which drag indicators ("Schleppzeiger") shall be active and displayed.
   */
  HmiPeakIndicator: HmiUIEnums_HmiPeakIndicator
  /**
   * HmiPipeConnectionState
   */
  HmiPipeConnectionState: HmiUIEnums_HmiPipeConnectionState
  /**
   * HmiProcessControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiProcessControl. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiProcessControlID: HmiUIEnums_HmiProcessControlID
  /**
   * HmiProcessDiagnosisCriteriaAnalysisBlock
   */
  HmiProcessDiagnosisCriteriaAnalysisBlock: HmiUIEnums_HmiProcessDiagnosisCriteriaAnalysisBlock
  /**
   * HmiProcessDiagnosisCriteriaAnalysisControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiProcessDiagnosisGraphOverviewControl.
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiProcessDiagnosisCriteriaAnalysisControlID: HmiUIEnums_HmiProcessDiagnosisCriteriaAnalysisControlID
  /**
   * HmiProcessDiagnosisDetailViewType
   *
   * View type to be loaded in the split view mode for PDiag PLC Code viewer
   */
  HmiProcessDiagnosisDetailViewType: HmiUIEnums_HmiProcessDiagnosisDetailViewType
  /**
   * HmiProcessDiagnosisGraphOverviewControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiProcessDiagnosisGraphOverviewControl.
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiProcessDiagnosisGraphOverviewControlID: HmiUIEnums_HmiProcessDiagnosisGraphOverviewControlID
  /**
   * HmiProcessDiagnosisOverviewControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiProcessDiagnosisOverviewControl.
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiProcessDiagnosisOverviewControlID: HmiUIEnums_HmiProcessDiagnosisOverviewControlID
  /**
   * HmiProcessDiagnosisPlcCodeViewerControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiProcessDiagnosisGraphOverviewControl.
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiProcessDiagnosisPlcCodeViewerControlID: HmiUIEnums_HmiProcessDiagnosisPlcCodeViewerControlID
  /**
   * HmiProcessIndicatorMode
   */
  HmiProcessIndicatorMode: HmiUIEnums_HmiProcessIndicatorMode
  /**
   * HmiQuality
   */
  HmiQuality: HmiUIEnums_HmiQuality
  /**
   * HmiRequestResult
   */
  HmiRequestResult: HmiUIEnums_HmiRequestResult
  /**
   * HmiResourceListType
   */
  HmiResourceListType: HmiUIEnums_HmiResourceListType
  /**
   * HmiRotationCenterPlacement
   */
  HmiRotationCenterPlacement: HmiUIEnums_HmiRotationCenterPlacement
  /**
   * HmiScaleMode
   */
  HmiScaleMode: HmiUIEnums_HmiScaleMode
  /**
   * HmiScalingType
   *
   * Formerly known as "HmiBarScalingType". Removed Automatic, because it was not used to automatically select a scaling type, but for splitting the scale into two segments (which are both linear scaled each). 
Migration hint: Automatic would have to be migrated to "Linear" (which is not a lossless migration and should be shown as a warning to the user.)
   */
  HmiScalingType: HmiUIEnums_HmiScalingType
  /**
   * HmiScreenWindowAdaption
   *
   * Specifies whether the screen or screen window shall adapt its size to each other.
   */
  HmiScreenWindowAdaption: HmiUIEnums_HmiScreenWindowAdaption
  /**
   * HmiScrollBarVisibility
   */
  HmiScrollBarVisibility: HmiUIEnums_HmiScrollBarVisibility
  /**
   * HmiSelectionMode
   */
  HmiSelectionMode: HmiUIEnums_HmiSelectionMode
  /**
   * HmiSimpleGridLine
   */
  HmiSimpleGridLine: HmiUIEnums_HmiSimpleGridLine
  /**
   * HmiSimplePosition
   */
  HmiSimplePosition: HmiUIEnums_HmiSimplePosition
  /**
   * HmiSortDirection
   */
  HmiSortDirection: HmiUIEnums_HmiSortDirection
  /**
   * HmiSourceState
   */
  HmiSourceState: HmiUIEnums_HmiSourceState
  /**
   * HmiSymbolEffect
   */
  HmiSymbolEffect: HmiUIEnums_HmiSymbolEffect
  /**
   * HmiSystemDiagnosisControlBlock
   */
  HmiSystemDiagnosisControlBlock: HmiUIEnums_HmiSystemDiagnosisControlBlock
  /**
   * HmiSystemDiagnosisControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiSystemDiagnosisControl. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiSystemDiagnosisControlID: HmiUIEnums_HmiSystemDiagnosisControlID
  /**
   * HmiSystemDiagnosisMatrixBlock
   */
  HmiSystemDiagnosisMatrixBlock: HmiUIEnums_HmiSystemDiagnosisMatrixBlock
  /**
   * HmiSystemDiagnosisViewType
   *
   * view types for SysDiag
   */
  HmiSystemDiagnosisViewType: HmiUIEnums_HmiSystemDiagnosisViewType
  /**
   * HmiTextPosition
   *
   * Relative Position of a Text (usually in relation to a graphic element)
   */
  HmiTextPosition: HmiUIEnums_HmiTextPosition
  /**
   * HmiTextTrimming
   *
   * Allows to specify how text is trimmed (with end ellipsis or not).
   */
  HmiTextTrimming: HmiUIEnums_HmiTextTrimming
  /**
   * HmiTextWrapping
   */
  HmiTextWrapping: HmiUIEnums_HmiTextWrapping
  /**
   * HmiThresholdIndicator
   */
  HmiThresholdIndicator: HmiUIEnums_HmiThresholdIndicator
  /**
   * HmiThresholdMode
   */
  HmiThresholdMode: HmiUIEnums_HmiThresholdMode
  /**
   * HmiTimeRangeBase
   */
  HmiTimeRangeBase: HmiUIEnums_HmiTimeRangeBase
  /**
   * HmiTimeRangeStart
   */
  HmiTimeRangeStart: HmiUIEnums_HmiTimeRangeStart
  /**
   * HmiTimeRangeType
   */
  HmiTimeRangeType: HmiUIEnums_HmiTimeRangeType
  /**
   * HmiTrendCompanionID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiTrendCompanion. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiTrendCompanionID: HmiUIEnums_HmiTrendCompanionID
  /**
   * HmiTrendCompanionMode
   *
   * Migration hint: Was called HmiRulerView in Classic
   */
  HmiTrendCompanionMode: HmiUIEnums_HmiTrendCompanionMode
  /**
   * HmiTrendControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiTrendControl. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiTrendControlID: HmiUIEnums_HmiTrendControlID
  /**
   * HmiTrendInfoBlock
   */
  HmiTrendInfoBlock: HmiUIEnums_HmiTrendInfoBlock
  /**
   * HmiTrendMode
   */
  HmiTrendMode: HmiUIEnums_HmiTrendMode
  /**
   * HmiValueTendency
   *
   * Tendency for values
   */
  HmiValueTendency: HmiUIEnums_HmiValueTendency
  /**
   * HmiVerticalAlignment
   */
  HmiVerticalAlignment: HmiUIEnums_HmiVerticalAlignment
  /**
   * HmiVideoOutput
   *
   * Defines output of video
   */
  HmiVideoOutput: HmiUIEnums_HmiVideoOutput
  /**
   * HmiVisibleAlarms
   *
   * For details on the predefined filters, please refer to SDS CHROM 12 Alarms.
   */
  HmiVisibleAlarms: HmiUIEnums_HmiVisibleAlarms
  /**
   * HmiWebControlID
   *
   * Control IDs for usage in Tool- and Statusbar of the HmiWebControl. 
0x000 - 0x0FF used for operation (e.g. toolbar buttons)
0x100 - 0x1FF used for output (e.g. statusbar elements)
0x200 - 0x2FF used for inout (e.g. input field or combo in the toolbar)
   */
  HmiWebControlID: HmiUIEnums_HmiWebControlID
  /**
   * HmiWindowFlag
   *
   * Migration hint: Replacevarious booleans used in Classic's ScreenWindow classes.
   */
  HmiWindowFlag: HmiUIEnums_HmiWindowFlag
  /**
   * HmiWindowStartupPosition
   */
  HmiWindowStartupPosition: HmiUIEnums_HmiWindowStartupPosition
  /**
   * HmiWindowState
   *
   * Specifies how a window is displayed
   */
  HmiWindowState: HmiUIEnums_HmiWindowState
}

interface HmiAlarmColumnPart {
  /**
   */
  UseAlarmColors: boolean;
  /**
   */
  AlarmBlock: number;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiAlarmControl {
  /**
   */
  UseAlarmColors: boolean;
  /**
   *
   * The specification of the filter syntax is defined in SDS CHROM General (please refer to "Query Language" chapter 4.1.4). An additional object model that allows to be mapped onto a filter string is currently an open issue.
   */
  Filter: string;
  /**
   *
   * Systems that are sources for alarms. If this property is empty, all known systems will be used.
   */
  Systems: string[];
  /**
   *
   * Migration hint: Was "AutoScroll" in Classic. Depending on the sort order of the columns, the grid will always show the latest (new) entry on top or bottom of the control.
   */
  AlwaysShowRecent: boolean;
  /**
   */
  AlarmSourceType: number;
  /**
   *
   * Only considered with source type "AlarmDefinition".
   */
  AlarmDefinitionViewSetup: number;
  /**
   *
   * Only considered with source type "ActiveAlarms".
   */
  ActiveAlarmsViewSetup: number;
  /**
   *
   * Supresses any flashing at control level
   */
  SuppressFlashing: boolean;
  /**
   *
   * Defines the flashing rate for alarms which have to be acknowledged
   */
  AcknowledgmentFlashingRate: number;
  /**
   *
   * Defines the flashing rate for alarms which have to be reset
   */
  ResetFlashingRate: number;
  /**
   *
   * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local)
   */
  TimeZone: number;
  /**
   *
   * If none of the Columns has a sort criteria, the DefaultSortDirection of the control is applied to the time column.
   */
  DefaultSortDirection: number;
  /**
   *
   * Accepts only columns of type HmiAlarmColumnPart
   */
  AlarmView: HmiDataGridViewPart;
  /**
   *
   * Accepts only columns of type HmiAlarmStatisticColumnPart
   */
  AlarmStatisticsView: HmiDataGridViewPart;
  /**
   */
  AlarmStatisticsSettings: HmiAlarmStatisticsSettingsPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
  /**
   * Gets the data of the selected rows of the current alarm view
   */
  GetSelectedAlarmData(): void;
}

interface HmiAlarmStatisticColumnPart {
  /**
   */
  AlarmStatisticBlock: number;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiAlarmStatisticsSettingsPart {
  /**
   */
  TimeRangeFactor: number;
  /**
   */
  TimeRangeBase: number;
  /**
   *
   * Max limit on the number of records fetched
   */
  MaximumRecords: number;
  /**
   */
  BeginTime: number | string;
  /**
   */
  TimeRangeStart: number;
}

interface HmiApplicationPart {
  /**
   */
  ApplicationExitCode: number;
  /**
   */
  ApplicationState: number;
  /**
   */
  ApplicationName: string;
  /**
   */
  Arguments: string;
  /**
   */
  WorkingDirectory: string;
  /**
   */
  TerminateApplicationOnLeave: boolean;
  /**
   */
  Environment: string;
}

interface HmiBackgroundSystemPart {
  /**
   */
  RenderingTemplate: string;
}

interface HmiBadgePart {
}

interface HmiBar {
  /**
   *
   * Migration hint: Was called "SegmentColoring" in Classic.
   */
  BarMode: number;
  /**
   */
  StraightScale: HmiStraightScalePart;
  /**
   */
  ProcessValue: any;
  /**
   *
   * Specifies how to illustrate limit indicators. Migration hint: Combines old properties "ShowLimitLines", "ShowLimitMarkers", etc.
   */
  ThresholdIndicators: number;
  /**
   *
   * The trend Indicator itself is part of the rendering template (e.g. an arrow up/down) and will be shown if latest value was higher/lower than the previous one.
   */
  ShowTrendIndicator: boolean;
  /**
   */
  TrendIndicatorColor: number;
  /**
   *
   * Used for ProcessIndicator or for Bar in SegementedStatic
   */
  ProcessValueIndicatorForeColor: number;
  /**
   */
  ProcessValueIndicatorBackColor: number;
  /**
   *
   * Defines the visual representation of indicator for the current process value.
   */
  ProcessValueIndicatorMode: number;
  /**
   *
   * Migration hint: Known as "StartValue"
   */
  OriginValue: number;
  /**
   *
   * States whether the origin value is an absolute value or if the origin is calculated from a percental declaration between minimum and maximum value.
   */
  RelativeToOrigin: boolean;
  /**
   *
   * Defines whether indicators for the highest/lowest value seen have to be shown. ("Schleppzeiger")
   */
  PeakIndicators: number;
  /**
   */
  OutputFormat: string;
  /**
   */
  NormalRangeColor: number;
  /**
   *
   * Max peak value based on the ProcessValue.
   */
  ComputedMaxPeakValue: any;
  /**
   *
   * Min peak value based on the ProcessValue
   */
  ComputedMinPeakValue: any;
  /**
   *
   * Calculated tendency for new value based on ProcessValue
   */
  ComputedValueTendency: number;
  /**
   */
  ScaleBackColor: number;
  /**
   */
  ScaleForeColor: number;
  /**
   *
   * Migration Hint: Was ProcessValueIndicatorFont before
   */
  Font: HmiFontPart;
  /**
   */
  Thresholds: HmiThresholdCollection;
  /**
   */
  Title: HmiTextPart;
  /**
   */
  Label: HmiTextPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiBindingSourceElement {
  /**
   */
  AutoRequery: boolean;
  /**
   */
  CursorPosition: number;
  /**
   */
  RowCount: number;
  /**
   *
   * If command is executed while already running, the currently running command is completes, the queued commands are deleted and this command is executed. The Completed event is fired for the newest command only
   */
  ReadCommand: HmiCommandPart;
  /**
   */
  ConsideredColumns: HmiConsideredColumnCollection;
  /**
   */
  DataConnection: string;
  /**
   */
  SourceState: number;
  /**
   */
  MoveFirst(): void;
  /**
   */
  MoveLast(): void;
  /**
   */
  MoveNext(): void;
  /**
   */
  MovePrevious(): void;
}

interface HmiBlockSymbolSystemPart {
  /**
   */
  TitleForeColor: number;
  /**
   */
  HeaderForeColor: number;
  /**
   */
  ContentForeColor: number;
  /**
   */
  HeaderBackColor: number;
  /**
   */
  ContentBackColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BorderColor: number;
  /**
   */
  TitleFont: HmiFontPart;
  /**
   */
  HeaderFont: HmiFontPart;
  /**
   */
  ContentFont: HmiFontPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiButton {
  /**
   *
   * HotHeys are unique within a screen. In case of executing a hotkey, the chain is resolved starting from the active (local) window down to the HmiDesktop.
   */
  HotKey: number;
  /**
   *
   * Graphic shown while the button is NOT pressed/down. Migration hint: Was "GraphicOn" in Classic
   */
  Graphic: string;
  /**
   *
   * Text shown while the button is NOT pressed/down. Migration hint: Was "TextOn" in Classic
   */
  Text: string;
  /**
   *
   * Graphic shown while the button is pressed/down.
   */
  AlternateGraphic: string;
  /**
   *
   * Text shown while the button is pressed/down.
   */
  AlternateText: string;
  /**
   *
   * Color of the button's text
   */
  ForeColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiCheckBoxGroup {
  /**
   */
  ProcessValue: any;
  /**
   */
  SelectorPosition: number;
  /**
   */
  ForeColor: number;
  /**
   *
   * 0 means auto mode, Item height is caliculated automatically
   */
  SelectionItemHeight: number;
  /**
   *
   * Entries that form the group.
   */
  SelectionItems: HmiSelectionItemCollection;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiCircle {
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderWidth: number;
  /**
   *
   * Pattern applied to the screen item's background.
   */
  BackFillPattern: number;
  /**
   *
   * Percental value indicating some fill level.
   */
  FillLevel: number;
  /**
   */
  FillDirection: number;
  /**
   */
  DashType: number;
  /**
   */
  ShowFillLevel: boolean;
  /**
   */
  Radius: number;
  /**
   */
  CenterX: number;
  /**
   */
  CenterY: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiCircleSegment {
  /**
   *
   * A start angle of 0° corresponds with 3 o'clock.
   */
  StartAngle: number;
  /**
   *
   * Clock-wise angle.
   */
  AngleRange: number;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderWidth: number;
  /**
   *
   * Pattern applied to the screen item's background.
   */
  BackFillPattern: number;
  /**
   *
   * Percental value indicating some fill level.
   */
  FillLevel: number;
  /**
   */
  FillDirection: number;
  /**
   */
  DashType: number;
  /**
   */
  ShowFillLevel: boolean;
  /**
   */
  Radius: number;
  /**
   */
  CenterX: number;
  /**
   */
  CenterY: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiCircularArc {
  /**
   *
   * A start angle of 0° corresponds with 3 o'clock.
   */
  StartAngle: number;
  /**
   *
   * Clock-wise angle.
   */
  AngleRange: number;
  /**
   */
  LineColor: number;
  /**
   */
  AlternateLineColor: number;
  /**
   */
  DashType: number;
  /**
   */
  EndType: number;
  /**
   */
  StartType: number;
  /**
   */
  CapType: number;
  /**
   */
  LineWidth: number;
  /**
   */
  Radius: number;
  /**
   */
  CenterX: number;
  /**
   */
  CenterY: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiClock {
  /**
   *
   * Defines which details of a dial have to be drawn, e.g. only thicks, labels or both.
   */
  DialMode: number;
  /**
   */
  DialBackColor: number;
  /**
   */
  DialLabelColor: number;
  /**
   */
  DialTickColor: number;
  /**
   *
   * Specifies whether to show the hour-needle or not.
   */
  ShowHours: boolean;
  /**
   *
   * Specifies whether to show the minutes-needle or not.
   */
  ShowMinutes: boolean;
  /**
   *
   * Specifies whether to show the seconds-needle or not.
   */
  ShowSeconds: boolean;
  /**
   *
   * Provides time to be displayed; if not configured client locale time is displayed. Cannot be used to read or even modify a system's actual time, specifies source only.
   */
  TimeSource: any;
  /**
   *
   * Sub-Property "TextPosition=LeftOrTop" is interpreted as top, and "TextPosition=RightOrBottom" as bottom.
   */
  Title: HmiTextPart;
  /**
   *
   * Font to be used for the dial.
   */
  DialLabelFont: HmiFontPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiComboBox {
  /**
   */
  SelectionMode: number;
  /**
   */
  ProcessValue: any;
  /**
   */
  SelectorPosition: number;
  /**
   */
  ForeColor: number;
  /**
   *
   * 0 means auto mode, Item height is caliculated automatically
   */
  SelectionItemHeight: number;
  /**
   *
   * Entries that form the group.
   */
  SelectionItems: HmiSelectionItemCollection;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiCommandPart {
  /**
   */
  CommandText: string;
  /**
   */
  CommandType: string;
  /**
   */
  CommandParameters: HmiParameterCollection;
  /**
   */
  Execute(): void;
}

interface HmiCommandSourceElement {
  /**
   */
  Command: HmiCommandPart;
  /**
   *
   * Last result from executed command.
   */
  ResultSet: HmiParameterCollection;
  /**
   */
  DataConnection: string;
  /**
   */
  SourceState: number;
}

interface HmiConsideredColumnPart {
  /**
   */
  Key: string;
  /**
   */
  IsPrimary: boolean;
}

interface HmiContentPart {
  /**
   *
   * Defines ratio of graphic to text (0.7 = 70% space for graphic)
   */
  SplitRatio: number;
  /**
   *
   * Specifies whether text, graphic or both shall be used for visualization.
   */
  ContentMode: number;
  /**
   *
   * Position of the text in relation to the element's graphic.
   */
  TextPosition: number;
  /**
   */
  GraphicStretchMode: number;
  /**
   */
  VerticalTextAlignment: number;
  /**
   */
  HorizontalTextAlignment: number;
  /**
   *
   * Fix and absolute spacing in between areas spawn by the content split ratio.
   */
  Spacing: number;
  /**
   */
  TextTrimming: number;
}

interface HmiControlBarButtonPart {
  /**
   */
  HotKey: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   *
   * Usually shows a numerical identicator.
   */
  Badge: HmiBadgePart;
  /**
   */
  Graphic: string;
  /**
   */
  Text: string;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  Visible: boolean;
  /**
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  Height: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MinimumHeight: number;
  /**
   */
  MaximumWidth: number;
  /**
   */
  MaximumHeight: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   */
  ForeColor: number;
  /**
   *
   * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000
   */
  Mapping: number;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000.
   */
  CustomID: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Distance to surrounding outside of the control bar element to the controlbar.
   */
  Margin: HmiMarginPart;
  /**
   */
  Padding: HmiPaddingPart;
}

interface HmiControlBarDisplayPart {
  /**
   */
  Graphic: string;
  /**
   */
  Text: string;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  Visible: boolean;
  /**
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  Height: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MinimumHeight: number;
  /**
   */
  MaximumWidth: number;
  /**
   */
  MaximumHeight: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   */
  ForeColor: number;
  /**
   *
   * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000
   */
  Mapping: number;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000.
   */
  CustomID: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Distance to surrounding outside of the control bar element to the controlbar.
   */
  Margin: HmiMarginPart;
  /**
   */
  Padding: HmiPaddingPart;
}

interface HmiControlBarLabelPart {
  /**
   */
  Text: string;
  /**
   */
  VerticalTextAlignment: number;
  /**
   */
  HorizontalTextAlignment: number;
  /**
   */
  Visible: boolean;
  /**
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  Height: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MinimumHeight: number;
  /**
   */
  MaximumWidth: number;
  /**
   */
  MaximumHeight: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   */
  ForeColor: number;
  /**
   *
   * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000
   */
  Mapping: number;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000.
   */
  CustomID: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Distance to surrounding outside of the control bar element to the controlbar.
   */
  Margin: HmiMarginPart;
  /**
   */
  Padding: HmiPaddingPart;
}

interface HmiControlBarSeparatorPart {
  /**
   */
  Visible: boolean;
  /**
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  Height: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MinimumHeight: number;
  /**
   */
  MaximumWidth: number;
  /**
   */
  MaximumHeight: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   */
  ForeColor: number;
  /**
   *
   * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000
   */
  Mapping: number;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000.
   */
  CustomID: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Distance to surrounding outside of the control bar element to the controlbar.
   */
  Margin: HmiMarginPart;
  /**
   */
  Padding: HmiPaddingPart;
}

interface HmiControlBarTextBoxPart {
  /**
   */
  ReadOnly: boolean;
  /**
   */
  BackColor: number;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  Text: string;
  /**
   */
  VerticalTextAlignment: number;
  /**
   */
  HorizontalTextAlignment: number;
  /**
   */
  Visible: boolean;
  /**
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  Height: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MinimumHeight: number;
  /**
   */
  MaximumWidth: number;
  /**
   */
  MaximumHeight: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   */
  ForeColor: number;
  /**
   *
   * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000
   */
  Mapping: number;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000.
   */
  CustomID: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Distance to surrounding outside of the control bar element to the controlbar.
   */
  Margin: HmiMarginPart;
  /**
   */
  Padding: HmiPaddingPart;
}

interface HmiControlBarToggleSwitchPart {
  /**
   *
   * Indicator for the switch's state. In a button-like visualization "false" is unpressed.
   */
  IsAlternateState: boolean;
  /**
   */
  AlternateText: string;
  /**
   */
  AlternateGraphic: string;
  /**
   */
  HotKey: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   *
   * Usually shows a numerical identicator.
   */
  Badge: HmiBadgePart;
  /**
   */
  Graphic: string;
  /**
   */
  Text: string;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  Visible: boolean;
  /**
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  Height: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MinimumHeight: number;
  /**
   */
  MaximumWidth: number;
  /**
   */
  MaximumHeight: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   */
  ForeColor: number;
  /**
   *
   * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000
   */
  Mapping: number;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000.
   */
  CustomID: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Distance to surrounding outside of the control bar element to the controlbar.
   */
  Margin: HmiMarginPart;
  /**
   */
  Padding: HmiPaddingPart;
}

interface HmiCornersPart {
  /**
   */
  TopLeftRadius: number;
  /**
   */
  TopRightRadius: number;
  /**
   */
  BottomLeftRadius: number;
  /**
   */
  BottomRightRadius: number;
}

interface HmiCurvedScalePart {
  /**
   *
   * The angle where the scale starts. 0 correlates with 3o'clock. The angle is specified clockwise.
   */
  StartAngle: number;
  /**
   *
   * The offset angle clock-wise.
   */
  AngleRange: number;
  /**
   *
   * The scaling type has influence on the scale (e.g. formatting the labels and ticks in a way it fits to logarithmic scaling), the bar segment as well as markers, indicators, etc.
   */
  ScalingType: number;
  /**
   *
   * Number of primary divisions (in between large ticks).
   */
  DivisionCount: number;
  /**
   *
   * Number of secondary divisions (in between small ticks). A division count of 1 does not draw additional smaller ticks.
   */
  SubDivisionCount: number;
  /**
   *
   * Defines to which primary tick a label has to be drawn, e.g. 3 would mean the first and every third tick is labeled.
   */
  LargeTickLabelingStep: number;
  /**
   */
  BeginValue: number;
  /**
   */
  EndValue: number;
  /**
   *
   * Specifies a format pattern that is applied to scale label's and process value indicators. Migration hint: Replaces "DecimalPlaces" and ShowSignForPositiveLabel" and "UseExponentialFormat"
   */
  OutputFormat: string;
  /**
   */
  LabelFont: HmiFontPart;
  /**
   *
   * Unit comes from Tag (see CHROM Tag Model)
   */
  MeasurementUnitType: number;
  /**
   *
   * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime.
   */
  MeasurementUnit: string;
  /**
   */
  AutoScaling: boolean;
  /**
   */
  ScaleMode: number;
  /**
   */
  LabelColor: number;
  /**
   */
  TickColor: number;
}

interface HmiCustomWebControlContainer {
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * CustomControl-, SwacComponent-, WidgetType.
   */
  ContainedType: string;
  /**
   *
   * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control)
   */
  Properties: HmiDynamicPropertyPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiCustomWidgetContainer {
  /**
   *
   * In case of custom widget container, this template is provided through the ContainedType property and not by the current style.
   */
  RenderingTemplate: string;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * CustomControl-, SwacComponent-, WidgetType.
   */
  ContainedType: string;
  /**
   *
   * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control)
   */
  Properties: HmiDynamicPropertyPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiDataCellSystemPart {
  /**
   */
  OutputFormat: string;
  /**
   */
  BackColor: number;
  /**
   */
  ForeColor: number;
  /**
   */
  SelectionBackColor: number;
  /**
   */
  SelectionForeColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiDataGridColumnHeaderPart {
  /**
   */
  Text: string;
  /**
   */
  Graphic: string;
  /**
   */
  Content: HmiContentPart;
}

interface HmiDataGridColumnPart {
  /**
   *
   * Matches the considered column in binding source "ConsideredColumns" property
   */
  Key: string;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiDataGridControl {
  /**
   */
  BindingSource: HmiBindingSourceElement;
  /**
   *
   * Accepts only columns of type HmiDataGridColumnPart
   */
  DataGridView: HmiDataGridViewPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiDataGridHeaderSettingsPart {
  /**
   */
  AllowColumnReorder: boolean;
  /**
   */
  AllowColumnResize: boolean;
  /**
   */
  HeaderGridLineColor: number;
  /**
   */
  HeaderForeColor: number;
  /**
   */
  HeaderBackColor: number;
  /**
   */
  HeaderSelectionForeColor: number;
  /**
   */
  HeaderSelectionBackColor: number;
  /**
   */
  RowHeaderType: number;
  /**
   */
  ColumnHeaderType: number;
  /**
   */
  Font: HmiFontPart;
}

interface HmiDataGridViewPart {
  /**
   *
   * Specifies whether rows or colums have alternating colors.
   */
  ColoringMode: number;
  /**
   */
  ForeColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  AlternateForeColor: number;
  /**
   */
  SelectionForeColor: number;
  /**
   */
  SelectionBackColor: number;
  /**
   */
  SelectFullRow: boolean;
  /**
   */
  GridSelectionMode: number;
  /**
   */
  HorizontalScrollBarVisibility: number;
  /**
   */
  VerticalScrollBarVisibility: number;
  /**
   */
  SelectionBorderWidth: number;
  /**
   */
  SelectionBorderColor: number;
  /**
   *
   * Setting this property to true turns all AllowSort properties on the individual columns active (the actual true/false value of the column is used). False disables sorting for all columns (while the column's property value remains)
   */
  AllowSort: boolean;
  /**
   *
   * Unit: DIU. A size of 0 results in auto mode which adapts to the font size and the individual number of lines within a row. No partial rows shall be created. Images will be resized according to a single line.
   */
  RowHeight: number;
  /**
   */
  GridLineColor: number;
  /**
   */
  GridLineWidth: number;
  /**
   */
  GridLineVisibility: number;
  /**
   */
  AllowFilter: boolean;
  /**
   *
   * Is the font to be used within the table (cells)
   */
  Font: HmiFontPart;
  /**
   */
  HeaderSettings: HmiDataGridHeaderSettingsPart;
  /**
   */
  CellPadding: HmiPaddingPart;
  /**
   *
   * This collection can hold any class derived from HmiDataGridColumnPartbase. Engineering should only configure meaningful columns (e.g. HmiAlarmColumnPart for a complex property "AlarmView")
   */
  Columns: HmiDataGridColumnCollection;
}

interface HmiDataSourcePart {
  /**
   *
   * Accepts (currently) only HmiTag and HmiLoggingTag
   */
  Source: string;
  /**
   */
  VisualizeQuality: boolean;
}

interface HmiDcsFaceplateContainer {
  /**
   */
  DomainTypeGUID: string;
  /**
   */
  DomainSubTypeGUID: string;
  /**
   */
  ContainedType: string;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiDetailedParameterControl {
  /**
   */
  EditMode: number;
  /**
   *
   * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local)
   */
  TimeZone: number;
  /**
   *
   * If configured, the control won't allow changing the parameter set type.
   */
  ParameterSetTypeFixed: string;
  /**
   */
  ForeColor: number;
  /**
   */
  SelectionBackColor: number;
  /**
   */
  SelectionForeColor: number;
  /**
   */
  CurrentParameterSetTypeID: number;
  /**
   */
  CurrentParameterSetID: number;
  /**
   */
  HideDetails: boolean;
  /**
   *
   * Accepts only columns of type HmiDetailedParameterControlColumnPart
   */
  ParameterView: HmiDataGridViewPart;
  /**
   *
   * Affects labels and combo boxes within the control.
   */
  Font: HmiFontPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiDetailedParameterControlColumnPart {
  /**
   */
  DetailedParameterControlBlock: number;
  /**
   *
   * Matches the considered column in binding source "ConsideredColumns" property
   */
  Key: string;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiDotNetControlContainer {
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * CustomControl-, SwacComponent-, WidgetType.
   */
  ContainedType: string;
  /**
   *
   * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control)
   */
  Properties: HmiDynamicPropertyPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiDynamicPropertyPart {
}

interface HmiEllipse {
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderWidth: number;
  /**
   *
   * Pattern applied to the screen item's background.
   */
  BackFillPattern: number;
  /**
   *
   * Percental value indicating some fill level.
   */
  FillLevel: number;
  /**
   */
  FillDirection: number;
  /**
   */
  DashType: number;
  /**
   */
  ShowFillLevel: boolean;
  /**
   */
  RadiusX: number;
  /**
   */
  RadiusY: number;
  /**
   */
  CenterX: number;
  /**
   */
  CenterY: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiEllipseSegment {
  /**
   *
   * A start angle of 0° corresponds with 3 o'clock.
   */
  StartAngle: number;
  /**
   *
   * Clock-wise angle.
   */
  AngleRange: number;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderWidth: number;
  /**
   *
   * Pattern applied to the screen item's background.
   */
  BackFillPattern: number;
  /**
   *
   * Percental value indicating some fill level.
   */
  FillLevel: number;
  /**
   */
  FillDirection: number;
  /**
   */
  DashType: number;
  /**
   */
  ShowFillLevel: boolean;
  /**
   */
  RadiusX: number;
  /**
   */
  RadiusY: number;
  /**
   */
  CenterX: number;
  /**
   */
  CenterY: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiEllipticalArc {
  /**
   *
   * A start angle of 0° corresponds with 3 o'clock.
   */
  StartAngle: number;
  /**
   *
   * Clock-wise angle.
   */
  AngleRange: number;
  /**
   */
  LineColor: number;
  /**
   */
  AlternateLineColor: number;
  /**
   */
  DashType: number;
  /**
   */
  EndType: number;
  /**
   */
  StartType: number;
  /**
   */
  CapType: number;
  /**
   */
  LineWidth: number;
  /**
   */
  RadiusX: number;
  /**
   */
  RadiusY: number;
  /**
   */
  CenterX: number;
  /**
   */
  CenterY: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiFaceplateContainer {
  /**
   *
   * Specifies whether the faceplate or container window shall adapt its size.
   */
  Adaption: number;
  /**
   *
   * Specifies whether the faceplate is currently visible.
   */
  IsVisible: boolean;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   *
   * CustomControl-, SwacComponent-, WidgetType.
   */
  ContainedType: string;
  /**
   *
   * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control)
   */
  Properties: HmiDynamicPropertyPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiFaceplateType {
  /**
   *
   * Points to the screen item (currently button only) that hast to be pressed for an explicit operation.
   */
  EnableExplicitUnlock: HmiButton;
  /**
   *
   * Defines if the faceplate instance can be suspended if it is currently not visible.
   */
  Suspendable: boolean;
  /**
   */
  Properties: HmiDynamicPropertyPart;
  /**
   *
   * States whether the screen is operable at all (‘Enabled’ = true) or not. If not, the screen appears read-only if visible, independend from the user authorization. Applies for entsire screen and all contained objects.
   */
  Enabled: boolean;
  /**
   *
   * Specifies the dimensions of the screen in device-independend units (DIU).
   */
  Width: number;
  /**
   *
   * Specifies the dimensions of the screen in device-independend units (DIU). 
   */
  Height: number;
  /**
   *
   * Specifyies the background fill pattern of the screen. The pattern is always shown behind the graphic.
   */
  BackFillPattern: number;
  /**
   *
   * Primary color of the screen's background.
   */
  BackColor: number;
  /**
   *
   * Secondary color of the screen's background to be used in FillPattern.
   */
  AlternateBackColor: number;
  /**
   *
   * Graphic to be shown in the screen's background
   */
  BackGraphic: string;
  /**
   *
   * The initial position of screen is defined through the current scrollbar position of the parent Hmi(TopLevel)ScreenWindow If an screen is smaller than its parent window, this alignment is used for positioning.
   */
  HorizontalAlignment: number;
  /**
   *
   * The initial position of screen is defined through the current scrollbar position of the parent Hmi(TopLevel)ScreenWindow If an screen is smaller than its parent window, this alignment is used for positioning.
   */
  VerticalAlignment: number;
  /**
   *
   * Specifies if the background fills just the screen or the entire window's view.
   */
  BackgroundFillMode: number;
  /**
   *
   * Specifies how the backgraphic is stretched.
   */
  BackGraphicStretchMode: number;
  /**
   */
  Name: string;
  /**
   */
  DisplayName: string;
  /**
   */
  Layers: HmiLayerCollection;
}

interface HmiFlowLineDecoratorSystemPart {
  /**
   */
  ForeColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiFocusEffectSystemPart {
  /**
   */
  FocusColor: number;
  /**
   */
  LineWidth: number;
  /**
   */
  RenderingTemplate: string;
}

interface HmiFontPart {
  /**
   */
  Weight: number;
  /**
   */
  Name: string;
  /**
   */
  Italic: boolean;
  /**
   *
   * Font size unit is: DIU
   */
  Size: number;
  /**
   */
  Underline: boolean;
  /**
   */
  StrikeOut: number;
}

interface HmiFunctionTrendAreaPart {
  /**
   */
  SelectedFunctionTrend: HmiFunctionTrendPart;
  /**
   */
  TopValueAxes: HmiXValueAxisCollection;
  /**
   */
  BottomValueAxes: HmiXValueAxisCollection;
  /**
   */
  FunctionTrends: HmiFunctionTrendCollection;
  /**
   *
   * Is used as key for the graph area
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  BackColor: number;
  /**
   *
   * Grid lines are always shown for the area's inner axes (that's the axis with index=0 in the parts arrays)
   */
  GridLines: number;
  /**
   */
  MajorGridLinesColor: number;
  /**
   */
  MinorGridLinesColor: number;
  /**
   *
   * The TrendControl will set the areas proportional to their individual HeightFactors.
   */
  SizeFactor: number;
  /**
   *
   * Defines the appearance of the ruler in this area.
   */
  Ruler: HmiRulerPart;
  /**
   */
  LeftValueAxes: HmiYValueAxisCollection;
  /**
   */
  RightValueAxes: HmiYValueAxisCollection;
}

interface HmiFunctionTrendControl {
  /**
   */
  FunctionTrendAreas: HmiFunctionTrendAreaCollection;
  /**
   *
   * The space between TrendAreas. There is no such property for Comfort since there is always just exactly one area.
   */
  AreaSpacing: number;
  /**
   *
   * Online = Diagram is updated with new values, Offline = Diagram is frozen, no new values are added.
   */
  Online: boolean;
  /**
   */
  ExtendRulerToAxis: boolean;
  /**
   */
  ShowRuler: boolean;
  /**
   */
  ShiftAxes: boolean;
  /**
   */
  Legend: HmiLegendPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiFunctionTrendPart {
  /**
   */
  RangeType: number;
  /**
   */
  TimeRangeFactor: number;
  /**
   */
  TimeRangeBase: number;
  /**
   */
  BeginTime: number | string;
  /**
   */
  EndTime: number | string;
  /**
   */
  PointCount: number;
  /**
   */
  XValueAxis: HmiXValueAxisPart;
  /**
   */
  TrendMode: number;
  /**
   */
  DataSourceX: HmiDataSourcePart;
  /**
   */
  Visible: boolean;
  /**
   */
  DisplayName: string;
  /**
   */
  DashType: number;
  /**
   */
  LineWidth: number;
  /**
   */
  LineColor: number;
  /**
   */
  BackFillPattern: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  MarkerType: number;
  /**
   */
  MarkerDimension: number;
  /**
   */
  MarkerColor: number;
  /**
   */
  MarkerGraphic: string;
  /**
   *
   * Only relevant for historical data. False means starting from current time. True means data is requested for the complete visible area
   */
  ShowLoggedDataImmediately: boolean;
  /**
   */
  YValueAxis: HmiYValueAxisPart;
  /**
   *
   * If Limit colors are defined and quality is uncertain with RangeViolation, colors defined in this part are ignored.
   */
  QualityVisualization: HmiQualityPart;
  /**
   *
   * Applies for Y-axis only.
   */
  Thresholds: HmiThresholdCollection;
  /**
   */
  DataSourceY: HmiDataSourcePart;
}

interface HmiGauge {
  /**
   */
  CurvedScale: HmiCurvedScalePart;
  /**
   */
  ProcessValue: any;
  /**
   *
   * Specifies how to illustrate limit indicators. Migration hint: Combines old properties "ShowLimitLines", "ShowLimitMarkers", etc.
   */
  ThresholdIndicators: number;
  /**
   *
   * The trend Indicator itself is part of the rendering template (e.g. an arrow up/down) and will be shown if latest value was higher/lower than the previous one.
   */
  ShowTrendIndicator: boolean;
  /**
   */
  TrendIndicatorColor: number;
  /**
   *
   * Used for ProcessIndicator or for Bar in SegementedStatic
   */
  ProcessValueIndicatorForeColor: number;
  /**
   */
  ProcessValueIndicatorBackColor: number;
  /**
   *
   * Defines the visual representation of indicator for the current process value.
   */
  ProcessValueIndicatorMode: number;
  /**
   *
   * Migration hint: Known as "StartValue"
   */
  OriginValue: number;
  /**
   *
   * States whether the origin value is an absolute value or if the origin is calculated from a percental declaration between minimum and maximum value.
   */
  RelativeToOrigin: boolean;
  /**
   *
   * Defines whether indicators for the highest/lowest value seen have to be shown. ("Schleppzeiger")
   */
  PeakIndicators: number;
  /**
   */
  OutputFormat: string;
  /**
   */
  NormalRangeColor: number;
  /**
   *
   * Max peak value based on the ProcessValue.
   */
  ComputedMaxPeakValue: any;
  /**
   *
   * Min peak value based on the ProcessValue
   */
  ComputedMinPeakValue: any;
  /**
   *
   * Calculated tendency for new value based on ProcessValue
   */
  ComputedValueTendency: number;
  /**
   */
  ScaleBackColor: number;
  /**
   */
  ScaleForeColor: number;
  /**
   *
   * Migration Hint: Was ProcessValueIndicatorFont before
   */
  Font: HmiFontPart;
  /**
   */
  Thresholds: HmiThresholdCollection;
  /**
   */
  Title: HmiTextPart;
  /**
   */
  Label: HmiTextPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiGraphicView {
  /**
   */
  GraphicStretchMode: number;
  /**
   */
  Graphic: string;
  /**
   *
   * Percental value indicating some fill level.
   */
  FillLevel: number;
  /**
   *
   * Specifies the direction the fill level will be drawn, usually from bottom to top.
   */
  FillDirection: number;
  /**
   *
   * Some part of the screen item's area (usually the background) will be filled according to the FillLevel property.
   */
  ShowFillLevel: boolean;
  /**
   *
   * Pattern applied to the screen item's background.
   */
  BackFillPattern: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   *
   * Specifies the distance between the contained graphic and the border.
   */
  Padding: HmiPaddingPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiGraphOverviewControlColumnPart {
  /**
   */
  GraphOverviewControlBlock: number;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiGroup {
  /**
   */
  Properties: HmiDynamicPropertyPart;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   *
   * Array of references to contained items
   */
  ContainedItems: undefined;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiHeaderCellSystemPart {
  /**
   */
  Text: string;
  /**
   */
  Graphic: string;
  /**
   */
  ForeColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  SelectionForeColor: number;
  /**
   */
  SelectionBackColor: number;
  /**
   */
  SortOrder: number;
  /**
   */
  SortDirection: number;
  /**
   */
  AllowSort: boolean;
  /**
   */
  Name: string;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiHelpLinePart {
  /**
   */
  Visible: boolean;
  /**
   */
  Value: number;
}

interface HmiHotKeyPart {
  /**
   */
  HotKey: number;
}

interface HmiInputBehaviorPart {
  /**
   *
   * Value is written to tag once the screen item loses its focus.
   */
  AcceptOnDeactivated: boolean;
  /**
   *
   * On focus the last value will be cleared.
   */
  ClearOnActivate: boolean;
  /**
   *
   * Specifies whether the IOField accepts input while not showing it.
   */
  HiddenInput: boolean;
  /**
   *
   * Specifies whether the IOField accepts input when it gets the focus.
   */
  InputOnActivate: boolean;
}

interface HmiInputHintSystemPart {
  /**
   */
  RenderingTemplate: string;
}

interface HmiIOField {
  /**
   */
  ProcessValue: any;
  /**
   *
   * Migration hint: Classic specified property "Mode" only. TwoState mode was removed.
   */
  IOFieldType: number;
  /**
   *
   * Describes how the IOField's value will be formatted for display. Migration hint: Leading zeros as format pattern. Also previous properties "DecimalPlaces" and "DataFormat" (binary, hex, etc.) replaced are replaced by this pattern.
   */
  OutputFormat: string;
  /**
   */
  VerticalTextAlignment: number;
  /**
   */
  HorizontalTextAlignment: number;
  /**
   */
  TextTrimming: number;
  /**
   */
  Thresholds: HmiThresholdCollection;
  /**
   */
  InputBehavior: HmiInputBehaviorPart;
  /**
   *
   * Unit comes from Tag (see CHROM Tag Model)
   */
  MeasurementUnitType: number;
  /**
   *
   * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime.
   */
  MeasurementUnit: string;
  /**
   *
   * Color of the text in the widget.
   */
  ForeColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiLabel {
  /**
   */
  Text: string;
  /**
   *
   * Specifies whether lines shall be wrapped in case of not enough screen item width.
   */
  TextWrapping: number;
  /**
   */
  VerticalTextAlignment: number;
  /**
   */
  HorizontalTextAlignment: number;
  /**
   */
  TextTrimming: number;
  /**
   *
   * Color of the text in the widget.
   */
  ForeColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiLayerPart {
  /**
   *
   * stating whether screen items of a corresponding screen layer are visible or hidden. At runtime, turning off and on screen layers is required for the feature of decluttering, which depends on zooming.
   */
  Visible: boolean;
  /**
   *
   * Defines part of the range, for which the respective screen layer shall be visible or hidden.
   */
  MaximumZoom: number;
  /**
   *
   * Defines part of the range, for which the respective screen layer shall be visible or hidden.
   */
  MinimumZoom: number;
  /**
   *
   * Configured name of the Layer.
   */
  Name: string;
}

interface HmiLegendPart {
  /**
   */
  Visible: boolean;
  /**
   */
  ForeColor: number;
  /**
   */
  Font: HmiFontPart;
}

interface HmiLine {
  /**
   *
   * Relative to surface, not screen.
   */
  X1: number;
  /**
   *
   * Relative to surface, not screen.
   */
  Y1: number;
  /**
   *
   * Relative to surface, not screen.
   */
  X2: number;
  /**
   *
   * Relative to surface, not screen.
   */
  Y2: number;
  /**
   */
  LineColor: number;
  /**
   */
  AlternateLineColor: number;
  /**
   */
  DashType: number;
  /**
   */
  EndType: number;
  /**
   */
  StartType: number;
  /**
   */
  CapType: number;
  /**
   */
  LineWidth: number;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiLineColorPart {
  /**
   */
  NormalLine: number;
  /**
   */
  ActiveLine: number;
  /**
   */
  InactiveLine: number;
}

interface HmiListBox {
  /**
   */
  SelectionMode: number;
  /**
   */
  ProcessValue: any;
  /**
   */
  SelectorPosition: number;
  /**
   */
  ForeColor: number;
  /**
   *
   * 0 means auto mode, Item height is caliculated automatically
   */
  SelectionItemHeight: number;
  /**
   *
   * Entries that form the group.
   */
  SelectionItems: HmiSelectionItemCollection;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiListContainerSystemPart {
  /**
   */
  List: HmiDynamicPropertyCollection;
  /**
   */
  Current: HmiDynamicPropertyPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiLogicSymbolSystemPart {
  /**
   */
  HeaderForeColor: number;
  /**
   */
  ContentForeColor: number;
  /**
   */
  HeaderBackColor: number;
  /**
   */
  ContentBackColor: number;
  /**
   */
  LogicSymbolColor: number;
  /**
   */
  LogicSymbolLineType: number;
  /**
   */
  HeaderFont: HmiFontPart;
  /**
   */
  ContentFont: HmiFontPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiMarginPart {
  /**
   */
  Top: number;
  /**
   */
  Left: number;
  /**
   */
  Bottom: number;
  /**
   */
  Right: number;
}

interface HmiMarkerSystemPart {
  /**
   */
  MeasurementUnit: string;
  /**
   */
  BackColor: number;
  /**
   */
  ForeColor: number;
  /**
   */
  Thresholds: HmiThresholdPart;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiMatrixViewPart {
  /**
   */
  TileBorderWidth: number;
  /**
   */
  TileHeightMin: number;
  /**
   */
  TileHeightMax: number;
  /**
   */
  TileWidthMin: number;
  /**
   */
  TileWidthMax: number;
  /**
   */
  HardwareDetails: HmiSystemDiagnosisHardwareDetailCollection;
  /**
   */
  SystemDiagnosisHardwareDetailView: HmiSystemDiagnosisDetailViewPart;
}

interface HmiMediaControl {
  /**
   *
   * source of the media to be played (e.g. network, file ressource or camera)
   */
  Url: string;
  /**
   */
  AutoPlay: boolean;
  /**
   */
  VideoOutput: number;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
  /**
   */
  Pause(): void;
  /**
   */
  Play(): void;
  /**
   */
  Stop(): void;
}

interface HmiObjectExplorerControl {
  /**
   */
  DisplayViewType: number;
  /**
   */
  TargetObjectType: number;
  /**
   *
   * References an advanced control that is related to the object picker (usually the creator of the screen item at runtime).
   */
  LinkedItem: any;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiOpenLinkElement {
  /**
   */
  OpenLinkMode: number;
  /**
   */
  ActiveOnStartup: boolean;
  /**
   */
  Pipe: HmiPipePart;
  /**
   */
  Application: HmiApplicationPart;
  /**
   *
   * CustomControl-, SwacComponent-, WidgetType.
   */
  ContainedType: string;
  /**
   *
   * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control)
   */
  Properties: HmiDynamicPropertyPart;
  /**
   */
  Start(): void;
  /**
   */
  Stop(): void;
}

interface HmiOperabilityPart {
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
}

interface HmiOverviewParameterControl {
  /**
   */
  EditMode: number;
  /**
   */
  TimeZone: number;
  /**
   *
   * The specification of the filter syntax is defined in SDS CHROM General (please refer to "Query Language" chapter 4.1.4). An additional object model that allows to be mapped onto a filter string is currently an open issue.
   */
  Filter: string;
  /**
   */
  ParameterSetTypeDefault: any;
  /**
   */
  DetailedParameterControl: HmiDetailedParameterControl;
  /**
   *
   * Accepts only columns of type HmiOverviewParameterControlColumnPart
   */
  ParameterView: HmiDataGridViewPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiOverviewParameterControlColumnPart {
  /**
   */
  OverviewParameterControlBlock: number;
  /**
   *
   * Matches the considered column in binding source "ConsideredColumns" property
   */
  Key: string;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiPaddingPart {
  /**
   */
  Top: number;
  /**
   */
  Left: number;
  /**
   */
  Right: number;
  /**
   */
  Bottom: number;
}

interface HmiParameterPart {
  /**
   */
  ParameterName: string;
  /**
   */
  ParameterValue: any;
}

interface HmiPipePart {
  /**
   */
  PipeState: number;
  /**
   */
  PipeName: string;
  /**
   *
   * result of last property read or write operation
   */
  LastPropertyRequestResult: number;
  /**
   */
  ReconnectAutomatically: boolean;
  /**
   */
  CharSet: number;
}

interface HmiPlcDataSourcePart {
  /**
   *
   * References the HmiTag used for PDiag
   */
  Tag: string;
  /**
   *
   * References the HmiConnection for Tag. Will be set by ES when Tag is set.
   */
  Connection: any;
  /**
   *
   * Name of the DB used by the Tag. Will be set by ES when Tag is set.
   */
  DB_Name: string;
  /**
   */
  HmiConnectionName: string;
}

interface HmiPolygon {
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderWidth: number;
  /**
   *
   * Pattern applied to the screen item's background.
   */
  BackFillPattern: number;
  /**
   *
   * Percental value indicating some fill level.
   */
  FillLevel: number;
  /**
   */
  FillDirection: number;
  /**
   */
  DashType: number;
  /**
   */
  ShowFillLevel: boolean;
  /**
   */
  JoinType: number;
  /**
   */
  Points: any;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiPolyline {
  /**
   */
  LineColor: number;
  /**
   */
  AlternateLineColor: number;
  /**
   */
  DashType: number;
  /**
   */
  EndType: number;
  /**
   */
  StartType: number;
  /**
   */
  CapType: number;
  /**
   */
  LineWidth: number;
  /**
   */
  JoinType: number;
  /**
   */
  Points: any;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiPopupScreenWindow {
  /**
   */
  IsModal: boolean;
  /**
   *
   * Iidentifying the monitor in a multi-monitor configuration.
   */
  Monitor: number;
  /**
   *
   * Specifies the startup position of the screen window. In case of value 'none' the window is positioned relative to the configured Monitor via Left and Top property. Migration hint: Was "WindowStartupPosition" in Classic.
   */
  StartupPosition: number;
  /**
   */
  TabIntoWindow: boolean;
  /**
   *
   * Reference to a screen to be shown in the screen window.
   */
  Screen: string;
  /**
   *
   * Name is taken from the current screen when read. (For activation Name has to be known via CNS.)
   */
  ScreenName: string;
  /**
   *
   * Number is taken from the current screen when read. (For activation Number has to be known via CNS.)
   */
  ScreenNumber: number;
  /**
   *
   * Specifies the server prefix.
   */
  System: string;
  /**
   *
   * Defining the zoom factor for the screen window, which may differ from the zoom factor of the contained screen. The default is 1.0 representing an unzoomed (100%).
   */
  CurrentZoomFactor: number;
  /**
   *
   * Defines the screen position in the screen window.
   */
  VerticalScrollBarVisibility: number;
  /**
   *
   * Specifies the vertical position of the screen within the screen window in DIU.
   */
  VerticalScrollBarPosition: number;
  /**
   *
   * Defines the screen position in the screen window.
   */
  HorizontalScrollBarVisibility: number;
  /**
   *
   * Specifies the horizontal position of the screen within the screen window in DIU.
   */
  HorizontalScrollBarPosition: number;
  /**
   *
   * Specifies whether the screen or screen window shall adapt its size.
   */
  Adaption: number;
  /**
   *
   * States whether zooming is allowed (‘InteractiveZooming’ = true) or not for this screen window.
   */
  InteractiveZooming: boolean;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiProcessColumnPart {
  /**
   */
  DataSource: HmiDataSourcePart;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiProcessControl {
  /**
   */
  Online: boolean;
  /**
   *
   * Used as kind of smoothing together with Factor. Results within this range will be shown in the same row.
   */
  TimeStepSmoothingBase: number;
  /**
   *
   * Used as kind of smoothing together with Base. Results within this range will be shown in the same row.
   */
  TimeStepSmoothingFactor: number;
  /**
   */
  EditMode: number;
  /**
   *
   * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local)
   */
  TimeZone: number;
  /**
   *
   * Accepts exactly one column of type HmiTimeRangeColumnPart and multiple HmiProcessColumnPart
   */
  ProcessView: HmiDataGridViewPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiProcessDiagnosisCriteriaAnalysisControl {
  /**
   */
  SourceControl: HmiAlarmControl;
  /**
   */
  ForeColor: number;
  /**
   *
   * Accepts only columns of type HmiProcessDiagnosisCriteriaAnalysisControlColumn
   */
  CriteriaAnalysisView: HmiDataGridViewPart;
  /**
   */
  SnapToSourceControl: boolean;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiProcessDiagnosisCriteriaAnalysisControlColumnPart {
  /**
   */
  CriteriaAnalysisBlock: number;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiProcessDiagnosisGraphOverviewControl {
  /**
   */
  ShowOperationMode: boolean;
  /**
   */
  ForeColor: number;
  /**
   */
  GridLineColor: number;
  /**
   */
  SelectedStep: number;
  /**
   */
  PlcSource: HmiPlcDataSourcePart;
  /**
   */
  OperationMode: HmiProcessDiagnosisOperationModePart;
  /**
   */
  Font: HmiFontPart;
  /**
   *
   * Accepts only columns of type HmiGraphOverviewControlColumnPart
   */
  GraphOverview: HmiDataGridViewPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiProcessDiagnosisOperationModePart {
  /**
   */
  OpModeAutoText: string;
  /**
   */
  OpModeManText: string;
  /**
   */
  OpModeTapText: string;
  /**
   */
  OpModeTopText: string;
}

interface HmiProcessDiagnosisOverviewControl {
  /**
   */
  ForeColor: number;
  /**
   */
  LineColor: number;
  /**
   */
  PlcSource: HmiPlcDataSourcePart;
  /**
   */
  PDiagCategories: HmiProcessDiagnosisOverviewPart;
  /**
   */
  PDiagSupervisionTypes: HmiProcessDiagnosisOverviewPart;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiProcessDiagnosisOverviewElementPart {
  /**
   */
  Text: string;
  /**
   */
  ForeColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  Visible: boolean;
  /**
   */
  FlashingRate: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  AlternateForeColor: number;
}

interface HmiProcessDiagnosisOverviewPart {
  /**
   */
  Visible: boolean;
  /**
   */
  PDiagElements: HmiProcessDiagnosisOverviewElementCollection;
  /**
   */
  SymbolFont: HmiFontPart;
  /**
   */
  Label: HmiTextPart;
}

interface HmiProcessDiagnosisPlcCodeViewerControl {
  /**
   */
  ShowSymbolLine: boolean;
  /**
   */
  OverviewDetailRatio: number;
  /**
   */
  SymbolLineBackColor: number;
  /**
   */
  SymbolLineForeColor: number;
  /**
   */
  CurrentZoomFactor: number;
  /**
   */
  SymbolLineFont: HmiFontPart;
  /**
   */
  LineColors: HmiLineColorPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
  /**
   */
  Next(): void;
  /**
   *
   */
  OpenCodeViewerFromAlarm(HmiConnectionName: string, CpuAlarmID: ( HMIUint64 | any ), TextlistIndex: ( HMIUint64 | any )): void;
  /**
   *
   */
  OpenCodeViewerFromAlarmWithCA(HmiConnectionName: string, CpuAlarmID: ( HMIUint64 | any ), TextlistIndex: ( HMIUint64 | any ), ProducerID: number, StepNumber: number, InitialValues: number, SupervisionToBit: boolean): void;
  /**
   *
   */
  OpenGRAPHDetails(PlcName: string, Block: string, StepNumber: number): void;
  /**
   *
   */
  OpenGRAPHDetailsByConnectionName(HmiConnectionName: string, Block: string, StepNumber: number): void;
  /**
   *
   */
  OpenProDiagDetailsFB(PlcName: string, ContainingBlock: string, CallBlock: string, Pin: string, PinSubstringSearch: boolean): void;
  /**
   *
   */
  OpenProDiagDetailsFC(PlcName: string, ContainingBlock: string, CallBlock: string, Pin: string, UdtInstance: string, PinSubstringSearch: boolean): void;
  /**
   *
   */
  OpenProDiagDetailsNetwork(PlcName: string, ContainingBlock: string, Operand: string): void;
  /**
   */
  Previous(): void;
  /**
   */
  ResetToConfiguration(): void;
  /**
   */
  ToggleCriteriaAnalysis(): void;
  /**
   */
  ToggleGRAPHViewerMode(): void;
  /**
   */
  ToggleNetworkDisplay(): void;
  /**
   */
  ZoomIn(): void;
  /**
   */
  ZoomOut(): void;
}

interface HmiQualityPart {
  /**
   */
  Visible: boolean;
  /**
   */
  BadColor: number;
  /**
   */
  UncertainColor: number;
}

interface HmiRadioButtonGroup {
  /**
   */
  ProcessValue: any;
  /**
   */
  SelectorPosition: number;
  /**
   */
  ForeColor: number;
  /**
   *
   * 0 means auto mode, Item height is caliculated automatically
   */
  SelectionItemHeight: number;
  /**
   *
   * Entries that form the group.
   */
  SelectionItems: HmiSelectionItemCollection;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiRectangle {
  /**
   *
   * Specifies if and to which degree the corners of the rectangle shall be round.
   */
  Corners: HmiCornersPart;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderWidth: number;
  /**
   *
   * Pattern applied to the screen item's background.
   */
  BackFillPattern: number;
  /**
   *
   * Percental value indicating some fill level.
   */
  FillLevel: number;
  /**
   */
  FillDirection: number;
  /**
   */
  DashType: number;
  /**
   */
  ShowFillLevel: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiResourceListEntryPart {
  /**
   */
  ResourceListType: number;
  /**
   */
  Text: string;
  /**
   */
  Graphic: string;
}

interface HmiRulerIndicatorSystemPart {
  /**
   */
  BackColor: number;
  /**
   */
  ForeColor: number;
  /**
   */
  OutputFormat: string;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiRulerPart {
  /**
   */
  Width: number;
  /**
   */
  Color: number;
}

interface HmiScalingEntryPart {
  /**
   */
  BeginValue: number;
  /**
   */
  EndValue: number;
  /**
   */
  BeginValueTarget: number;
  /**
   */
  EndValueTarget: number;
  /**
   */
  DisplayName: string;
}

interface HmiScreen {
  /**
   *
   * Configured number of the screen. This property is not system-defined but configured by the user. This property has to be written into the screen hierarchy (mapping from number to CHROM ID) and is not written into the screen's RDF!
   */
  ScreenNumber: number;
  /**
   *
   * Reference to a screen template, from which this screen inherits aspects such as HmiScreenItems, HmiScreenLayers and HmiProperties
   */
  ScreenMaster: HmiScreenMaster;
  /**
   *
   * Points to the screen item (currently button only) that hast to be pressed for an explicit operation.
   */
  EnableExplicitUnlock: HmiButton;
  /**
   *
   * [DCS+ Engineering only] Specifies access control for the screen. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * States whether the screen is operable at all (‘Enabled’ = true) or not. If not, the screen appears read-only if visible, independend from the user authorization. Applies for entsire screen and all contained objects.
   */
  Enabled: boolean;
  /**
   *
   * Specifies the dimensions of the screen in device-independend units (DIU).
   */
  Width: number;
  /**
   *
   * Specifies the dimensions of the screen in device-independend units (DIU). 
   */
  Height: number;
  /**
   *
   * Specifyies the background fill pattern of the screen. The pattern is always shown behind the graphic.
   */
  BackFillPattern: number;
  /**
   *
   * Primary color of the screen's background.
   */
  BackColor: number;
  /**
   *
   * Secondary color of the screen's background to be used in FillPattern.
   */
  AlternateBackColor: number;
  /**
   *
   * Graphic to be shown in the screen's background
   */
  BackGraphic: string;
  /**
   *
   * The initial position of screen is defined through the current scrollbar position of the parent Hmi(TopLevel)ScreenWindow If an screen is smaller than its parent window, this alignment is used for positioning.
   */
  HorizontalAlignment: number;
  /**
   *
   * The initial position of screen is defined through the current scrollbar position of the parent Hmi(TopLevel)ScreenWindow If an screen is smaller than its parent window, this alignment is used for positioning.
   */
  VerticalAlignment: number;
  /**
   *
   * Specifies if the background fills just the screen or the entire window's view.
   */
  BackgroundFillMode: number;
  /**
   *
   * Specifies how the backgraphic is stretched.
   */
  BackGraphicStretchMode: number;
  /**
   */
  Name: string;
  /**
   */
  DisplayName: string;
  /**
   */
  Layers: HmiLayerCollection;
}

interface HmiScreenMaster {
  /**
   *
   * Indicates if the screen items of the screen template are visible or hidden. You may consider the screen master as a dedicated “screen layer”: attribute ‘Visible’ controls the visibility of the screen’s “screen master layer”.
   */
  Visible: boolean;
  /**
   */
  Name: string;
  /**
   */
  DisplayName: string;
  /**
   */
  Layers: HmiLayerCollection;
}

interface HmiScreenWindow {
  /**
   */
  TabIntoWindow: boolean;
  /**
   *
   * Reference to a screen to be shown in the screen window.
   */
  Screen: string;
  /**
   *
   * Name is taken from the current screen when read. (For activation Name has to be known via CNS.)
   */
  ScreenName: string;
  /**
   *
   * Number is taken from the current screen when read. (For activation Number has to be known via CNS.)
   */
  ScreenNumber: number;
  /**
   *
   * Specifies the server prefix.
   */
  System: string;
  /**
   *
   * Defining the zoom factor for the screen window, which may differ from the zoom factor of the contained screen. The default is 1.0 representing an unzoomed (100%).
   */
  CurrentZoomFactor: number;
  /**
   *
   * Defines the screen position in the screen window.
   */
  VerticalScrollBarVisibility: number;
  /**
   *
   * Specifies the vertical position of the screen within the screen window in DIU.
   */
  VerticalScrollBarPosition: number;
  /**
   *
   * Defines the screen position in the screen window.
   */
  HorizontalScrollBarVisibility: number;
  /**
   *
   * Specifies the horizontal position of the screen within the screen window in DIU.
   */
  HorizontalScrollBarPosition: number;
  /**
   *
   * Specifies whether the screen or screen window shall adapt its size.
   */
  Adaption: number;
  /**
   *
   * States whether zooming is allowed (‘InteractiveZooming’ = true) or not for this screen window.
   */
  InteractiveZooming: boolean;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiScreenWindowLayout {
  /**
   */
  Name: string;
  /**
   */
  DisplayName: string;
  /**
   */
  Width: number;
  /**
   */
  Height: number;
}

interface HmiScrollBarSystemPart {
  /**
   */
  AlternateBackColor: number;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  AlternateForeColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  ForeColor: number;
  /**
   */
  ThumbForeColor: number;
  /**
   */
  ThumbBackColor: number;
  /**
   *
   * Depending on horizontal or vertical orientation, Thickness will be considered by renderer for Width or Height.
   */
  Thickness: number;
  /**
   *
   * Defines whether the scrollbar floats over the content or needs some space from the content.
   */
  Floating: boolean;
  /**
   */
  RenderingTemplate: string;
}

interface HmiSelectionItemPart {
  /**
   */
  Text: string;
  /**
   */
  Graphic: string;
  /**
   */
  IsSelected: boolean;
}

interface HmiSelectionSystemPart {
  /**
   */
  BorderWidth: number;
  /**
   */
  BorderColor: number;
  /**
   */
  RenderingTemplate: string;
}

interface HmiSlider {
  /**
   */
  ThumbForeColor: number;
  /**
   */
  ThumbBackColor: number;
  /**
   *
   * While manipulating the sliding control, the value will be written down to process immediately, not only when releasing the control.
   */
  WriteDuringChange: boolean;
  /**
   *
   * Shows the current formatted value as text in addition to the bar.
   */
  ShowValue: boolean;
  /**
   *
   * Static position of the current value relative to scale and "bar". Will be shown below/right from title, if both Title and CurrentSliderValue share the same position.
   */
  ValuePosition: number;
  /**
   *
   * Migration hint: Was called "SegmentColoring" in Classic.
   */
  BarMode: number;
  /**
   */
  StraightScale: HmiStraightScalePart;
  /**
   */
  ProcessValue: any;
  /**
   *
   * Specifies how to illustrate limit indicators. Migration hint: Combines old properties "ShowLimitLines", "ShowLimitMarkers", etc.
   */
  ThresholdIndicators: number;
  /**
   *
   * The trend Indicator itself is part of the rendering template (e.g. an arrow up/down) and will be shown if latest value was higher/lower than the previous one.
   */
  ShowTrendIndicator: boolean;
  /**
   */
  TrendIndicatorColor: number;
  /**
   *
   * Used for ProcessIndicator or for Bar in SegementedStatic
   */
  ProcessValueIndicatorForeColor: number;
  /**
   */
  ProcessValueIndicatorBackColor: number;
  /**
   *
   * Defines the visual representation of indicator for the current process value.
   */
  ProcessValueIndicatorMode: number;
  /**
   *
   * Migration hint: Known as "StartValue"
   */
  OriginValue: number;
  /**
   *
   * States whether the origin value is an absolute value or if the origin is calculated from a percental declaration between minimum and maximum value.
   */
  RelativeToOrigin: boolean;
  /**
   *
   * Defines whether indicators for the highest/lowest value seen have to be shown. ("Schleppzeiger")
   */
  PeakIndicators: number;
  /**
   */
  OutputFormat: string;
  /**
   */
  NormalRangeColor: number;
  /**
   *
   * Max peak value based on the ProcessValue.
   */
  ComputedMaxPeakValue: any;
  /**
   *
   * Min peak value based on the ProcessValue
   */
  ComputedMinPeakValue: any;
  /**
   *
   * Calculated tendency for new value based on ProcessValue
   */
  ComputedValueTendency: number;
  /**
   */
  ScaleBackColor: number;
  /**
   */
  ScaleForeColor: number;
  /**
   *
   * Migration Hint: Was ProcessValueIndicatorFont before
   */
  Font: HmiFontPart;
  /**
   */
  Thresholds: HmiThresholdCollection;
  /**
   */
  Title: HmiTextPart;
  /**
   */
  Label: HmiTextPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiSnapPointPart {
  /**
   *
   * Reference to some screen item.
   */
  SourceItem: HmiScreenItemBase;
  /**
   *
   * Index of the relevant snap point. Index=0 is the snap point on top corresponding with 12 o'clock.
   */
  SelectedSnapPointIndex: number;
}

interface HmiStatusBarPart {
  /**
   */
  Visible: boolean;
  /**
   */
  Enabled: boolean;
  /**
   */
  BackColor: number;
  /**
   */
  ShowToolTips: boolean;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Elements: HmiControlBarElementCollection;
  /**
   */
  Margin: HmiMarginPart;
  /**
   */
  Padding: HmiPaddingPart;
}

interface HmiStraightScalePart {
  /**
   *
   * Migration hint: Former modes UpAndDown and LeftAndRight can be specified by using the BarOriginValue in addition to this orientation.
   */
  Orientation: number;
  /**
   *
   * The scaling type has influence on the scale (e.g. formatting the labels and ticks in a way it fits to logarithmic scaling), the bar segment as well as markers, indicators, etc.
   */
  ScalingType: number;
  /**
   *
   * Number of primary divisions (in between large ticks).
   */
  DivisionCount: number;
  /**
   *
   * Number of secondary divisions (in between small ticks). A division count of 1 does not draw additional smaller ticks.
   */
  SubDivisionCount: number;
  /**
   *
   * Defines to which primary tick a label has to be drawn, e.g. 3 would mean the first and every third tick is labeled.
   */
  LargeTickLabelingStep: number;
  /**
   */
  BeginValue: number;
  /**
   */
  EndValue: number;
  /**
   *
   * Specifies a format pattern that is applied to scale label's and process value indicators. Migration hint: Replaces "DecimalPlaces" and ShowSignForPositiveLabel" and "UseExponentialFormat"
   */
  OutputFormat: string;
  /**
   */
  LabelFont: HmiFontPart;
  /**
   *
   * Unit comes from Tag (see CHROM Tag Model)
   */
  MeasurementUnitType: number;
  /**
   *
   * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime.
   */
  MeasurementUnit: string;
  /**
   */
  AutoScaling: boolean;
  /**
   */
  ScaleMode: number;
  /**
   */
  LabelColor: number;
  /**
   */
  TickColor: number;
}

interface HmiSwacContainer {
  /**
   *
   * URL where the SWAC component is deployed and has to be taken from.
   */
  Url: string;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * CustomControl-, SwacComponent-, WidgetType.
   */
  ContainedType: string;
  /**
   *
   * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control)
   */
  Properties: HmiDynamicPropertyPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiSymbolContainer {
  /**
   */
  EffectColor: number;
  /**
   *
   * Open Issue: Can a wireframe visualization be applied as effect on commercially bought SVGs? What if the actual colormatrix could be specified at the SymbolView?
   */
  Effect: number;
  /**
   *
   * Does currently consider the quality code of the dynamic only, not the actual process value.
   */
  ProcessValue: any;
  /**
   */
  Flip: number;
  /**
   *
   * Limit colors will override the BackColor property in case of limit violation.
   */
  Thresholds: HmiThresholdCollection;
  /**
   *
   * In case of custom widget container, this template is provided through the ContainedType property and not by the current style.
   */
  RenderingTemplate: string;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * CustomControl-, SwacComponent-, WidgetType.
   */
  ContainedType: string;
  /**
   *
   * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control)
   */
  Properties: HmiDynamicPropertyPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiSymbolicIOField {
  /**
   */
  AcceptOnDeactivated: boolean;
  /**
   */
  ExpandOnActivate: boolean;
  /**
   *
   * Focus is moved to next screen item according to tab order on operation finished.
   */
  AutoTabOnAccept: boolean;
  /**
   *
   * Migration hint: Was known in Classic as "Mode".
   */
  IOFieldType: number;
  /**
   */
  ProcessValue: any;
  /**
   *
   * Accepts via double click or Enter or tap
   */
  AcceptExplicitely: boolean;
  /**
   *
   * Holds the text from the resource list entry valid for the current process value.
   */
  Text: string;
  /**
   *
   * Holds the graphic from the resource list entry valid for the current process value.
   */
  Graphic: string;
  /**
   */
  SelectionBackColor: number;
  /**
   */
  SelectionForeColor: number;
  /**
   */
  ResourceList: string;
  /**
   *
   * Index of the resource list entry valid for the current process value. (Or -1 if no entry is appropriate at all). Value is provided for templates from VCS.
   */
  SelectedIndex: number;
  /**
   */
  Content: HmiContentPart;
  /**
   *
   * Color of the text in the widget.
   */
  ForeColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiSystemDiagnosisControl {
  /**
   *
   * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local)
   */
  TimeZone: number;
  /**
   */
  SystemDiagnosisViewType: number;
  /**
   */
  ShowStatusPath: boolean;
  /**
   */
  DiagnosisOverviewPathText: string;
  /**
   */
  DiagnosisBufferPathText: string;
  /**
   */
  SystemDiagnosisView: HmiDataGridViewPart;
  /**
   */
  MatrixView: HmiMatrixViewPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
  /**
   */
  GoToPlc(): void;
}

interface HmiSystemDiagnosisControlColumnPart {
  /**
   */
  SystemDiagnosisControlBlock: number;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiSystemDiagnosisDetailViewPart {
  /**
   */
  HardwareDetails: HmiSystemDiagnosisHardwareDetailCollection;
  /**
   *
   * Specifies whether rows or colums have alternating colors.
   */
  ColoringMode: number;
  /**
   */
  ForeColor: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  AlternateForeColor: number;
  /**
   */
  SelectionForeColor: number;
  /**
   */
  SelectionBackColor: number;
  /**
   */
  SelectFullRow: boolean;
  /**
   */
  GridSelectionMode: number;
  /**
   */
  HorizontalScrollBarVisibility: number;
  /**
   */
  VerticalScrollBarVisibility: number;
  /**
   */
  SelectionBorderWidth: number;
  /**
   */
  SelectionBorderColor: number;
  /**
   *
   * Setting this property to true turns all AllowSort properties on the individual columns active (the actual true/false value of the column is used). False disables sorting for all columns (while the column's property value remains)
   */
  AllowSort: boolean;
  /**
   *
   * Unit: DIU. A size of 0 results in auto mode which adapts to the font size and the individual number of lines within a row. No partial rows shall be created. Images will be resized according to a single line.
   */
  RowHeight: number;
  /**
   */
  GridLineColor: number;
  /**
   */
  GridLineWidth: number;
  /**
   */
  GridLineVisibility: number;
  /**
   */
  AllowFilter: boolean;
  /**
   *
   * Is the font to be used within the table (cells)
   */
  Font: HmiFontPart;
  /**
   */
  HeaderSettings: HmiDataGridHeaderSettingsPart;
  /**
   */
  CellPadding: HmiPaddingPart;
  /**
   *
   * This collection can hold any class derived from HmiDataGridColumnPartbase. Engineering should only configure meaningful columns (e.g. HmiAlarmColumnPart for a complex property "AlarmView")
   */
  Columns: HmiDataGridColumnCollection;
}

interface HmiSystemDiagnosisHardwareDetailPart {
  /**
   */
  Visible: boolean;
  /**
   */
  SystemDiagnosisMatrixBlock: number;
}

interface HmiSystemDiagnosisMatrixColumnPart {
  /**
   */
  SystemDiagnosisMatrixBlock: number;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiTagInterfacePart {
  /**
   *
   * A simple tag’s primitive data type or STRUCT in case of a structured tag. Data types according to SDS CHROM General.
   */
  DataType: number;
  /**
   */
  Tag: string;
  /**
   *
   * Gives information about the tag name in the current language. (Comparable to measurement unit. See CHROM tag model.)
   */
  TagDisplayName: string;
  /**
   *
   * References the underlying structured tag type or null.
   */
  StructuredTagType: any;
}

interface HmiText {
  /**
   */
  Text: string;
  /**
   */
  VerticalTextAlignment: number;
  /**
   */
  HorizontalTextAlignment: number;
  /**
   */
  ForeColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiTextBox {
  /**
   */
  ReadOnly: boolean;
  /**
   */
  Text: string;
  /**
   *
   * Specifies whether lines shall be wrapped in case of not enough screen item width.
   */
  TextWrapping: number;
  /**
   */
  VerticalTextAlignment: number;
  /**
   */
  HorizontalTextAlignment: number;
  /**
   */
  TextTrimming: number;
  /**
   *
   * Color of the text in the widget.
   */
  ForeColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiTextPart {
  /**
   */
  Text: string;
  /**
   */
  ForeColor: number;
  /**
   */
  Visible: boolean;
  /**
   */
  Font: HmiFontPart;
}

interface HmiThresholdPart {
  /**
   *
   * "Gaps" have to be configured as transparent colors.
   */
  Color: number;
  /**
   *
   * Name of threshold
   */
  Name: string;
  /**
   */
  DisplayName: string;
  /**
   */
  ThresholdMode: number;
  /**
   *
   * Taken from tag. (Normal range does not provide any value, since there is no treshold at the tag.)
   */
  Value: number;
}

interface HmiTimeAxisPart {
  /**
   */
  OutputFormat: string;
  /**
   *
   * Always move visible area with recently added value.
   */
  AlwaysShowRecent: boolean;
  /**
   */
  LabelFont: HmiFontPart;
  /**
   */
  Visible: boolean;
  /**
   */
  DisplayName: string;
  /**
   */
  AxisColor: number;
  /**
   */
  AutoScaling: boolean;
  /**
   */
  ScaleMode: number;
  /**
   */
  LabelColor: number;
  /**
   */
  TickColor: number;
  /**
   */
  TimeRangeBase: number;
  /**
   */
  TimeRangeFactor: number;
  /**
   */
  BeginTime: number | string;
  /**
   */
  EndTime: number | string;
  /**
   */
  PointCount: number;
  /**
   */
  RangeType: number;
}

interface HmiTimeRangeColumnPart {
  /**
   */
  TimeRangeBase: number;
  /**
   */
  TimeRangeFactor: number;
  /**
   */
  BeginTime: number | string;
  /**
   */
  EndTime: number | string;
  /**
   */
  PointCount: number;
  /**
   */
  RangeType: number;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiToggleSwitch {
  /**
   */
  IsAlternateState: boolean;
  /**
   *
   * HotHeys are unique within a screen. In case of executing a hotkey, the chain is resolved starting from the active (local) window down to the HmiDesktop.
   */
  HotKey: number;
  /**
   *
   * Graphic shown while the button is NOT pressed/down. Migration hint: Was "GraphicOn" in Classic
   */
  Graphic: string;
  /**
   *
   * Text shown while the button is NOT pressed/down. Migration hint: Was "TextOn" in Classic
   */
  Text: string;
  /**
   *
   * Graphic shown while the button is pressed/down.
   */
  AlternateGraphic: string;
  /**
   *
   * Text shown while the button is pressed/down.
   */
  AlternateText: string;
  /**
   *
   * Color of the button's text
   */
  ForeColor: number;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Padding: HmiPaddingPart;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  BorderColor: number;
  /**
   */
  AlternateBorderColor: number;
  /**
   */
  BorderWidth: number;
  /**
   */
  BackColor: number;
  /**
   *
   * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom.
   */
  AlternateBackColor: number;
  /**
   */
  VisualizeQuality: boolean;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies the rotation angle of the screen item in degree.
   */
  RotationAngle: number;
  /**
   *
   * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterX: number;
  /**
   *
   * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point.
   */
  RotationCenterY: number;
  /**
   *
   * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement.
   */
  RotationCenterPlacement: number;
  /**
   */
  ToolTipText: string;
  /**
   *
   * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent.
   */
  Opacity: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
}

interface HmiToolBarPart {
  /**
   */
  UseHotKeys: boolean;
  /**
   */
  Visible: boolean;
  /**
   */
  Enabled: boolean;
  /**
   */
  BackColor: number;
  /**
   */
  ShowToolTips: boolean;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  Elements: HmiControlBarElementCollection;
  /**
   */
  Margin: HmiMarginPart;
  /**
   */
  Padding: HmiPaddingPart;
}

interface HmiTooltipSystemPart {
  /**
   */
  BackColor: number;
  /**
   */
  ForeColor: number;
  /**
   */
  BorderColor: number;
  /**
   */
  Text: string;
  /**
   */
  Graphic: string;
  /**
   */
  VerticalAlignment: number;
  /**
   */
  HorizontalAlignment: number;
  /**
   */
  Content: HmiContentPart;
  /**
   */
  Font: HmiFontPart;
  /**
   */
  RenderingTemplate: string;
}

interface HmiTopLevelScreenWindow {
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   * Reference to a screen to be shown in the screen window.
   */
  Screen: string;
  /**
   *
   * Name is taken from the current screen when read. (For activation Name has to be known via CNS.)
   */
  ScreenName: string;
  /**
   *
   * Number is taken from the current screen when read. (For activation Number has to be known via CNS.)
   */
  ScreenNumber: number;
  /**
   *
   * Specifies the server prefix.
   */
  System: string;
  /**
   *
   * Defining the zoom factor for the screen window, which may differ from the zoom factor of the contained screen. The default is 1.0 representing an unzoomed (100%).
   */
  CurrentZoomFactor: number;
  /**
   *
   * Defines the screen position in the screen window.
   */
  VerticalScrollBarVisibility: number;
  /**
   *
   * Specifies the vertical position of the screen within the screen window in DIU.
   */
  VerticalScrollBarPosition: number;
  /**
   *
   * Defines the screen position in the screen window.
   */
  HorizontalScrollBarVisibility: number;
  /**
   *
   * Specifies the horizontal position of the screen within the screen window in DIU.
   */
  HorizontalScrollBarPosition: number;
  /**
   *
   * Specifies whether the screen or screen window shall adapt its size.
   */
  Adaption: number;
  /**
   *
   * States whether zooming is allowed (‘InteractiveZooming’ = true) or not for this screen window.
   */
  InteractiveZooming: boolean;
  /**
   *
   * Iidentifying the monitor in a multi-monitor configuration.
   */
  Monitor: number;
  /**
   *
   * Specifies the startup position of the screen window. In case of value 'none' the window is positioned relative to the configured Monitor via Left and Top property. Migration hint: Was "WindowStartupPosition" in Classic.
   */
  StartupPosition: number;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
}

interface HmiTouchArea {
  /**
   */
  BackColor: number;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons.
   */
  Authorization: any;
  /**
   *
   * Reflects whether the currently logged in user has sufficient function rights (see property Authorization).
   */
  Operability: number;
  /**
   *
   * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed.
   */
  RequireExplicitUnlock: boolean;
}

interface HmiTrendAreaPart {
  /**
   */
  SelectedTrend: HmiTrendPart;
  /**
   *
   * Defines the appearance of the two statistic rulers in this area.
   */
  StatisticRulers: HmiRulerPart;
  /**
   */
  TopTimeAxes: HmiTimeAxisCollection;
  /**
   */
  BottomTimeAxes: HmiTimeAxisCollection;
  /**
   */
  Trends: HmiTrendCollection;
  /**
   *
   * Is used as key for the graph area
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  BackColor: number;
  /**
   *
   * Grid lines are always shown for the area's inner axes (that's the axis with index=0 in the parts arrays)
   */
  GridLines: number;
  /**
   */
  MajorGridLinesColor: number;
  /**
   */
  MinorGridLinesColor: number;
  /**
   *
   * The TrendControl will set the areas proportional to their individual HeightFactors.
   */
  SizeFactor: number;
  /**
   *
   * Defines the appearance of the ruler in this area.
   */
  Ruler: HmiRulerPart;
  /**
   */
  LeftValueAxes: HmiYValueAxisCollection;
  /**
   */
  RightValueAxes: HmiYValueAxisCollection;
}

interface HmiTrendColumnPart {
  /**
   */
  TrendInfoBlock: number;
  /**
   *
   * Unique name for the column within the DataGrid
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   *
   * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted.
   */
  Enabled: boolean;
  /**
   */
  Width: number;
  /**
   */
  MinimumWidth: number;
  /**
   */
  MaximumWidth: number;
  /**
   *
   * This property is ignored if the AllowSort=false on the overall screen item is set.
   */
  AllowSort: boolean;
  /**
   */
  SortDirection: number;
  /**
   *
   * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique.
   */
  SortOrder: number;
  /**
   */
  OutputFormat: string;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  ForeColor: number;
  /**
   *
   * alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells
   */
  BackColor: number;
  /**
   */
  Header: HmiDataGridColumnHeaderPart;
  /**
   */
  Content: HmiContentPart;
}

interface HmiTrendCompanion {
  /**
   */
  TrendCompanionMode: number;
  /**
   *
   * Specifies wether the companion will always be shown, or just if the parent's ShowRuler property is set.
   */
  ShowAlways: boolean;
  /**
   *
   * Takes trend controls back color as back color for each row in the grid.
   */
  UseSourceControlBackColor: boolean;
  /**
   *
   * Takes the individual trend color as font color for the corresponding entry in the grid.
   */
  UseSourceControlTrendColors: boolean;
  /**
   */
  SourceTrendControl: any;
  /**
   *
   * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local)
   */
  TimeZone: number;
  /**
   *
   * Accepts only columns of type HmiTrendColumnPart
   */
  TrendRulerView: HmiDataGridViewPart;
  /**
   *
   * Accepts only columns of type HmiTrendColumnPart
   */
  TrendStatisticAreaView: HmiDataGridViewPart;
  /**
   *
   * Accepts only columns of type HmiTrendColumnPart
   */
  TrendStatisticResultView: HmiDataGridViewPart;
  /**
   */
  SnapToSourceControl: boolean;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiTrendControl {
  /**
   */
  ShowStatisticRulers: boolean;
  /**
   *
   * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local)
   */
  TimeZone: number;
  /**
   */
  TrendAreas: HmiTrendAreaCollection;
  /**
   *
   * The space between TrendAreas. There is no such property for Comfort since there is always just exactly one area.
   */
  AreaSpacing: number;
  /**
   *
   * Online = Diagram is updated with new values, Offline = Diagram is frozen, no new values are added.
   */
  Online: boolean;
  /**
   */
  ExtendRulerToAxis: boolean;
  /**
   */
  ShowRuler: boolean;
  /**
   */
  ShiftAxes: boolean;
  /**
   */
  Legend: HmiLegendPart;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiTrendPart {
  /**
   *
   * Reference to a time axis part within the TrendControl.
   */
  TimeAxis: HmiTimeAxisPart;
  /**
   *
   * Aggregation applied to logging tags only.
   */
  AggregationMode: number;
  /**
   */
  TrendMode: number;
  /**
   */
  Visible: boolean;
  /**
   */
  DisplayName: string;
  /**
   */
  DashType: number;
  /**
   */
  LineWidth: number;
  /**
   */
  LineColor: number;
  /**
   */
  BackFillPattern: number;
  /**
   */
  BackColor: number;
  /**
   */
  AlternateBackColor: number;
  /**
   */
  MarkerType: number;
  /**
   */
  MarkerDimension: number;
  /**
   */
  MarkerColor: number;
  /**
   */
  MarkerGraphic: string;
  /**
   *
   * Only relevant for historical data. False means starting from current time. True means data is requested for the complete visible area
   */
  ShowLoggedDataImmediately: boolean;
  /**
   */
  YValueAxis: HmiYValueAxisPart;
  /**
   *
   * If Limit colors are defined and quality is uncertain with RangeViolation, colors defined in this part are ignored.
   */
  QualityVisualization: HmiQualityPart;
  /**
   *
   * Applies for Y-axis only.
   */
  Thresholds: HmiThresholdCollection;
  /**
   */
  DataSourceY: HmiDataSourcePart;
}

interface HmiWebControl {
  /**
   *
   * String formatted URL pointing to the address the web browser shall display.
   */
  Url: string;
  /**
   */
  BackColor: number;
  /**
   */
  ToolBar: HmiToolBarPart;
  /**
   */
  StatusBar: HmiStatusBarPart;
  /**
   *
   * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic.
   */
  WindowFlags: number;
  /**
   */
  RenderingTemplate: string;
  /**
   */
  Icon: string;
  /**
   */
  CaptionColor: number;
  /**
   */
  Caption: HmiTextPart;
  /**
   *
   * Coordinates in DIU
   */
  Top: number;
  /**
   *
   * Coordinates in DIU
   */
  Left: number;
  /**
   *
   * in DIU
   */
  Width: number;
  /**
   *
   * in DIU
   */
  Height: number;
  /**
   *
   * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered.
   */
  CurrentQuality: number;
  /**
   */
  ShowFocusVisual: boolean;
  /**
   *
   * Distance to surrounding outside of the screen item when used in layout containers.
   */
  Margin: HmiMarginPart;
  /**
   *
   * Configured name of the screen item.
   */
  Name: string;
  /**
   */
  Visible: boolean;
  /**
   */
  Layer: HmiLayerPart;
  /**
   */
  Enabled: boolean;
  /**
   *
   * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization.
   */
  TabIndex: number;
  /**
   *
   * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen.
   */
  StyleItemClass: string;
  /**
   *
   */
  FireCommand(commandId: number, custom: boolean): void;
}

interface HmiWindowFrameSystemPart {
  /**
   */
  RenderingTemplate: string;
}

interface HmiXValueAxisPart {
  /**
   */
  ApplyScalingEntries: boolean;
  /**
   */
  ShowScalingDisplayNames: boolean;
  /**
   */
  AutoRange: boolean;
  /**
   */
  HelpLines: HmiHelpLineCollection;
  /**
   */
  ScalingEntries: HmiScalingEntryCollection;
  /**
   */
  Visible: boolean;
  /**
   */
  DisplayName: string;
  /**
   */
  AxisColor: number;
  /**
   *
   * The scaling type has influence on the scale (e.g. formatting the labels and ticks in a way it fits to logarithmic scaling), the bar segment as well as markers, indicators, etc.
   */
  ScalingType: number;
  /**
   *
   * Number of primary divisions (in between large ticks).
   */
  DivisionCount: number;
  /**
   *
   * Number of secondary divisions (in between small ticks). A division count of 1 does not draw additional smaller ticks.
   */
  SubDivisionCount: number;
  /**
   *
   * Defines to which primary tick a label has to be drawn, e.g. 3 would mean the first and every third tick is labeled.
   */
  LargeTickLabelingStep: number;
  /**
   */
  BeginValue: number;
  /**
   */
  EndValue: number;
  /**
   *
   * Specifies a format pattern that is applied to scale label's and process value indicators. Migration hint: Replaces "DecimalPlaces" and ShowSignForPositiveLabel" and "UseExponentialFormat"
   */
  OutputFormat: string;
  /**
   */
  LabelFont: HmiFontPart;
  /**
   *
   * Unit comes from Tag (see CHROM Tag Model)
   */
  MeasurementUnitType: number;
  /**
   *
   * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime.
   */
  MeasurementUnit: string;
  /**
   */
  AutoScaling: boolean;
  /**
   */
  ScaleMode: number;
  /**
   */
  LabelColor: number;
  /**
   */
  TickColor: number;
}

interface HmiYValueAxisPart {
  /**
   */
  ApplyScalingEntries: boolean;
  /**
   */
  ShowScalingDisplayNames: boolean;
  /**
   */
  AutoRange: boolean;
  /**
   */
  HelpLines: HmiHelpLineCollection;
  /**
   */
  ScalingEntries: HmiScalingEntryCollection;
  /**
   */
  Visible: boolean;
  /**
   */
  DisplayName: string;
  /**
   */
  AxisColor: number;
  /**
   *
   * The scaling type has influence on the scale (e.g. formatting the labels and ticks in a way it fits to logarithmic scaling), the bar segment as well as markers, indicators, etc.
   */
  ScalingType: number;
  /**
   *
   * Number of primary divisions (in between large ticks).
   */
  DivisionCount: number;
  /**
   *
   * Number of secondary divisions (in between small ticks). A division count of 1 does not draw additional smaller ticks.
   */
  SubDivisionCount: number;
  /**
   *
   * Defines to which primary tick a label has to be drawn, e.g. 3 would mean the first and every third tick is labeled.
   */
  LargeTickLabelingStep: number;
  /**
   */
  BeginValue: number;
  /**
   */
  EndValue: number;
  /**
   *
   * Specifies a format pattern that is applied to scale label's and process value indicators. Migration hint: Replaces "DecimalPlaces" and ShowSignForPositiveLabel" and "UseExponentialFormat"
   */
  OutputFormat: string;
  /**
   */
  LabelFont: HmiFontPart;
  /**
   *
   * Unit comes from Tag (see CHROM Tag Model)
   */
  MeasurementUnitType: number;
  /**
   *
   * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime.
   */
  MeasurementUnit: string;
  /**
   */
  AutoScaling: boolean;
  /**
   */
  ScaleMode: number;
  /**
   */
  LabelColor: number;
  /**
   */
  TickColor: number;
}

interface HmiThresholdCollection {
  /**
   * Count of items in HmiThresholdPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiThresholdPart Collection
   *
   *
   * @returns HmiThresholdPart
   */
  (HmiThresholdName: ( HmiThresholdPart | string )):HmiThresholdPart;
  Item(HmiThresholdName: ( HmiThresholdPart | string )): HmiThresholdPart;
}

interface HmiConsideredColumnCollection {
  /**
   * Count of items in HmiConsideredColumnPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiConsideredColumnPart Collection
   *
   *
   * @returns HmiConsideredColumnPart
   */
  (HmiConsideredColumnName: ( HmiConsideredColumnPart | string )):HmiConsideredColumnPart;
  Item(HmiConsideredColumnName: ( HmiConsideredColumnPart | string )): HmiConsideredColumnPart;
}

interface HmiSelectionItemCollection {
  /**
   * Count of items in HmiSelectionItemPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiSelectionItemPart Collection
   *
   *
   * @returns HmiSelectionItemPart
   */
  (HmiSelectionItemName: ( HmiSelectionItemPart | string )):HmiSelectionItemPart;
  Item(HmiSelectionItemName: ( HmiSelectionItemPart | string )): HmiSelectionItemPart;
}

interface HmiParameterCollection {
  /**
   * Count of items in HmiParameterPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiParameterPart Collection
   *
   *
   * @returns HmiParameterPart
   */
  (HmiParameterName: ( HmiParameterPart | string )):HmiParameterPart;
  Item(HmiParameterName: ( HmiParameterPart | string )): HmiParameterPart;
}

interface HmiDataGridColumnCollection {
  /**
   * Count of items in HmiDataGridColumnPartBase Collection
   */
  Count: number;
  /**
   * Name of the item in HmiDataGridColumnPartBase Collection
   *
   *
   * @returns HmiDataGridColumnPartBase
   */
  (HmiDataGridColumnName: string):HmiDataGridColumnPartBase;
  Item(HmiDataGridColumnName: string): HmiDataGridColumnPartBase;
}

interface HmiLayerCollection {
  /**
   * Count of items in HmiLayerPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiLayerPart Collection
   *
   *
   * @returns HmiLayerPart
   */
  (HmiLayerName: ( HmiLayerPart | string )):HmiLayerPart;
  Item(HmiLayerName: ( HmiLayerPart | string )): HmiLayerPart;
}

interface HmiXValueAxisCollection {
  /**
   * Count of items in HmiXValueAxisPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiXValueAxisPart Collection
   *
   *
   * @returns HmiXValueAxisPart
   */
  (HmiXValueAxisName: ( HmiXValueAxisPart | string )):HmiXValueAxisPart;
  Item(HmiXValueAxisName: ( HmiXValueAxisPart | string )): HmiXValueAxisPart;
}

interface HmiFunctionTrendCollection {
  /**
   * Count of items in HmiFunctionTrendPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiFunctionTrendPart Collection
   *
   *
   * @returns HmiFunctionTrendPart
   */
  (HmiFunctionTrendName: ( HmiFunctionTrendPart | string )):HmiFunctionTrendPart;
  Item(HmiFunctionTrendName: ( HmiFunctionTrendPart | string )): HmiFunctionTrendPart;
}

interface HmiYValueAxisCollection {
  /**
   * Count of items in HmiYValueAxisPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiYValueAxisPart Collection
   *
   *
   * @returns HmiYValueAxisPart
   */
  (HmiYValueAxisName: ( HmiYValueAxisPart | string )):HmiYValueAxisPart;
  Item(HmiYValueAxisName: ( HmiYValueAxisPart | string )): HmiYValueAxisPart;
}

interface HmiFunctionTrendAreaCollection {
  /**
   * Count of items in HmiFunctionTrendAreaPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiFunctionTrendAreaPart Collection
   *
   *
   * @returns HmiFunctionTrendAreaPart
   */
  (HmiFunctionTrendAreaName: ( HmiFunctionTrendAreaPart | string )):HmiFunctionTrendAreaPart;
  Item(HmiFunctionTrendAreaName: ( HmiFunctionTrendAreaPart | string )): HmiFunctionTrendAreaPart;
}

interface HmiDynamicPropertyCollection {
  /**
   * Count of items in HmiDynamicPropertyPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiDynamicPropertyPart Collection
   *
   *
   * @returns HmiDynamicPropertyPart
   */
  (HmiDynamicPropertyName: ( HmiDynamicPropertyPart | string )):HmiDynamicPropertyPart;
  Item(HmiDynamicPropertyName: ( HmiDynamicPropertyPart | string )): HmiDynamicPropertyPart;
}

interface HmiSystemDiagnosisHardwareDetailCollection {
  /**
   * Count of items in HmiSystemDiagnosisHardwareDetailPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiSystemDiagnosisHardwareDetailPart Collection
   *
   *
   * @returns HmiSystemDiagnosisHardwareDetailPart
   */
  (HmiSystemDiagnosisHardwareDetailName: ( HmiSystemDiagnosisHardwareDetailPart | string )):HmiSystemDiagnosisHardwareDetailPart;
  Item(HmiSystemDiagnosisHardwareDetailName: ( HmiSystemDiagnosisHardwareDetailPart | string )): HmiSystemDiagnosisHardwareDetailPart;
}

interface HmiProcessDiagnosisOverviewElementCollection {
  /**
   * Count of items in HmiProcessDiagnosisOverviewElementPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiProcessDiagnosisOverviewElementPart Collection
   *
   *
   * @returns HmiProcessDiagnosisOverviewElementPart
   */
  (HmiProcessDiagnosisOverviewElementName: ( HmiProcessDiagnosisOverviewElementPart | string )):HmiProcessDiagnosisOverviewElementPart;
  Item(HmiProcessDiagnosisOverviewElementName: ( HmiProcessDiagnosisOverviewElementPart | string )): HmiProcessDiagnosisOverviewElementPart;
}

interface HmiControlBarElementCollection {
  /**
   * Count of items in HmiControlBarElementPartBase Collection
   */
  Count: number;
  /**
   * Name of the item in HmiControlBarElementPartBase Collection
   *
   *
   * @returns HmiControlBarElementPartBase
   */
  (HmiControlBarElementName: string):HmiControlBarElementPartBase;
  Item(HmiControlBarElementName: string): HmiControlBarElementPartBase;
}

interface HmiTimeAxisCollection {
  /**
   * Count of items in HmiTimeAxisPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiTimeAxisPart Collection
   *
   *
   * @returns HmiTimeAxisPart
   */
  (HmiTimeAxisName: ( HmiTimeAxisPart | string )):HmiTimeAxisPart;
  Item(HmiTimeAxisName: ( HmiTimeAxisPart | string )): HmiTimeAxisPart;
}

interface HmiTrendCollection {
  /**
   * Count of items in HmiTrendPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiTrendPart Collection
   *
   *
   * @returns HmiTrendPart
   */
  (HmiTrendName: ( HmiTrendPart | string )):HmiTrendPart;
  Item(HmiTrendName: ( HmiTrendPart | string )): HmiTrendPart;
}

interface HmiTrendAreaCollection {
  /**
   * Count of items in HmiTrendAreaPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiTrendAreaPart Collection
   *
   *
   * @returns HmiTrendAreaPart
   */
  (HmiTrendAreaName: ( HmiTrendAreaPart | string )):HmiTrendAreaPart;
  Item(HmiTrendAreaName: ( HmiTrendAreaPart | string )): HmiTrendAreaPart;
}

interface HmiHelpLineCollection {
  /**
   * Count of items in HmiHelpLinePart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiHelpLinePart Collection
   *
   *
   * @returns HmiHelpLinePart
   */
  (HmiHelpLineName: ( HmiHelpLinePart | string )):HmiHelpLinePart;
  Item(HmiHelpLineName: ( HmiHelpLinePart | string )): HmiHelpLinePart;
}

interface HmiScalingEntryCollection {
  /**
   * Count of items in HmiScalingEntryPart Collection
   */
  Count: number;
  /**
   * Name of the item in HmiScalingEntryPart Collection
   *
   *
   * @returns HmiScalingEntryPart
   */
  (HmiScalingEntryName: ( HmiScalingEntryPart | string )):HmiScalingEntryPart;
  Item(HmiScalingEntryName: ( HmiScalingEntryPart | string )): HmiScalingEntryPart;
}

interface HMITagLoggingEnums_hmiTagLoggingValueFlags{
  /**
   * More than one piece of data that may be hidden exists at same timestamp
   */
  extra: 0;
  /**
   * Calculated value based on a resampling interval or configured logging cycle and optionally a volatile aggregation
   *
   * IDH_CALCULATED = 0 means that the value is not calculated and therefore is a raw value as it is stored in the storage system
   */
  calculated: 2;
  /**
   * Specifies that this value is a bounding value
   */
  bounding: 16;
  /**
   * There is no data available for the given filter set
   */
  noData: 32;
  /**
   * This is the very first value available in the storage system
   */
  firstStored: 64;
  /**
   * This is the very last value stored
   */
  lastStored: 128;
}

interface HMITagLoggingEnums {
  /**
   * Used for HMILoggedTagValueResult.Flags in the HMILoggedTag.Read() method
   */
  hmiTagLoggingValueFlags: HMITagLoggingEnums_hmiTagLoggingValueFlags
}

interface HMITagLoggingSysFct {
  /**
   * Write a new tag value to the Tag Logging Archive
   *
   * @param LoggedTagName Specifies the tag
   * @param Value Specifies the value to be written to the tag
   * @param Timestamp Specifies the timestamp to the corresponding tag value
   *
   * @returns ErrorCode
   */
  WriteManualValue(LoggedTagName: ( HMILoggedTag | string ), Value: any, Timestamp: number | string): number;
  /**
   * Removes all the records from the specified Tag Logging Archive
   *
   * The method clears the archive, deletes all segments except one and assigns a new left time bound to the current segment. This method does not make a backup before emptying the log.
   *
   * @param LogName Specifies the name of the archive to which the records shall be removed
   *
   * @returns Promise
   */
  ClearTagLog(LogName: string): Promise<{}>;
}

interface HMILoggedTag {
  /**
   * Name of the HMILoggingTag
   */
  Name: HMILoggedTag;
  /**
   * Add a comment for a HmiLoggedTag.
   *
   *
   * @returns Promise
   */
  AddComment(TimeStamp: number | string, Language: number, Comment: string): Promise<{}>;
  /**
   * Reads the logged Tag values in the specified time range
   *
   * @param dateFrom Specifies the end of the time range
   * @param dateTo Specifies the beginning of the time range
   * @param boundingValue Specifies if you want to get bounding values for the time range
   *
   * @returns Promise
   */
  Read(dateFrom: number | string, dateTo: number | string, boundingValue: boolean): Promise<HMILoggedTagResult>;
  /**
   * Writes correct value to a logged tag
   *
   * @param Timestamp Specifies the timestamp of the tag to be corrected
   * @param Value Specifies the new tag value to be updated
   *
   * @returns ErrorCode
   */
  WriteCorrectionValue(Timestamp: number | string, Value: any): number;
}

interface HMILoggedTagSet {
  /**
   * The number of HMILoggedTags in the HMILoggedTagSet
   */
  Count: number;
  /**
   * The error code of the last method call.
   */
  Error: number;
  /**
   * Accesses a HMILoggedTag object within the HMILoggedTagSet
   *
   * @param name LoggedTag name or index (1..n)
   *
   * @returns HMILoggedTag
   */
  (name: ( HMILoggedTag | string | number )):HMILoggedTag;
  Item(name: ( HMILoggedTag | string | number )): HMILoggedTag;
  /**
   * Adds a HMILoggedTag to the LoggedTagSet
   *
   * @param loggedTags This is either the name of a LoggedTag, an array of LoggedTag names. 
   *
   * @returns HMILoggedTag[]
   */
  Add(loggedTags: ( HMILoggedTag | string | string[] )): HMILoggedTag[];
  /**
   * Removes HMILoggedTags from the LoggedTagSet
   *
   * @param loggedTags This is either the name of a LoggedTag or an array of LoggedTag names
   */
  Remove(loggedTags: ( HMILoggedTag | string | string[] )): void;
  /**
   * Reads the logged Tag values in the specified time range
   *
   * @param dateFrom Specifies the end of the time range
   * @param dateTo Specifies the beginning of the time range
   * @param boundingValue Specifies if you want to get bounding values for the time range
   *
   * @returns Promise
   */
  Read(dateFrom: number | string, dateTo: number | string, boundingValue: boolean): Promise<HMILoggedTagResult[]>;
  /**
   * Clears all HMILoggedTags from the LoggedTagSet
   */
  Clear(): void;
}

interface HMITagLogging {
  Enums: HMITagLoggingEnums;
  SysFct: HMITagLoggingSysFct;
  /**
   * Creates a HMILoggedTagSet object.
   *
   * Optionally you can pass an array of LoggedTag names or even a nested array containing LoggedTag names together with their values to initialize the LoggedTagSet.
   *
   * @param loggedTagNameArray Array of LoggedTagNames or just a single LoggedTagName
   *
   * @returns HMILoggedTagSet
   */
  CreateLoggedTagSet(loggedTagNameArray?: ( HMILoggedTag[] | string | string[] )): HMILoggedTagSet;
  /**
   * Returns a HMILoggedTag object
   *
   * @param loggedTagName Name of the HMILoggedTag
   *
   * @returns HMILoggedTag
   */
  LoggedTags(loggedTagName: ( HMILoggedTag | string )): HMILoggedTag;
}

interface HMILoggedTagResult {
  /**
   * The name of the HMILoggedTag
   */
  Name: HMILoggedTag;
  /**
   * The error code of the last method call
   */
  Error: number;
  /**
   * The values of the HMILoggedTag
   */
  Values: any;
}

interface HMILoggedTagValueResult {
  /**
   * The value of the HMILoggedTagValueResult
   */
  Value: any;
  /**
   * QualityCode of the HMILoggedTagValueResult
   */
  Quality: number;
  /**
   * TimeStamp of the HMILoggedTagValueResult
   */
  TimeStamp: number | string;
  /**
   * Flags of the HMILoggedTagValueResult, refer to hmiTagLoggingValueFlags for the bitwise coded values
   */
  Flags: number;
}

interface HMITagSysFct {
  /**
   * Writes a value to a HMITag
   *
   * @param Tag Specifies the tag
   * @param Value Specifies the value to be written to the tag
   *
   * @returns ErrorCode
   */
  SetTagValue(Tag: ( HMITag | string ), Value: any): number;
  /**
   * Read a value from a HMITag
   *
   * @param Tag Specifies the tag
   *
   * @returns Variant
   */
  GetTagValue(Tag: ( HMITag | string )): any;
  /**
   * Decreases the value of the tag by the specified number.
   *
   *  This is a synchronous function which returns an Error Code as result.
   *
   * @param Tag Specifies the tag to be decreased
   * @param value Must be a numeric type
   *
   * @returns ErrorCode
   */
  DecreaseTag(Tag: ( HMITag | string ), value: number): number;
  /**
   * Increases the value of the tag by the specified number.
   *
   *  This is a synchronous function which returns an Error Code as result.
   *
   * @param Tag Specifies the tag to be increased
   * @param value Must be a numeric type
   *
   * @returns ErrorCode
   */
  IncreaseTag(Tag: ( HMITag | string ), value: number): number;
  /**
   * Inverts the specified bit of the value of the supplied tag.
   *
   *  This is a synchronous function which returns an Error Code as result.
            If the bit in the tag has the value of 1 (TRUE), it will be set to 0 (FALSE).
            If the bit in the tag has the value of 0 (FALSE), it will be set to 1 (TRUE).
            
   *
   * @param Tag Specifies the tag to be modified
   * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag)..
   *
   * @returns ErrorCode
   */
  InvertBitInTag(Tag: ( HMITag | string ), BitNumber: number): number;
  /**
   * Resets the specified bit of the value of the supplied tag.
   *
   *  This is a synchronous function which returns an Error Code as result.
			Sets a bit in the specified tag to 0 (FALSE).
			After changing the given bit, the system function transfers the entire tag back to the PLC. 
			It is not checked whether other bits in the tags have changed in the meantime. 
			Operator and PLC have read-only access.
			
   *
   * @param Tag Specifies the tag to be modified
   * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag).
   *
   * @returns ErrorCode
   */
  ResetBitInTag(Tag: ( HMITag | string ), BitNumber: number): number;
  /**
   * Sets the specified bit of the value of the supplied tag.
   *
   *  This is a synchronous function which returns an Error Code as result.
			Sets a bit in the specified tag to 1 (TRUE).
			After changing the given bit, the system function transfers the entire tag back to the PLC. 
			It is not checked whether other bits in the tags have changed in the meantime. 
			Operator and PLC have read-only access.
			
   *
   * @param Tag Specifies the tag to be modified
   * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag).
   *
   * @returns ErrorCode
   */
  SetBitInTag(Tag: ( HMITag | string ), BitNumber: number): number;
  /**
   * Converts the input bit pattern of the source tags into an output bit pattern of the target tags.
   *
   *  This is a synchronous function which returns an Error Code as result.
            This involves bit shifting and masking.
            The shifted input bit pattern is multiplied by the bit mask, with bit-by-bit logical AND operation. 
            The resultant decimal value is saved to the target tag.
            Please note the following:
            • The source and target tags have the same number of bits.
            • The number of bits to shift is less than the number of bits in the source tag and target tag.
            • Bits to mask does not have more bits than the source tag and the target tag.
            
   *
   * @param Source Specifies the tag that includes the input bit pattern
   * @param Target Specifies the tag in which the output bit pattern is saved
   * @param bitsToShift Indicates the number of bits by which the input bit pattern is shifted right
   * @param bitPattern Indicates the bit pattern that is used to multiply the shifted input bit pattern
   *
   * @returns ErrorCode
   */
  ShiftAndMask(Source: ( HMITag | string ), Target: ( HMITag | string ), bitsToShift: number, bitPattern: number): number;
  /**
   * Creates a HMISetTagCommand object to be used for out-parameters of SystemFunctions
   *
   * @param TagName Specifies the tag to write
   *
   * @returns HMISetTagCommand
   */
  CreateSetTagCommand(TagName: ( HMITag | string )): HMISetTagCommand;
  /**
   * Updates Tag values using and Update ID
   *
   * @param UpdateID Specifies the Update IDs of the Tags
   *
   * @returns ErrorCode
   */
  UpdateTag(UpdateID: number): number;
  /**
   * Creates a HMISetTagCommand object to be used for out-parameters of SystemFunctions
   *
   * @param TagName Specifies the tag to write
   *
   * @returns HMIGetAndClearTagCommand
   */
  CreateGetAndClearTagCommand(TagName: ( HMITag | string )): HMIGetAndClearTagCommand;
}

interface HMITagInchingSysFct {
  /**
   * Reads the tag from the PLC and writes the value from the parameter to a HMITag
   *
   * @param Tag Specifies the tag
   * @param Value Specifies the value to be written to the tag
   *
   * @returns ErrorCode
   */
  ReadAndSetTagValue(Tag: ( HMITag | string ), Value: any): number;
  /**
   * Reads the tag from the PLC and decreases the value of the tag by the specified number.
   *
   *  This is a synchronous function which returns an Error Code as result.
   *
   * @param Tag Specifies the tag to be decreased
   * @param value Must be a numeric type
   *
   * @returns ErrorCode
   */
  ReadAndDecreaseTag(Tag: ( HMITag | string ), value: number): number;
  /**
   * Reads the tag from the PLC and increases the value of the tag by the specified number.
   *
   *  This is a synchronous function which returns an Error Code as result.
   *
   * @param Tag Specifies the tag to be increased
   * @param value Must be a numeric type
   *
   * @returns ErrorCode
   */
  ReadAndIncreaseTag(Tag: ( HMITag | string ), value: number): number;
  /**
   * Reads the tag from the PLC and inverts the specified bit of the value of the supplied tag.
   *
   *  This is a synchronous function which returns an Error Code as result.
			If the bit in the tag has the value of 1 (TRUE), it will be set to 0 (FALSE).
			If the bit in the tag has the value of 0 (FALSE), it will be set to 1 (TRUE).
			
   *
   * @param Tag Specifies the tag to be modified
   * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag)..
   *
   * @returns ErrorCode
   */
  ReadAndInvertBitInTag(Tag: ( HMITag | string ), BitNumber: number): number;
  /**
   * Reads the tag from the PLC and resets the specified bit of the value of the supplied tag.
   *
   *  This is a synchronous function which returns an Error Code as result.
			Sets a bit in the specified tag to 0 (FALSE).
			After changing the given bit, the system function transfers the entire tag back to the PLC. 
			It is not checked whether other bits in the tags have changed in the meantime. 
			Operator and PLC have read-only access.
			
   *
   * @param Tag Specifies the tag to be modified
   * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag).
   *
   * @returns ErrorCode
   */
  ReadAndResetBitInTag(Tag: ( HMITag | string ), BitNumber: number): number;
  /**
   * Reads the tag from the PLC and sets the specified bit of the value of the supplied tag.
   *
   *  This is a synchronous function which returns an Error Code as result.
			Sets a bit in the specified tag to 1 (TRUE).
			After changing the given bit, the system function transfers the entire tag back to the PLC. 
			It is not checked whether other bits in the tags have changed in the meantime. 
			Operator and PLC have read-only access.
			
   *
   * @param Tag Specifies the tag to be modified
   * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag).
   *
   * @returns ErrorCode
   */
  ReadAndSetBitInTag(Tag: ( HMITag | string ), BitNumber: number): number;
}

interface HMITagsEnums_hmiWriteType{
  /**
   * Writes the value without waiting.
   *
   * Writes the value without waiting. The cache and the process image are not already updated when the call returns.
   */
  hmiWriteNoWait: 0;
  /**
   * Writes the value and waits until the value is written in the PLC.
   *
   * Writes the value and waits until the value is written in the PLC. The cache and the process value are not already updated when the call returns.
   */
  hmiWriteWait: 1;
}

interface HMITagsEnums_hmiReadType{
  /**
   * Reads the value from the cache.
   *
   * Reads the value from the cache. When there is no active subscription for the HMITag, a new subscription will be created which makes sure the cache is updated regularly. This subsciption creation will take some time. To avoid this latency time, you should add the needed HMITags to the trigger condition of the script which will make sure that the HMITags are already in the cache.
   */
  hmiReadCache: 0;
  /**
   * Reads the value from the PLC.
   *
   * Reads the value from the PLC. This will take some time. The cache will not be updated.
   */
  hmiReadDirect: 1;
}

interface HMITagsEnums {
  /**
   * Used by the Write() methods of HMITag and HMITagSet
   */
  hmiWriteType: HMITagsEnums_hmiWriteType
  /**
   * Used by the Read() methods of HMITag and HMITagSet
   */
  hmiReadType: HMITagsEnums_hmiReadType
}

interface HMITag {
  /**
   * Name of the HMITag
   */
  Name: HMITag;
  /**
   * Value of the HMITag
   */
  Value: any;
  /**
   * QualityCode of the Value
   */
  QualityCode: number;
  /**
   * TimeStamp of the Value
   */
  TimeStamp: number | string;
  /**
   * ErrorCode of the previous Read or Write operation
   */
  LastError: number;
  /**
   * Description of the ErrorCode
   */
  ErrorDescription: string;
  /**
   * Reads the value of the HMITag
   *
   * Reads the HMITag from the process images, sets all the members of the HMITag and returns the value.
   *
   * @param readType Specifies if the tag value will be read from the cache (this is the default) or the PLC.
   *
   * @returns Variant
   */
  Read(readType?: hmiReadType): any;
  /**
   * Writes the value of the tag.
   *
   * Writes the HMITag and, sets the attributes LastError and ErrorDescription. When the writeType hmiWriteNoWait is used,  the ErrorCode and LastError won't contain useful information. Alternatively you can use TagSet.WriteAsync() when you need the result of the Write operation without waiting.
   *
   * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default).
   *
   * @returns ErrorCode
   */
  Write(value?: any, writeType?: hmiWriteType): number;
  /**
   * Increases the value of the tag by the specified number.
   *
   * This is an asynchrounous function which returns a Promise object. The Promise can be used to wait until the function has finished.
   *
   * @param value Must be a numeric type
   *
   * @returns Promise
   */
  Increase(value: number): Promise<{}>;
  /**
   * Decreases the value of the tag by the specified number.
   *
   * This is an asynchrounous function which returns a Promise object. The Promise can be used to wait until the function has finished.
   *
   * @param value Must be a numeric type
   *
   * @returns Promise
   */
  Decrease(value: number): Promise<{}>;
  /**
   * Sets the specified bit in the tag.
   *
   * This is an asynchrounous function which returns a Promise object. The Promise can be used to wait until the function has finished.
   *
   * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag).
   *
   * @returns Promise
   */
  SetBit(BitNumber: number): Promise<{}>;
  /**
   * Clears the specified bit in the tag.
   *
   * This is an asynchrounous function which returns a Promise object. The Promise can be used to wait until the function has finished.
   *
   * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag).
   *
   * @returns Promise
   */
  ResetBit(BitNumber: number): Promise<{}>;
  /**
   * This function, in script, can be used to raise system event for tag value change based on tag write success or faliure.
   *
   * Example "var tag1 = Tags("Tag1"); var err = tag1.WriteWithOperatorMessage(5000,"Reason");}"
   *
   * @param value Specifies value to write for tag
   * @param reason Specifies Reason for change in value.
   *
   * @returns ErrorCode
   */
  WriteWithOperatorMessage(value: any, reason: string): number;
  /**
   * Writes the value of the tag taking qualityCode and Timestamp as input.
   *
   * Writes the HMITag and, sets the attributes LastError and ErrorDescription. When the writeType hmiWriteNoWait is used,  the ErrorCode and LastError won't contain useful information. Alternatively you can use TagSet.WriteAsync() when you need the result of the Write operation without waiting.
   *
   * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default).
   *
   * @returns ErrorCode
   */
  WriteQCD(value?: any, writeType?: hmiWriteType, TimeStamp?: number | string, QualityCode?: number): number;
}

interface HMITagSet {
  /**
   * The number of HMITags in the HMITagSet
   */
  Count: number;
  /**
   * The error code of the last method call.
   */
  LastError: number;
  /**
   * The error description of the last method call.
   */
  ErrorDescription: string;
  /**
   * Accesses a HMITag object within the TagSet
   *
   * @param name TagName or index (1..n)
   *
   * @returns HMITag
   */
  (name: ( HMITag | string | number )):HMITag;
  Item(name: ( HMITag | string | number )): HMITag;
  /**
   * Adds a HMITag to the TagSet
   *
   * @param tag This is either the name of a tag, an array of tag names or a two dimensional array of tag name / value pairs. 
   *
   * @returns HMITag[]
   */
  Add(tag: ( HMITag | string | string[] | any[][] )): HMITag[];
  /**
   * Removes a HMITag from the TagSet
   *
   * @param tag This is either the name of a tag(s), an array of tag names or a two dimensional array of tag name / value pairs.
   */
  Remove(tag: ( HMITag | string | string[] | any[][] )): void;
  /**
   * Reads the values of all HMITags in the TagSet.
   *
   * Reads the HMITags from the process images, sets all the members of the HMITags.
   *
   * @param readType Specifies if the tag values will be read from the cache (this is the default) or the PLC.
   */
  Read(readType?: hmiReadType): void;
  /**
   * Reads the values either from the process image or the PLC and makes sure the values are not older than maxAge.
   *
   * maxAge is the maximum age of the Tag value. maxAge=0 means the Tag values are read directly from the PLC. The behavior of this function is almost identical to Read(hmiReadDirect), that means in many cases it will the value directly from the PLC, in the other cases it reads the value from the process image, the cache will never be used. This means this function is not appropriate to be called from cyclic scripts, the better way is to use a subscription of the values. Using this function will not create a subscription for the HMITags and not update the cache.
The Promise will only be rejected when all items could not be read.
   *
   * @param maxAge TimeSpan in ms
   *
   * @returns Promise
   */
  ReadMaxAge(maxAge: number): Promise<HMITagSet>;
  /**
   * Reads the values of all HMITags in the TagSet asynchronously using a Promise object.
   *
   * Reads the HMITags from the process images, sets all the members of the HMITags.
The Promise will only be rejected when all items could not be read.
   *
   * @param readType Specifies if the tag values will be read from the cache (this is the default) or the PLC.
   *
   * @returns Promise
   */
  ReadAsync(readType?: hmiReadType): Promise<HMITagSet>;
  /**
   * Writes the values of all HMITags in the TagSet.
   *
   * Writes the HMITags and, sets the attributes LastError and ErrorDescription. When the writeType hmiWriteNoWait is used,  the ErrorCode and LastError won't contain useful information.
   *
   * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default).
   */
  Write(writeType?: hmiWriteType): void;
  /**
   * Writes the values of all HMITags in the TagSet asynchronously using a Promise object.
   *
   * Writes the HMITag values, sets all the members of the HMITags.
The Promise will only be rejected when all items could not be written.
   *
   * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default).
   *
   * @returns Promise
   */
  WriteAsync(writeType?: hmiWriteType): Promise<HMITagSet>;
  /**
   * Removes all HMITags from the TagSet
   */
  Clear(): void;
  /**
   * This function, in script, can be used to raise system event on the tag value change based on tag write success or faliure.
   *
   * Example "var ts = Tags.CreateTagSet();ts.Add("Tag1");ts.Add("Tag2"); ts.Item("Tag1").Value = 10;ts.Item("Tag2").Value = 20;var err = tag1.WriteWithOperatorMessage("Reason");}"
   *
   * @param reason Specifies Reason for change in value.
   *
   * @returns ErrorCode
   */
  WriteWithOperatorMessage(reason: string): number;
  /**
   * Writes the values of all HMITags in the TagSet taking QualityCode and Timestamp as inputs.
   *
   * Writes the HMITags and, sets the attributes LastError and ErrorDescription. When the writeType hmiWriteNoWait is used,  the ErrorCode and LastError won't contain useful information.
   *
   * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default).
   */
  WriteQCD(writeType?: hmiWriteType): void;
  /**
   * Writes the values of all HMITags in the TagSet asynchronously using a Promise object.
   *
   * Writes the HMITag values,which takes QualityCode and Timestamp sets all the members of the HMITags.
				The Promise will only be rejected when all items could not be written.
   *
   * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default).
   *
   * @returns Promise
   */
  WriteAsyncQCD(writeType?: hmiWriteType): Promise<HMITagSet>;
}

interface HMITagResult {
  /**
   * Name of the HMITag
   */
  Name: HMITag;
  /**
   * Value of the HMITag
   */
  Value: any;
  /**
   * QualityCode of the Value
   */
  QualityCode: number;
  /**
   * TimeStamp of the Value
   */
  TimeStamp: number | string;
  /**
   * ErrorCode of the previous Read or Write operation
   */
  LastError: number;
  /**
   * Description of the ErrorCode
   */
  ErrorDescription: string;
}

interface HMITagSubscription {
  /**
   * Subscribe for tag changes
   *
   * 
          Example "const subs = HMIRuntime.Tags.CreateSubscription(['HMI_Tag_1', 'HMI_Tag_2'], (changedTags) =>
          {
						for(const tag of changedTags)
						{
							HMIRuntime.Trace(`Tag ${tag.Name} value updated to ${tag.Value}`);
						}
						subs.Stop();
          });
          subs.Start();"
   *
   * @returns ErrorCode
   */
  Start(): number;
  /**
   * To cancel subscription for tags
   *
   * 
          Example "const subs = HMIRuntime.Tags.CreateSubscription(['HMI_Tag_1', 'HMI_Tag_2'], (changedTags) =>
          {
						for(const tag of changedTags)
						{
							HMIRuntime.Trace(`Tag ${tag.Name} value updated to ${tag.Value}`);
						}
						subs.Stop();
          });
          subs.Start();"
        
   *
   * @returns ErrorCode
   */
  Stop(): number;
}

interface HMITagInching {
}

interface HMITags {
  SysFct: HMITagSysFct;
  Enums: HMITagsEnums;
  Inching: HMITagInching;
  /**
   * Returns a HMITag object
   *
   * Will normally be called as Tags("tagName").
   *
   * @param tagName Name of the HMITag
   *
   * @returns HMITag
   */
  (tagName: ( HMITag | string )):HMITag;
  Item(tagName: ( HMITag | string )): HMITag;
  /**
   * Creates a HMITagSet object.
   *
   * Optionally you can pass an array of tag names to initialize the TagSet.
   *
   * @param tagNameArray Array of TagNames or just a single TagName
   *
   * @returns HMITagSet
   */
  CreateTagSet(tagNameArray?: ( HMITag[] | string | string[] )): HMITagSet;
  /**
   * Creates a new tag subscription
   *
   * @param tagNameArray Array of TagNames or just a single TagName
   * @param OnTag Array of TagNames or just a single TagName
   *
   * @returns HMITagSubscription
   */
  CreateSubscription(tagNameArray: ( HMITag[] | string | string[] ), OnTag: { (tagResult: ( HMITagResult[] | any )): void }): HMITagSubscription;
}

interface HMISetTagCommand {
  /**
   * Used as helper function for SystemFunctions to set Tag Values
   *
   *
   * @returns ErrorCode
   */
  (Value: any):number;
  SetValue(Value: any): number;
}

interface HMIGetAndClearTagCommand extends HMIGetAndClearValueCommandBase {
  /**
   * Used as helper function for SystemFunctions to get and clear a tag value
   *
   * @returns Variant
   */
  ():any;
  GetAndClearValue(): any;
}

interface HMITimers {
  /**
   * Execute function at specified intervals.It will return timer object id
   *
   * Example "var TimerID = HMIRuntime.Timers.SetInterval(update,1000);"
   *
   * @param CallbackFunction The Function to be executed at specific intervals. Function prototype: TimerCallback()
   * @param DelayInMillisecs The intervals (in milliseconds) on how often to execute the code
   *
   * @returns Int32
   */
  SetInterval(CallbackFunction: { (): void }, DelayInMillisecs: number): number;
  /**
   * Takes timer object ID from SetInterval and clears the interval set by SetInterval
   *
   * Example "var TimerID = HMIRuntime.Timers.SetInterval(update, 1000); HMIRuntime.Timers.ClearInterval(TimerID);"
   *
   * @param TimerID The ID of the timer object to stop execution.
   */
  ClearInterval(TimerID: number): void;
  /**
   * To delay execution of function for a specific amount of time(in milliseconds) and returns ID of the timer.
   *
   * Example "var TimerID = HMIRuntime.Timers.SetTimeout(update, 1000);"
   *
   * @param CallbackFunction The function to be executed after specified time interval has expired. Function prototype: TimerCallback()
   * @param DelayInMillisecs The number of milliseconds to wait before executing the code.
   *
   * @returns Int32
   */
  SetTimeout(CallbackFunction: { (): void }, DelayInMillisecs: number): number;
  /**
   * It takes timer id from SetTimeout and clears the interval set by SetTimeout.
   *
   * Example "Var TimerID = HMIRuntime.Timers.SetTimeout(update,1000); HMIRuntime.Timers.ClearTimeout(TimerID);"
   *
   * @param TimerID The ID of the timer object to stop execution.
   */
  ClearTimeout(TimerID: number): void;
}

interface HMIUI {
  /**
   * The screen which has the input focus.
   *
   * Actually the last screen which got the input focus. When the graphics application loses the focus, this property still contains the screen which had the focus before the application lost the focus.
   */
  ActiveScreen: HmiScreen;
  /**
   * The collection of the top level screen windows
   */
  Windows: HMITopLevelWindows;
  /**
   * The collection of the pop up screen windows
   */
  PopupScreenWindows: any;
  /**
   * The current TopLevelWindow in the context of the script.This is the same as UI.FindItem('~')
   */
  RootWindow: HmiTopLevelScreenWindow;
  /**
   * The style of the screens and screen items
   */
  Style: string;
  /**
   * Dataset object for session-global data
   */
  DataSet: HMIDataSet;
  Enums: HmiUIEnums;
  SysFct: HMIUISysFct;
  /**
   * Returns item (screen item / part) by screen item path
   *
   *
   * @returns HmiScreenObjectBase
   */
  FindItem(screenItemPath: string): HmiScreenObjectBase;
  /**
   * Opens the faceplate in a Popup Window and sets the values of the interface properties
   *
   * @param invisible Set this parameter to 'true' to create the Faceplate invisible
   *
   * @returns HmiPopupScreenWindow
   */
  OpenFaceplateInPopup(faceplateType: ( HmiFaceplateType | string ), title: string, interface: any, parentScreen?: ( HmiScreen | any ), invisible?: boolean): HmiPopupScreenWindow;
  /**
   * Returns client information based on the requested info type
   *
   * @param infoType Type of client information requested (HmiClientInfoType enumeration).
   *
   * @returns Variant
   */
  GetClientInfo(infoType: HmiClientInfoType): any;
}

interface HMIWindows {
  /**
   * The number of screen windows in the collection.
   */
  Count: number;
  /**
   * Used to access the Windows collection.
   *
   * @param WindowName Name of the screen window
   *
   * @returns HmiScreenWindow
   */
  (WindowName: ( HmiScreenWindow | string )):HmiScreenWindow;
  Item(WindowName: ( HmiScreenWindow | string )): HmiScreenWindow;
}

interface HMITopLevelWindows {
  /**
   * The number of top level windows in the collection.
   */
  Count: number;
  /**
   * Used to access the top level Windows collection.
   *
   * @param WindowName Name of the top level screen window
   *
   * @returns HmiTopLevelScreenWindow
   */
  (WindowName: ( HmiTopLevelScreenWindow | string )):HmiTopLevelScreenWindow;
  Item(WindowName: ( HmiTopLevelScreenWindow | string )): HmiTopLevelScreenWindow;
}

interface HMIScreenWindowInterface extends HmiScreenWindow {
  /**
   * The absolute window path, starting at the top level window.
   */
  Path: string;
  /**
   * The screen object hosted in the window
   */
  CurrentScreen: HmiScreen;
  /**
   * The name of the screen which is displayed in the window. Also used to load a different screen in the window.
   *
   * This can be different from CurrentScreen.Name, when the requested screen is not completely loaded or when it doesn't exist.
   */
  Screen: string;
  /**
   * Parent container.
   */
  Parent: HmiScreenObjectBase;
  /**
   * Closes the ScreenWindow.
   *
   * @returns Bool
   */
  Close(): boolean;
}

interface HMIPopupScreenWindowAddProps extends HmiScreenWindow {
  /**
   * The monitor number of the window.
   */
  Monitor: number;
  /**
   * The startup position of the window
   */
  StartupPosition: number;
}

interface HMIScreenObjectBaseInterface extends HmiScreenObjectBase {
  /**
   * Parent container
   */
  Parent: HmiScreenObjectBase;
  /**
   * Configures the flashing of the given property. Returns true if successful.
   *
   * @param propertyName Name of the property where flashing should be configured
   * @param enable If true flashing will be activated
   * @param value property value for flashing. When ommited the exsiting value will be used.
   * @param alternateValue alternate property value for flashing. When ommited the exsiting alternate value will be used.
   * @param rate Rate of flashing. When ommited the existing rate or HmiFlashingRate.Medium will be used
   *
   * @returns Bool
   */
  PropertyFlashing(propertyName: string, enable: boolean, value?: any, alternateValue?: any, rate?: HmiFlashingRate): boolean;
  /**
   * Returns true if the current user is authorized to operate this object.
   *
   * @returns Bool
   */
  CheckAuthorization(): boolean;
}

interface HmiScreenObjectBase {
}

interface HmiScreenItemBase {
}

interface HMIScreenItemInterface extends HmiScreenItemBase {
  /**
   * Parent container
   */
  Parent: HmiScreen;
  /**
   * Configures the flashing of the given property. Returns true if successful.
   *
   * @param propertyName Name of the property where flashing should be configured
   * @param enable If true flashing will be activated
   * @param value property value for flashing. When ommited the exsiting value will be used.
   * @param alternateValue alternate property value for flashing. When ommited the exsiting alternate value will be used.
   * @param rate Rate of flashing. When ommited the existing rate or HmiFlashingRate.Medium will be used
   *
   * @returns Bool
   */
  PropertyFlashing(propertyName: string, enable: boolean, value?: any, alternateValue?: any, rate?: HmiFlashingRate): boolean;
  /**
   * Returns true if the current user is authorized to operate this item.
   *
   * @returns Bool
   */
  CheckAuthorization(): boolean;
}

interface HMIScreenInterface extends HmiScreen {
  /**
   * The collection of the screen items in this screen
   */
  Items: HMIScreenItems;
  /**
   * The collection of the screen windows in this screen
   */
  Windows: HMIWindows;
  /**
   * The container window of the screen.
   */
  CurrentWindow: HmiScreenWindow;
  /**
   * Parent screen in which the parent container window is shown.
   */
  ParentScreen: HmiScreen;
  /**
   * Dataset object for screen-global data
   */
  DataSet: HMIDataSet;
  /**
   * Parent container.
   */
  Parent: HmiScreenWindow;
  /**
   * Returns item (screen item / part) by screen item path
   *
   *
   * @returns HmiScreenObjectBase
   */
  FindItem(screenItemPath: string): HmiScreenObjectBase;
  /**
   * Configures the flashing of the given property. Returns true if successful.
   *
   * @param propertyName Name of the property where flashing should be configured
   * @param enable If true flashing will be activated
   * @param value property value for flashing. When ommited the exsiting value will be used.
   * @param alternateValue alternate property value for flashing. When ommited the exsiting alternate value will be used.
   * @param rate Rate of flashing. When ommited the existing rate or HmiFlashingRate.Medium will be used
   *
   * @returns Bool
   */
  PropertyFlashing(propertyName: string, enable: boolean, value?: any, alternateValue?: any, rate?: HmiFlashingRate): boolean;
}

interface HMIFaceplateInterface extends HmiFaceplateType {
  /**
   * Parent container
   */
  Parent: HmiScreenObjectBase;
  /**
   * The collection of the screen items in this faceplate
   */
  Items: HMIScreenItems;
  /**
   * Returns item (screen item / part) by screen item path
   *
   *
   * @returns HmiScreenObjectBase
   */
  FindItem(screenItemPath: string): HmiScreenObjectBase;
  /**
   * Opens the faceplate in a new Popup Window
   *
   * @param independentWindow When 'true' the lifetime of the PopUp is decoupled from the lifetime of the calling Faceplate
   * @param invisible Set this parameter to 'true' to create the Faceplate invisible
   *
   * @returns HmiPopupScreenWindow
   */
  OpenFaceplateInPopup(faceplateType: ( HmiFaceplateType | string ), title: string, independentWindow?: boolean, invisible?: boolean): HmiPopupScreenWindow;
  /**
   * Configures the flashing of the given property. Returns true if successful.
   *
   * @param propertyName Name of the property where flashing should be configured
   * @param enable If true flashing will be activated
   * @param value property value for flashing. When ommited the exsiting value will be used.
   * @param alternateValue alternate property value for flashing. When ommited the exsiting alternate value will be used.
   * @param rate Rate of flashing. When ommited the existing rate or HmiFlashingRate.Medium will be used
   *
   * @returns Bool
   */
  PropertyFlashing(propertyName: string, enable: boolean, value?: any, alternateValue?: any, rate?: HmiFlashingRate): boolean;
  /**
   * Closes the FaceplateContainer (by setting it invisible) or the PopupWindow.
   *
   * @returns Bool
   */
  Close(): boolean;
  /**
   * Raises a custom event of the faceplate
   *
   *
   * @returns Bool
   */
  RaiseEvent(name: string, parameters: any): boolean;
}

interface HMIScreenItems {
  /**
   * Used to access the ScreenItems collection
   *
   * @param ScreenItemName Name of a screen item
   *
   * @returns HmiScreenItemBase
   */
  (ScreenItemName: ( HmiScreenItemBase | string )):HmiScreenItemBase;
  Item(ScreenItemName: ( HmiScreenItemBase | string )): HmiScreenItemBase;
}

interface HMIUISysFct {
  /**
   * Changes screen in a screenwindow
   *
   * @param screenName Name of new screen
   * @param screenWindowPath Name of the ScreenWindow in which to change the screen
   *
   * @returns ErrorCode
   */
  ChangeScreen(screenName: ( HmiScreen | string ), screenWindowPath: ( HmiScreenWindow | string )): number;
  /**
   * Sets a property of a screen item
   *
   * @param screenItemPath Path to the ScreenItem
   * @param screenItemPropertyName Property name of the screenitem
   * @param value Value to set to the screen item property
   *
   * @returns ErrorCode
   */
  SetPropertyValue(screenItemPath: ( HmiScreenItemBase | string ), screenItemPropertyName: string, value: any): number;
  /**
   * Gets a property of a screen item
   *
   * @param screenItemPath Path to the ScreenItem
   * @param screenItemPropertyName Property name of the screenitem
   *
   * @returns Variant
   */
  GetPropertyValue(screenItemPath: ( HmiScreenItemBase | string ), screenItemPropertyName: string): any;
  /**
   * Changes the language of the runtime
   *
   * @param lcid LCID of the new language
   *
   * @returns ErrorCode
   */
  SetLanguage(lcid: number): number;
  /**
   * Open a Screen in a PopupWindow
   *
   * @param popupWindowName Name of the PopupWindow. The name must be unique within the scope of the parentScreen.
   * @param screenName Name of the screen to load in the PopupWindow
   * @param toggleOpen When toggleOpen=true the popup window will be closed if it is opened again
   * @param caption The window title of the PopupWindow
   * @param left Window position: offset from left margin
   * @param top Window position: offset from top margin
   * @param hideCloseButton When hideCloseButton=true the close button will be hidden
   * @param parentScreenPath Path to the parent HmiScreen. When empty the Popup will be a global Popup.
   *
   * @returns ErrorCode
   */
  OpenScreenInPopup(popupWindowName: string, screenName: ( HmiScreen | string ), toggleOpen: boolean, caption: string, left: number, top: number, hideCloseButton: boolean, parentScreenPath?: string): number;
  /**
   * Sets the runtime language to the next one, according to the list of configured RT languages
   *
   * @returns ErrorCode
   */
  ToggleLanguage(): number;
  /**
   * Closes a PopupWindow
   *
   * @param popupWindowPath The path of the PopupWindow
   *
   * @returns ErrorCode
   */
  ClosePopup(popupWindowPath: string): number;
  /**
   * Logs off the current logged in user.
   *
   * @returns ErrorCode
   */
  LogOff(): number;
  /**
   * Changes screen in a screenwindow asynchronously.
   *
   * @param screenName Name of new screen
   * @param screenWindowPath Name of the ScreenWindow in which to change the screen
   *
   * @returns Promise
   */
  ChangeScreenAsync(screenName: ( HmiScreen | string ), screenWindowPath: ( HmiScreenWindow | string )): Promise<{}>;
  /**
   * Changes screen in a screen window
   *
   * @param screenNumber Number of new screen
   * @param screenWindowPath Name of the ScreenWindow in which to change the screen
   *
   * @returns Promise
   */
  ChangeScreenAsyncByNumber(screenNumber: number, screenWindowPath: ( HmiScreenWindow | string )): Promise<{}>;
  /**
   * Changes screen in a screen window
   *
   * @param screenNumber Number of new screen
   * @param screenWindowPath Name of the ScreenWindow in which to change the screen
   *
   * @returns ErrorCode
   */
  ChangeScreenByNumber(screenNumber: number, screenWindowPath: ( HmiScreenWindow | string )): number;
  /**
   * Open a Screen in a PopupWindow
   *
   * @param popupWindowName Name of the PopupWindow. The name must be unique within the scope of the parentScreen.
   * @param screenNumber Number of the screen to load in the PopupWindow
   * @param toggleOpen When toggleOpen=true the popup window will be closed if it is opened again
   * @param caption The window title of the PopupWindow
   * @param left Window position: offset from left margin
   * @param top Window position: offset from top margin
   * @param hideCloseButton When hideCloseButton=true the close button will be hidden
   * @param parentScreenPath Path to the parent HmiScreen. When empty the Popup will be a global Popup.
   *
   * @returns ErrorCode
   */
  OpenScreenByNumberInPopup(popupWindowName: string, screenNumber: number, toggleOpen: boolean, caption: string, left: number, top: number, hideCloseButton: boolean, parentScreenPath?: string): number;
  /**
   * Open a Screen in a PopupWindow asynchronously
   *
   * @param popupWindowName Name of the PopupWindow. The name must be unique within the scope of the parentScreen.
   * @param screenName Name of the screen to load in the PopupWindow
   * @param toggleOpen When toggleOpen=true the popup window will be closed if it is opened again
   * @param caption The window title of the PopupWindow
   * @param left Window position: offset from left margin
   * @param top Window position: offset from top margin
   * @param hideCloseButton When hideCloseButton=true the close button will be hidden
   * @param parentScreenPath Path to the parent HmiScreen. When empty the Popup will be a global Popup.
   *
   * @returns Promise
   */
  OpenScreenInPopupAsync(popupWindowName: string, screenName: ( HmiScreen | string ), toggleOpen: boolean, caption: string, left: number, top: number, hideCloseButton: boolean, parentScreenPath?: string): Promise<{}>;
  /**
   * Show the clean screen as full screen popup and disable the touch screen on panels. Popup is closed after the timeout has expired.
   *
   * @param timeout Maximum timeout is 300 seconds.
   *
   * @returns ErrorCode
   */
  ActivateCleanScreen(timeout: number): number;
  /**
   * Creates a HMIGetAndClearScreenItemCommand object to be used for getting and clear a process value of screen item to be used by SystemFunctions
   *
   * @param screenItemPath Specifies the screen item to get and clear the value
   *
   * @returns HMIGetAndClearScreenItemCommand
   */
  CreateGetAndClearScreenItemCommand(screenItemPath: ( HmiScreenItemBase | string )): HMIGetAndClearScreenItemCommand;
}

interface HMIGetAndClearScreenItemCommand extends HMIGetAndClearValueCommandBase {
  /**
   * Used as helper function for SystemFunctions to get and clear a screen item property
   *
   * @returns Variant
   */
  ():any;
  GetAndClearValue(): any;
}

interface HmiFaceplateTypeAlias extends HmiFaceplateType, HMIFaceplateInterface {
}

interface HmiScreenAlias extends HmiScreen, HMIScreenInterface {
}

interface HMIUIAlias extends HMIUI {
}

interface HMIRuntime_UI extends HMIRuntime {
  /**
   * The UI object model
   */
  UI: HMIUI;
}

interface HMIDeviceEnums_HMIStopRuntimeMode{
  /**
   */
  hmiStopRuntime: 0;
  /**
   */
  hmiStopRuntimeAndRebootDevice: 1;
}

interface HMIDeviceEnums {
  /**
   */
  HMIStopRuntimeMode: HMIDeviceEnums_HMIStopRuntimeMode
}

interface HMIDeviceSysFct {
  /**
   * Sets the static IP address of a network interface.
   *
   * @param AdapterName The name of the network interface, e.g. "X1"
   * @param IPAddress The new IPv4 address of the network interface in dotted quad notation (e.g. 192.168.133.15).
   * @param SubnetMask The new subnet mask of the network interface in dotted quad notation (e.g. 255.255.255.0).
   * @param DefaultGateway The IP address of the default gateway in dotted quad notation (e.g. 192.168.133.1).
   * @param DNSServer1 The IP address of primary DNS server (e.g. 192.168.133.1).
   * @param DNSServer2 The IP address of the secondary DNS server (e.g. 192.168.133.2).
   *
   * @returns Promise
   */
  SetIPV4Address(AdapterName: string, IPAddress: string, SubnetMask: string, DefaultGateway?: string, DNSServer1?: string, DNSServer2?: string): Promise<{}>;
  /**
   * Gets the static IP address of a network interface.
   *
   * @param AdapterName The name of the network interface, e.g. "X1".
   * @param IPAddress IPv4 address of the network interface in dotted quad notation (e.g. 192.168.133.15).
   * @param SubnetMask The new subnet mask of the network interface in dotted quad notation (e.g. 255.255.255.0).
   * @param DefaultGateway The IP address of the default gateway in dotted quad notation (e.g. 192.168.133.1).
   * @param DNSServer1 The IP address of the DNS server (e.g. 192.168.133.1).
   * @param DNSServer2 The IP address of the secondary DNS server (e.g. 192.168.133.2).
   *
   * @returns Promise
   */
  GetIPV4Address(AdapterName: string, IPAddress: ( HMISetValueCommandBase | any ), SubnetMask: ( HMISetValueCommandBase | any ), DefaultGateway?: ( HMISetValueCommandBase | any ), DNSServer1?: ( HMISetValueCommandBase | any ), DNSServer2?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Sets the brightness of panel according to the value.
   *
   * @param Value Value in percent and this value in panel is same as set by the system function.
   *
   * @returns Promise
   */
  SetBrightness(Value: number): Promise<{}>;
  /**
   * Gets the Brightness value to the tag.
   *
   * @param Value The value as shown in the panel is written to the tag.
   *
   * @returns Promise
   */
  GetBrightness(Value: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Using this an external application can be started.
   *
   * @param ProgramName Name of the program.
   * @param ProgramParams Parameters to the program.
   * @param DisplayMode Displays mode and displayMode has no effect on Linux based devices.
   * @param WaitForProgramToEnd Based on this flag either function list execution continues or waits until program has ended.
   * @param Result Writes the result of the startProgram call to a tag.
   *
   * @returns Promise
   */
  StartProgram(ProgramName: string, ProgramParams: string, DisplayMode: number, WaitForProgramToEnd: boolean, Result?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Using GetDHCPState a tag is filled with correct DHCP state.
   *
   * @param AdapterName The name of the network interface, e.g. "X1".
   * @param State State of DHCP
   * @param IPV6 IP Address type EX: true=ipV6, false/undefinedipv4.
   *
   * @returns Promise
   */
  GetDHCPState(AdapterName: string, State: ( HMISetValueCommandBase | any ), IPV6?: boolean): Promise<{}>;
  /**
   * Using SetDHCPState,adapter state changes accordingly.
   *
   * @param AdapterName The name of the network interface, e.g. "X1".
   * @param Enabled Mode of DHCP
   * @param IPV6 IP Address type EX: true=ipV6, false/undefinedipv4.
   *
   * @returns Promise
   */
  SetDHCPState(AdapterName: string, Enabled: boolean, IPV6?: boolean): Promise<{}>;
  /**
   * Defines what can be backed up ?
   *
   * @param BackupMode The supported valid backup mode is 'full device' only.
   * @param StoragePath Path of the Storage
   *
   * @returns Promise
   */
  Backup(BackupMode: number, StoragePath: string): Promise<{}>;
  /**
   * Get network interface state.
   *
   * @param AdapterName The name of the network interface, e.g. "X1".
   * @param State State of the adapter
   *
   * @returns Promise
   */
  GetNetworkInterfaceState(AdapterName: string, State: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Set network interface state
   *
   * @param AdapterName The name of the network interface, e.g. "X1"
   * @param Enabled Mode of the adapter
   *
   * @returns Promise
   */
  SetNetworkInterfaceState(AdapterName: string, Enabled: boolean): Promise<{}>;
  /**
   * Activates the clean screen on the HMI device.
   *
   *  The display of the HMI device is disabled for the given time period.When the display of the HMI device is deactivated, it can be cleaned without triggering touch functions by mistake.
   *
   * @returns Promise
   */
  ActivateCleanScreen(): Promise<{}>;
  /**
   * Removes external storage medium safely.
   *
   * @param StorageDevice Storage device like SD-X51, USB-X61, USB-X62 etc.
   *
   * @returns Promise
   */
  EjectStorageMedium(StorageDevice: string): Promise<{}>;
  /**
   * Send e-mail to the addressee.
   *
   * @param Address The e-mail address of addressee.
   * @param Subject The subject line of the content.
   * @param Text The text to be sent.
   * @param ReturnAddress The e-mail address of sender.
   * @param AttachmentPath The path for attachment.
   *
   * @returns Promise
   */
  SendEmail(Address: string, Subject: string, Text: string, ReturnAddress?: string, AttachmentPath?: string): Promise<{}>;
  /**
   * Opens Control Panel window in HMI Panel.
   *
   * @param StartPage Control Panel page to be displayed.
   *
   * @returns Promise
   */
  ShowControlPanel(StartPage: string): Promise<{}>;
  /**
   * To get external storage state.
   *
   * @param StorageDevice Storage device like SD-X51, USB-X61, USB-X62 etc.
   * @param State True(Enabled) or False(Disabled)
   *
   * @returns Promise
   */
  GetExternalDataStorageState(StorageDevice: string, State: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Enable or Disable external storage.
   *
   * @param StorageDevice Storage device like SD-X51, USB-X61, USB-X62 etc.
   * @param State True(Enabled) or False(Disabled)
   *
   * @returns Promise
   */
  SetExternalDataStorageState(StorageDevice: string, State: boolean): Promise<{}>;
  /**
   * Shows runtime software version.
   *
   * @returns Promise
   */
  ShowSoftwareVersion(): Promise<{}>;
  /**
   * Enable or Disable smart server.
   *
   * @param State True to enable, False to disable.
   *
   * @returns Promise
   */
  SetSmartServerState(State: boolean): Promise<{}>;
  /**
   * To know whether smart server is enabled or disabled.
   *
   * @param State True to enable, False to disable.
   *
   * @returns Promise
   */
  GetSmartServerState(State: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Capture current screen and store at specified location.
   *
   * @param StoragePath Storage path where screen shot file will be stored.
   *
   * @returns Promise
   */
  CreateScreenshot(StoragePath: string): Promise<{}>;
  /**
   * Hides or shows the screen keyboard.
   *
   * @param Mode Specifies whether to hide(false) or show(true) keyboard.
   *
   * @returns Promise
   */
  OpenScreenKeyboard(Mode: boolean): Promise<{}>;
  /**
   * Opens a file browser dialog.
   *
   * @returns Promise
   */
  OpenFileBrowser(): Promise<{}>;
  /**
   * Exits runtime software and thereby running project. or Exits runtime software and thereby running project with restart operating system
   *
   * @param Mode Mode is 0(hmiStopRuntime) then Stop Runtime and Mode is 1(hmiStopRuntimeAndReboodDevice) then Stop Runtime with Restart Operating System
   *
   * @returns Promise
   */
  StopRuntime(Mode?: HMIStopRuntimeMode): Promise<{}>;
  /**
   * To know whether Event Logger is enabled or disabled.
   *
   * @param State True means enable, False means disable.
   *
   * @returns Promise
   */
  GetEventLoggerState(State: ( HMISetValueCommandBase | any )): Promise<{}>;
}

interface HMIDevice {
  Enums: HMIDeviceEnums;
  SysFct: HMIDeviceSysFct;
}

interface HMIPacoEnums_hmiOverwrite{
  /**
   * The ParameterSet is not overwritten.
   */
  Disabled: 0;
  /**
   * The ParameterSet is overwritten.
   */
  Enabled: 1;
}

interface HMIPacoEnums {
  /**
   * Specifies whether an existing ParameterSet is overwritten.
   */
  hmiOverwrite: HMIPacoEnums_hmiOverwrite
}

interface HMIParameterSet {
  /**
   * Transfers the specified ParameterSet from the PLC to the storage medium of the HMI device.
   *
   * @param OverWrite Specifies whether an existing ParameterSet is overwritten.
   * @param OutputStatus Determines whether a status message is output after transfer.
   *
   * @returns Promise
   */
  ReadAndSave(OverWrite: hmiOverwrite, OutputStatus: boolean): Promise<{}>;
  /**
   * Transfers the specified ParameterSet directly from the data medium of the HMI device to the PLC.
   *
   * @param OutputStatus Determines whether a status message is output after transfer.
   *
   * @returns Promise
   */
  LoadAndWrite(OutputStatus: boolean): Promise<{}>;
  /**
   * Get the name of the specified ParameterSet.
   *
   * @param Language Language ID.
   *
   * @returns Promise
   */
  GetName(Language: number): Promise<{}>;
}

interface HMIParameterSets {
  /**
   * Creates parameter set object.
   *
   * @param parameterSetId Number or name of the ParameterSet.
   *
   * @returns HMIParameterSet
   */
  (parameterSetId: ( string | number )):HMIParameterSet;
  Item(parameterSetId: ( string | number )): HMIParameterSet;
}

interface HMIParameterSetType {
  /**
   * Creates parameter set collection object
   */
  ParameterSets: HMIParameterSets;
  /**
   * Imports one or all ParameterSets of a ParameterSetType.
   *
   * @param FileName Name of file from which ParameterSets to be imported.
   * @param ParameterSetId User defined ID or name of the ParameterSet.
   * @param OverWrite Specifies whether an existing ParameterSet is overwritten.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param VerifyChecksum Determines if the checksum should be verified during import.
   *
   * @returns Promise
   */
  Import(FileName: string, ParameterSetId: any, OverWrite: hmiOverwrite, OutputStatus: boolean, VerifyChecksum: boolean): Promise<{}>;
  /**
   * Exports one or all ParameterSets of a ParameterSetType.
   *
   * In case of export from all ParameterSetTypes this would be file path.
   *
   * @param ParameterSetId User defined ID or name of the ParameterSet.
   * @param FileName Name of file from which ParameterSets to be imported.
   * @param OverWrite Specifies whether an existing ParameterSet is overwritten.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param GenerateChecksum Determines if the checksum should be verified during import.
   *
   * @returns Promise
   */
  Export(ParameterSetId: any, FileName: string, OverWrite: hmiOverwrite, OutputStatus: boolean, GenerateChecksum: boolean): Promise<{}>;
  /**
   * Get the name of the specified ParameterSetType.
   *
   * @param Language Language ID
   *
   * @returns Promise
   */
  GetName(Language: number): Promise<{}>;
}

interface HMIParameterSetTypes {
  Enums: HMIPacoEnums;
  SysFct: HMIParameterSetTypesSysFct;
  /**
   * Creates parameter set type object.
   *
   * @param parameterSetTypeId Number or name of the ParameterSetType.
   *
   * @returns HMIParameterSetType
   */
  (parameterSetTypeId: ( string | number )):HMIParameterSetType;
  Item(parameterSetTypeId: ( string | number )): HMIParameterSetType;
}

interface HMIParameterSetTypesSysFct {
  /**
   * Transfers the specified ParameterSet from the PLC to the storage medium of the HMI device.
   *
   * @param ParameterSetTypeId User defined ID or name of the ParameterSetType.
   * @param ParameterSetId User defined ID or name of the ParameterSet.
   * @param OverWrite Specifies whether an existing ParameterSet is overwritten.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  ReadAndSaveParameterSet(ParameterSetTypeId: any, ParameterSetId: any, OverWrite: number, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Transfers the specified ParameterSet directly from the data medium of the HMI device to the PLC.
   *
   * @param ParameterSetTypeId User defined ID or name of the ParameterSetType.
   * @param ParameterSetId User defined ID or name of the ParameterSet.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  LoadAndWriteParameterSet(ParameterSetTypeId: any, ParameterSetId: any, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Imports one or all ParameterSets of a ParameterSetType.
   *
   * @param FileName Name of file from which ParameterSets to be imported.
   * @param ParameterSetId User defined ID or name of the ParameterSet.
   * @param OverWrite Specifies whether an existing ParameterSet is overwritten.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   * @param VerifyChecksum Determines if the checksum should be verified during import.
   *
   * @returns Promise
   */
  ImportParameterSets(FileName: string, ParameterSetId: any, OverWrite: number, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any ), VerifyChecksum: boolean): Promise<{}>;
  /**
   * Exports one or all ParameterSets of a ParameterSetType.
   *
   * @param ParameterSetTypeId User defined ID or name of the ParameterSetType.
   * @param ParameterSetId User defined ID or name of the ParameterSet.
   * @param FileName Name of file from which ParameterSets to be imported.
   * @param OverWrite Specifies whether an existing ParameterSet is overwritten.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   * @param GenerateChecksum Determines if the checksum should be verified during import.
   *
   * @returns Promise
   */
  ExportParameterSets(ParameterSetTypeId: any, ParameterSetId: any, FileName: string, OverWrite: number, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any ), GenerateChecksum: boolean): Promise<{}>;
  /**
   * Read the values of the ParameterSet loaded in the PLC to the corresponding edit tag
   *
   * @param ParameterSetType User defined ID or name of the ParameterSetType.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  ReadParameterSet(ParameterSetType: any, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Write the values of the edit tag (session local tag) to the PLC 
   *
   * @param ParameterSetType User defined ID or name of the ParameterSetType.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  WriteParameterSet(ParameterSetType: any, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Create a Parameter set with default value configured in Engineering System.
   *
   * @param ParameterSetType User defined ID or name of the ParameterSetType.
   * @param ParameterSetID User defined ID of the ParameterSet if provided else default ID will be assigned.
   * @param ParameterSetName User defined name of the ParameterSet if provided else default name will be assigned.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  CreateParameterSet(ParameterSetType: any, ParameterSetID?: number, ParameterSetName?: string, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Saves the current values of the edit tag (session local tag) as ParameterSet to the memory medium of the HMI device
   *
   * @param ParameterSetType User defined ID or name of the ParameterSetType.
   * @param ParameterSet User defined ID or name of the ParameterSet.
   * @param OverWrite Specifies whether an existing ParameterSet is overwritten.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  SaveParameterSet(ParameterSetType: any, ParameterSet: any, OverWrite: boolean, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Loads the specified ParameterSet from the Parameter control storage in the edit Tag (session local tag).
   *
   * @param ParameterSetType User defined ID or name of the ParameterSetType.
   * @param ParameterSet User defined ID or name of the ParameterSet.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  LoadParameterSet(ParameterSetType: any, ParameterSet: any, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Deletes the specified ParameterSet.
   *
   * @param ParameterSetType User defined ID or name of the ParameterSetType.
   * @param ParameterSet User defined ID or name of the ParameterSet.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  DeleteParameterSet(ParameterSetType: any, ParameterSet: any, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * This allows the user to rename the parameterset name to current runtime language. 
					If the parameter set type id / parameterset id does not exist, the rename operation will be cancelled.
   *
   * @param ParameterSetType User defined ID or name of the ParameterSetType.
   * @param ParameterSet User defined ID or name of the ParameterSet.
   * @param NewParameterSetName User defined name to rename the existing parameterset.
   * @param OutputStatus Determines whether a status message is output after transfer.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  RenameParameterSet(ParameterSetType: any, ParameterSet: any, NewParameterSetName: string, OutputStatus: boolean, ProcessingStatus?: ( HMISetValueCommandBase | any )): Promise<{}>;
  GetParameterSetName(ParameterSetTypeId: number, ParameterSetId: number, Language: number, ParameterSetName: ( HMISetValueCommandBase | any ), ProcessingStatus: ( HMISetValueCommandBase | any )): Promise<{}>;
  /**
   * Get the name of the specified ParameterSetType.
   *
   * @param ParameterSetTypeId User defined ID of ParameterSetType.
   * @param Language Language ID.
   * @param ParameterSetTypeName Retrieve name of ParameterSetType for the provided ParameterSetTypeID based on LanguageId.
   * @param ProcessingStatus Returns the processing status of the system function.
   *
   * @returns Promise
   */
  GetParameterSetTypeName(ParameterSetTypeId: number, Language: number, ParameterSetTypeName: ( HMISetValueCommandBase | any ), ProcessingStatus: ( HMISetValueCommandBase | any )): Promise<{}>;
}

declare var HMIRuntime: HMIRuntime;
declare var PlantModel: HMIPlantModel;
declare var Tags: HMITags;
declare var Faceplate: HmiFaceplateTypeAlias;
declare var Screen: HmiScreenAlias;
declare var UI: HMIUIAlias;
declare var ParameterSetTypes: HMIParameterSetTypes;
