---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bombs-grenades-torpedoes-mines-missiles-and-similar-munitions-of-war-and-parts-thereof-2a511aac
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Munitions and ammunition articles and parts: environmental inventory accounting

## 1. Scope and Applicability

This candidate supplies non-operational environmental accounting for delivered munitions, ammunition and their parts. It defines factory reporting gates, supplier interfaces, measured environmental totals and data-quality tests. It does not provide manufacturing instructions, energetic formulations, assembly/loading sequences, ignition mechanisms, performance design or operating parameters. A kilogram is a production normalization unit, not a claim of equivalent military function or performance.

The original UN CPC label covers complete articles and parts, including shot and cartridge wads; it does not supply a common production recipe. Whole articles, inert parts and purchased completed articles require different declared environmental interfaces. Factory-gate inventories exclude subsequent storage, deployment, use, range residues and end-of-life response; EPA documents these later contamination pathways, so excluding them cannot imply they are zero. No numerical material, energy, lifetime, yield or emission defaults are asserted. [un-cpc3-2025; epa-munitions-environment]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bombs-grenades-torpedoes-mines-missiles-and-similar-munitions-of-war-and-parts-thereof-2a511aac |
| classification_refs | CPC 3.0 44740 |
| covered_products | Delivered bombs, grenades, torpedoes, mines, missiles and similar munitions; cartridges, ammunition, projectiles and their parts, including shot and cartridge wads. Each dataset declares exactly one family and delivery state. |
| excluded_products | Firearms/other arms (44730); edged arms (44750); weapon parts belonging to 44760; operational services, design advice, range remediation and post-use treatment datasets. |
| representative_product | A supplier-identified accepted delivered article, with an empty brass cartridge case illustrating an inert-part interface only; no representative mass is assigned. |
| production_route | Environmental reporting partitions: supplier-completed article/part; site manufacture totals; final acceptance and packaging; outsourced services. Actual make/buy coverage is declared without operational sequence. |
| market_state | Accepted new delivered article or part, whole/inert/unfilled condition declared; no equivalence across families. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production and delivery of the declared article family at the factory gate; no operational functional comparison. |
| How much | 1 kg accepted net article mass of one declared family and delivery state. |
| How well | Supplier acceptance and traceability records establish delivered state; no ballistic, energetic or design criteria are specified. |
| How long or cycle | One reporting period of factory production; no service lifetime or deployment cycle is assumed. |
| reference_flow_link | accepted_article |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted delivered munition article |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article family; whole article or part; inert/unfilled/delivered state; supplier and site; reporting period; acceptance identifier; net mass scope; make/buy gate; upstream provider coverage; confidentiality and omitted-data scope; transport and packaging treatment; constituent/compartment definitions for emissions |

Qualifiers must be present in dataset metadata and supporting records. An unresolved category product UUID does not authorize substituting a civilian petroleum-perforating product or one purchased part for the entire category.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | D is reporting-period accepted net product mass of the same declared family/state; use calibrated weighing or traceable weighing records excluding transport packaging. Rejects, work in progress and unrelated families are not accepted output. Collect using cp_accepted_article. |
| normalization | all inventory rows | row-specific property | kg, kWh, MJ, t*km | Final exchanges are per 1 kg reference flow. Divide the attributable same-period exchange total by D only after stock reconciliation, cancellation of internal transfers and justified allocation. Preserve the numerator unit. |
| chemical_basis | emissions and residues | identified constituent mass | kg | Match laboratory constituent, phase, compartment and wet/dry basis on every balance term. Gross sludge or particulate mass is never contained lead/copper mass. Each product, input, scrap, sludge, stock and release term requires its own matching constituent assay, analytical definition and moisture basis; a common assay cannot stand in for every term. Report analytical nondetects and limits explicitly. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier delivery gates and site reporting perimeter; inventory opening/closing stocks and supplier environmental dataset scope are stated. |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | CPC 3.0 44740 |
| recursive_input_rule | A purchased same-category part/article is a distinct supplier interface with upstream burdens once; no recursive duplication of its constituent materials or supplier manufacturing. Internal transfers cancel. |
| upstream_dataset_requirement | Match actual delivered state, mass property, provider geography/year and gate. Include all relevant supplier production and attributable transport, including confidential material interfaces where independently verified; missing evidence remains an explicit coverage gap. |
| disclosure | Disclose make/buy partition, supplier coverage, outsourced service gates, excluded life stages and withheld inventories. Environmental totals alone cannot substantiate an undisclosed complete material inventory. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_once | all processes | Map every real site activity to exactly one environmental reporting partition. Supplier-completed operations are upstream; site manufacturing and final acceptance burdens, handling, utilities and pollution controls are measured once. The partitions are accounting gates, not a production sequence. | un-cpc3-2025 |
| boundary_lifecycle | all processes | Keep factory production separate from later storage, transport after gate, deployment, use, disposal and remediation. Record on-site quality-test environmental releases in production totals when attributable, without specifying test methods or conditions. | epa-munitions-environment |
| boundary_coverage | all exchanges | Require an independently reviewed environmental interface register for every actual material, purchased part, service, waste and emitted species. Add each as a separate atomic dataset exchange. Public candidate cards are conditional examples, not exhaustive coverage or permission to omit confidential burdens. If supporting evidence cannot be reviewed, report incompleteness rather than zero. | epa-tri-reporting |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| supplier_interfaces | Purchased interface accounting | required | All actual external deliveries, including outsourced environmental provider gates; no supplier recipe disclosure. | Foreground environmental accounting | per 1 kg reference flow |
| site_environment | Site environmental inventory totals | required | All attributable site manufacturing, utilities, handling and pollution-control totals, audited by safe environmental reporting partitions. | Foreground environmental accounting | per 1 kg reference flow |
| delivered_gate | Accepted output and packaging accounting | required | One declared delivered family/state; record packaging separately and link acceptance records. | Foreground environmental accounting | per 1 kg reference flow |

### Process: Purchased interface accounting (`supplier_interfaces`)

#### Inputs

##### Product flows

###### Empty brass cartridge case (`empty_brass_case`)

Only when purchased across the reporting gate. Record alloy designation, empty delivery state and supplier coverage without geometry or production instructions; supplier burden includes the delivered case once.

- Selected flow: Empty brass cartridge case
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_empty_brass_case / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_empty_brass_case`
- Sources: `epa-tri-reporting`

###### Unfilled steel munition casing (`unfilled_steel_casing`)

Only for an actual purchased unfilled casing. Verify steel grade, surface condition and provider gate; do not additionally count the supplier steel or supplier utilities within foreground totals.

- Selected flow: Unfilled steel munition casing
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_unfilled_steel_casing / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_unfilled_steel_casing`
- Sources: `epa-tri-reporting`

###### Polyethylene cartridge wad (`polyethylene_wad`)

Conditional actual purchased part, with declared polymer grade and supplier gate. It is a distinct delivered part, not an assumed input to all ammunition families.

- Selected flow: Polyethylene cartridge wad
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_polyethylene_wad / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyethylene_wad`
- Sources: `epa-tri-reporting`

###### Freight transport by road truck (`transport_service`)

Conditional inbound carrier service not already in the supplier dataset: use actual consignments and distance, including packaging in transported mass but excluding it from product denominator.

- Selected flow: Freight transport by road truck
- Flow property / unit: Transport work / t*km
- Amount rule: Attributable reporting-period amount from cp_transport_service / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport_service`
- Sources: `epa-tri-reporting`

### Process: Site environmental inventory totals (`site_environment`)

#### Inputs

##### Product flows

###### Purchased alternating-current electricity at factory meter (`grid_electricity`)

Metered purchased supply only, with geography, grid year, voltage and provider. In-house generation is a separate measured service with its own fuel and emissions; it is never an additional purchased electricity input.

- Selected flow: Purchased alternating-current electricity at factory meter
- Flow property / unit: Electrical energy / kWh
- Amount rule: Attributable reporting-period amount from cp_grid_electricity / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grid_electricity`
- Sources: `epa-tri-reporting`

###### Purchased saturated steam at factory delivery meter (`purchased_steam`)

Conditional purchased steam; retain metered useful delivered heat and actual supplier condensate-return boundary. If verified supplier MJ is unavailable, derive delivered energy from measured steam mass multiplied by state-specific enthalpy relative to a declared common reference: kg × MJ/kg = MJ; subtract the measured condensate-return energy using that same reference. Preserve supplier state/enthalpy evidence and uncertainty without prescribing operational settings. Supplier boiler fuel and stack emissions stay upstream; no operating parameter is prescribed.

- Selected flow: Purchased saturated steam at factory delivery meter
- Flow property / unit: Energy / MJ
- Amount rule: Attributable reporting-period amount from cp_purchased_steam / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_steam`
- Sources: `epa-tri-reporting`

###### Purchased natural gas at factory delivery meter (`natural_gas`)

Conditional actual stationary utility fuel, retaining metered quantity and documented calorific conversion. Its supplier burden and measured site combustion releases are separate.

- Selected flow: Purchased natural gas at factory delivery meter
- Flow property / unit: Energy / MJ
- Amount rule: Attributable reporting-period amount from cp_natural_gas / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas`
- Sources: `epa-tri-reporting`

###### Diesel fuel for factory handling equipment (`diesel`)

Conditional actual handling equipment fuel. Record receipts, withdrawals and stock change; no assumed equipment duty cycle or fuel consumption.

- Selected flow: Diesel fuel for factory handling equipment
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_diesel / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diesel`
- Sources: `epa-tri-reporting`

###### Purchased industrial water at factory meter (`purchased_water`)

Purchased water only; retain supply origin and density conversion if meter records volume. Cooling recirculation is an internal movement, not repeated external water input. Direct abstraction requires separate source-specific elementary rows.

- Selected flow: Purchased industrial water at factory meter
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_purchased_water / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_water`
- Sources: `epa-tri-reporting`

#### Outputs

##### Waste flows

###### Uncontaminated brass scrap sent to recycler (`brass_scrap`)

Conditional inert scrap with supplier/receiver identity and measured mass. Verify contamination status; hazardous residues must not be substituted by this flow. Record treatment or recycling provider once.

- Selected flow: Uncontaminated brass scrap sent to recycler
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_brass_scrap / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_brass_scrap`
- Sources: `epa-tri-reporting`

###### Dewatered metal-bearing wastewater-treatment sludge (`metal_sludge`)

Conditional actual sludge; retain wet/dry basis, laboratory constituent identities, water content and receiver acceptance. Sludge mass is not the contained mass of any metal.

- Selected flow: Dewatered metal-bearing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_metal_sludge / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_sludge`
- Sources: `epa-tri-reporting`

###### Metal-bearing aqueous effluent transferred to licensed treatment (`offsite_effluent`)

Conditional external wastewater transfer; record each actual liquid stream separately and receiver interface. Do not also label the same transferred metal as a direct river release.

- Selected flow: Metal-bearing aqueous effluent transferred to licensed treatment
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_offsite_effluent / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_effluent`
- Sources: `epa-tri-reporting`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Conditional actual site utility combustion release, using independently documented fuel-carbon and oxidized-carbon evidence or monitored species total; never apply a supplier electricity factor as a site stack emission.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_fossil_co2 / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fossil_co2`
- Sources: `epa-tri-reporting`

###### Carbon monoxide to air (`carbon_monoxide`)

Conditional monitored utility release. Species-specific monitoring or justified species factor required; carbon closure alone does not determine carbon monoxide.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_carbon_monoxide / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon_monoxide`
- Sources: `epa-tri-reporting`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Conditional actual nitrogen dioxide release. A nitrogen-oxides-as-NO2 report is not automatically molecular NO2; retain analytical definition and create the corresponding separate flow if it reports a mixture.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_nitrogen_dioxide / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nitrogen_dioxide`
- Sources: `epa-tri-reporting`

###### Lead to air (`lead_air`)

Only when evidence identifies actual lead release to air. Record stack/fugitive distinction and measured elemental lead basis; never derive it from total particulate or gross product mass.

- Selected flow: Lead to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_lead_air / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lead_air`
- Sources: `epa-tri-reporting`

###### Copper to freshwater (`copper_water`)

Only for a measured final discharge to freshwater with receiver and constituent definition. Apply laboratory concentration and corresponding discharged-water quantity; exclude amounts transferred off-site or retained in sludge.

- Selected flow: Copper to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_copper_water / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_copper_water`
- Sources: `epa-tri-reporting`

### Process: Accepted output and packaging accounting (`delivered_gate`)

#### Inputs

##### Product flows

###### Corrugated cardboard transport box (`corrugated_box`)

Conditional actual accepted-product packaging, measured separately from article mass. Include its provider burden and rejected packaging where attributable.

- Selected flow: Corrugated cardboard transport box
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_corrugated_box / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_corrugated_box`
- Sources: `epa-tri-reporting`

###### Steel transport strapping (`steel_strapping`)

Conditional actual steel package restraint, counted independently from the cardboard box and product body. Do not prescribe packaging construction.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_steel_strapping / D; reconcile stock and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_strapping`
- Sources: `epa-tri-reporting`

#### Outputs

##### Product flows

###### Accepted delivered munition article (`accepted_article`)

Reference output; the concrete dataset represents one declared article family and delivered state, never a mixed basket. Record net accepted mass after excluding transport packaging.

- Selected flow: Accepted delivered munition article
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_accepted_article`
- Sources: `un-cpc3-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | all processes | Investigate subdivision and system expansion before allocation. For a declared attributional factory-gate product inventory, prefer dedicated records; allocate remaining shared totals using a measured relevant physical driver. If using another relationship, explain why physical causality was inadequate and document price period/sensitivity. | eu-ef-2021 |
| allocation_residues | all waste rows | Keep recoverable scrap, hazardous waste and co-products distinct. No automatic avoided virgin-material credit; state the chosen recycling/treatment convention and provider boundary. Transfers and internal recirculation cannot create environmental credits by themselves. | eu-ef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_empty_brass_case | supplier_interfaces | Empty brass cartridge case | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_unfilled_steel_casing | supplier_interfaces | Unfilled steel munition casing | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_polyethylene_wad | supplier_interfaces | Polyethylene cartridge wad | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_transport_service | supplier_interfaces | Freight transport by road truck | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | t*km | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_grid_electricity | site_environment | Purchased alternating-current electricity at factory meter | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | kWh | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_purchased_steam | site_environment | Purchased saturated steam at factory delivery meter | primary_record | provider; supplied/return state; period; verified delivered MJ or measured steam/condensate mass; specific enthalpy evidence; common reference; actual return boundary; allocation and uncertainty | Reconcile verified measured MJ or measured mass × actual state-specific enthalpy difference on a common reference, with actual condensate return accounted separately; verify supplier gate and meter/source uncertainty. No operational settings are specified. | MJ | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_natural_gas | site_environment | Purchased natural gas at factory delivery meter | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | MJ | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_diesel | site_environment | Diesel fuel for factory handling equipment | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_purchased_water | site_environment | Purchased industrial water at factory meter | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_brass_scrap | site_environment | Uncontaminated brass scrap sent to recycler | primary_record | stream identity; receiver; transfer ticket; wet/dry basis; chemical assay; mass; period; stock change; treatment boundary | Reconcile calibrated waste weighing or metered transfer with receiver records and laboratory stream characterization; no safe handling or treatment operations are prescribed. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_metal_sludge | site_environment | Dewatered metal-bearing wastewater-treatment sludge | primary_record | stream identity; receiver; transfer ticket; wet/dry basis; chemical assay; mass; period; stock change; treatment boundary | Reconcile calibrated waste weighing or metered transfer with receiver records and laboratory stream characterization; no safe handling or treatment operations are prescribed. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_offsite_effluent | site_environment | Metal-bearing aqueous effluent transferred to licensed treatment | primary_record | stream identity; receiver; transfer ticket; wet/dry basis; chemical assay; mass; period; stock change; treatment boundary | Reconcile calibrated waste weighing or metered transfer with receiver records and laboratory stream characterization; no safe handling or treatment operations are prescribed. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_fossil_co2 | site_environment | Carbon dioxide, fossil, to air | primary_record | species; compartment; stack/fugitive/discharge identity; sample date; laboratory result; detection limit; corresponding gas/water flow; period total; method uncertainty | Use accredited species-specific analysis with corresponding emission flow and temporal coverage; retain monitored totals or transparent validated factors. Keep transferred waste distinct from direct release. For each term, retain its own corresponding constituent assay; selective annual TRI reporting is corroboration, not evidence of inventory completeness or an unreported zero. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_carbon_monoxide | site_environment | Carbon monoxide to air | primary_record | species; compartment; stack/fugitive/discharge identity; sample date; laboratory result; detection limit; corresponding gas/water flow; period total; method uncertainty | Use accredited species-specific analysis with corresponding emission flow and temporal coverage; retain monitored totals or transparent validated factors. Keep transferred waste distinct from direct release. For each term, retain its own corresponding constituent assay; selective annual TRI reporting is corroboration, not evidence of inventory completeness or an unreported zero. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_nitrogen_dioxide | site_environment | Nitrogen dioxide to air | primary_record | species; compartment; stack/fugitive/discharge identity; sample date; laboratory result; detection limit; corresponding gas/water flow; period total; method uncertainty | Use accredited species-specific analysis with corresponding emission flow and temporal coverage; retain monitored totals or transparent validated factors. Keep transferred waste distinct from direct release. For each term, retain its own corresponding constituent assay; selective annual TRI reporting is corroboration, not evidence of inventory completeness or an unreported zero. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_lead_air | site_environment | Lead to air | primary_record | species; compartment; stack/fugitive/discharge identity; sample date; laboratory result; detection limit; corresponding gas/water flow; period total; method uncertainty | Use accredited species-specific analysis with corresponding emission flow and temporal coverage; retain monitored totals or transparent validated factors. Keep transferred waste distinct from direct release. For each term, retain its own corresponding constituent assay; selective annual TRI reporting is corroboration, not evidence of inventory completeness or an unreported zero. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_copper_water | site_environment | Copper to freshwater | primary_record | species; compartment; stack/fugitive/discharge identity; sample date; laboratory result; detection limit; corresponding gas/water flow; period total; method uncertainty | Use accredited species-specific analysis with corresponding emission flow and temporal coverage; retain monitored totals or transparent validated factors. Keep transferred waste distinct from direct release. For each term, retain its own corresponding constituent assay; selective annual TRI reporting is corroboration, not evidence of inventory completeness or an unreported zero. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_corrugated_box | delivered_gate | Corrugated cardboard transport box | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_steel_strapping | delivered_gate | Steel transport strapping | primary_record | single exchange identity; provider; grade/delivery state; quantity; original unit; conversion evidence; reporting period; opening/closing stock; allocation driver; provider coverage | Reconcile actual meter, delivery and stock records for this single exchange; verify provider gate, geography/year and allocation. Transport uses actual consignment mass and distance. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |
| cp_accepted_article | delivered_gate | Accepted delivered munition article | primary_record | family; delivery state; acceptance lot; reporting period; calibrated net accepted mass; packaging tare; rejects; opening and closing stock | Use calibrated weighing or traceable weighing records for accepted articles of the declared family/state, excluding transport packaging; reconcile acceptance and stock records. | kg | each record; period reconciliation | same declared reporting period | declared factory and linked supplier gates | per 1 kg reference flow | calibration; traceability; source record; coverage; uncertainty |

Raw reporting-period totals remain in supporting records. For each applicable row, reconcile stock consumption and assigned shared services, then divide by D; cp_accepted_article establishes the same denominator for every row. Absent conditional flows require documented not_applicable; zero requires measurement evidence and unknown remains a data gap.

EPA TRI records corroborate selected annual chemical releases, transfers and waste reporting. They are selective reporting data, not a complete factory LCI: reporting eligibility, chemical lists, thresholds, period coverage and aggregation differ from this inventory. An unreported exchange is unknown until site evidence establishes its amount or documented absence, never automatically zero.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For each applicable atomic exchange, divide the reconciled attributable reporting-period total by same-period accepted net product mass D. Record allocation and conversions separately; the reference output is 1 kg. | period exchange total; D; cp_accepted_article | normalized exchange |  |
| generic_mass_closure | site_environment | Reconcile external mass inputs and opening stocks with accepted output, rejects, waste, identified emissions and closing stocks using consistent wet/dry and constituent definitions. Include reaction-related external mass where relevant; paired internal transfers cancel. Explain residual discrepancy against measurement uncertainty without inventing a universal tolerance. | reconciled external mass records; stocks; assays | documented mass closure |  |
| species_release | lead_air; copper_water | Multiply the measured concentration of the named species by the corresponding sampled release quantity with documented units and coverage; sum same-species same-compartment observations and normalize with D. Do not convert gross mixture mass into constituent mass without matching assay. | laboratory concentration; corresponding flow; period; D | species mass per reference flow | epa-tri-reporting |
| water_closure | purchased_water; metal_sludge; offsite_effluent | Reconcile same-period external water input, input moisture, opening water stocks and actual reaction-related water with closing water stocks, measured discharge, actual evaporation, retained product moisture and water in wet wastes. Verify paired water/condensate returns at their actual external gates and cancel internal recirculation transfers. Convert volume using documented state-appropriate density with units; propagate meter, assay, density and stock uncertainty into the residual assessment. Do not assign residual loss automatically to evaporation or invent a tolerance. | water meters; input/product/waste moisture assays; water stocks; actual reaction water evidence; discharge and evaporation evidence; returns; density and uncertainty | documented water closure |  |
| contained_species_closure | empty_brass_case; unfilled_steel_casing; brass_scrap; metal_sludge; lead_air; copper_water; accepted_article | For each identified conserved metal, reconcile its contained mass on EACH product, input, scrap, sludge, stock and release term using that term's own matching assay and wet/dry basis. Include opening/closing stocks, paired internal transfers and actual additional input/output terms; track species transformations separately from elemental conservation. Do not multiply all terms by one common alloy or sludge assay, and do not equate gross carrier mass with constituent mass. | individually matched assays; carrier masses; opening/closing stocks; constituent/species definitions; environmental interface register | documented contained-metal and species reconciliation |  |
| utility_reconciliation | grid_electricity; purchased_steam; natural_gas; diesel; fossil_co2; carbon_monoxide; nitrogen_dioxide | Reconcile each actual energy carrier separately: external imports plus measured on-site generation and opening stored energy against allocated measured site demand, exports, measured closing stored energy and evidenced losses. Record conversions and meter uncertainty; do not infer unidentified carriers or losses from a residual. An internally generated electricity/heat service and its generating fuel cannot both enter as independent external purchased supplies. The generating fuel's upstream provider burden and site releases are counted once; purchased heat/electricity provider burdens stay upstream. | import/generation/export/demand meters; storage records; carrier-specific conversions; loss evidence; provider coverage; allocation and uncertainty | carrier-specific utility residual and no-duplication assessment |  |
| steam_energy_interface | purchased_steam | Prefer verified measured delivered MJ. Otherwise multiply measured steam mass in kg by specific enthalpy difference in MJ/kg at the actual supplied state and declared common energy reference; subtract measured condensate-return mass times its own enthalpy difference using the same reference. kg × MJ/kg = MJ. Document actual supplied/return state, provider boundary, calorimetric/thermodynamic source, mass meters and uncertainty. Do not prescribe steam operating settings or duplicate supplier fuel and stack emissions. | measured steam/condensate masses; state-specific enthalpy evidence; common reference; provider gate and uncertainty | net delivered purchased-steam MJ for normalization |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | Verify delivered-state/type, unit/property, provider and geography before selecting any UUID; unresolved identity remains a candidate gap. | direct-read identity and supplier records |
| coverage | all processes | Document actual make/buy gates and every material/service/waste/species; independently review confidential supporting environmental evidence. An inaccessible essential interface makes the dataset incomplete. | environmental interface register and reviewer coverage statement |
| period | all protocols | Use consistent period, output family/state and allocation driver; reconcile meters, stocks, acceptance and invoices. Quantify uncertainty, missing periods and detection limits. | calibration, laboratory QA and audit records |
| ranges | all rows | No verified independent boundary-compatible empirical range exists here. Collect foreground data; do not replace gaps with recipe-based estimates or universal mass/energy/emission factors. | site records and explicit uncertainty |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | accepted_article | Require one family and delivery state, positive accepted net denominator D, packaging separation and complete qualifiers; category UUID gap remains disclosed. | un-cpc3-2025 |
| validation_boundary | all processes | Check make/buy coverage, supplier burdens once and no internal-transfer duplication; separate later use/remediation and external waste treatment from direct environmental releases. | epa-munitions-environment; epa-tri-reporting |
| validation_species | all emissions and wastes | Validate species, compartment, assay basis, reporting-period coverage and nondetect treatment. CO and NO2 require independent species evidence; transferred waste and retained sludge are not direct releases. | epa-tri-reporting |
| validation_completeness | all exchanges | Any unreviewable essential supplier/site interface, unknown quantity or incompatible UUID yields incomplete dataset coverage. Passing finite normalization checks does not prove all production burdens are covered or that publication gates are satisfied. |  |
| validation_closures | all exchanges | Require water closure including moisture, stocks, reaction water, evaporation, discharge, wet wastes and paired returns; contained-species reconciliation with a matched assay on EACH term; carrier-specific utility imports/generation/exports/storage reconciliation; and a verified steam energy/condensate interface. Assess residuals using documented measurement uncertainty; no blanket tolerance, common assay, assumed loss or unreported-zero rule. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared-family factory-gate environmental inventory and downstream process/lifecyclemodel projection with preserved boundaries. |
| excluded_use | Manufacturing instructions; performance comparison across families; operational design; undisclosed complete LCA claims; use/range/remediation estimates without separate evidence. |
| required_metadata | Reference qualifiers; period and site; reporting gates; supplier dataset coverage; environmental interfaces; allocation; units/conversions; confidentiality; omitted life stages. |
| required_quality_disclosure | Unresolved flow identities; no empirical defaults; sampling/detection limits; confidential-interface review coverage; quantitative and boundary gaps; representativeness and uncertainty. |
| update_trigger | Changed family/delivery state, make/buy gates, provider geography/year, environmental controls, inventory evidence or accepted identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.239; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification boundaries only; no production recipe or empirical factor. |
| epa-munitions-environment | official_guidance | US EPA, Military Munitions/Unexploded Ordnance, Overview; https://www.epa.gov/fedfac/military-munitionsunexploded-ordnance | Counterevidence to treating factory inventory as full life-cycle contamination coverage. |
| epa-tri-reporting | official_guidance | US EPA, TRI EZ Search, available report categories; https://www.epa.gov/enviro/tri-ez-search | Species/media, direct releases, transfers, waste and reporting-year distinctions; no production factor. |
| eu-ef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, section4.5 p.87; https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | General subdivision/expansion/physical-relationship allocation hierarchy. |
