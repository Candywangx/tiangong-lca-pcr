---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.ferro-chromium
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ferro-chromium

## 1. Scope and Applicability

This PCR applies to foreground production of solid, marketable ferro-chromium at the producing facility gate. It covers high-carbon, medium-carbon, and low-carbon ferro-chromium, provided the dataset declares grade, chromium and carbon contents, production route, furnace configuration, and physical form. It includes on-site burden preparation when used, smelting or metallothermic/refining operations, tapping, casting, crushing and screening, on-site off-gas and dust control, water-loop losses, and on-site slag/metal recovery.

The PCR excludes chromium metal, silico-chromium sold as the declared product, stainless steel and other downstream alloy production, other ferro-alloys, mining and beneficiation of chromite, production of purchased reductants and fluxes, inbound and outbound transport, capital equipment, and product use or end-of-life. These excluded upstream product systems shall be represented by compatible background datasets when they cross the foreground boundary. Ferro-chromium made primarily from secondary chromium-bearing residues requires a separately reviewed extension because its feed identity and avoided-burden claims differ materially.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.ferro-chromium |
| classification_refs | CPC 3.0: 41113, Ferro-chromium |
| covered_products | Solid marketable high-carbon, medium-carbon, and low-carbon ferro-chromium, including charge chrome when sold as ferro-chromium |
| excluded_products | Chromium metal; silico-chromium as the declared product; stainless steel; other ferro-alloys; chromium-bearing wastes; products primarily recovered from secondary residues without an approved extension |
| representative_product | Solid crushed or lump ferro-chromium alloy meeting a declared commercial grade |
| production_route | Direct carbothermic submerged-arc smelting for high-carbon ferro-chromium; silicothermic or oxygen-decarburisation refining when medium- or low-carbon grades are produced |
| market_state | Dry solid alloy at the producing facility gate, in declared lump, crushed, screened, or other saleable form |

The identity boundary is narrower than the broad ferro-alloy industry: the declared reference product must be ferro-chromium, not chromium metal, ferro-silico-chromium, recovered mixed metal, or an unspecified ferro-alloy. `samr-gbt-5683-2024` verifies the professional Chinese name 铬铁 and the English correspondence Ferrochromium. `eu-jrc-nfm-bref-2017` distinguishes commercial ferro-chromium grades by carbon content and production route.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply ferro-chromium as an alloying material with declared chromium and carbon contents |
| How much | 1,000 kg net dry mass of marketable ferro-chromium |
| How well | Meets the declared commercial specification for chemical composition, size distribution, and physical form |
| How long or cycle | One production campaign or reporting period yielding the declared reference amount at the facility gate; no use duration is assigned |
| reference_flow_link | `output_ferrochromium` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net dry mass |
| Reference product flow | Ferro-chromium |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | chromium mass fraction; carbon mass fraction and grade; silicon mass fraction where relevant; production route; furnace type and closure; physical form and size class; moisture basis; recycled-metal content; facility geography; reporting period |

The `output_ferrochromium` inventory row is the unresolved reference-product row. No UUID is assigned because no Tiangong candidate could be hybrid-searched and directly read in the available environment.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | reference product and all mass-normalized exchanges | Mass | kg | Determine net product mass after excluding transport packaging and free water; state the moisture test method and convert wet records to the declared dry basis before normalization. |
| `composition_basis` | product and intermediate alloy assays | Mass fraction | % by mass | Report chromium, carbon, silicon, and other specification-relevant constituents on the same declared analytical basis; do not substitute nominal grade names for measured or certified composition. |
| `energy_preservation` | electricity and fuels | Energy or fuel mass/volume | kWh, MJ, kg, or m3 | Preserve metered native units and conversion factors; report purchased electricity separately by process and do not merge it with recovered furnace-gas energy. |
| `water_makeup_basis` | cooling, scrubbing, and granulation water | Volume or mass | m3 or kg | Record fresh make-up water crossing the system boundary, separately from internal recirculation; disclose purge and wastewater quantities. |
| `internal_transfer_consistency` | agglomerated burden, molten alloy, recovered metal, slag, dust, and furnace gas | Mass or energy | kg, MJ, or m3 | Reconcile each internal output with its receiving process input and count only net exchanges crossing the foreground boundary in the aggregated dataset. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased chromite ore or concentrate, reductants, fluxes, electrode materials, gases, electricity, water, and any purchased alloy intermediate at the ferro-chromium facility gate |
| starting_condition_role | Upstream product inputs whose production is represented by separate background datasets |
| product_classification_scope | Production of marketable ferro-chromium only; route-specific internal intermediates remain within the foreground system |
| recursive_input_rule | A purchased ferro-chromium intermediate in the same category is recorded once as an input with supplier dataset identity, grade, state, and mass; its upstream production is not recreated inside the receiving process unless the site actually produces it |
| upstream_dataset_requirement | Use composition-, state-, geography-, technology-, and time-representative datasets for chromite, coke or other reductants, fluxes, electricity, oxygen, fuels, water, and purchased alloy intermediates |
| disclosure | Declare ore form, preparation route, furnace and closure type, reductant, refining route, off-gas use or flare, dust control, water recirculation, slag treatment, product grade, recovery loops, and any excluded on-site operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | foreground_system | Include all on-site operations from receipt of production inputs through solid marketable ferro-chromium at the facility gate, including abatement and on-site residue handling attributable to the product. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `boundary_route_condition` | route_selection | Include burden preparation, carbothermic smelting, and medium/low-carbon refining only when performed for the declared product; disclose purchased intermediates and do not model an absent route. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `boundary_release_accounting` | emissions_and_residues | Record captured dust, slag, wastewater, recovered furnace gas, and released carbon dioxide, carbon monoxide, and particulate matter as distinct exchanges; do not treat collection as elimination. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `boundary_upstream_separation` | upstream_inputs | Exclude upstream extraction and production from the foreground process while requiring linked background datasets for each purchased input. | `cpc-3-0-official-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `charge_preparation` | Chromite burden preparation and agglomeration | conditional | Include when chromite fines or concentrate are dried, ground, pelletised, briquetted, sintered, or preheated on site | Foreground preparation | Prepared burden delivered to the ferro-chromium furnace |
| `carbothermic_smelting` | High-carbon ferro-chromium smelting | conditional | Include when high-carbon ferro-chromium or charge chrome is produced on site by carbon reduction | Foreground alloy production | Molten high-carbon ferro-chromium tapped from the furnace |
| `medium_low_carbon_refining` | Medium- or low-carbon ferro-chromium production | conditional | Include when the declared grade is produced by silicothermic reduction or oxygen decarburisation on site | Foreground refining | Molten refined ferro-chromium leaving the refining vessel |
| `finishing_and_recovery` | Tapping, casting, sizing, slag handling, and metal recovery | required | Include for every marketable ferro-chromium dataset; mark slag granulation and metal recovery rows not applicable only when demonstrably absent | Foreground finishing | Net dry marketable ferro-chromium at facility gate |

At least one alloy-production route (`carbothermic_smelting` or `medium_low_carbon_refining`) shall be present. A low-carbon route that uses a purchased high-carbon or ferro-silico-chromium intermediate shall record that purchase and shall not invent upstream on-site smelting.

### Process: Chromite burden preparation and agglomeration (`charge_preparation`)

#### Inputs

##### Product flows

###### Chromite concentrate feed (`input_chromite_fines`)

Record dry chromite concentrate entering on-site agglomeration.

- Selected flow: Chromite concentrate
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry feed consumed during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of prepared burden output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_preparation`
- Sources: `eu-jrc-nfm-bref-2017`

###### Bentonite pellet binder (`input_pellet_binder`)

Record bentonite only when it is physically charged as the pellet binder.

- Selected flow: Bentonite `e01d9941-db32-46cb-b577-ebc584597a2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed binder charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of prepared burden output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_preparation`
- Sources: `eu-jrc-nfm-bref-2017`

###### Coke breeze for sintering (`input_coke_breeze`)

Record coke breeze when it is charged to the agglomeration or sintering step.

- Selected flow: Coke Breeze `2934bd2d-a22f-4936-9bd3-20ff707605f4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed coke breeze charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of prepared burden output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_preparation`
- Sources: `eu-jrc-nfm-bref-2017`

###### Electricity for preparation equipment (`input_prep_electricity`)

Record metered electricity used by grinding, mixing, agglomeration, conveying, and associated controls.

- Selected flow: Alternating current `e773703a-f0ce-4a1e-b795-cb09dc7f2749`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered alternating-current electricity attributable to this process, converted from kWh to MJ with the disclosed exact conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mass of prepared burden output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_preparation`
- Sources: `eu-jrc-nfm-bref-2017`

###### Natural gas for drying or sintering (`input_prep_natural_gas`)

Record delivered natural gas only when combusted in on-site burden drying or sintering.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Metered or invoice-reconciled delivered gas volume at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of prepared burden output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_preparation`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water for preparation (`input_prep_water`)

Record fresh make-up water used for pelletising or preparation gas cleaning.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered fresh make-up water crossing the facility boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mass of prepared burden output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_preparation`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Agglomerated chromite burden (`output_agglomerated_chromite`)

Record the dry prepared burden transferred to smelting as an internal product flow.

- Selected flow: Agglomerated chromite burden
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry prepared burden output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_preparation`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Collected chromite-bearing dust (`output_prep_collected_dust`)

Record dust removed from preparation gas cleaning, net of documented internal recycle.

- Selected flow: Collected chromite-bearing dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected dust leaving this process or returned internally
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of prepared burden output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_preparation`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Released particulate matter from preparation (`output_prep_particulate_air`)

Record particulate matter released to air after control from material handling and agglomeration.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack or fugitive release measurement for this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mass of prepared burden output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

### Process: High-carbon ferro-chromium smelting (`carbothermic_smelting`)

#### Inputs

##### Product flows

###### Chromite ore burden (`input_chromite_burden`)

Record dry chromite ore, pellet, or agglomerate charged to the furnace; describe the specific physical state without combining separate flows.

- Selected flow: Chromite `2cd03bf2-5ea3-46e4-9d3e-f13b6b22ea7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed dry chromite burden charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Metallurgical coke reductant (`input_metallurgical_coke`)

Record metallurgical coke consumed as the carbon reductant.

- Selected flow: metallurgical coke `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed dry coke charged, net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_inputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Quartzite flux (`input_quartzite`)

Record quartzite charged as a specific flux or burden adjustment.

- Selected flow: Quartzite
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry quartzite charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Lime flux for smelting (`input_smelting_lime`)

Record lime only when charged to the smelting burden.

- Selected flow: Lime `c431c0c3-3f5e-4b7b-af99-2ebbdcaf5f99`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed dry lime charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Søderberg electrode paste (`input_electrode_paste`)

Record electrode paste consumed by the submerged-arc furnace.

- Selected flow: Søderberg electrode paste
- Flow property / unit: Mass / kg
- Amount rule: Inventory change plus purchases minus transfers for the furnace campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Electricity for smelting furnace (`input_smelting_electricity`)

Record gross metered furnace and directly associated off-gas-control electricity.

- Selected flow: Alternating current `e773703a-f0ce-4a1e-b795-cb09dc7f2749`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered alternating-current electricity attributable to furnace operation and direct controls, converted from kWh to MJ with the disclosed exact conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Smelting cooling-water make-up (`input_smelting_cooling_water`)

Record fresh water added to the furnace cooling loop, excluding recirculated water.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water crossing the facility boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molten high-carbon ferro-chromium (`output_molten_hc_ferrochromium`)

Record molten high-carbon ferro-chromium tapped before refining or finishing.

- Selected flow: Molten high-carbon ferro-chromium
- Flow property / unit: Mass / kg
- Amount rule: Tapped metal mass reconciled to ladle weights and production records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_outputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Cleaned carbon-monoxide-rich furnace gas (`output_cleaned_co_gas`)

Record cleaned furnace gas exported or used as a measured internal energy carrier; do not merge it with direct air emissions.

- Selected flow: Carbon-monoxide-rich furnace gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered dry gas volume multiplied by measured lower heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smelting_outputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

##### Waste flows

###### Ferro-chromium furnace slag (`output_smelting_slag`)

Record slag tapped from the smelting furnace before on-site recovery or off-site management.

- Selected flow: Ferro-chromium furnace slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-determined slag mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_outputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Collected ferro-chromium furnace dust (`output_smelting_dust`)

Record dust captured from furnace, tapping, and primary gas cleaning, net of documented internal recycle.

- Selected flow: Collected ferro-chromium furnace dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected dust by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_outputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

##### Elementary flows

###### Direct carbon dioxide from smelting (`emission_smelting_carbon_dioxide`)

Record carbon dioxide released to air from reduction gas oxidation, flaring, and on-site combustion attributable to smelting.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Site-monitored or carbon-balance-derived fossil direct release, with method and carbon origin disclosed; any non-fossil carbon dioxide must be recorded separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smelting_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

###### Direct carbon monoxide from smelting (`emission_smelting_carbon_monoxide`)

Record carbon monoxide released to air after recovery, combustion, flaring, and control.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Site-monitored stack and disclosed fugitive fossil carbon-monoxide release; any non-fossil carbon monoxide must be recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Released particulate matter from smelting (`emission_smelting_particulate`)

Record particulate matter released to air after furnace and tapping controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement plus quantified fugitive releases
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of tapped high-carbon ferro-chromium
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

### Process: Medium- or low-carbon ferro-chromium production (`medium_low_carbon_refining`)

#### Inputs

##### Product flows

###### High-carbon ferro-chromium intermediate (`input_refining_hc_ferrochromium`)

Record high-carbon ferro-chromium charged for decarburisation or route-specific refining.

- Selected flow: High-carbon ferro-chromium
- Flow property / unit: Mass / kg
- Amount rule: Weighed charged alloy by certified composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_inputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Ferro-silico-chromium reducing agent (`input_ferro_silico_chromium`)

Record ferro-silico-chromium when physically charged for silicothermic reduction.

- Selected flow: Silicon Chromium Alloy `d8f78abf-5c6a-45c6-909a-161ada78f835`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed charged mass by certified composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_inputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Chromite ore for refining (`input_refining_chromite`)

Record chromite ore charged to a silicothermic refining route.

- Selected flow: Chromite `2cd03bf2-5ea3-46e4-9d3e-f13b6b22ea7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed dry chromite charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_inputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Lime for refining (`input_refining_lime`)

Record lime charged to form the refining slag.

- Selected flow: Lime `c431c0c3-3f5e-4b7b-af99-2ebbdcaf5f99`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed dry lime charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_inputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Oxygen for decarburisation (`input_refining_oxygen`)

Record oxygen only for an oxygen-blown medium-carbon route.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Metered industrial oxygen volume delivered to the converter at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Electricity for refining (`input_refining_electricity`)

Record metered electricity for arc furnaces, converters, ladles, and refining controls.

- Selected flow: Alternating current `e773703a-f0ce-4a1e-b795-cb09dc7f2749`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered alternating-current electricity attributable to the refining route, converted from kWh to MJ with the disclosed exact conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molten refined ferro-chromium (`output_refined_ferrochromium`)

Record the molten medium- or low-carbon ferro-chromium transferred to finishing.

- Selected flow: Molten refined ferro-chromium
- Flow property / unit: Mass / kg
- Amount rule: Tapped or ladle-weighed alloy mass by measured composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_outputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

##### Waste flows

###### Ferro-chromium refining slag (`output_refining_slag`)

Record slag separated from refining before recovery, recycle, or off-site management.

- Selected flow: Ferro-chromium refining slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-determined slag mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_outputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Collected refining dust (`output_refining_dust`)

Record dust captured from refining vessels and reaction ladles, net of documented recycle.

- Selected flow: Collected ferro-chromium refining dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected dust by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_outputs`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

##### Elementary flows

###### Released particulate matter from refining (`emission_refining_particulate`)

Record particulate matter released to air after refining-vessel and ladle controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement plus quantified fugitive releases
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of refined ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

### Process: Tapping, casting, sizing, slag handling, and metal recovery (`finishing_and_recovery`)

#### Inputs

##### Product flows

###### Molten ferro-chromium for finishing (`input_molten_ferrochromium`)

Record the molten alloy entering casting or granulation and reconcile it with the supplying process.

- Selected flow: Molten ferro-chromium
- Flow property / unit: Mass / kg
- Amount rule: Ladle-weighed or tapped mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mass of marketable ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Electricity for crushing and screening (`input_finishing_electricity`)

Record metered electricity for casting auxiliaries, crushing, screening, conveyors, and finishing controls.

- Selected flow: Alternating current `e773703a-f0ce-4a1e-b795-cb09dc7f2749`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered alternating-current electricity attributable to finishing, converted from kWh to MJ with the disclosed exact conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mass of marketable ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Water for slag granulation (`input_slag_granulation_water`)

Record fresh make-up water when slag is granulated on site; exclude recirculated water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered fresh make-up water to the granulation loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of marketable ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable ferro-chromium reference product (`output_ferrochromium`)

This row is the declared reference product. Record dry net saleable ferro-chromium after sizing and quality acceptance.

- Selected flow: Ferro-chromium
- Flow property / unit: Mass / kg
- Amount rule: Measured net dry accepted product mass, normalized to 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net dry marketable ferro-chromium
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `cpc-3-0-official-2025`; `samr-gbt-5683-2024`

###### Recovered ferro-chromium metal (`output_recovered_ferrochromium`)

Record metal recovered from slag treatment or sizing residues as a separate internal or exported product flow.

- Selected flow: Recovered ferro-chromium
- Flow property / unit: Mass / kg
- Amount rule: Weighed recovered metal by destination and measured grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of marketable ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Ferro-chromium slag sent off site (`output_ferrochromium_slag`)

Record treated or untreated ferro-chromium slag leaving the facility as waste; disclose destination and metal recovery status.

- Selected flow: Ferro-chromium slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed slag leaving the facility, net of internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of marketable ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Collected crushing and screening dust (`output_finishing_dust`)

Record dust captured from casting, crushing, screening, and product handling, net of recycle.

- Selected flow: Collected ferro-chromium product dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected dust by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mass of marketable ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### Slag-granulation wastewater (`output_finishing_wastewater`)

Record wastewater purged or discharged from slag granulation after internal recirculation.

- Selected flow: Slag-granulation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered purge or discharge volume crossing the facility boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per mass of marketable ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Released particulate matter from finishing (`emission_finishing_particulate`)

Record particulate matter released to air after casting, crushing, screening, and handling controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement plus quantified fugitive releases
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mass of marketable ferro-chromium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi_process_facility | Prefer physical subdivision and direct metering for burden preparation, smelting, refining, finishing, gas use, dust control, and slag recovery before allocating shared burdens. | `eu-jrc-nfm-bref-2017` |
| `allocation_internal_recycle` | internal_recycle | Recycled dust, recovered metal, slag returns, and furnace gas used within the assessed foreground system carry their measured internal transfer and shall not create an additional external product credit or duplicate burden. | `eu-jrc-nfm-bref-2017` |
| `allocation_exported_coproduct` | exported_coproducts | For exported recovered metal or cleaned furnace gas, first expand the system when a documented displaced function is supportable; otherwise use a documented physical relationship such as energy content for furnace gas or metal mass for recovered alloy. Do not apply an undisclosed economic allocation. | `eu-jrc-nfm-bref-2017` |
| `allocation_waste_status` | slag_and_dust | Treat slag and dust as waste unless the dataset documents product status, destination, and function. Waste treatment burdens remain assigned to ferro-chromium production through the point where the waste-management system accepts the flow. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_charge_preparation` | `charge_preparation` | material, water, fuel, electricity, and prepared burden | scales, meters, invoices, stock records | opening stock; receipts; closing stock; dry matter; meter readings; prepared burden mass | Reconcile calibrated scales and meters to batch and monthly production logs | kg, m3, kWh, MJ | batch or daily, aggregated monthly | at least one representative reporting year or complete campaign | all on-site preparation lines serving the product | Sum net consumed input and output by line, then normalize to prepared burden and reference product | calibration records; moisture tests; stock reconciliation; meter coverage |
| `cp_charge_emissions` | `charge_preparation` | released particulate matter | stack tests, continuous monitors, fugitive survey | concentration; dry gas flow; operating time; capture state; fugitive estimate | Apply site-approved monitoring method to controlled and quantified fugitive releases | kg, mg/Nm3, Nm3 | monitoring-plan frequency and after material change | same period as production records | all relevant preparation release points | Integrate concentration and flow over operating time and reconcile capture status | sampling report; detection limits; operating log; control-device status |
| `cp_smelting_inputs` | `carbothermic_smelting` | furnace materials, electricity, and cooling-water make-up | scales, charge sheets, meters, stock records | dry charged mass by material; composition; electricity; make-up water; furnace hours | Reconcile charge sheets, calibrated meters, and inventory movements to each furnace campaign | kg, kWh, m3 | batch or shift, aggregated monthly | complete campaign and reporting period | every furnace producing the declared alloy | Sum by furnace and route; exclude internal recirculation; normalize to tapped alloy and reference product | scale calibration; meter coverage; assays; stock reconciliation |
| `cp_smelting_outputs` | `carbothermic_smelting` | tapped alloy, slag, captured dust, and recovered furnace gas | ladle scales, residue scales, gas meters, gas analysis | tapped metal; slag; dust by destination; dry gas volume; gas composition; heating value | Reconcile tapped mass and residue destinations; calculate gas energy from measured volume and heating value | kg, Nm3, MJ | tap or shift, aggregated monthly | same period as furnace inputs | furnace, gas cleaning, and residue handling serving the product | Sum outputs; reconcile internal transfers and mass-balance differences | scale calibration; laboratory assays; gas-meter calibration; destination records |
| `cp_smelting_emissions` | `carbothermic_smelting` | direct CO2, CO, and particulate releases | stack and fugitive monitoring plus carbon-balance records | concentration; gas flow; operating time; carbon inputs; exported gas; flare use; capture state | Quantify monitored releases; where CO2 uses a carbon balance, retain every carbon input and output term | kg, kg C, mg/Nm3, Nm3 | monitoring-plan frequency, aggregated monthly | same period as furnace inputs and outputs | all primary and secondary smelting release points | Integrate measured releases and reconcile carbon balance without double counting recovered gas | monitoring reports; calibration; carbon assays; flare and control logs |
| `cp_refining_inputs` | `medium_low_carbon_refining` | alloy, ore, reductant, lime, oxygen, and electricity | scales, charge sheets, gas meters, electricity meters | charged mass and composition; oxygen; electricity; vessel identity | Reconcile each heat or ladle to refining production records | kg, Nm3, kWh | heat or batch, aggregated monthly | complete refining campaign | all vessels producing the declared grade | Sum route-specific inputs and normalize to accepted refined alloy | scale and meter calibration; certificates and assays; heat logs |
| `cp_refining_outputs` | `medium_low_carbon_refining` | refined alloy, slag, and collected dust | ladle scales, residue scales, laboratory assays | alloy mass and composition; slag; dust by destination | Reconcile each heat output and residue with input charge and destination records | kg | heat or batch, aggregated monthly | same period as refining inputs | all vessels and controls serving the grade | Sum outputs and reconcile mass-balance differences | scale calibration; assays; destination records |
| `cp_refining_emissions` | `medium_low_carbon_refining` | released particulate matter | stack tests, continuous monitors, fugitive survey | concentration; gas flow; operating time; hood state | Apply site-approved monitoring method to controlled and quantified fugitive releases | kg, mg/Nm3, Nm3 | monitoring-plan frequency | same period as refining records | all refining release points | Integrate concentration and flow over operating time | sampling report; detection limits; control-device status |
| `cp_finishing_records` | `finishing_and_recovery` | molten input, electricity, water, accepted product, recovered metal, slag, dust, and wastewater | scales, product dispatch, meters, laboratory and destination records | molten mass; electricity; water; accepted dry product; grade; size; recovered metal; slag; dust; wastewater | Reconcile production, quality acceptance, inventory, and dispatch records; apply dry-mass correction | kg, kWh, m3 | batch or daily, aggregated monthly | complete reporting period | all finishing and recovery lines serving the product | Sum accepted dry product and all residues; normalize the full foreground system to 1,000 kg | scale and meter calibration; moisture and assay reports; dispatch and destination records |
| `cp_finishing_emissions` | `finishing_and_recovery` | released particulate matter | stack tests and fugitive survey | concentration; gas flow; operating time; capture state | Quantify controlled and fugitive releases for casting, crushing, screening, and handling | kg, mg/Nm3, Nm3 | monitoring-plan frequency | same period as finishing records | all finishing release points | Integrate measured releases and reconcile operating coverage | monitoring reports; calibration; control-device and production logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | normalized exchange = reporting-period exchange × 1,000 kg / accepted dry marketable ferro-chromium | exchange amount; accepted product mass; product moisture | exchange per 1,000 kg net dry product |  |
| `calc_dry_product_mass` | reference product | dry product mass = net accepted product mass × (1 − measured free-moisture mass fraction) | net product mass; moisture fraction | kg dry marketable ferro-chromium | `samr-gbt-5683-2024` |
| `calc_internal_transfer` | internal intermediates | Pair supplying-process output and receiving-process input; aggregated boundary amount is zero for the matched internal transfer, while losses remain explicit | paired transfer masses; inventory change; loss records | reconciled internal transfer and unexplained difference | `eu-jrc-nfm-bref-2017` |
| `calc_furnace_gas_energy` | cleaned furnace gas | recovered-gas energy = measured dry gas volume × measured lower heating value | dry gas volume; lower heating value | MJ recovered furnace gas | `eu-jrc-nfm-bref-2017` |
| `calc_monitored_release` | monitored air emission | released mass = time-integral of pollutant concentration × dry gas flow, with unit and reference-condition conversion | concentration; gas flow; time; reference conditions | kg pollutant released | `us-epa-ap42-ferroalloy-1986` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain product specification, lot or campaign, chromium and carbon assays, physical form, size class, and dry-mass basis. | certificate of analysis; sampling and moisture method; dispatch record |
| `dq_route_identity` | all processes | Declare which preparation, furnace, refining, off-gas, water, and slag-recovery configurations operated; explain every conditional process marked not applicable. | process flow diagram; equipment list; campaign log |
| `dq_temporal_alignment` | all exchanges | Use input, output, emission, and production records from the same reporting period; justify any proxy period. | dated records; meter extracts; monitoring schedule |
| `dq_completeness` | foreground system | Reconcile all production lines and release points serving the product; quantify missing meter coverage and unexplained mass-balance differences. | coverage matrix; mass balance; exception log |
| `dq_background_match` | purchased inputs | Select background datasets matching product state, composition, geography, technology, and time; disclose proxies. | dataset identifiers; supplier specifications; proxy rationale |
| `dq_uuid_status` | all inventory rows | Treat all blank Tiangong UUIDs as unresolved identities; no UUID may be added until hybrid discovery and a public state_code=100 direct read confirm semantic, property, unit, state, geography, and technology suitability. | UUID audit record |
| `dq_range_status` | important flows | Use foreground records without an external numeric QA range until two independent, original-text, boundary-compatible sources support synthesis; retain the manifest evidence need. | source review and range synthesis record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference_product | Reject a package that omits ferro-chromium grade, chromium and carbon contents, production route, physical form, dry-mass basis, or the link to `output_ferrochromium`. | `cpc-3-0-official-2025`; `samr-gbt-5683-2024` |
| `validation_route` | process_map | Require at least one alloy-production route and every applicable preparation, refining, abatement, and finishing process; reject invented operations and unexplained conditional exclusions. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `validation_atomic_inventory` | process_inventory | Require each row to represent one atomic exchange and keep electricity, fuels, water, raw materials, wastes, recovered gas, and each elementary emission separate. | `eu-jrc-nfm-bref-2017` |
| `validation_internal_balance` | internal_transfers | Flag unmatched internal transfers of prepared burden, molten alloy, recovered metal, slag, dust, or furnace gas and require an explanation for material-balance differences. | `eu-jrc-nfm-bref-2017` |
| `validation_release_control` | emissions_and_residues | Require captured dust and slag to remain explicit and require released CO2, CO, and particulate matter after control to be reported separately when applicable. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `validation_allocation` | coproducts_and_waste | Reject duplicate credits for internal recycle and reject undisclosed allocation for exported gas or recovered metal; require waste/product status and destination for slag and dust. | `eu-jrc-nfm-bref-2017` |
| `validation_uuid_and_range_gaps` | review_readiness | Keep the PCR in review-required status while UUIDs and independent range evidence remain unresolved; absence of those references does not authorize a proxy UUID or invented range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset that may become a `secondary_dataset` or `background_dataset` only after review and publication |
| downstream_use | Cradle-to-gate product systems requiring ferro-chromium alloy input, including stainless and alloy-steel production when grade and geography are compatible |
| allowed_use | Use for the declared ferro-chromium grade, route, facility geography, technology, product state, and reporting period; aggregation across sites requires transparent weighting |
| excluded_use | Chromium metal, silico-chromium as product, other ferro-alloys, secondary-residue recovery without an approved extension, or a grade/route/geography materially different from the dataset |
| required_metadata | canonical PCR id; CPC context; product grade and composition; route and equipment; furnace closure; off-gas fate; water and slag management; reference-product state; facility geography; period; allocation; background dataset identifiers; unresolved UUID and range status |
| required_quality_disclosure | meter and scale coverage; moisture and assay methods; monitoring coverage and detection limits; mass-balance difference; internal recycle; conditional-process exclusions; proxy datasets; allocation rationale; review limitations |
| update_trigger | Change in ore type, reductant, grade, furnace or refining route, furnace closure, off-gas fate, abatement, water loop, slag recovery, allocation, product form, geography, or representative reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-3-0-official-2025` | official_guidance | United Nations Statistics Division. CPC Version 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03). | Official CPC 41113 product classification identity. |
| `eu-jrc-nfm-bref-2017` | official_guidance | European Commission Joint Research Centre. Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries, JRC107041, 2017. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC107041/kjna28648enn.pdf (retrieved 2026-09-03). | Ferro-chromium grades, raw materials, preparation, high-carbon smelting, medium/low-carbon routes, gas, slag, dust, water, energy, and finishing process decomposition. No numeric range from this source is adopted. |
| `us-epa-ap42-ferroalloy-1986` | official_guidance | United States Environmental Protection Agency. AP-42 Section 12.4, Ferroalloy Production, October 1986. https://www.epa.gov/sites/production/files/2020-11/documents/b12s04.pdf (retrieved 2026-09-03). | Independent description of electric-furnace and exothermic routes, tapping, slag separation, casting, crushing, screening, and air-emission sources. No emission factor or numeric range is adopted. |
| `samr-gbt-5683-2024` | standard | State Administration for Market Regulation and Standardization Administration of China. GB/T 5683-2024, 铬铁 (Ferrochromium). https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=EA0B1B2339CA6704E035C52D7AD92A3A (retrieved 2026-09-03). | Professional Chinese product name, English correspondence, and product-specification identity. No conformance limit is used as an empirical range. |
