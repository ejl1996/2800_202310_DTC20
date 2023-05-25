1. Project Title: BrainWorld

2. Project Description (One Sentence Pitch): 
Our team, BrainWorld, is developing an application to help people who are concerned with preserving their cognitive health by providing personalized recommendations, MMSE questionnaires, and screening questions.

3. Project Technologies: 
-Frontend: EJS, CSS, and JavaScript. 
-Backend: JavaScript and MongoDB. 
-Database: Alzheimer Features For Analysis from Kaggle (usability score: 10). Data converted into a CSV text file to organize it into a tabular format. 
-Other tech tools: Visual Studio Code (to edit our files and code), SourceTree (to commit, push, and pull changes to our feature branch, dev branch, and main branch), and GitHub (to create a repository of our project). 

4. List of Files: 

│   │   │   │   │   ├── read_preference.ts
│   │   │   │   │   ├── sdam
│   │   │   │   │   │   ├── common.ts
│   │   │   │   │   │   ├── events.ts
│   │   │   │   │   │   ├── monitor.ts
│   │   │   │   │   │   ├── server.ts
│   │   │   │   │   │   ├── server_description.ts
│   │   │   │   │   │   ├── server_selection.ts
│   │   │   │   │   │   ├── srv_polling.ts
│   │   │   │   │   │   ├── topology.ts
│   │   │   │   │   │   └── topology_description.ts
│   │   │   │   │   ├── sessions.ts
│   │   │   │   │   ├── sort.ts
│   │   │   │   │   ├── transactions.ts
│   │   │   │   │   ├── utils.ts
│   │   │   │   │   └── write_concern.ts
│   │   │   │   └── tsconfig.json
│   │   │   └── ms
│   │   │       ├── index.js
│   │   │       ├── license.md
│   │   │       ├── package.json
│   │   │       └── readme.md
│   │   ├── package.json
│   │   ├── scripts
│   │   │   ├── build-browser.js
│   │   │   ├── create-tarball.js
│   │   │   ├── generateSearch.js
│   │   │   ├── loadSponsorData.js
│   │   │   └── tsc-diagnostics-check.js
│   │   ├── tools
│   │   │   ├── auth.js
│   │   │   ├── repl.js
│   │   │   └── sharded.js
│   │   ├── tsconfig.json
│   │   └── types
│   │       ├── aggregate.d.ts
│   │       ├── callback.d.ts
│   │       ├── collection.d.ts
│   │       ├── connection.d.ts
│   │       ├── cursor.d.ts
│   │       ├── document.d.ts
│   │       ├── error.d.ts
│   │       ├── expressions.d.ts
│   │       ├── helpers.d.ts
│   │       ├── index.d.ts
│   │       ├── indexes.d.ts
│   │       ├── inferschematype.d.ts
│   │       ├── middlewares.d.ts
│   │       ├── models.d.ts
│   │       ├── mongooseoptions.d.ts
│   │       ├── pipelinestage.d.ts
│   │       ├── populate.d.ts
│   │       ├── query.d.ts
│   │       ├── schemaoptions.d.ts
│   │       ├── schematypes.d.ts
│   │       ├── session.d.ts
│   │       ├── types.d.ts
│   │       ├── utility.d.ts
│   │       ├── validation.d.ts
│   │       └── virtuals.d.ts
│   ├── mpath
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── index.js
│   │   │   └── stringToParts.js
│   │   ├── package.json
│   │   └── test
│   │       ├── index.js
│   │       └── stringToParts.js
│   ├── mquery
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── lib
│   │   │   ├── collection
│   │   │   │   ├── collection.js
│   │   │   │   ├── index.js
│   │   │   │   └── node.js
│   │   │   ├── env.js
│   │   │   ├── mquery.js
│   │   │   ├── permissions.js
│   │   │   └── utils.js
│   │   └── package.json
│   ├── ms
│   │   ├── index.js
│   │   ├── license.md
│   │   ├── package.json
│   │   └── readme.md
│   ├── negotiator
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── charset.js
│   │   │   ├── encoding.js
│   │   │   ├── language.js
│   │   │   └── mediaType.js
│   │   └── package.json
│   ├── node-addon-api
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── common.gypi
│   │   ├── except.gypi
│   │   ├── index.js
│   │   ├── napi-inl.deprecated.h
│   │   ├── napi-inl.h
│   │   ├── napi.h
│   │   ├── node_api.gyp
│   │   ├── noexcept.gypi
│   │   ├── nothing.c
│   │   ├── package-support.json
│   │   ├── package.json
│   │   └── tools
│   │       ├── README.md
│   │       ├── check-napi.js
│   │       ├── clang-format.js
│   │       ├── conversion.js
│   │       └── eslint-format.js
│   ├── node-fetch
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── browser.js
│   │   ├── lib
│   │   │   ├── index.es.js
│   │   │   ├── index.js
│   │   │   └── index.mjs
│   │   ├── node_modules
│   │   │   ├── tr46
│   │   │   │   ├── index.js
│   │   │   │   ├── lib
│   │   │   │   │   └── mappingTable.json
│   │   │   │   └── package.json
│   │   │   ├── webidl-conversions
│   │   │   │   ├── LICENSE.md
│   │   │   │   ├── README.md
│   │   │   │   ├── lib
│   │   │   │   │   └── index.js
│   │   │   │   └── package.json
│   │   │   └── whatwg-url
│   │   │       ├── LICENSE.txt
│   │   │       ├── README.md
│   │   │       ├── lib
│   │   │       │   ├── URL-impl.js
│   │   │       │   ├── URL.js
│   │   │       │   ├── public-api.js
│   │   │       │   ├── url-state-machine.js
│   │   │       │   └── utils.js
│   │   │       └── package.json
│   │   └── package.json
│   ├── nopt
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── nopt.js
│   │   ├── lib
│   │   │   └── nopt.js
│   │   └── package.json
│   ├── npmlog
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── log.js
│   │   └── package.json
│   ├── object-assign
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── object-inspect
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── example
│   │   │   ├── all.js
│   │   │   ├── circular.js
│   │   │   ├── fn.js
│   │   │   └── inspect.js
│   │   ├── index.js
│   │   ├── package-support.json
│   │   ├── package.json
│   │   ├── readme.markdown
│   │   ├── test
│   │   │   ├── bigint.js
│   │   │   ├── browser
│   │   │   │   └── dom.js
│   │   │   ├── circular.js
│   │   │   ├── deep.js
│   │   │   ├── element.js
│   │   │   ├── err.js
│   │   │   ├── fakes.js
│   │   │   ├── fn.js
│   │   │   ├── has.js
│   │   │   ├── holes.js
│   │   │   ├── indent-option.js
│   │   │   ├── inspect.js
│   │   │   ├── lowbyte.js
│   │   │   ├── number.js
│   │   │   ├── quoteStyle.js
│   │   │   ├── toStringTag.js
│   │   │   ├── undef.js
│   │   │   └── values.js
│   │   ├── test-core-js.js
│   │   └── util.inspect.js
│   ├── on-finished
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── on-headers
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── once
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── once.js
│   │   └── package.json
│   ├── parseurl
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── path-is-absolute
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── path-to-regexp
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── proxy-addr
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── punycode
│   │   ├── LICENSE-MIT.txt
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── punycode.es6.js
│   │   └── punycode.js
│   ├── qs
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── dist
│   │   │   └── qs.js
│   │   ├── lib
│   │   │   ├── formats.js
│   │   │   ├── index.js
│   │   │   ├── parse.js
│   │   │   ├── stringify.js
│   │   │   └── utils.js
│   │   ├── package.json
│   │   └── test
│   │       ├── parse.js
│   │       ├── stringify.js
│   │       └── utils.js
│   ├── random-bytes
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── range-parser
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── raw-body
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── readable-stream
│   │   ├── CONTRIBUTING.md
│   │   ├── GOVERNANCE.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── errors-browser.js
│   │   ├── errors.js
│   │   ├── experimentalWarning.js
│   │   ├── lib
│   │   │   ├── _stream_duplex.js
│   │   │   ├── _stream_passthrough.js
│   │   │   ├── _stream_readable.js
│   │   │   ├── _stream_transform.js
│   │   │   ├── _stream_writable.js
│   │   │   └── internal
│   │   │       └── streams
│   │   │           ├── async_iterator.js
│   │   │           ├── buffer_list.js
│   │   │           ├── destroy.js
│   │   │           ├── end-of-stream.js
│   │   │           ├── from-browser.js
│   │   │           ├── from.js
│   │   │           ├── pipeline.js
│   │   │           ├── state.js
│   │   │           ├── stream-browser.js
│   │   │           └── stream.js
│   │   ├── package.json
│   │   ├── readable-browser.js
│   │   └── readable.js
│   ├── rimraf
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin.js
│   │   ├── package.json
│   │   └── rimraf.js
│   ├── safe-buffer
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── safer-buffer
│   │   ├── LICENSE
│   │   ├── Porting-Buffer.md
│   │   ├── Readme.md
│   │   ├── dangerous.js
│   │   ├── package.json
│   │   ├── safer.js
│   │   └── tests.js
│   ├── saslprep
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── code-points.mem
│   │   ├── generate-code-points.js
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── code-points.js
│   │   │   ├── memory-code-points.js
│   │   │   └── util.js
│   │   ├── package.json
│   │   ├── readme.md
│   │   └── test
│   │       ├── index.js
│   │       └── util.js
│   ├── semver
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── semver.js
│   │   ├── classes
│   │   │   ├── comparator.js
│   │   │   ├── index.js
│   │   │   ├── range.js
│   │   │   └── semver.js
│   │   ├── functions
│   │   │   ├── clean.js
│   │   │   ├── cmp.js
│   │   │   ├── coerce.js
│   │   │   ├── compare-build.js
│   │   │   ├── compare-loose.js
│   │   │   ├── compare.js
│   │   │   ├── diff.js
│   │   │   ├── eq.js
│   │   │   ├── gt.js
│   │   │   ├── gte.js
│   │   │   ├── inc.js
│   │   │   ├── lt.js
│   │   │   ├── lte.js
│   │   │   ├── major.js
│   │   │   ├── minor.js
│   │   │   ├── neq.js
│   │   │   ├── parse.js
│   │   │   ├── patch.js
│   │   │   ├── prerelease.js
│   │   │   ├── rcompare.js
│   │   │   ├── rsort.js
│   │   │   ├── satisfies.js
│   │   │   ├── sort.js
│   │   │   └── valid.js
│   │   ├── index.js
│   │   ├── internal
│   │   │   ├── constants.js
│   │   │   ├── debug.js
│   │   │   ├── identifiers.js
│   │   │   ├── parse-options.js
│   │   │   └── re.js
│   │   ├── package.json
│   │   ├── preload.js
│   │   ├── range.bnf
│   │   └── ranges
│   │       ├── gtr.js
│   │       ├── intersects.js
│   │       ├── ltr.js
│   │       ├── max-satisfying.js
│   │       ├── min-satisfying.js
│   │       ├── min-version.js
│   │       ├── outside.js
│   │       ├── simplify.js
│   │       ├── subset.js
│   │       ├── to-comparators.js
│   │       └── valid.js
│   ├── send
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── index.js
│   │   ├── node_modules
│   │   │   ├── debug
│   │   │   │   ├── CHANGELOG.md
│   │   │   │   ├── LICENSE
│   │   │   │   ├── Makefile
│   │   │   │   ├── README.md
│   │   │   │   ├── component.json
│   │   │   │   ├── karma.conf.js
│   │   │   │   ├── node.js
│   │   │   │   ├── node_modules
│   │   │   │   │   └── ms
│   │   │   │   │       ├── index.js
│   │   │   │   │       ├── license.md
│   │   │   │   │       ├── package.json
│   │   │   │   │       └── readme.md
│   │   │   │   ├── package.json
│   │   │   │   └── src
│   │   │   │       ├── browser.js
│   │   │   │       ├── debug.js
│   │   │   │       ├── index.js
│   │   │   │       ├── inspector-log.js
│   │   │   │       └── node.js
│   │   │   └── ms
│   │   │       ├── index.js
│   │   │       ├── license.md
│   │   │       ├── package.json
│   │   │       └── readme.md
│   │   └── package.json
│   ├── serve-static
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── session
│   │   ├── LICENSE
│   │   ├── README
│   │   ├── lib
│   │   │   └── session
│   │   │       ├── index.js
│   │   │       ├── session.js
│   │   │       └── storage
│   │   │           ├── base.js
│   │   │           ├── memcached.js
│   │   │           └── memory.js
│   │   ├── package.json
│   │   └── test
│   │       └── session
│   │           ├── session.test.js
│   │           └── storage
│   │               └── base.test.js
│   ├── set-blocking
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── setprototypeof
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── side-channel
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── sift
│   │   ├── MIT-LICENSE.txt
│   │   ├── README.md
│   │   ├── es
│   │   │   ├── index.js
│   │   │   └── index.js.map
│   │   ├── es5m
│   │   │   ├── index.js
│   │   │   └── index.js.map
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── core.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── operations.d.ts
│   │   │   └── utils.d.ts
│   │   ├── package.json
│   │   ├── sift.csp.min.js
│   │   ├── sift.csp.min.js.map
│   │   ├── sift.min.js
│   │   ├── sift.min.js.map
│   │   └── src
│   │       ├── core.d.ts
│   │       ├── core.js
│   │       ├── core.js.map
│   │       ├── core.ts
│   │       ├── index.d.ts
│   │       ├── index.js
│   │       ├── index.js.map
│   │       ├── index.ts
│   │       ├── operations.d.ts
│   │       ├── operations.js
│   │       ├── operations.js.map
│   │       ├── operations.ts
│   │       ├── utils.d.ts
│   │       ├── utils.js
│   │       ├── utils.js.map
│   │       └── utils.ts
│   ├── signal-exit
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── signals.js
│   ├── smart-buffer
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── build
│   │   │   ├── smartbuffer.js
│   │   │   ├── smartbuffer.js.map
│   │   │   ├── utils.js
│   │   │   └── utils.js.map
│   │   ├── docs
│   │   │   ├── CHANGELOG.md
│   │   │   ├── README_v3.md
│   │   │   └── ROADMAP.md
│   │   ├── package.json
│   │   └── typings
│   │       ├── smartbuffer.d.ts
│   │       └── utils.d.ts
│   ├── socks
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── build
│   │   │   ├── client
│   │   │   │   ├── socksclient.js
│   │   │   │   └── socksclient.js.map
│   │   │   ├── common
│   │   │   │   ├── constants.js
│   │   │   │   ├── constants.js.map
│   │   │   │   ├── helpers.js
│   │   │   │   ├── helpers.js.map
│   │   │   │   ├── receivebuffer.js
│   │   │   │   ├── receivebuffer.js.map
│   │   │   │   ├── util.js
│   │   │   │   └── util.js.map
│   │   │   ├── index.js
│   │   │   └── index.js.map
│   │   ├── docs
│   │   │   ├── examples
│   │   │   │   ├── index.md
│   │   │   │   ├── javascript
│   │   │   │   │   ├── associateExample.md
│   │   │   │   │   ├── bindExample.md
│   │   │   │   │   └── connectExample.md
│   │   │   │   └── typescript
│   │   │   │       ├── associateExample.md
│   │   │   │       ├── bindExample.md
│   │   │   │       └── connectExample.md
│   │   │   ├── index.md
│   │   │   └── migratingFromV1.md
│   │   ├── package.json
│   │   └── typings
│   │       ├── client
│   │       │   └── socksclient.d.ts
│   │       ├── common
│   │       │   ├── constants.d.ts
│   │       │   ├── helpers.d.ts
│   │       │   ├── receivebuffer.d.ts
│   │       │   └── util.d.ts
│   │       └── index.d.ts
│   ├── sparse-bitfield
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test.js
│   ├── statuses
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── codes.json
│   │   ├── index.js
│   │   └── package.json
│   ├── string-width
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── string_decoder
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   └── string_decoder.js
│   │   └── package.json
│   ├── strip-ansi
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── strnum
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── strnum.js
│   │   └── strnum.test.js
│   ├── supports-color
│   │   ├── browser.js
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── tar
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── create.js
│   │   │   ├── extract.js
│   │   │   ├── get-write-flag.js
│   │   │   ├── header.js
│   │   │   ├── high-level-opt.js
│   │   │   ├── large-numbers.js
│   │   │   ├── list.js
│   │   │   ├── mkdir.js
│   │   │   ├── mode-fix.js
│   │   │   ├── normalize-unicode.js
│   │   │   ├── normalize-windows-path.js
│   │   │   ├── pack.js
│   │   │   ├── parse.js
│   │   │   ├── path-reservations.js
│   │   │   ├── pax.js
│   │   │   ├── read-entry.js
│   │   │   ├── replace.js
│   │   │   ├── strip-absolute-path.js
│   │   │   ├── strip-trailing-slashes.js
│   │   │   ├── types.js
│   │   │   ├── unpack.js
│   │   │   ├── update.js
│   │   │   ├── warn-mixin.js
│   │   │   ├── winchars.js
│   │   │   └── write-entry.js
│   │   └── package.json
│   ├── toidentifier
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── tr46
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── mappingTable.json
│   │   │   ├── regexes.js
│   │   │   └── statusMapping.js
│   │   └── package.json
│   ├── tslib
│   │   ├── CopyrightNotice.txt
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── modules
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   ├── package.json
│   │   ├── tslib.d.ts
│   │   ├── tslib.es6.html
│   │   ├── tslib.es6.js
│   │   ├── tslib.html
│   │   └── tslib.js
│   ├── type-is
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── uid-safe
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── unpipe
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── util-deprecate
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── browser.js
│   │   ├── node.js
│   │   └── package.json
│   ├── utils-merge
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── uuid
│   │   ├── CHANGELOG.md
│   │   ├── CONTRIBUTING.md
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── bin
│   │   │   │   └── uuid
│   │   │   ├── esm-browser
│   │   │   │   ├── index.js
│   │   │   │   ├── md5.js
│   │   │   │   ├── nil.js
│   │   │   │   ├── parse.js
│   │   │   │   ├── regex.js
│   │   │   │   ├── rng.js
│   │   │   │   ├── sha1.js
│   │   │   │   ├── stringify.js
│   │   │   │   ├── v1.js
│   │   │   │   ├── v3.js
│   │   │   │   ├── v35.js
│   │   │   │   ├── v4.js
│   │   │   │   ├── v5.js
│   │   │   │   ├── validate.js
│   │   │   │   └── version.js
│   │   │   ├── esm-node
│   │   │   │   ├── index.js
│   │   │   │   ├── md5.js
│   │   │   │   ├── nil.js
│   │   │   │   ├── parse.js
│   │   │   │   ├── regex.js
│   │   │   │   ├── rng.js
│   │   │   │   ├── sha1.js
│   │   │   │   ├── stringify.js
│   │   │   │   ├── v1.js
│   │   │   │   ├── v3.js
│   │   │   │   ├── v35.js
│   │   │   │   ├── v4.js
│   │   │   │   ├── v5.js
│   │   │   │   ├── validate.js
│   │   │   │   └── version.js
│   │   │   ├── index.js
│   │   │   ├── md5-browser.js
│   │   │   ├── md5.js
│   │   │   ├── nil.js
│   │   │   ├── parse.js
│   │   │   ├── regex.js
│   │   │   ├── rng-browser.js
│   │   │   ├── rng.js
│   │   │   ├── sha1-browser.js
│   │   │   ├── sha1.js
│   │   │   ├── stringify.js
│   │   │   ├── umd
│   │   │   │   ├── uuid.min.js
│   │   │   │   ├── uuidNIL.min.js
│   │   │   │   ├── uuidParse.min.js
│   │   │   │   ├── uuidStringify.min.js
│   │   │   │   ├── uuidValidate.min.js
│   │   │   │   ├── uuidVersion.min.js
│   │   │   │   ├── uuidv1.min.js
│   │   │   │   ├── uuidv3.min.js
│   │   │   │   ├── uuidv4.min.js
│   │   │   │   └── uuidv5.min.js
│   │   │   ├── uuid-bin.js
│   │   │   ├── v1.js
│   │   │   ├── v3.js
│   │   │   ├── v35.js
│   │   │   ├── v4.js
│   │   │   ├── v5.js
│   │   │   ├── validate.js
│   │   │   └── version.js
│   │   ├── package.json
│   │   └── wrapper.mjs
│   ├── vary
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── vows
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── vows
│   │   ├── lib
│   │   │   ├── assert
│   │   │   │   ├── error.js
│   │   │   │   ├── macros.js
│   │   │   │   └── utils.js
│   │   │   ├── utils
│   │   │   │   └── nopstream.js
│   │   │   ├── vows
│   │   │   │   ├── console.js
│   │   │   │   ├── context.js
│   │   │   │   ├── coverage
│   │   │   │   │   ├── file.js
│   │   │   │   │   ├── fragments
│   │   │   │   │   │   ├── coverage-foot.html
│   │   │   │   │   │   └── coverage-head.html
│   │   │   │   │   ├── report-html.js
│   │   │   │   │   ├── report-json.js
│   │   │   │   │   ├── report-plain.js
│   │   │   │   │   └── report-xml.js
│   │   │   │   ├── extras.js
│   │   │   │   ├── reporters
│   │   │   │   │   ├── dot-matrix.js
│   │   │   │   │   ├── json.js
│   │   │   │   │   ├── silent.js
│   │   │   │   │   ├── spec.js
│   │   │   │   │   ├── tap.js
│   │   │   │   │   ├── watch.js
│   │   │   │   │   └── xunit.js
│   │   │   │   └── suite.js
│   │   │   └── vows.js
│   │   ├── package.json
│   │   └── test
│   │       ├── VowsCamelCaseTest.js
│   │       ├── assert-test.js
│   │       ├── c-test.js
│   │       ├── experimental
│   │       │   └── gh-325.js
│   │       ├── fixtures
│   │       │   ├── isolate
│   │       │   │   ├── failing.js
│   │       │   │   ├── log.js
│   │       │   │   ├── passing.js
│   │       │   │   └── stderr.js
│   │       │   └── supress-stdout
│   │       │       └── output.js
│   │       ├── isolate-test.js
│   │       ├── reporters
│   │       │   └── reporters-test.js
│   │       ├── supress-stdout-test.js
│   │       ├── vows-error-test.js
│   │       ├── vows-test.js
│   │       └── vows_underscore_test.js
│   ├── webidl-conversions
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── lib
│   │   │   └── index.js
│   │   └── package.json
│   ├── whatwg-url
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── Function.js
│   │   │   ├── URL-impl.js
│   │   │   ├── URL.js
│   │   │   ├── URLSearchParams-impl.js
│   │   │   ├── URLSearchParams.js
│   │   │   ├── VoidFunction.js
│   │   │   ├── encoding.js
│   │   │   ├── infra.js
│   │   │   ├── percent-encoding.js
│   │   │   ├── url-state-machine.js
│   │   │   ├── urlencoded.js
│   │   │   └── utils.js
│   │   ├── package.json
│   │   └── webidl2js-wrapper.js
│   ├── wide-align
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── align.js
│   │   └── package.json
│   ├── wrappy
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   └── wrappy.js
│   └── yallist
│       ├── LICENSE
│       ├── README.md
│       ├── iterator.js
│       ├── package.json
│       └── yallist.js
├── public
│   ├── basketball.gif
│   ├── brainworld.png
│   └── wristwatch.jpg
├── scripts
│   ├── data_demented.js
│   ├── data_nondemented copy.js
│   ├── databaseConnection.js
│   └── utils.js
├── tests
│   ├── 1.txt
│   ├── 10.txt
│   ├── 11.txt
│   ├── 12.txt
│   ├── 13.txt
│   ├── 14.txt
│   ├── 15.txt
│   ├── 16.txt
│   ├── 17.txt
│   ├── 18.txt
│   ├── 19.txt
│   ├── 2.txt
│   ├── 20.txt
│   ├── 21.txt
│   ├── 22.txt
│   ├── 23.txt
│   ├── 24.txt
│   ├── 25.txt
│   ├── 26.txt
│   ├── 27.txt
│   ├── 28.txt
│   ├── 29.txt
│   ├── 3.txt
│   ├── 30.txt
│   ├── 31.txt
│   ├── 32.txt
│   ├── 33.txt
│   ├── 34.txt
│   ├── 35.txt
│   ├── 36.txt
│   ├── 37.txt
│   ├── 38.txt
│   ├── 39.txt
│   ├── 4.txt
│   ├── 40.txt
│   ├── 41.txt
│   ├── 42.txt
│   ├── 43.txt
│   ├── 44.txt
│   ├── 45.txt
│   ├── 46.txt
│   ├── 47.txt
│   ├── 48.txt
│   ├── 49.txt
│   ├── 5.txt
│   ├── 50.txt
│   ├── 51.txt
│   ├── 52.txt
│   ├── 53.txt
│   ├── 54.txt
│   ├── 55.txt
│   ├── 56.txt
│   ├── 57.txt
│   ├── 58.txt
│   ├── 59.txt
│   ├── 6.txt
│   ├── 60.txt
│   ├── 61.txt
│   ├── 62.txt
│   ├── 7.txt
│   ├── 8.txt
│   └── 9.txt
└── views
    ├── 404.ejs
    ├── config.js
    ├── home.ejs
    ├── login.ejs
    ├── logout.ejs
    ├── mmse1.ejs
    ├── mmse10.ejs
    ├── mmse2.ejs
    ├── mmse3.ejs
    ├── mmse4.ejs
    ├── mmse5.ejs
    ├── mmse6.ejs
    ├── mmse7.ejs
    ├── mmse8.ejs
    ├── mmse9.ejs
    ├── number.ejs
    ├── password.ejs
    ├── profile.ejs
    ├── recommendation.ejs
    ├── revise.ejs
    ├── score.ejs
    ├── signup.ejs
    └── templates
        ├── footer.ejs
        └── header.ejs

5. How to install or run the project: 
-The developer needs to download a source-code editor such as Visual Studio Code to copy and paste the repo URL. Alternatively, they can otherwise download the repository through typing "git clone URL_of_git_repo" on the command line. 
-On terminal command line, the user must type "npm install" in order to install the required dependencies to the local node_modules folder. 
-On terminal command line, the user must type in "npm install --global nodemon" in order to install nodemon on the system path. 
-On terminal command line, the user must type in "nodemon index.js" in order to run the project. 
-The user must open a browser and type in localhost:4000 in order to run the program on their computer

6. How to use the product (Features): 
-Open the app.
-Login with one of the credentials provided on passwords.txt. 
-Click the "Questionnaire Time" button once logged into the app's home page. 
-Go through the questions by choosing answers that you think are the most correct. 
-At the end of the questionnaire, view the total score. 
-Click the "Recommendations" button at the bottom of the score page. 
-Read the "Results" page and click "CLICK FOR RESOURCES!" to view resources. 
-Read about the resources offered by the Alzheimer Society of Canada.
-Return back to the app by clicking the backspace button on your browser. 
-Click the "Return Home" button once back on the app's page. 
-Once back on the home page, click the "Log Out" button to end the session. 

7. Include Credits, References, and Licenses: 
Frontendshape: 
https://frontendshape.com/post/bootstrap-5-404-page-examples 
MDBootstrap: 
https://mdbootstrap.com/docs/standard/extended/login/ 
https://mdbootstrap.com/docs/standard/extended/bootstrap-survey-form/
CGA Toolkit: 
https://cgatoolkit.ca/Uploads/ContentDocuments/MMSE.pdf
Stroke Engine: 
https://strokengine.ca/en/assessments/mini-mental-state-examination-mmse/
Excel sheet with data from PubMed, NCBI, and Alzhemer's Association: 
https://docs.google.com/document/d/1ISjQYTIjzLfVuO0gXleGGD7JBfv7vluva0KhFq04PMo/edit?skip_itp2_check=true
Bootstrap 4.0: 
https://getbootstrap.com/docs/4.0/utilities/flex/
Alzheimer Society of Canada: 
https://alzheimer.ca/en/help-support


8. How did you use AI? Tell us exactly what AI services and products you used and how you used them. Be very specific:
    1. Did you use AI to help create your app? If so, how? Be specific: 
    Yes, I used ChatGPT as the AI generative tool to ask questions and receive relevant recommendations. Also, when I encountered problems during the process of creating the app, I would ask questions on it to learn how to modify and debug my code. I felt like I learned a lot from this process because I learned new coding approaches, but also gained a better understanding of why an app may crash or malfunction. 
    2. Did you use AI to create data sets or clean data sets? If so, how? Be specific: 
    Yes, I used a Kaggle dataset called Alzheimer Features For Analysis that had a usability score of 10. I downloaded this dataset from Kaggle and then saved it in a .csv file. This way, the data was organzed in a tabular format and I could run JavaScript calculations to determine the average MMSE score of demented vs. non-demented users. 
    3. Does your app use AI? If so, how? Be specific: 
    -The app does not use AI. 
    4. Did you encounter any limitations? What were they, and how did you overcome them? Be specific.: 
    I encountered limitations on being able to add more features in the time-constrained 5-week sprint. I wanted to deploy more features such as being able to shuffle the questions, but was unable to complete this feature on time. I felt like that if I had a few more days, I may have been able to solve this because the questions were shuffling fine, but the score tabulation feature wasn't working properly. I overcame this problem by saving the code that had the shuffling feature on the dev branch, modifying my project on the dev_final branch, and finally, pulling the bug-free code from dev_final into the main branch for presentation week. 

9. Contact Information: 
BrainWorld, elee318@my.bcit.ca, GitHub username: ejl1996 