# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [v0.4.0] - 2018-02-09

### Added

* handle backspace event

### Fixed

* allow to not pass `code` prop.

## [v0.3.0] - 2018-02-04

### Added

* New prop `checkPinCode`(optionnal). Called to check pin code (`code` prop is not used if `checkPinCode` prop is present)
* New prop `obfuscation` (optionnal). Obfuscate code if set to true

### Changed

* Update Readme to add simple example.

### Fixed

* Use `code.length` if `number` prop is not used.
