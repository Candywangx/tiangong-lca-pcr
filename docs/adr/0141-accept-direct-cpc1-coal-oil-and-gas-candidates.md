# Accept bounded CPC 1 coal, crude-feedstock and manufactured-gas candidates

- Status: accepted
- Decided by: codex-direct-pcr-author
- Decided at (UTC): 2026-10-01T06:56:34.331Z

## Decision

The repository owner requested direct completion to candidate of unfinished CPC section 1 product PCRs without Harness. Accept the following links after comparing each normalized classification label with the authored product boundary, reference basis and route. Exact denotes the stated product category with production-gate qualifiers; narrower identifies the explicitly bounded subset. Classification alone never establishes route or product-state applicability.

| CPC 3.0 | Relation | PCR id | Accepted semantic boundary |
| --- | --- | --- | --- |
| 11011 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.anthracite` | Uncalcined unagglomerated anthracite; physical preparation state must match the selected flow. |
| 11012 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.bituminous-coal` | Unagglomerated bituminous coal; extraction and actual physical preparation before the declared gate. |
| 11020 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.patent-fuel-and-similar-solid-fuels-manufactured-from-hard-coal` | Manufactured hard-coal patent fuel; actual binder, forming and conditioning route. |
| 11031 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.sub-bituminous-coal` | Unagglomerated sub-bituminous coal; no conversion into another coal rank. |
| 11032 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.lignite` | Unbriquetted lignite with actual physical sizing and separation. |
| 11040 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.brown-coal-briquettes-and-similar-solid-fuels-manufactured-from-brown-coal` | Non-carbonized solid fuels manufactured from brown coal; briquettes and declared dried-fuel forms. |
| 11051 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat` | Unagglomerated peat; drainage, extraction, drying and gate supply; excludes formulated growing media. |
| 11052 | narrower | `pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat-briquettes` | Binderless uncarbonized compressed peat fuel blocks; excludes pellets and binder-containing blends. |
| 12010 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.petroleum-oils-and-oils-obtained-from-bituminous-minerals-crude` | Crude petroleum and mineral-derived crude before refining; separate reservoir, oil-sand and oil-shale routes. |
| 12030 | narrower | `pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.bituminous-or-oil-shale-and-tar-sands` | Mined raw oil shale and tar sands; gate precedes retorting, bitumen separation and upgrading. |
| 17201 | narrower | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coke-oven-gas` | Cleaned coke-oven fuel gas; upstream carbonisation retains burdens; excludes heat-only recovery. |
| 17202 | exact | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.gas-works-gas-and-other-manufactured-gases-for-distribution` | Manufactured gas for distribution; actual gasification, carbonisation, reforming or blending route. |
| 17203 | narrower | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.recovered-gases` | Recovered industrial fuel gas from solid carbonaceous origin; excludes coke-oven, refinery, natural and biogas. |
| 17300 | narrower | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.steam-and-hot-water` | Useful heat supplied by steam or hot water at a metered gate; disaggregate carrier and thermodynamic state. |

This is acceptance of classification links by the direct author within the requested work, not independent methodology review or publication approval. Existing accepted edges remain byte-for-byte intact. Petroleum parent 12010 supports differentiated routes and does not supersede narrower route-specific identities. Manufactured and recovered gases retain distinct production origins and burden boundaries.

## Readiness and evidence

Every target is candidate/authored_methodology with aligned Chinese, atomic inventory cards, collection protocols and deterministic projections. The target measurement checks pass. UN energy definitions, EPA coal preparation, IFC mining/oil guidance, IPCC peatland methods, JRC steel-gas treatment and boiler/CHP references are used only within their stated scope. No source limit or incompatible per-tonne-metal observation is promoted into a universal product-consumption range.

Database flows were directly re-read to check type, property and product-state qualifiers. A hard-coal flow explicitly described as an anthracite proxy was removed from the bituminous-feed card. The washed-anthracite identity was removed from the unprepared preparation-feed card. Remaining unresolved identities and absent independent range evidence are explicit manifest review items. Dataset completion requires applicable identities and foreground measurement; candidate readiness does not imply publication readiness.

## Derivatives

Regenerate the alias registry, catalog, material index and classification coverage from authoritative sources. Only these accepted material identities lose their legacy locators; unrelated aliases remain. Run target checks and full repository validation before final handoff.
