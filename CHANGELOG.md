# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [v0.5.3] - 2018-10-01

### Fixed

- Fix clean inputs (see [#22](https://github.com/gkueny/react-native-pin-code/issues/22))

## [v0.5.1] - 2018-09-09

### Fixed

- Fix clear input fields on success (see [#16](https://github.com/gkueny/react-native-pin-code/issues/16))
- Fix focus

## [v0.5.0] - 2018-09-03

### Added

- Supports auto-fill and past of codes.

### Fixed

- Fixed crash which occurs when using iOS 12's security code auto-fill feature.
- Corrected Typos in Readme/Changelog

## [v0.4.1] - 2018-02-09

### Fixed

- allow to not pass `code` prop.

## [v0.4.0] - 2018-02-09

### Added

- handle backspace event

## [v0.3.0] - 2018-02-04

### Added

- New prop `checkPinCode`(optional). Called to check pin code (`code` prop is not used if `checkPinCode` prop is present)
- New prop `obfuscation` (optional). Obfuscate code if set to true

### Changed

- Update Readme to add simple example.

### Fixed

- Use `code.length` if `number` prop is not used.
