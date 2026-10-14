---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.tar-distilled-from-coal-from-lignite-and-other-mineral-tars
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Recovered crude coal tar

## 1. Scope and Applicability

This PCR defines recovery, any applicable dewatering, acceptance, storage and bulk delivery of crude coal tar from actual tar-water condensate of by-product coal coke ovens. The foreground begins at receipt of condensate collected from the collecting main, primary cooling and electrostatic tar precipitation and ends at accepted crude coal-tar plant-gate delivery. A specific factory configuration or measured amount is not assumed: the future data package must collect it. BREF sections 5.1.4.3–5.1.5 establish tar/water separation, coal-water routing and thick-tar return. Additional dewatering or warming is included only when operated, with technology, sampling and performance declared; no universal recipe, yield or moisture threshold is supplied. `jrc-iron-steel-bref-2013`

The independent finished reference is tar, rather than coke or gas; this PCR does not repeat coal carbonisation, wet quenching or complete gas cleaning. Coking and gas methodologies can supply upstream joint inventories, physical coproduct records and allocation evidence but their fixed gas reference cannot stand in for tar. The delivered product remains crude tar without fraction grading. Independent distillation oils, wash oil, anthracene oil, pitch and pitch coke are outside this method; using it after silently omitting such outputs is invalid. The WCO separation of headings 2706 and 2707/2708 and CPC 34540 provide classification context, not a tar production recipe. `wco-hs-2022-ch27`; `un-cpc-3-2025`

Peat tar, unassessed lignite/other mineral-tar routes, reconstituted tar, wood tar, tar-sand extraction, petroleum coking gas oil, downstream chemical refining and combustion are excluded. Only the coal-carbonisation crude-tar subset of CPC 33210 is supported: recommend narrower, with mapping acceptance left to independent controller review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.tar-distilled-from-coal-from-lignite-and-other-mineral-tars |
| classification_refs | CPC 3.0 33210; narrower |
| covered_products | Crude coal tar separated from by-product coal coke-oven condensate, with collected residual-water qualifiers; actual dewatering permitted, fractionation excluded |
| excluded_products | Peat tar; unassessed lignite/other mineral tar; reconstituted tar; wood tar; distillation oils; pitch; pitch coke; petroleum coking gas oil |
| representative_product | Accepted bulk crude coal tar at the recovery gate |
| production_route | Tar-water condensate separation; actual dewatering; storage, sampling and delivery |
| market_state | Bulk crude tar without a separate free aqueous phase; residual water, solids and acceptance limits declared from actual records |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply crude coal tar as downstream feedstock or declared fuel feedstock |
| How much | 1 kg accepted crude coal tar in the delivery state |
| How well | Coal-carbonisation origin; no separate free aqueous phase; measured water, solids, elemental C/H/O/N/S, acceptance specification and receiver |
| How long or cycle | One delivery within the declared complete reporting period; no service-life claim |
| reference_flow_link | reference_tar |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Coal tar `7b09995f-2ee9-4584-b244-c2d84ea75585` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site; period; coal and coke-oven route; condensate interface; delivery moisture and sampling method; free-water and solids determination; measured C/H/O/N/S and organic sulfur; delivery temperature; acceptance specification; tank and stocks; all physical coproduct destinations; upstream inventory and allocation stage; energy supplier basis; water/residue receivers; emission coverage |

Declare every required qualifier in the actual data package; missing qualifiers make that package incomplete. Collect the actual SKU/grade, composition, acceptance specification, supplier and receiver, complete elemental C/H/O/N/S assay and measurement bases. The broad coal-tar flow is used only for this physically defined coal-carbonisation subset, without asserting a verified provider, density, heating value or yield. A different coal-tar record with a fixed calorific grade is usable only when that grade is independently demonstrated; a broad record's absence of a heat-value restriction does not waive another record's restriction.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference_tar | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net delivery mass with cp_tar, excluding packaging and a separate free aqueous phase; residual dispersed water remains part of the delivery mass and moisture is supplementary. Normalize every inventory to 1 kg of the same-state reference flow. |
| moisture_basis | condensate; reference_tar | Mass | kg | Retain measured water, tar and solids masses of condensate and accepted product. Any supplementary dry-tar result uses measured moisture and the defined solids convention while preserving the delivery-state denominator; it must not silently become a 1 kg dry-tar denominator. |
| power_basis | electricity_low; electricity_medium; electricity_high | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use each native CN grid-average consumption-mix electricity interface reference property Net calorific value and MJ; convert measured electricity with 1 kWh = 3.6 MJ. Match supplier geography, year and losses boundary; do not add internal submeter quantities again to gate delivery. |
| heat_basis | steam; recovered_heat; condensate_return | Mass; Energy | kg; MJ | Record actual delivered steam mass and a separate condensate return. Supplementary useful heat is reconciled from measured supply/return enthalpies, recovery and losses for the same period against the background reference basis; an MJ steam property alone does not establish net delivered heat. A separate heat service uses supplier-compatible useful delivered MJ and is not also counted as carrier steam. |
| species_basis | condensate; reference_tar; coal_water_recycle; coal_water_purge; tar_sediment_recycle; tar_sludge_waste; methane_air; co2_air; benzene_air; naphthalene_air; phenol_air; bap_air; ammonia_air; h2s_air; water_air | Mass | kg | Retain species, water and elemental C/H/O/N/S conventions separately and convert only from measured composition; COD is not carbon mass and ammonia-N is not NH3 mass. Air identities represent outdoor environmental air with an unspecified subcompartment; use a compatible precise compartment when known without duplicating the emission. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of actual combined tar-water condensate; preserve source branches, water/tar/solids/gas composition, mass, temperature and upstream inventory |
| starting_condition_role | Real burden-bearing mixed intermediate, not a burden-free waste or invented purchase of already separated crude tar |
| product_classification_scope | Coal-carbonisation crude-tar subset of CPC 33210; excludes independent distillation products under 34540 |
| recursive_input_rule | Preserve internal tar circulation in the physical diagram and stocks without inventing purchased tar remanufacture. Match mass, composition and allocation stage at both ends of condensate/residue interfaces; close returns to coking without recursively repeating upstream burdens. |
| upstream_dataset_requirement | Obtain an unallocated joint coking/gas-cooling inventory with complete physical coproducts for attribution once under this method, or a condensate supply with complete, explicit stage allocation; retain coal, coke, gas, tar, water and all other actual products and wastes |
| disclosure | Start/end, meters, unit overlaps, actual dewatering/warming, all recycle/purge/residue destinations, C/H/O/N/S/water balances, fractionation exclusion and data gaps |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_recovery | tar-recovery-delivery | Include separation, actual dewatering/residue removal, tar tanks, sampling/loading and operated controls; meter actual cleaning, warming and utilities separately. Link condensate generation, coal coking and main gas processing upstream rather than duplicating their inventories. | `jrc-iron-steel-bref-2013` |
| boundary_outputs | all inventory rows | Retain water, thick tar, sludge, gas losses and all actual physical coproducts for every destination; internal reuse is not an environmental release. Add an audited atomic row for each additional emitted species rather than dropping it or replacing species by total VOC/PAH. | `jrc-iron-steel-bref-2013` |
| boundary_distillation | reference_tar | Actual independent distillate oils or distillation pitch/pitch coke require an applicable fractionation method retaining all fractions and residues; this PCR cannot represent that delivery scope. Removal of free water/sediment without fraction grading is supported with measured delivery-state disclosure. | `wco-hs-2022-ch27`; `un-cpc-3-2025` |
| boundary_interfaces | condensate; coal_water_recycle; tar_sediment_recycle | Retain the upstream physical network for coal, coke, gas, tar, benzol recovery, sulfur/ammonia products and all actual gas/liquid/solid streams. Inventory only this foreground exchanges without pretending upstream coproducts leave this unit. Match quantity/state at both interface ends and provide physical and environmental-burden ledgers separately. | `jrc-iron-steel-bref-2013`; `eu-environmental-footprint-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tar-recovery-delivery | Tar separation, applicable dewatering and delivery | `required` |  | Foreground production | per 1 kg reference flow |

Separation, tanks and loading form one foreground unit with independent stage meters. Retain each operated reception, separation, dewatering, sediment removal, storage, acceptance and loading stage, its equipment/meter coverage, internal transfer links and opening/closing stocks. Same-material internal transfer is not another tar product output and known identity is not hidden. Utility supply/return stays separate from condensate process water with matching links; exported waste connects to its receiver. Record rejected deliveries, customer returns, rework, tank heels and spills as their actual paths; do not add returns to saleable output or count an internal recirculation as a purchase. For actual packaging and maintenance, collect each material/chemical separately, container tare, gross/net loading mass, reusable-container stocks/returns and cleaning/repair replacements and wastes, including lubricants or seals where used; demonstrate absence where not used. Bulk loading equipment is not consumed transport packaging merely because it holds tar.

### Process: Tar separation, applicable dewatering and delivery (`tar-recovery-delivery`)

#### Inputs

##### Product flows

###### Coke-oven tar-water condensate (`condensate`)

Receive the actual mixed condensate collected from the collecting main, primary cooling and electrostatic tar precipitation. Measure the header total and composition; do not substitute already separated coal tar or sum the header and its branch meters.

- Selected flow: Coke-oven tar-water condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_condensate; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condensate`
- Sources: `jrc-iron-steel-bref-2013`

###### Alternating current (`electricity_low`)

Use only for externally delivered China (CN) grid-average consumption-mix electricity below 1 kV. Count a delivery once; an internal transformer does not create another purchased supply. For a different supply country or route, select and verify a compatible flow; this CN identity cannot be generalized by changing a provider label.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect using cp_electricity; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `jrc-iron-steel-bref-2013`

###### Alternating current (`electricity_medium`)

Use only for externally delivered China (CN) grid-average consumption-mix electricity at 1–35 kV; preserve the supplier location, year, voltage and losses boundary. A different supply country or route requires a separately verified compatible flow.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect using cp_electricity; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `jrc-iron-steel-bref-2013`

###### Alternating current (`electricity_high`)

Use only for externally delivered China (CN) grid-average consumption-mix electricity at 35–330 kV. Resolve any boundary voltage overlap from the actual supplier definition; never duplicate one metered delivery. A different supply country or route requires a separately verified compatible flow.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect using cp_electricity; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `jrc-iron-steel-bref-2013`

###### Steam delivered to coal-tar recovery (`steam`)

Include only installed steam use for conditioning, warming or cleaning. Record mass, absolute pressure, temperature, dryness and supplier reference basis; any record fixed to a pressure grade requires that grade to match measured supply. Gauge pressure requires the corresponding measured atmospheric pressure for conversion to absolute pressure.

- Selected flow: Steam delivered to coal-tar recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_steam; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources: `jrc-iron-steel-bref-2013`

###### Recovered process heat delivered to coal-tar recovery (`recovered_heat`)

Include a separately delivered heat service only when operated and not already represented by the steam row. Meter useful delivered heat against its actual carrier, return state and supplier definition; no burden-free heat assumption.

- Selected flow: Recovered process heat delivered to coal-tar recovery
- Flow property / unit: Energy / MJ
- Amount rule: Collect using cp_heat; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat`
- Sources: `jrc-iron-steel-bref-2013`

###### Process Water (`wash_water`)

Record treated industrial water for actual separator, tank or loading-line cleaning; declare water quality and supplier. Primary gas-cooler water outside this foreground is accounted upstream.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_water; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-bref-2013`

#### Outputs

##### Product flows

###### Coal tar (`reference_tar`)

One accepted crude coal-tar delivery after separation, any actual dewatering and gate sampling. Exclude a separate free aqueous phase and transport packaging; residual dispersed water is measured and declared.

- Selected flow: Coal tar `7b09995f-2ee9-4584-b244-c2d84ea75585`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tar`
- Sources: `jrc-iron-steel-bref-2013`

###### Ammoniacal coal water returned to the coke-oven liquor circuit (`coal_water_recycle`)

Measure the separated aqueous liquor returned for process reuse. It is not reagent-grade ammonia solution and is not automatically a marketable coproduct; record dissolved tar, ammonia, phenols and sulfur species.

- Selected flow: Ammoniacal coal water returned to the coke-oven liquor circuit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_water; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-bref-2013`

###### Steam condensate returned from the coal-tar heater (`condensate_return`)

Record the actual utility return separately from coal water; measure mass, temperature, pressure and contamination. If discharged instead, record its actual waste route without also counting a supplier return.

- Selected flow: Steam condensate returned from the coal-tar heater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_steam; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources: `jrc-iron-steel-bref-2013`

###### Thick coal-tar sediment returned to coal charging (`tar_sediment_recycle`)

Measure the actual PAH-bearing thick tar and entrained coal solids returned to coal charging. Preserve the receiver and composition; this is not distilled pitch and the same residue must not also enter the disposal row.

- Selected flow: Thick coal-tar sediment returned to coal charging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_residue; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-bref-2013`

##### Waste flows

###### Ammoniacal coal-tar-recovery wastewater (`coal_water_purge`)

Measure only the actual purge sent to ammonia stripping or wastewater treatment, including cleaning water only if it enters that same measured header. Retain contaminants and treatment links; it is not an elementary freshwater discharge.

- Selected flow: Ammoniacal coal-tar-recovery wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_water; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-bref-2013`

###### Coal-tar recovery sludge sent to external treatment (`tar_sludge_waste`)

Record coal-tar recovery sludge removed for external treatment rather than coal-feed return; declare water, coal fines, tar, PAH and elemental composition and verify the receiver. A calorific-grade-specific residue flow requires independently demonstrated grade compatibility; no heating value is assumed.

- Selected flow: Coal-tar recovery sludge sent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_residue; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-bref-2013`

##### Elementary flows

###### methane (fossil) (`methane_air`)

Include only measured or substantiated fossil methane escaping the declared separator, tank or loading boundary after controls; upstream coke-oven leakage is not repeated.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### carbon dioxide (fossil) (`co2_air`)

Include fossil carbon dioxide only if actual condensate degassing or a declared vent measurement identifies it and establishes fossil origin. Measure incoming carrier-air background separately; a database carbon coefficient, the presence of fossil tar or a carbon-balance residual does not demonstrate a CO2 release. No combustion occurs in this defined foreground; utility-generation emissions belong to supply datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### benzene (`benzene_air`)

Screen and quantify actual benzene losses from separated liquor, tar storage and loading. Distinguish gaseous and captured liquid quantities; no historical VOC factor is a default.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### naphthalene (`naphthalene_air`)

Include actual naphthalene emitted beyond the boundary after recovery or controls, with sampling phase and release location declared.

- Selected flow: naphthalene `fe0acd60-3ddc-11dd-a682-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### phenol (`phenol_air`)

Include actual phenol air losses separately from phenol dissolved in wastewater or retained in tar; preserve species-specific analytical evidence.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### benzo[a]pyrene (`bap_air`)

Screen benzo[a]pyrene specifically when tar aerosol or PAH-bearing releases occur. This row is not total PAH or total particulate mass; retain phase and chemical assay and avoid duplicating aggregate and constituent totals.

- Selected flow: benzo[a]pyrene `08a91e70-3ddc-11dd-9221-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### ammonia (`ammonia_air`)

Quantify actual ammonia losses from coal water or condensate handling; use NH3 mass, not an ammonia-nitrogen indicator without an explicit conversion.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### hydrogen sulfide (`h2s_air`)

Quantify actual hydrogen sulfide released after controls. Keep organic sulfur in liquid/solid assays and add each additional emitted sulfur species individually when detected; do not replace H2S by sulfur or SO2.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### water vapour (`water_air`)

Record actual evaporation and vented water from this foreground only. Measure inlet carrier-air humidity and outlet water on consistent gas-flow, temperature, pressure and wet/dry bases; retain gross inlet/outlet water in the physical ledger and attribute only net process-added water to evaporation. Keep any condensation or humid air input at its real destination, with no fabricated zero or forced positive evaporation. Water contained in delivered tar, recycled liquor, wastewater or returned utility condensate is not also evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the physical exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared upstream and foreground burdens | First subdivide directly attributable measured units; use system expansion only with explicit study purpose and verified additional functions. If allocation cannot be avoided, justify a relevant physical causal relationship, otherwise justify economic allocation from measured same-stage quantities and contemporaneous prices, retaining reasons and sensitivity. Tar is not burden-free because it is a coproduct and fuel-energy allocation is not automatic. | `eu-environmental-footprint-2021` |
| allocation_stages | condensate | The unallocated joint-inventory route requires the complete staged coking, gas-cooling and recovery attribution tree and all physical outputs, proving that shared burdens are assigned once and fractions sum to one at each stage. The already allocated condensate route retains exact boundary, method, fractions and included units; do not allocate its upstream burdens again and remove overlapping units. | `eu-environmental-footprint-2021` |
| allocation_physical | all inventory rows | Preserve unallocated physical quantities for mass/water/C/H/O/N/S balances and internal interfaces. Physical outputs per kg tar are divided only by accepted tar output, never mechanically multiplied by the tar burden fraction. Attribute relevant inputs/emissions in a separate environmental-burden ledger and label its nature. Real coal-water/sediment returns are not substitution credits and do not automatically enter the economic coproduct set. | `eu-environmental-footprint-2021` |
| allocation_waste | coal_water_purge; tar_sludge_waste | Retain waste composition, quantities, receiver and treatment burdens; only substantiated actual marketable coproducts enter the applicable allocation set. Close internal returns without recording the same material as both disposed and reused, and never hide physical products through environmental allocation. | `jrc-iron-steel-bref-2013`; `eu-environmental-footprint-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_condensate | tar-recovery-delivery | condensate | measurement and traceable primary records | condensate header/branch readings and composition; water, tar, solids, gas, C/H/O/N/S; temperature; stock; upstream physical network and attribution tree | Weigh or use calibrated flow meters with measured same-temperature density; representative assays for water, tar, solids and C/H/O/N/S; reconcile source branches and obtain the complete upstream inventory or documented allocated supply | kg | each transfer/acceptance; continuous meters; representative operating samples; period stock reconciliation | same complete reporting period | declared tar recovery/storage/delivery boundary | per 1 kg reference flow | calibration, representativeness, originals, supplier/receiver evidence, stocks and measurement uncertainty |
| cp_tar | tar-recovery-delivery | reference_tar | measurement and traceable primary records | net mass of each accepted delivery; moisture; free water; coal fines/solids; C/H/O/N/S; temperature; sample representativeness; acceptance rule; tank opening/closing stocks | Measure net accepted deliveries with calibrated weighbridge or mass flowmeter, excluding containers/packaging and separate water phase; keep independent separator/tank/loading records; verify delivery state by declared representative sampling and validated analytical methods without assuming a universal moisture specification | kg | each transfer/acceptance; continuous meters; representative operating samples; period stock reconciliation | same complete reporting period | declared tar recovery/storage/delivery boundary | per 1 kg reference flow | calibration, representativeness, originals, supplier/receiver evidence, stocks and measurement uncertainty |
| cp_electricity | tar-recovery-delivery | electricity_low; electricity_medium; electricity_high | measurement and traceable primary records | gate and submeter electricity; voltage; supplier; location/year; losses boundary; kWh or MJ; equipment runtime | Submeter pumps, actual dewatering, storage and loading or substantiate attribution; convert against the voltage-compatible supplier basis without adding whole-plant and included submeter totals | MJ | each transfer/acceptance; continuous meters; representative operating samples; period stock reconciliation | same complete reporting period | declared tar recovery/storage/delivery boundary | per 1 kg reference flow | calibration, representativeness, originals, supplier/receiver evidence, stocks and measurement uncertainty |
| cp_steam | tar-recovery-delivery | steam; condensate_return | measurement and traceable primary records | steam and returned condensate mass; pressure/temperature/dryness; enthalpy method; supplier reference quantity; return destination; purge/direct injection; losses | Meter supply and return with calibrated instruments, collect their states over the same period and reconcile supplier mass/heat bases; direct injection enters the process water balance while indirect heating/return forms a separate utility circuit | kg | each transfer/acceptance; continuous meters; representative operating samples; period stock reconciliation | same complete reporting period | declared tar recovery/storage/delivery boundary | per 1 kg reference flow | calibration, representativeness, originals, supplier/receiver evidence, stocks and measurement uncertainty |
| cp_heat | tar-recovery-delivery | recovered_heat | measurement and traceable primary records | actual heat service/carrier; supply/return temperature, pressure, flow; useful delivered enthalpy; supplier reference basis; upstream heat attribution | Meter useful delivered heat or derive it from traceable carrier flow/enthalpy differences, matching the supplier definition and excluding heat already counted with steam | MJ | each transfer/acceptance; continuous meters; representative operating samples; period stock reconciliation | same complete reporting period | declared tar recovery/storage/delivery boundary | per 1 kg reference flow | calibration, representativeness, originals, supplier/receiver evidence, stocks and measurement uncertainty |
| cp_water | tar-recovery-delivery | wash_water; coal_water_recycle; coal_water_purge | measurement and traceable primary records | each water/recycle/purge meter; aqueous mass/composition; NH3, phenols, tar, elemental C/H/O/N/S and individual sulfur species; source; receiver; merging points | Meter each source/destination separately and convert liquid volume using measured same-temperature density; assay water, dissolved and suspended constituents; count separated water once at its actual destination. Add a separate atomic cleaning-wastewater row when not merged | kg | each transfer/acceptance; continuous meters; representative operating samples; period stock reconciliation | same complete reporting period | declared tar recovery/storage/delivery boundary | per 1 kg reference flow | calibration, representativeness, originals, supplier/receiver evidence, stocks and measurement uncertainty |
| cp_residue | tar-recovery-delivery | tar_sediment_recycle; tar_sludge_waste | measurement and traceable primary records | sediment/thick-tar weights; wet/dry basis; coal-fines/tar/water composition; C/H/O/N/S/PAH; stock; coal-charge return/export receiver receipts | Weigh and sample representatively; separate return, disposal and temporary stocks; match receiver composition/quantity; do not substitute distilled-pitch identity for thick tar | kg | each transfer/acceptance; continuous meters; representative operating samples; period stock reconciliation | same complete reporting period | declared tar recovery/storage/delivery boundary | per 1 kg reference flow | calibration, representativeness, originals, supplier/receiver evidence, stocks and measurement uncertainty |
| cp_air | tar-recovery-delivery | methane_air; co2_air; benzene_air; naphthalene_air; phenol_air; bap_air; ammonia_air; h2s_air; water_air | measurement and traceable primary records | vents/fugitive sources; release environment; operating state; controls; actual gas flow; species concentration; T/P and wet/dry basis; sampling phase; detection limits/calibration; complete coverage | Inventory separator/tank/loading release points; quantify species by validated applicable sampling/analysis, gas flow and operating intervals or disclose an auditable estimate, retaining gas/aerosol phases. Measure inlet ambient humidity and CO2 background and outlet concentrations with corresponding gas flows; derive net process-added water vapour after retaining inlet/outlet totals; a detection limit is not zero. Missing quantities or species prevent a complete-data claim | kg | each transfer/acceptance; continuous meters; representative operating samples; period stock reconciliation | same complete reporting period | declared tar recovery/storage/delivery boundary | per 1 kg reference flow | calibration, representativeness, originals, supplier/receiver evidence, stocks and measurement uncertainty |

Collect original same-stage economic records when economic allocation is selected: accepted quantities, grade, water/solids basis, contemporaneous unit prices, currency, invoice date, taxes, transport charges, discounts, returns and exclusions. Convert prices to one disclosed currency and the same factory gate; revenue for product i is its accepted same-stage quantity times its comparable net unit price, and its fraction is that revenue divided by the sum for all eligible actual coproducts. Keep waste treatment fees distinct from product revenue and prove stage fractions sum to one. Reconcile production, deliveries and stocks before constructing the allocation quantities; do not derive allocation from a single sales invoice or apply revenue fractions to physical transfers. `eu-environmental-footprint-2021`

The physical composition ledger retains gross incoming and outgoing carrier air, including humidity, background CO2 and N2/O2, alongside all process gas/liquid/solid streams. Account for any actual oxygen consumption or nitrogen-containing transformation from evidence; ambient carrier transit is not newly manufactured pollution. Water is part of wet-stream composition, not an extra mass added to that same stream. A loss already represented by an emitted species, spill or waste output is not added again as a balance loss; unexplained residuals remain gaps rather than invented exchanges.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Divide each same-period physical exchange by same-period accepted delivered tar net mass; reference_tar is fixed at 1 kg. Retain stock changes as physical-network reconciliation entries rather than another delivery; environmental attribution is applied in a separate ledger. | cp_tar; relevant collection protocol | physical exchange per 1 kg reference flow | `eu-environmental-footprint-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_physical_balance | all inventory rows | Reconcile before allocation over the whole period: inputs plus opening stocks equal all gas/liquid/solid outputs plus closing stocks and substantiated losses. Close water and each elemental C/H/O/N/S balance separately on consistent measured composition/stock bases; COD is not C and total S is not an emitted species. Investigate differences against declared measurement uncertainty without inventing a balance tolerance. Keep indirect steam/return in a separate utility circuit and include direct injection in process water. | physical network, assays, stocks and matching interface originals |
| quality_energy | all inventory rows | Reconcile supplied electricity and useful heat, carrier enthalpy in/out, material sensible/latent enthalpy, stock energy changes and evidenced losses for the same complete boundary and period. Declare reference states and measured properties; measured supply/return differences and actual moisture removal support the dewatering balance. Include chemical energy only on separately justified measured composition/calorific bases, never a generic tar or sludge coefficient. Do not hide heat by counting both a carrier and its heat service or balancing unexplained losses with invented quantities. | stage meters, enthalpy methods, stocks and energy ledger |
| quality_upstream | condensate | Obtain complete coking/gas-cooling physical and burden ledgers for coke, gas, tar, actual benzol/ammonia/sulfur products, all water/solid waste and energy. Verify whether a prior package already contains this separator/delivery unit; removing overlaps needs original evidence rather than assumptions from a supplier name. | upstream inventories, attribution tree and operating network |
| quality_identity | all inventory rows | Resolve blank UUIDs and exact supply/treatment links in the data package while preserving concrete physical identity; infrastructure failure is not no-match. Verified identity still requires separate checks of actual mass/composition, pressure, voltage, compartment and provider reference quantity; database secondary coefficients do not replace site data. | native identities, provider/receiver records and actual collection |
| quality_coverage | all inventory rows | Distinguish applicability, demonstrated absence, unquantified amount and unresolved identity; do not fill zeros without evidence. Extend the atomic inventory for each actual chemical, direct fuel, package or control consumable when present, with verified sources. An actual boiler requires a separately evidenced heat-supply unit rather than hidden combustion with only a steam entry. | complete meter coverage, methods and gap disclosure |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_tar | Require exactly one foreground finished-tar output at 1 kg delivery state, consistent with the reference link, bilingual denominator and protocols; reject independent distillate or pitch applicability. | `wco-hs-2022-ch27`; `un-cpc-3-2025` |
| validate_material | all inventory rows | Verify unallocated mass/water/C/H/O/N/S networks, stocks, every real upstream coproduct and equal-quantity interfaces. Allocation-scaled recycle, condensate, water or sediment cannot serve as physical balances; retain discrepancies, unknown components and missing measurements as unresolved. | `jrc-iron-steel-bref-2013` |
| validate_allocation | condensate; shared burdens | Verify the unallocated/already allocated upstream route, stages, fraction sums and direct-attribution evidence, avoiding duplicate allocation; absence of allocation evidence prevents a complete tar-supply burden claim. | `eu-environmental-footprint-2021` |
| validate_species | all inventory rows | Verify atomicity, UUID, native Chinese name, flow type, reference property/unit and air compartment per row; cover emitted species, coal-water contaminants and upstream gas/liquid/solid boundaries. A passing static methodology check does not resolve missing measurements, identities or provider conditions. | `jrc-iron-steel-bref-2013` |
| validate_heat | steam; recovered_heat; condensate_return; electricity_low; electricity_medium; electricity_high | Verify actual steam pressure/enthalpy basis, condensate routing, useful delivered heat and voltage/provider scope; prevent duplicate heat-carrier/service and voltage-level/internal-meter counting. Unknown quantity or background bases make the package links incomplete. | `jrc-iron-steel-bref-2013` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary foreground tar-supply process with separate physical and attributed-burden ledgers |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply recovered coal-carbonisation crude tar only with compatible measured delivery state, upstream allocation and provider bases |
| excluded_use | independent distillation products; unassessed mineral/peat/wood tar; burden-free coproduct; gas reference substituted for tar; full PEF conformity claim |
| required_metadata | all reference qualifiers; actual boundary/technology; physical balances and attribution tree; originals and interfaces |
| required_quality_disclosure | pending identities/provider bases; unquantified releases; sampling coverage/uncertainty; measured versus estimated values and all gaps |
| update_trigger | material change in coal/coke-oven route, condensate source, separation/dewatering/delivery technology, product state, upstream attribution or supplier/receiver |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-iron-steel-bref-2013 | `official_guidance` | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | 2013; EUR 25521 EN; DOI 10.2791/97469; sections 5.1.4.3–5.1.5, PDF247–249/printed219–221; 5.2.2.3, PDF261/printed233. Qualitative separation, coal-water and thick-tar/residue boundaries; European technical evidence, no historical yield, emission or residue factors adopted. |
| eu-environmental-footprint-2021 | `official_guidance` | https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 2021; Annex I 4.5, PDF/printed63–64; generic multifunctionality hierarchy adopted as a method choice, excluding animal-husbandry 4.5.1 or paper-specific rules; no full PEF conformity claim. |
| wco-hs-2022-ch27 | `official_guidance` | https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0527_2022e.pdf?la=en | 2022; Chapter27 PDF2, headings2706/2707/2708; category distinction between dehydrated/partially distilled tar and independent distillation/pitch products; classification context only, no process amount or formal CPC-HS correspondence established. |
| un-cpc-3-2025 | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 2025-06-30; original CSV LF lines1351,1353,1458, codes33210/33220/34540; category identity only, not manufacturing evidence or mapping acceptance. |

This method provides no universal amount defaults: every physical exchange follows its explicit collection protocol. Historical plant or industry tables in the originals supply bounded qualitative context and are not transplanted into recipes or QA ranges.
