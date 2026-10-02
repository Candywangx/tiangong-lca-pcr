---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclass-47120
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dedicated parts for non-heating electrical resistors

## 1. Scope and Applicability

This rule covers separately supplied, drawing-specific parts dedicated to electrical resistors other than heating resistors: resistive tracks/elements, ceramic formers/substrates, wipers/contacts, caps/terminals and insulating or metal bodies. Admission requires a host-resistor drawing, dedicated fit/function and delivered state. A resistance-bearing element can remain a part when terminals, protection, adjustment mechanism or other specified completion is still needed; electrical function alone does not exclude it. Conversely, a fully specified bare chip, resistor network or open-frame rheostat already sold as the complete resistor is a finished device, even without a case. Sources `nolelc-elements`, `nolelc-wipers`, `hongyi-rheostat-parts` substantiate separate supply; `cts-wipers` and `vishay-technologies` constrain construction differences.

Exclude complete fixed/variable resistors, heating-resistor parts, contactless sensors/encoders, generic hybrids and generic wire/metal/ceramic/polymer stock as reference products. Their actual materials can be upstream inputs. Mixed-use parts require dedicated drawing/application evidence; a supplier listing sensors, heaters or slip rings does not establish this scope. Every dataset describes one part drawing and delivered state, never a pooled kilogram of unlike parts. Category admission is broader than the illustrative inventory recipes; absence of an exact UUID cannot narrow real product scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclass-47120 |
| classification_refs | CPC3.0 47172; non-heating parts of47120 |
| covered_products | Dedicated part families and admission test in section1 |
| excluded_products | Finished devices; heating parts; general stock; generic hybrid/sensor assemblies |
| representative_product | Drawing-specific unassembled carbon-film potentiometer resistive track; no mandatory representative technology |
| production_route | Purchased part release or actual ceramic/printed/deposited/wound/metal/polymer manufacture, then part qualification |
| market_state | Accepted dedicated part at factory gate before downstream complete-resistor assembly |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a specified intermediate part to a non-heating electrical resistor, declared production unit |
| How much | 1 kg accepted net part of one drawing and completion state, excluding packaging |
| How well | Meet actual dimensional, resistance/taper/contact/insulation and host-fit acceptance requirements as applicable |
| How long or cycle | One factory production/release cycle; no imposed use lifetime or resistor energy-loss claim |
| reference_flow_link | reference_part |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dedicated non-heating resistor part, accepted declared drawing and completion state |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number/drawing/revision; dedicated host non-heating resistor and function; delivered completion state; element, substrate, wiper, terminal, cap or body family; dimensions/net mass; alloy, ceramic, polymer and coating grade/composition; resistance/taper/TCR or contact/insulation requirement as applicable; acceptance test conditions; make/buy operations and received state; site, supplier geography, period; yield/rework; packaging |

Declare every qualifier in the foreground data package. Resolve the actual reference-product identity for that drawing before dataset completion. Mass is a production denominator, not equivalence of electrical service between different part designs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference_part | Mass | kg | cp_reference_part measures accepted net period output D by calibrated balance; all rows use the same drawing, completion state and output period. |
| count_conversion | count records | Mass | kg | Use measured batch-sample net item mass with traceable count, scale resolution, sample coverage and uncertainty; no catalogue or invented item mass. |
| composition_basis | paste/alloy/ceramic/residue | Mass and assayed content | kg | For each actual constituent, reconcile external input plus opening stock against accepted part content, rejects, recovered material, releases and closing stock on matching dry/wet and assay basis. Gross paste or alloy mass is not Ag/Pd/Ni/Cr content. Include reaction/volatile loss and work in progress; cancel paired internal transfers. Report residual and measurement uncertainty; no invented closure tolerance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual powder/stock/former/paste or purchased dedicated part in measured received state |
| starting_condition_role | Documented foreground entry, not burden-free origin |
| product_classification_scope | Dedicated parts of non-heating electrical resistors; actual scope independent of leaf label |
| recursive_input_rule | Use upstream supplier dataset for purchased same-category part in declared state, with no self-referential recursion |
| upstream_dataset_requirement | Cover actual material manufacture, forming/firing/deposition/plating and transport exactly once; outsourced processing remains linked |
| disclosure | Make/buy matrix by operation; received/delivered states; upstream gaps, supplier conditions and site-only versus linked cradle-to-gate claim |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_make_buy | all processes | For each part, declare made, bought, outsourced, not applicable or unknown for each operation. Purchased completed part input includes supplier materials and operations; do not also add its embedded BOM as fresh factory inputs. | nolelc-elements; seiwa-caps |
| boundary_process | foreground | Include every actual route to shipped part, service, rework, rejects and control. Add each actual ancillary binder, conductor paste, photoresist, developer, etchant, plating salt, oil, passivation resin, gas or waste as its own chemical/grade-specific card with measurement before dataset completion; never presume dry processing or hide unknown chemistry as zero. | vishay-technologies; nolelc-housings |
| boundary_use | downstream | Exclude host-resistor assembly, installed use/electrical dissipation and final end of life; include factory test electricity and test rejects. These are not a use-stage scenario. | cts-wipers |
| boundary_emissions | utilities | Supplier-grid and outsourced waste-treatment emissions remain upstream, not duplicate factory emissions; measure actual post-control species/compartments and separate in-house treatment inputs, sludge and final discharges. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Dedicated purchased part receipt | required | Declare actual feed state and make/buy matrix; a purchased finished part only needs receipt, release and actual finishing here. | foreground_production | 1 kg selected accepted part |
| ceramic | Ceramic substrate or body manufacture | conditional | Only when powder forming, firing, cutting/grinding occur on site; purchased fired ceramic carries these upstream operations. | foreground_production | 1 kg selected accepted part |
| track | Printed or molded resistive track | conditional | Actual carbon/polymer printing and curing, cermet printing/drying/firing, or conductive-plastic co-molding; distinct recipes and meters. | foreground_production | 1 kg selected accepted part |
| film | Thin film, foil or deposited element fabrication | conditional | Actual deposition, patterning, metallization, passivation and trimming only to shipped part completion; no assumed finished-device assembly. | foreground_production | 1 kg selected accepted part |
| wire | Wirewound element manufacture | conditional | Cut and wind specified resistance wire on declared former; connect only delivered element terminals; hybrid stripe printing also activates track. | foreground_production | 1 kg selected accepted part |
| metal | Wiper, cap, terminal and metal body manufacture | conditional | Drawing-specific stamping, cutting/forming, machining, barrel finishing and welded multi-wire contacts; surface treatment make/buy separately declared. | foreground_production | 1 kg selected accepted part |
| polymer | Insulating polymer body manufacture | conditional | Actual ABS injection molding, PI processing, or phenolic compression molding/machining; no pooled plastic recipe. | foreground_production | 1 kg selected accepted part |
| release | Part qualification and packaging | required | Inspect and test actual part, exclude destructive-test rejects from accepted output; then package. | foreground_production | 1 kg selected accepted part |
| utilities | Utilities, cleaning and environmental controls | required | Attribute process/service electricity and actual cleaning, furnace fuels, gas, water, extraction and treatment; route absence requires evidence. | foreground_production | 1 kg selected accepted part |

Process cards inherit actual route condition. Site-made intermediate transfers use paired records and cancel at aggregated site boundary; purchased fired substrates activate no duplicate powder/firing burden here. Illustrative atomic interfaces are conditional, not a required BOM. For carbon vapor-deposited, metal-oxide, foil/composition or other admitted element technology, retain the real route and add verified precursors, gases, chemistry and controls; the printed-potentiometer route cannot stand in for it. A dataset with missing applicable chemistry is incomplete.

### Process: Dedicated purchased part receipt (`receipt`)

#### Inputs

##### Product flows

###### NOLELC carbon-film potentiometer resistive track, unassembled (`purchased_track`)

Only this part is purchased; verify drawing, actual composition/coating and supplier completion state, not a required default. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: NOLELC carbon-film potentiometer resistive track, unassembled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_track`
- Sources: `nolelc-elements`

###### Palliney-6 multi-wire potentiometer wiper, unassembled (`purchased_wiper`)

Only this part is purchased; verify drawing, actual composition/coating and supplier completion state, not a required default. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Palliney-6 multi-wire potentiometer wiper, unassembled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_wiper`
- Sources: `nolelc-wipers`

###### Fired alumina resistor ceramic former, drawing-specific (`purchased_core`)

Only this part is purchased; verify drawing, actual composition/coating and supplier completion state, not a required default. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Fired alumina resistor ceramic former, drawing-specific
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_core`
- Sources: `hongyi-rheostat-parts`

###### Nickel-plated steel fixed-resistor end cap, drawing-specific (`purchased_cap`)

Only this part is purchased; verify drawing, actual composition/coating and supplier completion state, not a required default. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Nickel-plated steel fixed-resistor end cap, drawing-specific
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_cap`
- Sources: `seiwa-caps`

### Process: Ceramic substrate or body manufacture (`ceramic`)

#### Inputs

##### Product flows

###### Alumina powder for resistor ceramic former, declared purity (`alumina_powder`)

Only declared alumina-based ceramic route; each additive/binder identified in separate cards before dataset completion. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Alumina powder for resistor ceramic former, declared purity
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alumina_powder`
- Sources: `nolelc-housings`

###### Deionized water for ceramic forming (`ceramic_water`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Deionized water for ceramic forming
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ceramic_water`
- Sources: `nolelc-housings`

#### Outputs

##### Waste flows

###### Fired alumina ceramic grinding residue (`ceramic_reject`)

When used in the declared route Weigh segregated reject/offcut/residue; record moisture, composition and treatment destination.

- Selected flow: Fired alumina ceramic grinding residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated reject/offcut/residue; record moisture, composition and treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ceramic_reject`
- Sources: `nolelc-housings`

### Process: Printed or molded resistive track (`track`)

#### Inputs

##### Product flows

###### NOLELC carbon-film resistive ink, specified supplier formulation (`carbon_ink`)

Only this specified formulation/substrate is used; declare actual grade and purchased versus site-manufactured state. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: NOLELC carbon-film resistive ink, specified supplier formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_ink`
- Sources: `nolelc-elements`

###### NOLELC conductive-plastic resistive compound, specified formulation (`cp_compound`)

Only this specified formulation/substrate is used; declare actual grade and purchased versus site-manufactured state. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: NOLELC conductive-plastic resistive compound, specified formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cp_compound`
- Sources: `nolelc-elements`

###### Heraeus R405AR AgPd resistor paste (`cermet_paste`)

Only this specified formulation/substrate is used; declare actual grade and purchased versus site-manufactured state. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Heraeus R405AR AgPd resistor paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cermet_paste`
- Sources: `heraeus-r400ar`

###### FR4 epoxy-glass potentiometer track substrate, unprinted (`fr4`)

Only this specified formulation/substrate is used; declare actual grade and purchased versus site-manufactured state. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: FR4 epoxy-glass potentiometer track substrate, unprinted
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fr4`
- Sources: `nolelc-elements`

###### Sintered alumina resistor track substrate, unprinted (`alumina_substrate`)

Only this specified formulation/substrate is used; declare actual grade and purchased versus site-manufactured state. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Sintered alumina resistor track substrate, unprinted
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alumina_substrate`
- Sources: `heraeus-r400ar`

#### Outputs

##### Waste flows

###### Heraeus R405AR paste cleaning residue (`paste_reject`)

When used in the declared route Weigh wet paste-bearing residue, assay dry solids and Ag/Pd separately; record receiver.

- Selected flow: Heraeus R405AR paste cleaning residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh wet paste-bearing residue, assay dry solids and Ag/Pd separately; record receiver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paste_reject`
- Sources: `heraeus-r400ar`

### Process: Thin film, foil or deposited element fabrication (`film`)

#### Inputs

##### Product flows

###### Nickel-chromium sputtering target for resistor film, declared alloy grade (`nicr_target`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Nickel-chromium sputtering target for resistor film, declared alloy grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nicr_target`
- Sources: `vishay-technologies`

###### Tantalum nitride sputtering target for resistor film (`tan_target`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Tantalum nitride sputtering target for resistor film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tan_target`
- Sources: `vishay-technologies`

###### Gold for thin-film resistor substrate metallization (`gold`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Gold for thin-film resistor substrate metallization
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gold`
- Sources: `vishay-substrates`

###### Nickel for thin-film resistor substrate metallization (`nickel`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Nickel for thin-film resistor substrate metallization
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nickel`
- Sources: `vishay-substrates`

###### Nickel-chromium resistive foil, specified patterned-element grade (`foil`)

Only verified foil element route with drawing-confirmed alloy; source does not establish a universal foil alloy. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Nickel-chromium resistive foil, specified patterned-element grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foil`
- Sources: `vishay-technologies`

###### Sintered alumina thin-film resistor substrate, uncoated (`film_substrate`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Sintered alumina thin-film resistor substrate, uncoated
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_film_substrate`
- Sources: `vishay-substrates`

#### Outputs

##### Waste flows

###### Nickel-chromium target machining and deposition residue (`film_scrap`)

When used in the declared route Weigh collected target/offcut/shield residue, distinguish metal alloy and contaminated mixed residue, assay nickel/chromium and record fate.

- Selected flow: Nickel-chromium target machining and deposition residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh collected target/offcut/shield residue, distinguish metal alloy and contaminated mixed residue, assay nickel/chromium and record fate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_film_scrap`
- Sources: `vishay-technologies`

### Process: Wirewound element manufacture (`wire`)

#### Inputs

##### Product flows

###### Nickel-chromium resistance alloy wire, declared grade and diameter (`nicr_wire`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Nickel-chromium resistance alloy wire, declared grade and diameter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nicr_wire`
- Sources: `vishay-technologies`

###### Fired alumina wirewound resistor former, unwound (`wire_former`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Fired alumina wirewound resistor former, unwound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wire_former`
- Sources: `hongyi-rheostat-parts`

###### Copper wirewound-element terminal, declared drawing (`copper_terminal`)

Only copper terminal required by delivered part drawing; source metal-element termination is bounded counterevidence, not universal wirewound BOM. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Copper wirewound-element terminal, declared drawing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copper_terminal`
- Sources: `vishay-technologies`

#### Outputs

##### Waste flows

###### Nickel-chromium resistance wire offcut (`wire_scrap`)

When used in the declared route Weigh segregated winding offcuts and destructive-test rejects, retain alloy assay and receiver.

- Selected flow: Nickel-chromium resistance wire offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated winding offcuts and destructive-test rejects, retain alloy assay and receiver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wire_scrap`
- Sources: `vishay-technologies`

### Process: Wiper, cap, terminal and metal body manufacture (`metal`)

#### Inputs

##### Product flows

###### Phosphor-bronze sheet for potentiometer wiper, specified grade (`phosphor_bronze`)

Only this drawing-confirmed stock is used; cap grade and contact tie-bar material require supplier confirmation. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Phosphor-bronze sheet for potentiometer wiper, specified grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_phosphor_bronze`
- Sources: `cts-wipers`

###### Copper-nickel-zinc sheet for potentiometer wiper, specified grade (`nickel_silver`)

Only this drawing-confirmed stock is used; cap grade and contact tie-bar material require supplier confirmation. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Copper-nickel-zinc sheet for potentiometer wiper, specified grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nickel_silver`
- Sources: `cts-wipers`

###### Palliney-6 precious-metal contact wire (`palliney_wire`)

Only this drawing-confirmed stock is used; cap grade and contact tie-bar material require supplier confirmation. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Palliney-6 precious-metal contact wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_palliney_wire`
- Sources: `nolelc-wipers`

###### Stainless-steel sheet for potentiometer housing, specified grade (`stainless_sheet`)

Only this drawing-confirmed stock is used; cap grade and contact tie-bar material require supplier confirmation. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Stainless-steel sheet for potentiometer housing, specified grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stainless_sheet`
- Sources: `nolelc-housings`

###### Aluminium-alloy stock for potentiometer housing, specified grade (`aluminum_bar`)

Only this drawing-confirmed stock is used; cap grade and contact tie-bar material require supplier confirmation. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Aluminium-alloy stock for potentiometer housing, specified grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aluminum_bar`
- Sources: `nolelc-housings`

###### Low-carbon steel strip for fixed-resistor cap, specified grade (`steel_cap_stock`)

Only this drawing-confirmed stock is used; cap grade and contact tie-bar material require supplier confirmation. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Low-carbon steel strip for fixed-resistor cap, specified grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_cap_stock`
- Sources: `seiwa-caps`

#### Outputs

##### Waste flows

###### Phosphor-bronze wiper stamping scrap (`bronze_scrap`)

When used in the declared route Weigh segregated stamping scrap; actual nickel-silver, steel, aluminium and precious-alloy residues use separate identity cards.

- Selected flow: Phosphor-bronze wiper stamping scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated stamping scrap; actual nickel-silver, steel, aluminium and precious-alloy residues use separate identity cards.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bronze_scrap`
- Sources: `cts-wipers`

### Process: Insulating polymer body manufacture (`polymer`)

#### Inputs

##### Product flows

###### ABS resin pellets for potentiometer insulating housing, specified grade (`abs`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: ABS resin pellets for potentiometer insulating housing, specified grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abs`
- Sources: `nolelc-housings`

###### Phenolic molding compound for potentiometer body, declared grade (`phenolic`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Phenolic molding compound for potentiometer body, declared grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_phenolic`
- Sources: `nolelc-housings`

###### Polyimide resin for potentiometer insulating body, specified grade (`pi`)

When used in the declared route Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Polyimide resin for potentiometer insulating body, specified grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pi`
- Sources: `nolelc-housings`

#### Outputs

##### Waste flows

###### ABS housing molding reject (`abs_reject`)

When used in the declared route Weigh exported rejects; internal regrind is transfer, not new external input or waste. Phenolic and PI rejects require separate cards.

- Selected flow: ABS housing molding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh exported rejects; internal regrind is transfer, not new external input or waste. Phenolic and PI rejects require separate cards.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abs_reject`
- Sources: `nolelc-housings`

### Process: Part qualification and packaging (`release`)

#### Inputs

##### Product flows

###### Corrugated-paperboard shipping box (`box`)

When used in the declared route Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass.

- Selected flow: Corrugated-paperboard shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_box`

###### Polyethylene protective packaging film (`film_pack`)

When used in the declared route Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass.

- Selected flow: Polyethylene protective packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_film_pack`

###### Polypropylene adhesive packaging tape (`tape`)

When used in the declared route Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass.

- Selected flow: Polypropylene adhesive packaging tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tape`

#### Outputs

##### Product flows

###### Dedicated non-heating resistor part, accepted declared drawing and completion state (`reference_part`)

When used in the declared route Weigh accepted parts on calibrated precision balance, tare containers and packaging, record drawing/lot/count and uncertainty; output amount is 1 kg.

- Selected flow: Dedicated non-heating resistor part, accepted declared drawing and completion state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_part`

### Process: Utilities, cleaning and environmental controls (`utilities`)

#### Inputs

##### Product flows

###### Purchased grid electricity at factory user, declared voltage and geography (`electricity`)

When used in the declared route Read process/service submeters, integrate actual intervals including compressed-air generation, furnaces, extraction and test; reconcile purchases, self-generation and exports separately.

- Selected flow: Purchased grid electricity at factory user, declared voltage and geography
- Flow property / unit: Electrical energy / kWh
- Amount rule: Read process/service submeters, integrate actual intervals including compressed-air generation, furnaces, extraction and test; reconcile purchases, self-generation and exports separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`

###### Natural gas supplied to factory furnace, declared composition (`natural_gas`)

When used in the declared route Meter mass or corrected volume with measured density and calorific value, record gas composition and burner/period.

- Selected flow: Natural gas supplied to factory furnace, declared composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter mass or corrected volume with measured density and calorific value, record gas composition and burner/period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas`

###### Argon gas for resistor thin-film sputtering (`argon`)

When used in the declared route Meter gas flow or weigh cylinders before/after; record purge and recovered gas separately; sputtering gas choice verified against equipment records.

- Selected flow: Argon gas for resistor thin-film sputtering
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter gas flow or weigh cylinders before/after; record purge and recovered gas separately; sputtering gas choice verified against equipment records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_argon`
- Sources: `vishay-technologies`

###### Isopropanol cleaning solvent, declared purity (`ipa`)

Only actual site cleaning recipe; manufacturer sources do not establish mandatory solvent chemistry. Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.

- Selected flow: Isopropanol cleaning solvent, declared purity
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ipa`

###### Purchased deionized cleaning and process water (`water`)

When used in the declared route Meter supply and actual makeup, avoid counting recirculation as new intake; convert volume using supported density conditions.

- Selected flow: Purchased deionized cleaning and process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter supply and actual makeup, avoid counting recirculation as new intake; convert volume using supported density conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

#### Outputs

##### Waste flows

###### Spent isopropanol cleaning solvent (`solvent_waste`)

When used in the declared route Weigh spent solvent with composition assay, retained solvent in wipes/sludge and treatment receiver; recycled solvent transfer separately.

- Selected flow: Spent isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh spent solvent with composition assay, retained solvent in wipes/sludge and treatment receiver; recycled solvent transfer separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_waste`

###### Resistor-part cleaning wastewater sent to treatment (`wastewater`)

When used in the declared route Meter effluent volume and measured density; analyse actual organics/metals before treatment; outsourced effluent is waste product, not discharge to environment.

- Selected flow: Resistor-part cleaning wastewater sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter effluent volume and measured density; analyse actual organics/metals before treatment; outsourced effluent is waste product, not discharge to environment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

##### Elementary flows

###### Isopropanol emitted to air after controls (`ipa_air`)

When used in the declared route Use species-specific stack/fugitive measurement with concentration, flow and duration; solvent balance includes stock/recovery/destruction and cannot assign all loss to air.

- Selected flow: Isopropanol emitted to air after controls
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use species-specific stack/fugitive measurement with concentration, flow and duration; solvent balance includes stock/recovery/destruction and cannot assign all loss to air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ipa_air`

###### Fossil carbon dioxide emitted to air from furnace (`co2_air`)

When used in the declared route Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2.

- Selected flow: Fossil carbon dioxide emitted to air from furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co2_air`

###### Carbon monoxide emitted to air from furnace (`co_air`)

When used in the declared route Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2.

- Selected flow: Carbon monoxide emitted to air from furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_air`

###### Nitrogen dioxide emitted to air from furnace (`no2_air`)

When used in the declared route Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2.

- Selected flow: Nitrogen dioxide emitted to air from furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_no2_air`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivision | shared site | First investigate subdivision or system expansion. For a part production dataset prefer process/submeter subdivision; expanded-system results cannot be claimed as a single part footprint. If subdivision is infeasible use demonstrated causal driver (actual machine time/energy, furnace load by route), not arbitrary equal sharing. | ef-allocation-2021 |
| allocate_products | co-products | If physical relationship is unsupported, justify other allocation and sensitivity. Do not default to mass for unlike costly precious-metal parts. Record exported scrap treatment and allocation convention; no automatic avoided-primary-metal credit. Rejects/rework remain in accepted output burden. | ef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_purchased_track | receipt | purchased_track | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_purchased_wiper | receipt | purchased_wiper | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_purchased_core | receipt | purchased_core | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_purchased_cap | receipt | purchased_cap | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_alumina_powder | ceramic | alumina_powder | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_ceramic_water | ceramic | ceramic_water | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_ceramic_reject | ceramic | ceramic_reject | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh segregated reject/offcut/residue; record moisture, composition and treatment destination. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_carbon_ink | track | carbon_ink | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_cp_compound | track | cp_compound | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_cermet_paste | track | cermet_paste | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_fr4 | track | fr4 | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_alumina_substrate | track | alumina_substrate | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_paste_reject | track | paste_reject | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh wet paste-bearing residue, assay dry solids and Ag/Pd separately; record receiver. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_nicr_target | film | nicr_target | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_tan_target | film | tan_target | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_gold | film | gold | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_nickel | film | nickel | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_foil | film | foil | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_film_substrate | film | film_substrate | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_film_scrap | film | film_scrap | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh collected target/offcut/shield residue, distinguish metal alloy and contaminated mixed residue, assay nickel/chromium and record fate. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_nicr_wire | wire | nicr_wire | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_wire_former | wire | wire_former | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_copper_terminal | wire | copper_terminal | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_wire_scrap | wire | wire_scrap | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh segregated winding offcuts and destructive-test rejects, retain alloy assay and receiver. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_phosphor_bronze | metal | phosphor_bronze | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_nickel_silver | metal | nickel_silver | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_palliney_wire | metal | palliney_wire | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_stainless_sheet | metal | stainless_sheet | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_aluminum_bar | metal | aluminum_bar | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_steel_cap_stock | metal | steel_cap_stock | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_bronze_scrap | metal | bronze_scrap | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh segregated stamping scrap; actual nickel-silver, steel, aluminium and precious-alloy residues use separate identity cards. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_abs | polymer | abs | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_phenolic | polymer | phenolic | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_pi | polymer | pi | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_abs_reject | polymer | abs_reject | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh exported rejects; internal regrind is transfer, not new external input or waste. Phenolic and PI rejects require separate cards. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_box | release | box | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_film_pack | release | film_pack | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_tape | release | tape | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh/count each issued packaging SKU and subtract returns; packaging excluded from accepted product net mass. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_reference_part | release | reference_part | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh accepted parts on calibrated precision balance, tare containers and packaging, record drawing/lot/count and uncertainty; output amount is 1 kg. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_electricity | utilities | electricity | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Read process/service submeters, integrate actual intervals including compressed-air generation, furnaces, extraction and test; reconcile purchases, self-generation and exports separately. | kWh | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_natural_gas | utilities | natural_gas | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Meter mass or corrected volume with measured density and calorific value, record gas composition and burner/period. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_argon | utilities | argon | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Meter gas flow or weigh cylinders before/after; record purge and recovered gas separately; sputtering gas choice verified against equipment records. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_ipa | utilities | ipa | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh net issued quantity with calibrated scale; subtract returned usable stock and reconcile inventory. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_water | utilities | water | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Meter supply and actual makeup, avoid counting recirculation as new intake; convert volume using supported density conditions. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_solvent_waste | utilities | solvent_waste | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Weigh spent solvent with composition assay, retained solvent in wipes/sludge and treatment receiver; recycled solvent transfer separately. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_wastewater | utilities | wastewater | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Meter effluent volume and measured density; analyse actual organics/metals before treatment; outsourced effluent is waste product, not discharge to environment. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_ipa_air | utilities | ipa_air | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Use species-specific stack/fugitive measurement with concentration, flow and duration; solvent balance includes stock/recovery/destruction and cannot assign all loss to air. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_co2_air | utilities | co2_air | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_co_air | utilities | co_air | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |
| cp_no2_air | utilities | no2_air | measurement_record | drawing; lot; grade/formulation; raw amount/unit; opening/closing stock; accepted net D; calibration; uncertainty; route condition; provider/fate; allocation | Measure species-specific post-control concentration, dry/reference gas volume, duration and operating state; gas carbon balance may support CO2 only with oxidation and retained-carbon evidence, never infer CO/NO2. | kg | Each batch/meter interval; monthly stock reconciliation | Complete representative production period including startups, rejects and rework; disclose year/campaign and coverage | Declared part line and attributable shared services, matching D scope | per 1 kg reference flow | Original weighing/meter/assay and acceptance records, calibrated instruments, supplier grade and allocation evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all inventory rows | Divide attributable external period quantity by measured accepted net output D in kg; reference output = 1 kg. Correct stocks, cancel internal transfers and attribute actual rejects/rework before dividing. | cp_reference_part; row-specific protocol | per 1 kg reference flow |  |
| balance_check | material inventory | For each actual constituent, reconcile external input plus opening stock against accepted part content, rejects, recovered material, releases and closing stock on matching dry/wet and assay basis. Gross paste or alloy mass is not Ag/Pd/Ni/Cr content. Include reaction/volatile loss and work in progress; cancel paired internal transfers. Report residual and measurement uncertainty; no invented closure tolerance. | Composition certificates/assays; stock; waste; measured releases | Constituent residual and uncertainty |  |
| energy_conversion | electricity | Metered kWh × 3.6 = MJ if a verified downstream flow requires MJ; do not infer a generation technology or substitute factory fuel for grid supply. | Meter/unit property chain | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference_part | part number/drawing/revision; dedicated host non-heating resistor and function; delivered completion state; element, substrate, wiper, terminal, cap or body family; dimensions/net mass; alloy, ceramic, polymer and coating grade/composition; resistance/taper/TCR or contact/insulation requirement as applicable; acceptance test conditions; make/buy operations and received state; site, supplier geography, period; yield/rework; packaging | Part order/drawing, dedicated host interface and supplier completion records |
| coverage | all rows | Record present, not applicable with evidence, measured zero or unknown distinctly. Additional actual chemicals need atomic cards. No missing-as-zero and no generic flow substitution. | review_metadata |
| range | all rows | No factory intensity, yield, recipe, item weight, lifetime or GWP default established; collect foreground quantities and uncertainty, seek independent compatible empirical ranges. | Foreground measurements and source applicability |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_part | reference_part | Verify dedicated non-heating host, exact delivered state, measured positive D and acceptance; electrical function alone is insufficient to decide part versus finished device. | nolelc-elements; un-cpc-resistors |
| validate_measurement | all rows | Check 1 kg net reference, every protocol aggregation on the same basis, raw-unit conversion, every measured mass/property link and constituent balance. |  |
| validate_complete | dataset | Require actual make/buy coverage, all atomic exchanges, provider conditions, supplier burdens once, waste destination and post-control species/compartment. Unknown quantity, unresolved mandatory UUID or unverified unit/property blocks complete dataset; candidate methodology check is not dataset acceptance or conformance certification. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Drawing/state-specific part manufacture and supplier linkage for downstream resistor data production |
| excluded_use | Whole resistor or sensor footprints; heating applications; electrical service comparisons by kg; full lifecycle claim without scenario |
| required_metadata | part number/drawing/revision; dedicated host non-heating resistor and function; delivered completion state; element, substrate, wiper, terminal, cap or body family; dimensions/net mass; alloy, ceramic, polymer and coating grade/composition; resistance/taper/TCR or contact/insulation requirement as applicable; acceptance test conditions; make/buy operations and received state; site, supplier geography, period; yield/rework; packaging |
| required_quality_disclosure | Scope, route, supplier/linkage gaps, actual chemistry, unresolved identity/ranges, normalization, allocation, uncertainty and waste fate |
| update_trigger | Drawing, host application, completion state, recipe, process/supplier, acceptance or meter boundary changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-resistors | official_guidance | UNSD CPC3.0 subclass47120 and47172. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47120 ; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47172 | Classification context excludes heating resistors; classification alone does not establish part identity or inventory. |
| nolelc-elements | extension_guidance | NOLELC, Resistive Elements for Potentiometers and Sensors, public page retrieved2October2026. https://nolelc.com/resistance-elements-thick-film-pcb/ | Separately supplied carbon-film, conductive-plastic and cermet tracks; print/fire, trim and conditional co-molding. Sensor applications are not automatic resistor-part coverage; no marketing lifetime or temperature defaults adopted. |
| nolelc-wipers | extension_guidance | NOLELC, Precious metal Multi-Wire Wipers. https://nolelc.com/precious-metal-brusheswipers/ | Separate multi-wire wipers; Palliney-6 is an alloy example, not every wiper recipe; slip-ring and motor-brush applications excluded. |
| cts-wipers | extension_guidance | CTS, VR Series Panel Potentiometers for Instrumentation,18October2023, How does a panel potentiometer work. https://www.ctscorp.com/Resources/Blog/VR-Series-Panel-Potentiometers-for-Instrumentation | Independent construction evidence: printed track and stamped phosphor-bronze/nickel-silver or formed-wire welded wipers. Finished-device source supports bounded part operations only. |
| nolelc-housings | extension_guidance | NOLELC, Potentiometer Housing Materials and Cost,3September2026. https://nolelc.com/potentiometer-housing-materials-and-cost/ | Actual housing alternatives: machined/stamped metal, ABS/PI molding, phenolic body, ceramic forming/firing; substrate/finish grades must come from drawing. |
| seiwa-caps | extension_guidance | Seiwa Metal Works, Fixed Resistor Caps, production equipment. https://www.seiwagrp.co.jp/product/caps/ | Dedicated caps for carbon/metal/metal-oxide film resistors; pressing, barrel finishing and compressed air; source does not identify cap metal grade. |
| hongyi-rheostat-parts | extension_guidance | Hongyi Electronics, Slide Rheostat, replacement parts FAQ. https://resistor-factory.com/products/rheostat | Externally supplied replacement sliders, end clamps and ceramic tubes, plus tube rewinding; laboratory/motor-control context. Stock resistance wire alone is feedstock. |
| vishay-technologies | handbook | Vishay, Resistors101, VMN-SG2113-1205, pages2 and7. https://www.vishay.com/docs/49873/49873_sg2113.pdf | Fixed versus variable device context; bounded wirewound, sputtered NiCr/TaN, printed oxide, foil/composition alternatives. Finished-resistor construction does not require every part to receive all operations. |
| vishay-substrates | handbook | Vishay, Custom Resistor Arrays, document60058 revision27-Feb-2001, page1 Patterned Substrates. https://www.vishay.com/docs/60058/custarra.pdf | Alumina patterned substrates, gold/nickel metallization, optional passivation and trimming. A complete bare resistor network or generic hybrid circuit is not automatically a dedicated part. |
| heraeus-r400ar | extension_guidance | Heraeus Electronics, R400AR Series product selector, description/paste properties/processing. https://www.heraeus-electronics.com/de/products-and-solutions/thick-film-materials/thick-film-materials-overview/tfm-ps-detail/R400AR%20Series/ | Specific AgPd resistor paste printed on alumina, dried, air-fired and laser-trimmable; grade-specific settings are not universal factory energy, composition or process-temperature defaults. Heater/fuse applications excluded. |
| ef-allocation-2021 | official_guidance | Commission Recommendation(EU)2021/2279,AnnexI4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | General subdivision/system-expansion and physical-relationship allocation hierarchy; no full PEF compliance claimed. |
