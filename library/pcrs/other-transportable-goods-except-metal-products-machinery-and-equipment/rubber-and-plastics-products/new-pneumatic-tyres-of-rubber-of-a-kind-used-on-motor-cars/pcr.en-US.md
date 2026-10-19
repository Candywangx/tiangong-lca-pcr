---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.new-pneumatic-tyres-of-rubber-of-a-kind-used-on-motor-cars
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Steel-belted radial passenger-car tyre manufacture through net dispatch

## 1. Scope and Applicability

This method covers new pneumatic rubber passenger-car tyres with a textile radial carcass, steel belt package, steel bead cores and a synthetic-rubber airtight innerliner. It covers actual compound preparation and component manufacture, green-tyre building, press curing, cooling, final inspection, storage, packaging and net dispatch at the declared factory gate. Continental supplies the coherent structural/process route; EPA independently supports rubber/additive roles and process emission measurement. The bromobutyl liner is a declared route choice supported by the supplier material role, not a universal tyre recipe. Sources do not describe one identical factory or SKU.

Exclude motorcycle/bicycle tyres, truck/bus/agricultural/aircraft tyres, solid tyres, separate inner tubes/treads/flaps, retreads and tyre recycling; also exclude bias construction and special run-flat, self-sealing or foam-lined designs pending an explicit method extension. Upstream E-SBR and greige tyre-cord methods end at different intermediate products and cannot replace this finished-tyre method. A classification leaf or a use label alone cannot establish method identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.new-pneumatic-tyres-of-rubber-of-a-kind-used-on-motor-cars |
| classification_refs | CPC 3.0 36111; narrower |
| covered_products | New tubeless steel-belted radial rubber passenger-car tyres |
| excluded_products | Exclude motorcycle/bicycle tyres, truck/bus/agricultural/aircraft tyres, solid tyres, separate inner tubes/treads/flaps, retreads and tyre recycling; also exclude bias construction and special run-flat, self-sealing or foam-lined designs pending an explicit method extension. Upstream E-SBR and greige tyre-cord methods end at different intermediate products and cannot replace this finished-tyre method. A classification leaf or a use label alone cannot establish method identity. |
| representative_product | One declared size/model, polyester radial carcass, nylon bandage, steel belts and bead cores, bromobutyl innerliner |
| production_route | The foreground is one consolidated integrated tyre line, not a purchased-finished-tyre packing operation. Stage ledgers remain separate inside this unit process: receiving/weighing and recipe-specific nonproductive/final mixing; calendering steel cord, textile cord and liner; extrusion/cooling/cutting of tread and sidewall plus bead winding/coating/apex; carcass and belt/tread building; curing and cooling; visual/X-ray/uniformity inspection and actual finishing/rework; finished warehousing, packaging, handling and dispatch. Retain each compound and component lot internally; these are internal transfers, not extra purchases or extra final output. Separate material, utility, emissions and stock owners below preserve this stage detail. |
| market_state | New cured, inspected accepted tyre actually net dispatched, excluding wheel/rim and packaging mass from tyre net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a new accepted pneumatic tyre for a declared passenger-car fitment; no asserted vehicle-kilometre service equivalence |
| How much | 1 item of the declared finished tyre |
| How well | Actual declared size/load/speed, construction and factory acceptance results; no invented universal performance threshold |
| How long or cycle | One production and net-supply cycle; use life is outside this manufacturing boundary |
| reference_flow_link | finished_tyre |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tire `11c2e97a-624f-41de-957d-543cddb777ef` |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | passenger-car application and steel-belted radial/tubeless construction; size/model and load/speed rating; actual carcass/belt/bead/innerliner materials and supplied state; each compound recipe revision and purchased-formulation basis; factory/site/time and actual utility configuration; net-dispatch gate and unique accepted delivery cohort Q; opening/closing WIP and finished-stock quantities with carried burdens; return/rework/reinspection attribution and waste destinations; reference identity limits and native classification debt; actual packaging/handling/warehouse boundaries and measured net tyre mass |

Q is the positive net number of unique accepted new tyres actually supplied across the declared factory dispatch gate for one matched product/route/state cohort, not newly released production. Record opening/closing finished stock and their full carried burdens, first quality-release output, outward deliveries, returns, scrapping and rework separately. An undelivered accepted tyre is not in Q. Returned tyres retain their identity and original burdens; reinspection is not new production. Reverse the original delivery attribution for returns and reconcile redispatch by unique IDs so no tyre is counted twice. A factory delivery dataset cannot assume quality release equals delivery.

Native identity is Tire, a Product flow with Number of items, production mix at plant. Its name has no fixed radial structure, passenger-car grade, CAS, geography or locationOfSupply; its comment covers a broad wheel-rim tyre concept including metal and rubber. The leaf classification says Other new pneumatic tyres (36113), inconsistent with the broad physical name and this explicitly qualified passenger-car subset; retain that classification debt and never infer a positive mapping. Use only for the physically verified new rubber passenger-car radial tyre here, not metal, solid, retread or an intermediate. Native identity supplies neither a supplier recipe, a regional background dataset, service life, tyre mass nor impact quantity. Actual site, construction, size, supplied state and provider compatibility require independent records.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | item denotes the exact native reference unit Item(s), reference factor 1. Count actual individual tyres, not axles, pairs, sets, rims or tonnes; Q comes from cp_delivery. |
| net_mass | physical balance | Mass | kg | Measure net tyre mass by calibrated weighing and configuration, excluding rims and all packaging; retain physical kg ledger separately from the count reference. Do not assign a universal tyre weight or infer density from a secondary coefficient. |
| one_normalization | all inventory rows | Declared row property | declared row unit | Collection retains raw period numerators in cp_recipe/cp_reinforcement/cp_utilities/cp_waste/cp_emissions/cp_delivery/cp_stock. Only calc_normalize divides matched A_i by Q once. Card formulas and aggregation_rule repeat this same reporting operation, not sequential divisions. |
| formulation_basis | supplied formulations | Mass | kg | Each purchased formulation is one whole supplied input. Active contents, water, oil and coating are subledgers; add only independently acquired dilution/blend ingredients as external inputs. Internally compounded rubber is not purchased again. |
| integrated_volume | gas and liquid measurements | Volume | m3 | For rate readings integrate actual rate over its matching time; already integrated meter volumes are not multiplied by time again. Record standard/actual temperature, pressure and dry/wet gas basis before conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased identified dry elastomers, individual fillers/cure preparations, pretreated reinforcement cord/wire and actual utilities entering the integrated tyre line |
| starting_condition_role | foreground_start |
| product_classification_scope | Qualified steel-belted radial passenger-car tyres, narrower than CPC 3.0 36111 |
| recursive_input_rule | No purchased finished tyres substitute for this foreground. Returned own tyres carry original burdens and real rework once; do not recurse into new virgin production or double count internal compound/component transfers. |
| upstream_dataset_requirement | Independently match each actual supplied polymer/formulation/reinforcement and utility with its geography, route, grade, reference property and acquisition boundary; include upstream supply and transport once. UUID identity alone does not supply its burden. |
| disclosure | Declare plant/time, all stage owners, actual recipe/BOM and purchased treatments, utility generation boundary, finished-stock/WIP carried burdens, delivery/return reconciliation, packaging and exclusions. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | tyre_line | The foreground is one consolidated integrated tyre line, not a purchased-finished-tyre packing operation. Stage ledgers remain separate inside this unit process: receiving/weighing and recipe-specific nonproductive/final mixing; calendering steel cord, textile cord and liner; extrusion/cooling/cutting of tread and sidewall plus bead winding/coating/apex; carcass and belt/tread building; curing and cooling; visual/X-ray/uniformity inspection and actual finishing/rework; finished warehousing, packaging, handling and dispatch. Retain each compound and component lot internally; these are internal transfers, not extra purchases or extra final output. Separate material, utility, emissions and stock owners below preserve this stage detail. | continental-tyre-production; continental-radial-components |
| boundary_delivery | tyre_line | Q is the positive net number of unique accepted new tyres actually supplied across the declared factory dispatch gate for one matched product/route/state cohort, not newly released production. Record opening/closing finished stock and their full carried burdens, first quality-release output, outward deliveries, returns, scrapping and rework separately. An undelivered accepted tyre is not in Q. Returned tyres retain their identity and original burdens; reinspection is not new production. Reverse the original delivery attribution for returns and reconcile redispatch by unique IDs so no tyre is counted twice. A factory delivery dataset cannot assume quality release equals delivery. | continental-tyre-production |
| boundary_integrity | tyre_line | Include real failed/zero-output runs, idle/cleanup, rework, emission-control and all included warehouse/pack/handling burdens. Extend separate atomic cards for every actual ingredient, fuel, refrigerant, waste and emitted species absent from the exemplars. Conditional absence requires records, not a default zero. | continental-tyre-production; epa-rubber-process-2008 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tyre_line | Integrated tyre manufacture and net dispatch | required | Declared steel-belted radial route, all stages in consolidated boundary | foreground | finished_tyre |

The foreground is one consolidated integrated tyre line, not a purchased-finished-tyre packing operation. Stage ledgers remain separate inside this unit process: receiving/weighing and recipe-specific nonproductive/final mixing; calendering steel cord, textile cord and liner; extrusion/cooling/cutting of tread and sidewall plus bead winding/coating/apex; carcass and belt/tread building; curing and cooling; visual/X-ray/uniformity inspection and actual finishing/rework; finished warehousing, packaging, handling and dispatch. Retain each compound and component lot internally; these are internal transfers, not extra purchases or extra final output. Separate material, utility, emissions and stock owners below preserve this stage detail.

### Process: Integrated tyre line (`tyre_line`)

#### Inputs

##### Product flows

###### Natural rubber, dry bale (`natural_rubber`)

Record actual dry-rubber grade and supplied bale mass separately from each synthetic polymer; assay moisture without adding it as another procurement.

- Selected flow: Natural rubber, dry bale
- Flow property / unit: Mass / kg
- Amount rule: A_natural_rubber / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Styrene-butadiene rubber, dry bale (`sbr`)

Record actual SBR polymerization route, bound styrene, oil extension and compound uses. Neither SBS nor an SBR-latex or sealing-cover record substitutes for this dry polymer.

- Selected flow: Styrene-butadiene rubber, dry bale
- Flow property / unit: Mass / kg
- Amount rule: A_sbr / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Polybutadiene rubber, dry bale (`br`)

Separate BR from SBR and natural rubber; retain actual cis content/grade, oil extension and supplier mass. No fixed percentage is specified.

- Selected flow: Polybutadiene rubber, dry bale
- Flow property / unit: Mass / kg
- Amount rule: A_br / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Bromobutyl rubber, dry bale (`biir`)

This chosen innerliner route uses bromobutyl rubber; confirm actual grade and supplied formulation. A butyl-named record declaring butadiene/styrene copolymerization contradicts this identity and is not selected. Chlorobutyl is a different material, not an automatic synonym.

- Selected flow: Bromobutyl rubber, dry bale
- Flow property / unit: Mass / kg
- Amount rule: A_biir / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `exxon-innerliner-materials`

###### Carbon black, reinforcing grade (`carbon_black`)

Keep each actual reinforcing grade and recipe amount identifiable; different grades become separate cards in a concrete dataset. Do not use tyre pyrolysis char as virgin carbon black.

- Selected flow: Carbon black, reinforcing grade
- Flow property / unit: Mass / kg
- Amount rule: A_carbon_black / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Precipitated amorphous silica (`silica`)

Record where this filler is actually used, its supplied moisture and grade; not interchangeable with carbon black or crystalline quartz. No marketing mass share is a recipe.

- Selected flow: Precipitated amorphous silica
- Flow property / unit: Mass / kg
- Amount rule: A_silica / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-radial-components`

###### Sulfur-functional organosilane coupling-agent formulation (`silane`)

Conditional on the actual silica recipe. Record one identified supplied commercial formulation in full; active silane and carrier are composition subledgers, not duplicate purchases. Identify actual species before matching its UUID.

- Selected flow: Sulfur-functional organosilane coupling-agent formulation
- Flow property / unit: Mass / kg
- Amount rule: A_silane / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-radial-components`

###### Rubber process oil (`oil`)

Use actual supplied oil grade and mass. Oil already inside purchased oil-extended rubber or masterbatch is not separately purchased here.

- Selected flow: Rubber process oil
- Flow property / unit: Mass / kg
- Amount rule: A_oil / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Hydrocarbon tackifier resin (`resin`)

Conditional on an identified actual formulation; resin chemistry and solid supplied state must be verified, not inferred from total plasticizer share.

- Selected flow: Hydrocarbon tackifier resin
- Flow property / unit: Mass / kg
- Amount rule: A_resin / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-radial-components`

###### Zinc oxide (`zinc_oxide`)

Record actual supplied grade, assay and weighed amount for the cure system; no fixed cure loading or reaction-water yield follows from its presence.

- Selected flow: Zinc oxide
- Flow property / unit: Mass / kg
- Amount rule: A_zinc_oxide / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Stearic acid (`stearic_acid`)

Conditional actual cure-system ingredient; distinguish supplied technical fatty-acid formulation from a pure-species identity before adopting a provider.

- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: A_stearic_acid / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Sulfur vulcanizing-agent formulation (`sulfur`)

Record one actual supplied sulfur grade/formulation, including any oil coating or carrier. Sulfur/active content is an internal assay ledger, not an extra input; no universal sulfur-to-water stoichiometry is imposed.

- Selected flow: Sulfur vulcanizing-agent formulation
- Flow property / unit: Mass / kg
- Amount rule: A_sulfur / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Benzothiazolesulfenamide accelerator formulation (`accelerator`)

Conditional on the actual cure recipe; identify the specific accelerator and whole supplied preparation. Additional accelerator species require separate cards; no fixed recipe is prescribed.

- Selected flow: Benzothiazolesulfenamide accelerator formulation
- Flow property / unit: Mass / kg
- Amount rule: A_accelerator / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Amine rubber-antioxidant formulation (`antioxidant`)

One actual supplier preparation, conditional on recipe. Its composition/active content and every separately supplied antioxidant must be distinguished.

- Selected flow: Amine rubber-antioxidant formulation
- Flow property / unit: Mass / kg
- Amount rule: A_antioxidant / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Paraffin antiozonant wax (`wax`)

Include only when actually compounded; measure the supplied wax grade separately from process oil and amine antioxidant.

- Selected flow: Paraffin antiozonant wax
- Flow property / unit: Mass / kg
- Amount rule: A_wax / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-radial-components`

###### Pretreated high-strength steel tyre cord (`steel_cord`)

Record cord construction, coating, received state and mass for steel belts. Purchased pretreated cord includes its upstream treatment; do not count its metal/coating a second time.

- Selected flow: Pretreated high-strength steel tyre cord
- Flow property / unit: Mass / kg
- Amount rule: A_steel_cord / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_reinforcement`
- Sources: `continental-tyre-production`; `continental-radial-components`

###### Tyre bead steel wire (`bead_wire`)

Bead-core wire is separate from steel belt cord; retain actual coating, wire dimensions and winding/covering records.

- Selected flow: Tyre bead steel wire
- Flow property / unit: Mass / kg
- Amount rule: A_bead_wire / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_reinforcement`
- Sources: `continental-tyre-production`; `continental-radial-components`

###### Adhesion-treated polyester tyre cord fabric (`polyester_cord`)

Chosen textile-carcass material. Record exact treatment and fabric construction; supplier treatment is upstream, rubber calendering remains foreground. Do not substitute greige nylon fabric merely because it has a tyre-cord name.

- Selected flow: Adhesion-treated polyester tyre cord fabric
- Flow property / unit: Mass / kg
- Amount rule: A_polyester_cord / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_reinforcement`
- Sources: `continental-tyre-production`; `continental-radial-components`

###### Adhesion-treated nylon tyre cord (`nylon_cord`)

Selected winding-bandage reinforcement, kept separate from polyester carcass cord; retain polymer type, treatment, linear density and supplied mass.

- Selected flow: Adhesion-treated nylon tyre cord
- Flow property / unit: Mass / kg
- Amount rule: A_nylon_cord / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_reinforcement`
- Sources: `continental-radial-components`

###### Aqueous silicone tyre-release emulsion (`release_emulsion`)

Conditional on actual release-agent use. Record the complete identified purchased emulsion and its actual dilution water separately; water already in the emulsion is not purchased again. If the plant uses different chemistry, replace with a separately verified atomic formulation.

- Selected flow: Aqueous silicone tyre-release emulsion
- Flow property / unit: Mass / kg
- Amount rule: A_release_emulsion / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`

###### Rubber bonding cement formulation (`cement`)

Conditional on actual building/repair use, not compulsory solvent use. Record one whole supplied formulation, its solids/solvent assays and recovery; add each independently bought ingredient only when actually blended onsite.

- Selected flow: Rubber bonding cement formulation
- Flow property / unit: Mass / kg
- Amount rule: A_cement / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_recipe`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Process water (`water`)

Meter actual fresh cooling make-up, cleaning and dilution water; recirculated water is an internal ledger, not repeated external withdrawal. Record the real supply source.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_water / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `continental-tyre-production`

###### Electricity (`electricity`)

Meter the integrated line, including mixing, mills, calenders, extruders, bead making, building, presses, cooling, inspection, compressor/chiller, pollution control, warehouse and electric handling. Split actual stage readings without summing the same main and submeter twice.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_electricity / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Industrial steam (`steam`)

Record actual external steam supplied for the declared press-heating route, with pressure, temperature and condensate-return boundary. Internally generated steam is an internal transfer: replace external steam purchase with actual separate fuel/feedwater/boiler-emission cards and include boiler losses; never count both.

- Selected flow: Industrial steam
- Flow property / unit: Mass / kg
- Amount rule: A_steam / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `epa-rubber-process-2008`

###### Nitrogen gas (`nitrogen`)

Conditional on actual press/tyre inflation use; record supplied gas mass, leaks and recovery. Onsite air compression instead uses actual electricity and air-system records, not an invented nitrogen input.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: A_nitrogen / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `continental-tyre-production`

###### Diesel fuel (`diesel`)

Conditional on diesel handling/dispatch vehicles within this gate; measure actual fuel, retain combustion emissions and do not add it for electric forklifts.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: A_diesel / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources:

###### Polyethylene wrapping film (`film`)

Actual dispatch packaging only; measure net applied film and scrap separately. Absence requires shipment evidence, not silent omission.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_film / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_delivery`
- Sources:

###### Adhesive paper tyre label (`label`)

Record one supplied label including adhesive and actual backing loss, without separately procuring its internal components.

- Selected flow: Adhesive paper tyre label
- Flow property / unit: Mass / kg
- Amount rule: A_label / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_delivery`
- Sources:

###### Wooden transport pallet (`pallet`)

Conditional on actual pallet dispatch; retain return/reuse trips and attributable production/repair burden with its own measured service life. No arbitrary reuse count.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A_pallet / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_delivery`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Steam condensate (`condensate`)

If returned outside the boundary, retain actual returned mass and enthalpy and supplier return convention; it is not tyre product or reaction water. Internal recirculation cancels.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_condensate / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `epa-rubber-process-2008`

###### Net supplied accepted passenger-car radial tyre (`finished_tyre`)

Native identity is Tire, a Product flow with Number of items, production mix at plant. Its name has no fixed radial structure, passenger-car grade, CAS, geography or locationOfSupply; its comment covers a broad wheel-rim tyre concept including metal and rubber. The leaf classification says Other new pneumatic tyres (36113), inconsistent with the broad physical name and this explicitly qualified passenger-car subset; retain that classification debt and never infer a positive mapping. Use only for the physically verified new rubber passenger-car radial tyre here, not metal, solid, retread or an intermediate. Native identity supplies neither a supplier recipe, a regional background dataset, service life, tyre mass nor impact quantity. Actual site, construction, size, supplied state and provider compatibility require independent records.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: `cp_delivery`
- Sources: `continental-tyre-production`; `continental-radial-components`

##### Waste flows

###### Uncured tyre-rubber scrap (`uncured_scrap`)

Only externally transferred uncured scrap; internal trim return carries its existing ingredients and extra remilling burden without becoming a second purchase.

- Selected flow: Uncured tyre-rubber scrap
- Flow property / unit: Mass / kg
- Amount rule: A_uncured_scrap / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Rejected cured rubber tyre (`cured_reject`)

Record actual rejects, destructive-test tyres and scrapped returns by ID and mass; none is accepted delivered Q.

- Selected flow: Rejected cured rubber tyre
- Flow property / unit: Mass / kg
- Amount rule: A_cured_reject / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Tyre steel-cord scrap (`steel_scrap`)

Measure externally transferred belt-cord cutting scrap; bead-wire scrap is a distinct stream if present and requires its own card.

- Selected flow: Tyre steel-cord scrap
- Flow property / unit: Mass / kg
- Amount rule: A_steel_scrap / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Polyester tyre-cord offcuts (`textile_scrap`)

Measure polyester cutting waste separately; actual nylon offcuts must be added as a different atomic stream.

- Selected flow: Polyester tyre-cord offcuts
- Flow property / unit: Mass / kg
- Amount rule: A_textile_scrap / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Captured tyre-compounding filter dust (`filter_dust`)

One actual mixed captured filter-dust waste with measured composition and destination; not the same exchange as uncaptured carbon-black or silica emissions.

- Selected flow: Captured tyre-compounding filter dust
- Flow property / unit: Mass / kg
- Amount rule: A_filter_dust / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Tyre-process wastewater (`effluent`)

Record actual externally treated wastewater with volume/mass and pollutant analyses. COD does not identify an emitted chemical species or establish missing reaction water.

- Selected flow: Tyre-process wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_effluent / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Waste polyethylene film (`film_waste`)

Record actual packaging-film waste and destination, not the net film supplied with tyres.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: A_film_waste / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Waste silicone-coated label backing paper (`backing_waste`)

Separate actual backing-paper waste from the applied supplied label.

- Selected flow: Waste silicone-coated label backing paper
- Flow property / unit: Mass / kg
- Amount rule: A_backing_waste / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`; `epa-rubber-process-2008`

###### Nylon tyre-cord offcuts (`nylon_scrap`)

Separate actual winding/cutting nylon waste from polyester waste; retain treatment and receiving destination.

- Selected flow: Nylon tyre-cord offcuts
- Flow property / unit: Mass / kg
- Amount rule: A_nylon_scrap / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-radial-components`

###### Tyre bead-wire scrap (`bead_scrap`)

Actual externally transferred bead-wire scrap is distinct from belt-cord scrap.

- Selected flow: Tyre bead-wire scrap
- Flow property / unit: Mass / kg
- Amount rule: A_bead_scrap / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `continental-tyre-production`

##### Elementary flows

###### Carbon black (`carbon_black_air`)

Actual uncaptured carbon-black release to air from handling/mixing. Use species/size and capture data; captured dust is waste, not an air release.

- Selected flow: Carbon black
- Flow property / unit: Mass / kg
- Amount rule: A_carbon_black_air / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-process-2008`

###### Amorphous silicon dioxide (`silica_air`)

Actual silica release to air where silica is handled; separate from carbon black and total particulate indicator totals.

- Selected flow: Amorphous silicon dioxide
- Flow property / unit: Mass / kg
- Amount rule: A_silica_air / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-process-2008`

###### Carbon disulfide (`cs2_air`)

Conditional measured process release to air from actual rubber chemistry; sulfur in a recipe does not set its yield. No generic EPA factor is adopted.

- Selected flow: Carbon disulfide
- Flow property / unit: Mass / kg
- Amount rule: A_cs2_air / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-process-2008`

###### Toluene (`toluene_air`)

Conditional only if identified in the actual cement/solvent and measured emissions; add every other actual solvent species separately. No blanket VOC mass replaces species rows.

- Selected flow: Toluene
- Flow property / unit: Mass / kg
- Amount rule: A_toluene_air / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-process-2008`

###### Water vapour (`water_air`)

Actual evaporation/venting to air, separated into feed/carrier water, cooling/steam losses and independently supported reaction changes. Sulfur crosslinking alone is not a water-production equation.

- Selected flow: Water vapour
- Flow property / unit: Mass / kg
- Amount rule: A_water_air / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-process-2008`

###### Carbon dioxide, fossil (`co2_air`)

Actual in-boundary diesel combustion to air only, with monitored or independently carbon-balanced amounts and complete fuel carbon evidence; do not repeat upstream electricity/steam-provider emissions here.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: A_co2_air / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-process-2008`

###### Nitrogen dioxide (`nox_air`)

Conditional actual combustion emission to air. NOx as NO2 equivalent is an indicator requiring explicit speciation, not automatically pure nitrogen dioxide mass.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: A_nox_air / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-process-2008`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | tyre_line | First subdivide actual product/recipe/stage batches and measured utilities; retain mass-linked ingredient attribution and causally supported shared services. For unavoidable shared equipment use measured machine time/load with documented idle and rejected-output attribution. Do not allocate total factory burden by finished mass alone across dissimilar tyre routes. | continental-tyre-production; epa-rubber-process-2008; ilcd-attributional-allocation-2010 |
| allocation_loss | tyre_line | Rejects/failed runs are not positive tyre output and retain burdens in the matched cohort. Scrap revenue does not create a coproduct or avoided-virgin credit. Any real coproduct or recycling allocation must be separately evidenced and disclosed; no automatic substitution credit. Internal recovery carries original burden and only additional processing once. | epa-rubber-process-2008; ilcd-attributional-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Each protocol below is owned by tyre_line with the specified accountable function. Raw collection never performs A_i/Q. aggregation_rule denotes the one final reporting basis used by calc_normalize. Retain original units before conversion, complete scope and actual measured uncertainties; no factory data are asserted by these protocols.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_recipe | tyre_line | Compounding engineer: ingredient and recipe ledgers | weighing and supplier assay | lot/recipe revision; each supplied input mass; active/moisture/oil assay; opening/closing raw stock; internal returns; failed batches; masterbatch receipts | Collect calibrated batch scales and stock/receipt/issue records before any normalization. Reconcile each polymer/filler/preparation separately; purchased masterbatch is whole procurement, its constituent subledger replaces rather than duplicates internal ingredient procurement for that fraction. | kg | Each lot/run and period reconciliation | Complete matched period including opening/closing burdens and failures | Declared plant, product, route and dispatch cohort; no unverified site pooling | per reference flow | scale calibration; recipe authorization; COA and reconciliation |
| cp_reinforcement | tyre_line | Component engineer: cords and bead wire | receipts and cutting/weighing logs | cord polymer/construction/coating; supplier treatment; spool mass; issued/returned length and linear mass; calender coating; cutting scrap; WIP transfers | Retain actual received treated state and separate steel belt cord, bead wire, polyester carcass and nylon bandage. Measure rubber coatings from onsite recipe ledgers, not duplicate purchased-cord components. | kg; m; kg/m | Each lot/run and period reconciliation | Complete matched period including opening/closing burdens and failures | Declared plant, product, route and dispatch cohort; no unverified site pooling | per reference flow | supplier construction; treatment certificate; calibrated scales |
| cp_operations | tyre_line | Production engineer: stage/run records | batch and machine logs | mix passes; temperature/time/load; extruder/calender settings; component lots; build IDs; cure press/cycle; cooling; inspection results; failed/zero-output/rework; cleanup/idle | Record the entire actual route, all campaigns and included post-release stages. Do not copy historical test temperatures, marketing recipe shares or nominal capacity into site values. | stage-specific measured units | Each lot/run and period reconciliation | Complete matched period including opening/closing burdens and failures | Declared plant, product, route and dispatch cohort; no unverified site pooling | per reference flow | machine logs; inspection and downtime records |
| cp_utilities | tyre_line | Utilities engineer: each carrier and water | meter and fuel/steam records | carrier meter start/end; stage/submeter link; actual load/duration; steam pressure/temperature/mass; condensate; water make-up/recirculation; compressed air; fuel stock; warehouse/handling; provider boundary | Collect raw carrier quantities including startup, failures, rework, ventilation/control, storage and dispatch. Separate imported utilities from onsite conversion, avoiding double counted primary fuel/electricity and internal steam/air. Keep steam enthalpy and condensate-return evidence; volume-rate integration only when required. | kWh; kg; MJ; m3 | Each lot/run and period reconciliation | Complete matched period including opening/closing burdens and failures | Declared plant, product, route and dispatch cohort; no unverified site pooling | per reference flow | calibration; meter topology; invoices; utility balance |
| cp_waste | tyre_line | Environment officer: each external waste | weighbridge and transfer records | waste stream; wet/dry mass; composition; source stage; internal recovery; external destination; wastewater volume/assays; rejected IDs | Collect each actual external stream separately. Distinguish circulating scrap from disposal and captured dust from air emissions; keep treatment and transportation burdens within declared responsibility. | kg; m3 | Each lot/run and period reconciliation | Complete matched period including opening/closing burdens and failures | Declared plant, product, route and dispatch cohort; no unverified site pooling | per reference flow | transfer tickets; receiving treatment records; laboratory reports |
| cp_emissions | tyre_line | Environment officer: species and media | sampling and monitored balance | species; air/water medium; concentration; flow rate or integrated volume; duration; dry/wet and standard/actual conditions; capture/removal; nondetect limit; process stage; fuel carbon | Collect raw results separately for mixing, extrusion, building solvent use, curing release/cooling and actual combustion. Concentration times an already integrated matched volume is sufficient; do not multiply time again. Retain unmeasured species as gaps, not zero. Actual species/reaction pathways require evidence separate from bulk closure. | kg; mg/m3; m3; h | Each lot/run and period reconciliation | Complete matched period including opening/closing burdens and failures | Declared plant, product, route and dispatch cohort; no unverified site pooling | per reference flow | sampling method; detection limits; gas basis; species analysis |
| cp_delivery | tyre_line | Quality and dispatch controller: terminal gate | acceptance/serial and dispatch ledgers | product/route/state; first quality-release IDs; net tyre mass; dispatch IDs/count; returns/redispatch; destruction; packaging and handling; finished-stock quantities | Retain raw unique accepted outward delivery and return counts for the declared gate, configuration and cohort; compute positive Q with return reconciliation. Reinspection alone adds no new production. Weigh net tyres separately from packaging/rims; retain actual warehouse dwell/handling and every packaging component quantity. No division here. | item; kg; day | Each lot/run and period reconciliation | Complete matched period including opening/closing burdens and failures | Declared plant, product, route and dispatch cohort; no unverified site pooling | per reference flow | acceptance and serial records; dispatch/return documents; calibrated scales |
| cp_stock | tyre_line | Inventory accountant: WIP/finished carried burdens | stock and burden reconciliation | opening/closing WIP by mix/component/green/cured status; opening/closing accepted finished stock; quantity/mass; batch IDs; carried material/energy/emission burdens; production release; scrapping and returns | Keep raw physical stock and full burden vectors before normalization. Reconcile each stage and internal transfer; carry unfinished and undelivered burdens forward instead of deleting or assigning them twice. Opening stock delivered this period brings its original burdens. Keep all failed/zero-output and rework burdens assigned to the affected cohort. | item; kg; original exchange units | Each lot/run and period reconciliation | Complete matched period including opening/closing burdens and failures | Declared plant, product, route and dispatch cohort; no unverified site pooling | per reference flow | stock counts; prior-period burden receipts; cohort linkage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_stock | all inventory rows | Before normalization, reconstruct attributed raw exchange vector A_i = current matched-period burden + opening WIP/finished carried burden - closing WIP/finished retained burden, removing duplicated internal transfers only. Preserve actual failed, zero-output, rework, return, scrap-treatment and included post-release warehouse/dispatch burdens in their cohort. Allocate shared burdens by allocation_trace. Component stocks and prior delivery reversals require batch links, not a residual credit. | cp_recipe; cp_reinforcement; cp_operations; cp_utilities; cp_waste; cp_emissions; cp_delivery; cp_stock | A_i | continental-tyre-production; epa-rubber-process-2008 |
| calc_normalize | all inventory rows | q_i = A_i / Q, exactly once after raw conversions and calc_stock attribution. Q is the positive unique net accepted supplied tyre count from cp_delivery, not quality-release output or closing finished stock. The fixed finished_tyre reference is Q/Q = 1 item. Collection methods never divide; inventory formulas and protocol aggregation_rule describe this same single final operation. | A_i; Q; cp_delivery; cp_stock | q_i | continental-tyre-production |
| calc_physical_balance | tyre_line | Maintain separate physical ledgers: opening WIP + actual process material inputs + actual returned stock = newly released/other stage transfers + closing WIP + measured wastes/emissions; opening finished stock + first accepted release + actual returns = physical outward shipments + closing finished stock + actual scrapping/rework transfers. Cancel internal transfers on merging, including release-to-warehouse handoff. Physical outward count and net Q are reconciled by IDs and return attribution. Keep tyre kg, packaging, water and each conserved element separately; reaction/phase/free-water changes need independently evidenced species and stoichiometry. Do not fit unknown reaction water and another unknown outlet to one closure residual. | cp_recipe; cp_reinforcement; cp_stock; cp_delivery; cp_waste; cp_emissions | physical stock and species balances | continental-tyre-production; epa-rubber-process-2008 |
| calc_emission | tyre_line | For each measured species use integral of matched concentration times volumetric flow over time with consistent gas conditions; if matched volume is already integrated use concentration times volume only. Record actual capture/removal and destination. Indicators such as total VOC, COD or NOx equivalents are not additional independent species masses. | cp_emissions; cp_utilities | species raw mass | epa-rubber-process-2008 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_route | tyre_line | Verify product size/rating, radial layer construction, recipe revisions and every supplied state; actual recipe rather than marketing proportions. | BOM; cross-section/build specification; COAs; batch records |
| quality_coverage | tyre_line | No omitted failure/rework/stock burden; no finished-stock assumption or invented loss/energy/recipe/emission factor. Every actual atomic flow added with data or an explicit gap. | Complete period/cohort reconciliation and signed owner review |
| quality_native | finished_tyre | Native identity is Tire, a Product flow with Number of items, production mix at plant. Its name has no fixed radial structure, passenger-car grade, CAS, geography or locationOfSupply; its comment covers a broad wheel-rim tyre concept including metal and rubber. The leaf classification says Other new pneumatic tyres (36113), inconsistent with the broad physical name and this explicitly qualified passenger-car subset; retain that classification debt and never infer a positive mapping. Use only for the physically verified new rubber passenger-car radial tyre here, not metal, solid, retread or an intermediate. Native identity supplies neither a supplier recipe, a regional background dataset, service life, tyre mass nor impact quantity. Actual site, construction, size, supplied state and provider compatibility require independent records. | Direct identity, exact reference-property/unit chain and actual foreground compatibility evidence |
| quality_uncertainty | tyre_line | Retain calibration, uncertainty, detection limits, missing species, actual geography/time/provider limits and causal allocation evidence. Future plant measurements and auxiliary UUID matches remain required for a real dataset. | Measurements, stock carry receipts, source applicability and gap register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_tyre | Require exactly the declared Product output finished_tyre, the same tyre UUID and count basis in both languages; native count unit does not imply a mass. Verify all qualifiers, raw delivery IDs and Q > 0. | continental-tyre-production |
| validate_inventory | tyre_line | Verify raw-to-final attribution and one normalization, complete physical/element closure independent of actual species/reaction-water evidence, external formulation/component purchasing without double count, all failed runs/rework/WIP/finished-stock carried burdens and actual included delivery operations. Unknowns are findings, not residual balancing or assumed zeros. | continental-tyre-production; epa-rubber-process-2008 |
| validate_applicability | tyre_line | Reject physical identity/grade/route/CAS contradictions and unsupported regional or provider assumptions. Keep disclosed native classification debt distinct from physical identity and scientific approval; no automatic mapping or methodology approval follows from a UUID or a schema check. | continental-radial-components |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Manufacturing and declared factory net-supply burden for the exact qualified tyre, linked to independent use/end-of-life modelling |
| allowed_use | Same actual route, materials, supplied state, geography/time and accepted foreground evidence |
| excluded_use | No service-life/vehicle-km comparison from tyre count alone; no generic all-tyre, non-car, bias, retread, solid-tyre, inner-tube or bought-finished-tyre packing proxy |
| required_metadata | passenger-car application and steel-belted radial/tubeless construction; size/model and load/speed rating; actual carcass/belt/bead/innerliner materials and supplied state; each compound recipe revision and purchased-formulation basis; factory/site/time and actual utility configuration; net-dispatch gate and unique accepted delivery cohort Q; opening/closing WIP and finished-stock quantities with carried burdens; return/rework/reinspection attribution and waste destinations; reference identity limits and native classification debt; actual packaging/handling/warehouse boundaries and measured net tyre mass |
| required_quality_disclosure | Complete raw/stock/carry attribution, one normalization, actual recipes, utility and delivery boundaries, emissions coverage, auxiliary UUID/provider gaps and complete reference native limitations |
| update_trigger | Changed construction, compound/supplier state, utility route, site, process, delivery gate, stock accounting, new measurements or resolved contradictory identity metadata |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| continental-tyre-production | literature | Continental, Tire production, undated technical overview, https://www.continental-tires.com/tire-knowledge/tire-production/ | Five-stage route, raw-material roles, component manufacture, curing, final inspection and warehouse shipment. Qualitative scope only; no plant recipe, yield, energy, temperature or loss default. |
| continental-radial-components | literature | Continental, Tire components, undated technical overview, https://www.continental-tires.com/tire-knowledge/tire-components/ | Steel-belted radial passenger-car architecture, nylon bandage, steel belts/beads, textile carcass and synthetic airtight layer; filler/plasticizer/cure roles. Example mass percentages and performance claims are not quantitative recipe or LCA evidence. |
| epa-rubber-process-2008 | official_guidance | US EPA, Emission Factor Documentation for AP-42 Section 4.12, Manufacture of Rubber Products, Final Report, November 2008, sections 2.1-2.3 and 3.1-3.3, https://www.epa.gov/sites/default/files/2020-10/documents/db04s12.pdf | Independent historical process/material and emissions sampling context. Natural rubber/SBR/BR, additives and press/cool-down zones; no universal recipe, sulfur-water yield, site temperature, process energy or emission factor adopted from sampled tests. |
| exxon-innerliner-materials | literature | ExxonMobil Product Solutions, Tires, overview paragraph on conventional innerliners, https://www.exxonmobilchemical.com/en/industries/automotive/tires | Publisher page read through a tool-rendered primary excerpt, not a locally acquired publisher PDF. Supports bromobutyl/chlorobutyl innerliner material roles only; selected bromobutyl is an authored route subset. No grade, formula, quantity, energy, performance or lifetime claim adopted. |
| ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment - Detailed guidance, first edition March 2010, section 7.9.3, printed pp. 257-258 (PDF 277-278), https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Bounded attributional subdivision and causal shared-service allocation method; supports documented drivers and no automatic avoided-production credit. No tyre recipe, fixed split, waste cutoff, industrial factor, economic default, performance or service-life claim. Actual cohort/site evidence remains required. |
