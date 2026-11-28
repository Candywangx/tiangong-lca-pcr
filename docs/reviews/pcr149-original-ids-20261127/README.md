# 149 existing methods: original-ID restoration and classification review

This batch reviews 149 material methods / 150 CPC codes. **139 methods have accepted scoped mappings; ten drafts / eleven codes are held.** The existing 59-PCR PR #167 intake is preserved. No new classification system, leaf or replacement PCR ID is created.

[Decision](../../adr/2026-11-27-review-149-existing-methods-original-ids.md) · [Integration inventory](integration.json) · [Website source/anchor evidence](website-identity-routes.json).

The source snapshot is `efdbb40eb2520da498286cb3dd12b88a7847e433`; the reused drafts are also available in upstream `80c2c3a7802d02950025de038a5d74119cd2476d`. Each item receipt contains both original and reused draft IDs, exact four-file hashes, source pages, an explicit classification rationale and unchanged scientific/translation limitations. The controller reviewed classification independently of the historical author assessment; this is not an external scientific expert review. The previous 149 drafts all passed strict checks, yet eleven codes required a classification hold.

Accepted methods remain candidate/authored_methodology; scope and data gaps remain binding. Their 42,900 performed measurement checks have zero skipped checks and 4,581 warnings. The complete repository validation and fresh final-source hosted result must be read from the delivery receipt/PR, not inferred from these item checks.

## Held cases / 暂缓映射

No draft or original-scaffold file is changed for these cases. Resolve the recorded product boundary before any mapping or identity migration; do not duplicate the shared proxy draft.

| CPC | Existing method | Reason and next evidence |
| --- | --- | --- |
| 23991 | [carrot-pea-infant-puree-in-glass-jars](23991.json) | No final retail pack limit or resolved 2005.10 versus 2104.20 ingredient/retail conditions. Infant-food naming alone does not prove the linked HS boundary; establish recipe classification and final package mass before accepting. |
| 26330 | [undyed-wool-pet-worsted-industrial-yarn](26330.json) | Wool below 85% alone admits PET-predominant mixtures; the draft does not establish the decisive mixed-textile classification condition. Resolve predominance/tie rules and tighten both languages before mapping. |
| 27997 | [waterborne-pu-direct-coated-woven-polyester-fabric](27997.json) | The unpigmented PU coating lacks the HS 5903 visibility/flexibility and plastic-encasement boundary checks. A coating process alone does not prove coated-textile rather than ordinary textile/plastic classification. |
| 44199 | [bare-mag-welded-tractor-bumper-mounting-frame](44199.json) | The actual output is a tractor-bumper mounting frame. CPC 44199 links only HS 8435.90/8436.91/.99, while tractor bumper/body parts compete under 8708 and other CPC leaves. Agricultural end use is insufficient; do not redirect to an already mapped code without a separate decision. |
| 44252 | [mineral-machine-tool-accessories](44252.json) | The vacuum pod is a work holder; CPC 44251 expressly links 8466.20. Host-specific stone-tool use does not resolve the competing 8466.91/44252 accessories branch. Retain the existing hold pending a supported classification decision. |
| 44710 | [armoured-vehicle-environmental-manufacturing](44710.json) | The environmental method says motorized armoured vehicle but does not securely distinguish armoured fighting vehicles under 8710 from civilian armoured transport. No weapon design detail is needed: require a documentary product-purpose determination and clarify finishing product versus service ownership. |
| 44720, 44730 | [non-energetic-weapon-environmental-manufacturing](44720-44730.json) | One generic environmental account claims two proxy contexts and does not identify separate supported outputs for 9301 versus 9302/9303/9304. Do not duplicate it into two canonical records or accept a proxy as completed coverage. Shares the same generic proxy method with 44720. A bounded civilian/military product classification and an original-ID reuse decision remain unresolved; no positive edge is created. |
| 44760 | [armament-parts-environmental-manufacturing](44760.json) | An unspecified inert armament component does not prove 9305 instead of a generally classified component or excluded weapon family. Retain generic cleaning methodology without accepting a classification edge until non-operational supplier/product classification evidence identifies the part category. |
| 49232 | [trailer-support-assembly](49232.json) | The paired screw-driven landing support includes an independent lifting mechanism. Resolve HS 8425 jack versus 8716.90 trailer-part treatment; dedicated trailer mounting alone does not settle machinery exclusions. |
| 49630 | [spacecraft-platform](49630.json) | A payload-excluding satellite bus/platform is not automatically a complete spacecraft under 8802.60. Resolve complete/unfinished spacecraft essential character versus spacecraft parts 8807 before mapping; product marketing as platform is insufficient. |

## Accepted original IDs

Mapping acceptance concerns only the reviewed method scope. An exact category relation does not imply complete cradle-to-grave modelling, publication or scientific approval.

| CPC | Original PCR ID retained | Relation | Item review |
| --- | --- | --- | --- |
| 21700 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.margarine-and-similar-preparations` | narrower | [review](21700.json) |
| 23995 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.sauces-mixed-condiments-mustard-flour-and-meal-prepared-mustard` | narrower | [review](23995.json) |
| 23999 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-food-products-n-e-c` | narrower | [review](23999.json) |
| 25020 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.cigars-cheroots-cigarillos-and-cigarettes-of-tobacco-or-tobacco-substitutes` | narrower | [review](25020.json) |
| 26140 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.noils-of-wool-or-of-fine-animal-hair` | narrower | [review](26140.json) |
| 26190 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-vegetable-textile-fibres-processed-but-not-spun-tow-and-waste-of-these-fibres` | narrower | [review](26190.json) |
| 26430 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-synthetic-staple-fibres-containing-85-or-more-by-weigh-c941c8b9` | narrower | [review](26430.json) |
| 26710 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-filament-yarn-obtained-from-high-tenacity-yarn-of-nylon-or-ot-495ba719` | narrower | [review](26710.json) |
| 26730 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-filament-yarn` | narrower | [review](26730.json) |
| 27140 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.other-furnishing-articles-n-e-c-sets-of-woven-fabric-and-yarn-for-making-up-into-rugs-t-b669fc09` | narrower | [review](27140.json) |
| 27190 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.other-made-up-textile-articles-including-floor-cloths-dish-cloths-dusters-and-similar-c-051e1b3f` | narrower | [review](27190.json) |
| 27310 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.twine-cordage-rope-and-cables` | narrower | [review](27310.json) |
| 27991 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.wadding-of-textile-materials-and-articles-thereof-textile-fibres-not-exceeding-5-mm-in-0e44ab7b` | narrower | [review](27991.json) |
| 27996 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tyre-cord-fabric-of-high-tenacity-yarn-of-nylon-or-other-polyamides-polyesters-or-viscose-rayon` | narrower | [review](27996.json) |
| 27998 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.textile-products-and-articles-for-technical-uses-including-wicks-gas-mantles-hosepiping-1a1ed96f` | narrower | [review](27998.json) |
| 27999 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.quilted-textile-products-in-the-piece-n-e-c` | narrower | [review](27999.json) |
| 28320 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.articles-of-apparel-clothing-accessories-and-other-articles-of-furskin-except-headgear` | narrower | [review](28320.json) |
| 29130 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-leather-without-hair-on-including-sheep-lamb-goat-or-kid-skin-leather-composition-17d6d470` | narrower | [review](29130.json) |
| 44111 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.ploughs` | narrower | [review](44111.json) |
| 44113 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.seeders-planters-and-transplanters` | narrower | [review](44113.json) |
| 44114 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.manure-spreaders-and-fertilizer-distributors` | narrower | [review](44114.json) |
| 44124 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-haymaking-machinery` | narrower | [review](44124.json) |
| 44126 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.root-or-tuber-harvesting-machines` | narrower | [review](44126.json) |
| 44127 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-for-cleaning-sorting-or-grading-eggs-fruits-or-other-agricultural-produce` | narrower | [review](44127.json) |
| 44129 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-harvesting-and-threshing-machinery-n-e-c-parts-for-harvesting-threshing-and-gradi-fcffc467` | narrower | [review](44129.json) |
| 44141 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.pedestrian-controlled-tractors` | narrower | [review](44141.json) |
| 44142 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.track-laying-tractors` | narrower | [review](44142.json) |
| 44149 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-agricultural-tractors` | narrower | [review](44149.json) |
| 44150 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mechanical-appliances-for-projecting-dispersing-or-spraying-liquids-or-powders-for-agri-141ee42d` | narrower | [review](44150.json) |
| 44160 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.self-loading-or-self-unloading-trailers-and-semi-trailers-for-agricultural-purposes` | narrower | [review](44160.json) |
| 44191 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.presses-crushers-and-similar-machinery-used-in-the-manufacture-of-wine-cider-fruit-juic-00402c46` | narrower | [review](44191.json) |
| 44192 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-for-preparing-animal-feeding-stuffs` | narrower | [review](44192.json) |
| 44193 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-incubators-and-brooders` | narrower | [review](44193.json) |
| 44194 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-keeping-machinery` | narrower | [review](44194.json) |
| 44198 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-agricultural-machinery-n-e-c` | narrower | [review](44198.json) |
| 44212 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machining-centres-unit-construction-machines-single-station-and-multi-station-transfer-cef062e7` | narrower | [review](44212.json) |
| 44221 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-stone-ceramics-concrete-asbestos-cement-or-like-mineral-mater-c26e74a8` | narrower | [review](44221.json) |
| 44232 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electromechanical-tools-for-working-in-the-hand-with-self-contained-electric-motor` | narrower | [review](44232.json) |
| 44424 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.tamping-machines-and-road-rollers-self-propelled` | narrower | [review](44424.json) |
| 44426 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mechanical-shovels-excavators-and-shovel-loaders-self-propelled-with-a-360-degree-revol-4c9e4147` | narrower | [review](44426.json) |
| 44427 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mechanical-shovels-excavators-and-shovel-loaders-except-front-end-shovel-loaders-and-ma-fe67c3bb` | narrower | [review](44427.json) |
| 44430 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.pile-drivers-and-pile-extractors-snow-ploughs-and-snow-blowers-other-moving-grading-lev-cd9dc3c5` | narrower | [review](44430.json) |
| 44440 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-for-sorting-screening-separating-washing-crushing-grinding-mixing-or-kneading-56538da5` | narrower | [review](44440.json) |
| 44461 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-n-e-c-of-boring-or-sinking-machinery-and-of-derricks-cranes-mobile-lifting-frames-4e0ab78b` | narrower | [review](44461.json) |
| 44462 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44440` | narrower | [review](44462.json) |
| 44611 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-for-extruding-drawing-texturing-or-cutting-man-made-textile-materials-machines-0e766c9e` | narrower | [review](44611.json) |
| 44613 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.knitting-machines-stitch-bonding-machines-machines-for-making-gimped-yarn-tulle-lace-em-6ade0445` | narrower | [review](44613.json) |
| 44621 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.sewing-machines-except-book-sewing-machines-and-household-sewing-machines` | narrower | [review](44621.json) |
| 44622 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.laundry-type-washing-machines-each-of-a-dry-linen-capacity-exceeding-10-kg-dry-cleaning-67c73285` | narrower | [review](44622.json) |
| 44629 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-machinery-for-textile-and-apparel-production-n-e-c` | narrower | [review](44629.json) |
| 44630 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-for-preparing-tanning-or-working-hides-skins-or-leather-or-for-making-or-repa-dc2569fc` | narrower | [review](44630.json) |
| 44640 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-class-4461-parts-for-the-goods-of-subclass-44621-including-sewin-9fbf3152` | narrower | [review](44640.json) |
| 44750 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.swords-cutlasses-bayonets-lances-and-similar-arms-and-parts-thereof-and-scabbards-and-s-f6604690` | narrower | [review](44750.json) |
| 44823 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.radiators-for-central-heating-not-electrically-heated-of-iron-or-steel` | narrower | [review](44823.json) |
| 44916 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.moulding-boxes-for-metal-foundry-mould-bases-moulding-patterns-moulds-for-metal-except-ed9b1ca8` | narrower | [review](44916.json) |
| 44920 | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-for-additive-manufacturing` | narrower | [review](44920.json) |
| 49111 | `pcr.metal-products-machinery-and-equipment.transport-equipment.road-tractors-for-semi-trailers` | narrower | [review](49111.json) |
| 49112 | `pcr.metal-products-machinery-and-equipment.transport-equipment.public-transport-type-passenger-motor-vehicles` | narrower | [review](49112.json) |
| 49113 | `pcr.metal-products-machinery-and-equipment.transport-equipment.motor-cars-and-other-motor-vehicles-principally-designed-for-the-transport-of-persons-e-731dcc23` | narrower | [review](49113.json) |
| 49114 | `pcr.metal-products-machinery-and-equipment.transport-equipment.motor-vehicles-n-e-c-for-the-transport-of-goods` | narrower | [review](49114.json) |
| 49115 | `pcr.metal-products-machinery-and-equipment.transport-equipment.crane-lorries` | narrower | [review](49115.json) |
| 49116 | `pcr.metal-products-machinery-and-equipment.transport-equipment.motor-vehicles-for-the-transport-of-persons-specially-designed-for-travelling-on-snow-g-b18ae2c6` | narrower | [review](49116.json) |
| 49119 | `pcr.metal-products-machinery-and-equipment.transport-equipment.special-purpose-motor-vehicles-n-e-c` | narrower | [review](49119.json) |
| 49121 | `pcr.metal-products-machinery-and-equipment.transport-equipment.chassis-fitted-with-engines-for-motor-vehicles` | narrower | [review](49121.json) |
| 49129 | `pcr.metal-products-machinery-and-equipment.transport-equipment.other-parts-and-accessories-n-e-c-of-motor-vehicles-including-brakes-gear-boxes-axles-r-3a727a7b` | narrower | [review](49129.json) |
| 49221 | `pcr.metal-products-machinery-and-equipment.transport-equipment.containers-specially-designed-and-equipped-for-carriage-by-one-or-more-modes-of-transport` | narrower | [review](49221.json) |
| 49222 | `pcr.metal-products-machinery-and-equipment.transport-equipment.trailers-and-semi-trailers-of-the-caravan-type-for-housing-or-camping` | narrower | [review](49222.json) |
| 49229 | `pcr.metal-products-machinery-and-equipment.transport-equipment.other-trailers-and-semi-trailers-including-trailers-and-semi-trailers-for-the-transport-4869a59e` | narrower | [review](49229.json) |
| 49231 | `pcr.metal-products-machinery-and-equipment.transport-equipment.parts-and-accessories-for-the-goods-of-subclass-49210` | narrower | [review](49231.json) |
| 49311 | `pcr.metal-products-machinery-and-equipment.transport-equipment.cruise-ships-excursion-boats-and-similar-vessels-principally-designed-for-the-transport-bd804461` | narrower | [review](49311.json) |
| 49312 | `pcr.metal-products-machinery-and-equipment.transport-equipment.tankers-ships` | narrower | [review](49312.json) |
| 49313 | `pcr.metal-products-machinery-and-equipment.transport-equipment.refrigerator-vessels-ships-except-tankers` | narrower | [review](49313.json) |
| 49314 | `pcr.metal-products-machinery-and-equipment.transport-equipment.other-vessels-for-the-transport-of-goods-and-other-vessels-for-the-transport-of-both-pe-4f989dbe` | narrower | [review](49314.json) |
| 49315 | `pcr.metal-products-machinery-and-equipment.transport-equipment.fishing-vessels-factory-ships-and-other-vessels-for-processing-or-preserving-fishery-products` | narrower | [review](49315.json) |
| 49316 | `pcr.metal-products-machinery-and-equipment.transport-equipment.tugs-and-pusher-craft` | narrower | [review](49316.json) |
| 49319 | `pcr.metal-products-machinery-and-equipment.transport-equipment.other-vessels-including-light-vessels-fire-floats-dredgers-floating-cranes-floating-doc-9ba25013` | narrower | [review](49319.json) |
| 49320 | `pcr.metal-products-machinery-and-equipment.transport-equipment.floating-or-submersible-drilling-or-production-platforms` | narrower | [review](49320.json) |
| 49390 | `pcr.metal-products-machinery-and-equipment.transport-equipment.other-floating-structures` | narrower | [review](49390.json) |
| 49410 | `pcr.metal-products-machinery-and-equipment.transport-equipment.sailboats-except-inflatable-with-or-without-auxiliary-motor` | narrower | [review](49410.json) |
| 49490 | `pcr.metal-products-machinery-and-equipment.transport-equipment.other-vessels-for-pleasure-or-sports-rowing-boats-and-canoes` | narrower | [review](49490.json) |
| 49511 | `pcr.metal-products-machinery-and-equipment.transport-equipment.rail-locomotives-powered-from-an-external-source-of-electricity` | narrower | [review](49511.json) |
| 49512 | `pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-electric-locomotives` | narrower | [review](49512.json) |
| 49519 | `pcr.metal-products-machinery-and-equipment.transport-equipment.other-rail-locomotives-locomotive-tenders` | narrower | [review](49519.json) |
| 49520 | `pcr.metal-products-machinery-and-equipment.transport-equipment.self-propelled-railway-or-tramway-coaches-vans-and-trucks-except-maintenance-or-service-vehicles` | narrower | [review](49520.json) |
| 49531 | `pcr.metal-products-machinery-and-equipment.transport-equipment.railway-or-tramway-maintenance-or-service-vehicles-whether-or-not-self-propelled` | narrower | [review](49531.json) |
| 49532 | `pcr.metal-products-machinery-and-equipment.transport-equipment.railway-or-tramway-passenger-coaches-not-self-propelled-luggage-vans-post-office-coache-e7bfebf6` | narrower | [review](49532.json) |
| 49533 | `pcr.metal-products-machinery-and-equipment.transport-equipment.railway-or-tramway-goods-vans-and-wagons-not-self-propelled` | narrower | [review](49533.json) |
| 49540 | `pcr.metal-products-machinery-and-equipment.transport-equipment.parts-of-railway-or-tramway-locomotives-or-rolling-stock-railway-or-tramway-track-fixtu-9417bb27` | narrower | [review](49540.json) |
| 49610 | `pcr.metal-products-machinery-and-equipment.transport-equipment.balloons-and-dirigibles-gliders-hang-gliders-and-other-non-powered-aircraft` | narrower | [review](49610.json) |
| 49621 | `pcr.metal-products-machinery-and-equipment.transport-equipment.helicopters-except-unmanned-aircraft` | narrower | [review](49621.json) |
| 49622 | `pcr.metal-products-machinery-and-equipment.transport-equipment.aeroplanes-and-other-powered-aircraft-except-unmanned-aircraft-of-an-unladen-weight-not-31c89936` | narrower | [review](49622.json) |
| 49623 | `pcr.metal-products-machinery-and-equipment.transport-equipment.aeroplanes-and-other-powered-aircraft-except-unmanned-aircraft-of-an-unladen-weight-exc-15d6e6ca` | narrower | [review](49623.json) |
| 49624 | `pcr.metal-products-machinery-and-equipment.transport-equipment.unmanned-aircraft` | narrower | [review](49624.json) |
| 49640 | `pcr.metal-products-machinery-and-equipment.transport-equipment.parts-of-aircraft-and-spacecraft` | narrower | [review](49640.json) |
| 49911 | `pcr.metal-products-machinery-and-equipment.transport-equipment.motorcycles-and-cycles-fitted-with-an-auxiliary-motor-with-reciprocating-internal-combu-13e68f2f` | narrower | [review](49911.json) |
| 49912 | `pcr.metal-products-machinery-and-equipment.transport-equipment.motorcycles-and-cycles-fitted-with-an-auxiliary-motor-with-reciprocating-internal-combu-74010651` | narrower | [review](49912.json) |
| 49913 | `pcr.metal-products-machinery-and-equipment.transport-equipment.motorcycles-and-cycles-fitted-with-an-auxiliary-motor-other-than-those-with-reciprocati-c63e983a` | narrower | [review](49913.json) |
| 49921 | `pcr.metal-products-machinery-and-equipment.transport-equipment.bicycles-and-other-cycles-not-motorized` | narrower | [review](49921.json) |
| 49922 | `pcr.metal-products-machinery-and-equipment.transport-equipment.invalid-carriages` | narrower | [review](49922.json) |
| 49930 | `pcr.metal-products-machinery-and-equipment.transport-equipment.vehicles-n-e-c-not-mechanically-propelled` | narrower | [review](49930.json) |
| 49941 | `pcr.metal-products-machinery-and-equipment.transport-equipment.parts-and-accessories-of-motorcycles-and-side-cars` | narrower | [review](49941.json) |
| 49942 | `pcr.metal-products-machinery-and-equipment.transport-equipment.parts-and-accessories-of-bicycles-and-other-cycles-not-motorized-and-of-invalid-carriages` | narrower | [review](49942.json) |
| 53111 | `pcr.constructions-and-construction-services.constructions.one-and-two-dwelling-residential-buildings` | exact | [review](53111.json) |
| 53112 | `pcr.constructions-and-construction-services.constructions.multi-dwelling-residential-buildings` | exact | [review](53112.json) |
| 53121 | `pcr.constructions-and-construction-services.constructions.industrial-buildings` | exact | [review](53121.json) |
| 53122 | `pcr.constructions-and-construction-services.constructions.commercial-buildings` | exact | [review](53122.json) |
| 53129 | `pcr.constructions-and-construction-services.constructions.other-non-residential-buildings` | exact | [review](53129.json) |
| 53211 | `pcr.constructions-and-construction-services.constructions.highways-except-elevated-highways-streets-and-roads` | exact | [review](53211.json) |
| 53212 | `pcr.constructions-and-construction-services.constructions.railways` | exact | [review](53212.json) |
| 53213 | `pcr.constructions-and-construction-services.constructions.airfield-runways` | exact | [review](53213.json) |
| 53221 | `pcr.constructions-and-construction-services.constructions.bridges-and-elevated-highways` | exact | [review](53221.json) |
| 53222 | `pcr.constructions-and-construction-services.constructions.tunnels` | exact | [review](53222.json) |
| 53231 | `pcr.constructions-and-construction-services.constructions.aqueducts-and-other-water-supply-conduits-except-pipelines` | exact | [review](53231.json) |
| 53232 | `pcr.constructions-and-construction-services.constructions.harbours-waterways-and-related-facilities` | exact | [review](53232.json) |
| 53233 | `pcr.constructions-and-construction-services.constructions.dams` | exact | [review](53233.json) |
| 53234 | `pcr.constructions-and-construction-services.constructions.irrigation-and-flood-control-waterworks` | exact | [review](53234.json) |
| 53241 | `pcr.constructions-and-construction-services.constructions.long-distance-pipelines` | exact | [review](53241.json) |
| 53242 | `pcr.constructions-and-construction-services.constructions.long-distance-communication-and-power-lines-cables` | exact | [review](53242.json) |
| 53251 | `pcr.constructions-and-construction-services.constructions.local-pipelines` | exact | [review](53251.json) |
| 53252 | `pcr.constructions-and-construction-services.constructions.local-cables-and-related-works` | exact | [review](53252.json) |
| 53253 | `pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plants` | exact | [review](53253.json) |
| 53261 | `pcr.constructions-and-construction-services.constructions.mining-constructions` | exact | [review](53261.json) |
| 53262 | `pcr.constructions-and-construction-services.constructions.power-plants` | exact | [review](53262.json) |
| 53269 | `pcr.constructions-and-construction-services.constructions.other-constructions-for-manufacturing` | exact | [review](53269.json) |
| 53270 | `pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facilities` | exact | [review](53270.json) |
| 53290 | `pcr.constructions-and-construction-services.constructions.other-civil-engineering-works` | exact | [review](53290.json) |
| 81400 | `pcr.business-and-production-services.research-and-development-services.research-and-development-originals` | exact | [review](81400.json) |
| 83143 | `pcr.business-and-production-services.professional-technical-and-business-services-except-research-developmen-146375cf.software-originals` | exact | [review](83143.json) |
| 83413 | `pcr.business-and-production-services.professional-technical-and-business-services-except-research-developmen-146375cf.mineral-exploration-and-evaluation` | exact | [review](83413.json) |
| 83710 | `pcr.business-and-production-services.professional-technical-and-business-services-except-research-developmen-146375cf.data` | exact | [review](83710.json) |
| 83920 | `pcr.business-and-production-services.professional-technical-and-business-services-except-research-developmen-146375cf.design-originals` | exact | [review](83920.json) |
| 83960 | `pcr.business-and-production-services.professional-technical-and-business-services-except-research-developmen-146375cf.trademarks-and-franchises` | exact | [review](83960.json) |
| 84321 | `pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.musical-audio-downloads` | exact | [review](84321.json) |
| 84331 | `pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.films-and-other-video-downloads` | exact | [review](84331.json) |
| 84611 | `pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.radio-broadcast-originals` | exact | [review](84611.json) |
| 84621 | `pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.radio-channel-programmes` | exact | [review](84621.json) |
| 84622 | `pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.television-channel-programmes` | exact | [review](84622.json) |
| 96113 | `pcr.community-social-and-personal-services.recreational-cultural-and-sporting-services.sound-recording-originals` | exact | [review](96113.json) |
| 96330 | `pcr.community-social-and-personal-services.recreational-cultural-and-sporting-services.original-works-of-authors-composers-and-other-artists-except-performing-artists-painter-3ba0bcd5` | exact | [review](96330.json) |
