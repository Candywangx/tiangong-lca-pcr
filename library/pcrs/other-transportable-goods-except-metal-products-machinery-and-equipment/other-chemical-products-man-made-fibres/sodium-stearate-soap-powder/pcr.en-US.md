---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.sodium-stearate-soap-powder
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Sodium stearate soap powder by fatty-acid neutralisation

## 1. Scope and Applicability

This method covers unformulated vegetable-derived C18 sodium stearate soap powder, CAS 822-16-2, made from identified free stearic acid and purchased 50% aqueous sodium hydroxide by neutralisation, actual water removal, powder finishing, quality acceptance, packaging, included storage and factory dispatch. The real marketed >=99% powder demonstrates a specific supply form; actual assay basis, moisture, fatty-acid profile and lot acceptance must be established. No mixed-fat recipe is inferred. [sigma-s3381; us-soap-neutralisation-1983; epa-soap-1974]

Exclude deliberately mixed C16/C18 fatty-acid soaps, sodium oleate/palmitate, potassium or metal soaps, glyceride saponification, purchased-soap-base finishing, superfatted/perfumed or glycerol-added formulations, bars, liquid cleansers, nonsoap surfactants, impregnated substrates and their finished articles. A changed feed, formula, route or physical state requires a separate applicability decision, not pooling under the classification label. The boundary is not a claim that the named producer uses the specified route. Historical patent examples include composite additives; their 12% moisture, recipes, airflow and energy are not defaults for this powder. [us-soap-neutralisation-1983]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.sodium-stearate-soap-powder |
| classification_refs | CPC 3.0:35321; narrower subset; separate mapping review |
| covered_products | Single-C18 sodium stearate soap powder with declared actual water and trace impurities; >=99% assay on the declared analytical basis |
| excluded_products | Section 1 exclusions; no deliberate multisoap or additive formulation |
| representative_product | Vegetable-derived unformulated sodium stearate powder, CAS822-16-2, CH3(CH2)16COONa |
| production_route | Free stearic acid + NaOH solution; neutralisation; water removal and powder finishing; packing/storage/dispatch |
| market_state | Actual accepted powder as delivered, residual water included; packaging tare excluded; actual temperature and storage regime declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the specified sodium stearate soap powder for cleansing/emulsifying ingredient use; no equal cleaning-performance claim |
| How much | 1 kg net actual accepted externally delivered powder |
| How well | Single-C18 sodium stearate, declared >=99% analytical assay basis, water, free acid/alkali, profile, powder specification and lot acceptance |
| How long or cycle | One complete reporting period and matched delivery cohort; no fixed service life |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Soap `90182cb6-09a6-4709-b22a-785e5f1690e2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | C18 CAS/species and fatty-acid profile; vegetable origin; analytical assay method and wet/dry basis; actual moisture/free acid/alkali and impurities; free-acid neutralisation route and 50% whole caustic supply; powder grade and finishing; actual net delivery gate; cohort/period and return IDs; WIP and finished-stock masses and carried burdens; site/geography and supplier background; actual package and storage/dispatch conditions; non-WIP loop/equipment physical stocks and each inherited exchange vector; manufacturing FG and combined gates with gross dispatch/returns and moisture phase history; every actual packaging article five-direction custody and dry tare; actual drying gas species/state/phase and supplier steam-water-energy agreement |

Every required qualifier must appear in foreground metadata, process notes, reference comments or equivalent fields. The broad Soap UUID is not evidence of a supplier recipe, grade, region or upstream quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is actual net accepted external delivered powder mass for one product/route/state cohort. Exclude packaging tare, internal transfers, undelivered finished stock and already counted returns. Deduplicate physical lot/portion IDs; returned and reaccepted material creates no additional Q. Retained moisture is included; dry-active analysis is a subledger, not another reference. |
| inventory_carry | all inventory rows |  |  | Keep separate manufacturing, FG and combined physical gates. FG: opening + actual new release + external returns + independently measured actual material/moisture entering FG = closing + gross outward dispatch G + actual FG waste, vapour and other physical exits. Track dry C18 salt, free water and other actual species independently at opening, release, return, rework, closing and dispatch. Cancel internal production/rework handovers only once; release plus closing FG is not a double output. Net accepted delivery Q follows calc_delivery, not G or release. Every raw/WIP and non-WIP water loop, steam/condensate, cooling fluid, lubricant, refrigerant and equipment charge retains independent physical amount/state/location AND each inherited exchange vector, with original cohort/history and no overlapping stocks. Add every actual charge makeup, recovery, leak, replacement and disposal as a specific atomic exchange before data use. |
| single_normalisation | all inventory rows | Mass / Energy | kg; MJ | Collect raw period numerators without dividing. Attribute actual failed/zero-output runs, returns/rework, utilities, warehouse/packing/handling/dispatch and treatment burdens to their matched cohort including stock carryover. calc_normalise alone divides the resulting numerator B_i by Q once. Card amount rules and protocol aggregation are the same report operation, never sequential divisions. No positive Q means no finite per-kg dataset. |
| wet_supply | whole wet material supplies | Mass | kg | Purchase each whole wet solution once. NaOH assay and carrier water are component subledgers. With onsite preparation, separately acquired ingredients and actual mixing/dilution energy/loss replace the formulation purchase. Do not buy feed oil, its stearic acid and a whole soap base again for the same upstream material. |
| unit_conversion | all inventory rows | Mass / Energy / Volume | kg; MJ; m3 | Use 1000 kg/t and 3.6 MJ/kWh. Convert liquid volumes using measured density at recorded conditions. Rate times duration is valid; an integrated volume is not multiplied by time again. Steam supply and condensate return masses remain separate physical records; heat service uses each actual measured mass and state enthalpy. Heat is not water mass, and secondary flow-property coefficients are not density. |
| species_water | physical material and species ledgers | Mass | kg | Check whole physical mass and C/H/O/Na separately from species reaction chemistry. For confirmed stearic-acid neutralisation, C18H36O2 + NaOH -> C18H35NaO2 + H2O forms one mole water per reacted mole and no glycerol. Glyceride + 3NaOH -> glycerol + 3soap does not itself form net water and is outside this route. Free water, evaporation, condensation and any structural water are separately evidenced; never fit reaction water and an unknown outlet to one closure residual or COD. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of specified vegetable-derived free C18 stearic acid and purchased whole 50% NaOH solution, not fats or soap base |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | Only the single-soap powder subset of CPC35321 |
| recursive_input_rule | Cancel internal soap, dust, condensate and rework handovers; external soap-base inputs change applicability and require upstream burden, not recursion into the final reference |
| upstream_dataset_requirement | Match origin and processing of whole acid, whole caustic, utilities and actual packaging; include applicable cultivation/oil extraction/refining, fat splitting, hydrogenation/fractionation and acid purification in supplied-acid backgrounds without inventing their presence or omission |
| disclosure | Actual site/geography, period/cohort, delivery gate, included storage temperature/time, packaging, dispatch/loading, stock burdens, outsourced stages and treatment; no supplier route inferred from catalogue |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | all inventory rows | Include receiving/storage, melting, solution handling, neutralisation, actual removal of water, milling/sieving, air systems, pollution controls, cleaning, QA, packing, warehouse and dispatch handling up to the actual factory-delivery gate. Include real rework and failed runs, plus upstream and external treatment links. | epa-soap-1974; us-soap-neutralisation-1983 |
| boundary_actual | all inventory rows | Atomic cards are a collection starting set, not a fixed plant recipe. Every actual extra package component, cleaner, utility, refrigerant loss, onsite fuel, treatment reagent, waste or elementary species requires an additional atomic card and protocol. Demonstrated absence permits not_applicable; a blank UUID or catalogue silence does not permit omission. | epa-soap-1974 |
| boundary_sources | all inventory rows | The producer page identifies a real high-purity plant-origin powder, not this supplier route or water/packaging composition. Its ambient shipment and 2-8 C storage differ; match actual conditions and retain refrigeration burdens when present. The ester metadata label conflicts with its carboxylate formula and is not a reaction basis. Patent Example I contains glycerol and composite additives: its formulation is not transferred. | sigma-s3381; us-soap-neutralisation-1983 |
| boundary_physical | all inventory rows | Independently close manufacturing, FG and combined total mass, C/H/O/Na and actual species/phase ledgers. Drying/ventilation has separately measured gross N2, O2, Ar, atmospheric-origin CO2 and gaseous H2O intake/outlets; no fixed air recipe or automatic fossil CO2/uptake credit. Purchased compressed-air carriers are composition child accounts, not duplicate environmental intake. Actual gas reaction/uptake, condensate, droplets and aerosols require separate measured identities/destinations. Packaging custody and external steam-water supply/return remain gross physical exchanges regardless of allocation. |  |
| boundary_pack | hdpe_body; hdpe_lid | For EACH actual separate article: opening empty + opening attachedWIP + opening attachedFG + opening reusable + new external purchase/supplier-attached receipt + external return received = closing empty + closing attachedWIP + closing attachedFG + closing reusable + article accompanying every gross physical dispatch + separate external return sent + actual article waste. New purchase and attached supplier receipt count once; contents are independent from dry tare. Internal reuse cancels within custody, never reduces gross outward article mass, raises net powder Q or creates automatic credit. Add every genuinely different material/article and its five external directions. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| soap_line | Integrated single-C18 soap powder line and delivery | required | Only the declared neutralisation route and powder cohort; stage and stock ledgers remain separate | foreground | product |

### Process: Sodium stearate powder production and delivery (`soap_line`)

#### Inputs

##### Product flows

###### Stearic acid feed (`stearic_acid`)

Purchased vegetable-derived C18 stearic acid, CAS 57-11-4, as a whole supplied material. Require fatty-acid profile, acid value, water, residual glycerides and supplier route; do not substitute commercial C16/C18 mixed acids or oils. Melting and feed handling remain included.

- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: us-soap-neutralisation-1983; epa-soap-1974

###### Purchased caustic solution (`caustic_solution`)

Whole purchased 50% aqueous NaOH solution. Record actual assay and whole wet mass; active NaOH and carrier water are subledgers, not extra purchases. Native source-paper reagent role supplies no supplier, production route, geography or quantity. Different concentration requires another verified identity; onsite dilution includes separately acquired water and energy without purchasing the resulting mixture again.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: us-soap-neutralisation-1983; epa-soap-1974

###### Deionised make-up water (`process_water`)

Only separately supplied deionised process and cleaning make-up water, excluding water already inside purchased caustic. Native route qualifier is ion exchange or reverse osmosis; broader comment also mentions distillation, so do not silently adopt it for a distillation-only supplier. No geographic limit or density is stated. Its CPC18000 natural-water classification does not describe the treated-water identity; retain this metadata debt while matching actual deionised-water supply.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-soap-1974

###### Purchased electricity (`electricity`)

Include melting, mixing, drying, milling/sieving, air movement, dust control, packing, cleaning and attributable warehouse/dispatch electricity. Match voltage, geography and supply period; no generic CN low-voltage UUID is assigned to an unspecified site. Capture refrigeration electricity if storage actually requires it.

- Selected flow: Grid electricity at the actual connection voltage
- Flow property / unit: Energy / MJ
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_energy
- Sources: epa-soap-1974

###### Indirect purchased steam heat (`steam_heat`)

Conditional actual external indirect heat, calculated from independently measured steam supply mass/state/enthalpy and actual external condensate return mass/state/enthalpy; do not assume supply and return masses equal. Keep steam_water_supply and condensate_return as distinct physical exchanges with loop/equipment stocks and actual losses. Agree supplier water/energy and upstream-burden ownership: heat service and carrier-water records must not purchase the same steam production twice. An onsite boiler requires its actual separate fuel, water and emissions instead; direct-contact steam needs its actual mass/state and renewed applicability review.

- Selected flow: Indirect heat supplied by industrial steam
- Flow property / unit: Energy / MJ
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_energy
- Sources: epa-soap-1974

###### HDPE package body (`hdpe_body`)

One actual HDPE drum body if used. Weigh tare by package design and reconcile issued, returned, damaged and stock quantities; do not infer packaging from net product mass or a catalogue pack size. Record actual new supply or supplier-attached receipt once and dry tare independently of contents. Apply boundary_pack to empty, attached WIP/FG and reusable stocks and all five external directions; the actual physical dispatch mass never falls with reuse or allocation.

- Selected flow: HDPE packaging drum body
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

###### HDPE package lid (`hdpe_lid`)

One separate actual HDPE lid if used; body mass excludes it. Other closure resin, liner, seal, label or outer carton requires its own atomic exchange and collection record. An alternative package is not evidence that actual packaging can be omitted. Record actual new supply or supplier-attached receipt once and dry tare independently of contents. Apply boundary_pack to empty, attached WIP/FG and reusable stocks and all five external directions; the actual physical dispatch mass never falls with reuse or allocation.

- Selected flow: HDPE packaging drum lid
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

###### External indirect-heating steam water supply (`steam_water_supply`)

Actual externally supplied steam as physical H2O mass with measured quality, pressure, temperature, enthalpy and supplier water/energy agreement. Separate from calculated heat service; assign its upstream production once under the agreed provider convention, never duplicate it across the two records. Track actual loop charge and independently measured return/loss.

- Selected flow: External indirect-heating steam water supply
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_stock
- Sources: epa-soap-1974

###### Soap (`fg_return`)

Actual externally returned specified C18 powder by original physical portion, measured moisture/dry salt/state, historical exchange vector and original delivery correction. Reacceptance is not new manufacture. This is a gross custody record; netting under calc_delivery cannot erase actual mass, rework inputs or outlets. The broad native Product identity permits fatty-acid alkali salts but has no CAS/form/grade/geography restriction; actual C18 powder qualification remains mandatory.

- Selected flow: Soap `90182cb6-09a6-4709-b22a-785e5f1690e2`
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-soap-1974

###### Externally returned HDPE packaging drum body (`hdpe_body_return_received`)

One actual complete HDPE packaging drum body. Apply the full per-article boundary_pack equation at measured dry tare, independent of contents. This separate return_received direction is actual physical custody; retain attached WIP/FG and reusable stocks, lineage, destination and inherited exchange vectors. Gross outward mass is never reduced by reuse, return netting or allocation. Other real resin/article requires its own atomic card.

- Selected flow: Externally returned HDPE packaging drum body
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

###### Externally returned HDPE packaging drum lid (`hdpe_lid_return_received`)

One actual complete HDPE packaging drum lid. Apply the full per-article boundary_pack equation at measured dry tare, independent of contents. This separate return_received direction is actual physical custody; retain attached WIP/FG and reusable stocks, lineage, destination and inherited exchange vectors. Gross outward mass is never reduced by reuse, return netting or allocation. Other real resin/article requires its own atomic card.

- Selected flow: Externally returned HDPE packaging drum lid
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

##### Elementary flows

###### Nitrogen from ambient air (`nitrogen_in`)

Actual single carrier species at the environmental intake of drying/ventilation. Determine mass independently from integrated gas measurement, actual P/T/composition and origin; no fixed dry-air proportions or inferred zero reaction/uptake. Purchased carrier belongs to its product child account instead of another resource input. Passing atmospheric CO2 is not new fossil generation or a credit.

- Selected flow: Nitrogen from ambient air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

###### Oxygen from ambient air (`oxygen_in`)

Actual single carrier species at the environmental intake of drying/ventilation. Determine mass independently from integrated gas measurement, actual P/T/composition and origin; no fixed dry-air proportions or inferred zero reaction/uptake. Purchased carrier belongs to its product child account instead of another resource input. Passing atmospheric CO2 is not new fossil generation or a credit.

- Selected flow: Oxygen from ambient air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

###### Argon from ambient air (`argon_in`)

Actual single carrier species at the environmental intake of drying/ventilation. Determine mass independently from integrated gas measurement, actual P/T/composition and origin; no fixed dry-air proportions or inferred zero reaction/uptake. Purchased carrier belongs to its product child account instead of another resource input. Passing atmospheric CO2 is not new fossil generation or a credit.

- Selected flow: Argon from ambient air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

###### Atmospheric-origin carbon dioxide from ambient air (`atmospheric_co2_in`)

Actual single carrier species at the environmental intake of drying/ventilation. Determine mass independently from integrated gas measurement, actual P/T/composition and origin; no fixed dry-air proportions or inferred zero reaction/uptake. Purchased carrier belongs to its product child account instead of another resource input. Passing atmospheric CO2 is not new fossil generation or a credit.

- Selected flow: Atmospheric-origin carbon dioxide from ambient air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

###### Atmospheric water-vapour intake (`air_moisture_in`)

Actual gaseous ambient moisture entering drying/ventilation or FG storage, independently measured by humidity and actual gas state/flow. Purchased carrier moisture is its supply child account. Do not default intake to zero, derive it from net evaporation or presume it all exits as vapour; reconcile actual condensation, adsorption, retained stock and measured gaseous outlet.

- Selected flow: Atmospheric water-vapour intake
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

#### Outputs

##### Product flows

###### Net delivered sodium stearate powder (`product`)

Terminal Product output only: actual net external accepted delivery of the specified powder, after powder finishing, quality acceptance, actual packaging, included storage and dispatch handling. Native Soap is a broad alkali-fatty-acid salt identity with no CAS, grade, form or geography; this method and lot evidence supply the narrower C18 powder qualifiers. Packaging tare is excluded; actual retained water and impurities remain in the net powder mass. The fixed 1 kg is the net-delivery reference representation of the gross dispatch/return custody ledger, not an extra physical shipment added to gross_dispatch. Preserve actual new water/cleaner/packaging/energy entering returned FG rework and each measured moisture/species/waste exit under its causing cohort; water gain/loss is not new soap manufacture. Old cohort denominators and exchange vectors remain in correction provenance; incremental services follow the declared matched net-delivery basis, never unrelated current output.

- Selected flow: Soap `90182cb6-09a6-4709-b22a-785e5f1690e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_output
- Sources: sigma-s3381; us-soap-neutralisation-1983

###### External condensate water return (`condensate_return`)

Actual water physically returned across the supplier boundary, with independent mass/state/enthalpy and custody. It is not wastewater or a credit. Internal condensate recirculation cancels; independently close supply, opening/closing equipment charge, other real water outlets and this return.

- Selected flow: External condensate water return
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_stock
- Sources: epa-soap-1974

###### Soap (`gross_dispatch`)

Actual gross physical outward specified powder, including redelivery, measured net of package tare by portion and moisture/state. Keep old dispatch/return reversals and original vectors. This custody amount G is not Q; the one net product reference represents the reconciled accepted delivery, so never append gross_dispatch as a second model product output on top of that reference. Native Soap aliases include toilet/Castile soap but do not establish mixed-oil recipe or this powder specification.

- Selected flow: Soap `90182cb6-09a6-4709-b22a-785e5f1690e2`
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-soap-1974

###### Gross dispatched HDPE packaging drum body (`hdpe_body_out`)

One actual complete HDPE packaging drum body. Apply the full per-article boundary_pack equation at measured dry tare, independent of contents. This separate out direction is actual physical custody; retain attached WIP/FG and reusable stocks, lineage, destination and inherited exchange vectors. Gross outward mass is never reduced by reuse, return netting or allocation. Other real resin/article requires its own atomic card.

- Selected flow: Gross dispatched HDPE packaging drum body
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

###### Externally returned to supplier HDPE packaging drum body (`hdpe_body_return_sent`)

One actual complete HDPE packaging drum body. Apply the full per-article boundary_pack equation at measured dry tare, independent of contents. This separate return_sent direction is actual physical custody; retain attached WIP/FG and reusable stocks, lineage, destination and inherited exchange vectors. Gross outward mass is never reduced by reuse, return netting or allocation. Other real resin/article requires its own atomic card.

- Selected flow: Externally returned to supplier HDPE packaging drum body
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

###### Gross dispatched HDPE packaging drum lid (`hdpe_lid_out`)

One actual complete HDPE packaging drum lid. Apply the full per-article boundary_pack equation at measured dry tare, independent of contents. This separate out direction is actual physical custody; retain attached WIP/FG and reusable stocks, lineage, destination and inherited exchange vectors. Gross outward mass is never reduced by reuse, return netting or allocation. Other real resin/article requires its own atomic card.

- Selected flow: Gross dispatched HDPE packaging drum lid
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

###### Externally returned to supplier HDPE packaging drum lid (`hdpe_lid_return_sent`)

One actual complete HDPE packaging drum lid. Apply the full per-article boundary_pack equation at measured dry tare, independent of contents. This separate return_sent direction is actual physical custody; retain attached WIP/FG and reusable stocks, lineage, destination and inherited exchange vectors. Gross outward mass is never reduced by reuse, return netting or allocation. Other real resin/article requires its own atomic card.

- Selected flow: Externally returned to supplier HDPE packaging drum lid
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

##### Waste flows

###### Soap-bearing cleaning wastewater (`wash_water`)

Actual external wet wastewater from equipment cleaning and off-spec handling; measure water, sodium, stearate and actual contaminants independently of COD. Link receiving treatment and its burden. Internal wash liquor reused within the boundary is an internal transfer, not another waste export.

- Selected flow: Sodium-stearate-bearing cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outlets
- Sources: epa-soap-1974

###### Discarded off-spec powder (`discarded_soap`)

Weighed final soap residue leaving for treatment, with water/chemical composition and treatment destination. Recovered dust, returns or rework remain internal until actually discarded; track recovery energy and losses, not a coproduct credit.

- Selected flow: Discarded off-spec sodium stearate powder
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outlets
- Sources: epa-soap-1974

###### Discarded HDPE packaging drum body (`hdpe_body_waste`)

One actual complete HDPE packaging drum body. Apply the full per-article boundary_pack equation at measured dry tare, independent of contents. This separate waste direction is actual physical custody; retain attached WIP/FG and reusable stocks, lineage, destination and inherited exchange vectors. Gross outward mass is never reduced by reuse, return netting or allocation. Other real resin/article requires its own atomic card.

- Selected flow: Discarded HDPE packaging drum body
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

###### Discarded HDPE packaging drum lid (`hdpe_lid_waste`)

One actual complete HDPE packaging drum lid. Apply the full per-article boundary_pack equation at measured dry tare, independent of contents. This separate waste direction is actual physical custody; retain attached WIP/FG and reusable stocks, lineage, destination and inherited exchange vectors. Gross outward mass is never reduced by reuse, return netting or allocation. Other real resin/article requires its own atomic card.

- Selected flow: Discarded HDPE packaging drum lid
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-soap-1974

##### Elementary flows

###### Process water vapour to air (`water_vapour`)

Measure the actual gross ordinary gaseous H2O crossing the external air boundary after controls, including uncondensed carrier moisture and actual process/FG evaporation. Independently measure inlet humidity, phase changes, retained moisture and stock changes. Net newly evaporated process water is an origin subaccount inside this gross outlet, never another output. Do not assume all inlet water exits as vapour: liquid condensate, droplets and aqueous aerosols need their own actual atomic destinations. Reaction-water formation is independently calculated from reacted species and is not automatically an emitted vapour quantity. No single residual may fit unknown phases/species. Adopt only ordinary gaseous H2O CAS7732-18-5 to ordinary external air unspecified, Mass reference factor1, no geographic/technology restriction or other property. Registry synonyms mentioning ice, bound or isotope water do not authorize those forms; known other compartments need another verified identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outlets
- Sources: epa-soap-1974

###### Uncaptured stearate dust to air (`soap_dust`)

Actual stack and fugitive powder losses after controls, measured by exhaust flow and species-specific particulate sampling with duration. Captured dust returned to process is not emitted. Any other measured emission requires a separate species and compartment row.

- Selected flow: Sodium stearate particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outlets
- Sources: epa-soap-1974

###### Nitrogen to external air (`nitrogen_out`)

Actual single carrier species at the external atmospheric outlet of drying/ventilation. Determine mass independently from integrated gas measurement, actual P/T/composition and origin; no fixed dry-air proportions or inferred zero reaction/uptake. Purchased carrier belongs to its product child account instead of another resource input. Passing atmospheric CO2 is not new fossil generation or a credit.

- Selected flow: Nitrogen to external air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

###### Oxygen to external air (`oxygen_out`)

Actual single carrier species at the external atmospheric outlet of drying/ventilation. Determine mass independently from integrated gas measurement, actual P/T/composition and origin; no fixed dry-air proportions or inferred zero reaction/uptake. Purchased carrier belongs to its product child account instead of another resource input. Passing atmospheric CO2 is not new fossil generation or a credit.

- Selected flow: Oxygen to external air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

###### Argon to external air (`argon_out`)

Actual single carrier species at the external atmospheric outlet of drying/ventilation. Determine mass independently from integrated gas measurement, actual P/T/composition and origin; no fixed dry-air proportions or inferred zero reaction/uptake. Purchased carrier belongs to its product child account instead of another resource input. Passing atmospheric CO2 is not new fossil generation or a credit.

- Selected flow: Argon to external air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

###### Atmospheric-origin carbon dioxide to external air (`atmospheric_co2_out`)

Actual single carrier species at the external atmospheric outlet of drying/ventilation. Determine mass independently from integrated gas measurement, actual P/T/composition and origin; no fixed dry-air proportions or inferred zero reaction/uptake. Purchased carrier belongs to its product child account instead of another resource input. Passing atmospheric CO2 is not new fossil generation or a credit.

- Selected flow: Atmospheric-origin carbon dioxide to external air
- Flow property / unit: Mass / kg
- Amount rule: B_i / Q; complete raw converted and stock/cohort-attributed numerator divided once in the reporting operation defined in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_air
- Sources: epa-soap-1974

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single | all inventory rows | This free-acid route produces no reaction glycerol and defines only soap powder as the reference. Do not add hypothetical glycerol output, substitution credit, soap-base credit or avoided waste-treatment benefit. Upstream fat-splitting glycerol belongs to the supplied-acid background with its disclosed allocation. | epa-soap-1974; us-soap-neutralisation-1983 |
| allocation_actual | all inventory rows | Establish the study situation first: these provisions apply when attributional allocation is required; industrial route evidence does not authorize consequential substitution. First subdivide actual distinguishable operations or use evidenced virtual subdivision to assign exclusive materials, failures, cleanup, package and service exchanges. For each still-shared exchange independently establish the determining physical cause and measured driver, including actual state/time/geometry as relevant; mass or output count is not universal causality. Only a genuine residual without determining physical assignment uses relative market values of actual cofunctions at the same process exit/entry gate, condition and period, removing downstream transport/conditioning/packaging costs where needed. Collect quantities, prices/currency/date, allocation-sum conservation and sensitivity. Unknown cause/value evidence leaves the concrete dataset incomplete; no arbitrary fixed key. Internal return/rework/dust is not a coproduct or credit; actual external recovery follows applicable recycling provisions. | jrc-ilcd-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Named owners collect original records without division. Protocol aggregation and card formulas refer to the one downstream calc_normalise operation. Collection includes the full reporting period, zero-output/failed runs and complete WIP/finished-stock carryover; absence needs evidence, not assumed zero.

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | soap_line | product; fg_return; gross_dispatch | acceptance_record | lot_id; portion_id; grade; CAS; route; origin; fatty_acid_profile; assay; assay_basis; moisture; free_acid; free_alkali; net_mass; package_tare; dispatch; acceptance; returns; opening_finished; closing_finished; carried_burdens; returned_carried_burdens; prior_report_corrections  dry_salt; water; actual_FG_new_inputs; FG_evaporation; condensation; adsorption; FG_waste_and_other_exits; original_Q_and_vector; | Owner: QA lead and dispatch/stock accountant. Reconcile calibrated powder net weights, lot CoA, acceptance, outward dispatch and return links. Preserve raw masses and carried burden vectors; no A/Q. Resolve prior counted versus replacement portions by physical lineage.  Independently weigh gross custody G/returns and actual phase/composition changes; record each actual new FG/rework input/output and incremental service with correction history. | kg; %; lot ID | Each dispatch/return; period-end reconciliation | Complete actual delivery period and source production periods | Same powder/route/state and actual site | per 1 kg reference flow | Calibrations, acceptance and return documents, CoA, stock and burden ledgers |
| cp_material | soap_line | stearic_acid; caustic_solution; process_water | purchase_and_batch_record | material_id; supplier; route; origin; wet_mass; assay; water_fraction; density; temperature; pressure; receipts; issues; returns; opening; closing; WIP_mass; WIP_composition; carried_burdens; failed_run; rework | Owner: production mass-balance engineer. Capture actual whole supply receipts/issues and calibrated dosing for every run, including failures. Retain active/carrier subledgers, traceable WIP and carried burdens; close raw inventory without normalising. | kg; m3; kg/m3; % | Each receipt/batch; stock endpoints | Full actual production and delivery cohort history | Acid handling, alkali handling, reaction, cleaning and WIP | per 1 kg reference flow | Invoices, calibrated scales/meters, assays, supplier origin, WIP genealogy and burden records |
| cp_energy | soap_line | electricity; steam_heat | meter_and_service_record | meter_start; meter_end; kWh; steam_mass; inlet_enthalpy; condensate_enthalpy; run_duration; integrated_volume; storage_time; temperature; allocation_driver; failed_run; carried_burdens | Owner: utilities engineer. Keep undivided raw readings by stage/run and the attributable warehouse, refrigeration, packing, handling, dispatch and treatment service pools, including failed runs and carried stock services. Record actual supply voltage/geography and steam conditions. | kWh; MJ; kg; kJ/kg; h | Meter interval and each batch/service | Complete actual period and relevant stock service history | All included stages and shared facilities | per 1 kg reference flow | Meter calibrations, bills, enthalpy conditions and causal allocation records |
| cp_pack | soap_line | hdpe_body; hdpe_lid; all packaging directions | package_and_dispatch_record | component_id; resin; tare; issued_count; returned_count; damaged_count; opening; closing; packed_lot; delivered_portion; rework; carried_burdens  empty/attachedWIP/attachedFG/reusable opening_closing; new_receipt; external_return_received; gross_outward; external_return_sent; article_waste; contents; inherited_exchange_vectors; | Owner: packaging and warehouse manager. Weigh each actual component separately and retain raw issue/stock/return/damage records matched to delivered portions; include repacking, handling and retained finished-stock packaging burdens. No per-kg calculation during collection.  Apply boundary_pack separately to every article and actual five external directions, with gross physical dispatch independent from reuse/allocation. | kg; count | Each package design/lot and dispatch | Full actual period and package stock history | Actual packing, stock and dispatch area | per 1 kg reference flow | Tare tests, bill of materials, stock issues/returns and dispatch linkage |
| cp_outlets | soap_line | wash_water; discarded_soap; water_vapour; soap_dust | measurement_and_treatment_record | wet_mass; composition; water; sodium; stearate; exhaust_flow; humidity_in; humidity_out; particulate_concentration; duration; condensate; capture; rework; receiving_treatment; failed_run; carried_burdens | Owner: environmental engineer. Keep independent undivided outlet measurements and treatment records, including failed runs, cleaning and rework. Preserve units and measurement boundary; measure vapour/dust independently of reaction-water calculation and total-mass residual. | kg; m3; kg/m3; h | Each event; representative monitored intervals | Complete actual period and stock-linked losses | Dryer/exhaust, cleaning, residue and treatment boundary | per 1 kg reference flow | Sampling/calibration, humidity and flow conditions, waste manifests and treatment evidence |
| cp_balance | soap_line | all inventory rows | species_and_inventory_balance | reacted_stearic_moles; reacted_NaOH_moles; residual_species; water_in; water_out; WIP_open; WIP_close; finished_open; finished_close; transfers; loss; burden_vectors  nonWIP_equipment_location; opening_closing_charge; actual_makeup_recovery_leak_disposal; per_exchange_open_current_close_vectors; manufacturing_FG_combined_gates; | Owner: process chemist with stock accountant. Establish reacted species from independent feed/product analyses and conversion tests; retain complete raw stage/whole-site physical, C/H/O/Na and water ledgers with stock changes and carryover. Do not solve both reaction water and an unknown outlet from a residual.  Each actual non-WIP stock has independent physical and every-exchange-vector conservation, disjoint from raw/WIP; include all actual FG mass/species movements before cancelling internal transfers. | kg; mol; % | Each batch and complete period close | Whole cohort including prior stock origins | Reaction, water removal, WIP and finished store | per 1 kg reference flow | Assays, reaction tests, raw balances, transfer receipts and carried burden reconciliation |
| cp_air | soap_line | all actual carrier species | gas_measurement | species; origin; integrated_volume_or_rate; interval; P; T; humidity; composition; actual uptake; compartment; FG_or_manufacturing | Owner: environmental engineer. Independently measure each gross species intake/outlet and phase, not a fixed air mixture. Purchased carrier child accounts do not repeat resource intake; retain raw unnormalised records before calc_normalise. | original unit | each interval/event | complete period and cohort history | actual air and FG boundary | per 1 kg reference flow | meter calibration; species/humidity analysis; phase records |
| cp_stock | soap_line | steam_water_supply; condensate_return; each actual nonWIP charge | physical_and_exchange_vector_ledger | material; location; opening; supply; return; state; enthalpy; actual loss; closing; original_vector; each_current_increment; supplier_water_energy_convention | Owner: utilities and stock engineers. Measure each actual mass and separate phase/state, carry each inherited exchange vector, and reconcile stock/returns/loss without overlap. Supply/return masses need independent meters; upstream steam production is owned once across heat and water records. Retain raw records before calc_normalise. | kg; state; kJ/kg | each movement and stock endpoint | complete period and inherited histories | actual supplier and equipment locations | per 1 kg reference flow | calibration; supplier convention; physical stock and burden-vector evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Retain each external whole-supply raw exchange once; reconcile receipts/issues/returns and opening/closing unreacted material. Convert tonnes to kg; kWh to MJ by 3.6; liquid integrated volume to mass by measured-condition density. Heat is net delivered enthalpy. Rate x duration is allowed; integrated volume gets no extra time. Subledgers are not duplicate exchanges. | cp_material; cp_energy; cp_pack; cp_outlets | raw_exchange_vectors | epa-soap-1974 |
| calc_delivery | product | Q = unique net externally delivered and accepted powder mass of the declared cohort after linked return adjustments; never count re-delivery of the same already counted physical portion twice. A return reverses the original delivery recognition for that physical portion; later re-delivery restores it once and creates no new production. Record prior-period corrections so neither the original and replacement delivery nor their history burdens are duplicated. Keep opening + releases + physical returns + actual new FG material/moisture = gross dispatch + closing + all actual FG waste/vapour/other exits, with separate new-production and delivered quantities. Unresolved return lineage or nonpositive Q blocks reporting.   Independently retain gross G, external returned mass and water/dry-salt/state changes; the simplified FG equation must include actual new material/moisture inputs and real vapour/waste/other exits, not force release plus returns into unchanged wet mass. Preserve the original Q and numerator of affected historical reports for explicit corrections; re-delivery restores only the actually accepted reconditioned portion/state once, never old mass blindly and never new manufacture. | cp_output; cp_balance | Q |  |
| calc_carry | all inventory rows | For each burden vector B_i, take complete actual period raw burden plus opening WIP/finished carried burden and inbound returned-product carried burden not already included in opening stock, with linked prior-report corrections, minus closing WIP/undelivered finished carried burden and separately justified other-product shares. Assign retained failed/zero-output and irrecoverable-loss burdens to the responsible cohort; include actual rework, cleaning, treatment, storage, packaging, handling and dispatch. Physical stock balances and burden balances are separate. Stage/warehouse handovers cancel, including prior stock load rather than treating it as zero. Carry external returned-product history without recreating production.   Extend the same per-exchange opening/current/closing reconciliation to non-WIP loops and equipment charges at each declared location; every genuine change in remaining stock keeps its inherited vector, not only purchase expenditure. Actual new FG/rework inputs, exits and incremental services belong to the causally matching net-delivery cohort. Do not use one old cohort burden or denominator for unrelated current output. Net delivery reference and gross custody cards are alternative accounting views of the same product movements, never additive duplicate product exports. | raw_exchange_vectors; cp_balance; cp_output; cp_energy; cp_pack; cp_outlets | B_i |  |
| calc_chemistry | all inventory rows | Independently establish reaction extent xi from identified reacted C18 acid/NaOH and residual assays: n(H2O formed) = xi; n(glycerol formed) = 0 for this route. Use documented molar masses for mass conversion. Distinguish incoming solution water, residual free water, evaporation, condensate and any evidenced structural water. Confirm C/H/O/Na and complete mass with WIP/stock. Do not infer xi from an unknown water outlet or closure residual; a glyceride route needs another method. | cp_balance; cp_material; cp_output; cp_outlets | independent_species_and_water_balance | us-soap-neutralisation-1983; epa-soap-1974 |
| calc_normalise | all inventory rows | For every non-reference exchange, report B_i / Q exactly once after calc_raw and calc_carry; Q is from calc_delivery, not production release or dry-active mass. The product output is 1 kg. Inventory expressions and protocol aggregation describe this same report, not successive divisions. Preserve all unnormalised ledgers and conversion/attribution provenance. | B_i; Q; cp_output; cp_material; cp_energy; cp_pack; cp_outlets; cp_balance | normalised_inventory |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Confirm actual C18 profile, vegetable origin, assay basis, powder state and route; product name/CAS alone or nonaqueous titration cannot establish the complete composition. UUID supports only its native identity limitations; background compatibility is independent. | Supplier CoA/SDS, fatty-acid analysis, site route and background documentation |
| dq_complete | all inventory rows | Complete raw periods, failed runs, returned/reworked portions, physical WIP/finished stocks and their full carried burden vectors must reconcile. Document sampling uncertainty and missing-data resolution before quantitative use. | Raw ledgers, transfer genealogy, calibrated meters and independent balances |
| dq_sources | all inventory rows | Historical EPA/patent descriptions are route evidence, not modern inventory or scientific approval. Producer page provides no lot water, package, manufacturing route or climate inventory. Match actual storage/transport conditions, suppliers, place and time. | Primary originals, full source limitations and collected activity records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | product | Require product as the sole terminal net-delivery reference with reference_flow_link product, the Soap UUID, Mass/kg and 1 kg; gross_dispatch is its gross custody ledger, never an additional net product output; verify declared C18 powder qualifiers and actual net delivery gate. Intermediate soap or internal returns cannot become another reference under the same UUID. |  |
| validate_accounts | all inventory rows | Require positive Q, matched raw/cohort records, complete WIP/finished burden carryover, return deduplication, no double procurement and exactly one normalisation. Verify production release and delivery separately; no closing-stock double output and no omitted warehouse/packing/dispatch/rework load.   Independently close the manufacturing, FG and combined physical/species gates, non-WIP physical and inherited exchange stocks, all package directions and steam carrier supply/return. Gross product custody must reconcile to the single net reference rather than add duplicate product exports. Verify separate phase outlets and original return corrections with each actual new rework input and loss. |  |
| validate_chemistry | all inventory rows | Require independent complete mass/element and species/water evidence. Reject generic reaction-water assumptions, glycerol reference/credits, COD or residual fitted unknown outlets and integrated-volume time multiplication. Check active, water and whole-supply subledger agreement. | us-soap-neutralisation-1983; epa-soap-1974 |
| validate_boundaries | all inventory rows | Check actual atomic utility/package/treatment/emission completeness, native property/unit and geography limits, provider and source applicability. Empty auxiliary UUIDs remain disclosed identity work; they do not erase actual flows. Source limitations and stock burdens remain in both language renderings and projection. |  |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Ingredient supply of this specified sodium stearate powder |
| allowed_use | Matched composition/assay, powder state, route, supply and net-delivery boundary after data quality review |
| excluded_use | Mixed soaps, triglyceride route, liquid/bar/formulated cleansers, substrate articles and equal-use cleaning comparisons |
| required_metadata | All reference qualifiers, raw period/cohort, stage/provider links, stock and return genealogy, allocation and exact background versions |
| required_quality_disclosure | Actual composition/water/assay basis, complete carried burdens, upstream coverage, losses, uncertainty, missing auxiliaries and source limitations |
| update_trigger | Change of acid profile/origin, route, formula, powder grade, package, utilities, storage, provider or delivery boundary |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-soap-1974 | official_guidance | US EPA, EPA-440/1-74-018-a, April 1974, printed pp.24-29, especially p.26 and Figure 4; https://www.epa.gov/sites/default/files/2016-08/documents/soap-detergent-mfg_dd_1974.pdf | Historical US fatty-acid neutralisation versus glyceride/fat-splitting routes; receiving/storage, recycle and wastewater boundary. No modern quantity, emission or zero-effluent default; no supplier recipe. |
| us-soap-neutralisation-1983 | literature | Story and Myers / Armour-Dial, US4397760A, 1983-08-09, columns 5-10, especially equation in column 7 and powder finishing in column 8; https://patents.google.com/patent/US4397760A/en | Primary patent reaction and mixing/water-removal description. Explicit acid + NaOH -> soap + water; no transfer of its approximate water percentages, example recipes, airflows or energy. Example I composite additives/glycerol are outside this unformulated powder; no claim that producer uses this equipment or achieves this grade. |
| sigma-s3381 | literature | Sigma-Aldrich / Merck, S3381 Sodium stearate producer page, dated reading 2026-10-16; https://www.sigmaaldrich.com/US/en/product/sigma/s3381 | Primary producer identity: CAS822-16-2, C18 carboxylate, >=99% plant-origin powder; ambient shipment and 2-8C storage differ. Actual lot water/packaging and manufacturing route are not supplied. The ester metadata tag conflicts with displayed carboxylate structure; not a reaction basis. Retained evidence is a web-tool-rendered primary page, not an acquired publisher PDF or lot CoA. |
| jrc-ilcd-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | First edition March2010, complete sections7.9.2–7.9.3 printed255–272/PDF275–292; applicable attributional situation, subdivision/virtual subdivision, per-exchange determining physical causality, genuine residual common-gate actual-state market value and recycling limitations. No fixed allocation factors. |
