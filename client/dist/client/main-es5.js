function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-candidate/add-candidate.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-candidate/add-candidate.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddCandidateAddCandidateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row bg-secondary p-2\">\n    <div class=\"col-md-7\">\n      <img src=\"../../assets/img/logo-white.png\" alt=\"\" class=\"logo-img\" routerLink=\"/dashboard\" style=\"cursor: pointer;\">\n    </div>\n    <div class=\"col-md-5\">\n      <button class=\"btn btn-danger float-right\" (click)=\"logout()\">Sign Out</button>\n      <button routerLink=\"/add-candidate\" class=\"btn btn-success float-right mr-3\">Add Candidate</button>\n    </div>\n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <button class=\"btn btn-danger mt-2\" routerLink=\"/candidates\">Back</button>\n    <div class=\"col-md-8 register-employee\">\n      <!-- form card register -->\n      <div class=\"card-body\">\n        <form [formGroup]=\"candidateForm\" (ngSubmit)=\"onSubmit()\" enctype=\"multipart/form-data\">\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputName\">Consultant Name</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"consultantName\">\n            <!-- error -->\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.consultantName.errors?.required\">\n                Consultant Name is required.\n            </div>\n            <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.consultantName.errors?.minLength || myForm.consultantName.errors?.maxLength\">\n                Consultant Name length should be 3 to 25.\n            </div> -->\n          </div>\n          \n          <div class=\"form-group col-md-6\">\n            <label for=\"yearOfExperienceNumber3\">Year Of Experience</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"yearOfExperience\" placeholder=\"8.5\">\n              <!-- <div class=\"input-group\">\n                <input class=\"form-control input-sm\" type=\"text\" formcontrolname=\"month\">&nbsp;Year&nbsp;\n                <input class=\"form-control input-sm\" type=\"text\" formcontrolname=\"year\">&nbsp;Month&nbsp;\n              </div> -->\n            <!-- error -->\n            <p>*(8 = Year , . = To Differentiate between Year And Month, 5 = Month)</p>\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.yearOfExperience.errors?.required\">\n              Enter Year Of Experience.\n            </div>\n            <div class=\"text-danger\" *ngIf=\"showErrorMessage == true\">\n              Month should be less then 12\n            </div>\n          </div>\n\n          \n        </div>\n  \n          <!-- <div class=\"form-group col-md-6\">\n            <label for=\"inputPassword3\">Designation</label>\n            <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\n              formControlName=\"designation\">\n              <option value=\"\">Choose...</option>\n              <option *ngFor=\"let employeeProfile of EmployeeProfile\" value=\"{{employeeProfile}}\">{{employeeProfile}}\n              </option>\n            </select>\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.designation.errors?.required\">\n              Choose designation.\n            </div>\n          </div>  -->\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputVerify3\">Mobile No</label>\n            <input class=\"form-control\" type=\"text\" maxlength=\"10\" formControlName=\"phoneNumber\">\n            <!-- error -->\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\n              Enter your phone number.\n            </div>\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\n              Enter Numbers Only\n            </div>\n            <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.phoneNumber.errors?.minLength || myForm.phoneNumber.errors?.maxLength\">\n                Phone Number length should be 10.\n            </div> -->\n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputEmail3\">Email</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"email\">\n            <!-- error -->\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.email.errors?.required\">\n              Enter your email.\n            </div>\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\n              Enter valid email.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"locationVerify3\">Location</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"location\">\n            <!-- error -->\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.location.errors?.required\">\n              Enter your Location.\n            </div>\n            <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.location.errors?.minLength || myForm.location.errors?.maxLength\">\n                Location length should be 3 to 25.\n            </div> -->\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"prefferedLocationVerify3\">Preferred Location</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"preferredLocation\">\n            <!-- error -->\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.preferredLocation.errors?.required\">\n              Enter your Preferred Location.\n            </div>\n            <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.preferredLocation.errors?.minLength || myForm.preferredLocation.errors?.maxLength\">\n                Preffered Location length should be 3 to 25.\n            </div> -->\n          </div>\n\n          \n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"adharNumber3\">Aadhar Number</label>\n            <input class=\"form-control\" type=\"text\" maxlength=\"12\" formControlName=\"adharNumber\">\n            <!-- error -->\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.adharNumber.errors?.required\">\n              Enter your Aadhar Number.\n            </div>\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.adharNumber.errors?.pattern\">\n              Enter Numbers Only\n            </div>\n            <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.adharNumber.errors?.minLength || myForm.adharNumber.errors?.maxLength\">\n                Aadhar Number length should be 12.\n            </div> -->\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"panNumber3\">PAN Number</label>\n            <input class=\"form-control\" type=\"text\" maxlength=\"10\" formControlName=\"panNumber\">\n            <!-- error -->\n            <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.panNumber.errors?.required\">\n              Enter your PAN Number.\n            </div> -->\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.panNumber.errors?.pattern\">\n              Enter Numbers Only\n            </div>\n            <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.panNumber.errors?.minLength || myForm.panNumber.errors?.maxLength\">\n                PAN Number length should be 10.\n            </div> -->\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6 form-group\">\n            <label for=\"skillNumber3\">Skill Set</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"skillSet\">\n            <!-- error -->\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.skillSet.errors?.required\">\n              Enter Skills.\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <label>Please Select Source of Candidate</label>\n            <div class=\"row\">\n              <label class=\"md-check\">\n                <input type=\"radio\" value=\"naukri.com\" name=\"candidateSource\" formControlName=\"candidateSource\">\n                Naukri.com\n              </label>\n              <label class=\"md-check\">\n                <input type=\"radio\" value=\"institute\" name=\"candidateSource\" formControlName=\"candidateSource\">     \n                Institute\n              </label>\n            </div>\n            <div *ngIf=\"myForm.candidateSource.value == 'institute'\">\n              <div class=\"form-group\">\n                    <label>Institute Name</label>\n                    <select class=\"form-control\" formControlName=\"canidateCollege\" id=\"canidateCollege\">\n                        <option *ngFor=\"let institute of institutes\" value={{institute.instituteName}}>\n                        {{institute.instituteName}}\n                        </option>\n                    </select>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"skillNumber3\">Counsultant Image</label><br>\n              <input type=\"file\" name=\"consultantImage\" (change)=\"onFileSelect($event)\" />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"skillNumber3\">Upload Resume</label><br>\n              <input type=\"file\" name=\"resume\" (change)=\"onFileSelectt($event)\" />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Add Candidate</button>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <button class=\"btn btn-danger btn-lg btn-block\" type=\"reset\">Cancel</button>\n          </div>\n        </div>\n        </form>\n  \n      </div>\n    </div><!-- form card register -->\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/candidate-list/candidate-list.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/candidate-list/candidate-list.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCandidateListCandidateListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row bg-secondary\" style=\"padding-top : 10px; padding-bottom : 10px; \">\n    <div class=\"col-md-7\">\n      <img src=\"../../assets/img/logo-white.png\" alt=\"\" class=\"logo-img\" routerLink=\"/dashboard\" style=\"cursor: pointer;\">\n    </div>\n    <div class=\"col-md-5\">\n      <button class=\"btn btn-danger float-right\" (click)=\"logout()\">Sign Out</button>\n      <button routerLink=\"/add-candidate\" class=\"btn btn-success float-right mr-3\">Add Candidate</button>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n    <!-- No data message -->\n    <!-- <p *ngIf=\"candidates.length <= 0\" class=\"no-data text-center\">There is no Candidates added yet!</p> -->\n    <div #candidatesList>\n      <div style=\"padding-bottom: 10px;padding-top: 10px;\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <button routerLink=\"/dashboard\" class=\"btn btn-danger mr-1\">Back</button>\n          <button (click)=\"exportToExcel()\" class=\"btn btn-success\">Export To Excel</button>\n        </div>\n        <div class=\"col-sm-6\">\n          <input class=\"float-right\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search\">\n        </div>\n      </div>\n      </div>\n    <!-- Employee list -->\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Consultant Name</th>\n          <th>Email</th>\n          <th>Location</th>\n          <th>Preffered Location</th>\n          <th>Phone No.</th>\n          <th>PAN No.</th>\n          <th>Adhar No.</th>\n          <th>Skill Set</th>\n          <th>Year Of Expirence</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <!-- <ngx-spinner></ngx-spinner> -->\n        <tr *ngFor=\"let candidate of candidates | filter:term | paginate : { itemsPerPage:5, currentPage:p}\">\n          <td>{{candidate.consultantName}}</td>\n          <td>{{candidate.email}}</td>\n          <td>{{candidate.location}}</td>\n          <td>{{candidate.preferredLocation}}</td>\n          <td>{{candidate.phoneNumber}}</td>\n          <td>{{candidate.panNumber}}</td>\n          <td>{{candidate.adharNumber}}</td>\n          <td>{{candidate.skillSet}}</td>\n          <td>{{candidate.yearOfExperience}}</td>\n          <td class=\"text-center edit-block\">\n            <span class=\"edit\" [routerLink]=\"['/edit-candidate/', candidate._id]\">\n              <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\n            </span>\n            <!-- <span class=\"delete\" (click)=\"removeEmployee(employee, i)\">\n              <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\n            </span> -->\n          </td>\n        </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </table>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"row bg-secondary\" style=\"padding-top : 10px; padding-bottom : 10px; \">\n        <div class=\"col-md-7\">\n            <img src=\"../../assets/img/logo-white.png\" alt=\"\" class=\"logo-img\" routerLink=\"/dashboard\" style=\"cursor: pointer;\">\n        </div>\n        <div class=\"col-md-5\">\n            <button class=\"btn btn-danger float-right\" (click)=\"logout()\">Sign Out</button>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row mt-5\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\" style=\"text-align: center;\">\n            <h1>Emicon Portal</h1>\n            <p style=\"font-weight: 700;\">Add Institutes Candidates </p>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-5\">\n            <div class='box'  style=\"float: right;\" routerLink=\"/institutes\">\n                <div class='wave -one'></div>\n                <div class='wave -two'></div>\n                <div class='wave -three'></div>\n                <div class='title'><i class=\"fa fa-university\" aria-hidden=\"true\"></i>Institutes</div>\n            </div>\n        </div>\n        <div class=\"col-md-5\">\n            <div class='box' routerLink=\"/candidates\">\n                <div class='wave -one'></div>\n                <div class='wave -two'></div>\n                <div class='wave -three'></div>\n                <div class='title'><i class=\"fa fa-users\" aria-hidden=\"true\"></i>Candidates</div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-candidate/edit-candidate.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-candidate/edit-candidate.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditCandidateEditCandidateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row bg-secondary p-2\">\n    <div class=\"col-md-7\">\n      <img src=\"../../assets/img/logo-white.png\" alt=\"\" class=\"logo-img\" routerLink=\"/dashboard\" style=\"cursor: pointer;\">\n    </div>\n    <div class=\"col-md-5\">\n      <button class=\"btn btn-danger float-right\" (click)=\"logout()\">Sign Out</button>\n      <button routerLink=\"/add-candidate\" class=\"btn btn-success float-right mr-3\">Add Candidate</button>\n    </div>\n  </div>\n</div>\n<div class=\"row justify-content-center mt-2\">\n    <div class=\"col-md-8 register-employee\">\n      <!-- form card register -->\n      <div class=\"card card-outline-secondary\">\n        <div class=\"card-header\">\n          <h3 class=\"mb-0\">Edit Candidate</h3>\n          <button routerLink=\"/candidates\" class=\"mb-0 btn btn-success float-right\">Back</button>\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"inputName\">Consultant Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"consultantName\">\n                <!-- error -->\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.consultantName.errors?.required\">\n                    Consultant Name is required.\n                </div>\n                <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.consultantName.errors?.minLength || myForm.consultantName.errors?.maxLength\">\n                    Consultant Name length should be 3 to 25.\n                </div> -->\n              </div>\n              \n              <div class=\"form-group col-md-6\">\n                <label for=\"yearOfExperienceNumber3\">Year Of Experience</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"yearOfExperience\">\n                  <!-- <div class=\"input-group\">\n                    <input class=\"form-control input-sm\" type=\"text\" formcontrolname=\"month\">&nbsp;Year&nbsp;\n                    <input class=\"form-control input-sm\" type=\"text\" formcontrolname=\"year\">&nbsp;Month&nbsp;\n                  </div> -->\n                <!-- error -->\n                <p>* Enter Year in Format 8.5 (8Years5Months)</p>\n            <div class=\"text-danger\" *ngIf=\"submitted && myForm.yearOfExperience.errors?.required\">\n              Enter Year Of Experience.\n            </div>\n            <div class=\"text-danger\" *ngIf=\"showErrorMessage == true\">\n              Month should be less then 12\n            </div>\n              </div>\n    \n              \n            </div>\n      \n              <!-- <div class=\"form-group col-md-6\">\n                <label for=\"inputPassword3\">Designation</label>\n                <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\n                  formControlName=\"designation\">\n                  <option value=\"\">Choose...</option>\n                  <option *ngFor=\"let employeeProfile of EmployeeProfile\" value=\"{{employeeProfile}}\">{{employeeProfile}}\n                  </option>\n                </select>\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.designation.errors?.required\">\n                  Choose designation.\n                </div>\n              </div>  -->\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"inputVerify3\">Mobile No</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\">\n                <!-- error -->\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\n                  Enter your phone number.\n                </div>\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\n                  Enter Numbers Only\n                </div>\n                <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.phoneNumber.errors?.minLength || myForm.phoneNumber.errors?.maxLength\">\n                    Phone Number length should be 10.\n                </div> -->\n              </div>\n    \n              <div class=\"form-group col-md-6\">\n                <label for=\"inputEmail3\">Email</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"email\">\n                <!-- error -->\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.email.errors?.required\">\n                  Enter your email.\n                </div>\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\n                  Enter valid email.\n                </div>\n              </div>\n            </div>\n    \n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"locationVerify3\">Location</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"location\">\n                <!-- error -->\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.location.errors?.required\">\n                  Enter your Location.\n                </div>\n                <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.location.errors?.minLength || myForm.location.errors?.maxLength\">\n                    Location length should be 3 to 25.\n                </div> -->\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"preferredLocationVerify3\">Preferred Location</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"preferredLocation\">\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.preferredLocation.errors?.required\">\n                  Enter your Preferred Location.\n                </div>\n              </div>\n    \n              \n            </div>\n    \n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"adharNumber3\">Aadhar Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"adharNumber\">\n                <!-- error -->\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.adharNumber.errors?.required\">\n                  Enter your Aadhar Number.\n                </div>\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.adharNumber.errors?.pattern\">\n                  Enter Numbers Only\n                </div>\n                <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.adharNumber.errors?.minLength || myForm.adharNumber.errors?.maxLength\">\n                    Adhar Number length should be 12.\n                </div> -->\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"panNumber3\">PAN Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"panNumber\">\n                <!-- error -->\n                <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.panNumber.errors?.required\">\n                  Enter your PAN Number.\n                </div>\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.panNumber.errors?.pattern\">\n                  Enter Numbers Only\n                </div> -->\n                <!-- <div class=\"text-danger\" *ngIf=\"submitted && myForm.panNumber.errors?.minLength || myForm.panNumber.errors?.maxLength\">\n                    PAN Number length should be 10.\n                </div> -->\n              </div>\n            </div>\n    \n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <label for=\"skillNumber3\">Skill Set</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"skillSet\">\n                <!-- error -->\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.skillSet.errors?.required\">\n                  Enter Skills.\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Update</button>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <button class=\"btn btn-danger btn-lg btn-block\" type=\"reset\">Cancel</button>\n            </div>\n          </div>\n          </form>\n        </div><!-- form  -->\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/add-institue/add-institue.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/add-institue/add-institue.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInstitutesAddInstitueAddInstitueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"row bg-secondary p-2\">\n        <div class=\"col-md-7\">\n            <img src=\"../../assets/img/logo-white.png\" alt=\"\" class=\"logo-img\" routerLink=\"/dashboard\" style=\"cursor: pointer;\">\n        </div>\n    <div class=\"col-md-5\">\n        <button class=\"btn btn-danger float-right\" (click)=\"logout()\">Sign Out</button>\n    </div>\n    </div>\n</div>\n<div class=\"row justify-content-center\">\n    <button class=\"btn btn-danger mt-2\" routerLink=\"/institutes\">Back</button>\n    <div class=\"col-md-8 register-employee\">\n        <!-- form card register -->\n        <div class=\"card-body\">\n            <form [formGroup]=\"instituteForm\" (ngSubmit)=\"onSubmit()\" enctype=\"multipart/form-data\">\n            <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"instituteName\">Institute Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"instituteName\">\n                <!-- error -->\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.instituteName.errors?.required\">\n                    Institute Name is required.\n                </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"universityOfTheInstitute\">University of the Institute</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"universityOfTheInstitute\">\n                <!-- error -->\n                <div class=\"text-danger\" *ngIf=\"submitted && myForm.universityOfTheInstitute.errors?.required\">\n                    University of the Institute Name is required.\n                </div>\n            </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"instituteTpoName\">Name of TPO</label>\n                    <input class=\"form-control\" type=\"text\" formControlName=\"instituteTpoName\">\n                    <!-- error -->\n                    <div class=\"text-danger\" *ngIf=\"submitted && myForm.instituteTpoName.errors?.required\">\n                        Name of TPO is required.\n                    </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"instituteTpoPhoneNumber\">Phone number of TPO</label>\n                    <input class=\"form-control\" type=\"text\" formControlName=\"instituteTpoPhoneNumber\">\n                    <!-- error -->\n                    <div class=\"text-danger\" *ngIf=\"submitted && myForm.instituteTpoPhoneNumber.errors?.required\">\n                        Phone number of TPO is required.\n                    </div>\n                    <div class=\"text-danger\" *ngIf=\"submitted && myForm.instituteTpoPhoneNumber.errors?.pattern\">\n                        Enter Numbers Only\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"instituteTpoEmail\">Email ID of TPO</label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"instituteTpoEmail\">\n                        <!-- error -->\n                        <div class=\"text-danger\" *ngIf=\"submitted && myForm.instituteTpoEmail.errors?.required\">\n                            Email ID of TPO is required.\n                        </div>\n                        <div class=\"text-danger\" *ngIf=\"submitted && myForm.instituteTpoEmail.errors?.pattern\">\n                            Enter valid email.\n                        </div>\n                    </div>\n            </div>\n            <div formGroupName=\"address\">\n                <label for=\"address\">Institute Address</label>\n                <div class=\"row\">\n                    <div class=\"col-md-4 form-group\">\n                        <input type=\"text\" class=\"form-control \" formControlName=\"line1\" placeholder=\"Address Line 1\" \n                        [ngClass]=\"{ 'is-invalid': formSubmitted && ff.line1.errors }\">\n                        <div *ngIf=\"formSubmitted && ff.line1.errors\">\n                            <div *ngIf=\"ff.line1.errors.required\">Address Line 1 is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                        <input type=\"text\" class=\"form-control \" formControlName=\"line2\" placeholder=\"Address Line 2\" \n                        [ngClass]=\"{ 'is-invalid': formSubmitted && ff.line2.errors }\">\n                        <div *ngIf=\"formSubmitted && ff.line2.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"ff.line2.errors.required\">Address Line 2 is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"City\" \n                        [ngClass]=\"{ 'is-invalid': formSubmitted && ff.city.errors }\">\n                        <div *ngIf=\"formSubmitted && ff.city.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"ff.city.errors.required\">City name is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6 form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pinCode\" placeholder=\"Zip Code\" \n                        [ngClass]=\"{ 'is-invalid': formSubmitted && ff.pinCode.errors }\">\n                        <div *ngIf=\"formSubmitted && ff.pinCode.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"ff.pinCode.errors.required\">Zip Code is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"state\" placeholder=\"State\" \n                        [ngClass]=\"{ 'is-invalid': formSubmitted && ff.state.errors }\">\n                    <div *ngIf=\"formSubmitted && ff.state.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"ff.state.errors.required\">State name is required</div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n                <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Add Institute</button>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <button class=\"btn btn-danger btn-lg btn-block\" type=\"reset\">Cancel</button>\n            </div>\n            </div>\n            </form>\n        </div>\n    </div><!-- form card register -->\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/edit-institue/edit-institue.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/edit-institue/edit-institue.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInstitutesEditInstitueEditInstitueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>edit-institue works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/institue-list/institue-list.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/institue-list/institue-list.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInstitutesInstitueListInstitueListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"row bg-secondary\" style=\"padding-top : 10px; padding-bottom : 10px; \">\n        <div class=\"col-md-7\">\n            <img src=\"../../assets/img/logo-white.png\" alt=\"\" class=\"logo-img\" routerLink=\"/dashboard\" style=\"cursor: pointer;\">\n        </div>\n        <div class=\"col-md-5\">\n            <button class=\"btn btn-danger float-right\" (click)=\"logout()\">Sign Out</button>\n            <button routerLink=\"/add-institute\" class=\"btn btn-success float-right mr-3\">Add Institutes</button>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <div #institutesList>\n        <div style=\"padding-bottom: 10px;padding-top: 10px;\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <button routerLink=\"/dashboard\" class=\"btn btn-danger mr-1\">Back</button>\n                <button (click)=\"exportToExcel()\" class=\"btn btn-success\">Export To Excel</button>\n        </div>\n        <div class=\"col-sm-6\">\n            <input class=\"float-right\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search\">\n        </div>\n        </div>\n        </div>\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th>Institute Name</th>\n                <th>University Of The Institute</th>\n                <th>Institute TPO Name</th>\n                <th>Institute Phone Number</th>\n                <th>Institute TPO Email</th>\n                <th>Status</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let institute of institutes | filter:term | paginate : { itemsPerPage:5, currentPage:p}\">\n                <td>{{institute.instituteName}}</td>\n                <td>{{institute.universityOfTheInstitute}}</td>\n                <td>{{institute.instituteTpoName}}</td>\n                <td>{{institute.instituteTpoPhoneNumber}}</td>\n                <td>{{institute.instituteTpoEmail}}</td>\n                <td>\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [checked]=\"institute.instituteStatus\" (change)=\"changeInstituteStatus(institute.instituteName,institute.instituteStatus)\">\n                        <span class=\"slider round\"></span>\n                    </label>\n                </td>\n                <!-- <td class=\"text-center edit-block\">\n                    <span class=\"edit\" [routerLink]=\"['/edit-institute/', institute._id]\">\n                    <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\n                    </span>\n                    <span class=\"delete\" (click)=\"removeEmployee(employee, i)\">\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\n                    </span>\n                </td> -->\n            </tr>\n            </tbody>\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </table>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fullpage\">\n    <div class=\"signup-form\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\" class=\"mt-3\">\n            <div class=\"im\">\n                <img src=\"../../assets/img/logo-blue.png\" alt=\"\" class=\"logo-img\" routerLink=\"/candidates\" style=\"cursor: pointer;\">\n            </div>\n                <h2>Login</h2>\n            <p class=\"hint-text\">Recruitment Manager</p>\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.email.errors }\" placeholder=\"Email\">\n                <div *ngIf=\"formSubmitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    <div *ngIf=\"f.email.errors.pattern\">Enter Valid Email</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control password-type\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.password.errors }\" placeholder=\"Password\">\n                <!-- <button type=\"button\" class=\"password-type bg-transparent\" (click)=\"togglePassword()\" style=\"float: right;\">\n                    <i [class]=\"showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'\" aria-hidden=\"true\"></i>\n                </button> -->\n                <div *ngIf=\"formSubmitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Login</button>\n            </div>\n            <div class=\"text-center\">Create Employee account? <a routerLink=\"/sign-up\">Click Here!</a></div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fullpage\">\n    <button type=\"submit\" class=\"btn btn-success mt-5 mb-5 mr-5\" style=\"float: right;\" (click)= \"toggle()\" *ngIf=\"tableShow == true\">Add Employee</button>\n    <button type=\"submit\" class=\"btn btn-success mt-5 mb-5 mr-5\" style=\"float: right;\" (click)= \"toggle()\" *ngIf=\"formShow == true\">Employee List</button>\n<div class=\"signup-form\" *ngIf=\"formShow == true\">\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\">\n        <div class=\"im\">\n            <img src=\"../../assets/img/logo-blue.png\" alt=\"\" class=\"logo-img\" routerLink=\"/candidates\" style=\"cursor: pointer;\">\n        </div>\n            <h2>Register</h2>\n\t\t<p class=\"hint-text\">Create Account For Employee</p>\n        <div class=\"form-group\">\n            <div class=\"col-xs-6\"><input type=\"text\" class=\"form-control\" formControlName=\"name\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.name.errors }\" placeholder=\"Name\">\n            </div>\n            <div *ngIf=\"formSubmitted && f.name.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.name.errors.required\">Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\"\n            [ngClass]=\"{ 'is-invalid': formSubmitted && f.email.errors }\" placeholder=\"Email\">\n            <div *ngIf=\"formSubmitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                <div *ngIf=\"f.email.errors.pattern\">Enter Valid Email</div>\n            </div>\n        </div>\n\t\t<div class=\"form-group\">\n            <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control password-type\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.password.errors }\" placeholder=\"Password\">\n            <button type=\"button\" class=\"password-type bg-transparent\" (click)=\"togglePassword()\" style=\"float: right;\">\n                <i [class]=\"showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'\" aria-hidden=\"true\"></i>\n            </button>\n          <div *ngIf=\"formSubmitted && f.password.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.password.errors.required\">Password is required</div>\n           <div *ngIf=\"f.password.errors.pattern\">Enter Strong Password</div>\n        </div>\n        </div>\n        <div class=\"form-group\">\n            <input [type]=\"showConfirmPassword ? 'text' : 'password'\" class=\"form-control password-type\" formControlName=\"confirmPassword\" \n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.confirmPassword.errors }\" placeholder=\"Confirm Password\">\n            <button type=\"button\" class=\"password-type bg-transparent\" (click)=\"toggleConfirmPassword()\" style=\"float: right;\">\n                <i [class]=\"showConfirmPassword ? 'fa fa-eye' : 'fa fa-eye-slash'\" aria-hidden=\"true\"></i>\n            </button>\n          <div *ngIf=\"formSubmitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n           <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Password and Confirm Password must match with each other.</div>\n        </div>\n        </div>        \n        <div class=\"form-group\">\n\t\t\t<label class=\"checkbox-inline\"><input type=\"checkbox\" required=\"required\"> I accept the <a href=\"#\">Terms of Use</a> &amp; <a href=\"#\">Privacy Policy</a></label>\n\t\t</div>\n\t\t<div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Register Now</button>\n        </div>\n    </form>\n\t<!-- <div class=\"text-center\">Already have an account? <a href=\"#\">Sign in</a></div> -->\n</div>\n\n\n<div class=\"container\" *ngIf=\"tableShow == true\">\n<input class=\"float-right\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search\" class=\"mt-5\">\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <!-- <ngx-spinner></ngx-spinner> -->\n      <tr *ngFor=\"let user of allUsers | filter:term | paginate : { itemsPerPage:5, currentPage:p}\">\n        <th>{{user.name}}</th>\n        <td>{{user.email}}</td>\n        <td>{{user.status}}</td>\n      </tr>\n    </tbody>\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </table>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-candidate/add-candidate.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/add-candidate/add-candidate.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddCandidateAddCandidateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-img {\n  padding-top: 0px;\n  height: 42px;\n  width: 150px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNhbmRpZGF0ZS9DOlxcVXNlcnNcXGt1bmFsXFxEZXNrdG9wXFxFbWljb25cXHJlY3J1aXRtZW50LW1hbmFnZXJcXGNsaWVudC9zcmNcXGFwcFxcYWRkLWNhbmRpZGF0ZVxcYWRkLWNhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLWNhbmRpZGF0ZS9hZGQtY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGQtY2FuZGlkYXRlL2FkZC1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1pbWd7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59IiwiLmxvZ28taW1nIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-candidate/add-candidate.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/add-candidate/add-candidate.component.ts ***!
    \**********************************************************/

  /*! exports provided: AddCandidateComponent */

  /***/
  function srcAppAddCandidateAddCandidateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCandidateComponent", function () {
      return AddCandidateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/candidate.service */
    "./src/app/services/candidate.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/institute.service */
    "./src/app/services/institute.service.ts");

    var AddCandidateComponent = /*#__PURE__*/function () {
      function AddCandidateComponent(fb, router, ngZone, notificationService, candidateService, userService, instituteService) {
        _classCallCheck(this, AddCandidateComponent);

        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.notificationService = notificationService;
        this.candidateService = candidateService;
        this.userService = userService;
        this.instituteService = instituteService;
        this.submitted = false;
        this.showErrorMessage = false;
        this.institutes = [];
        this.mainForm();
      }

      _createClass(AddCandidateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInstitutes();
        }
      }, {
        key: "getInstitutes",
        value: function getInstitutes() {
          var _this = this;

          this.instituteService.getInstitutes().subscribe(function (data) {
            _this.institutes = data.institute;
            var other = {
              instituteName: "Other"
            };

            _this.institutes.push(other);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "mainForm",
        value: function mainForm() {
          var data = this.userService.currentUser();
          this.currentUserEmail = data.email;
          this.candidateForm = this.fb.group({
            consultantImage: [''],
            consultantName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            preferredLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            panNumber: [''],
            adharNumber: [''],
            skillSet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            yearOfExperience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            createdBy: [this.currentUserEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            candidateSource: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            canidateCollege: [''],
            resume: ['']
          });
        } // Image Preview

      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var file = event.target.files[0];
          this.candidateForm.patchValue({
            consultantImage: file
          });
          this.candidateForm.get('consultantImage').updateValueAndValidity(); // File Preview

          var reader = new FileReader();
          reader.readAsDataURL(file);
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.candidateForm.get('consultantImage').setValue(file);
          }
        }
      }, {
        key: "onFileSelectt",
        value: function onFileSelectt(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.candidateForm.get('resume').setValue(file);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userService.logout();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          var k = parseInt((this.candidateForm.value.yearOfExperience + "").split(".")[1]);

          if (k > 12) {
            this.showErrorMessage = true;
            return false;
          } else {
            this.submitted = true;

            if (!this.candidateForm.valid) {
              return false;
            } else {
              console.log(this.candidateForm.value);
              this.candidateService.addCandidate(this.candidateForm.value // this.candidateForm.get('consultantImage').value,
              // this.candidateForm.value.consultantName,
              // this.candidateForm.value.email,
              // this.candidateForm.value.location,
              // this.candidateForm.value.preferredLocation,
              // this.candidateForm.value.phoneNumber,
              // this.candidateForm.value.panNumber,
              // this.candidateForm.value.adharNumber,
              // this.candidateForm.value.skillSet,
              // this.candidateForm.value.yearOfExperience,
              // this.candidateForm.value.createdBy
              // this.candidateForm.get('resume').value
              ).subscribe(function (res) {
                _this2.notificationService.showSuccess('Candidate successfully created!', "");

                _this2.ngZone.run(function () {
                  return _this2.router.navigateByUrl('/candidates');
                });
              }, function (error) {
                console.log(error);

                _this2.notificationService.showError(error, 'Validation Failed');
              });
            }
          }
        }
      }, {
        key: "myForm",
        get: function get() {
          return this.candidateForm.controls;
        }
      }]);

      return AddCandidateComponent;
    }();

    AddCandidateComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
      }, {
        type: _services_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _services_institute_service__WEBPACK_IMPORTED_MODULE_7__["InstituteService"]
      }];
    };

    AddCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-candidate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-candidate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-candidate/add-candidate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-candidate.component.scss */
      "./src/app/add-candidate/add-candidate.component.scss"))["default"]]
    })], AddCandidateComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_candidate_add_candidate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-candidate/add-candidate.component */
    "./src/app/add-candidate/add-candidate.component.ts");
    /* harmony import */


    var _edit_candidate_edit_candidate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-candidate/edit-candidate.component */
    "./src/app/edit-candidate/edit-candidate.component.ts");
    /* harmony import */


    var _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./candidate-list/candidate-list.component */
    "./src/app/candidate-list/candidate-list.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _institutes_institue_list_institue_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./institutes/institue-list/institue-list.component */
    "./src/app/institutes/institue-list/institue-list.component.ts");
    /* harmony import */


    var _institutes_add_institue_add_institue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./institutes/add-institue/add-institue.component */
    "./src/app/institutes/add-institue/add-institue.component.ts");
    /* harmony import */


    var _institutes_edit_institue_edit_institue_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./institutes/edit-institue/edit-institue.component */
    "./src/app/institutes/edit-institue/edit-institue.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_signup_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./guards/signup.guard */
    "./src/app/guards/signup.guard.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    }, {
      path: 'add-candidate',
      component: _add_candidate_add_candidate_component__WEBPACK_IMPORTED_MODULE_3__["AddCandidateComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'edit-candidate/:id',
      component: _edit_candidate_edit_candidate_component__WEBPACK_IMPORTED_MODULE_4__["EditCandidateComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'candidates',
      component: _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_5__["CandidateListComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'institutes',
      component: _institutes_institue_list_institue_list_component__WEBPACK_IMPORTED_MODULE_7__["InstitueListComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'add-institute',
      component: _institutes_add_institue_add_institue_component__WEBPACK_IMPORTED_MODULE_8__["AddInstitueComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'edit-institute/:id',
      component: _institutes_edit_institue_edit_institue_component__WEBPACK_IMPORTED_MODULE_9__["EditInstitueComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'sign-up',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
      canActivate: [_guards_signup_guard__WEBPACK_IMPORTED_MODULE_13__["SignupGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
    }, {
      path: '**',
      redirectTo: 'candidates',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./interceptors/httpconfig.interceptor */
    "./src/app/interceptors/httpconfig.interceptor.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./candidate-list/candidate-list.component */
    "./src/app/candidate-list/candidate-list.component.ts");
    /* harmony import */


    var _add_candidate_add_candidate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./add-candidate/add-candidate.component */
    "./src/app/add-candidate/add-candidate.component.ts");
    /* harmony import */


    var _edit_candidate_edit_candidate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./edit-candidate/edit-candidate.component */
    "./src/app/edit-candidate/edit-candidate.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _institutes_institue_list_institue_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./institutes/institue-list/institue-list.component */
    "./src/app/institutes/institue-list/institue-list.component.ts");
    /* harmony import */


    var _institutes_add_institue_add_institue_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./institutes/add-institue/add-institue.component */
    "./src/app/institutes/add-institue/add-institue.component.ts");
    /* harmony import */


    var _institutes_edit_institue_edit_institue_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./institutes/edit-institue/edit-institue.component */
    "./src/app/institutes/edit-institue/edit-institue.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_14__["CandidateListComponent"], _add_candidate_add_candidate_component__WEBPACK_IMPORTED_MODULE_15__["AddCandidateComponent"], _edit_candidate_edit_candidate_component__WEBPACK_IMPORTED_MODULE_16__["EditCandidateComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], _institutes_institue_list_institue_list_component__WEBPACK_IMPORTED_MODULE_20__["InstitueListComponent"], _institutes_add_institue_add_institue_component__WEBPACK_IMPORTED_MODULE_21__["AddInstitueComponent"], _institutes_edit_institue_edit_institue_component__WEBPACK_IMPORTED_MODULE_22__["EditInstitueComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__["AngularFontAwesomeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
        positionClass: 'toast-top-right'
      })],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_11__["HttpConfigInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/candidate-list/candidate-list.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/candidate-list/candidate-list.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCandidateListCandidateListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-img {\n  padding-top: 0px;\n  height: 42px;\n  width: 150px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWxpc3QvQzpcXFVzZXJzXFxrdW5hbFxcRGVza3RvcFxcRW1pY29uXFxyZWNydWl0bWVudC1tYW5hZ2VyXFxjbGllbnQvc3JjXFxhcHBcXGNhbmRpZGF0ZS1saXN0XFxjYW5kaWRhdGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FuZGlkYXRlLWxpc3QvY2FuZGlkYXRlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS1saXN0L2NhbmRpZGF0ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1ne1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9IiwiLmxvZ28taW1nIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/candidate-list/candidate-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/candidate-list/candidate-list.component.ts ***!
    \************************************************************/

  /*! exports provided: CandidateListComponent */

  /***/
  function srcAppCandidateListCandidateListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateListComponent", function () {
      return CandidateListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/candidate.service */
    "./src/app/services/candidate.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts"); // import { NgxSpinnerService } from "ngx-spinner";


    var CandidateListComponent = /*#__PURE__*/function () {
      function CandidateListComponent(candidateService, userService // private spinner: NgxSpinnerService
      ) {
        _classCallCheck(this, CandidateListComponent);

        this.candidateService = candidateService;
        this.userService = userService;
        this.candidates = [];
        this.getCandidates();
      }

      _createClass(CandidateListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCandidates",
        value: function getCandidates() {
          var _this3 = this;

          // this.spinner.show();
          this.candidateService.getCandidates().subscribe(function (data) {
            // this.spinner.hide();
            _this3.candidates = data.candidates;

            for (var i = 0; i < _this3.candidates.length; i++) {
              console.log(_this3.candidates[i]);
            }

            console.log(_this3.candidates);
          });
        }
      }, {
        key: "exportToExcel",
        value: function exportToExcel() {
          var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].table_to_sheet(this.candidatesList.nativeElement);
          var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
          xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
          xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, 'candidate.xlsx');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userService.logout();
        }
      }]);

      return CandidateListComponent;
    }();

    CandidateListComponent.ctorParameters = function () {
      return [{
        type: _services_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('candidatesList', {
      "static": false
    })], CandidateListComponent.prototype, "candidatesList", void 0);
    CandidateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-candidate-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./candidate-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/candidate-list/candidate-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./candidate-list.component.scss */
      "./src/app/candidate-list/candidate-list.component.scss"))["default"]]
    })], CandidateListComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-img {\n  padding-top: 0px;\n  height: 42px;\n  width: 150px;\n  margin-right: 15px;\n}\n\n.box {\n  width: 300px;\n  height: 300px;\n  border-radius: 5px;\n  padding: 5px;\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);\n  background: #fbfcee;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  cursor: pointer;\n}\n\n.box:hover {\n  box-shadow: 0 10px 6px -6px #777;\n}\n\n.wave {\n  opacity: 0.4;\n  position: absolute;\n  top: 3%;\n  left: 50%;\n  background: #0af;\n  width: 500px;\n  height: 500px;\n  margin-left: -250px;\n  margin-top: -250px;\n  transform-origin: 50% 48%;\n  border-radius: 43%;\n  -webkit-animation: drift 3000ms infinite linear;\n          animation: drift 3000ms infinite linear;\n}\n\n.wave.-three {\n  -webkit-animation: drift 5000ms infinite linear;\n          animation: drift 5000ms infinite linear;\n}\n\n.wave.-two {\n  -webkit-animation: drift 7000ms infinite linear;\n          animation: drift 7000ms infinite linear;\n  opacity: 0.1;\n  background: yellow;\n}\n\n.box:after {\n  content: \"\";\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to bottom, #ee88aa, rgba(221, 238, 255, 0) 80%, rgba(255, 255, 255, 0.5));\n  z-index: 11;\n  transform: translate3d(0, 0, 0);\n}\n\n.title {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  line-height: 300px;\n  text-align: center;\n  transform: translate3d(0, 0, 0);\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Playfair Display\", serif;\n  letter-spacing: 0.4em;\n  font-size: 24px;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n  text-indent: 0.3em;\n}\n\n@-webkit-keyframes drift {\n  from {\n    transform: rotate(0deg);\n  }\n  from {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes drift {\n  from {\n    transform: rotate(0deg);\n  }\n  from {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xca3VuYWxcXERlc2t0b3BcXEVtaWNvblxccmVjcnVpdG1lbnQtbWFuYWdlclxcY2xpZW50L3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBR1MsZ0NBQUE7QUNFVDs7QURDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ0VGOztBRENBO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtBQ0VGOztBRENBO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUdBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0U7SUFBTyx1QkFBQTtFQ0lQO0VESEE7SUFBTyx5QkFBQTtFQ01QO0FBQ0Y7O0FEVEE7RUFDRTtJQUFPLHVCQUFBO0VDSVA7RURIQTtJQUFPLHlCQUFBO0VDTVA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1pbWd7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5ib3gge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOjVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAzMHB4IHJnYmEoYmxhY2ssIC4yKTtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCNmMGY0YzMsIDEwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib3g6aG92ZXJ7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuXHQgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG5cdCAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuXHJcbi53YXZlIHtcclxuICBvcGFjaXR5OiAuNDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzBhZjtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yNTBweDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNDglO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQzJTtcclxuICBhbmltYXRpb246IGRyaWZ0IDMwMDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi53YXZlLi10aHJlZSB7XHJcbiAgYW5pbWF0aW9uOiBkcmlmdCA1MDAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4ud2F2ZS4tdHdvIHtcclxuICBhbmltYXRpb246IGRyaWZ0IDcwMDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgb3BhY2l0eTogLjE7XHJcbiAgYmFja2dyb3VuZDogeWVsbG93O1xyXG59XHJcblxyXG4uYm94OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgjZThhLCAxKSwgcmdiYSgjZGVmLCAwKSA4MCUsIHJnYmEod2hpdGUsIC41KSk7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBsaW5lLWhlaWdodDogMzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC40ZW07XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoYmxhY2ssIC4xKTtcclxuICB0ZXh0LWluZGVudDogLjNlbTtcclxufVxyXG5Aa2V5ZnJhbWVzIGRyaWZ0IHtcclxuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59IiwiLmxvZ28taW1nIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmJveCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAjZmJmY2VlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJveDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xufVxuXG4ud2F2ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwYWY7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcbiAgbWFyZ2luLXRvcDogLTI1MHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNDglO1xuICBib3JkZXItcmFkaXVzOiA0MyU7XG4gIGFuaW1hdGlvbjogZHJpZnQgMzAwMG1zIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLndhdmUuLXRocmVlIHtcbiAgYW5pbWF0aW9uOiBkcmlmdCA1MDAwbXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG4ud2F2ZS4tdHdvIHtcbiAgYW5pbWF0aW9uOiBkcmlmdCA3MDAwbXMgaW5maW5pdGUgbGluZWFyO1xuICBvcGFjaXR5OiAwLjE7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbn1cblxuLmJveDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZTg4YWEsIHJnYmEoMjIxLCAyMzgsIDI1NSwgMCkgODAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkpO1xuICB6LWluZGV4OiAxMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBsaW5lLWhlaWdodDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC40ZW07XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0ZXh0LWluZGVudDogMC4zZW07XG59XG5cbkBrZXlmcmFtZXMgZHJpZnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(userService) {
        _classCallCheck(this, DashboardComponent);

        this.userService = userService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.userService.logout();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/edit-candidate/edit-candidate.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/edit-candidate/edit-candidate.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditCandidateEditCandidateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-img {\n  padding-top: 0px;\n  height: 42px;\n  width: 150px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1jYW5kaWRhdGUvQzpcXFVzZXJzXFxrdW5hbFxcRGVza3RvcFxcRW1pY29uXFxyZWNydWl0bWVudC1tYW5hZ2VyXFxjbGllbnQvc3JjXFxhcHBcXGVkaXQtY2FuZGlkYXRlXFxlZGl0LWNhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC1jYW5kaWRhdGUvZWRpdC1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY2FuZGlkYXRlL2VkaXQtY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1ne1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufSIsIi5sb2dvLWltZyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit-candidate/edit-candidate.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/edit-candidate/edit-candidate.component.ts ***!
    \************************************************************/

  /*! exports provided: EditCandidateComponent */

  /***/
  function srcAppEditCandidateEditCandidateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCandidateComponent", function () {
      return EditCandidateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/candidate.service */
    "./src/app/services/candidate.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var EditCandidateComponent = /*#__PURE__*/function () {
      function EditCandidateComponent(fb, actRoute, candidateService, notificationService, router, userService) {
        _classCallCheck(this, EditCandidateComponent);

        this.fb = fb;
        this.actRoute = actRoute;
        this.candidateService = candidateService;
        this.notificationService = notificationService;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.showErrorMessage = false;
      }

      _createClass(EditCandidateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateCandidate();
          var id = this.actRoute.snapshot.paramMap.get('id');
          this.getCandidate(id);
          this.editForm = this.fb.group({
            _id: [''],
            consultantName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            preferredLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$')]],
            panNumber: [''],
            adharNumber: [''],
            skillSet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            yearOfExperience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "getCandidate",
        value: function getCandidate(id) {
          var _this4 = this;

          this.candidateService.getSpecificCandidate(id).subscribe(function (data) {
            console.log(data);

            if (data.candidate != undefined) {
              _this4.editForm.setValue({
                _id: data.candidate._id,
                consultantName: data.candidate.consultantName,
                email: data.candidate.email,
                location: data.candidate.location,
                preferredLocation: data.candidate.preferredLocation,
                phoneNumber: data.candidate.phoneNumber,
                panNumber: data.candidate.panNumber,
                adharNumber: data.candidate.adharNumber,
                skillSet: data.candidate.skillSet,
                yearOfExperience: data.candidate.yearOfExperience
              });
            } else {
              _this4.editForm.setValue({
                _id: data.can._id,
                consultantName: data.can.consultantName,
                email: data.can.email,
                location: data.can.location,
                preferredLocation: data.can.preferredLocation,
                phoneNumber: data.can.phoneNumber,
                panNumber: data.can.panNumber,
                adharNumber: data.can.adharNumber,
                skillSet: data.can.skillSet,
                yearOfExperience: data.can.yearOfExperience
              });
            }
          });
        }
      }, {
        key: "updateCandidate",
        value: function updateCandidate() {
          this.editForm = this.fb.group({
            _id: [''],
            consultantName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            preferredLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$')]],
            panNumber: [''],
            adharNumber: [''],
            skillSet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            yearOfExperience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          var k = parseInt((this.editForm.value.yearOfExperience + "").split(".")[1]);

          if (k > 12) {
            this.showErrorMessage = true;
            return false;
          } else {
            this.submitted = true;

            if (!this.editForm.valid) {
              return false;
            } else {
              if (window.confirm('Are you sure?')) {
                var id = this.actRoute.snapshot.paramMap.get('id');
                this.candidateService.updateCandidate(id, this.editForm.value).subscribe(function (res) {
                  _this5.notificationService.showSuccess('Candidate updated successfully!', "");

                  _this5.router.navigateByUrl('/candidates');
                }, function (error) {
                  _this5.notificationService.showError(error.msg, '');
                });
              }
            }
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userService.logout();
        }
      }, {
        key: "myForm",
        get: function get() {
          return this.editForm.controls;
        }
      }]);

      return EditCandidateComponent;
    }();

    EditCandidateComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    EditCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-candidate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-candidate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-candidate/edit-candidate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-candidate.component.scss */
      "./src/app/edit-candidate/edit-candidate.component.scss"))["default"]]
    })], EditCandidateComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var token = localStorage.getItem('Token');
          var decodedToken = this.helper.decodeToken(token);
          var validity = this.helper.isTokenExpired(token);

          if (token != null && validity == false) {
            return true;
          } else {
            this.router.navigate(["/login"]);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/signup.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/guards/signup.guard.ts ***!
    \****************************************/

  /*! exports provided: SignupGuard */

  /***/
  function srcAppGuardsSignupGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupGuard", function () {
      return SignupGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupGuard = /*#__PURE__*/function () {
      function SignupGuard(router) {
        _classCallCheck(this, SignupGuard);

        this.router = router;
      }

      _createClass(SignupGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var admin = prompt("Please Enter Password : ", "");
          console.log(admin);

          if (admin == "password") {
            return true;
          } else {
            this.router.navigate(["/login"]);
            return false;
          }
        }
      }]);

      return SignupGuard;
    }();

    SignupGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignupGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SignupGuard);
    /***/
  },

  /***/
  "./src/app/institutes/add-institue/add-institue.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/institutes/add-institue/add-institue.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInstitutesAddInstitueAddInstitueComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-img {\n  padding-top: 0px;\n  height: 42px;\n  width: 150px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdGl0dXRlcy9hZGQtaW5zdGl0dWUvQzpcXFVzZXJzXFxrdW5hbFxcRGVza3RvcFxcRW1pY29uXFxyZWNydWl0bWVudC1tYW5hZ2VyXFxjbGllbnQvc3JjXFxhcHBcXGluc3RpdHV0ZXNcXGFkZC1pbnN0aXR1ZVxcYWRkLWluc3RpdHVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnN0aXR1dGVzL2FkZC1pbnN0aXR1ZS9hZGQtaW5zdGl0dWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHV0ZXMvYWRkLWluc3RpdHVlL2FkZC1pbnN0aXR1ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWltZ3tcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn0iLCIubG9nby1pbWcge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/institutes/add-institue/add-institue.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/institutes/add-institue/add-institue.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddInstitueComponent */

  /***/
  function srcAppInstitutesAddInstitueAddInstitueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddInstitueComponent", function () {
      return AddInstitueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/institute.service */
    "./src/app/services/institute.service.ts");

    var AddInstitueComponent = /*#__PURE__*/function () {
      function AddInstitueComponent(fb, router, ngZone, notificationService, userService, instituteService) {
        _classCallCheck(this, AddInstitueComponent);

        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.notificationService = notificationService;
        this.userService = userService;
        this.instituteService = instituteService;
        this.submitted = false;
        this.showErrorMessage = false;
        this.mainForm();
      }

      _createClass(AddInstitueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mainForm",
        value: function mainForm() {
          var data = this.userService.currentUser();
          this.currentUserEmail = data.email;
          this.instituteForm = this.fb.group({
            instituteName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            universityOfTheInstitute: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: this.fb.group({
              line1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              line2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              pinCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            instituteTpoName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            instituteTpoPhoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            instituteTpoEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            instituteStatus: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            instituteAddedBy: [this.currentUserEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userService.logout();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          this.submitted = true;

          if (!this.instituteForm.valid) {
            return false;
          } else {
            console.log(this.instituteForm.value);
            this.instituteService.addInstitute(this.instituteForm.value).subscribe(function (res) {
              _this6.notificationService.showSuccess('Institute successfully Added!', "");

              _this6.ngZone.run(function () {
                return _this6.router.navigateByUrl('/institutes');
              });
            }, function (error) {
              console.log(error);

              _this6.notificationService.showError(error, '');
            });
          }
        }
      }, {
        key: "ff",
        get: function get() {
          var outerGroup = this.instituteForm.controls.address;
          return outerGroup.controls;
        }
      }, {
        key: "myForm",
        get: function get() {
          return this.instituteForm.controls;
        }
      }]);

      return AddInstitueComponent;
    }();

    AddInstitueComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_institute_service__WEBPACK_IMPORTED_MODULE_6__["InstituteService"]
      }];
    };

    AddInstitueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-institue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-institue.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/add-institue/add-institue.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-institue.component.scss */
      "./src/app/institutes/add-institue/add-institue.component.scss"))["default"]]
    })], AddInstitueComponent);
    /***/
  },

  /***/
  "./src/app/institutes/edit-institue/edit-institue.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/institutes/edit-institue/edit-institue.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInstitutesEditInstitueEditInstitueComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHV0ZXMvZWRpdC1pbnN0aXR1ZS9lZGl0LWluc3RpdHVlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/institutes/edit-institue/edit-institue.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/institutes/edit-institue/edit-institue.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EditInstitueComponent */

  /***/
  function srcAppInstitutesEditInstitueEditInstitueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditInstitueComponent", function () {
      return EditInstitueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EditInstitueComponent = /*#__PURE__*/function () {
      function EditInstitueComponent() {
        _classCallCheck(this, EditInstitueComponent);
      }

      _createClass(EditInstitueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditInstitueComponent;
    }();

    EditInstitueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-institue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-institue.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/edit-institue/edit-institue.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-institue.component.scss */
      "./src/app/institutes/edit-institue/edit-institue.component.scss"))["default"]]
    })], EditInstitueComponent);
    /***/
  },

  /***/
  "./src/app/institutes/institue-list/institue-list.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/institutes/institue-list/institue-list.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInstitutesInstitueListInstitueListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-img {\n  padding-top: 0px;\n  height: 42px;\n  width: 150px;\n  margin-right: 15px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  float: right;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.strip {\n  padding: 20px;\n  font-weight: 700;\n  background-color: lightgray;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdGl0dXRlcy9pbnN0aXR1ZS1saXN0L0M6XFxVc2Vyc1xca3VuYWxcXERlc2t0b3BcXEVtaWNvblxccmVjcnVpdG1lbnQtbWFuYWdlclxcY2xpZW50L3NyY1xcYXBwXFxpbnN0aXR1dGVzXFxpbnN0aXR1ZS1saXN0XFxpbnN0aXR1ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnN0aXR1dGVzL2luc3RpdHVlLWxpc3QvaW5zdGl0dWUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRERJO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDR047O0FEREk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQ0dOOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUNESjs7QURJRTtFQUNBLHlCQUFBO0FDREY7O0FESUU7RUFDRSwyQkFBQTtBQ0RKOztBRElFO0VBR0EsMkJBQUE7QUNERjs7QURJRSxvQkFBQTs7QUFDQTtFQUNBLG1CQUFBO0FDREY7O0FESUU7RUFDQSxrQkFBQTtBQ0RGOztBRElFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvaW5zdGl0dXRlcy9pbnN0aXR1ZS1saXN0L2luc3RpdHVlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1pbWd7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBpbnB1dCB7IFxyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG5cclxuICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIH1cclxuICBcclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnN0cmlwe1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH0iLCIubG9nby1pbWcge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuLnN3aXRjaCAuc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3RyaXAge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/institutes/institue-list/institue-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/institutes/institue-list/institue-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: InstitueListComponent */

  /***/
  function srcAppInstitutesInstitueListInstitueListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstitueListComponent", function () {
      return InstitueListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/institute.service */
    "./src/app/services/institute.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/notification.service */
    "./src/app/services/notification.service.ts");

    var InstitueListComponent = /*#__PURE__*/function () {
      function InstitueListComponent(instituteService, userService, notifyService) {
        _classCallCheck(this, InstitueListComponent);

        this.instituteService = instituteService;
        this.userService = userService;
        this.notifyService = notifyService;
        this.institutes = [];
        this.getinstitute();
      }

      _createClass(InstitueListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getinstitute",
        value: function getinstitute() {
          var _this7 = this;

          this.instituteService.getInstitutes().subscribe(function (data) {
            _this7.institutes = data.institute;
          });
        }
      }, {
        key: "exportToExcel",
        value: function exportToExcel() {
          var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].table_to_sheet(this.institutesList.nativeElement);
          var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
          xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
          xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, 'institutes.xlsx');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userService.logout();
        }
      }, {
        key: "changeInstituteStatus",
        value: function changeInstituteStatus(name, status) {
          var _this8 = this;

          var newStatus;

          if (status == "true" || status == true) {
            newStatus = false;
          } else {
            newStatus = true;
          }

          console.log(status);
          console.log(newStatus);
          this.instituteService.changeInstituteStatus(name, newStatus).subscribe(function (data) {
            console.log(data);

            _this8.notifyService.showSuccess("Status Changed", "");

            _this8.ngOnInit();
          }, function (err) {
            console.log(err);

            _this8.notifyService.showError("Something went wrong", "");
          });
        }
      }]);

      return InstitueListComponent;
    }();

    InstitueListComponent.ctorParameters = function () {
      return [{
        type: _services_institute_service__WEBPACK_IMPORTED_MODULE_3__["InstituteService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('institutesList', {
      "static": false
    })], InstitueListComponent.prototype, "institutesList", void 0);
    InstitueListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-institue-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./institue-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/institutes/institue-list/institue-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./institue-list.component.scss */
      "./src/app/institutes/institue-list/institue-list.component.scss"))["default"]]
    })], InstitueListComponent);
    /***/
  },

  /***/
  "./src/app/interceptors/httpconfig.interceptor.ts":
  /*!********************************************************!*\
    !*** ./src/app/interceptors/httpconfig.interceptor.ts ***!
    \********************************************************/

  /*! exports provided: HttpConfigInterceptor */

  /***/
  function srcAppInterceptorsHttpconfigInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function () {
      return HttpConfigInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HttpConfigInterceptor = /*#__PURE__*/function () {
      function HttpConfigInterceptor() {
        _classCallCheck(this, HttpConfigInterceptor);
      }

      _createClass(HttpConfigInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // Get the auth token from  localstorage.
          var authToken = localStorage.getItem('Token');
          var newHeaders = req.headers;

          if (authToken) {
            // If we have a token, we append it to our new headers
            newHeaders = newHeaders.append('x-auth-token', authToken);
          }

          var authReq = req.clone({
            headers: newHeaders
          }); // Clone the request and replace the original headers with
          // cloned headers, updated with the authorization.
          // const authReq = req.clone({
          //     headers: req.headers.set('x-auth-token', authToken)
          // });
          // send cloned request with header to the next handler.

          return next.handle(authReq);
        }
      }]);

      return HttpConfigInterceptor;
    }();

    HttpConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpConfigInterceptor);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fullpage {\n  color: #fff;\n  background: #63738a;\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n}\n\n.form-control {\n  height: 40px;\n  box-shadow: none;\n  color: #969fa4;\n}\n\n.form-control:focus {\n  border-color: #5cb85c;\n}\n\n.form-control, .btn {\n  border-radius: 3px;\n}\n\n.signup-form {\n  width: 400px;\n  margin: 0 auto;\n  padding: 30px 0;\n}\n\n.signup-form h2 {\n  color: #636363;\n  margin: 0 0 15px;\n  position: relative;\n  text-align: center;\n}\n\n.im {\n  text-align: center;\n  align-self: center;\n  align-content: center;\n}\n\n.signup-form h2:before, .signup-form h2:after {\n  content: \"\";\n  height: 2px;\n  width: 30%;\n  background: #d4d4d4;\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n}\n\n.signup-form h2:before {\n  left: 0;\n}\n\n.signup-form h2:after {\n  right: 0;\n}\n\n.signup-form .hint-text {\n  color: #999;\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.signup-form form {\n  color: #999;\n  border-radius: 3px;\n  margin-bottom: 15px;\n  background: #f2f3f7;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n.signup-form .form-group {\n  margin-bottom: 20px;\n}\n\n.signup-form input[type=checkbox] {\n  margin-top: 3px;\n}\n\n.signup-form .btn {\n  font-size: 16px;\n  font-weight: bold;\n  min-width: 140px;\n  outline: none !important;\n}\n\n.signup-form .row div:first-child {\n  padding-right: 10px;\n}\n\n.signup-form .row div:last-child {\n  padding-left: 10px;\n}\n\n.signup-form a {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.signup-form a:hover {\n  text-decoration: none;\n}\n\n.signup-form form a {\n  color: #5cb85c;\n  text-decoration: none;\n}\n\n.signup-form form a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxrdW5hbFxcRGVza3RvcFxcRW1pY29uXFxyZWNydWl0bWVudC1tYW5hZ2VyXFxjbGllbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1FKOztBRE5BO0VBQ0ksT0FBQTtBQ1NKOztBRFBBO0VBQ0ksUUFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURUQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUNZSjs7QURWQTtFQUNJLG1CQUFBO0FDYUo7O0FEWEE7RUFDSSxlQUFBO0FDY0o7O0FEWkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDZUo7O0FEYkE7RUFDSSxtQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGtCQUFBO0FDaUJKOztBRGZBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FDa0JKOztBRGhCQTtFQUNJLHFCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ29CSjs7QURsQkE7RUFDSSwwQkFBQTtBQ3FCSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxwYWdlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzYzNzM4YTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjb2xvcjogIzk2OWZhNDtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWNiODVjO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG57ICAgICAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uc2lnbnVwLWZvcm17XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDJ7XHJcbiAgICBjb2xvcjogIzYzNjM2MztcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMjpiZWZvcmUsIC5zaWdudXAtZm9ybSBoMjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRkNGQ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGgyOmJlZm9yZXtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLnNpZ251cC1mb3JtIGgyOmFmdGVye1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5oaW50LXRleHR7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm17XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5idG57ICAgICAgICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1x0XHRcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5yb3cgZGl2OmZpcnN0LWNoaWxke1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLnJvdyBkaXY6bGFzdC1jaGlsZHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufSAgICBcdFxyXG4uc2lnbnVwLWZvcm0gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0gYXtcclxuICAgIGNvbG9yOiAjNWNiODVjO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59ICAiLCIuZnVsbHBhZ2Uge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzYzNzM4YTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjOTY5ZmE0O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNWNiODVjO1xufVxuXG4uZm9ybS1jb250cm9sLCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc2lnbnVwLWZvcm0ge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbi5zaWdudXAtZm9ybSBoMiB7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNpZ251cC1mb3JtIGgyOmJlZm9yZSwgLnNpZ251cC1mb3JtIGgyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQ6ICNkNGQ0ZDQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zaWdudXAtZm9ybSBoMjpiZWZvcmUge1xuICBsZWZ0OiAwO1xufVxuXG4uc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xuICByaWdodDogMDtcbn1cblxuLnNpZ251cC1mb3JtIC5oaW50LXRleHQge1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbnVwLWZvcm0gZm9ybSB7XG4gIGNvbG9yOiAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnNpZ251cC1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZ251cC1mb3JtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uc2lnbnVwLWZvcm0gLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNpZ251cC1mb3JtIC5yb3cgZGl2OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnNpZ251cC1mb3JtIC5yb3cgZGl2Omxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5zaWdudXAtZm9ybSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ251cC1mb3JtIGZvcm0gYSB7XG4gIGNvbG9yOiAjNWNiODVjO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWdudXAtZm9ybSBmb3JtIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, router, notifyService, userService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.notifyService = notifyService;
        this.userService = userService;
        this.formSubmitted = false; // helper = new JwtHelperService();

        this.showPassword = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "togglePassword",
        value: function togglePassword() {
          this.showPassword = !this.showPassword;
        } // Getter for easy access to form fields

      }, {
        key: "createForm",
        value: function createForm() {
          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this9 = this;

          this.formSubmitted = true;

          if (this.loginForm.invalid) {
            return;
          }

          this.userService.userLogin(this.loginForm.value).subscribe(function (data) {
            _this9.notifyService.showSuccess('Login Successfully', "");

            localStorage.setItem('Token', data.token);

            _this9.router.navigate(["/dashboard"]);
          }, function (err) {
            if (err.error.error) {
              _this9.notifyService.showError(err.error.error, "");
            } else if (err.error.msg) {
              _this9.notifyService.showError(err.error.msg, "");
            } else {
              _this9.notifyService.showError("Something went wrong", "");
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/services/candidate.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/candidate.service.ts ***!
    \***********************************************/

  /*! exports provided: CandidateService */

  /***/
  function srcAppServicesCandidateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateService", function () {
      return CandidateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CandidateService = /*#__PURE__*/function () {
      function CandidateService(http) {
        _classCallCheck(this, CandidateService);

        this.http = http;
      }

      _createClass(CandidateService, [{
        key: "addCandidate",
        value: function addCandidate(data) {
          // addCandidate(consultantImage,consultantName,email,location,preferredLocation,phoneNumber,panNumber,adharNumber,skillSet,yearOfExperience,createdBy,resume){
          var formData = new FormData(); // formData.append("consultantImage", consultantImage);
          // formData.append("consultantName", consultantName);
          // formData.append("email",email);
          // formData.append("location",location);
          // formData.append("preferredLocation",preferredLocation);
          // formData.append("phoneNumber",phoneNumber);
          // formData.append("panNumber",panNumber);
          // formData.append("adharNumber",adharNumber);
          // formData.append("skillSet",skillSet);
          // formData.append("yearOfExperience",yearOfExperience);
          // formData.append("createdBy",createdBy);
          // formData.append("resume",resume);

          console.log(formData);
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "/candidate/add-candidate"), data);
        }
      }, {
        key: "getCandidates",
        value: function getCandidates() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "/candidate/get-candidates"));
        }
      }, {
        key: "getSpecificCandidate",
        value: function getSpecificCandidate(id) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "/candidate/get-specific-candidate/").concat(id));
        }
      }, {
        key: "updateCandidate",
        value: function updateCandidate(id, data) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "/candidate/update-candidate/").concat(id), data);
        }
      }]);

      return CandidateService;
    }();

    CandidateService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CandidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CandidateService);
    /***/
  },

  /***/
  "./src/app/services/institute.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/institute.service.ts ***!
    \***********************************************/

  /*! exports provided: InstituteService */

  /***/
  function srcAppServicesInstituteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstituteService", function () {
      return InstituteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var InstituteService = /*#__PURE__*/function () {
      function InstituteService(http) {
        _classCallCheck(this, InstituteService);

        this.http = http;
      }

      _createClass(InstituteService, [{
        key: "addInstitute",
        value: function addInstitute(data) {
          console.log(data);
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "/institute/add-institute"), data);
        }
      }, {
        key: "getInstitutes",
        value: function getInstitutes() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "/institute/get-institute"));
        }
      }, {
        key: "changeInstituteStatus",
        value: function changeInstituteStatus(name, status) {
          var data = {
            name: name,
            status: status
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "/institute/change-institute-status"), data);
        }
      }]);

      return InstituteService;
    }();

    InstituteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    InstituteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InstituteService);
    /***/
  },

  /***/
  "./src/app/services/notification.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(toastr) {
        _classCallCheck(this, NotificationService);

        this.toastr = toastr;
      }

      _createClass(NotificationService, [{
        key: "showSuccess",
        value: function showSuccess(message, title) {
          this.toastr.success(message, title);
        }
      }, {
        key: "showError",
        value: function showError(message, title) {
          this.toastr.error(message, title);
        }
      }, {
        key: "showInfo",
        value: function showInfo(message, title) {
          this.toastr.info(message, title);
        }
      }, {
        key: "showWarning",
        value: function showWarning(message, title) {
          this.toastr.warning(message, title);
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
      }

      _createClass(UserService, [{
        key: "userSignup",
        value: function userSignup(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl, "/users/signup"), data);
        }
      }, {
        key: "userLogin",
        value: function userLogin(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl, "/users/login"), data);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('Token');
          this.router.navigate(['/login']);
        }
      }, {
        key: "currentUser",
        value: function currentUser() {
          var token = localStorage.getItem('Token');
          var decodedToken = this.helper.decodeToken(token);
          return decodedToken;
        }
      }, {
        key: "allUsers",
        value: function allUsers() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl, "/users/all-users"));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/signup/signup.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fullpage {\n  color: #fff;\n  background: #63738a;\n  font-family: \"Roboto\", sans-serif;\n  height: 110vh;\n}\n\n.form-control {\n  height: 40px;\n  box-shadow: none;\n  color: #969fa4;\n}\n\n.form-control:focus {\n  border-color: #5cb85c;\n}\n\n.form-control, .btn {\n  border-radius: 3px;\n}\n\n.signup-form {\n  width: 400px;\n  margin: 0 auto;\n  padding: 30px 0;\n}\n\n.signup-form h2 {\n  color: #636363;\n  margin: 0 0 15px;\n  position: relative;\n  text-align: center;\n}\n\n.im {\n  text-align: center;\n  align-self: center;\n  align-content: center;\n}\n\n.signup-form h2:before, .signup-form h2:after {\n  content: \"\";\n  height: 2px;\n  width: 30%;\n  background: #d4d4d4;\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n}\n\n.signup-form h2:before {\n  left: 0;\n}\n\n.signup-form h2:after {\n  right: 0;\n}\n\n.signup-form .hint-text {\n  color: #999;\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.signup-form form {\n  color: #999;\n  border-radius: 3px;\n  margin-bottom: 15px;\n  background: #f2f3f7;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n.signup-form .form-group {\n  margin-bottom: 20px;\n}\n\n.signup-form input[type=checkbox] {\n  margin-top: 3px;\n}\n\n.signup-form .btn {\n  font-size: 16px;\n  font-weight: bold;\n  min-width: 140px;\n  outline: none !important;\n}\n\n.signup-form .row div:first-child {\n  padding-right: 10px;\n}\n\n.signup-form .row div:last-child {\n  padding-left: 10px;\n}\n\n.signup-form a {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.signup-form a:hover {\n  text-decoration: none;\n}\n\n.signup-form form a {\n  color: #5cb85c;\n  text-decoration: none;\n}\n\n.signup-form form a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xca3VuYWxcXERlc2t0b3BcXEVtaWNvblxccmVjcnVpdG1lbnQtbWFuYWdlclxcY2xpZW50L3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENJO0VBQ0YsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFDO0VBQ0MscUJBQUE7QUNHRjs7QURESTtFQUNJLGtCQUFBO0FDSVI7O0FERkM7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLRjs7QURIQztFQUNDLGNBQUE7RUFDTSxnQkFBQTtFQUNOLGtCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ09SOztBRExDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDUUY7O0FETkM7RUFDQyxPQUFBO0FDU0Y7O0FEUEM7RUFDQyxRQUFBO0FDVUY7O0FEUkk7RUFDRixXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1dGOztBRFRJO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0csbUJBQUE7RUFDRyxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtBQ1lSOztBRFZDO0VBQ0MsbUJBQUE7QUNhRjs7QURYQztFQUNDLGVBQUE7QUNjRjs7QURaQztFQUNPLGVBQUE7RUFDQSxpQkFBQTtFQUNOLGdCQUFBO0VBQ00sd0JBQUE7QUNlUjs7QURiQztFQUNDLG1CQUFBO0FDZ0JGOztBRGRDO0VBQ0Msa0JBQUE7QUNpQkY7O0FEZkk7RUFDRixXQUFBO0VBQ0EsMEJBQUE7QUNrQkY7O0FEaEJJO0VBQ0YscUJBQUE7QUNtQkY7O0FEakJDO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FDb0JGOztBRGxCQztFQUNDLDBCQUFBO0FDcUJGIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxscGFnZSB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQ6ICM2MzczOGE7XHJcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRoZWlnaHQ6IDExMHZoO1xyXG5cdH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0Y29sb3I6ICM5NjlmYTQ7XHJcblx0fVxyXG5cdC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcblx0XHRib3JkZXItY29sb3I6ICM1Y2I4NWM7XHJcblx0fVxyXG4gICAgLmZvcm0tY29udHJvbCwgLmJ0bnsgICAgICAgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuXHQuc2lnbnVwLWZvcm17XHJcblx0XHR3aWR0aDogNDAwcHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHBhZGRpbmc6IDMwcHggMDtcclxuXHR9XHJcblx0LnNpZ251cC1mb3JtIGgye1xyXG5cdFx0Y29sb3I6ICM2MzYzNjM7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHQuc2lnbnVwLWZvcm0gaDI6YmVmb3JlLCAuc2lnbnVwLWZvcm0gaDI6YWZ0ZXJ7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0aGVpZ2h0OiAycHg7XHJcblx0XHR3aWR0aDogMzAlO1xyXG5cdFx0YmFja2dyb3VuZDogI2Q0ZDRkNDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0ei1pbmRleDogMjtcclxuXHR9XHRcclxuXHQuc2lnbnVwLWZvcm0gaDI6YmVmb3Jle1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblx0LnNpZ251cC1mb3JtIGgyOmFmdGVye1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG4gICAgLnNpZ251cC1mb3JtIC5oaW50LXRleHR7XHJcblx0XHRjb2xvcjogIzk5OTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG4gICAgLnNpZ251cC1mb3JtIGZvcm17XHJcblx0XHRjb2xvcjogIzk5OTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG5cdC5zaWdudXAtZm9ybSAuZm9ybS1ncm91cHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG5cdC5zaWdudXAtZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17XHJcblx0XHRtYXJnaW4tdG9wOiAzcHg7XHJcblx0fVxyXG5cdC5zaWdudXAtZm9ybSAuYnRueyAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1x0XHRcclxuXHRcdG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cdC5zaWdudXAtZm9ybSAucm93IGRpdjpmaXJzdC1jaGlsZHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cdC5zaWdudXAtZm9ybSAucm93IGRpdjpsYXN0LWNoaWxke1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdH0gICAgXHRcclxuICAgIC5zaWdudXAtZm9ybSBhe1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHR9XHJcbiAgICAuc2lnbnVwLWZvcm0gYTpob3ZlcntcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR9XHJcblx0LnNpZ251cC1mb3JtIGZvcm0gYXtcclxuXHRcdGNvbG9yOiAjNWNiODVjO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cdFxyXG5cdC5zaWdudXAtZm9ybSBmb3JtIGE6aG92ZXJ7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHR9ICAiLCIuZnVsbHBhZ2Uge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzYzNzM4YTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTEwdmg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjOTY5ZmE0O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNWNiODVjO1xufVxuXG4uZm9ybS1jb250cm9sLCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc2lnbnVwLWZvcm0ge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbi5zaWdudXAtZm9ybSBoMiB7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNpZ251cC1mb3JtIGgyOmJlZm9yZSwgLnNpZ251cC1mb3JtIGgyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQ6ICNkNGQ0ZDQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zaWdudXAtZm9ybSBoMjpiZWZvcmUge1xuICBsZWZ0OiAwO1xufVxuXG4uc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xuICByaWdodDogMDtcbn1cblxuLnNpZ251cC1mb3JtIC5oaW50LXRleHQge1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbnVwLWZvcm0gZm9ybSB7XG4gIGNvbG9yOiAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnNpZ251cC1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZ251cC1mb3JtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uc2lnbnVwLWZvcm0gLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNpZ251cC1mb3JtIC5yb3cgZGl2OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnNpZ251cC1mb3JtIC5yb3cgZGl2Omxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5zaWdudXAtZm9ybSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ251cC1mb3JtIGZvcm0gYSB7XG4gIGNvbG9yOiAjNWNiODVjO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWdudXAtZm9ybSBmb3JtIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, router, notifyService, userService) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.notifyService = notifyService;
        this.userService = userService;
        this.formShow = false;
        this.tableShow = true;
        this.formSubmitted = false;
        this.showPassword = false;
        this.showConfirmPassword = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.getAllUsers();
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this10 = this;

          this.userService.allUsers().subscribe(function (data) {
            _this10.allUsers = data.users;
          }, function (err) {
            _this10.notifyService.showError('Something Went Wrong', '');
          });
        }
      }, {
        key: "togglePassword",
        value: function togglePassword() {
          this.showPassword = !this.showPassword;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.formShow = !this.formShow;
          this.tableShow = !this.tableShow;
        }
      }, {
        key: "toggleConfirmPassword",
        value: function toggleConfirmPassword() {
          this.showConfirmPassword = !this.showConfirmPassword;
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.signupForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: this.MustMatch('password', 'confirmPassword')
          });
        }
      }, {
        key: "MustMatch",
        value: function MustMatch(password1, password2) {
          return function (formGroup) {
            var pass = formGroup.controls[password1];
            var confirmPass = formGroup.controls[password2];

            if (confirmPass.errors && !confirmPass.errors.mustMatch) {
              return;
            } // set error on confirmPass if validation fails


            if (pass.value !== confirmPass.value) {
              confirmPass.setErrors({
                mustMatch: true
              });
            } else {
              confirmPass.setErrors(null);
            }
          };
        } // Getter for easy access to form fields

      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this11 = this;

          this.formSubmitted = true;

          if (this.signupForm.invalid) {
            return;
          }

          this.userService.userSignup(this.signupForm.value).subscribe(function (data) {
            _this11.notifyService.showSuccess('Employee Account Created Successfully', "");

            _this11.router.navigate(["/"]);
          }, function (err) {
            if (err.error.error) {
              _this11.notifyService.showError(err.error.error, "");
            } else if (err.error.msg) {
              _this11.notifyService.showError(err.error.msg, "");
            } else {
              _this11.notifyService.showError("Something went wrong", "");
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.signupForm.controls;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      name: "(DEV)",
      // apiBaseUrl: "http://localhost:3000"
      apiBaseUrl: "https://peaceful-ravine-97669.herokuapp.com"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kunal\Desktop\Emicon\recruitment-manager\client\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** stream (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map