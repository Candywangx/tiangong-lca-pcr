# Static export file-count attribution

The unchanged alias guard correctly rejects the actual ecee0961 export. There are23,416 files;3,356 independently byte-identical existing full/index pairs reduce this to20,060, and the necessary alias manifest makes20,061. Because the guard requires less than20,000,62 more files must be saved.

| Component | Current files | After existing full aliases |
| --- | ---: | ---: |
| Next route payloads:3356 routes×5 | 16780 | 13424 |
| Next404HTML endpoints | 2 | 2 |
| Generated raw/data/search/other | 6597 | 6597 |
| CompiledNext assets | 30 | 30 |
| Other static assets | 7 | 7 |
| New alias manifest | 0 | 1 |
| Total | 23416 | 20061 |

Generated6597 comprises6409 raw downloads,170 inspector packs,10 search files and8 metadata/runtime assets. Every path, size and byte matches public/generated; all6409 downloads match declaredSHA values. All170 inspector files are referenced by1600 records. All3356 index routes match3352 site pages plus root,language roots and_not-found. There is no stale generated asset to remove. Complete reachability of the30Next files was not claimed; no navigation or asset URL deletion is proposed.

Chapter heuristics cannot close the deficit. All13 split source documents were fully parsed/rendered, retaining exact source and ordered-node hashes. Their16 extra reading pages are nearly the540KB byte-volume lower bound: even unconstrained whole-node partitioning can save only one page, hence four post-alias files. That case is outside the59 selected CPC3 methods and would need new route/anchor evidence. The three splitCPC3 English documents serialize to557453,544783 and541114 bytes, each above540000. Leave chapters and route/history ledgers unchanged.

Currentv1 inspector entries serialize to156,266,682 bytes before wrappers. At the unchanged1,000,000-byte target they require at least157 files, so perfect packing saves at most13 of the170 files. Even combining that optimistic bound with chapter savings yields17, leaving45 files unresolved. Raising the target or32-record cap is unnecessary and outside the authorized fix.

The smallest conditional feasible point is Root's explicitly versioned lossless inspector dictionary transport. The actual bound prototype snapshot reports106 packs,100420469 physicalbytes,largest999287 and largest restoredv12300616 bytes. It reports exact serialization for1600 records at the same1MB/32 limits. Replacing170 with106 predicts19997 prepared files,2 below the largest allowed count. This is owner-attributed feasibility metadata, not this reviewer's public-decoder proof or a completed docsbuild.

Implementing that versioned representation requires Root's independent public-reader/strict decoding/UTF8 expansion/legacy compatibility and inspector browser checks. Actual final Nextchunk count, source-bound generation, unchanged alias preflight and complete product qualification determine acceptance; the narrow predicted margin cannot waive them. No raw downloads, PCRs, routes, anchors, Worker semantics or resource guards are changed by this investigation.

Detailed evidence and actual read scope: report.json,inventory.json,assets.json,chapters.json and generated-file-hashes.json. All private scripts use strict TypeScript and Node24.19.0; only this investigation directory was written.
