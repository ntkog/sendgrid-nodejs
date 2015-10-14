"use strict";

function Marketing(params) {
  params = params || {};

  this.to      = params.to      || [];
  this.from    = params.from    || '';
  this.smtpapi = params.smtpapi || new smtpapi_lib();
  this.subject = params.subject || '';
  this.text    = params.text    || '';
  this.html    = params.html    || '';
  this.bcc     = params.bcc     || [];
  this.cc      = params.cc      || [];
  this.replyto = params.replyto || '';
  this.date    = params.date    || '';
  this.headers = params.headers || {};

  if(params.toname !== null) {
    this.toname = params.toname;
  }
  if(params.fromname !== null) {
    this.fromname = params.fromname;
  }
  // auto handle calling the constructor for the file handler
  this.files = [];
  if (params.files) {
    params.files.forEach(function(file) {
      this.files.push(new FileHandler(file));
    }, this);
  }
}

module.exports = Marketing;