---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-instantaneous-or-storage-water-heaters-and-immersion-heaters-electric-space-he-0421e953
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Electric water, space and soil heating apparatus and cooking appliances

## 1. Scope and Applicability

This candidate covers factory manufacture of finished electric instantaneous and storage water heaters, immersion heaters, space and soil heating apparatus, ovens, cookers, cooking plates, boiling rings, grillers and roasters. Declare the actual supplied configuration and principal function. Resistance, ceramic PTC, induction and other electrically produced principal heating/cooking mechanisms remain eligible when supported by product evidence; no nickel-chromium or storage-water-heater-only default applies. This is an equipment production reference, not a heat, cooked-food or lifetime service reference.

CPC 44817 is under the domestic-electric-appliance parent. The original gives the full title without a detailed leaf note. Commercial/industrial adaptations, microwave or other electric cooking mechanisms, heat-pump water heaters, and solar/indirect hybrids require item-specific classification and principal-function review; they are neither automatically assigned to 44817 nor rejected because their reference UUID is unresolved. A storage tank with electric backup may principally be an indirect/solar product. A heat pump is not a resistance heater plus an unexplained omission of compressor/refrigerant. Record unresolved classification explicitly and collect the complete actual architecture before choosing guidance.

Purely non-electric cooking/heating apparatus, separately sold parts, supplied heat, installation civil works, crop production, customer cooking and later maintenance are separate outputs or stages. Their absence from this factory reference does not waive upstream burdens for actual purchased modules. Sources: `unsd-cpc3-2025`, `stiebel-storage-hybrid`, `dimplex-heating-2026`, `ti-induction-2013`, `nexans-soil-heating`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-instantaneous-or-storage-water-heaters-and-immersion-heaters-electric-space-he-0421e953 |
| classification_refs | CPC 3.0:44817 |
| covered_products | All named electric water/immersion, space/soil and cooking apparatus; actual model-specific electric architecture |
| excluded_products | Heat/food service; purely non-electric apparatus; separately sold parts; installation and use stages; uncertain hybrid classification stays under review |
| representative_product | One accepted complete configuration identified by model, drawing, BOM and factory test release; no universal representative heater |
| production_route | Model-specific make/buy metal/polymer/thermal/electronic operations, assembly, acceptance and dispatch |
| market_state | Finished manufactured equipment at factory; supplied accessories and factory fills declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the declared complete electric heating or cooking apparatus |
| How much | 1 kg accepted net finished apparatus of one configuration |
| How well | Actual rated power/voltage, water capacity or flow and pressure where applicable, heating/cooking architecture, safety specification and acceptance test |
| How long or cycle | One manufacturing and factory acceptance period; no assumed user lifetime or operating hours |
| reference_flow_link | finished_appliance |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Electric instantaneous or storage water heaters and immersion heaters, electric space heating apparatus and soil heating apparatus, ovens, cookers, cooking plates, boiling rings, grillers and roasters `cfcc8dd6-19dd-4174-95d3-7cccd44431c3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and configuration; principal function; household/commercial/industrial classification review; resistance/induction/other mechanism; instantaneous/storage/immersion/radiant/fan/liquid/soil/cooking branch; voltage and rated power; capacity/pressure where applicable; actual grade and recipe; make/buy interfaces; supplied accessories and fills; accepted net mass; place and period; test standard |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| physical_species | physical material and species records | Mass | kg | Each material/species balance term uses its own composition, assay and wet/dry basis. Gross steel, solder or sludge mass is not contained Fe, Cu, Ni or solvent mass. Electricity and transport are outside this material-assay rule. |
| water_basis | water-bearing physical records | Mass | kg | Convert each measured water volume using its own temperature-dependent measured or documented density; retain input moisture, opening/closing stocks, evaporation, discharge and reaction water. Paired internal return transfers cancel once. |
| utility_basis | energy records | Energy | MJ | Preserve meter units and conversion evidence, voltage, geography and supplier interface. Heat supply and return each use their own mass and specific enthalpy on one datum; subtract returns once only from a gross supply meter, never again from already-net heat. |
| emission_species | direct elementary emissions | Mass | kg | Species, compartment and control outlet must match. NOx expressed as NO2-equivalent requires speciation or a matching reviewed NOx flow, not relabelling all as measured NO2. Fuel carbon alone cannot establish CO or NOx. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received materials, complete purchased modules and supplied utilities at their documented interfaces |
| starting_condition_role | Foreground factory production with linked upstream supply; not burden-free gate inputs |
| product_classification_scope | Full named electric apparatus with actual principal-function classification review for unusual products |
| recursive_input_rule | A same-category bought apparatus/module is one upstream input with supplier identity; do not recursively invent internal manufacture or add its embodied constituents again |
| upstream_dataset_requirement | Match actual grade, formulation, module completeness, geography, time, electricity voltage and waste-treatment interface; supplier disaggregation replaces rather than supplements a complete module dataset |
| disclosure | Declare missing supplier data, classification/UUID gaps, all conditional operations, factory fills, test loads and downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_factory | foreground | Include actual fabrication, coating/enamelling, polymer processing, heater or electronics manufacture, assembly, accepted and rejected test/rework loads, packaging and attributable services. Retain external upstream supply and waste treatment. | rangemaster-quick-guide |
| boundary_use | factory versus use | Include factory electrical/pressure/cooking test energy and media; exclude customer heat generation, food/crop inputs and service life from this reference. Factory water drains are measured, not retained as sold heat or drinking water. |  |
| boundary_uncertain | hybrid and unusual architectures | Hold item-specific selection pending principal-function review; do not force omission, generic-reference substitution or a universal industrial classification. If confirmed in scope, add actual compressor, refrigerant and heat exchanger or other distinct modules as atomic exchanges. | unsd-cpc3-2025; stiebel-storage-hybrid; dimplex-heating-2026 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Metal bodies, vessels and cooking cavities | conditional | own cutting, forming, welding or finishing | foreground production | per 1 kg reference flow |
| heater | Heating element and thermal-storage manufacture | conditional | own heater, cable or thermal-storage fabrication | foreground production | per 1 kg reference flow |
| polymer | Polymer moulding and insulation foaming | conditional | own moulding or reactive foam production | foreground production | per 1 kg reference flow |
| electronics | Induction coil and control assembly | conditional | own winding or board assembly | foreground production | per 1 kg reference flow |
| assembly | Configured appliance assembly | required | each declared finished configuration | foreground production | per 1 kg reference flow |
| test | Factory acceptance and rework | required | actual applicable safety and function tests | foreground production | per 1 kg reference flow |
| dispatch | Packaging and factory dispatch | required | factory-ready dispatch | foreground production | per 1 kg reference flow |
| services | Residual shared factory services | conditional | measured unassigned residual after process meters | foreground production | per 1 kg reference flow |

### Architecture and make/buy decisions

| Branch | Actual process evidence and make/buy rule | source_ids |
| --- | --- | --- |
| Instantaneous / immersion | Bare-wire insulating block or tube/spiral/filler are distinct. Bought finished heater replaces its own wire/tube/filler production. Declare seals, pressure parts and sensors. | stiebel-instantaneous |
| Storage water | Vessel, corrosion protection/anode, insulation, controls and electric module; own enamel/foam route differs from buying finished insulated vessel. Polyol, isocyanate, blowing agent and releases require actual recipe if foaming. | stiebel-storage-hybrid |
| Space heating | Radiant/convector, fan/PTC, thermal-storage cells or factory-filled liquid radiators are distinct. Buy full fan/thermal module once or model actual own manufacture. Oil-free design has no assumed oil. | dimplex-heating-2026; tdk-ptc-2026 |
| Soil heating | Cable conductor/heater, insulation/jacket, cold ends, seals, connector and thermostat as supplied; own extrusion/termination versus bought cable. Soil excavation and growing plants are later stages. | nexans-soil-heating |
| Cooking | Resistance oven/hotplate/grill/roaster with cavity/door/rack and optional fan differs from induction coil, converter, switching devices, cooling and panel. Other principal electrical mechanisms require their actual architecture, not an unsupported exclusion. | ti-induction-2013; rangemaster-quick-guide |

For own metal work collect cutting/pressing/forming, joining, wash/preparation and actual coating/enamel cure separately. For resistance heaters collect actual wire winding, bare-wire block assembly or sheath fill/compaction/seal and acceptance; PTC manufacture requires grinding, mixing, pressing, sintering, contacting and coating with each actual dopant and reaction release. Own cable production requires conductor preparation, actual insulation/jacket extrusion and termination. Own polymer production collects moulding/drying/regrind or reactive mixing/foaming/cure with its actual recipe and control outlets. Own induction/control work requires winding/insulation, PCB population/soldering, power-device and cooling assembly and test. These actual suboperation records feed their declared process group without overlapping bought complete-module boundaries.

The cards below are conditional identity-specific collection patterns, not a mandatory recipe. Verify each actual grade/formulation and supplier interface; add one card for every actual unlisted resin, blowing agent, device, fuel, waste or elementary species. A BOM-complete finished bought module includes its embodied metals/polymers/electronics once; own-process cards apply only outside that supplier boundary. Internal fabricated subassemblies are paired transfers that cancel in the rolled-up inventory. Never interpret unlisted or unresolved flows as zero.

### Process: Metal bodies, vessels and cooking cavities (`fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled low-carbon steel sheet (`steel_sheet`)

Include when matching steel-body BOM grade, coating and thickness.

- Selected flow: Cold-rolled low-carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: rangemaster-quick-guide

###### Austenitic stainless steel sheet (`stainless_sheet`)

Include when matching vessel or food-contact cavity grade and surface.

- Selected flow: Austenitic stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Copper tube (`copper_tube`)

Include when own matching tubular heater or water circuit.

- Selected flow: Copper tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: stiebel-instantaneous

###### Steel welding wire (`weld_wire`)

Include when actual wire grade and weld route.

- Selected flow: Steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Argon shielding gas (`argon`)

Include when actual argon shielding.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Vitreous enamel frit (`enamel_frit`)

Include when actual supplier formulation on vessel/cavity.

- Selected flow: Vitreous enamel frit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: stiebel-storage-hybrid

###### Polyester powder coating (`polyester_powder`)

Include when actual polyester formulation on exterior.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Sodium hydroxide cleaning solution (`sodium_hydroxide`)

Include when actual formulation and concentration in wash line.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Factory washing water (`cleaning_water`)

Include when actual water supplied to washing.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

###### Acetone cleaning solvent (`acetone`)

Include when documented acetone cleaning; never presumed for all coatings.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

The found wafer-production acetone flow does not match this metal-cleaning interface; UUID remains unresolved.

- Selected flow: Acetone
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solvent`
- Sources:

###### Alternating current (`fabrication_electricity`)

Include when CN 1–35 kV consumption-to-user supply only; qualify another supplier when different.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

#### Outputs

##### Waste flows

###### Low-carbon steel offcut scrap (`steel_scrap`)

Include when actual separated waste grade and recycler interface.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Austenitic stainless steel offcut scrap (`stainless_scrap`)

Include when actual separated waste grade; no gross-metal assay substitution.

- Selected flow: Austenitic stainless steel offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Metal-body washing wastewater (`wash_effluent`)

Include when external wastewater treatment interface.

- Selected flow: Metal-body washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

###### Metal-bearing wash-treatment sludge (`treatment_sludge`)

Include when on-site treatment yields sludge; own moisture and assay.

- Selected flow: Metal-bearing wash-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

###### Acetone-loaded activated carbon (`spent_carbon`)

Include when actual capture media leaves site.

- Selected flow: Acetone-loaded activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solvent`
- Sources:

##### Elementary flows

###### Acetone to air (`acetone_air`)

Include when measured stack plus fugitive acetone after actual controls.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solvent`
- Sources:

### Process: Heating element and thermal-storage manufacture (`heater`)

#### Inputs

##### Product flows

###### Nickel-chromium resistance wire (`nichrome_wire`)

Include when matching resistance-alloy grade; not induction or all resistance defaults.

- Selected flow: Nickel-chromium resistance wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Iron-chromium-aluminium resistance wire (`fecral_wire`)

Include when actual alternative alloy rather than added NiCr.

- Selected flow: Iron-chromium-aluminium resistance wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Magnesium oxide electrical-insulation powder (`magnesium_oxide`)

Include when verified own tubular fill recipe and purity.

- Selected flow: Magnesium oxide electrical-insulation powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Barium carbonate ceramic feed (`barium_carbonate`)

Include when own PTC ceramic recipe only.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

The adopted identity is primary-production material at plant; verify ceramic-feed purity and actual supplier without assuming a PTC recipe.

- Selected flow: Barium carbonate `95b9bf0d-61fb-4aeb-898d-e45dc5397ee0`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: tdk-ptc-2026

###### Titanium dioxide ceramic feed (`titanium_dioxide`)

Include when own PTC recipe; collect each other dopant separately.

- Selected flow: Titanium dioxide ceramic feed
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: tdk-ptc-2026

###### Polyvinyl chloride cable-jacket compound (`pvc_compound`)

Include when actual matching jacket compound and additives.

- Selected flow: Polyvinyl chloride cable-jacket compound
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: nexans-soil-heating

###### Silicone rubber cable-insulation compound (`silicone_compound`)

Include when actual alternative insulation chemistry.

- Selected flow: Silicone rubber cable-insulation compound
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Alternating current (`heater_electricity`)

Include when qualified CN medium-voltage supplied power for own heater manufacture.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

#### Outputs

##### Waste flows

###### Rejected nickel-chromium tubular heating element (`heater_reject`)

Include when actual rejected matching architecture; separately identify other reject designs.

- Selected flow: Rejected nickel-chromium tubular heating element
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

### Process: Polymer moulding and insulation foaming (`polymer`)

#### Inputs

##### Product flows

###### Acrylonitrile-butadiene-styrene moulding resin (`abs_resin`)

Include when actual own ABS shell; exclude resin when buying complete moulded shell.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

Use this identity only for the actual matching CN polymer-granulate procurement interface; verify heat-resistant grade and actual provider independently.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Carbon black pigment (`carbon_black`)

Include when actual separate pigment recipe; premixed resin includes pigment once.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: Carbon Black `dee14a4f-c02b-4bf5-affc-9e66b1d9a8ce`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Polyether polyol foam feed (`polyether_polyol`)

Include when actual own foam recipe, supplier grade and reactive content.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

Use only for the actual matching chemical-plant propylene-oxide block-polymerization route for polyurethane feed. Hydroxyl functionality, grade, biogenic content and actual foam recipe remain collection gaps.

- Selected flow: Polyether Polyol `328068ba-3cd2-44c7-a118-8274c9c7885b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Polymeric methylene diphenyl diisocyanate (`pmdi`)

Include when actual matched isocyanate recipe and assay; not universal foam chemistry.

- Selected flow: Polymeric methylene diphenyl diisocyanate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Cyclopentane foam blowing agent (`cyclopentane`)

Include when actual own blowing-agent recipe; add other agents separately.

- Selected flow: Cyclopentane foam blowing agent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Alternating current (`polymer_electricity`)

Include when qualified own moulding/foaming supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

#### Outputs

##### Waste flows

###### Rejected acrylonitrile-butadiene-styrene moulding (`abs_reject`)

Include when actual external reject; internal regrind paired once.

- Selected flow: Rejected acrylonitrile-butadiene-styrene moulding
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Rejected cured polyurethane foam (`pu_reject`)

Include when actual cured foam waste treatment interface.

- Selected flow: Rejected cured polyurethane foam
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

##### Elementary flows

###### Cyclopentane to air (`cyclopentane_air`)

Include when actual measured species after capture/control and retained foam stock; residual not automatically air.

- Selected flow: Cyclopentane to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

### Process: Induction coil and control assembly (`electronics`)

#### Inputs

##### Product flows

###### Enamelled copper winding wire (`enamelled_copper`)

Include when own induction winding; match enamel chemistry and conductor grade.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

Match actual copper conductor and enamel insulation explicitly; the generic magnet-wire identity also covers aluminium and never proves copper assay.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: ti-induction-2013

###### Manganese-zinc ferrite coil backing (`ferrite_core`)

Include when actual matching ferrite design; no presumed universal chemistry.

- Selected flow: Manganese-zinc ferrite coil backing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### FR-4 copper-clad printed circuit board (`bare_pcb`)

Include when own board assembly; exclude when bought completed board.

- Selected flow: FR-4 copper-clad printed circuit board
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Packaged insulated-gate bipolar transistor (`igbt`)

Include when actual induction converter device; alternatives individually described.

- Selected flow: Packaged insulated-gate bipolar transistor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: ti-induction-2013

###### Tin-silver-copper solder alloy (`solder`)

Include when actual measured assembly solder grade.

- Selected flow: Tin-silver-copper solder alloy
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Alternating current (`electronics_electricity`)

Include when qualified CN medium-voltage assembly supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

#### Outputs

##### Waste flows

###### Rejected populated induction-control board (`pcb_reject`)

Include when actual own board rejects sent to electronics treatment.

Use only for matching populated-board assembly rejects at a Chinese plant; do not substitute bare boards, whole appliances or treated waste.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

### Process: Configured appliance assembly (`assembly`)

#### Inputs

##### Product flows

###### Finished tubular immersion heating module (`bought_heater`)

Include when buy complete module; embedded tube/wire/fill not separately added.

- Selected flow: Finished tubular immersion heating module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: stiebel-instantaneous

###### Finished ceramic PTC heater module (`bought_ptc`)

Include when buy matching PTC module instead of its ceramic production inventory.

- Selected flow: Finished ceramic PTC heater module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: tdk-ptc-2026

###### Finished induction coil and power-converter module (`bought_induction`)

Include when buy complete specified module; no duplicate winding/board/device inputs.

- Selected flow: Finished induction coil and power-converter module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: ti-induction-2013

###### Finished enamelled steel water vessel (`bought_vessel`)

Include when buy vessel; no duplicated steel/enamel upstream.

- Selected flow: Finished enamelled steel water vessel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: stiebel-storage-hybrid

###### Glass-ceramic cooktop panel (`glass_ceramic`)

Include when actual induction/radiant cooking panel.

- Selected flow: Glass-ceramic cooktop panel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Tempered oven-door glass (`tempered_glass`)

Include when actual oven/griller enclosure.

- Selected flow: Tempered oven-door glass
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Finished bonded-magnetite thermal-storage cell (`storage_cell`)

Include when actual storage space heater; match supplier magnetite and binder composition.

- Selected flow: Finished bonded-magnetite thermal-storage cell
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: dimplex-heating-2026

###### Mineral-wool thermal-insulation board (`mineral_insulation`)

Include when actual insulating-board chemistry and facing.

- Selected flow: Mineral-wool thermal-insulation board
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Finished rigid polyurethane insulating insert (`pu_foam`)

Include when bought finished insert; if foamed on site split actual polyol/isocyanate/blowing agent recipe.

- Selected flow: Finished rigid polyurethane insulating insert
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: stiebel-storage-hybrid

###### Magnesium sacrificial anode (`magnesium_anode`)

Include when actual storage vessel magnesium grade; other anode designs separately qualified.

- Selected flow: Magnesium sacrificial anode
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Mineral heat-transfer oil (`radiator_oil`)

Include when actual factory fill for oil-filled radiator, not oil-free or later customer service.

- Selected flow: Mineral heat-transfer oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: dimplex-heating-2026

###### Finished electric fan motor (`fan_motor`)

Include when actual fan-assisted heater/oven; embedded motor copper/steel not added.

- Selected flow: Finished electric fan motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: dimplex-heating-2026

###### Finished appliance thermostat (`thermostat`)

Include when actual configured temperature control.

- Selected flow: Finished appliance thermostat
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Finished copper appliance wiring harness (`wiring_harness`)

Include when matching purchased harness with insulation included once.

- Selected flow: Finished copper appliance wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Finished acrylonitrile-butadiene-styrene housing (`abs_housing`)

Include when actual bought moulded ABS shell; own moulding needs actual resin/colourant/utilities/waste separately.

- Selected flow: Finished acrylonitrile-butadiene-styrene housing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Alternating current (`assembly_electricity`)

Include when qualified CN medium-voltage assembly supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

### Process: Factory acceptance and rework (`test`)

#### Inputs

##### Product flows

###### Alternating current (`test_electricity`)

Include when qualified factory safety/function test supply including reject retests.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Factory pressure-test water (`test_water`)

Include when actual liquid-circuit pressure/leak/function test.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

#### Outputs

##### Product flows

###### Electric instantaneous or storage water heaters and immersion heaters, electric space heating apparatus and soil heating apparatus, ovens, cookers, cooking plates, boiling rings, grillers and roasters (`finished_appliance`)

Include when one accepted specified configuration; not an averaged category model.

- Selected flow: Electric instantaneous or storage water heaters and immersion heaters, electric space heating apparatus and soil heating apparatus, ovens, cookers, cooking plates, boiling rings, grillers and roasters `cfcc8dd6-19dd-4174-95d3-7cccd44431c3`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Discarded factory pressure-test water (`test_discharge`)

Include when actual external discharge, internal loop return is not another purchased input.

- Selected flow: Discarded factory pressure-test water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

##### Elementary flows

###### Water vapour to air (`water_vapour`)

Include when actual test evaporation by water balance with stocks/moisture/reaction evidence.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

### Process: Packaging and factory dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard carton (`corrugated_board`)

Include when actual dispatch carton.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

Use only for matching C/E/F multilayer corrugated board with fiber at least80% and recycled-material content; actual recycled fraction, grade and producer remain measured supplier records.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Low-density polyethylene packaging film (`ldpe_film`)

Include when actual film; excluded from net appliance mass.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Expanded polystyrene protective pad (`eps_pad`)

Include when actual pad; identify alternative protective materials separately.

- Selected flow: Expanded polystyrene protective pad
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### Road freight transport service (`inbound_transport`)

Include when actual supplier-to-factory leg and truck service.

- Selected flow: Road freight transport service
- Flow property / unit: Transport work / t·km
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_transport.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources:

### Process: Residual shared factory services (`services`)

#### Inputs

##### Product flows

###### Alternating current (`residual_electricity`)

Include when only unassigned qualified purchased-electricity residual, not site gross meter.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Purchased hot-water heat (`purchased_heat`)

Include when actual delivered heat interface; independently metered supply/return or certified net meter.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

The found sanitation/domestic-hot-water heat flow and gross-calorific reference do not establish this factory purchased-heat interface; its UUID and property factors are not adopted.

- Selected flow: Heat from steam or hot water
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_heat.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources:

###### Natural gas supplied to factory burner (`natural_gas`)

Include when actual on-site furnace/boiler fuel, not user-appliance use or bought heat upstream.

- Selected flow: Natural gas supplied to factory burner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`
- Sources:

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2`)

Include when actual on-site combustion with carbon and incomplete species accounted.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

###### Carbon monoxide to air (`carbon_monoxide`)

Include when species-specific stack/fugitive measurement or reviewed technology evidence.

UUID confirms the basic flow identity only; match the actual provider, composition, grade, geography and interface. Air flows use unspecified air; review the compartment against the actual release environment.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Include when actual NO2 mass only; total NOx as NO2-equivalent is not this exchange.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

###### Nitric oxide to air (`nitric_oxide`)

Include when actual NO species mass after stated controls.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | factory outputs | Separate configuration-specific lines and meters first. Allocate remaining common loads using measured causal drivers such as occupied test time or machine cycle energy; document driver and period. Never average different apparatus configurations by unit count alone. |  |
| allocation_reject | rejects and rework | Accepted-product production carries attributable reject/rework/test burden. Scrap is a separate waste or evidenced co-product at its actual interface, not negative virgin metal or an automatic avoided-burden credit. Declare allocation method if a genuine saleable co-product exists. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

For a single configuration and one reconciled period, collect Q as each attributable exchange total including rejected production and rework; N as accepted complete units; total accepted calibrated net mass as the sum of their individual masses. M equals that sum divided by N; q_item = Q/N and q_ref = Q divided by that same total accepted mass. Rejects, test water and transport packaging never enter this denominator. No numeric equipment mass, yield, lifetime or intensity default is supplied.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test | reference output | foreground records | model; configuration; serial number; accepted net mass M; accepted count N; calibration; acceptance date | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each lot and meter interval | same complete reconciled production period | actual site and one configuration | accepted net mass per machine | calibration, source records, sampling and uncertainty |
| cp_exchange | all | physical exchanges | foreground records | lot; supplier; BOM line; grade; recipe; supplied state; gross/net mass; own assay; moisture; stocks; rejected quantity; return; upstream boundary | Reconcile calibrated scales, invoice/stock movement and complete supplier BOM; sample each physical material stream on its own basis. Record each actual unlisted atomic input/output separately. | kg | each lot and meter interval | same complete reconciled production period | actual site and one configuration | attributable exchange / accepted machines | calibration, source records, sampling and uncertainty |
| cp_utility | all | electricity | foreground records | site import; generation; export; storage change; every process/test meter; meter units; calibration; period; voltage; provider; causal driver | Read synchronized calibrated site and submeter records; reconcile already assigned loads and allocate only unassigned residual. Investigate negative residuals against period, units and combined uncertainty; never clip them to zero. | MJ | each lot and meter interval | same complete reconciled production period | actual site and one configuration | attributable electricity / accepted machines | calibration, source records, sampling and uncertainty |
| cp_water | all | water streams | foreground records | each volume; own temperature and density; each moisture; opening/closing stock; paired internal return; reaction water; evaporation; discharge; each stream assay | Measure all applicable water inputs and outlets with calibrated meters/scales and stream-specific sampling; close water including wet materials, reactions and inventories. Internal test recirculation is one paired transfer, not repeated purchase. | kg | each lot and meter interval | same complete reconciled production period | actual site and one configuration | attributable water exchange / accepted machines | calibration, source records, sampling and uncertainty |
| cp_solvent | fabrication | acetone | foreground records | input purity; stocks; product retention; recovered solvent; capture-media mass and own loading; actual destruction; wastewater solvent; stack/fugitive species | Measure acetone on each own stream basis. Capture into carbon is not destruction; recovery and retained liquid/sludge are non-air destinations. Measure after-control stack acetone as its own concentration × synchronized matching dry/wet gas flow × sampling period, plus independently measured or reviewed fugitive release. Record gas basis, control outlet, units, calibration and uncertainty for each term; never label unexplained mass residual as air emissions. | kg | each lot and meter interval | same complete reconciled production period | actual site and one configuration | attributable solvent exchange / accepted machines | calibration, source records, sampling and uncertainty |
| cp_heat | services | purchased heat | foreground records | supply mass; supply enthalpy; return mass; return enthalpy; common enthalpy datum; gross/net meter status; meter and allocation evidence | Meter supply and return independently: each own kg times own MJ/kg on a common datum. For gross imported heat subtract actual return energy once; retain certified net supplied heat without another return subtraction. | MJ | each lot and meter interval | same complete reconciled production period | actual site and one configuration | attributable heat / accepted machines | calibration, source records, sampling and uncertainty |
| cp_fuel | services | natural gas | foreground records | fuel mass or metered volume; own pressure/temperature/density; composition; calorific basis; burner; control; stock | Record actual on-site combustion and fuel provider; purchased heat upstream fuel belongs in its supplier dataset. Preserve each fuel separately. | kg | each lot and meter interval | same complete reconciled production period | actual site and one configuration | attributable fuel / accepted machines | calibration, source records, sampling and uncertainty |
| cp_emissions | all | species releases | foreground records | species; outlet/compartment; concentration; dry/wet gas flow; period; sampling; control; oxygen/reference corrections; species mass versus equivalent reporting; uncertainty | Use synchronized species-specific measured concentration and gas flow or independently reviewed route-specific evidence. Separate NO, NO2 and NOx-equivalent; carbon balance closes carbon but does not infer CO/NOx. | kg | each lot and meter interval | same complete reconciled production period | actual site and one configuration | attributable species release / accepted machines | calibration, source records, sampling and uncertainty |
| cp_transport | dispatch | freight | foreground records | net shipped payload; each distance; truck; actual leg; load factor evidence; duplicate supplier transport boundary | Use actual shipping documentation and route distance, payload mass times distance; avoid a leg already included by supplier. Packaging transport mass is separate from net reference denominator. | t·km | each lot and meter interval | same complete reconciled production period | actual site and one configuration | attributable freight / accepted machines | calibration, source records, sampling and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_period_normalization | raw period collection and all applicable exchanges | For the SAME configuration and reconciled period collect Qattr (each attributable exchange including reject/rework/test burden), Naccepted (accepted complete units) and Dnet (sum of calibrated accepted net masses). M = Dnet/Naccepted; q_item = Qattr/Naccepted; q_ref = Qattr/Dnet. Reject, packaging and test-water mass are excluded from Dnet. Retain raw Qattr native numerator units and exact conversions; never average across configurations. | synchronized meter/stock, calibrated serial-mass and acceptance records |
| dq_configuration | whole inventory | Retain drawing/BOM/test/configuration linkage, complete make/buy ledger and actual grade/provider. No cross-configuration denominator. | acceptance and supplier records |
| dq_uncertainty | physical balances and utility residuals | Investigate closure with actual combined measurement, sampling and allocation uncertainty. No universal tolerance, assumed yield or unmeasured loss-to-air. Match assays separately for product, scrap, slag, sludge, wastewater and release when present; account reactions/stocks and cancel paired internal transfers. | balance workbook and uncertainty budget |
| dq_gaps | identity and range gaps | Specific chemical recipes, grades, bought module supply providers, wastes and elementary UUIDs remain unresolved until direct-read qualified. No empirical mass, factor or range is adopted. Conditional absence requires actual architecture evidence; unknown remains unknown. | qualified data and gap disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference identity | Confirm full product function and actual architecture; resolve uncertain industrial/hybrid principal-function assignment. Generic UUID does not prove every variant. | unsd-cpc3-2025; stiebel-storage-hybrid |
| validate_mass | reference output | Validate calibrated accepted net masses and count in one configuration/period, output 1 kg, and all applicable exchange conversions; packaging/rejects excluded from denominator but their attributable burdens included. |  |
| validate_routes | make/buy and conditions | Trace all actual modules/grades/recipes and missing atomic cards. Complete purchased module and its embedded material/process burdens are counted once; actual other electrical architectures require review and collection, not silent exclusion. | ti-induction-2013; tdk-ptc-2026 |
| validate_balances | physical materials/water/solvent | Reconcile each own assay/density/moisture/reaction/stock and paired return. Include retained/recovered/captured/destroyed solvent and all non-air destinations; capture is not destruction and residual is not an emission. Investigate mismatch against measured combined uncertainty. |  |
| validate_utilities | all process and shared meters | Reconcile same-site-period purchased imports, generation, exports, storage and process/test loads. Residual-only services cannot add whole-site totals again. Heat gross/net status and independent own supply/return enthalpies must be documented. |  |
| validate_species | direct releases | Match species/compartment and controls; NOx-equivalent cannot masquerade as NO2 mass. CO and NOx require independent species evidence beyond fuel carbon. Missing identity, provider or amount blocks a complete concrete data package. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground equipment-production data package; process and lifecyclemodel are downstream projections |
| downstream_use | secondary_dataset; background_dataset after qualified review |
| allowed_use | Same specified apparatus/configuration, production route, supplier interface, site and period |
| excluded_use | Generic use-phase heat/food service or lifetime comparisons; unsupported cross-route substitution |
| required_metadata | All reference qualifiers; boundary/make-buy ledger; test/reject basis; upstream/waste providers; allocation; measurement records |
| required_quality_disclosure | Candidate status; unresolved classifications, UUIDs, grade/recipe/provider and empirical ranges; conditional not-applicable evidence; combined uncertainty |
| update_trigger | Design, mechanism, supplier grade/recipe, site, meter interface, test requirement or category evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, Central Product Classification Version 3.0 Explanatory Notes, 30 June 2025, printed pp. 239–240. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category title and domestic parent; neighboring non-electric and solar categories, no detailed 44817 leaf note. |
| stiebel-instantaneous | handbook | STIEBEL ELTRON, What heating systems are used in instantaneous water heaters?, undated publisher page, inspected 2026-10-02. https://www.stiebel-eltron.co.uk/en/service/faq/what-heating-systems-are-used-in-instantaneous-water-heaters.html | Bare-wire insulating block versus electrically insulated tubular heater; qualitative architecture only. |
| stiebel-storage-hybrid | handbook | STIEBEL ELTRON, SB-E Single Coil DHW Tanks with Integral Backup Heating Element, undated publisher page, inspected 2026-10-02. https://www.stiebel-eltron-usa.com/products/sb-e-single-coil-domestic-hot-water-tanks-ingetral-backup-element-solar-geothermal-or-hydronic-applications | Steel vessel, enamel, urethane insulation and anode example; indirect/solar backup counterexample requiring principal-function review. |
| dimplex-heating-2026 | handbook | Dimplex and Xpelair, Heating and Ventilation 2026, cover 2026 with cover code DTC0725 and final back-cover code DTC0126; pp. 14–15, 30–33, 38–45. https://www.dimplex.co.uk/sites/g/files/emiian551/files/2026-02/Dimplex%20Xpelair%20Trade%20Catalogue%202026_1.pdf | Storage, infrared, fan and oil-filled/oil-free architectures; heat-pump counterexample; no ratings or intensities transferred. |
| nexans-soil-heating | handbook | Nexans, Soil heating, undated publisher page, inspected 2026-10-02. https://www.nexans.no/en/segments/building/heating-cables/frost-protection/soil-heating.html | Single-conductor cable and cable-element alternatives; supplied apparatus versus excavation/installed field. |
| ti-induction-2013 | handbook | Texas Instruments, C2000 Dual VF Resonant Induction Cookers, SPRABT2, April 2013, pp. 1, 3–6. https://www.ti.com/lit/an/sprabt2/sprabt2.pdf | Induction coil/power converter architecture as counterexample to resistance-only cooking. |
| tdk-ptc-2026 | handbook | TDK Electronics, PTC Thermistors — General technical information, April 2026, pp. 2, 4. https://www.tdk-electronics.tdk.com/download/539366/728d0d379187d1dfa0831555b8c93202/pdf-general-technical-information.pdf | Conditional ceramic PTC manufacture distinct from wound metal; supplier recipe not a category default. |
| rangemaster-quick-guide | handbook | Rangemaster Quick Guide, undated original, pp. 2–3. https://www.rangemaster.co.uk/sites/default/files/2021-02/Rangemaster%20Quick%20Guide.pdf | Actual steel pressing/cutting/washing/polishing/enamelling and testing example across mixed fuel models. |
