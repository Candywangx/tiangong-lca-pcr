---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.hardboard
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wet-process wood hardboard

## 1. Scope and Applicability

This method covers wood hardboard made by hydraulic mat forming followed by wet hot pressing, dispatch conditioning and finishing. Heat-only treatment, oil tempering and no post-press treatment are distinct declared states, not interchangeable products. Binder addition is site-specific: EPA describes PF-containing wet manufacture; USDA describes some binder-free wet boards. Neither establishes a universal recipe. [epa-hardboard-2002; usda-wood-handbook-2021]

Dry air-laid MDF/HDF, wet-formed mats dried before dry pressing (wet/dry hardboard), low-density insulation fibreboard, non-wood fibre boards and coated/laminated finished systems are excluded. A density label, HDF synonym or classification label cannot establish the route. Report density, moisture and thickness as measured qualifiers, not copied statutory thresholds. Optional oil types require their own recorded recipe. No literature process setting or emission factor is prescribed as a modern site parameter.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.hardboard |
| classification_refs | CPC 3.0 31442; narrower |
| covered_products | Wet-formed, wet-hot-pressed wood hardboard, with recipe-specific binder and declared treatment state |
| excluded_products | Dry-process MDF/HDF; wet/dry hardboard; other low-density fibreboard; non-wood feedstock; coated/laminated assemblies |
| representative_product | Uncoated wet-pressed wood hardboard, trimmed and conditioned, at mill dispatch |
| production_route | Purchased wood chips → washing/cooking/refining → stock preparation → hydraulic forming and white-water/fibre recovery → wet hot pressing → conditional heat/oil treatment → conditioning → finishing and packing |
| market_state | Net accepted board at recorded dispatch moisture; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply declared wet-process wood hardboard; no service equivalence implied |
| How much | 1 kg net accepted board |
| How well | Declared density, thickness, moisture basis, surface grade, binder formulation and heat/oil treatment state; site acceptance records |
| How long or cycle | One mill dispatch event; service life is outside this supply reference |
| reference_flow_link | finished_board |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hardboard `2b213638-a6da-4337-8972-72e4afe18969` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Wood species/feed mix; wet forming and wet pressing evidence; fibre-recovery loop; binder/wax formulation and carrier water; measured dispatch density and its conditioning; dry- or wet-basis moisture; thickness; surface state; heat-only/oil-tempered/untreated state and oil type; net mass excluding packaging; site/period; utility delivery and treatment boundary |

The broad reference identity contains no contrary dry-route restriction. Its HDF synonym does not authorize MDF substitution; the PCR qualifiers supply the wet-route boundary. A flow UUID identifies a physical product, not an approved background dataset. Missing qualifiers or supplier basis make a concrete dataset incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference is 1 kg net accepted board at measured dispatch moisture. Collect Q as the period total in cp_product, excluding packaging, returns and rejects. All inventory uses per 1 kg reference flow. |
| state_measurement | finished_board | Mass; Volume | kg; m3 | Measure specimen net mass and length/width/thickness under documented conditioning; density equals mass/volume at that same moisture. Determine oven-dry mass with a documented constant-mass method and validate oil/resin volatile bias. Declare dry-basis moisture u or wet-basis fraction w; never mix them. |
| flow_basis | wood_chip; gas; steam | Volume; Mass | m3; kg | Chip solid/bulk volume and gas reference T/P/composition/Z must match supplier reference amounts. Steam mass and net delivered enthalpy are separate; MJ identity alone does not prove the enthalpy boundary. Unknown bases block supplier linkage. |
| analytical_basis | cod; bod; tss; phenol_water; formaldehyde_water | Mass | kg | COD and BOD5 use kg oxygen equivalent, TSS kg dried filter residue, phenol kg CAS108-95-2 and formaldehyde kg CAS50-00-0. Concentrations and hydraulic volume must share the interval and sample boundary. Total phenolics, TOC, COD and species are not interchangeable mass measures. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| mill_boundary | wet_mill | Include received-chip handling, washing/cooking/refining, hydraulic forming, fibre recovery, wet pressing, actual post-press treatment, conditioning, finishing, packaging and onsite utilities/control/treatment. Stage subledgers remain separate inside one aggregated foreground unit. | epa-hardboard-2002; usda-wood-handbook-2021 |
| upstream_transport | purchased inputs | Link inputs to route-compatible upstream production and measured inbound transport; do not infer forestry or sawmill burdens from chip mass. Extend the same inventory with one verified atomic transport-service row per actual mode. Capital equipment, use and end of life are excluded by default with disclosure. |  |
| internal_recovery | wet_mill | Measure white-water flow, consistency and recovered dry fibre from screens/save-all, pressing and edge trim. The source supports recovery possibilities, not a universal recovery technology or rate. Link both ends at equal physical amounts; circulating fibre/water is neither new purchased input nor exported waste. | epa-hardboard-2002; usda-wood-handbook-2021; epa-hardboard-wasteload-1979 |
| treatment_boundary | wastewater; cod; bod; tss; phenol_water; formaldehyde_water | Choose onsite treatment plus actual final receiving-water emissions, or external wastewater transfer plus compatible treatment dataset. For split routes use measured fractions. Never attach influent pollutant loads as direct emissions to a transferred wastewater stream; bypass loads remain direct. |  |
| utility_boundary | wet_mill | Keep externally purchased steam separate from onsite fuel conversion. Onsite steam/heat is a physical internal link, with generator fuels, emissions, ash and losses once; no second background steam burden. Include actual boiler and oxidizer auxiliaries; no boiler estimate from sawmill-dust PTE. | epa-hardboard-2002; epa-wood-boiler-2022 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Clean purchased wood chips received at the mill, with origin, moisture and receipt condition declared |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | CPC 3.0 31442; wet-process subset |
| recursive_input_rule | Externally purchased hardboard used as feed remains a separate same-category input with an upstream dataset; it is outside the clean-chip route and requires explicit scope extension. Internal wet trim recovery is not recursion. |
| upstream_dataset_requirement | Route, material state, quantity basis, geography/time, supplier and transport compatible evidence; unresolved UUIDs never become automatic background links |
| disclosure | Scope extensions, actual recovery equipment, exclusions, transport, utility boundary, wastewater route, carbon origins and completeness |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| wet_mill | Wet-process wood hardboard | required | Hydraulic forming followed by wet hot pressing; conditional treatments and onsite utilities integrated | foreground | finished_board |

EPA 1979 records wet trim/broke dilution and return to the stock chest, plus white-water reuse and saveall options. These historical descriptions support explicitly measured internal links, not a universal recovery design or rate; modern equipment and recovery are collected at the site. [epa-hardboard-wasteload-1979]

Physical stage graph: chip reception → cooking/refining → stock/wet forming → wet pressing → actual heat/oil treatment → conditioning/finishing/packing → accepted board. White water and recovered fibre return to stock preparation; rejects route to recovery, onsite fuel or export according to measured records. Onsite treatment has its own inlet/outlet subledger. Purchased chips exclude onsite log-to-chip manufacture; extend boundary before using logs.

### Process: Integrated wet hardboard mill (`wet_mill`)

#### Inputs

##### Product flows

###### Wood Chip (`wood_chip`)

Purchased clean wood chips only; measure receipt volume with its solid or bulk convention and packing, wet mass and moisture. Confirm supplier reference-volume convention; incompatible or unknown convention blocks the background link. No species-specific yield or bulk density is assumed.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_material; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-hardboard-2002`; `usda-wood-handbook-2021`

###### Process Water (`process_water`)

Record treated process-water makeup crossing the mill boundary, including humidification and utility makeup. Internal white water is a separate circulation ledger, not fresh supply. Volume meters require measured density at stated temperature. Direct abstraction needs a distinct resource flow and onsite water-treatment inventory.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_water; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-hardboard-2002`

###### Alternating current (`electricity`)

Conditional identity: selected grid electricity is 35–330 kV supplied to user. Include refining, vacuum, pumps, pressing, finishing and treatment; convert measured kWh by 3.6 MJ/kWh. Other voltage or generation routes require another verified identity.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_energy; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-hardboard-2002`

###### Saturated process steam delivered to the mill (`steam`)

Only externally delivered saturated steam; record pressure, temperature, dryness and mass at the declared delivery meter, condensate returned and net enthalpy. This mass exchange is not a net-heat exchange. Supplier steam basis and mass UUID remain unresolved; do not substitute high-pressure or stripping steam. Onsite steam is an internal utility link, not this purchased input.

- Selected flow: Saturated process steam delivered to the mill
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_energy; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-hardboard-2002`

###### natural gas in the gaseous state (`gas`)

If natural gas fires a boiler, oven or oxidizer, record delivered volume with temperature, absolute pressure, wet/dry gas composition and compressibility; reconcile background m3 definition. Secondary mass coefficients are not density. Purchased steam includes its producer combustion; do not duplicate that combustion onsite.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_energy; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### Hog fuel (`wood_fuel`)

Only purchased untreated hog fuel in an onsite boiler. Record as-fired moisture, composition and measured net heating value. Internal production rejects sent to the boiler remain internal transfers, with no second purchased-fuel input or exported-waste output. Add other actual fuels as individual flows.

- Selected flow: Hog fuel `5f5a176e-cae4-4978-be10-76bf7b92a3d6`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_energy; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-wood-boiler-2022`

###### Phenolic resin (`pf_resin`)

When phenol-formaldehyde binder is used, record delivered formulation, solids, carrier water and residual monomers. Use this resin identity only with a compatible supplier mass basis; decompose emulsion carriers and other ingredients as separate exchanges where needed, preserving complete formulation mass. Evidence of no added binder is recipe-specific, never a hardboard-wide default.

- Selected flow: Phenolic resin `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_material; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-hardboard-2002`; `usda-wood-handbook-2021`

###### Paraffin wax (`wax`)

Only petroleum-fraction paraffin wax. Meter delivered wax or wax solids in an emulsion with the supplier basis, keeping carrier water, emulsifier and other constituents visible and avoiding duplicate water. The identity-record energy descriptor supplies no default heating value. Recycled-plastic wax is a different route.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_material; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-hardboard-2002`

###### Aluminium sulfate, powder (`alum`)

Only aluminium sulfate powder used in stock conditioning or onsite treatment. Record grade, hydration and purity; do not confuse it with potassium alum or hide solution water. Separate the stage totals before aggregation.

- Selected flow: Aluminium sulfate, powder `1c9f77ea-7da1-42a6-a2ec-d2d4580913c7`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_material; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-hardboard-2002`

###### Linseed oil (`linseed_oil`)

Include only when linseed oil precedes heat tempering; reconcile oil delivery, application, losses and retained oil. Untempered or heat-only product has an evidenced not-applicable state.

- Selected flow: Linseed oil `f9a0f272-3f42-4051-9483-d3f8bcb9260f`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_material; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-hardboard-2002`; `usda-wood-handbook-2021`

###### Tung oil (`tung_oil`)

Include only for actual tung-oil tempering. Tung seed is not oil; UUID unresolved after bounded lookup. Record oil grade, applied mass, losses and retained mass.

- Selected flow: Tung oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_material; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### tall oil (`tall_oil`)

Include only for actual tall-oil tempering, with grade, composition and supplier compatibility. Petroleum crude oil records are rejected despite similar English labels.

- Selected flow: tall oil `923fd725-d53a-438c-af51-24064c0778f5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_material; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Polyethylene film (`pack_pe`)

Record actual polyethylene transport wrap, including packaging scrap treatment. Exclude all packaging mass from net board output. Every additional packaging material needs its own atomic exchange and reuse/return basis.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_material; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_material`

#### Outputs

##### Product flows

###### Hardboard (`finished_board`)

1 kg of accepted wet-pressed wood hardboard at dispatch moisture, excluding transport packaging. This is the sole reference product output; transfers from pressing to conditioning and packing are inside this aggregated mill unit.

- Selected flow: Hardboard `2b213638-a6da-4337-8972-72e4afe18969`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: (`fixed_value`)
- Specificity: (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `epa-hardboard-2002`; `usda-wood-handbook-2021`

#### Outputs

##### Waste flows

###### Wet-hardboard process wastewater sent to external treatment (`wastewater`)

Only wastewater crossing to an external treatment operator; record destination and measured volume plus analytical composition. No direct receiving-water COD/BOD/species loads for the same transferred wastewater. A directly discharged candidate and paper-specific wastewater are incompatible identities; UUID unresolved.

- Selected flow: Wet-hardboard process wastewater sent to external treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_water; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-hardboard-2002`

###### Dewatered wet-hardboard wastewater-treatment sludge (`sludge`)

Only dewatered sludge removed from onsite wet-hardboard wastewater treatment. Collect wet mass and dry-solids fraction, resin/oil content and destination; not the external treatment operator sludge. Paper and municipal sludge routes do not establish identity; UUID unresolved.

- Selected flow: Dewatered wet-hardboard wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_residue; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_residue`

###### Wood waste (`wood_reject`)

Exported wood rejects only; identify moisture and binder/oil treatment, mass, legal waste or sale status, and destination. Broad wood-waste identity may cover the specific subset only with compatible treatment data. Internal recovered fibre and internally burned rejects are not external waste.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_residue; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `epa-hardboard-2002`

###### ash (`ash`)

If an onsite wood boiler operates, record exported ash with ash type, moisture, unburned carbon, contamination and destination. This unrestricted ash identity does not make coal-ash treatment applicable to wood ash.

- Selected flow: ash `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_residue; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `epa-wood-boiler-2022`

#### Outputs

##### Elementary flows

###### carbon dioxide (biogenic) (`co2_bio`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Preserve the biogenic origin in the carbon ledger; greenhouse-gas reporting exclusions do not delete LCI.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### carbon dioxide (fossil) (`co2_fossil`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Fossil fuel and resin-derived carbon require source attribution; do not use biogenic or land-use-change records.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### carbon monoxide (biogenic) (`co_bio`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Preserve the biogenic origin in the carbon ledger; greenhouse-gas reporting exclusions do not delete LCI.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### carbon monoxide (fossil) (`co_fossil`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Fossil fuel and resin-derived carbon require source attribution; do not use biogenic or land-use-change records.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### Nitrogen oxides (`nox`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Verify that monitoring, LCI and LCIA NOx mass definitions agree: NO2-equivalent or actual NO+NO2 mass. Mass/kg identity alone does not establish this correspondence. Do not invent components or split factors; exclude N2O and do not duplicate separately inventoried NO/NO2. Unknown correspondence leaves quantity and characterization basis pending.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### sulfur dioxide (`so2`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### methane (biogenic) (`ch4_bio`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Preserve the biogenic origin in the carbon ledger; greenhouse-gas reporting exclusions do not delete LCI.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### methane (fossil) (`ch4_fossil`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Fossil fuel and resin-derived carbon require source attribution; do not use biogenic or land-use-change records.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### nitrous oxide (`n2o`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### particles (PM2.5) (`pm_fine`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Use disjoint aerodynamic size bins with matched sampling methods; PM10 and total PM are reconciliation observations, never extra additive emissions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### particles (PM2.5 - PM10) (`pm_mid`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Use disjoint aerodynamic size bins with matched sampling methods; PM10 and total PM are reconciliation observations, never extra additive emissions.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### particles (> PM10) (`pm_coarse`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Use disjoint aerodynamic size bins with matched sampling methods; PM10 and total PM are reconciliation observations, never extra additive emissions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### formaldehyde (`formaldehyde_air`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### phenol (`phenol_air`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### methanol (`methanol_air`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### water vapour (`water_vapour`)

Record the actual outdoor emission after control, separated by source and operating mode. Use cp_air; no mandatory positive amount or default emission factor. Select a more specific verified air subcompartment when receiver/stack data support it. Use stage-specific H2O balances with evidenced formation/consumption to distinguish evaporation of feed/carrier water, steam losses, cooling evaporation, inlet air humidity and reaction water. Include actual PF cure, wood/heat or oil-treatment transformations, onsite combustion/oxidation and treatment reactions only at the stages where they occur. Boiler or oxidizer water is not water evaporated by nonreactive finishing/profiling; purchased-utility combustion remains upstream. Reconcile measured outlet vapour without adding reaction water twice; internal circulation is not an external exchange. Unknown reaction water remains pending, never inferred solely from a balance residual.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_air; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-hardboard-2002`; `epa-wood-boiler-2022`

###### chemical oxygen demand (`cod`)

Only actual direct release to receiving water after any onsite treatment or through a documented bypass. Integrate matched concentration and discharge volumes by interval under water_load. Water/unspecified identity requires explicit uncertainty; use a verified receptor-specific identity when known. Treatment-transfer analyses are not direct emissions.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ef-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_water; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-cod-4104-1993`

###### biological oxygen demand (`bod`)

Only actual direct release to receiving water after any onsite treatment or through a documented bypass. Integrate matched concentration and discharge volumes by interval under water_load. Water/unspecified identity requires explicit uncertainty; use a verified receptor-specific identity when known. Treatment-transfer analyses are not direct emissions.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97e0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_water; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-bod-4051`

###### Suspended solids, unspecified (`tss`)

Only actual direct release to receiving water after any onsite treatment or through a documented bypass. Integrate matched concentration and discharge volumes by interval under water_load. Water/unspecified identity requires explicit uncertainty; use a verified receptor-specific identity when known. Treatment-transfer analyses are not direct emissions.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_water; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-tss-1602`

###### phenol (`phenol_water`)

Only actual direct release to receiving water after any onsite treatment or through a documented bypass. Integrate matched concentration and discharge volumes by interval under water_load. Water/unspecified identity requires explicit uncertainty; use a verified receptor-specific identity when known. Treatment-transfer analyses are not direct emissions.

- Selected flow: phenol `08a91e70-3ddc-11dd-975d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_water; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-phenol-8270e-2018`

###### formaldehyde (`formaldehyde_water`)

Only actual direct release to receiving water after any onsite treatment or through a documented bypass. Integrate matched concentration and discharge volumes by interval under water_load. Water/unspecified identity requires explicit uncertainty; use a verified receptor-specific identity when known. Treatment-transfer analyses are not direct emissions.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-9421-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by Q kg net accepted board, expressed per 1 kg reference flow; cp_water; no assumed amount.
- Value mode: (`foreground_record`)
- Specificity: (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-carbonyl-8315a-1996`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| separate_ledgers | wet_mill | Retain the unallocated physical process graph, whole-stream mass and elemental balances, and separate water/reactive-component ledgers independently of allocated environmental burdens. Internal link quantities and actual co-product masses are never multiplied by allocation shares. Record off-spec board sale versus waste status. |  |
| subdivide_first | wet_mill | Separate products by binder, thickness and heat/oil state and meter attributable operations before allocating shared burdens. Prefer demonstrated causal allocation with measured drivers; when no defensible physical relationship exists, use documented economic shares with period prices and sensitivity, not an invented universal percentage. |  |
| recovery_allocation | wood_reject; wood_fuel; wastewater | Internal recovered fibre receives no avoided-virgin-product credit. Internal fuel combustion retains actual carbon emissions. External waste receives compatible treatment once; saleable co-products require a declared allocation or expanded-system model without mixing both. Recovered-fibre losses and stock changes remain in physical balances. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | wet_mill | finished_board | dispatch acceptance | lot; net accepted mass Q; packaging tare; rejects/returns; specimen mass; dry mass; length/width/thickness; density; moisture basis; conditioning T/RH; surface grade; binder and oil/heat state | Calibrated net weighing with paired specimen dimensional and constant-mass moisture tests; record method/version and volatile bias; reconcile shipment and production stocks | kg; m; kg/m3; moisture fraction | each lot and each declared state | Representative declared production period with startup, shutdown and seasonal coverage disclosed | One named mill, declared route and treatment state | per 1 kg reference flow | Calibration, primary records, analytical QC and coverage/uncertainty report |
| cp_material | wet_mill | inputs | receipt/dosing record | row_id; delivery lot; formulation; purity; water/solids fraction; receipt volume and solid/bulk packing; wet/dry mass; species; dose; losses; opening/closing stock; oil applied and retained; stage inlet/outlet water and component masses; actual binder formulation and cure extent; evidence for wood/heat and oil-treatment transformations and any oxygen uptake | Calibrated scales/flow meters, supplier declarations and stage dosing logs; sample chip moisture and measured mass/volume conversion; retain analytical emulsion components without duplicate purchased carriers; pair stage samples and formulation/cure records with water-specific assays and component analyses that distinguish moisture, reaction products and other volatiles; an oven-loss result alone is not reaction water | kg; m3 | each delivery and shift | Representative declared production period with startup, shutdown and seasonal coverage disclosed | One named mill, declared route and treatment state | per 1 kg reference flow | Calibration, primary records, analytical QC and coverage/uncertainty report |
| cp_energy | wet_mill | utilities | meter/fuel record | stage; supply voltage; kWh; fuel volume; T; absolute P; wet/dry composition; Z; fuel wet mass; heating value; steam mass/P/T/dryness; condensate mass/T/P; losses; supplier reference basis; actual fuel elemental composition and moisture; combustion/oxidation air amount, composition and humidity; operating state and measured reaction products/unburned residues | Meter each stage and onsite generator; supplier basis confirmation with calibrated meters and steam-table enthalpy at measured state; separate purchased from internally generated steam and startup/idle loads; reconcile fuel, air, stack and residue endpoints for actual onsite combustion/oxidation only, using source-specific measurements or a documented stoichiometric model with evidenced conversion and uncertainty, not assumed complete combustion | kWh; MJ; m3; kg | continuous meters, interval/shift totals | Representative declared production period with startup, shutdown and seasonal coverage disclosed | One named mill, declared route and treatment state | per 1 kg reference flow | Calibration, primary records, analytical QC and coverage/uncertainty report |
| cp_water | wet_mill | forming/treatment | hydraulic and analysis record | makeup; white-water circulation; recovery inlet/outlet consistency; recovered dry fibre; purge; treatment transfer; direct discharge/bypass interval volume; COD/BOD5/TSS/phenol/formaldehyde concentration; receptor; method/version; sample preservation/holding; detection limit; blank/recovery; uncertainty; filtered/whole sample; stage inlet/outlet H2O and reactive-species amounts; actual onsite treatment reagents, reaction products and formation/consumption evidence | Meter matched streams, flow-proportional sampling by operating state and bypass events; use the analytical methods below or demonstrated equivalent methods with full QC. Measure both recovery links; no assumed recovery efficiency. Keep measured aqueous whole-stream mass distinct from H2O mass and dissolved/suspended components; pair treatment inlet, outlet, gas and sludge measurements and evidence the actual reactions, without treating removed COD/BOD as conserved material mass | kg; m3; mg/L; mg O2/L; kg dry fibre | continuous flow; representative interval samples; each bypass | Representative declared production period with startup, shutdown and seasonal coverage disclosed | One named mill, declared route and treatment state | per 1 kg reference flow | Calibration, primary records, analytical QC and coverage/uncertainty report |
| cp_air | wet_mill | emissions | stack/fugitive record | source; fuel/wood/resin carbon origin; control; operating hours; stack flow T/P/humidity; concentration; species CAS; analyte mass vs carbon equivalent; NOx monitoring/LCI/LCIA mass definition and compatibility (NO2-equivalent or actual NO+NO2; excludes N2O); aerodynamic size; filterable/condensable basis; detection limit; methods/version; carbon/water balance; oil treatment; stage-specific reaction-water evidence; inlet/outlet humidity and vapour; cure and combustion/oxidation extent | Representative after-control stack and fugitive testing with calibrated volume/concentration bases, startup and bypass coverage. Speciate organics by validated sampling/chromatography; aggregate VOC-as-carbon cannot become a named species. Water vapour requires a reconciled stage H2O balance including evidenced reaction formation/consumption; distinguish process evaporation, utility combustion/oxidation, oil-treatment reactions and inlet humidity without duplicating outlet vapour. Verify NOx monitoring/LCI/LCIA mass correspondence without invented component fractions; unknown correspondence keeps its quantity and characterization pending | kg; mg/m3; m3 | representative operating states and treatment recipes; continuous hours | Representative declared production period with startup, shutdown and seasonal coverage disclosed | One named mill, declared route and treatment state | per 1 kg reference flow | Calibration, primary records, analytical QC and coverage/uncertainty report |
| cp_residue | wet_mill | residues | destination/weight record | row_id; material state; binder/oil content; wet mass; dry solids; unburned carbon; recovery/internal fuel/export; destination; waste/sale status; stocks | Calibrated weighing, solids testing and receiver documents; separate each physical residue, internal transfers and exported waste; do not merge captured dust with emitted particulate matter | kg | each removal and shift | Representative declared production period with startup, shutdown and seasonal coverage disclosed | One named mill, declared route and treatment state | per 1 kg reference flow | Calibration, primary records, analytical QC and coverage/uncertainty report |

The protocol aggregation field names the final reporting basis. Preserve raw interval/stage/state totals and opening/closing stocks first; for each row divide the measured attributable period exchange by the same Q kg net accepted board. Q is measured under cp_product. This is period mass normalization, with no item-count or machine basis. Calculations below retain the formulas and analytical numerator definitions.

### Analytical interpretation

| Parameter | Method and analytical unit | Interpretation and checks | source_ids |
| --- | --- | --- | --- |
| COD | EPA 410.4 rev2.0: dichromate digestion/colorimetry; mg O2/L | Report whole/filtered fraction, dilution, chloride interference, preservation and method QC; kilogram load is oxygen equivalent, not organic-carbon mass | epa-cod-4104-1993 |
| BOD5 | EPA 405.1: five-day dark incubation at 20 °C and dissolved-oxygen decrease; mg O2/L | Document dilution, seed/blank correction, toxicity and nitrification inhibition; label CBOD separately if inhibited. Not COD conversion | epa-bod-4051 |
| TSS | EPA 160.2: glass-fibre filtration and constant residue mass at 103–105 °C; mg dry residue/L | Record filter, washing, sample mixing and dissolved-solids interference; total/dissolved solids do not replace TSS | epa-tss-1602 |
| phenol | EPA 8270E GC/MS with validated aqueous extraction; mg phenol/L | CAS108-95-2, matrix recovery, preservation, calibration and detection limit; total phenolics cannot be assigned to phenol | epa-phenol-8270e-2018 |
| formaldehyde | EPA 8315A procedure1: DNPH derivatization/HPLC for aqueous free carbonyls; mg formaldehyde/L | CAS50-00-0; record free-analyte/phase definition, reagent blank, derivatization artifact and matrix QC; not total bound resin formaldehyde | epa-carbonyl-8315a-1996 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | q_i = X_i / Q; X_i is the attributable exchange amount over the same declared production period; Q is kg net accepted board at dispatch moisture. Reference output equals 1 kg. This is period mass normalization, not a per-board-count or per-machine conversion. | X_i; Q; cp_product | q_i |  |
| moisture_conversion | wood_chip; wood_fuel; finished_board; sludge | For wet-basis fraction w: dry mass = wet mass × (1 − w). For dry-basis ratio u: dry mass = wet mass / (1 + u); w = u / (1 + u). Percent values first divide by 100. Density uses mass and specimen volume at the same conditioning state. | wet mass; dry mass; w; u; dimensions | dry-solids ledger and declared density |  |
| water_load | cod; bod; tss; phenol_water; formaldehyde_water | L_i = sum(C_i,j × V_j) × 0.001; concentration in mg/L and paired interval volume in m3 yield kg analyte, dried residue or oxygen equivalent. Then divide L_i by Q. Use direct-outfall intervals only; no transferred wastewater loads. Do not sum COD+BOD5+species as a physical pollutant mass. | C_i,j; V_j; Q; cp_water | kg / kg reference flow | epa-cod-4104-1993; epa-bod-4051; epa-tss-1602 |
| steam_enthalpy | steam | Net delivered heat = sum(m_steam × h_supply − m_condensate_return × h_return), with defined common enthalpy datum, measured steam quality and losses across the declared delivery/return boundary. Mass input remains separately recorded. Supplier heat-reference boundary must match; unknown correspondence is unresolved, not inferred from an MJ property. | steam and condensate masses; measured states; supplier basis | kg steam and MJ net heat |  |
| physical_balance | wet_mill | Keep conserved whole-stream mass and elemental balances (including C by biogenic/fossil origin, H and O) separate from H2O and reactive dry-component ledgers. For conserved mass/elements: opening stock + inputs = closing stock + outputs; include actual fuel, air/oxygen, moisture, product, liquid/gas releases and residues crossing the selected boundary. For each reactive component i: opening stock_i + inputs_i + evidenced formation_i = closing stock_i + outputs_i + evidenced consumption_i. Dry wood/resin/oil solids are measured states, not conserved species through reaction. Apply formation/consumption only to actual PF cure, wood/heat or oil-treatment transformations, onsite fuel/VOC oxidation, and onsite wastewater reactions within their own stage boundaries. Evidence reaction terms with actual formulation, cure/conversion extent, fuel/air composition, paired stage measurements or an applicable source-specific stoichiometric model and uncertainty; no universal yield, assumed complete conversion or residual-derived reaction term. Nonreactive transfers have zero reaction terms only with evidence; internal links cancel at matched measured endpoints. Retain all actual exchanges and carbon in product, reject, sludge, ash and gas; no automatic sequestration credit. Quantify unexplained residual separately and compare it with documented measurement uncertainty, without invented tolerance or treating it as measured loss/reaction water. Unresolved terms make reconciliation inconclusive. | cp_material; cp_product; cp_energy; cp_water; cp_air; cp_residue; evidenced stage reaction terms | unallocated conserved-mass/element and reactive-component ledgers | epa-hardboard-2002; usda-wood-handbook-2021; epa-wood-boiler-2022 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_identity | wet_mill | Document hydraulic formation and wet pressing, batch/state segregation, recovery equipment and binder/oil recipe; a product name or legal density class is insufficient. | Process diagram and site records |
| measurement_quality | all inventory rows | Same Q, period and route in both physical and burden ledgers; calibration, representative sampling and uncertainty. No silent zero for missing UUID, unmeasured emission, detection-limit result or unresolved reaction term. Distinguish measured moisture/solids from reaction transformation and disclose stage evidence and residual uncertainty. | Protocols and conserved-mass/element and reactive-component balances |
| identity_background | all inventory rows | Verify exact flow type, medium/submedium, origin, species and reference property/unit. A verified broad physical identity still needs supplier dataset and basis compatibility. Unknown identity/basis prevents complete dataset acceptance; document each actual additional atomic chemical, fuel, package, transport and emission. | Supplier data and explicit completeness disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_board | Exactly one net accepted board reference output is linked; reference amount, denominator, declared moisture/grade/treatment and conversion agree. |  |
| validate_route | wet_mill | Reject dry MDF/HDF, dry pressing of pre-dried wet mats, other fibreboards and unresolved route/product identity. Record actual density, moisture, thickness and post-press state; do not substitute statutory limits. | epa-hardboard-2002; usda-wood-handbook-2021 |
| validate_balance | wet_mill | Physical internal links balance at paired stage endpoints before allocation; reference outputs/co-products remain actual masses. Check conserved whole-stream mass and elemental C/H/O separately from H2O and reactive dry-component formation/consumption. Require evidence for the actual formulation, cure/oxidation/treatment extent and stage boundary; boiler water cannot be assigned to nonreactive finishing/profiling, and purchased-utility combustion is upstream. Retain actual exchanges, prevent duplicate reaction water and separate unexplained residual from measured loss. No default yield, assumed zero reaction or residual-derived chemistry; incomplete measurements or unresolved reaction terms are inconclusive. | epa-hardboard-2002; usda-wood-handbook-2021; epa-wood-boiler-2022 |
| validate_discharge | wastewater; cod; bod; tss; phenol_water; formaldehyde_water | External treatment transfer and direct release are exclusive for the same water fraction. Analytical unit, method/version, sampling boundary, receiver, dilution and detection status are mandatory. COD/BOD indicators and chemical species are distinct, with no unsupported summed toxicity/oxygen impact. | epa-cod-4104-1993; epa-bod-4051; epa-tss-1602; epa-phenol-8270e-2018; epa-carbonyl-8315a-1996 |
| validate_air | co2_bio; co2_fossil; co_bio; co_fossil; ch4_bio; ch4_fossil; nox; pm_fine; pm_mid; pm_coarse | Keep biogenic/fossil origins and outdoor media correct; retain biogenic CO2 in LCI. Use disjoint particle bins, account for filterable versus condensable methods and reject indoor/correction/long-term substitutes. No double emissions from purchased heat and onsite fuels. For NOx, monitoring, LCI and LCIA must use compatible NO2-equivalent or actual NO+NO2 mass definitions; exclude N2O, prevent overlap with single NO/NO2 rows and retain quantity/characterization pending when compatibility is unknown. | epa-hardboard-2002; epa-wood-boiler-2022 |
| validate_completeness | all inventory rows | Every applicable actual flow needs one atomic row, protocol, quantity and compatible background/treatment link. Not-applicable requires evidence; unresolved identity or steam/chip/gas basis is explicit. Complete dataset approval is withheld while these remain. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_process_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Wet-pressed wood hardboard supply matching the declared formulation, moisture and treatment state after completeness checks |
| excluded_use | MDF/HDF dry-route proxy; wet/dry hardboard proxy; legal conformity certification; service-life equivalence; generic universal emission factors |
| required_metadata | Site/time; route diagram; Q; density/moisture/thickness; recipe and treatment state; carbon origin; internal links; transport; energy/steam bases; waste/discharge routes; allocation |
| required_quality_disclosure | Sampling and uncertainty; unallocated physical versus allocated burden ledgers; sources/basis compatibility; skipped/missing flows; unresolved UUIDs; actual geographical/temporal scope; analytical methods and detection treatment |
| update_trigger | Route, feed/binder/oil, moisture/thickness, utility, recovery, emissions control or wastewater routing change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-hardboard-2002 | official_guidance | US EPA, AP-42 10.6.4, September 2002, pp.10.6.4-1, -5–-6, -8–-9; https://www.epa.gov/sites/default/files/2020-10/documents/c10s0604.pdf | Historical wet-route decomposition, press-water recycling and air source distinctions; no modern site recipe, setting or factor adoption |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, FPL-GTR-282, March 2021, chapter11 pp.11-13–11-15 and glossary p.G-12, Polymer; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Wet/dry product distinctions; some binder-free boards; hydraulic forming; conditional heat, oil tempering and humidification; recycling capability; qualitative polycondensation/water-loss distinction, not an actual PF cure extent, reaction-water yield or mill yield |
| epa-wood-boiler-2022 | official_guidance | US EPA, AP-42 1.6, March 2022, pp.1.6-1–1.6-3; https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | Conditional onsite wood-residue boiler boundary and pollutants; no boiler factor copied from sawmill-dust studies; preserve physical biogenic carbon |
| epa-cod-4104-1993 | official_guidance | US EPA Method410.4, rev2.0, August1993, sections1–2,4,8–9; https://www.epa.gov/sites/default/files/2015-08/documents/method_410-4_1993.pdf | COD analytical basis and quality controls, not discharge limits |
| epa-bod-4051 | official_guidance | US EPA Method405.1, issued1971, editorial revision1974, p.405.1-1 (official archive PDF page34); https://semspub.epa.gov/work/03/130972.pdf | BOD five-day analytical definition; archived method only, no archive-site measurements transferred |
| epa-tss-1602 | official_guidance | US EPA Method160.2, p.160.2-1 (official archive PDF page351; edition not asserted); https://semspub.epa.gov/work/03/160260.pdf | Filter-retained dried residue definition and interferences; no landfill-site parameters transferred |
| epa-phenol-8270e-2018 | official_guidance | US EPA Method8270E, rev6, June2018, sections1–2 and phenol analyte table; https://www.epa.gov/sites/default/files/2019-01/documents/8270e_revised_6_june_2018.pdf | Compound-specific phenol GC/MS with aqueous matrix validation |
| epa-carbonyl-8315a-1996 | official_guidance | US EPA Method8315A, rev1, December1996, sections1–3, procedure1; https://www.epa.gov/sites/default/files/2015-12/documents/8315a.pdf | Aqueous free-formaldehyde DNPH/HPLC basis, artifacts and phase definition |
| epa-hardboard-wasteload-1979 | official_guidance | US EPA, Raw Wasteload Characteristics of the Hardboard Industry, EPA-600/2-79-008, January1979, printed pp.13 and15 (PDF25/27), Broke Dilution Water and White Water Recycle; https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101B18N.TXT | Historical wet broke return to stock chest and white-water reuse/saveall possibilities; only qualitative process descriptions, no survey/experiment numbers or universal recovery rate adopted |
