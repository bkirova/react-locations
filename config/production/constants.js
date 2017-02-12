/*global exports*/
/*eslint no-undef: "error"*/

/**
 * @file Manages the global constants of the system.
 */

/**
 * Denifes a constant
 * @public
 * @function define
 * @param    {string} constant name
 * @param    {mixed} constant value
 */
function define (name, value) {
	Object.defineProperty(exports, name, {
		value:      value,
		enumerable: true
	});
}


/*** NODE CONSTANTS ***/
define("NODE_STATUS_RUNNING", 1);
define("NODE_STATUS_PAUSED", -1);
define("NODE_STATUS_STOPPED", 0);
define("NODE_STATUS_ELECTING", 2);
define("NODE_STATUS_LISTENING", -2);
define("NODE_TYPE_MASTER", "MASTER");
define("NODE_TYPE_SLAVE", "SLAVE");


/*** CRON CONSTANTS ***/
define("CRON_STATUS_ACTIVE", 1);
define("CRON_STATUS_INACTIVE", 0);
define("CRON_STATUS_DEPRECATED", -1);
define("CRON_STATUS_COMPLETE", 2);


/*** TASK CONSTANTS ***/
define("TASK_STATE_RUNNING", 1);
define("TASK_STATE_PENDING", 0);
define("TASK_STATE_EXECUTED", 2);
define("TASK_STATE_FAILED", -1);
define("TASK_STATE_COMPLETE", -2);
define("TASK_TYPE_SINGLE", 0);
define("TASK_TYPE_MULTI", 1);
define("TASK_PRIORITY_VERY_LOW", 1);
define("TASK_PRIORITY_LOW", 2);
define("TASK_PRIORITY_MODERATE", 3);
define("TASK_PRIORITY_HIGH", 4);
define("TASK_PRIORITY_VERY_HIGH", 5);
define("TASK_PRIORITY_CRITICAL", 6);

/*** SEVERITY LEVELS CONSTANTS ***/
define("SEVERITY_LEVEL_EMERGENCY", "emerg");
define("SEVERITY_LEVEL_ALERT", "alert");
define("SEVERITY_LEVEL_CRITICAL", "crit");
define("SEVERITY_LEVEL_ERROR", "error");
define("SEVERITY_LEVEL_WARNING", "warning");
define("SEVERITY_LEVEL_NOTICE", "notice");
define("SEVERITY_LEVEL_INFORMATIONAL", "info");
define("SEVERITY_LEVEL_DEBUG", "debug");
