---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.cca-preserved-radiata-pine-rough-roundwood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---


# CCA-preserved radiata pine rough roundwood

## 1. Scope and Applicability

This attributional manufacturing method selects new Pinus radiata whole roundwood, debarked/peeled following its natural taper, air-seasoned before waterborne CCA oxide-liquor full-cell pressure treatment, then drained, recovered, held on a contained drip pad for fixation and air conditioning, inspected and released at the treatment-plant gate. It remains rough solid wholewood: no precision cylindrical profile, longitudinal sawn boards, sleeper or assembled component is represented. Species, retained sapwood/heartwood, geometry, moisture, treatment and acceptance distinguish the product.

This is a representative technical synthesis. Portland Pine documents a radiata-pine roundwood/full-cell CCA industrial route; the separate Arch supplier SDS documents the real aqueous product Tanalith C Oxide Liquor. Their combination defines the selected technology, not evidence that Portland buys that particular product or that any user's factory uses it. Supplier identity, batch composition and actual operating records remain foreground obligations. The detailed inventory selects electric equipment and ambient-air conditioning; it does not supply measured factory quantities. [Sources: `portland-pine-process`; `arch-tanalith-oxide-2016`.]

Exclude other botanical species, roughly squared final timber, precision-rounded/moulded profiles, sawnwood, sleepers, engineered wood, paint/stain-only finishes, creosote/oilborne routes, dissolved or micronized copper-azole, ACQ/ACZA, borate, reused wood and in-service remedial treatment. These are genuine alternative technologies or physical products; none is modelled by mixing this inventory's rows. Onsite combustion, steam/hot-water conditioning, kiln drying, diesel handling and added anti-sapstain/finishing chemicals require a complete route extension if actually present. Upstream supplier preparation, transport, drying or heating is inherited with its actual history rather than erased by this selected foreground boundary.

CPC 3.0 31310 includes treated rough wood; this PCR covers only the stated CCA-preserved radiata-pine rough-roundwood subset. Classification membership establishes no equivalence with other preservative systems or profiles. [`unsd-cpc-structure-2025`.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.cca-preserved-radiata-pine-rough-roundwood |
| classification_refs | CPC 3.0 31310; narrower methodology scope |
| covered_products | New CCA-preserved Pinus radiata naturally tapered peeled whole rough roundwood |
| excluded_products | Other species, rough-squared or precision-profiled final products, sawnwood, sleepers, coatings, other preservatives, reused and engineered wood |
| representative_product | Radiata pine peeled whole roundwood treated with purchased whole aqueous Tanalith C Oxide Liquor, diluted with separately supplied water, by full-cell vacuum-pressure treatment and ambient fixation/air conditioning |
| production_route | Untreated log receipt → peeling and end trimming → air predrying → initial vacuum → flooding under vacuum → pressure impregnation → pressure release/drain/recovery → final vacuum → contained fixation/air conditioning → quality release, identification and storage → factory gate |
| market_state | New accepted treated rough roundwood at declared first-acceptance moisture/fixation state, including retained water and preservative; packaging excluded from reference mass; measure and reconcile any later dispatch-state change |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the selected CCA-preserved radiata pine whole rough roundwood at the manufacturing gate |
| How much | 1 kg net accepted final product |
| How well | Actual geometry, sapwood/heartwood, moisture, formulation, penetration/retention assay zone, fixation and surface-release criteria declared and verified |
| How long or cycle | One complete manufacturing campaign; no service-life equivalence or duration is assigned |
| reference_flow_link | `finished` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Pinus radiata; whole naturally tapered peeled roundwood; actual dimensions and sapwood/heartwood; new CCA oxide-liquor treatment; whole supplied formulation and supplier lot; full-cell cycle; preconditioning and fixation history; actual moisture and retained chemicals; retention assay zone and analytical basis; acceptance specification and release; site/time; utilities and provider; physical stocks and inherited burden vectors; waste destinations |

The native Wood material record explicitly leaves species, form, treatment, moisture, route and provider unspecified. Its Product-flow/Mass definition is positively compatible with this qualified treated wholewood exchange; it does not establish the preservative recipe, a supplier dataset, performance, legal approval or automatic applicability. Preserve the full qualifiers on each exchange and its provider. The untreated input may use the same generic UUID with its different declared physical state; `finished` alone identifies the reference Product output. An untreated roadside log, sawn profile or generic name without these qualifiers cannot substitute for the final product.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of independent unique first-acceptance event net masses measured with cp_lot at one declared moisture/fixation gate, excluding packaging. Lock each piece/cohort and its dry wood, retained water and non-water preservative basis; subsequent dispatch, loss, return or reacceptance cannot redefine Q. All inventory amounts use per 1 kg reference flow. |
| `chemical_basis` | whole preservative and its composition ledger | Mass | kg | Record purchased whole aqueous liquor once. Supplier component/oxide-equivalent/element measurements are nested composition records, not extra physical inputs. Carrier water already inside that liquor is not new process water. |
| `wood_moisture` | wood and product balance | Mass | kg | For untreated wood only, dry-basis moisture u = water mass / dry wood mass and dry wood = wet untreated mass / (1 + u). For treated wood, separate actual retained water, dry wood and non-water preservative; oven mass loss alone is not water. Source: usda-wood-handbook-2021. |
| `scope_conversion` | volume, count, retention and utilities | Mass; Energy | kg; MJ | Preserve raw units and sampling scope. Obtain actual mass per piece or compatible measured density for the same geometry/moisture and solid/loose volume basis; no handbook density. An assay-zone retention in kg/m3 does not describe the whole pole volume. Integrate actual rates over time before normalization; convert metered kWh using 3.6 MJ/kWh. |

### Whole-liquor and element accounting

Use the supplier's complete batch mass/composition and actual concentration/density at the measured state. The historic SDS establishes an aqueous industrial preparation and names CuO, CrO3 and As2O5; it is not proof of today's complete composition or of undissolved pure oxides in the treatment bath. Do not impose its percentages, density or a water-by-difference recipe as factory defaults, or equate the product name with AWPA CCA-C ratios. Dissolution, oxidation-state change and fixation require actual aqueous/retained-phase information. [`arch-tanalith-oxide-2016`.]

Where analysis is explicitly on an oxide-equivalent basis, convert CuO to Cu with A(Cu)/Mr(CuO), CrO3 to Cr with A(Cr)/Mr(CrO3), and As2O5 to As with 2A(As)/Mr(As2O5). Use documented molecular/atomic weights and purity on the actual analytical basis. These conversions do not assert molecular species in solution or fabricate Cr(III)/Cr(VI) or As(III)/As(V) splits. Keep compound, elemental and oxidation-state records linked without summing them as additional masses. CCA fixation involves chromium reduction; completion and retained species require assay, not an assumed yield. [`usda-wood-handbook-2021`, chapter 15.]

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | New untreated Pinus radiata whole logs received at the treatment plant with documented bark, moisture, geometry and upstream preparation history |
| starting_condition_role | Inherited upstream product input; foreground is rough-roundwood preparation and preservation |
| product_classification_scope | The selected CCA-treated whole roundwood subset of CPC 3.0 31310; no claim to every product in the leaf |
| recursive_input_rule | Previously treated wood is excluded. Never reset inherited wood, water, chemicals or carbon to virgin zero-burden material or recursively repeat the same provider. |
| upstream_dataset_requirement | One actual provider per supplied exchange; match botanical species, forestry/harvesting, delivered gate/transport, preparation and any supplier drying/heating, moisture/mass, formulation manufacture, water and electricity. Retain gaps rather than borrow another PCR's provider. |
| disclosure | Starting gate and history; stage and stock coverage; actual recipe and supplier; conditioning and controls; inherited burden vectors; allocation; packaging custody; recipient and waste treatment; omitted downstream service life/end-of-life |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_new` | Inherit forestry, harvesting, log processing, transport and any supplier drying/conditioning from matched upstream supply. Do not count these again in the foreground. Gate-to-gate data are not cradle-to-gate data when upstream coverage is incomplete. |  |
| `boundary_route` | Keep separate stage records for peeling/trimming, predrying, mixing, each vacuum/pressure phase, drainage/recovery, fixation/air conditioning, inspection, rework and storage within one integrated unit. Include start/stop, failed charges, idle auxiliaries, cleaning and actual waste controls; missing production does not erase loads. | `epa-ap42-wood-preserving-1999` |
| `boundary_chemical` | Whole purchased aqueous CCA liquor is one actual supplier product. Connect its manufacture once; do not also purchase its analytical oxides/elements or contained water in the inventory. Add only separately crossing water/chemicals with their own actual identities. Internal recovery and recirculation are gross physical transfers, not repeated external purchases. |  |
| `boundary_fixation` | Include actual fixation hold, drip recovery and moisture change before release. Trace source, weather/temperature, time, assays and acceptance records. Historical handbook examples do not define a required duration, recipe, retention, pressure or temperature. Actual steam, kiln or hot-water use requires its measured heat/water/condensate and complete route inventory. | `usda-wood-handbook-2021` |
| `boundary_waste` | Track each external CCA-contaminated solid, spent liquor, sludge and wastewater separately by actual wet composition, recipient, transport and treatment. Contained pollutants are not direct elementary releases. Keep storage/runoff and fugitive sources; accepted-product in-service leaching and end-of-life are outside this manufacturing gate. No automatic clean-biomass fate or recovery/substitution/energy credit. | `epa-ap42-wood-preserving-1999` |
| `boundary_packaging` | Include actual identification and binding materials and all externally received reusable packaging in a complete physical custody ledger. An order price or separate invoice does not define first physical receipt or burden ownership. No default package mass or assumed container reuse count is supplied. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `waterborne_treatment` | Integrated rough-roundwood preparation, CCA treatment, fixation and dispatch | required | Selected wholewood/whole-liquor full-cell route | foreground production | 1 kg reference flow |

### Process: Integrated CCA rough-roundwood manufacture (`waterborne_treatment`)

Maintain a stage ledger for the complete physical sequence. Internal wood, treating liquid, drain returns and water handoffs have equal amounts on both ends and retain their composition and stock/burden history. These are not extra final products or new purchased preservative. The cards below identify atomic exchanges; conditional releases/outputs need actual evidence of presence or absence. Add every genuinely additional chemical, packaging component, residue and speciated release before claiming a complete site inventory. Neither a missing UUID nor a failed search establishes absence.

#### Inputs

##### Product flows

###### Untreated radiata pine whole logs (`wood_conifer`)

New untreated Pinus radiata whole round logs delivered at the plant, with actual bark, moisture, sapwood/heartwood and upstream history. Same generic native material as the final wood, with a distinct physical state and actual delivered provider; no inherited treatment is assumed.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources:

###### Whole aqueous CCA oxide preservative liquor (`preservative_liquor`)

One supplied whole liquid article, including its carrier water and actual components; measure external net supplied/consumed quantity with stock and phase history. Connect its actual manufacture once. The historical product establishes chemistry existence; current supplier/batch correspondence and undisclosed ingredients require actual evidence. It is not a purchase of separate CuO, CrO3 and As2O5.

- Selected flow: Tanalith C Oxide Liquor, whole aqueous preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemicals`
- Sources: `arch-tanalith-oxide-2016`

###### Purchased alternating-current electricity (`electricity`)

Meter electric peeling, trimming, pumps/vacuum, mixing, handling, recovery, fans, controls, QA and storage. Select an actual voltage/geography/delivery-matched provider; a China high-voltage identity is not a generic connection. No purchased heat or onsite combustion is represented by this row.

- Selected flow: Purchased alternating-current electricity at actual consumer connection
- Flow property / unit: Energy / MJ
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Separately supplied process water (`water`)

Only additional water physically crossing the boundary for dilution/make-up/cleaning as this supplied medium. Water already contained in purchased liquor remains in its nested composition ledger. Recoveries are internal; do not count them as new supply or presume water withdrawal from nature.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemicals`
- Sources:

###### Uncoated steel binding strip (`steel_strap`)

Conditional specific binding article for log/finished bundles when actually used; do not assume this material from the word strapped. Record actual alloy, width/thickness, gross receipts, scrap, reuse and provider composition. A recycled 99% Fe/1% C record or wire is not automatically this strip. A different actual material requires its own atomic card.

- Selected flow: Uncoated steel strapping, flat strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Purchased paper identification label (`paper_tag`)

Conditional actual supplied paper identification label at dispatch; match paper/printing/adhesive scope with the real provider and weighed delivered article. Do not count its paper/ink again if already included upstream. A plastic tag or burn brand is not this article.

- Selected flow: Paper label `0b14a817-809e-4989-9172-5713bb4ee2a4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### External preservative-treatment quality testing service (`qc_service`)

Only an actual outsourced service of measured scope/hours H; collect Qc in its real native unit and document any conversion. It includes only the actual contracted assays/release work. Retesting returned/failed wood consumes service without new wood Q. Do not duplicate underlying laboratory activity already covered by the provider.

- Selected flow: CCA-treated roundwood inspection service, actual service hour
- Flow property / unit: Time / h
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_qc`
- Sources:

#### Outputs

##### Product flows

###### Accepted CCA-preserved radiata pine whole rough roundwood (`finished`)

The unique finished reference output after actual fixation/air-conditioning and acceptance. Net mass includes retained water and non-water preservative, excludes packaging, and is measured at the declared moisture gate. The finished row represents the unique first-acceptance reference, not an extra physical dispatch. Lock acceptance-state net masses in Q once and reconcile all later destinations with acceptance_event_bridge; opening or purchased FG, returns and reacceptance do not add Q.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot`
- Sources:

###### Untreated bark sold as an actual co-product (`bark`)

Only clean bark removed before treatment and actually sold for a useful function. Keep full measured physical mass and moisture independently of burden allocation. It cannot share the waste-only Bark identity or be counted again as bark_waste for the same portion.

- Selected flow: Untreated Pinus radiata bark co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources:

###### Untreated sawdust co-product (`sawdust`)

Only actual clean pre-treatment end-trimming sawdust with useful co-product destination. Retain individual physical mass and moisture, distinct from coarse wood chips and captured dust sent as waste. No assumed yield or value.

- Selected flow: Untreated Pinus radiata sawdust co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources:

###### Untreated chipped log rejects co-product (`wood_chips`)

Conditional clean rejected logs/coarse preparation residues actually chipped and sold, retaining chipping electricity and full physical mass. No sale/function is presumed. A volume-reference Wood Chip record cannot supply a mass identity without an actual compatible density/volume conversion.

- Selected flow: Untreated Pinus radiata wood chips co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources:

##### Waste flows

###### Untreated debarking bark waste (`bark_waste`)

Conditional actual pre-treatment debarking residue sent as waste, with wet/dry mass, contamination status, recipient and treatment recorded. Its waste type is positively compatible only with this waste portion; not sold bark co-product or CCA-contaminated bark.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Untreated preparation wood residue waste (`untreated_wood_waste`)

One separately collected clean end-trim solid waste stream, before CCA contact. Keep distinct from saleable chips/sawdust, bark and contaminated offcuts. Record actual recipient, transport and treatment without biomass/credit assumptions.

- Selected flow: Untreated Pinus radiata end-trim wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### CCA-contaminated aqueous cleaning effluent (`cca_wastewater`)

A distinct wastewater consignment only when externally transferred, including measured water, Cu/Cr/As and actual other contents. Do not merge reusable treating liquor or sludge into it or record contained metals again as a direct fresh-water discharge.

- Selected flow: CCA-contaminated cleaning wastewater for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent steel binding strip (`strap_waste`)

Conditional actual separately transferred strip scrap; retain contamination, material mass, metal subledger, stock/cohort and receiver. No assumed steel recycling or substitution credit. Internal reuse is not waste or new manufacture.

- Selected flow: Spent uncoated steel strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Discarded paper identification labels (`label_waste`)

Conditional actual label waste, keeping composition, CCA contamination if any, gross stock balance and recipient separate from steel and wood residues. Do not count label losses as product mass.

- Selected flow: Discarded paper identification labels
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### CCA-treated wood offcuts (`treated_offcuts`)

CCA-treated solid offcuts or rejected whole pieces sent to one identified external waste destination. Weigh the transferred wet waste and identify recipient, transport and treatment; reuse inside the unit is not an external output.

- Selected flow: CCA-treated wood offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`

###### Spent aqueous CCA treating liquor (`cca_liquor`)

One liquid waste stream transferred externally, including its water and measured Cu/Cr/As composition; not an elementary discharge. Weigh the transferred wet waste and identify recipient, transport and treatment; reuse inside the unit is not an external output.

- Selected flow: Spent aqueous CCA treating liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`

###### CCA-contaminated treatment sludge (`cca_sludge`)

One separately collected sludge stream from CCA recovery or spill/cleaning controls; retain water content, Cu, Cr speciation and As records. Weigh the transferred wet waste and identify recipient, transport and treatment; reuse inside the unit is not an external output.

- Selected flow: CCA-contaminated treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`

##### Elementary flows

###### Alpha-pinene from actual wood volatilization (`alpha_pinene_air`)

CAS 80-56-8 only if specifically measured/reliably modelled from this wood and actual ambient drying/storage/vacuum route. Not all wood VOC or a heating-factor proxy. Additional actual substances require separate atomic cards, not assignment to alpha-pinene.

- Selected flow: Alpha-pinene emission to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

###### Actual biogenic carbon dioxide release (`biogenic_co2`)

Only actual documented wood-carbon release during included storage/processing, with measured/modelled carbon provenance and stoichiometry. No onsite combustion is assumed. Keep any real release in LCI and distinguish inherited wood carbon, liquid/retained carbon and other species; no carbon-neutrality or avoided-energy credit.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

###### Mechanical wood dust, PM2.5 (`pm25`)

Mechanical preparation emissions to outdoor air, unspecified subcompartment; only mass at or below 2.5 micrometres. Quantify actual post-control releases; never infer a zero from a general statement that waterborne emissions are small.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Mechanical wood dust, PM2.5–PM10 (`pmcoarse`)

Mechanical preparation emissions to outdoor air, unspecified subcompartment; only the non-overlapping fraction above 2.5 and at or below 10 micrometres. Quantify actual post-control releases; never infer a zero from a general statement that waterborne emissions are small.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Mechanical wood dust, above PM10 (`pmover10`)

Mechanical preparation emissions to outdoor air, unspecified subcompartment; only particles above 10 micrometres. Quantify actual post-control releases; never infer a zero from a general statement that waterborne emissions are small.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Copper emission to air (`copper_air`)

Actual copper elemental-equivalent mass in emissions to outdoor air, unspecified subcompartment; do not substitute oxine-copper or copper oxide compound mass. Quantify actual post-control releases; never infer a zero from a general statement that waterborne emissions are small.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Hexavalent chromium emission to air (`cr6_air`)

CCA route only; measured chromium(VI) as Cr mass to outdoor air, unspecified subcompartment. Quantify actual post-control releases; never infer a zero from a general statement that waterborne emissions are small.

- Selected flow: chromium (vi) `08a91e70-3ddc-11dd-950b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Trivalent chromium emission to air (`cr3_air`)

CCA route only; measured chromium(III) as Cr mass to outdoor air, unspecified subcompartment. Unknown total Cr cannot be arbitrarily split. Quantify actual post-control releases; never infer a zero from a general statement that waterborne emissions are small.

- Selected flow: chromium (iii) `08a91e70-3ddc-11dd-9f7b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Arsenic emission to air (`arsenic_air`)

CCA route only; measured total arsenic as As mass to outdoor air, unspecified subcompartment; disclose analytical basis and any available speciation. Quantify actual post-control releases; never infer a zero from a general statement that waterborne emissions are small.

- Selected flow: arsenic `08a91e70-3ddc-11dd-91d7-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Copper discharge to fresh water (`copper_water`)

Total Cu measured as elemental Cu. Only if actually released directly to fresh water after onsite controls. Sewer transfers belong to a waste exchange and linked treatment process; do not duplicate contained pollutants as direct releases.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Chromium(VI) discharge to fresh water (`cr6_water`)

Chromium(VI) measured as Cr; CCA only. Only if actually released directly to fresh water after onsite controls. Sewer transfers belong to a waste exchange and linked treatment process; do not duplicate contained pollutants as direct releases.

- Selected flow: chromium (vi) `4d9a8790-3ddd-11dd-8fd7-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Chromium(III) discharge to fresh water (`cr3_water`)

Chromium(III) measured as Cr; CCA only. Only if actually released directly to fresh water after onsite controls. Sewer transfers belong to a waste exchange and linked treatment process; do not duplicate contained pollutants as direct releases.

- Selected flow: chromium (iii) `4d9a8790-3ddd-11dd-8fd0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Arsenic discharge to fresh water (`arsenic_water`)

Total arsenic measured as As; CCA only. Only if actually released directly to fresh water after onsite controls. Sewer transfers belong to a waste exchange and linked treatment process; do not duplicate contained pollutants as direct releases.

- Selected flow: arsenic `08a91e70-3ddc-11dd-91df-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`; `epa-ap42-wood-preserving-1999`

###### Evaporated water to air (`water_vapor`)

Water actually evaporated from incoming wood or waterborne solution during preparation, fixation and drying, to outdoor air, unspecified subcompartment; retain a separate water balance.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the measured attributable current-production exchange total divided once by new accepted net final mass Q, after original-unit/rate/scope conversion, dedicated subdivision, flow-specific causal attribution and stock-vector reconciliation; retain gross unallocated physical totals. Record actual amount only when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`

## 7. Allocation and Co-product Handling

Use subdivision, exchange-specific determining physical causality and, only for unresolved inseparable residual burdens, same-gate market values. This is the selected attributional partition approach; the ILCD source supports that hierarchy, not an assertion of full ILCD conformance or adoption of its reuse/recycling formulae. [`jrc-ilcd-allocation-2010`.]

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_stages` | Establish gross physical totals, unit/rate/scope conversions, directly dedicated loads and stage subdivision first. Attribute each remaining shared exchange using its own demonstrated physical cause (actual machine time/load, treated charge occupancy, measured pump work or handling activity), not one common output-mass fraction for every exchange. These are declared foreground modelling rules, not allocation authority inferred from a manufacturer's process description. | `jrc-ilcd-allocation-2010` |
| `allocate_coproducts` | Determine actual co-product versus waste status from useful function, destination and contemporaneous transactions. Treatment/fixation loads cannot be assigned to untreated bark or chips removed earlier. Only a genuinely inseparable residual shared burden may use economic allocation after subdivision and causal physical attribution cannot resolve it; use actual same-period, same-gate, same-condition quantities and net values, with transport/quality/moisture consistency and sensitivity. Unknown values are not invented. | `jrc-ilcd-allocation-2010` |
| `allocate_physical` | Keep full physical output vector V and material/element/water balances independent of burden share A. Carry flow-specific inherited burden vectors through raw/unused material, WIP, finished goods and reusable packaging. Divide the attributed current-production vector by positive new accepted Q once. Do not apply A to physical coproduct masses, multiply upstream providers twice, or award recovery, substitution or energy credits. | `jrc-ilcd-allocation-2010` |
| `allocate_service` | Inspection/retesting service quantity Qc or actual service hours H describe a purchased service, not new wood production. Attribute its burden to the actual inspected lots including failed/returned stock; do not replace the wood denominator with tests, hours, sales or retested product mass. | `jrc-ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot` | `waterborne_treatment` | finished | weighing/acceptance and stock | lot/cohort and unique piece/event IDs; first-acceptance time and locked net mass; Pinus radiata; dimensions; sapwood; gate; tare; dry wood; moisture/retained water; non-water preservative and Cu/Cr/As basis; penetration/assay zone; fixation test; pass/fail/rework and prior acceptance link; opening/closing FG and WIP; purchased FG; gross dispatch and linked returns; D_new; FG_new; separate loss/scrap/downgrade/net-return/rework-WIP destinations within L_new; later moisture/chemical changes | Calibrated net weighing and representative state-specific analysis at the declared first-release gate. Deduplicate first-acceptance events; preserve actual wet masses and measured component/state conversions. Reconcile the complete same-cohort acceptance_event_bridge, assigning every portion once after netting linked returns/internal loops. Separate opening or purchased FG and reacceptance from new production; retain their activity and original burden vectors | kg | each event, transfer and release | complete campaign and connected opening/closing stocks and prior acceptance history | one actual site and defined product state | per 1 kg reference flow | calibration; event/cohort traceability; sampling and lab basis; dispatch/return/stock/destination records; measured state-conversion evidence |
| `cp_inputs` | `waterborne_treatment` | wood and untreated outputs | receipt/stage/stock balance | receipt/time/origin; botanical species; log geometry/bark; supplier gate; forestry/harvesting/transport; previous squaring/sawing/drying/conditioning and heat; raw wet mass; moisture; actual density/volume basis; bark/chips/sawdust; rejects; opening/closing unused/raw/WIP; prior burden vector | Weigh each atomic material/transfer and measure compatible moisture; trace supplier history rather than invent it. Record peeling versus profile/sawn manufacture. Match both ends of internal links, unallocated gross totals and flow-specific attribution | kg | each receipt, transfer and stock count | same campaign as Q with inherited stock history | actual delivered logs and each preparation stage | per 1 kg reference flow | scales; supplier records; moisture/volume methods; actual destination, provider and vector provenance |
| `cp_chemicals` | `waterborne_treatment` | whole liquor and added water | supplier composition/phase/stock record | whole liquor product and supplier lot; delivered kg or actual volume/density; composition and analytical basis; separately added water; opening/closing concentrate/work/recovery tanks; circulation; drainage; wood uptake; retained water/chemicals; Cu/Cr/As and valence; leaks/losses; bath temperature and times | Meter/weigh external whole liquor once and reconcile stock and actual dilution. Keep water, wood phase, liquid phase, each element and identified species subledgers. Measure retention and losses; no family-name recipe, full-SDS-by-difference assumption, or inference of several unknowns from one residual | kg | each batch, cycle, transfer and stock count | same campaign as Q including retained/recovered stocks | one actual supplied formulation and full-cell route | per 1 kg reference flow | actual batch certificate and complete supplier disclosure; meter/assay calibration; phase and element reconciliation |
| `cp_energy` | `waterborne_treatment` | electricity | stage meter/time record | meter; stage; voltage/geography; provider and delivery boundary; kWh; rate/time; start/stop/idle/failed/cleaning; shared machine cause and stock attribution | Read actual stage meters or integrate measured power over actual operating intervals. Reconcile shared to dedicated loads and connection losses; all electric pump/handling/fans/QA loads remain even without accepted output. Any real heat route records supply/return enthalpy, water and condensate and requires added inventory | MJ | each cycle and meter interval | complete campaign including nonproductive periods | actual consumer connection and all included stages | per 1 kg reference flow | calibration; logs; actual utility contract/provider; no assumed CN/high-voltage or heat identity |
| `cp_waste` | `waterborne_treatment` | each waste | transfer/analysis and stock | each atomic stream; wet/dry mass; water; wood/metal fraction; Cu/CrIII/CrVI/As; actual other species; opening/closing storage; transport; receiver/authorization and actual treatment | Weigh each separate stream; distinguish clean pre-treatment residues, CCA wood, liquor, sludge, wastewater and packaging. Analyse composition and document actual fate; constituent subledger is not another total waste exchange | kg | each generation/transfer and stock count | same campaign as Q and actual downstream treatment | contained on-site streams through verified receiver | per 1 kg reference flow | scales; lab; consignment; current receiver acceptance and treatment evidence |
| `cp_air` | `waterborne_treatment` | each air emission | source tests/rate integral | source/stage; outlet and fugitive rate; actual operating time; controls; species/CAS; Cu/As elemental basis; chromium valence; compatible PM size fractions; detection limits; wood carbon loss | Integrate actual post-control and fugitive species releases across preparation, vacuum, tanks, drip pad and storage. Determine actual wood VOC species separately; alpha-pinene is conditional, not a total-VOC proxy. Keep total PM/VOC indicators distinct from individual substances and metal mass | kg | representative tests and complete operating intervals | all relevant sources and failed/idle cycles in same campaign | outdoor air, unspecified subcompartment; change identity for a known different subcompartment | per 1 kg reference flow | test/calibration; measured operating conditions; gap and detection-limit disclosure |
| `cp_water` | `waterborne_treatment` | each water release and vapor | effluent and independent water ledger | destination; interval; actual liquid volume/flow; flow-weighted species concentrations; detection limit; inlet/retained/condensed water; runoff/drips; liquid tanks; wood-phase water; weather; stocks | Integrate compatible concentration with actual discharge flow/time and units. Distinguish sewer transfer from direct fresh-water discharge. Establish evaporation from independently constrained water accounts, not all drying mass loss or a residual shared with unknown chemical/wood losses | kg | each discharge and representative sampling | same campaign as Q and stock horizon | actual receiving compartment and contained runoff system | per 1 kg reference flow | meters; laboratory; recipient; independently bounded water residual/uncertainty |
| `cp_pack` | `waterborne_treatment` | each packaging article | first physical receipt/custody/stock | receipt ID/time/origin; atomic material/form/type; direction; measured original units; procurement; burden owner; custody; cohort; provider; prior burden vector; opening/closing empty/raw/WIP/FG/reusable stocks; gross outward S; other external outward EO; waste W; same-item returns ER; internal issues/reuse | Distinguish purchases P (including whole-component purchases without separate invoices) from genuine first non-purchase external receipts N such as loan/rental/commissioned or non-purchase goods-accompanying articles. Put N with full physical history on actual receiving side. ER requires that same item's earlier outward S; first borrowed receipt is not ER. Internal issue/reuse cancels. Match same-cohort physical and inherited-vector ledgers; unknown history is not zero | kg | each receipt/issue/return and stock count | complete campaign plus connected reusable history | all actual custody/burden owners and provider boundaries | per 1 kg reference flow | receipts; custody/cohort IDs; measured tare; vector provenance; reconciliation; no whole-container/component manufacturing duplication |
| `cp_qc` | `waterborne_treatment` | purchased inspection service | service/lot records | provider; exact test scope; actual Qc and native unit or measured service hours H; laboratory lot; acceptance/retest/return; underlying energy/reagents coverage; linked burden vector | Record service in its actual declared supplier unit and convert only with measured compatible scope. Choose one actual service provider once; exclude any foreground reagents/energy already included by it. Allocate to real inspected cohorts including failed tests | h | each commissioned service | same campaign including retained/returned lots | actual external service scope | per 1 kg reference flow | service report; actual billed/performed scope; calibration; no invented time per test |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | For each exchange, normalized amount = attributable current-production exchange total / independently locked unique first-acceptance mass Q; final product = 1 kg. First convert original units, integrate actual rates, subdivide dedicated activities and attribute each shared exchange by its actual cause. Apply only a justified residual burden share A before the single division. Gross physical V is never multiplied by A. Verify Q with acceptance_event_bridge, not dispatch plus closing FG alone. Opening WIP carries its prior vector into its first-accepted cohort. Include failed-charge, loss, scrap, downgrade and rework activities in their evidenced cohort attribution; no activity disappears when saleable mass falls. For work on previously accepted opening FG, purchased FG or returned/reaccepted wood, retain the incremental vector with its original cohort and original acceptance basis; do not put it in a new cohort numerator or create new Q. If that original basis or vector is unavailable, keep the activity separately unresolved. Q = 0 leaves an unnormalized load/stock ledger, not zero burden. | raw records; stage attribution; stock vectors; cp_lot | per 1 kg reference flow |  |
| `acceptance_event_bridge` | first-accepted treated-roundwood cohort | Q = sum of independently measured unique first-acceptance event masses. Cross-check Q = D_new + FG_new + L_new for that campaign cohort with zero opening first-accepted cohort stock. D_new is net dispatch after linked returns, FG_new is closing accepted FG, and L_new covers every other net post-acceptance destination: measured losses, scrap, downgrade, net returns held outside accepted FG, and closing transfer back to rework/WIP or other custody. All terms are kg on the same locked whole-product acceptance basis, including dry wood, retained water and non-water CCA material, excluding packaging; portions are mutually exclusive and exhaustive. A returned piece is removed from D_new and assigned once to its actual closing FG/WIP/other destination, never also added as an extra loss. Internal gross loops and reacceptance do not add Q or a second destination. Reconcile later moisture or CCA-loading changes with measured component records; separate later additions from acceptance-origin material and record actual losses once. Convert measured piece/count/solid-volume records only with compatible actual mass/density and geometry/state evidence; retention-assay-zone kg/m3 is not whole-log mass. Q = D_new + FG_new is allowed only when every other post-acceptance destination is evidenced absent and L_new = 0. For 100 kg first accepted, 60 kg net dispatched, 30 kg closing FG and 10 kg post-acceptance loss, Q remains 100 kg, not 90 kg. Opening FG, purchased FG and retest/reacceptance add no Q; burdens remain with their original cohort. An unexplained gap stays unresolved, never changes Q or becomes assumed zero loss. | cp_lot; cp_inputs; cp_chemicals; cp_water; cp_waste | locked Q and complete cohort destination bridge |  |
| `constituent_supply` | whole liquor composition subledger | Constituent equivalent = measured whole liquor quantity x its actual verified fraction on the declared basis; retain remaining identified carrier/water and undisclosed composition separately. These are nested checks, not additional purchases. Deduct unused closing stock using the actual inherited vector rather than a new average; preserve recovered-bath history. | supplier lot; complete composition; cp_chemicals | linked kg and elemental-equivalent records |  |
| `balance_separate` | physical stage ledger | Opening stock + external input + internal receipt = gross external output + internal issue + closing stock + independently quantified loss for each compatible phase/element. For the integrated boundary including FG storage, count actual external dispatch/transfers and all closing raw/WIP/FG stocks; first acceptance is an internal state change, not an additional external output. Keep this physical ledger separate from acceptance_event_bridge and burden share A; cancel internal rework/return loops at the integrated boundary. Close dry wood, actual water, Cu, Cr, As and carbon independently; final wet wood = dry wood + retained water + retained non-water material on compatible measured bases. Record later water loss or chemical additions/removals on their actual physical basis without relocking Q. Reactions change speciation, not element totals. Do not sum wood/water/element subledgers or solve several unknown releases with one residual. Every physical flow occupies one term only; gross external output excludes any loss already itemized separately on that balance. | cp_inputs; cp_chemicals; cp_lot; cp_water; cp_waste | unallocated balances, residuals and uncertainty |  |
| `species_release` | elementary releases | Integrate species mass rate over actual operating time, or concentration multiplied by compatible measured flow and time, retaining unit conversions and sampling scope. Elemental Cu/As and Cr-state masses are not oxide/whole-liquor masses. Unknown Cr valence is unresolved; do not fabricate a split. AP-42 empty-cell artificial-conditioning/final-vacuum factors do not quantify this full-cell plant. | cp_air; cp_water | actual kg of each substance to its compartment | `epa-ap42-wood-preserving-1999` |
| `pm_partition` | pm25; pmcoarse; pmover10 | Only with compatible cumulative tests, PM2.5–PM10 = PM10 - PM2.5 and PM>10 = total PM - PM10; retain uncertainty and justified nonnegative results. Do not add cumulative total PM/PM10 again. Metal contents are a speciation subledger of aerosol, not independent additive total solids; document any LCIA overlap. | compatible particle tests; cp_air | non-overlapping particle kg |  |
| `pack_balance` | packaging stocks and transfers | For each atomic article/cohort, opening physical stock + first external purchases P + first external non-purchase receipts N + verified same-item returns ER = closing physical stock + gross outward S + other outward EO + waste W, with internal issues/reuse cancelled. Include all empty/raw/WIP/FG/reusable states. Carry actual prior burden vectors and add newly incurred handling/cleaning/replacement once; new accepted closing FG packaging belongs to the current production vector already. Preserve physical outward/return totals independently of procurement and burden ownership. | cp_pack; cohort and provider vectors | reconciled physical quantities and attributed packaging vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_recipe` | preservative | Obtain actual whole-liquid manufacturing provider, full composition and phase/analytical basis. Historic SDS supports a real chemistry route, not a numerical factory recipe or today's complete disclosure. Missing upstream UUID/provider is a specific data gap; incompatible chemistry requires route review. | cp_chemicals; arch-tanalith-oxide-2016 |
| `dq_gate` | final wood | Distinguish retention assay zone, penetration, chromium-fixation and surface-residue acceptance from whole-piece mass, moisture and quantity. Actual release/rework criteria are product/site specific; a brand, color, elapsed hold or historical standard does not prove acceptance or current regulatory permission. | cp_lot; tpaa-treatment-guidelines; usda-wood-handbook-2021 |
| `dq_stocks` | complete campaign | Reconcile raw/unused/WIP/new FG/old FG/purchased FG and reusable stocks by physical cohort and each flow's inherited vector. Include failed batches, startup, shutdown, idle, cleaning and all post-acceptance loss/return/rework activities. Opening FG, purchased FG, internal returns and retesting/reacceptance create no new Q. Reconcile unique events to disjoint exhaustive D_new, FG_new and L_new on the locked acceptance basis; keep physical stock/component ledgers separate. Preserve actual quantity, burden, identity and source-data gaps separately. | cp_inputs; cp_lot; cp_pack; cp_qc |
| `dq_coverage` | all exchanges | Cover all actual species, control sources and destinations; separately disclose missing assays, detection limits, provider scope and unknown residuals. Total PM, VOC, COD, NOx or total Cr are indicators with their own basis, not substitute substance identities. No default density, recipe, yield, price, per-machine or packaging mass is supplied. | all collection protocols |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_identity` | Exactly one finished Product output is linked by finished; check full botanical species, rough whole-log shape, aqueous CCA formulation, route, gate and provider. Recheck native full name/comments, type, property/unit and official Chinese displays for each adopted UUID. Generic Wood material requires explicit qualified exchange compatibility; it grants neither provider approval nor automatic matching. |  |
| `validate_balances` | Require positive independently measured unique first-acceptance Q for a per-kg dataset and the same EN/ZH acceptance basis. Verify event deduplication and Q = D_new + FG_new + L_new using mutually exclusive exhaustive same-cohort records, including all net returns, losses, scrap, downgrades and closing rework/WIP; reject the two-term shortcut unless every other post-acceptance destination is evidenced absent. Verify measured moisture/CCA-loading and volume/mass conversions, no duplicate destination/adjustment, no Q from opening/purchased FG or reacceptance, and no forced residual closure. Keep actual physical V independent of A and Q, including FG stock without adding first acceptance again, with linked phase/element/wood/water/carbon ledgers and all inherited vectors. Preserve Q = 0 campaigns and inspection Qc/H or failed/rework burdens without inventing production. |  |
| `validate_releases` | Distinguish contained waste, direct fresh-water discharge and air releases; actual Cu/As/Cr-state and wood VOC/biogenic CO2 identities, with post-control/fugitive coverage. Retain biogenic CO2 in LCI when actually released, without repeating inherited forestry uptake or assigning an impact-method credit. No nested PM duplication or assumed zero from low general waterborne emissions. | `epa-ap42-wood-preserving-1999` |
| `validate_claims` | Verify current site/date/product pesticide-use requirements, actual release specification and receiver permission with applicable documents. Historical technical sources do not confer current legal authorization, safety, treatment performance or disposal permission. Disclose remaining data gaps and scientific uncertainty; this method is not a compliance certificate. |  |
| `validate_packaging` | Check first external physical receipt separately from invoice/procurement and burden ownership, physical N on receiving side, genuine same-item ER, all stock states and preserved vectors; no unknown-history zero or duplicate container/component production. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground manufacture of selected CCA-preserved radiata pine rough whole roundwood; upstream-connected only with matched complete links |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing of the defined new wholewood/whole-liquor full-cell and air-conditioned product with actual site data and explicit native exchange compatibility |
| excluded_use | Whole CPC 31310 coverage; sawn/profile/sleeper substitution; other species/preservatives; service-life/safety equivalence; legal certification; unsupported cradle-to-gate or carbon-neutral claims |
| required_metadata | Full required qualifiers; actual provider once per exchange; stage/utility/chemistry and stock history; release criteria; allocation and denominator; packaging custody; downstream waste treatment |
| required_quality_disclosure | Scientific review status; actual data and UUID/provider gaps separately; composition/phase/speciation; unit and assay-zone scope; measurement coverage and uncertainty; inherited vectors and zero-output campaigns |
| update_trigger | Changed species/form/preservative, supplier composition, conditioning/heat, gate, utility, controls, acceptance, stock ownership, allocation, destination or new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `portland-pine-process` | literature | Portland Pine Products, [Our Process](https://www.portlandpine.com.au/our-process-products/our-process), complete undated manufacturer webpage, acquired 2026-10-27. | Existence of radiata roundwood, peeling/air seasoning, full-cell CCA treatment, recovery and fixation; industrial route context only; no claim of a particular chemical supplier, allocation authority or default plant quantities |
| `arch-tanalith-oxide-2016` | literature | Arch Wood Protection (SA) / Lonza, Tanalith C Oxide Liquor MSDS, September 2016 revision 09, [complete 6-page supplier document hosted by timber producer](https://www.geelhoutvlei.co.za/wp-content/uploads/2025/07/TANALITH_C_MSDS.pdf), especially sections 1–2, 9–10, 13 and 16. | Positive existence of an industrial aqueous CCA oxide preparation for pressure impregnation; historical composition/phase context, not today's recipe, complete composition, environmental factor or legal authorization |
| `tpaa-treatment-guidelines` | extension_guidance | Timber Preservers Association of Australia, [Technical Note 11: Treatment Process Guidelines](https://www.portlandpine.com.au/uploads/wp-content/TPAA-tech-note-11-Treatment-Process-Guidelines.pdf), full 2-page retained undated edition, especially page 2. | Qualitative quality-record context; actual solution-strength/chemical-use monitoring, segregation, quarantine and drip-pad records; no adoption of current standard clauses or numeric targets |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory (2021), Wood handbook—wood as an engineering material, FPL-GTR-282, [official complete handbook](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf); chapter 15 pp. 15–3, 15–13–15–17 and 15–21–15–23, with adjacent context; chapters 4/13 moisture context. | Preparation, waterborne pressure-route distinctions, CCA fixation and retention-zone versus whole-product measurement; no Southern Pine table values, default density, recipe, timing, performance or present legal approval |
| `epa-ap42-wood-preserving-1999` | official_guidance | US EPA, [AP-42 section 10.8 Wood Preserving](https://www.epa.gov/sites/default/files/2020-10/documents/c10s08.pdf), August 1999, complete 12-page section; process/emission context pp. 10.8–1–10.8–7 and table 10.8–2 including footnote. | Source-point coverage and the limited applicability of historic CCA empty-cell factors; no factor adopted for this full-cell route or assumed chromium-valence split |
| `unsd-cpc-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025, [official English structure CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv), code 31310 and neighbouring rough/sawnwood classes. | Classification scope and narrower relation only; not a treatment recipe or performance specification |
| `jrc-ilcd-allocation-2010` | official_guidance | European Commission JRC (2010), [ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf), sections 7.9.2–7.9.3, printed pp. 255–272. | Attributional subdivision, exchange-specific determining physical causality, residual same-condition process-gate market values, and conservation of allocated inventory; no default physical key, full-conformance claim or adoption of recycling/substitution formulae |
