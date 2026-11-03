# Reserved chapter URL collision: actual ownership review

The source revision legitimately expanded the English guitar document from539,908 HASTbytes at the retained baseline/fork to544,783, exceeding the unchanged540,000-byte ceiling. It now requires two physical reading pages, with179,841 and364,942 bytes; its two logical/searchparts remain separate and ordered. The second physicalpage reused a reserved historicalfrom URL, triggering the unchanged providerguard.

All215 English historicalanchors belong uniquely to that secondpage in its actual ordinaryHTML and HAST. None ismissing, ambiguous or split acrossowners. The Chinese215 anchors allstill belong uniquely to its rootpage; Chinese requiresno update. There are no guitarpublishedrows. Independently scanningall473 routes and complete historicalanchor requirements found exactlyonecollision and onewrongtarget, both thisEnglishrow; zero missing, ambiguous or cross-owner rows globally.

The minimal proposal is to append-current only to a physicalreadingpart whose candidateURL isreserved; failclosed if the newURL isstillreserved or duplicated. This metadata-only rename preserves all HASTnodes, anchorarrays, partcount and logicalParts/searchidentity. Apply it before derivingevery currentreading URL: pageInfo,recordpages,sourceAnchors,ToCs and links. Changing onlya temporaryurls array wouldleave the physicalcanonicalpage unchanged and isinsufficient.

Oldfrom remains:

`/en/docs/pcr/other-transportable-goods-except-metal-products-machinery-and-equipment/furniture-other-transportable-goods-n-e-c/other-string-musical-instruments/chapters/pcr-process-original-cohort-actual-facto-dccb0d/`

Update its one targetfrom the PCRroot to:

`/en/docs/pcr/other-transportable-goods-except-metal-products-machinery-and-equipment/furniture-other-transportable-goods-n-e-c/other-string-musical-instruments/chapters/pcr-process-original-cohort-actual-facto-dccb0d-current/`

Change onlythe matchingto scalar inpacked-chapters.json andpacked-chapter-anchors.json. Preservefrom,defaultanchor,baselineCommit,documentorder/sourceowner,current sourceSHAs and all215 historicalanchors byte-for-byte/order-exact. The anchorarraySHA256 is4ab84decfc9c18df646212af4809e2c8c7e39b589983f36d3f0677d59d368c83. target-only-updates.json lists the two exactJSONpointers, old/newvalues and one ownership row for everyhistoricalanchor. No fakeanchors shouldbe addedto root or anyotherpage.

The existing scopecheck canaccept onlythese audited targetscalars: verify exactfrom/oldtarget/newtarget/defaultanchor/fullanchorarray and selectedsource, restoreonly the approvedto values plus itsalreadyauthorized sourceSHA normalization, thenretain the complete forkbaseline comparison. No blanketroute exception or provider/static/ordinarytree guardchange isneeded. All236 canonicalfiles stillmatched the frozen repairedledger duringthis audit.

Actual source/read/HTMLhashes and globalownership are inreport.json,all-route-anchor-ownership.json,actual-html-receipts.json andguitar-key-ownership.json. Baseline/sourceimmutable Gitreads independentlyconfirm both retained215-anchor arrays inoriginal order. The newcanonicaltarget hasnot yet beenbuilt; Root mustrerun generation, unchangedproviderexport/retained+published anchorchecks and fullqualification against the actual renamedHTML. This investigation wroteonlyits privateevidence directory.

## Subsequent uncommitted implementation readback

The observations above refer to failed-build source199860644, not a claim that F remains clean. Root subsequently addedreading-routes.ts and itsgeneratorcall and changedonlythe two auditedENtargetscalars. This independent targetedreadback importedthe actualnewhelper: ENonlyappends-current tothesecondpart; ZHunchanged. AllHASTnodes, non-slugpartmetadata andcomplete logicalParts/searchidentity remainexact, andevery215-anchor set hasonecommonselectedtarget. Eachcurrentledger revertsbyte-for-byte tothe19986blob by undoingexactlyone targetstring replacement. See current-proposal-addendum.json forexactnewcode/receipt/ledgerhashes. Actualrebuilt-current HTMLand providerqualification remainpending; no clean-worktreeor productpass assertion ismade.
