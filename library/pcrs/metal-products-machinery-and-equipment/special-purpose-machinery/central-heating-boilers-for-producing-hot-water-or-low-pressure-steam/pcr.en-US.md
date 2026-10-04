---
status: candidate
content_maturity: authored_methodology
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.central-heating-boilers-for-producing-hot-water-or-low-pressure-steam
language: en-US
sync_with: pcr.zh-CN.md
---


# Central heating boilers, for producing hot water or low pressure steam

## 1. Scope and Applicability

Manufacturing methodology for complete central heating boilers delivering hot water or low-pressure steam to a building heating circuit. Includes cast-iron sectional, fabricated steel, stainless condensing, electric resistance and wood-fired designs when their actual configuration is declared. A combined boiler may provide domestic hot water, but a standalone domestic water heater is excluded. Also exclude high-pressure industrial steam generators, heat pumps, room air heaters, radiators, independently supplied boiler parts and site heating networks. The boundary ends at accepted manufacture; customer installation and service fuel/efficiency are separate modelling. No representative product defines all category technology.

CPC 3.0 parent 4482 specifies domestic cooking and heating equipment, non-electric. Only the corresponding non-electric portion of this methodology is classification-matched to 44825; the independent methodology is broader because it retains evidenced electric heating boilers. Actual electric-equipment classification requires separate function and authoritative classification review; no other classification edge is claimed. Source: un-cpc-3-0, printed p.240.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.central-heating-boilers-for-producing-hot-water-or-low-pressure-steam |
| classification_refs | CPC 3.0 44825; broader |
| covered_products | Complete hot-water or low-pressure-steam heating boilers |
| excluded_products | Industrial high-pressure steam generator; heat pump; standalone domestic water heater; radiator; independent parts |
| representative_product | A declared complete packaged boiler; cast, welded, electric and biomass alternatives remain distinct |
| production_route | Actual make/buy, body fabrication, finishing, assembly, hydraulic/functional acceptance and packing |
| market_state | Accepted boiler at factory gate in actual delivered state with supplied accessories and BOM-retained sealed fluid/filler; free test water and transport packaging excluded from net mass |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared accepted boiler |
| How much | 1 kg |
| How well | Declared heat medium, rating, working pressure, material grade, energy technology and accepted configuration |
| How long or cycle | One factory-gate supply; no service life or lifetime heat output claimed |
| reference_flow_link | `final_product` |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted central heating boiler |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model; same configuration/BOM; accepted net mass; material grades; heat medium; pressure; rated heat output; energy technology/fuel; condensation; make/buy; included accessories; test state; site; period |


Declare qualifiers in the data package. D is the sum of calibrated accepted net masses for one configuration and reporting period; N counts those accepted units and M = D/N. Keep attributable period exchange Q including reject/rework burdens; q_item = Q/N and q_ref = Q/D. Never average across configurations or include rejected units, packaging or test water in D. This mass reference is manufacturing supply, not delivered heat service.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_mass measures D using a calibrated scale; all applicable exchanges use the same period/configuration D. |
| energy_basis | test_natural_gas, test_oil, test_wood, purchased_steam | Energy | MJ | Fuel uses actual net calorific value, measured mass or volume at declared conditions; wood requires moisture. Purchased steam uses measured delivered heat or kg times actual supply enthalpy relative to a common reference minus actual condensate return enthalpy, each mass in kg times enthalpy in MJ/kg. Do not add supplier fuel burden to purchased heat. |
| material_basis | physical material and species records | Mass | kg | Wet mass, dry solids and contained metal are distinct; each input, product, scrap, slag, sludge, wastewater and release uses its own matched assay and wet/dry basis. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received metal, cast sections or completed components with supplier treatment state |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0 44825 covers corresponding non-electric portion; methodology also covers evidenced electric boilers |
| recursive_input_rule | Record a purchased complete same-category boiler as one supplied product with upstream dataset; do not recursively duplicate its manufacture |
| upstream_dataset_requirement | Actual grade, composition, technology, geography and delivery interface; finished component datasets include embedded materials and motors once |
| disclosure | Make/buy matrix, actual process exclusions and supplier completion state; factory tests separated from use |


| rule_id | Rule | source_ids |
| --- | --- | --- |
| gate | Include actual manufacture, finishing, assembly, test water/energy/fuels/releases/condensate, repeats, rejects and packing before gate. Exclude customer commissioning and later heat-service fuel. | weil-80; acv-electric |
| make_buy | Purchased sections/exchangers bypass their own in-house material/casting rows. Purchased burners, pumps and boards carry their embedded manufacture once; do not also add their hidden metals, motor or electronics. In-house manufacture replaces the completed-component purchase, and each actual constituent must be separate. | acv-electric; viessmann-condensing |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| casting | In-house section casting | conditional | Only sections actually cast inside the boundary | foreground | 1 kg |
| fabrication | Body and jacket fabrication | conditional | Only actual cutting/forming/welding/machining | foreground | 1 kg |
| finish | Cleaning and finishing | conditional | Only actual specified surface route | foreground | 1 kg |
| assembly | Purchased component assembly | required | All declared delivered components | foreground | 1 kg |
| test | Factory hydraulic and functional acceptance | required | Actual tests before gate including repeats | foreground | 1 kg |
| dispatch | Packing and shared services | required | Actual dispatch and residual services | foreground | 1 kg |


### Process: In-house section casting (`casting`)

#### Inputs

##### Product flows

###### Foundry pig iron (`iron_charge`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Foundry pig iron

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_iron_charge / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_iron_charge`

- Sources: `jrc-foundry-2024`

###### Cast iron scrap charge (`iron_scrap_charge`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Cast iron scrap charge

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_iron_scrap_charge / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_iron_scrap_charge`

- Sources: `jrc-foundry-2024`

###### Silica moulding sand (`silica_sand`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Silica moulding sand

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_silica_sand / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_silica_sand`

- Sources: `jrc-foundry-2024`

###### Phenolic resin mould binder (`phenolic_binder`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Phenolic resin mould binder

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_phenolic_binder / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_phenolic_binder`

- Sources: `jrc-foundry-2024`

###### Foundry coke (`coke`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Foundry coke

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_coke / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_coke`

- Sources: `jrc-foundry-2024`

###### Electricity at factory consumption meter (`cast_electricity`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Electricity at factory consumption meter

- Flow property / unit: Energy / kWh

- Amount rule: Attributable period amount collected in cp_cast_electricity / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_cast_electricity`

- Sources: `jrc-foundry-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Iron melting slag (`slag`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Iron melting slag

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_slag / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_slag`

- Sources: `jrc-foundry-2024`

###### Spent silica moulding sand (`spent_sand`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Spent silica moulding sand

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_spent_sand / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_spent_sand`

- Sources: `jrc-foundry-2024`

###### Iron-bearing collected foundry dust (`foundry_dust`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Iron-bearing collected foundry dust

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_foundry_dust / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_foundry_dust`

- Sources: `jrc-foundry-2024`

##### Elementary flows

### Process: Body and jacket fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Carbon steel sheet (`carbon_steel`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Carbon steel sheet

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_carbon_steel / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_carbon_steel`

- Sources: `acv-electric`

###### Stainless steel sheet (`stainless_steel`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Stainless steel sheet

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_stainless_steel / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_stainless_steel`

- Sources: `viessmann-condensing`

###### Steel welding wire (`weld_wire`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Steel welding wire

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_weld_wire / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_weld_wire`

- Sources: `acv-electric`

###### Argon shielding gas (`argon`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Argon shielding gas

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_argon / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_argon`

- Sources: `viessmann-condensing`

###### Water-based machining emulsion (`machining_emulsion`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Water-based machining emulsion

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_machining_emulsion / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_machining_emulsion`

- Sources: `jrc-foundry-2024`

###### Electricity at factory consumption meter (`fabrication_power`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Electricity at factory consumption meter

- Flow property / unit: Energy / kWh

- Amount rule: Attributable period amount collected in cp_fabrication_power / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_fabrication_power`

- Sources: `acv-electric`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Carbon steel fabrication scrap (`steel_scrap`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Carbon steel fabrication scrap

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_steel_scrap / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_steel_scrap`

- Sources: `acv-electric`

###### Stainless steel fabrication scrap (`stainless_scrap`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Stainless steel fabrication scrap

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_stainless_scrap / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_stainless_scrap`

- Sources: `viessmann-condensing`

###### Spent machining emulsion (`spent_emulsion`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Spent machining emulsion

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_spent_emulsion / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_spent_emulsion`

- Sources: `acv-electric`

##### Elementary flows

### Process: Cleaning and finishing (`finish`)

#### Inputs

##### Product flows

###### Process cleaning water (`finish_water`)

Conditional named chemistry; require actual recipe/SDS. Manufacturer finishing description does not establish this recipe. Split every other actual reagent/formulation species into its own exchange.

- Selected flow: Process cleaning water

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_finish_water / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_finish_water`

- Sources: `acv-electric`

###### Sodium hydroxide (`sodium_hydroxide`)

Conditional named chemistry; require actual recipe/SDS. Manufacturer finishing description does not establish this recipe. Split every other actual reagent/formulation species into its own exchange.

- Selected flow: Sodium hydroxide

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_sodium_hydroxide / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_sodium_hydroxide`

- Sources: `acv-electric`

###### Phosphoric acid (`phosphoric_acid`)

Conditional named chemistry; require actual recipe/SDS. Manufacturer finishing description does not establish this recipe. Split every other actual reagent/formulation species into its own exchange.

- Selected flow: Phosphoric acid

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_phosphoric_acid / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_phosphoric_acid`

- Sources: `acv-electric`

###### Polyester coating powder (`polyester_powder`)

Conditional named chemistry; require actual recipe/SDS. Manufacturer finishing description does not establish this recipe. Split every other actual reagent/formulation species into its own exchange.

- Selected flow: Polyester coating powder

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_polyester_powder / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_polyester_powder`

- Sources: `acv-electric`

###### Xylene coating solvent (`xylene`)

Conditional named chemistry; require actual recipe/SDS. Manufacturer finishing description does not establish this recipe. Split every other actual reagent/formulation species into its own exchange.

- Selected flow: Xylene coating solvent

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_xylene / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_xylene`

- Sources: `acv-electric`

###### Electricity at factory consumption meter (`finish_power`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Electricity at factory consumption meter

- Flow property / unit: Energy / kWh

- Amount rule: Attributable period amount collected in cp_finish_power / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_finish_power`

- Sources: `acv-electric`

###### Natural gas supplied for coating oven (`finish_gas`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Natural gas supplied for coating oven

- Flow property / unit: Energy / MJ

- Amount rule: Attributable period amount collected in cp_finish_gas / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_finish_gas`

- Sources: `acv-electric`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Coating sludge (`paint_sludge`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Coating sludge

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_paint_sludge / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_paint_sludge`

- Sources: `acv-electric`

###### Metal-bearing surface-treatment wastewater (`finish_wastewater`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Metal-bearing surface-treatment wastewater

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_finish_wastewater / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_finish_wastewater`

- Sources: `acv-electric`

##### Elementary flows

###### Xylene to air (`xylene_air`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Xylene to air

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_xylene_air / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_xylene_air`

- Sources: `acv-electric`

### Process: Purchased component assembly (`assembly`)

#### Inputs

##### Product flows

###### Finished cast iron boiler section (`purchased_section`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Finished cast iron boiler section

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_purchased_section / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_purchased_section`

- Sources: `weil-80`

###### Finished stainless steel boiler heat exchanger (`purchased_exchanger`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Finished stainless steel boiler heat exchanger

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_purchased_exchanger / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_purchased_exchanger`

- Sources: `viessmann-condensing`

###### Complete gas burner assembly (`burner`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Complete gas burner assembly

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_burner / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_burner`

- Sources: `viessmann-condensing`

###### Complete oil burner assembly (`oil_burner`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Complete oil burner assembly

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_oil_burner / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_oil_burner`

- Sources: `weil-80`

###### Incoloy 800 electric heating element (`element`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Incoloy 800 electric heating element

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_element / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_element`

- Sources: `acv-electric`

###### Complete circulating pump (`pump`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Complete circulating pump

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_pump / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_pump`

- Sources: `acv-electric`

###### Boiler electronic control board (`control`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Boiler electronic control board

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_control / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_control`

- Sources: `viessmann-condensing`

###### Boiler pressure safety valve (`valve`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Boiler pressure safety valve

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_valve / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_valve`

- Sources: `acv-electric`

###### Refractory cement lining (`refractory`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Refractory cement lining

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_refractory / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_refractory`

- Sources: `viessmann-wood`

###### Mineral wool thermal insulation (`insulation`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Mineral wool thermal insulation

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_insulation / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_insulation`

- Sources: `weil-80`

###### EPDM sealing gasket (`seal`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: EPDM sealing gasket

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_seal / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_seal`

- Sources: `acv-electric`

###### Electricity at factory consumption meter (`assembly_power`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Electricity at factory consumption meter

- Flow property / unit: Energy / kWh

- Amount rule: Attributable period amount collected in cp_assembly_power / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_assembly_power`

- Sources: `acv-electric`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory hydraulic and functional acceptance (`test`)

#### Inputs

##### Product flows

###### Factory hydraulic test water (`test_water`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Factory hydraulic test water

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_test_water / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_test_water`

- Sources: `acv-electric`

###### Electricity at factory consumption meter (`test_power`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Electricity at factory consumption meter

- Flow property / unit: Energy / kWh

- Amount rule: Attributable period amount collected in cp_test_power / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_test_power`

- Sources: `acv-electric`

###### Natural gas for factory firing (`test_natural_gas`)

Only actual factory firing before dispatch; no later customer fuel. Keep fuel mass/volume, actual composition/moisture and calorific value.

- Selected flow: Natural gas for factory firing

- Flow property / unit: Energy / MJ

- Amount rule: Attributable period amount collected in cp_test_natural_gas / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_test_natural_gas`

- Sources: `viessmann-condensing`

###### Light fuel oil for factory firing (`test_oil`)

Only actual factory firing before dispatch; no later customer fuel. Keep fuel mass/volume, actual composition/moisture and calorific value.

- Selected flow: Light fuel oil for factory firing

- Flow property / unit: Energy / MJ

- Amount rule: Attributable period amount collected in cp_test_oil / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_test_oil`

- Sources: `weil-80`

###### Firewood for factory firing (`test_wood`)

Only actual factory firing before dispatch; no later customer fuel. Keep fuel mass/volume, actual composition/moisture and calorific value.

- Selected flow: Firewood for factory firing

- Flow property / unit: Energy / MJ

- Amount rule: Attributable period amount collected in cp_test_wood / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_test_wood`

- Sources: `viessmann-wood`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Hydraulic test drain water (`test_drain`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Hydraulic test drain water

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_test_drain / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_test_drain`

- Sources: `acv-electric`

###### Combustion condensate wastewater (`condensate`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Combustion condensate wastewater

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_condensate / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_condensate`

- Sources: `viessmann-condensing`

###### Wood combustion ash (`wood_ash`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Wood combustion ash

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_wood_ash / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_wood_ash`

- Sources: `viessmann-wood`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2`)

Only actual release, species and air compartment. Require species-specific stack flow/concentration or applicable emission method; efficiency advertisements are not emission factors.

- Selected flow: Fossil carbon dioxide to air

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_fossil_co2 / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_fossil_co2`

- Sources: `weil-80`

###### Biogenic carbon dioxide to air (`biogenic_co2`)

Only actual release, species and air compartment. Require species-specific stack flow/concentration or applicable emission method; efficiency advertisements are not emission factors.

- Selected flow: Biogenic carbon dioxide to air

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_biogenic_co2 / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_biogenic_co2`

- Sources: `viessmann-wood`

###### Carbon monoxide to air (`co`)

Only actual release, species and air compartment. Require species-specific stack flow/concentration or applicable emission method; efficiency advertisements are not emission factors.

- Selected flow: Carbon monoxide to air

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_co / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_co`

- Sources: `weil-80`

###### Nitrogen oxides expressed as nitrogen dioxide to air (`nox`)

Only actual release, species and air compartment. Require species-specific stack flow/concentration or applicable emission method; efficiency advertisements are not emission factors.

- Selected flow: Nitrogen oxides expressed as nitrogen dioxide to air

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_nox / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_nox`

- Sources: `weil-80`

###### Particulate matter to air (`particles`)

Only actual release, species and air compartment. Require species-specific stack flow/concentration or applicable emission method; efficiency advertisements are not emission factors.

- Selected flow: Particulate matter to air

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_particles / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_particles`

- Sources: `weil-80`

### Process: Packing and shared services (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard packaging (`corrugated`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Corrugated cardboard packaging

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_corrugated / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_corrugated`

- Sources: `acv-electric`

###### Wood pallet (`wood_pallet`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Wood pallet

- Flow property / unit: Mass / kg

- Amount rule: Attributable period amount collected in cp_wood_pallet / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_wood_pallet`

- Sources: `acv-electric`

###### Electricity at factory consumption meter (`residual_power`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Electricity at factory consumption meter

- Flow property / unit: Energy / kWh

- Amount rule: Attributable period amount collected in cp_residual_power / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_residual_power`

- Sources: `acv-electric`

###### Purchased saturated steam heat (`purchased_steam`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Purchased saturated steam heat

- Flow property / unit: Energy / MJ

- Amount rule: Attributable period amount collected in cp_purchased_steam / D.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_purchased_steam`

- Sources: `acv-electric`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted central heating boiler (`final_product`)

Record only if this exchange occurs; identify exact grade, composition and delivery interface.

- Selected flow: Accepted central heating boiler

- Flow property / unit: Mass / kg

- Amount rule: 1 kg

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `collected_record`

- Collection protocol: `cp_mass`

- Sources: `acv-electric`

##### Waste flows

##### Elementary flows

NOx expressed as NO2 is a declared reporting-equivalence convention, not proof that all molecules are NO2; preserve measured NO and NO2 species or conversion convention separately. Particulate matter requires actual sampling definition and measured size fraction; PM10 and PM2.5 use separate exchanges if measured, never infer them from unknown-size total dust. Add each actual sealed-fluid/filler exchange and its BOM retention, without counting purchased complete-component internals twice.

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation | Separate configurations and routes; use measured causal machine hours, heat, test cycles or treated area for shared work. Retain reject/rework burden in Q for accepted production. Internal returns cancel paired transfers; no automatic avoided-burden credit for scrap. Declare actual waste/coproduct status and consistent upstream recycling allocation. | jrc-foundry-2024 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | final_product | measurement | Model; configuration; serial; accepted net mass; N; reporting period | Weigh accepted complete boiler in actual delivered state on calibrated scale, including BOM-retained sealed fluid/filler but excluding transport packaging and free test water; reconcile BOM and acceptance. Record D as sum of accepted net masses. | kg | Each accepted unit | Matched reporting period | One configuration and factory | per 1 kg reference flow | Scale calibration; accepted serials; BOM |
| cp_iron_charge | casting | iron_charge | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_iron_scrap_charge | casting | iron_scrap_charge | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_silica_sand | casting | silica_sand | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_phenolic_binder | casting | phenolic_binder | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_coke | casting | coke | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_cast_electricity | casting | cast_electricity | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kWh | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_slag | casting | slag | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_spent_sand | casting | spent_sand | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_foundry_dust | casting | foundry_dust | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_carbon_steel | fabrication | carbon_steel | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_stainless_steel | fabrication | stainless_steel | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_weld_wire | fabrication | weld_wire | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_argon | fabrication | argon | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_machining_emulsion | fabrication | machining_emulsion | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_fabrication_power | fabrication | fabrication_power | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kWh | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_steel_scrap | fabrication | steel_scrap | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_stainless_scrap | fabrication | stainless_scrap | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_spent_emulsion | fabrication | spent_emulsion | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_finish_water | finish | finish_water | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_sodium_hydroxide | finish | sodium_hydroxide | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_phosphoric_acid | finish | phosphoric_acid | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_polyester_powder | finish | polyester_powder | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_xylene | finish | xylene | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_finish_power | finish | finish_power | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kWh | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_finish_gas | finish | finish_gas | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | MJ | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_paint_sludge | finish | paint_sludge | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_finish_wastewater | finish | finish_wastewater | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_xylene_air | finish | xylene_air | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Measure actual species and compartment using matched concentration and discharge/stack flow; document sampling, dry/wet and oxygen basis. Carbon balance supports total carbon only, never establishes CO or NOx species. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_purchased_section | assembly | purchased_section | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_purchased_exchanger | assembly | purchased_exchanger | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_burner | assembly | burner | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_oil_burner | assembly | oil_burner | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_element | assembly | element | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_pump | assembly | pump | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_control | assembly | control | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_valve | assembly | valve | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_refractory | assembly | refractory | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_insulation | assembly | insulation | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_seal | assembly | seal | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_assembly_power | assembly | assembly_power | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kWh | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_test_water | test | test_water | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_test_power | test | test_power | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kWh | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_test_natural_gas | test | test_natural_gas | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | MJ | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_test_oil | test | test_oil | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | MJ | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_test_wood | test | test_wood | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | MJ | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_test_drain | test | test_drain | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_condensate | test | condensate | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_wood_ash | test | wood_ash | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_fossil_co2 | test | fossil_co2 | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Measure actual species and compartment using matched concentration and discharge/stack flow; document sampling, dry/wet and oxygen basis. Carbon balance supports total carbon only, never establishes CO or NOx species. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_biogenic_co2 | test | biogenic_co2 | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Measure actual species and compartment using matched concentration and discharge/stack flow; document sampling, dry/wet and oxygen basis. Carbon balance supports total carbon only, never establishes CO or NOx species. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_co | test | co | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Measure actual species and compartment using matched concentration and discharge/stack flow; document sampling, dry/wet and oxygen basis. Carbon balance supports total carbon only, never establishes CO or NOx species. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_nox | test | nox | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Measure actual species and compartment using matched concentration and discharge/stack flow; document sampling, dry/wet and oxygen basis. Carbon balance supports total carbon only, never establishes CO or NOx species. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_particles | test | particles | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Measure actual species and compartment using matched concentration and discharge/stack flow; document sampling, dry/wet and oxygen basis. Carbon balance supports total carbon only, never establishes CO or NOx species. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_corrugated | dispatch | corrugated | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_wood_pallet | dispatch | wood_pallet | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | kg | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_residual_power | dispatch | residual_power | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Site meter minus already assigned casting, fabrication, finishing, assembly, test and packing loads; reconcile imports, on-site generation, exports and storage for same period/units. Allocate only measured unassigned residual; investigate negative residual, never clip. | kWh | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |
| cp_purchased_steam | dispatch | purchased_steam | measurement | Period; configuration; quantity; unit; grade/species; supplier/compartment; stocks; sampling and uncertainty | Meter or weigh actual attributed period exchange; reconcile invoices, stock changes, internal returns and reject/rework. | MJ | Each batch/test or meter period | Matched reporting period | Declared process and configuration | per 1 kg reference flow | Calibrated meter; assay; receipts; allocation record |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Use attributable period amount Q / D for each exchange; preserve original quantity and units; final_product = 1 kg. | Q; D; cp_mass | q_ref | acv-electric |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all applicable rows | Confirm actual UUID, property/unit, material grade, supply interface and downstream waste provider. Missing identity remains unknown; not_applicable requires documented absence, not zero. Add separate cards for actual alloys, fuels, agents, wastes or species not listed. | Direct identities and supplier/site records |
| period | all exchanges | Use matched period, configuration, BOM and tests; track actual missing coverage and uncertainty. No universal empirical range or advertised efficiency fills manufacturing data. | Records and uncertainty budget |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_check | Require positive D and N, same accepted configuration and calibrated net masses; reconcile reference output 1 kg, Q/D and retained reject/rework. | acv-electric |
| water_closure | Close actual water: external water and input moisture plus beginning stock and reaction generation equal retained product water, end stock, evaporation, discharge and reaction consumption. Pair internal returns; test recirculation is not repeated purchased water. Investigate residual with actual combined meter/sampling/allocation uncertainty; no universal tolerance. | acv-electric |
| metal_closure | For each contained metal/species, apply its own matched assay on every input, product, scrap, slag, sludge, wastewater and release; include beginning/end stocks, reaction transformations and paired transfers. Gross material mass never equals contained element. Investigate closure against actual combined measurement/sampling/allocation uncertainty. | jrc-foundry-2024 |
| solvent_closure | For each actual solvent close input and stock change against product retention, recovered solvent, capture media, actual destruction, air releases and non-air residuals; distinguish capture from destruction. Use combined actual uncertainty. | acv-electric |
| utility_check | Reconcile all process/test/dispatch assigned loads and unassigned shared residual to same measured site balance, period and units. Do not add whole-factory totals on submeters. Investigate negative residuals against actual meter/sampling/allocation uncertainty, never clip them; reconcile imports, actual generation, fuel, exports and stock interfaces without counting the same carrier twice. Fuel carbon alone cannot establish CO/NOx; require species-specific evidence and fossil/biogenic split. NOx as NO2 is a reporting-equivalence convention, not pure NO2 identity; preserve actual NO/NO2 measurement and convention. Particle emissions require actual sampling definition and size fraction; measured PM10/PM2.5 are separate exchanges and never inferred from unknown-size dust. Factory firing emissions and condensate remain production exchanges; later use is separate. | weil-80; viessmann-condensing |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared manufacturing supply and downstream process/lifecycle projections |
| excluded_use | Unqualified heat-service comparisons, operating efficiency or lifetime claims |
| required_metadata | All qualifiers; site/period; D,N; make/buy; testing; actual providers |
| required_quality_disclosure | Missing UUIDs/ranges; route and foreground coverage; uncertainty; sampling; allocation; actual gaps |
| update_trigger | Changed configuration, material, provider, energy technology, test or period |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, subclass 44825 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification coordinate and neighbouring product boundaries only; not manufacturing route or inventory evidence |
| weil-80 | handbook | Weil-McLain 80 Cast Iron Boiler Submittal, p.1 https://www.weil-mclain.com/wp-content/uploads/SUB_001_80-Submittal.pdf | Cast-iron water/steam gas/oil boiler, jacket, refractory, conditional factory fire-test |
| acv-electric | handbook | ACV E-Tech W A1007841 664Y7800 A, p.6 https://downloads.acv.com/A1007841_664Y7800_A_E-Tech%20W_EN.pdf | Steel heating body and casing, Incoloy elements, finishing and hydraulic test; model values not defaults |
| viessmann-condensing | handbook | Vitocrossal 300 CI3, 6222565 GB 3/2024, p.2 https://www.viessmann.co.uk/content/dam/public-brands/gb/products/gas-heating/vitocrossal-200-type-ci3/Technical%20Data%20Manual%20Vitocrossal%20300%20240301.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/Technical%20Data%20Manual%20Vitocrossal%20300%20240301.pdf | Stainless condensing heat exchanger and assembled burner/control configuration |
| viessmann-wood | handbook | Vitoligno 150-S product information https://www.viessmann.it/it/prodotti/caldaia-a-pellet-cippato/vitoligno-150-s.html | Wood heating alternative, refractory and ash; no advertised efficiency used |
| jrc-foundry-2024 | official_guidance | JRC Smitheries and Foundries BREF 2024, section 2.2.1.1, p.67; DOI 10.2760/4805267 https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | Conditional in-house casting decomposition; no boiler-specific quantities |
