goog.provide('hr.bdb.row.Country');
goog.provide('hr.bdb.row.CountryDbType');
goog.provide('hr.bdb.row.CountryType');
goog.provide('hr.bdb.row.Department');
goog.provide('hr.bdb.row.DepartmentDbType');
goog.provide('hr.bdb.row.DepartmentType');
goog.provide('hr.bdb.row.DummyTable');
goog.provide('hr.bdb.row.DummyTableDbType');
goog.provide('hr.bdb.row.DummyTableType');
goog.provide('hr.bdb.row.Employee');
goog.provide('hr.bdb.row.EmployeeDbType');
goog.provide('hr.bdb.row.EmployeeType');
goog.provide('hr.bdb.row.Holiday');
goog.provide('hr.bdb.row.HolidayDbType');
goog.provide('hr.bdb.row.HolidayType');
goog.provide('hr.bdb.row.Job');
goog.provide('hr.bdb.row.JobDbType');
goog.provide('hr.bdb.row.JobHistory');
goog.provide('hr.bdb.row.JobHistoryDbType');
goog.provide('hr.bdb.row.JobHistoryType');
goog.provide('hr.bdb.row.JobType');
goog.provide('hr.bdb.row.Location');
goog.provide('hr.bdb.row.LocationDbType');
goog.provide('hr.bdb.row.LocationType');
goog.provide('hr.bdb.row.Region');
goog.provide('hr.bdb.row.RegionDbType');
goog.provide('hr.bdb.row.RegionType');
goog.provide('hr.bdb.schema.Country');
goog.provide('hr.bdb.schema.Database');
goog.provide('hr.bdb.schema.Department');
goog.provide('hr.bdb.schema.DummyTable');
goog.provide('hr.bdb.schema.Employee');
goog.provide('hr.bdb.schema.Holiday');
goog.provide('hr.bdb.schema.Job');
goog.provide('hr.bdb.schema.JobHistory');
goog.provide('hr.bdb.schema.Location');
goog.provide('hr.bdb.schema.Region');

goog.require('lf.Row');
goog.require('lf.Type');
goog.require('lf.schema.BaseColumn');
goog.require('lf.schema.Constraint');
goog.require('lf.schema.Database');
goog.require('lf.schema.Index');
goog.require('lf.schema.Table');



/**
 * @implements {lf.schema.Database}
 * @constructor
 */
hr.bdb.schema.Database = function() {
  /** @private {!hr.bdb.schema.Job} */
  this.job_ = new hr.bdb.schema.Job();

  /** @private {!hr.bdb.schema.JobHistory} */
  this.jobHistory_ = new hr.bdb.schema.JobHistory();

  /** @private {!hr.bdb.schema.Employee} */
  this.employee_ = new hr.bdb.schema.Employee();

  /** @private {!hr.bdb.schema.Department} */
  this.department_ = new hr.bdb.schema.Department();

  /** @private {!hr.bdb.schema.Location} */
  this.location_ = new hr.bdb.schema.Location();

  /** @private {!hr.bdb.schema.Country} */
  this.country_ = new hr.bdb.schema.Country();

  /** @private {!hr.bdb.schema.Region} */
  this.region_ = new hr.bdb.schema.Region();

  /** @private {!hr.bdb.schema.Holiday} */
  this.holiday_ = new hr.bdb.schema.Holiday();

  /** @private {!hr.bdb.schema.DummyTable} */
  this.dummyTable_ = new hr.bdb.schema.DummyTable();

};


/** @override */
hr.bdb.schema.Database.prototype.getName = function() {
  return 'hrb';
};


/** @override */
hr.bdb.schema.Database.prototype.getVersion = function() {
  return 1;
};


/** @override */
hr.bdb.schema.Database.prototype.getTables = function() {
  return [
    this.job_,
    this.jobHistory_,
    this.employee_,
    this.department_,
    this.location_,
    this.country_,
    this.region_,
    this.holiday_,
    this.dummyTable_
  ];
};


/** @return {!hr.bdb.schema.Job} */
hr.bdb.schema.Database.prototype.getJob = function() {
  return this.job_;
};


/** @return {!hr.bdb.schema.JobHistory} */
hr.bdb.schema.Database.prototype.getJobHistory = function() {
  return this.jobHistory_;
};


/** @return {!hr.bdb.schema.Employee} */
hr.bdb.schema.Database.prototype.getEmployee = function() {
  return this.employee_;
};


/** @return {!hr.bdb.schema.Department} */
hr.bdb.schema.Database.prototype.getDepartment = function() {
  return this.department_;
};


/** @return {!hr.bdb.schema.Location} */
hr.bdb.schema.Database.prototype.getLocation = function() {
  return this.location_;
};


/** @return {!hr.bdb.schema.Country} */
hr.bdb.schema.Database.prototype.getCountry = function() {
  return this.country_;
};


/** @return {!hr.bdb.schema.Region} */
hr.bdb.schema.Database.prototype.getRegion = function() {
  return this.region_;
};


/** @return {!hr.bdb.schema.Holiday} */
hr.bdb.schema.Database.prototype.getHoliday = function() {
  return this.holiday_;
};


/** @return {!hr.bdb.schema.DummyTable} */
hr.bdb.schema.Database.prototype.getDummyTable = function() {
  return this.dummyTable_;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.JobType,
 *     !hr.bdb.row.JobDbType>}
 * @constructor
 */
hr.bdb.schema.Job = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.id = new lf.schema.BaseColumn(
      this, 'id', true, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.title = new lf.schema.BaseColumn(
      this, 'title', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<number>} */
  this.minSalary = new lf.schema.BaseColumn(
      this, 'minSalary', false, lf.Type.NUMBER);

  /** @type {!lf.schema.BaseColumn.<number>} */
  this.maxSalary = new lf.schema.BaseColumn(
      this, 'maxSalary', false, lf.Type.NUMBER);

};


/** @override */
hr.bdb.schema.Job.prototype.getName = function() {
  return 'Job';
};


/** @override */
hr.bdb.schema.Job.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.Job(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.Job.prototype.deserializeRow = function(dbRecord) {
  return new hr.bdb.row.Job(dbRecord['id'], dbRecord['value']);
};


/** @override */
hr.bdb.schema.Job.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [
      new lf.schema.Index('Job', 'pkJob', true, ['id']),
      new lf.schema.Index('Job', 'idx_maxSalary', false, ['maxSalary'])
    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.Job.prototype.getConstraint = function() {
  var primaryKey = new lf.schema.Index('Job', 'pkJob', true, ['id']);
  var notNullable = [
    this.id,
    this.title,
    this.minSalary,
    this.maxSalary
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.JobType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.title;
  /** @export @type {number} */
  this.minSalary;
  /** @export @type {number} */
  this.maxSalary;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.JobDbType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.title;
  /** @export @type {number} */
  this.minSalary;
  /** @export @type {number} */
  this.maxSalary;
};



/**
 * Constructs a new Job row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.JobType,
 *     !hr.bdb.row.JobDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.JobType=} opt_payload
 */
hr.bdb.row.Job = function(rowId, opt_payload) {
  hr.bdb.row.Job.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.Job, lf.Row);


/** @override */
hr.bdb.row.Job.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.JobType();
  payload.id = '';
  payload.title = '';
  payload.minSalary = 0;
  payload.maxSalary = 0;
  return payload;
};


/** @override */
hr.bdb.row.Job.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.JobDbType();
  payload.id = this.payload().id;
  payload.title = this.payload().title;
  payload.minSalary = this.payload().minSalary;
  payload.maxSalary = this.payload().maxSalary;
  return payload;
};


/** @override */
hr.bdb.row.Job.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case 'Job.pkJob':
      return this.payload().id;
    case 'Job.idx_maxSalary':
      return this.payload().maxSalary;
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {string} */
hr.bdb.row.Job.prototype.getId = function() {
  return this.payload().id;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Job}
*/
hr.bdb.row.Job.prototype.setId = function(value) {
  this.payload().id = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Job.prototype.getTitle = function() {
  return this.payload().title;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Job}
*/
hr.bdb.row.Job.prototype.setTitle = function(value) {
  this.payload().title = value;
  return this;
};


/** @return {number} */
hr.bdb.row.Job.prototype.getMinSalary = function() {
  return this.payload().minSalary;
};


/**
 * @param {number} value
 * @return {!hr.bdb.row.Job}
*/
hr.bdb.row.Job.prototype.setMinSalary = function(value) {
  this.payload().minSalary = value;
  return this;
};


/** @return {number} */
hr.bdb.row.Job.prototype.getMaxSalary = function() {
  return this.payload().maxSalary;
};


/**
 * @param {number} value
 * @return {!hr.bdb.row.Job}
*/
hr.bdb.row.Job.prototype.setMaxSalary = function(value) {
  this.payload().maxSalary = value;
  return this;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.JobHistoryType,
 *     !hr.bdb.row.JobHistoryDbType>}
 * @constructor
 */
hr.bdb.schema.JobHistory = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.employeeId = new lf.schema.BaseColumn(
      this, 'employeeId', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<!Date>} */
  this.startDate = new lf.schema.BaseColumn(
      this, 'startDate', false, lf.Type.DATE_TIME);

  /** @type {!lf.schema.BaseColumn.<!Date>} */
  this.endDate = new lf.schema.BaseColumn(
      this, 'endDate', false, lf.Type.DATE_TIME);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.jobId = new lf.schema.BaseColumn(
      this, 'jobId', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.departmentId = new lf.schema.BaseColumn(
      this, 'departmentId', false, lf.Type.STRING);

};


/** @override */
hr.bdb.schema.JobHistory.prototype.getName = function() {
  return 'JobHistory';
};


/** @override */
hr.bdb.schema.JobHistory.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.JobHistory(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.JobHistory.prototype.deserializeRow = function(dbRecord) {
  var data = dbRecord['value'];
  var payload = new hr.bdb.row.JobHistoryType();
  payload.employeeId = data.employeeId;
  payload.startDate = new Date(data.startDate);
  payload.endDate = new Date(data.endDate);
  payload.jobId = data.jobId;
  payload.departmentId = data.departmentId;
  return new hr.bdb.row.JobHistory(dbRecord['id'], payload);
};


/** @override */
hr.bdb.schema.JobHistory.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [

    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.JobHistory.prototype.getConstraint = function() {
  var primaryKey = null;
  var notNullable = [
    this.employeeId,
    this.startDate,
    this.endDate,
    this.jobId,
    this.departmentId
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.JobHistoryType = function() {
  /** @export @type {string} */
  this.employeeId;
  /** @export @type {!Date} */
  this.startDate;
  /** @export @type {!Date} */
  this.endDate;
  /** @export @type {string} */
  this.jobId;
  /** @export @type {string} */
  this.departmentId;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.JobHistoryDbType = function() {
  /** @export @type {string} */
  this.employeeId;
  /** @export @type {number} */
  this.startDate;
  /** @export @type {number} */
  this.endDate;
  /** @export @type {string} */
  this.jobId;
  /** @export @type {string} */
  this.departmentId;
};



/**
 * Constructs a new JobHistory row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.JobHistoryType,
 *     !hr.bdb.row.JobHistoryDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.JobHistoryType=} opt_payload
 */
hr.bdb.row.JobHistory = function(rowId, opt_payload) {
  hr.bdb.row.JobHistory.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.JobHistory, lf.Row);


/** @override */
hr.bdb.row.JobHistory.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.JobHistoryType();
  payload.employeeId = '';
  payload.startDate = new Date(0);
  payload.endDate = new Date(0);
  payload.jobId = '';
  payload.departmentId = '';
  return payload;
};


/** @override */
hr.bdb.row.JobHistory.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.JobHistoryDbType();
  payload.employeeId = this.payload().employeeId;
  payload.startDate = this.payload().startDate.getTime();
  payload.endDate = this.payload().endDate.getTime();
  payload.jobId = this.payload().jobId;
  payload.departmentId = this.payload().departmentId;
  return payload;
};


/** @override */
hr.bdb.row.JobHistory.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {string} */
hr.bdb.row.JobHistory.prototype.getEmployeeId = function() {
  return this.payload().employeeId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.JobHistory}
*/
hr.bdb.row.JobHistory.prototype.setEmployeeId = function(value) {
  this.payload().employeeId = value;
  return this;
};


/** @return {!Date} */
hr.bdb.row.JobHistory.prototype.getStartDate = function() {
  return this.payload().startDate;
};


/**
 * @param {!Date} value
 * @return {!hr.bdb.row.JobHistory}
*/
hr.bdb.row.JobHistory.prototype.setStartDate = function(value) {
  this.payload().startDate = value;
  return this;
};


/** @return {!Date} */
hr.bdb.row.JobHistory.prototype.getEndDate = function() {
  return this.payload().endDate;
};


/**
 * @param {!Date} value
 * @return {!hr.bdb.row.JobHistory}
*/
hr.bdb.row.JobHistory.prototype.setEndDate = function(value) {
  this.payload().endDate = value;
  return this;
};


/** @return {string} */
hr.bdb.row.JobHistory.prototype.getJobId = function() {
  return this.payload().jobId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.JobHistory}
*/
hr.bdb.row.JobHistory.prototype.setJobId = function(value) {
  this.payload().jobId = value;
  return this;
};


/** @return {string} */
hr.bdb.row.JobHistory.prototype.getDepartmentId = function() {
  return this.payload().departmentId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.JobHistory}
*/
hr.bdb.row.JobHistory.prototype.setDepartmentId = function(value) {
  this.payload().departmentId = value;
  return this;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.EmployeeType,
 *     !hr.bdb.row.EmployeeDbType>}
 * @constructor
 */
hr.bdb.schema.Employee = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.id = new lf.schema.BaseColumn(
      this, 'id', true, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.firstName = new lf.schema.BaseColumn(
      this, 'firstName', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.lastName = new lf.schema.BaseColumn(
      this, 'lastName', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.email = new lf.schema.BaseColumn(
      this, 'email', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.phoneNumber = new lf.schema.BaseColumn(
      this, 'phoneNumber', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<!Date>} */
  this.hireDate = new lf.schema.BaseColumn(
      this, 'hireDate', false, lf.Type.DATE_TIME);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.jobId = new lf.schema.BaseColumn(
      this, 'jobId', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<number>} */
  this.salary = new lf.schema.BaseColumn(
      this, 'salary', false, lf.Type.NUMBER);

  /** @type {!lf.schema.BaseColumn.<number>} */
  this.commissionPercent = new lf.schema.BaseColumn(
      this, 'commissionPercent', false, lf.Type.NUMBER);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.managerId = new lf.schema.BaseColumn(
      this, 'managerId', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.departmentId = new lf.schema.BaseColumn(
      this, 'departmentId', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<!ArrayBuffer>} */
  this.photo = new lf.schema.BaseColumn(
      this, 'photo', false, lf.Type.ARRAY_BUFFER);

};


/** @override */
hr.bdb.schema.Employee.prototype.getName = function() {
  return 'Employee';
};


/** @override */
hr.bdb.schema.Employee.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.Employee(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.Employee.prototype.deserializeRow = function(dbRecord) {
  var data = dbRecord['value'];
  var payload = new hr.bdb.row.EmployeeType();
  payload.id = data.id;
  payload.firstName = data.firstName;
  payload.lastName = data.lastName;
  payload.email = data.email;
  payload.phoneNumber = data.phoneNumber;
  payload.hireDate = goog.isNull(data.hireDate) ?
      null : new Date(data.hireDate);
  payload.jobId = data.jobId;
  payload.salary = data.salary;
  payload.commissionPercent = data.commissionPercent;
  payload.managerId = data.managerId;
  payload.departmentId = data.departmentId;
  payload.photo = /** @type {!ArrayBuffer} */ (
      lf.Row.hexToBin(data.photo));
  return new hr.bdb.row.Employee(dbRecord['id'], payload);
};


/** @override */
hr.bdb.schema.Employee.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [
      new lf.schema.Index('Employee', 'pkEmployee', true, ['id']),
      new lf.schema.Index('Employee', 'idx_salary', false, ['salary'])
    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.Employee.prototype.getConstraint = function() {
  var primaryKey = new lf.schema.Index('Employee', 'pkEmployee', true, ['id']);
  var notNullable = [
    this.id,
    this.firstName,
    this.lastName,
    this.email,
    this.phoneNumber,
    this.jobId,
    this.salary,
    this.commissionPercent,
    this.managerId,
    this.departmentId,
    this.photo
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.EmployeeType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.firstName;
  /** @export @type {string} */
  this.lastName;
  /** @export @type {string} */
  this.email;
  /** @export @type {string} */
  this.phoneNumber;
  /** @export @type {?Date} */
  this.hireDate;
  /** @export @type {string} */
  this.jobId;
  /** @export @type {number} */
  this.salary;
  /** @export @type {number} */
  this.commissionPercent;
  /** @export @type {string} */
  this.managerId;
  /** @export @type {string} */
  this.departmentId;
  /** @export @type {!ArrayBuffer} */
  this.photo;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.EmployeeDbType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.firstName;
  /** @export @type {string} */
  this.lastName;
  /** @export @type {string} */
  this.email;
  /** @export @type {string} */
  this.phoneNumber;
  /** @export @type {?number} */
  this.hireDate;
  /** @export @type {string} */
  this.jobId;
  /** @export @type {number} */
  this.salary;
  /** @export @type {number} */
  this.commissionPercent;
  /** @export @type {string} */
  this.managerId;
  /** @export @type {string} */
  this.departmentId;
  /** @export @type {string} */
  this.photo;
};



/**
 * Constructs a new Employee row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.EmployeeType,
 *     !hr.bdb.row.EmployeeDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.EmployeeType=} opt_payload
 */
hr.bdb.row.Employee = function(rowId, opt_payload) {
  hr.bdb.row.Employee.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.Employee, lf.Row);


/** @override */
hr.bdb.row.Employee.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.EmployeeType();
  payload.id = '';
  payload.firstName = '';
  payload.lastName = '';
  payload.email = '';
  payload.phoneNumber = '';
  payload.hireDate = null;
  payload.jobId = '';
  payload.salary = 0;
  payload.commissionPercent = 0;
  payload.managerId = '';
  payload.departmentId = '';
  payload.photo = new ArrayBuffer(0);
  return payload;
};


/** @override */
hr.bdb.row.Employee.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.EmployeeDbType();
  payload.id = this.payload().id;
  payload.firstName = this.payload().firstName;
  payload.lastName = this.payload().lastName;
  payload.email = this.payload().email;
  payload.phoneNumber = this.payload().phoneNumber;
  payload.hireDate = goog.isNull(this.payload().hireDate) ?
      null : this.payload().hireDate.getTime();
  payload.jobId = this.payload().jobId;
  payload.salary = this.payload().salary;
  payload.commissionPercent = this.payload().commissionPercent;
  payload.managerId = this.payload().managerId;
  payload.departmentId = this.payload().departmentId;
  payload.photo = lf.Row.binToHex(this.payload().photo);
  return payload;
};


/** @override */
hr.bdb.row.Employee.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case 'Employee.pkEmployee':
      return this.payload().id;
    case 'Employee.idx_salary':
      return this.payload().salary;
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {string} */
hr.bdb.row.Employee.prototype.getId = function() {
  return this.payload().id;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setId = function(value) {
  this.payload().id = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Employee.prototype.getFirstName = function() {
  return this.payload().firstName;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setFirstName = function(value) {
  this.payload().firstName = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Employee.prototype.getLastName = function() {
  return this.payload().lastName;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setLastName = function(value) {
  this.payload().lastName = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Employee.prototype.getEmail = function() {
  return this.payload().email;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setEmail = function(value) {
  this.payload().email = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Employee.prototype.getPhoneNumber = function() {
  return this.payload().phoneNumber;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setPhoneNumber = function(value) {
  this.payload().phoneNumber = value;
  return this;
};


/** @return {?Date} */
hr.bdb.row.Employee.prototype.getHireDate = function() {
  return this.payload().hireDate;
};


/**
 * @param {?Date} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setHireDate = function(value) {
  this.payload().hireDate = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Employee.prototype.getJobId = function() {
  return this.payload().jobId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setJobId = function(value) {
  this.payload().jobId = value;
  return this;
};


/** @return {number} */
hr.bdb.row.Employee.prototype.getSalary = function() {
  return this.payload().salary;
};


/**
 * @param {number} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setSalary = function(value) {
  this.payload().salary = value;
  return this;
};


/** @return {number} */
hr.bdb.row.Employee.prototype.getCommissionPercent = function() {
  return this.payload().commissionPercent;
};


/**
 * @param {number} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setCommissionPercent = function(value) {
  this.payload().commissionPercent = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Employee.prototype.getManagerId = function() {
  return this.payload().managerId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setManagerId = function(value) {
  this.payload().managerId = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Employee.prototype.getDepartmentId = function() {
  return this.payload().departmentId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setDepartmentId = function(value) {
  this.payload().departmentId = value;
  return this;
};


/** @return {!ArrayBuffer} */
hr.bdb.row.Employee.prototype.getPhoto = function() {
  return this.payload().photo;
};


/**
 * @param {!ArrayBuffer} value
 * @return {!hr.bdb.row.Employee}
*/
hr.bdb.row.Employee.prototype.setPhoto = function(value) {
  this.payload().photo = value;
  return this;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.DepartmentType,
 *     !hr.bdb.row.DepartmentDbType>}
 * @constructor
 */
hr.bdb.schema.Department = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.id = new lf.schema.BaseColumn(
      this, 'id', true, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.name = new lf.schema.BaseColumn(
      this, 'name', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.managerId = new lf.schema.BaseColumn(
      this, 'managerId', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.locationId = new lf.schema.BaseColumn(
      this, 'locationId', false, lf.Type.STRING);

};


/** @override */
hr.bdb.schema.Department.prototype.getName = function() {
  return 'Department';
};


/** @override */
hr.bdb.schema.Department.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.Department(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.Department.prototype.deserializeRow = function(dbRecord) {
  return new hr.bdb.row.Department(dbRecord['id'], dbRecord['value']);
};


/** @override */
hr.bdb.schema.Department.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [
      new lf.schema.Index('Department', 'pkDepartment', true, ['id'])
    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.Department.prototype.getConstraint = function() {
  var primaryKey = new lf.schema.Index('Department', 'pkDepartment', true, ['id']);
  var notNullable = [
    this.id,
    this.name,
    this.managerId,
    this.locationId
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.DepartmentType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.name;
  /** @export @type {string} */
  this.managerId;
  /** @export @type {string} */
  this.locationId;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.DepartmentDbType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.name;
  /** @export @type {string} */
  this.managerId;
  /** @export @type {string} */
  this.locationId;
};



/**
 * Constructs a new Department row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.DepartmentType,
 *     !hr.bdb.row.DepartmentDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.DepartmentType=} opt_payload
 */
hr.bdb.row.Department = function(rowId, opt_payload) {
  hr.bdb.row.Department.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.Department, lf.Row);


/** @override */
hr.bdb.row.Department.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.DepartmentType();
  payload.id = '';
  payload.name = '';
  payload.managerId = '';
  payload.locationId = '';
  return payload;
};


/** @override */
hr.bdb.row.Department.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.DepartmentDbType();
  payload.id = this.payload().id;
  payload.name = this.payload().name;
  payload.managerId = this.payload().managerId;
  payload.locationId = this.payload().locationId;
  return payload;
};


/** @override */
hr.bdb.row.Department.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case 'Department.pkDepartment':
      return this.payload().id;
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {string} */
hr.bdb.row.Department.prototype.getId = function() {
  return this.payload().id;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Department}
*/
hr.bdb.row.Department.prototype.setId = function(value) {
  this.payload().id = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Department.prototype.getName = function() {
  return this.payload().name;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Department}
*/
hr.bdb.row.Department.prototype.setName = function(value) {
  this.payload().name = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Department.prototype.getManagerId = function() {
  return this.payload().managerId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Department}
*/
hr.bdb.row.Department.prototype.setManagerId = function(value) {
  this.payload().managerId = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Department.prototype.getLocationId = function() {
  return this.payload().locationId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Department}
*/
hr.bdb.row.Department.prototype.setLocationId = function(value) {
  this.payload().locationId = value;
  return this;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.LocationType,
 *     !hr.bdb.row.LocationDbType>}
 * @constructor
 */
hr.bdb.schema.Location = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.id = new lf.schema.BaseColumn(
      this, 'id', true, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.streetAddress = new lf.schema.BaseColumn(
      this, 'streetAddress', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.postalCode = new lf.schema.BaseColumn(
      this, 'postalCode', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.city = new lf.schema.BaseColumn(
      this, 'city', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.stateProvince = new lf.schema.BaseColumn(
      this, 'stateProvince', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.countryId = new lf.schema.BaseColumn(
      this, 'countryId', false, lf.Type.STRING);

};


/** @override */
hr.bdb.schema.Location.prototype.getName = function() {
  return 'Location';
};


/** @override */
hr.bdb.schema.Location.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.Location(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.Location.prototype.deserializeRow = function(dbRecord) {
  return new hr.bdb.row.Location(dbRecord['id'], dbRecord['value']);
};


/** @override */
hr.bdb.schema.Location.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [
      new lf.schema.Index('Location', 'pkLocation', true, ['id'])
    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.Location.prototype.getConstraint = function() {
  var primaryKey = new lf.schema.Index('Location', 'pkLocation', true, ['id']);
  var notNullable = [
    this.id,
    this.streetAddress,
    this.postalCode,
    this.city,
    this.stateProvince,
    this.countryId
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.LocationType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.streetAddress;
  /** @export @type {string} */
  this.postalCode;
  /** @export @type {string} */
  this.city;
  /** @export @type {string} */
  this.stateProvince;
  /** @export @type {string} */
  this.countryId;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.LocationDbType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.streetAddress;
  /** @export @type {string} */
  this.postalCode;
  /** @export @type {string} */
  this.city;
  /** @export @type {string} */
  this.stateProvince;
  /** @export @type {string} */
  this.countryId;
};



/**
 * Constructs a new Location row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.LocationType,
 *     !hr.bdb.row.LocationDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.LocationType=} opt_payload
 */
hr.bdb.row.Location = function(rowId, opt_payload) {
  hr.bdb.row.Location.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.Location, lf.Row);


/** @override */
hr.bdb.row.Location.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.LocationType();
  payload.id = '';
  payload.streetAddress = '';
  payload.postalCode = '';
  payload.city = '';
  payload.stateProvince = '';
  payload.countryId = '';
  return payload;
};


/** @override */
hr.bdb.row.Location.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.LocationDbType();
  payload.id = this.payload().id;
  payload.streetAddress = this.payload().streetAddress;
  payload.postalCode = this.payload().postalCode;
  payload.city = this.payload().city;
  payload.stateProvince = this.payload().stateProvince;
  payload.countryId = this.payload().countryId;
  return payload;
};


/** @override */
hr.bdb.row.Location.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case 'Location.pkLocation':
      return this.payload().id;
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {string} */
hr.bdb.row.Location.prototype.getId = function() {
  return this.payload().id;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Location}
*/
hr.bdb.row.Location.prototype.setId = function(value) {
  this.payload().id = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Location.prototype.getStreetAddress = function() {
  return this.payload().streetAddress;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Location}
*/
hr.bdb.row.Location.prototype.setStreetAddress = function(value) {
  this.payload().streetAddress = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Location.prototype.getPostalCode = function() {
  return this.payload().postalCode;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Location}
*/
hr.bdb.row.Location.prototype.setPostalCode = function(value) {
  this.payload().postalCode = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Location.prototype.getCity = function() {
  return this.payload().city;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Location}
*/
hr.bdb.row.Location.prototype.setCity = function(value) {
  this.payload().city = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Location.prototype.getStateProvince = function() {
  return this.payload().stateProvince;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Location}
*/
hr.bdb.row.Location.prototype.setStateProvince = function(value) {
  this.payload().stateProvince = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Location.prototype.getCountryId = function() {
  return this.payload().countryId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Location}
*/
hr.bdb.row.Location.prototype.setCountryId = function(value) {
  this.payload().countryId = value;
  return this;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.CountryType,
 *     !hr.bdb.row.CountryDbType>}
 * @constructor
 */
hr.bdb.schema.Country = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.id = new lf.schema.BaseColumn(
      this, 'id', true, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.name = new lf.schema.BaseColumn(
      this, 'name', false, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.regionId = new lf.schema.BaseColumn(
      this, 'regionId', false, lf.Type.STRING);

};


/** @override */
hr.bdb.schema.Country.prototype.getName = function() {
  return 'Country';
};


/** @override */
hr.bdb.schema.Country.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.Country(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.Country.prototype.deserializeRow = function(dbRecord) {
  return new hr.bdb.row.Country(dbRecord['id'], dbRecord['value']);
};


/** @override */
hr.bdb.schema.Country.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [
      new lf.schema.Index('Country', 'pkCountry', true, ['id'])
    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.Country.prototype.getConstraint = function() {
  var primaryKey = new lf.schema.Index('Country', 'pkCountry', true, ['id']);
  var notNullable = [
    this.id,
    this.name,
    this.regionId
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.CountryType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.name;
  /** @export @type {string} */
  this.regionId;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.CountryDbType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.name;
  /** @export @type {string} */
  this.regionId;
};



/**
 * Constructs a new Country row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.CountryType,
 *     !hr.bdb.row.CountryDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.CountryType=} opt_payload
 */
hr.bdb.row.Country = function(rowId, opt_payload) {
  hr.bdb.row.Country.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.Country, lf.Row);


/** @override */
hr.bdb.row.Country.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.CountryType();
  payload.id = '';
  payload.name = '';
  payload.regionId = '';
  return payload;
};


/** @override */
hr.bdb.row.Country.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.CountryDbType();
  payload.id = this.payload().id;
  payload.name = this.payload().name;
  payload.regionId = this.payload().regionId;
  return payload;
};


/** @override */
hr.bdb.row.Country.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case 'Country.pkCountry':
      return this.payload().id;
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {string} */
hr.bdb.row.Country.prototype.getId = function() {
  return this.payload().id;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Country}
*/
hr.bdb.row.Country.prototype.setId = function(value) {
  this.payload().id = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Country.prototype.getName = function() {
  return this.payload().name;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Country}
*/
hr.bdb.row.Country.prototype.setName = function(value) {
  this.payload().name = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Country.prototype.getRegionId = function() {
  return this.payload().regionId;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Country}
*/
hr.bdb.row.Country.prototype.setRegionId = function(value) {
  this.payload().regionId = value;
  return this;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.RegionType,
 *     !hr.bdb.row.RegionDbType>}
 * @constructor
 */
hr.bdb.schema.Region = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.id = new lf.schema.BaseColumn(
      this, 'id', true, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.name = new lf.schema.BaseColumn(
      this, 'name', false, lf.Type.STRING);

};


/** @override */
hr.bdb.schema.Region.prototype.getName = function() {
  return 'Region';
};


/** @override */
hr.bdb.schema.Region.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.Region(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.Region.prototype.deserializeRow = function(dbRecord) {
  return new hr.bdb.row.Region(dbRecord['id'], dbRecord['value']);
};


/** @override */
hr.bdb.schema.Region.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [
      new lf.schema.Index('Region', 'pkRegion', true, ['id'])
    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.Region.prototype.getConstraint = function() {
  var primaryKey = new lf.schema.Index('Region', 'pkRegion', true, ['id']);
  var notNullable = [
    this.id,
    this.name
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.RegionType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.name;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.RegionDbType = function() {
  /** @export @type {string} */
  this.id;
  /** @export @type {string} */
  this.name;
};



/**
 * Constructs a new Region row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.RegionType,
 *     !hr.bdb.row.RegionDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.RegionType=} opt_payload
 */
hr.bdb.row.Region = function(rowId, opt_payload) {
  hr.bdb.row.Region.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.Region, lf.Row);


/** @override */
hr.bdb.row.Region.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.RegionType();
  payload.id = '';
  payload.name = '';
  return payload;
};


/** @override */
hr.bdb.row.Region.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.RegionDbType();
  payload.id = this.payload().id;
  payload.name = this.payload().name;
  return payload;
};


/** @override */
hr.bdb.row.Region.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case 'Region.pkRegion':
      return this.payload().id;
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {string} */
hr.bdb.row.Region.prototype.getId = function() {
  return this.payload().id;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Region}
*/
hr.bdb.row.Region.prototype.setId = function(value) {
  this.payload().id = value;
  return this;
};


/** @return {string} */
hr.bdb.row.Region.prototype.getName = function() {
  return this.payload().name;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Region}
*/
hr.bdb.row.Region.prototype.setName = function(value) {
  this.payload().name = value;
  return this;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.HolidayType,
 *     !hr.bdb.row.HolidayDbType>}
 * @constructor
 */
hr.bdb.schema.Holiday = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.name = new lf.schema.BaseColumn(
      this, 'name', true, lf.Type.STRING);

  /** @type {!lf.schema.BaseColumn.<!Date>} */
  this.begin = new lf.schema.BaseColumn(
      this, 'begin', false, lf.Type.DATE_TIME);

  /** @type {!lf.schema.BaseColumn.<!Date>} */
  this.end = new lf.schema.BaseColumn(
      this, 'end', false, lf.Type.DATE_TIME);

};


/** @override */
hr.bdb.schema.Holiday.prototype.getName = function() {
  return 'Holiday';
};


/** @override */
hr.bdb.schema.Holiday.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.Holiday(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.Holiday.prototype.deserializeRow = function(dbRecord) {
  var data = dbRecord['value'];
  var payload = new hr.bdb.row.HolidayType();
  payload.name = data.name;
  payload.begin = new Date(data.begin);
  payload.end = new Date(data.end);
  return new hr.bdb.row.Holiday(dbRecord['id'], payload);
};


/** @override */
hr.bdb.schema.Holiday.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [
      new lf.schema.Index('Holiday', 'pkHoliday', true, ['name']),
      new lf.schema.Index('Holiday', 'idx_begin', false, ['begin'])
    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.Holiday.prototype.getConstraint = function() {
  var primaryKey = new lf.schema.Index('Holiday', 'pkHoliday', true, ['name']);
  var notNullable = [
    this.name,
    this.begin,
    this.end
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.HolidayType = function() {
  /** @export @type {string} */
  this.name;
  /** @export @type {!Date} */
  this.begin;
  /** @export @type {!Date} */
  this.end;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.HolidayDbType = function() {
  /** @export @type {string} */
  this.name;
  /** @export @type {number} */
  this.begin;
  /** @export @type {number} */
  this.end;
};



/**
 * Constructs a new Holiday row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.HolidayType,
 *     !hr.bdb.row.HolidayDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.HolidayType=} opt_payload
 */
hr.bdb.row.Holiday = function(rowId, opt_payload) {
  hr.bdb.row.Holiday.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.Holiday, lf.Row);


/** @override */
hr.bdb.row.Holiday.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.HolidayType();
  payload.name = '';
  payload.begin = new Date(0);
  payload.end = new Date(0);
  return payload;
};


/** @override */
hr.bdb.row.Holiday.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.HolidayDbType();
  payload.name = this.payload().name;
  payload.begin = this.payload().begin.getTime();
  payload.end = this.payload().end.getTime();
  return payload;
};


/** @override */
hr.bdb.row.Holiday.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case 'Holiday.pkHoliday':
      return this.payload().name;
    case 'Holiday.idx_begin':
      return this.payload().begin.getTime();
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {string} */
hr.bdb.row.Holiday.prototype.getName = function() {
  return this.payload().name;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.Holiday}
*/
hr.bdb.row.Holiday.prototype.setName = function(value) {
  this.payload().name = value;
  return this;
};


/** @return {!Date} */
hr.bdb.row.Holiday.prototype.getBegin = function() {
  return this.payload().begin;
};


/**
 * @param {!Date} value
 * @return {!hr.bdb.row.Holiday}
*/
hr.bdb.row.Holiday.prototype.setBegin = function(value) {
  this.payload().begin = value;
  return this;
};


/** @return {!Date} */
hr.bdb.row.Holiday.prototype.getEnd = function() {
  return this.payload().end;
};


/**
 * @param {!Date} value
 * @return {!hr.bdb.row.Holiday}
*/
hr.bdb.row.Holiday.prototype.setEnd = function(value) {
  this.payload().end = value;
  return this;
};



/**
 * @implements {lf.schema.Table.<!hr.bdb.row.DummyTableType,
 *     !hr.bdb.row.DummyTableDbType>}
 * @constructor
 */
hr.bdb.schema.DummyTable = function() {
  /** @private {!Array.<!lf.schema.Index>} */
  this.indices_;

  /** @type {!lf.schema.BaseColumn.<!ArrayBuffer>} */
  this.arraybuffer = new lf.schema.BaseColumn(
      this, 'arraybuffer', false, lf.Type.ARRAY_BUFFER);

  /** @type {!lf.schema.BaseColumn.<boolean>} */
  this.boolean = new lf.schema.BaseColumn(
      this, 'boolean', false, lf.Type.BOOLEAN);

  /** @type {!lf.schema.BaseColumn.<!Date>} */
  this.datetime = new lf.schema.BaseColumn(
      this, 'datetime', false, lf.Type.DATE_TIME);

  /** @type {!lf.schema.BaseColumn.<number>} */
  this.integer = new lf.schema.BaseColumn(
      this, 'integer', false, lf.Type.INTEGER);

  /** @type {!lf.schema.BaseColumn.<number>} */
  this.number = new lf.schema.BaseColumn(
      this, 'number', false, lf.Type.NUMBER);

  /** @type {!lf.schema.BaseColumn.<string>} */
  this.string = new lf.schema.BaseColumn(
      this, 'string', true, lf.Type.STRING);

};


/** @override */
hr.bdb.schema.DummyTable.prototype.getName = function() {
  return 'DummyTable';
};


/** @override */
hr.bdb.schema.DummyTable.prototype.createRow = function(opt_value) {
  return new hr.bdb.row.DummyTable(lf.Row.getNextId(), opt_value);
};


/** @override */
hr.bdb.schema.DummyTable.prototype.deserializeRow = function(dbRecord) {
  var data = dbRecord['value'];
  var payload = new hr.bdb.row.DummyTableType();
  payload.arraybuffer = /** @type {!ArrayBuffer} */ (
      lf.Row.hexToBin(data.arraybuffer));
  payload.boolean = data.boolean;
  payload.datetime = new Date(data.datetime);
  payload.integer = data.integer;
  payload.number = data.number;
  payload.string = data.string;
  return new hr.bdb.row.DummyTable(dbRecord['id'], payload);
};


/** @override */
hr.bdb.schema.DummyTable.prototype.getIndices = function() {
  if (!this.indices_) {
    this.indices_ = [
      new lf.schema.Index('DummyTable', 'pkDummyTable', true, ['string'])
    ];
  }
  return this.indices_;
};


/** @override */
hr.bdb.schema.DummyTable.prototype.getConstraint = function() {
  var primaryKey = new lf.schema.Index('DummyTable', 'pkDummyTable', true, ['string']);
  var notNullable = [
    this.arraybuffer,
    this.boolean,
    this.datetime,
    this.integer,
    this.number,
    this.string
  ];
  var foreignKeys = [];
  var unique = [
  ];
  return new lf.schema.Constraint(
      primaryKey, notNullable, foreignKeys, unique);
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.DummyTableType = function() {
  /** @export @type {!ArrayBuffer} */
  this.arraybuffer;
  /** @export @type {boolean} */
  this.boolean;
  /** @export @type {!Date} */
  this.datetime;
  /** @export @type {number} */
  this.integer;
  /** @export @type {number} */
  this.number;
  /** @export @type {string} */
  this.string;
};



/**
 * @export
 * @constructor
 * @struct
 * @final
 */
hr.bdb.row.DummyTableDbType = function() {
  /** @export @type {string} */
  this.arraybuffer;
  /** @export @type {boolean} */
  this.boolean;
  /** @export @type {number} */
  this.datetime;
  /** @export @type {number} */
  this.integer;
  /** @export @type {number} */
  this.number;
  /** @export @type {string} */
  this.string;
};



/**
 * Constructs a new DummyTable row.
 * @constructor
 * @extends {lf.Row.<!hr.bdb.row.DummyTableType,
 *     !hr.bdb.row.DummyTableDbType>}
 *
 * @param {number} rowId The row ID.
 * @param {!hr.bdb.row.DummyTableType=} opt_payload
 */
hr.bdb.row.DummyTable = function(rowId, opt_payload) {
  hr.bdb.row.DummyTable.base(this, 'constructor', rowId, opt_payload);
};
goog.inherits(hr.bdb.row.DummyTable, lf.Row);


/** @override */
hr.bdb.row.DummyTable.prototype.defaultPayload = function() {
  var payload = new hr.bdb.row.DummyTableType();
  payload.arraybuffer = new ArrayBuffer(0);
  payload.boolean = false;
  payload.datetime = new Date(0);
  payload.integer = 0;
  payload.number = 0;
  payload.string = '';
  return payload;
};


/** @override */
hr.bdb.row.DummyTable.prototype.toDbPayload = function() {
  var payload = new hr.bdb.row.DummyTableDbType();
  payload.arraybuffer = lf.Row.binToHex(this.payload().arraybuffer);
  payload.boolean = this.payload().boolean;
  payload.datetime = this.payload().datetime.getTime();
  payload.integer = this.payload().integer;
  payload.number = this.payload().number;
  payload.string = this.payload().string;
  return payload;
};


/** @override */
hr.bdb.row.DummyTable.prototype.keyOfIndex = function(indexName) {
  switch (indexName) {
    case 'DummyTable.pkDummyTable':
      return this.payload().string;
    case '##row_id##':
      return this.id();
    default:
      break;
  }
  return null;
};


/** @return {!ArrayBuffer} */
hr.bdb.row.DummyTable.prototype.getArraybuffer = function() {
  return this.payload().arraybuffer;
};


/**
 * @param {!ArrayBuffer} value
 * @return {!hr.bdb.row.DummyTable}
*/
hr.bdb.row.DummyTable.prototype.setArraybuffer = function(value) {
  this.payload().arraybuffer = value;
  return this;
};


/** @return {boolean} */
hr.bdb.row.DummyTable.prototype.getBoolean = function() {
  return this.payload().boolean;
};


/**
 * @param {boolean} value
 * @return {!hr.bdb.row.DummyTable}
*/
hr.bdb.row.DummyTable.prototype.setBoolean = function(value) {
  this.payload().boolean = value;
  return this;
};


/** @return {!Date} */
hr.bdb.row.DummyTable.prototype.getDatetime = function() {
  return this.payload().datetime;
};


/**
 * @param {!Date} value
 * @return {!hr.bdb.row.DummyTable}
*/
hr.bdb.row.DummyTable.prototype.setDatetime = function(value) {
  this.payload().datetime = value;
  return this;
};


/** @return {number} */
hr.bdb.row.DummyTable.prototype.getInteger = function() {
  return this.payload().integer;
};


/**
 * @param {number} value
 * @return {!hr.bdb.row.DummyTable}
*/
hr.bdb.row.DummyTable.prototype.setInteger = function(value) {
  this.payload().integer = value;
  return this;
};


/** @return {number} */
hr.bdb.row.DummyTable.prototype.getNumber = function() {
  return this.payload().number;
};


/**
 * @param {number} value
 * @return {!hr.bdb.row.DummyTable}
*/
hr.bdb.row.DummyTable.prototype.setNumber = function(value) {
  this.payload().number = value;
  return this;
};


/** @return {string} */
hr.bdb.row.DummyTable.prototype.getString = function() {
  return this.payload().string;
};


/**
 * @param {string} value
 * @return {!hr.bdb.row.DummyTable}
*/
hr.bdb.row.DummyTable.prototype.setString = function(value) {
  this.payload().string = value;
  return this;
};
