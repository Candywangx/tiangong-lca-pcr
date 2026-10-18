---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.registers-account-books-notebooks-letter-pads-diaries-and-similar-articles-blotting-pad-ff6868b7
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Blank-page single-metal-spiral notebooks with unprinted paper covers

## 1. Scope and Applicability

This PCR selects purchased dry unprinted uncoated chemical-pulp (woodfree, without mechanical pulp) paper sheets, separate unprinted uncoated heavyweight paper front/back covers, optional mechanically retained protective paper leaves, and a purchased preformed nylon-coated single metal helix. The foreground route is electric cutting/punching and coil insertion, metal-capable end cutting/crimping, acceptance and packing; no onsite wire forming, coating, printing, gluing, steam supply or combustion is assumed. RENZ provides an actual spiral procedure and coated binding-component description; Clairefontaine confirms notebooks exist with blank pages and distinct binding structures. These capability originals do not prove a surveyed factory or an exact brand SKU sharing every selected qualifier. [renz-spiral-manual; renz-metal-spirals; clairefontaine-notebooks]

Binding identity follows physical construction. Milled-spine EVA/PUR glue binding has its own preparation/gluing route; staples pierce and clinch a folded construction; a single helix passes through punched loose sheets and is end-finished; an openable loose-leaf binder permits replacement of leaves. The sources support these distinctions, not interchangeable recipes. Double-loop wire, plastic coils, staples, glue-bound pads, sewn/hardcase books, ring binders, loose leaves, printed diary/calendar content, ruled/dotted pages, forms, sticky notes, folders, blotting pads, inserts, straps and laminated/printed covers are excluded. A writing-use label does not justify another PCR for the same offset/EVA book route. [mm-antaro-binding; clairefontaine-notebooks; kokuyo-binder; renz-spiral-manual]

All five uncoated-paper inputs (writing leaves, each cover, protective leaf and packing band) require the same woodfree chemical-pulp category without mechanical pulp, with their own measured grade, furnish and provider compatibility. Woodfree does not mean absence of wood-derived fibres.

The method defines future foreground collection. Conditional rows describe an actual occurrence to be checked, never a positive default quantity or an undocumented zero. Actual additional chemicals, packaging components, emissions or utilities require individual identified/measured exchanges and an applicability assessment. Upstream paper/pulp, wire/nylon coating and packaging remain supplier processes; do not substitute wood-processing or plywood evidence for papermaking. No source's catalogue dimensions, sheet capacities, production rates, material fractions or emissions are generic inventory defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.registers-account-books-notebooks-letter-pads-diaries-and-similar-articles-blotting-pad-ff6868b7 |
| classification_refs | CPC 3.0 32700; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Blank uncoated writing-sheet notebooks with two unprinted uncoated paper covers, single preformed nylon-coated metal spiral and any declared punched protective paper leaf. |
| excluded_products | Other binding constructions and all printed/ruled/adhesive/laminated/insert-rich variants; onsite pulping/papermaking, wire coating/forming and thermal routes; other stationery in CPC32700. |
| representative_product | One design of accepted complete blank-page single-metal-spiral notebook with unprinted paper covers. |
| production_route | Receive dry materials → cut/count/gather → punch leaves/covers → insert preformed single metal helix → metal-capable end cutting/crimping → inspect → tuck-pack/dispatch. |
| market_state | Complete net accepted notebook at converter gate; dispatch packaging separate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide blank paper writing leaves retained in the specified complete single-metal-spiral notebook. |
| How much | 1 kg net accepted complete notebooks of one declared design. |
| How well | Actual paper writing specification, dimensions, complete leaf count, matching punch pattern/coil pitch, secure safe ends, page-turning and cover integrity with order-specific acceptance records; no universal durability or opening-performance value. |
| How long or cycle | One manufacturing lot and factory-gate delivery; writing-service life or number of uses needs a separate declared service study. |
| reference_flow_link | `finished_notebook` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Registers, account books, notebooks, letter pads, diaries and similar articles, blotting-pads, binders, file covers, forms and other articles of stationery, of paper or paperboard `dfa13b24-9a42-4e57-9ee9-6a00ab079cfa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual site/period/design; unprinted uncoated woodfree body paper and cover grades/furnish/recycled fractions/moisture/grammage; measured paper dimensions; sheets versus pages and protective leaves; single metal helix/actual alloy/nylon grade and coating/pitch/wire and coil diameter/length; safe end finishing and acceptance; net accepted mass and packing tare; electric voltage/delivery basis; cleaning/lubricant occurrence; stage meters; physical balances; dust fraction/media; waste receivers; supplier backgrounds, freight endpoints and uncertainties. |

Every qualifier must accompany the concrete data package. The broad stationery product identity includes this notebook subset and has no incompatible mandatory binding/material route; it does not expand this method to other stationery. Its comment mistakenly repeats printing-media content, while both names, CPC32700 and manufactured finished-product route identify stationery. Preserve this source-quality debt and verify the actual notebook supplier/model; a printing-plate or generic stationery-mixture provider is not acceptable. Net notebook mass includes all retained paper, metal and nylon, excludes transport packaging and rejects, and is not oven-dry fibre mass. Mass-based results do not establish equal writing service between designs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is calibrated net accepted complete-notebook lot mass at declared gate moisture; collect using cp_finished, deduct measured packaging tare and rejects; Q must be positive. |
| same_denominator | all inventory rows | reference-product Mass | kg | All row amounts and protocol aggregation use per 1 kg reference flow. Close physical lot records first, then divide attributable exchanges by Q for the same design and period; no assumed mass per notebook. |
| paper_geometry | body_paper; front_cover; back_cover; endleaf | area; grammage; measured Mass | m2; g/m2; kg | Measure cut dimensions and grammage at the stated moisture/conditioning. Count physical sheets, not written surfaces; two usable page surfaces are one sheet unless the actual design differs. Geometry is a mass-balance cross-check, not the net finished-product denominator. |
| electric_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered electrical energy by 1 kWh = 3.6 MJ; preserve low-voltage user delivery and provider losses. This property does not establish steam net heat or enthalpy. |
| water_basis | tap_water; washwater | Mass | kg | Water input identity references kg. If volume is metered, use sampled actual density/temperature for the kg ledger and matched provider basis; no database screening density is assumed. |
| exclusive_particles | pm25; pmcoarse; pmover10 | Mass | kg | Keep disjoint aerodynamic bins at the same outdoor boundary. Cumulative PM10 cannot be added to PM2.5; compatible differences require common sampling coverage. Captured dust is a separate solid waste. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished dry blank uncoated paper sheets and preformed nylon-coated single metal spirals received at converter; actual separate cover stock, protective leaves and packing inputs. |
| starting_condition_role | foreground_collection_gate with upstream background completion |
| product_classification_scope | Only the qualified notebook subset of CPC32700; reference names and classification labels do not confer wider methodology coverage. |
| recursive_input_rule | Internal recut/reuse is circulation. Purchased same-category notebooks are not sheet stock; declare resale/rework separately with actual upstream cut point and no duplicate reference output or arbitrary recursion cut-off. |
| upstream_dataset_requirement | Actual pulp/paper manufacture, dry-sheet finishing, metal wire/nylon coating and preforming, lubricant, electricity, supplied water and packaging production/delivery; link each compatible provider once. |
| disclosure | Actual design/site/period, all in/outside stages, outsourcing, supply/delivery/treatment conditions, provider/identity gaps, constituent and water/carbon ledgers, allocation and uncertainty; downstream writing/retail/use/disposal excluded. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | notebook_manufacture | Include cutting, make-ready/trial stock, gathering, paper/cover punching, spiral inserting, metal-capable end cutting/crimping, checking, dust capture, actual cleaning/maintenance and packing. Preformed component supply starts upstream; a machine instruction is not an energy/yield factor. | renz-spiral-manual; renz-metal-spirals |
| boundary_structure | applicability | Require blank uncoated sheets and unprinted uncoated paper covers with a nylon-coated single metal spiral. Glue/staple/sewn/loose-leaf/double-loop/plastic-coil and printed/laminated structures need separate assessed methodology; a different writing purpose does not change physical identity. | renz-spiral-manual; mm-antaro-binding; clairefontaine-notebooks; kokuyo-binder |
| boundary_paper | supplied paper | Complete actual upstream pulping/papermaking and finishing once within supplied paper. BREF7.1.4 describes mill broke circulation;7.1.10 describes mill trimming and dust potential. These mill facts do not prove converter recycling or a converter factor. Reject wood/plywood surveys as papermaking evidence. | jrc-paper-bref-2015 |
| boundary_links | internal stages | Keep one aggregated foreground unit but retain stage graph, meters and constituent ledgers. Sheet bundles and punched blocks pass between stages at equal physical quantities on both ends; internal recirculation is not another factory exchange. No intermediate output shares the final reference UUID. | renz-spiral-manual |
| boundary_releases | factory releases | Survey actual post-control exhaust and fugitive outdoor release separately from captured dust, indoor deposition and external waste transfer. Survey dry cutting/punching even when dust is not visible. No combustion or steam source is in this route; actual deviations require reassessment. Upstream fossil and biogenic CO2 remain in compatible supplier LCI, independently of any GHG reporting convention. | jrc-paper-bref-2015; epa-method201a-2020 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `notebook_manufacture` | Blank-page single-metal-spiral notebook manufacture | required | verified selected physical construction and electric route | foreground | 1 kg accepted net complete notebooks |

Physical stage graph: dry-sheet cutting → leaf counting/gathering → leaf/cover punching → preformed single-metal-spiral insertion → metal-capable end cutting/crimping → acceptance → packing/dispatch. Retain stage dimensions/losses, punch chads, spiral cuttings and meters independently, equal internal handover quantities and exactly one final reference output.

### Process: Notebook manufacture (`notebook_manufacture`)

#### Inputs

##### Product flows

###### Uncoated printing, writing and packaging paper (`body_paper`)

Purchased dry unprinted uncoated chemical-pulp (woodfree, without mechanical pulp) sheets for the writing leaves. Declare actual furnish, recycled fraction, grade, grammage, moisture and dimensions; measure issues and returns for the same lot. No coating, ruling ink or preprinted content enters this row.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_materials; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-paper-bref-2015`

###### Uncoated printing, writing and packaging paper (`front_cover`)

One unprinted uncoated heavyweight paper front cover, independently issued and weighed. This is paper stock, without laminated board, optical-assembly cardboard, cloth, coating or adhesive; declare actual cover grade, thickness and punchability.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_materials; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `renz-spiral-manual`

###### Uncoated printing, writing and packaging paper (`back_cover`)

One separately measured unprinted uncoated heavyweight paper back cover. It remains distinct from the front cover even if the supplier flow UUID and grade coincide; do not combine quantities into a covers-and-pages exchange.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_materials; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `renz-spiral-manual`

###### Uncoated printing, writing and packaging paper (`endleaf`)

Conditional extra unprinted uncoated protective paper leaf, mechanically punched and spiral-retained, only when present on the actual drawing. Record its actual count, grade and mass separately from writing leaves; pasted endpapers, adhesive and case lining are excluded.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_materials; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `renz-spiral-manual`

###### Preformed nylon-coated single metal binding spiral (`metal_spiral`)

Purchased complete NC-type single metal helix with its nylon skin, inserted into matching pre-punched leaves and covers; cut and crimp both ends with a metal-capable tool. Declare supplier, actual metal/alloy, nylon grade and coating content, pitch, wire diameter, coil diameter, supplied length and measured mass. One purchased composite component is one atomic exchange; its supplier model includes wire forming and coating once. Raw galvanised wire, pure nylon, double-loop wire, loose-leaf fittings and machinery are not equivalent. UUID remains unresolved.

- Selected flow: Preformed nylon-coated single metal binding spiral
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_materials; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `renz-metal-spirals`; `renz-spiral-manual`

###### Alternating current (`electricity`)

Native CN supply only: low-voltage below 1 kV grid-average consumption at a verified compatible Chinese user for electric cutting, punching, inserting, extraction and attributable inspection/packing. Meter stage loads and any attributable idle time; match actual supply voltage, region, year, loss boundary and provider. High-voltage or power-station output is not this delivered exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_utilities; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `renz-spiral-manual`

###### Water, tap (`tap_water`)

Conditional externally supplied tap water for actual water-only floor/equipment cleaning; no wet papermaking is foreground. This identity references Mass/kg: weigh additions, or convert metered volume with measured density and temperature. Link actual water treatment/delivery; no Hong Kong or raw-water background by default.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_utilities; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Lubricating oil (`lubricant`)

Conditional separately issued petroleum-fraction liquid machine lubricant when actually consumed by the selected equipment. A candidate imposes 40.5 MJ/kg without an established net/gross calorific basis or compatible actual grade, so no UUID is adopted. Resolve the actual petroleum-fraction lubricant and supplier mass basis separately; this unexplained descriptor cannot determine dose, density, delivered heat or combustion. PAO synthesis is not this selected petroleum route. Initial equipment protection transferred onto trial paper is reconciled in commissioning records.

- Selected flow: Lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_materials; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `renz-spiral-manual`

###### Uncoated printing, writing and packaging paper (`paper_band`)

Conditional unprinted uncoated paper strip folded/tucked as an adhesive-free bundle band. Independently record grade, area, mass and losses. It is raw packaging paper, not a finished paper bag; no tape, label, ink or gum is embedded in this foreground strip.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_materials; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Unprinted corrugated dispatch box (`carton`)

Purchased complete unprinted corrugated dispatch box with supplier joint already included, mechanically tuck-closed onsite. Measure actual construction, board/fibre composition and box mass, separate from net notebooks. No generic packaging row, laminated folding carton or assumed 16.6%/83.4% primary/recycled fibre mix may replace the actual box. UUID remains unresolved for the unrestricted construction; include actual supplier manufacture once.

- Selected flow: Unprinted corrugated dispatch box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_materials; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Outputs

##### Product flows

###### Registers, account books, notebooks, letter pads, diaries and similar articles, blotting-pads, binders, file covers, forms and other articles of stationery, of paper or paperboard (`finished_notebook`)

Only accepted complete blank-page single-metal-spiral notebooks with unprinted uncoated paper covers and any declared mechanical protective leaf. Net gate mass includes retained metal and nylon, excludes dispatch band/carton and rejected units. The broad stationery name is physically restricted by this PCR; it is not an unbound-sheet or printing-plate output.

- Selected flow: Registers, account books, notebooks, letter pads, diaries and similar articles, blotting-pads, binders, file covers, forms and other articles of stationery, of paper or paperboard `dfa13b24-9a42-4e57-9ee9-6a00ab079cfa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_finished`
- Sources: `renz-spiral-manual`; `renz-metal-spirals`

##### Waste flows

###### waste paper (unspecified) (`paper_trim`)

Unprinted uncoated writing-paper trimmings and punch chads exported as one segregated paper-residue stream. Keep actual fibre/filler/moisture and receiving mill or treatment route; broad paper-waste identity does not prescribe recycling. Internal recutting/reuse stays in the physical ledger and is not an external waste credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_waste; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`; `renz-spiral-manual`

###### waste paper (unspecified) (`cover_trim`)

Separately weighed unprinted uncoated heavyweight-cover-paper trimmings and punch chads. Declare grade, fibre/filler/moisture and receiver separately from writing-paper residue; do not silently mix contaminated trial paper, metal or dust into this stream.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_waste; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `renz-spiral-manual`

###### Waste solid (`spiral_trim`)

Actual composite offcuts from metal-spiral end finishing, not waste cord fabric or pure nylon. Weigh the complete cuttings; record alloy, adhered nylon, other contamination and receiver acceptance. If the receiver separates fractions, describe that downstream treatment without inventing onsite separation. Use this broad physical identity only for this separately characterized actual discarded stream, with full phase, wet mass, material/coating or contamination and receiver compatibility; no treatment, hazard class or recycling credit is inferred.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_waste; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `renz-spiral-manual`; `renz-metal-spirals`

###### Dust (`collected_dust`)

Conditional captured fibre/filler dust removed from filters or collection containers; measure composition, moisture and receiver conditions. This solid waste is not outdoor PM, paper ash or wood sawdust. Do not include it again as a released particle. Use this broad physical identity only for this separately characterized actual discarded stream, with full phase, wet mass, material/coating or contamination and receiver compatibility; no treatment, hazard class or recycling credit is inferred.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_waste; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Waste liquid (`washwater`)

Conditional collected cleaning effluent transferred outside for treatment, with actual water, suspended paper fibre/filler and any measured contamination. Record mass, samples and receiver; no onsite pulping or biological treatment. Paper-mill process effluent and electrolytic manganese washwater are incompatible sources. It is not direct freshwater emission or intake water. Use this broad physical identity only for this separately characterized actual discarded stream, with full phase, wet mass, material/coating or contamination and receiver compatibility; no treatment, hazard class or recycling credit is inferred.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_waste; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Used lubricating oil (`waste_oil`)

Conditional actually generated used machine oil transferred as a separate liquid waste; measure mass, water/contaminants and destination. Unused oil returns are deducted from issues, not generated waste. No onsite burning or assumed recycling/energy credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_waste; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Waste solid (`commissioning_scrap`)

Conditional trial paper carrying rust-preventive oil removed from punch dies; weigh separately and characterize the actual protection formulation and receiver. Bookkeeping includes attributable commissioning stock and protection transfer once, with no assumption of free equipment-borne material. It is not clean recyclable trim or free liquid waste oil. Use this broad physical identity only for this separately characterized actual discarded stream, with full phase, wet mass, material/coating or contamination and receiver compatibility; no treatment, hazard class or recycling credit is inferred.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_waste; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `renz-spiral-manual`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Conditional measured particles with aerodynamic diameter at or below the PM2.5 cut, actually released after capture/abatement to outdoor air, unspecified subcompartment. Source method and interval convention must accompany mass. No stratospheric, indoor or long-term release and no generic wood-processing factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_air; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method201a-2020`; `jrc-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Conditional actual outdoor-air unspecified release above PM2.5 and at or below PM10, after control. Derive by compatible cumulative measurements only at the same point, period, moisture/temperature basis and method coverage; PM10 minus PM2.5, never their sum. Unknown split remains unquantified.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_air; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method201a-2020`

###### particles (> PM10) (`pmover10`)

Conditional actual particles above PM10 released to outdoor air, unspecified subcompartment. A compatible total-filterable measurement and PM10 sizing may establish the exclusive difference; Method 201A sizing alone does not establish total particulate. Deposited indoor dust or captured dust is not this factory release.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual attributable exchange amount per 1 kg reference flow using cp_air; conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method201a-2020`; `jrc-paper-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_separate | physical ledgers | Keep physical stage/product/residue, water and carbon balances before burden allocation. Internal links retain identical physical quantities on both ends; do not multiply physical co-product outputs by burden shares. |  |
| allocation_avoid | shared production | First assess actual subdivision or feasible system expansion with declared functions and reference before allocation. Use design/job submetering and material issues where subdivision is possible. Otherwise justify a measured relevant physical causal relationship; an alternative relationship requires reasons why earlier options fail and representative data. Reconcile allocated burdens to the total; a kg reference does not itself justify mass allocation. Physical outputs and transfers retain complete quantities. This hierarchy citation does not assert full PEF or circular-footprint conformity. | pef-allocation-2021 |
| allocation_residues | paper_trim; cover_trim; spiral_trim | Record actual destination and waste/product status. No automatic avoided-paper/metal, biogenic-carbon deletion or energy credit. If a saleable co-product exists, justify applicable allocation and keep its physical output intact in a separate environmental-burden account. | jrc-paper-bref-2015 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_finished | notebook_manufacture | finished_notebook | acceptance and calibrated weighing | design; lot; accepted/reject counts; gross mass; packing tare; net mass Q; moisture; sheets/pages; dimensions; calibration | Weigh accepted complete same-design notebooks on a calibrated scale, subtract actual packaging tare, exclude rejects and reconcile counts. Count physical leaves and page surfaces separately; no default item mass. | kg | each lot | declared full reporting period | selected converter/design | per 1 kg reference flow | scale calibration; acceptance and tare records |
| cp_materials | notebook_manufacture | individual material inputs | stock issue/return and weighing | row_id; supplier/lot/grade; issue/return; opening/closing stock; mass; dimensions; grammage; moisture; measured water/carbon content and fossil/biogenic origin; spiral alloy/nylon/pitch/diameters; commissioning protection transfer | Weigh each material separately; reconcile issues, unused returns and stock changes with each job and stage. Measure sheet area/grammage and retained constituents; measure packing separately. For oil declare actual supplied grade/provider compatibility; retain commissioning inputs and protection transfer once. | kg | each lot and issue | same period as accepted output | all attributable stages | per 1 kg reference flow | supplier specifications; calibrated balances; job stock ledger |
| cp_utilities | notebook_manufacture | electricity; tap_water | meters and delivery records | row_id; stage; start/end meter; time; voltage/region/provider; kWh; cleaning water mass or volume/density/temperature; attributable idle load | Meter each stage and shared supply with documented attribution; retain kWh to MJ conversion. For water, weigh supply or multiply actual volume by sampled density. Record utilities in original units and reconcile common period before normalization; no assumed steam or fuel. | MJ; kg | meter interval and job | same period as accepted output | selected route and auxiliary loads | per 1 kg reference flow | meter calibration; delivery invoices; density sample; stage attribution |
| cp_waste | notebook_manufacture | each individual waste output | weighing; samples; transfer receipt | row_id; source stage; wet mass; moisture; fibre/filler; metal/alloy; nylon; oil contamination; receiver/destination; internal reuse; rejects; stock changes | Weigh each external waste separately, sample actual composition and receiver requirements. Keep clean paper, cover trim, captured dust, coated metal ends, oil-soiled paper, used oil and washwater distinct. Track internal rework and rejected-unit component separation without duplicate external transfers. | kg | each collection/transfer | same period as accepted output | all included converter stages | per 1 kg reference flow | scale calibration; samples; recipient acceptance; manifests; physical ledger |
| cp_air | notebook_manufacture | pm25; pmcoarse; pmover10 | post-control source testing and fugitive survey | source/outlet; outdoor medium; dry/wet basis; aerodynamic cuts; method coverage; concentration; compatible exhaust volume; operating hours; capture; detection limits; fugitive evidence | Survey cutting/punching and extraction; test actual release after control, including separately assessed fugitive paths. Method201A is only applicable filterable stationary-source sizing with its sampling/temperature/droplet limitations; total-filterable and condensable coverage needs suitable additional methods. Integrate compatible concentration and exhaust volume over actual operation. Unmeasured fraction or pathway remains pending, never a zero. | kg | representative operating tests and period logs | same period as accepted output | all actual outdoor outlets and fugitive routes | per 1 kg reference flow | method QA/calibration; sample blanks; detection limits; exhaust coverage and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_normalization | all inventory rows | x_i = A_i / Q; A_i is attributable same-period exchange in its stated unit; Q is accepted net complete-notebook lot mass in kg. Final reference output is 1 kg. | cp_finished; cp_materials; cp_utilities; cp_waste; cp_air | amount per 1 kg reference flow |  |
| paper_mass_check | body_paper; front_cover; back_cover; endleaf | m_sheet_kg = measured_area_m2 × measured_grammage_g_per_m2 / 1000; lot paper = measured physical sheet count × m_sheet_kg. Reconcile cutting/punch loss, moisture and covers separately against actual weighing; page surfaces never double sheet mass. | cp_materials; measured dimensions/grammage/counts | paper mass cross-check, not denominator |  |
| electric_conversion | electricity | E_MJ = 3.6 × metered_kWh; normalize the attributed same-period MJ by Q after meter reconciliation. | cp_utilities; cp_finished | MJ per 1 kg reference flow |  |
| water_mass_conversion | tap_water; washwater | whole_liquid_kg = measured_volume_m3 × measured_density_kg_per_m3 at sampled temperature; direct weighing needs no density assumption. For each actual input/effluent, H2O_kg = whole_liquid_kg × measured_H2O_mass_fraction. Keep dissolved and suspended fractions; non-water mass is not automatically dry solids. Preserve phase, losses and stocks without duplicate component exports. | cp_utilities; cp_waste | kg water ledger |  |
| particle_integration | pm25; pmcoarse; pmover10 | For each compatible source/interval, released mass = integrated post-control concentration × matched exhaust volume with documented unit conversion. Compatible coarse = PM10 − PM2.5; above10 = total filterable PM − PM10 only when total sampling coverage is established. Include measured fugitive releases separately without duplicating captured dust. | cp_air; cp_finished | exclusive released kg per 1 kg reference flow | epa-method201a-2020 |
| physical_closure | notebook_manufacture | For each material/constituent and the same period, opening stock + full physical external additions = retained accepted output + separately shipped packing/materials + external unused returns + external residues/releases + closing stock, with documented rejects/rework and measured moisture change. Internal link outgoing quantity = incoming quantity before burden allocation. Keep paper, metal/nylon, oil, water and carbon ledgers separately; declared residuals must be explained, never silently forced to zero. Reconcile paper/cleaning/material water, moisture changes, actual atmospheric humidity entering/leaving and water stocks separately; no unexplained residual is assigned to vapour. Actual net water release requires a separate compatible elementary exchange and measured coverage. Packing bands/cartons, supplier containers, pallets/liners, filters, replacement parts and protection/maintenance materials retain full physical receipts, returns, stocks and destinations; extend atomic rows when present or substantiate absence, independently of service-life burden attribution. | cp_materials; cp_waste; cp_air; cp_finished | physical ledgers and closure residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all rows | Verify physical state, formulation, route, reference property/unit and provider basis independently. Unknown UUID/provider remains an explicit gap; generic names do not overcome conflicting route/CAS fields. | supplier/direct identity/measurement evidence |
| quality_period | all rows | Cover the same declared reporting period and design for stocks, acceptance, utilities, wastes and emissions. Preserve stage detail, instrument calibration, detection limits and uncertainty; representative sampling must explain extrapolation. | raw records; calibration; sampling plan |
| quality_structure | reference notebook | Prove blank paper/cover and selected spiral construction by actual drawings, orders, material issues and acceptance. A catalogue confirms capability only; no invented factory data or reviewed status. | drawing; issue/acceptance records |
| quality_complete | foreground package | List each additional atom separately and reassess applicability before completion. Material shortages, unsupported conversions or omitted pathways are not a pass. | completeness ledger and unresolved inventory |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_notebook | Exactly one final output equals 1 kg net accepted complete qualified notebooks; preserve all required qualifiers. Reject printed/glued/stapled/double-loop/loose-leaf or other excluded construction and packaging-included denominator. | renz-spiral-manual; renz-metal-spirals |
| validate_measurement | all inventory rows | Confirm same per 1 kg reference flow basis in collection/amount/calculations and both languages, positive Q, calibrated weighing, sheet/page distinction, compatible provider units and complete stage/constituent balances. No assumed per-notebook mass. |  |
| validate_waste_air | waste and elementary outputs | Require actual composition and recipient for waste, after-control outdoor medium for particles and mutually exclusive PM bins. Missing total/size/fugitive coverage is pending; captured dust, indoor dust and mill emissions cannot masquerade as converter air release. | epa-method201a-2020; jrc-paper-bref-2015 |
| validate_completion | foreground dataset | Unresolved UUID, provider quantity basis, source conflict or missing collection evidence must be reported; it blocks the affected completed dataset rather than inventing a substitute or zero. No scientific approval is established by a mechanical projection/measurement check. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing process per 1 kg qualified net notebook output. |
| downstream_use | secondary_dataset; background_dataset, after actual identity/provider/collection gaps are resolved |
| allowed_use | Actual selected unprinted single-metal-spiral notebook route of the declared design/site/period; supplier-model use with preserved gate and upstream coverage. |
| excluded_use | All CPC32700 stationery, alternative binding/printing/thermal routes, equal writing-service claims, use-phase or generic environmental certification. |
| required_metadata | Required qualifiers, physical stage graph, net output, stocks and atomic rows, supplier/treatment/freight cut points, balances and allocation. |
| required_quality_disclosure | Actual measured/modelled evidence, UUID/provider/source debts, missing paths, sampling coverage, period and uncertainty; no publication/scientific-review implication. |
| update_trigger | Change in paper/cover/spiral structure, printing/glue/finish/thermal route, suppliers/reference bases, acceptance, utilities, waste destination or emission evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-paper-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), §§7.1.4,7.1.10; printed665/670, PDF703/708. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Upstream paper mill broke/finishing; cutting dust potential prompts actual converter survey, not a converter factor or recycling default. |
| renz-spiral-manual | handbook | RENZ SPB 360 comfortplus Operation Manual, order971000069, publisher snapshot2026-10-12, PDF2–3 and9. https://www.renz.com/fileadmin/Manuals/SPB_360_comfortplus.pdf | Electric punching/inserting, metal SC-pliers restriction and commissioning trial paper; PDF9 built-in cutting is plastic-only under PDF2 restriction. No capacity/energy recipe. |
| renz-metal-spirals | handbook | RENZ Metal spirals, Overview, publisher snapshot2026-10-12. https://www.renz.com/products/coil-spiral/metal-spirals/ | Actual preformed NC-wire spiral with nylon coating; no universal alloy, coating mass, size or sheet count. |
| clairefontaine-notebooks | handbook | Clairefontaine Notebooks and pads, Notebooks paragraph, publisher snapshot2026-10-12. https://www.clairefontaine.com/gb/contenu/9/notebooks-and-pads | Producer blank/ruled and staple/wire construction distinctions; capability only, not an exact surveyed selected SKU or dimensions default. |
| mm-antaro-binding | handbook | Müller Martini Antaro perfect binder, Top class end products, publisher snapshot2026-10-12. https://mullermartini.com/en/product/antaro/ | Milling and EVA/PO/PUR gluing as distinct excluded route; no glue quantity or production rate. |
| kokuyo-binder | handbook | KOKUYO Campus Binder Notebook, Features/open-close and replace Loose Leaf, publisher snapshot2026-10-12. https://www.kokuyo.com/en/stationery/series/campus/notebinder/ | Openable replaceable-leaf mechanism establishes excluded loose-leaf construction; no spiral component quantities. |
| epa-method201a-2020 | official_guidance | US EPA Method201A, October7,2020 web copy, §§1.1–1.6, PDF1–2. https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf | Filterable stationary-source PM2.5/PM10 sizing and limitations; no droplets/fugitive factor, no total/condensable coverage from sizing alone; no legal compliance claim. |
| pef-allocation-2021 | official_guidance | European Commission, PEF method Annex I §4.5, PDF63–64 (2021). https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Multi-functionality hierarchy only; no full PEF/CFF compliance, automatic credit or physical-flow deletion. |
