---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.lime-free-natural-indigo-pigment
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Lime-free natural indigo pigment from Indigofera tinctoria


## 1. Scope and Applicability

This PCR covers whole dry natural indigo pigment made from fresh Indigofera tinctoria leaves and fine stems by water steeping with endogenous precursor hydrolysis, separation of spent biomass, air oxidation, solid recovery, water washing, electric drying and optional grinding. No lime, mineral filler, added carrier, synthetic indigo or organic extraction solvent is added to the product. The reference is the final washed pigment marketed as natural indigo, with its measured inherent indirubin, other plant coextractives, ash and residual moisture retained in its net mass. It is neither pure indigotin equivalent nor unwashed crude plant extract. Product composition and route must establish this boundary before the generic Indigo flow can be used.

Excluded are fermentation liquor, crude unwashed precipitate, indigo paste, leaf powder, indigo naturalis with added mineral, carrier-based preparations, synthetic dye production, other botanical species, solvent or reductive purification, dye-vat preparation and textile dyeing. This narrower method does not establish coverage of the entire classification leaf. Primary route evidence is case-specific; no experimental yield, water ratio, assay, temperature or residence time is an industrial default (`hartl-indigo-2024`; `dutta-indigo-2017`; `teanglum-indigo-wash-2012`).



Direct endpoint evidence is Teanglum et al. (2012), section 2.2: in its four-variety Indigofera tinctoria experiment the leaves are removed before the blue oxidised liquor is filtered, and the recovered solid residue is water-washed and heated to constant-weight powder. The wash applies to recovered pigment, not leaves. Section 2.3 separately concerns Marsdenia and Memecylin and is not transferred to this species. This laboratory method documents washing of a filtered liquor aliquot residue and its constant dry-mass isolation; it does not qualify an industrial wash, whole commercial grade or manufacturing route. This PCR combines the qualitatively documented wash operation with reported lime-free water extraction, air oxidation and cotton filtration, requiring the actual site to demonstrate its complete selected commodity route. No paper is represented as proof of that entire industrial route or purity. Its abstract and body disagree on yield; no case yield, wash count, temperature or time is adopted (`teanglum-indigo-wash-2012`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.lime-free-natural-indigo-pigment |
| classification_refs | CPC 3.0 34320; narrower product and route boundary |
| covered_products | Whole carrier-free, lime-free, water-extracted, air-oxidised, washed dry natural indigo pigment from Indigofera tinctoria |
| excluded_products | Crude liquid, unwashed precipitate, paste, leaf powder, filled preparations, synthetic dye and dye vats |
| representative_product | Accepted lime-free washed dry natural indigo commodity with measured composition |
| production_route | Water steeping and hydrolysis → biomass separation → air oxidation → filtration and water washing → electric drying → optional grinding and packing |
| market_state | Whole dry pigment at first factory acceptance; packaging excluded; no added carrier or mineral |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Natural blue pigment supplied for a separately specified downstream dyeing process |
| How much | 1 kg net whole dry commodity at first acceptance |
| How well | Meet the actual grade acceptance for indigotin assay, indirubin, residual moisture, ash, particle size and colour; equal dyeing strength is not assumed |
| How long or cycle | One production and acceptance cycle; no textile service-life claim |
| reference_flow_link | finished_pigment |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Indigo `35061915-5398-42c4-9a72-32637dff8caf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Indigofera tinctoria identity and voucher; harvest origin and storage duration; actual whole commodity grade without lime or carrier; aqueous air-oxidation and water-washing route; electric heating and drying; measured indigotin and indirubin assay and method; coextractives and ash; residual moisture and wet/dry basis; particle form and colour; first-acceptance gate and unique event; packaging exclusion; site and period; actual electricity and upstream biomass sources |


Every required qualifier must be declared in concrete dataset metadata. Indigo is the whole selected commodity flow; its CAS denotes the principal colourant and does not warrant 100% purity. The flow has no declared geographical limit. Actual site geography is mandatory. The official Chinese baseName is used; primary-source chemistry takes precedence over erroneous precursor translations in the native Chinese comment.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| whole_product_mass | finished_pigment | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use a calibrated scale at first acceptance of the whole dry commodity, excluding packaging while retaining measured residual moisture and inherent coextractives. Q is an independently measured sum of unique first-acceptance events, never inferred from dispatch and stocks. |
| assay_basis | finished_pigment | Mass | kg | Retain separate whole-product, dry-matter and indigotin records on the same sample. m_indigotin = m_product × dry_fraction × assay_dry; wet-basis assay receives no second dry-fraction factor. This indicator never replaces the reference quantity. |
| power_basis | electricity | Energy | MJ | Convert net delivered kWh to MJ by multiplying by 3.6; process heat generated electrically is not another imported heat exchange. |
| water_basis | process_water | Mass | kg | Preserve separate makeup-meter readings; volume-to-mass conversion uses measured temperature and density; carrier water is not added again to a whole solution mass. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of fresh species-identified Indigofera biomass with upstream burden evidence; foreground begins with rinsing and steeping |
| starting_condition_role | Physical foreground collection start, not a burden-free cut-off |
| product_classification_scope | CPC 3.0 34320; narrower |
| recursive_input_rule | Purchased same-category indigo is outside this leaf-to-pigment route; identify provider, composition and upstream history separately and review another boundary, without treating it as fresh biomass or new first acceptance. Internal returns retain original lot identity. |
| upstream_dataset_requirement | Compatible datasets for crop cultivation/harvest/transport, electricity, water, cloth and each actual packaging or reagent; missing burdens are not zero |
| disclosure | Declare species, composition, substages, stocks, internal reuse, shared utilities, treatment location and all exclusions; incompatible boundaries stop applicability |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | all inventory rows | Include leaf rinse/steeping, precursor hydrolysis, biomass removal, air oxidation, settling/filtration, pigment washing, electric drying, grinding, packing, cleaning, captures and pre-transfer treatment. Maintain stage-linked flow and time records. Crop production and purchased inputs retain upstream burdens. . | `hartl-indigo-2024`; `dutta-indigo-2017`; `teanglum-indigo-wash-2012` |
| boundary_actual_exchanges | all inventory rows | Record every actual external exchange separately. The cards below are scoped requirements, not permission to omit other actual materials or emissions. A direct liquid discharge, fuel-fired heat, solvent purification or lime addition requires distinct atomic rows, identity and scope review before a dataset is complete. Internal liquor, cloth reuse and powder returns cross no external boundary. . | `eu-cww-2016` |
| boundary_gate | all inventory rows | First acceptance follows final washing, drying and actual grade checks. Lock each acceptance event mass, lot and genealogy once. Q is not an additional physical output to be added to dispatch or closing stock. Reworked or returned material already accepted never generates another Q event. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| leaf_to_pigment | Indigofera water extraction, oxidation and washed dry pigment recovery | required | Lime-free carrier-free electric-heated route in section 1 | foreground | 1 kg whole accepted pigment |


The consolidated foreground process retains separate raw records for rinse/steep, biomass removal, oxidation, filter/wash, dryer/grinder and packing; aggregation does not erase intermediate liquor, wet cake or residual biomass stocks. Product-burden attribution is performed only after physical closure.

### Process: Natural indigo pigment production (`leaf_to_pigment`)

#### Inputs

##### Product flows

###### Fresh Indigofera tinctoria aerial biomass (`fresh_biomass`)

Weigh leaves and included fine stems as received; botanical voucher, harvest origin, elapsed storage time, stem fraction, moisture and dry matter identify the supplied biomass. Purchased crop burden includes cultivation and transport; no yield from a laboratory case is a default.


- Selected flow: Fresh Indigofera tinctoria aerial biomass
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`

###### Process Water (`process_water`)

Meter separately the initial leaf rinse, steeping makeup, pigment washing and equipment cleaning. Sum only external supply; internal reused liquor is a transfer ledger, not another purchased-water input. Volume-to-mass conversion needs measured water temperature/density.


- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`; `teanglum-indigo-wash-2012`

###### Delivered electricity at the extraction facility (`electricity`)

Submeter extraction heating, aeration pump, filtration, electric dryer, grinding, dust control and attributable lighting/cleaning. Use actual net delivered electricity; 1 kWh = 3.6 MJ. This route uses electric heating; a fuel-fired or imported-heat route requires separate actual fuel/heat cards and a reviewed scope extension.


- Selected flow: Delivered electricity at the extraction facility
- Flow property / unit: Energy / MJ
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`

###### Woven cotton filtration cloth (`cotton_cloth`)

The physical ledger records full-period external new-cloth receipts, opening unused/in-service cloth, closing unused/in-service cloth, external returns and actual dry-cotton discard, by item or lot. Do not shrink those physical quantities by the new-cohort service share. Separately use cp_cloth_service to assign environmental service/provider-demand vectors by evidenced use and original cohort; reuse is not another purchase. Represent each upstream history through either a linked aggregate supplier burden or separately expanded embedded burden with non-overlapping boundaries, never both. No assumed service life creates an amortisation factor.


- Selected flow: Woven cotton filtration cloth
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`

###### Paper bag (`paper_bag`)

Include the actual kraft bag mass and rejects when this bag is used. Packaging is outside the net pigment reference mass; bag count alone requires measured tare per bag. The selected native English name “Paper bag”, official Chinese baseName “纸袋” and full comment identify a whole paper bag. Use it only for the same actual whole bag bought and delivered with pigment, with compatible material/provider state; raw kraft paper is not a finished-bag proxy.


- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`

###### Polyethylene liner film (`pe_liner`)

Include separately any actual polyethylene liner and its trimming loss; no liner is presumed. The selected supplier grade and polymer identity must be confirmed independently of paper bags.


- Selected flow: Polyethylene liner film
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`

###### Sodium hydroxide aqueous solution for equipment cleaning (`cleaning_naoh`)

Conditional cleaning-only exchange: record supplied solution mass and concentration plus carrier water as a nested composition. It must not be used to conceal product alkalisation or added carrier. Absent use requires documented not_applicable status.


- Selected flow: Sodium hydroxide aqueous solution for equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`

###### Hydrochloric acid for wastewater neutralisation (`neutralisation_hcl`)

Conditional wastewater-treatment exchange before external transfer: measure actual supplied solution and composition; it is not a product purification step. Add other actual cleaning or treatment reagents as individual cards before declaring completeness.


- Selected flow: Hydrochloric acid for wastewater neutralisation
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`

##### Elementary flows

###### Atmospheric oxygen consumed during oxidation (`oxygen_uptake`)

Collect net O2 uptake from measured dry-gas flow and inlet/outlet O2 fractions with fermentation oxygen demand distinguished. Gross ambient air and unchanged N2 are ancillary physical gas-throughput records; do not count their mass again as consumed oxygen.


- Selected flow: Atmospheric oxygen consumed during oxidation
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `eu-cww-2016`

#### Outputs

##### Product flows

###### Indigo (`finished_pigment`)

The whole washed, dry, carrier-free natural pigment, including measured residual moisture and inherent coextractives, first accepted after final drying and quality checks. The Amount rule is the 1 kg reference output, not the sum Q and not assayed indigotin mass.


- Selected flow: Indigo `35061915-5398-42c4-9a72-32637dff8caf`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `hartl-indigo-2024`; `dutta-indigo-2017`; `teanglum-indigo-wash-2012`

###### Paper bag (`delivered_paper_bag`)

When this actual whole paper bag is used, record its full physical mass dispatched with the indigo commodity, excluding its pigment contents. This transfer is not another reference product, co-function or credit, and does not demand bag manufacture again at the outgoing side. The delivered bag must retain the whole-bag field-fit conditions of the input card.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass / kg
- Amount rule: Retain actual whole packaging dispatched with pigment; normalise only using its original cohort reference quantity, preserving full return and re-dispatch events separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-cww-2016`

###### Polyethylene liner film (`delivered_pe_liner`)

Only when polyethylene liners are actually used, record their physical mass dispatched with pigment separately; neither liner use nor fixed tare is presumed. This is delivery of the same packaging already supplied, not a new reference product, co-function, substitution credit or second film-manufacture demand.

- Selected flow: Polyethylene liner film
- Flow property / unit: Mass / kg
- Amount rule: Retain actual whole packaging dispatched with pigment; normalise only using its original cohort reference quantity, preserving full return and re-dispatch events separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-cww-2016`

###### Spent Indigofera tinctoria biomass for documented material use (`spent_leaf_coproduct`)

Only the segregated portion with demonstrated product status, accepted specification, recipient and material function. The same physical portion cannot also appear as spent_leaf_waste; market value alone does not establish displaced-product credit.


- Selected flow: Spent Indigofera tinctoria biomass for documented material use
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-cww-2016`

##### Waste flows

###### Spent Indigofera tinctoria biomass for waste treatment (`spent_leaf_waste`)

Weigh wet extracted leaves and stems with moisture and residual organic composition, treatment destination and receipts. Distinguish water held in biomass from wastewater and vapour; no negative burden or automatic compost credit.


- Selected flow: Spent Indigofera tinctoria biomass for waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-cww-2016`

###### Indigo extraction and washing wastewater for external treatment (`process_wastewater`)

Measure the whole final off-site liquid transfer after internal reuse, with water, suspended pigment, dissolved organic carbon, COD, nitrogen, salts and pH as nested composition/characterisation. COD is oxygen-equivalent demand, not added physical mass. This card is not a direct environmental discharge.


- Selected flow: Indigo extraction and washing wastewater for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-cww-2016`

###### Spent cotton filtration cloth (`spent_cloth`)

Retain the full actual-period discarded cloth mass, with dry cotton, retained liquor and solids; do not reduce actual spent-cloth kg by cohort allocation shares or an assumed lifetime. Retained pigment is not also loose pigment waste. Preserve the complete physical destination ledger alongside the service ledger: only treatment or cloth-service burden vectors are attributed by evidenced service; old-cohort rewash, reuse and disposal services retain their locked original Q.


- Selected flow: Spent cotton filtration cloth
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-cww-2016`

###### Captured natural indigo pigment fines for waste treatment (`pigment_fines_waste`)

Only captured and actually discarded fines. Returned fines are an internal loop retaining original lot identity and burden, not another external input or first acceptance.


- Selected flow: Captured natural indigo pigment fines for waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-cww-2016`

###### Discarded kraft paper bag (`paper_scrap`)

Record damaged or unused discarded bags separately from packaging delivered with product; retain actual contamination and destination.


- Selected flow: Discarded kraft paper bag
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-cww-2016`

###### Discarded polyethylene liner film (`film_scrap`)

Conditional on liner use; record actual trimming and damaged liners with treatment receipts. Packaging stock changes must reconcile separately from pigment stocks.


- Selected flow: Discarded polyethylene liner film
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-cww-2016`

##### Elementary flows

###### Particulate matter (PM2.5) (`pm_fine`)

Post-control residual PM2.5 from dry handling and grinding to outdoor air, unspecified subcompartment; collect stack and fugitive coverage. It excludes captured dust and the larger bins.


- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eu-cww-2016`

###### Particulate matter (PM2.5 - PM10) (`pm_coarse`)

Only the disjoint >2.5 to 10 micrometre residual fraction to outdoor air, unspecified subcompartment. Convert a cumulative PM10 test to this bin only with compatible PM2.5 evidence.


- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eu-cww-2016`

###### Particulate matter (> PM10) (`pm_large`)

Only residual particles larger than 10 micrometres to outdoor air, unspecified subcompartment. Do not sum total dust and all size bins.


- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eu-cww-2016`

###### Water vapour (`water_vapour`)

Net process evaporation to outdoor air, unspecified subcompartment, after separating ambient inlet humidity and captured condensate. Dry product residual moisture is not vapour.


- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eu-cww-2016`

###### Biogenic carbon dioxide to air (`biogenic_co2`)

Conditional actual fermentation/respiration emission; measure carbon species and biogenic origin. Do not force unmeasured plant carbon into CO2 or infer zero from lack of monitoring; add actual CH4 or other gases as separate cards where observed.


- Selected flow: Biogenic carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured genealogy-attributed quantity per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `eu-cww-2016`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | all inventory rows | First separate measured crop-independent/shared-facility activities and direct pigment operations. If spent biomass has a demonstrated co-product function, investigate subdivision or system expansion before physical causal allocation; document why any economic allocation is needed, the same-period quantities/prices and sensitivity. No fixed split, automatic fertiliser displacement or carbon-neutrality claim is supplied. Apply the hierarchy as general method guidance, without claiming complete PEF compliance . | `eu-pef-2021` |
| allocation_physical_ledger | all inventory rows | Preserve unallocated external exchanges, raw/WIP/finished stocks and elemental balances. Allocation changes burden vectors only, never measured mass, water, carbon or Q. Waste remains a treatment obligation; sale price does not turn a disposal service into a co-product. All shares of any allocated burden must sum to one. |  |
| allocation_history | all inventory rows | Preserve raw-material, liquor, wet-cake and finished-pigment lot quantities and their accumulated burden vectors at opening/closing. Imported stocks carry actual prior upstream history. Rework, repeated washing and internal transfers add incremental service to the original lot without erasing inherited burden or creating another acceptance. Old-cohort storage, repacking or repair is reported against its locked original Q; it cannot be normalised using the new cohort Q. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | leaf_to_pigment | finished_pigment | Independent first acceptance | event id; original lot and split/merge genealogy; date; separate bag/liner tare; net pigment mass; moisture; wet/dry assay; acceptance result; outbound consignment and packaging delivery kg linked to cp_packaging | Weigh final whole commodity on calibrated scales and bind quality release; deduplicate and lock unique events, independently of dispatch or stock differences | kg | Each first acceptance | Same cohort and stock period, including start/stop and old-cohort service | Complete foreground stages and actual shared services | per 1 kg reference flow | Calibration, signed records, genealogy and assay method |
| cp_materials | leaf_to_pigment | fresh_biomass; process_water; cotton_cloth; paper_bag; pe_liner; cleaning_naoh; neutralisation_hcl | Stage-specific external input and stocks | lot; raw receipts/issues; species; moisture; reagent strength; water meters; each packaging tare/receipts/dispatch/returns/scrap/stocks; full unused/in-service cloth fleet; opening/closing physical quantities and non-overlapping burden-source boundaries | Weigh, submeter and reconcile supplier records; distinguish raw receipts from already stock-corrected consumption and correct once only; track liquid, wet cake and biomass stocks by stage | kg | Each batch and stock cut-off | Same cohort and stock period, including start/stop and old-cohort service | Complete foreground stages and actual shared services | per 1 kg reference flow | Scales/meter calibration, species voucher, composition, upstream provider and transfer records |
| cp_energy | leaf_to_pigment | electricity | Electric meters and service attribution | meter; kWh start/end; substage; equipment hours; mode; lot; new/old cohort; shared split | Submeter electric heaters, pumps, dryer, grinder and cleaning; assign new/old lots using measured service drivers rather than current dispatch | MJ | Continuous meters with batch attribution | Same cohort and stock period, including start/stop and old-cohort service | Complete foreground stages and actual shared services | per 1 kg reference flow | Meter calibration, equipment/downtime records and complete shared splits |
| cp_residues | leaf_to_pigment | spent_leaf_coproduct; spent_leaf_waste; process_wastewater; spent_cloth; pigment_fines_waste; paper_scrap; film_scrap | Physical residues and destinations | stream/stage; wet/dry mass; composition; destination; transfer; product/waste status; returns; new/old cohort | Weigh or convert metered liquid using evidenced density; reconcile individual treatment receipts; label coproduct, waste and internal return portions disjointly | kg | Each batch and transfer | Same cohort and stock period, including start/stop and old-cohort service | Complete foreground stages and actual shared services | per 1 kg reference flow | Transfer records, sampling, moisture, actual product function and status evidence |
| cp_emissions | leaf_to_pigment | pm_fine; pm_coarse; pm_large; water_vapour | Post-control emission monitoring | outlet; gas flow; temperature/pressure; wet/dry basis; particle bin; concentration; hours; ambient humidity; condensate; captures | Measure outlets and fugitives by mode; maintain disjoint particle bins; water closure separates ambient humidity, net evaporation and condensate | kg | Continuous or representative tests covering each mode | Same cohort and stock period, including start/stop and old-cohort service | Complete foreground stages and actual shared services | per 1 kg reference flow | Detection limits, sampling recovery, control bypass and uncertainty |
| cp_species | leaf_to_pigment | oxygen_uptake; biogenic_co2 | Species reaction and conserved-quantity ledgers | gas inlet/outlet flow and composition; precursors; indigotin; indirubin; glucose; dissolved organic carbon; C/N elements; water; stocks; reaction extent | Use compatible gas and chemical analysis bases; distinguish species generation/consumption from total-mass and elemental conservation; never treat COD as mass | kg | Each batch with representative sampling by mode | Same cohort and stock period, including start/stop and old-cohort service | Complete foreground stages and actual shared services | per 1 kg reference flow | Standard calibration, method selectivity, representativeness, stoichiometric basis and elemental closure |


| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_packaging | leaf_to_pigment | paper_bag; pe_liner; delivered_paper_bag; delivered_pe_liner; paper_scrap; film_scrap | Whole-packaging physical transfer and stock | component; original cohort; raw supplier receipts; opening/closing unused and filled package mass; measured item tare; gross dispatch with pigment; actual customer returns; supplier returns; actual scrap; re-dispatch events | Weigh each consignment or multiply evidenced counts by measured tare, reconcile stocks and pigment dispatches; do not scale full dispatched kg by a service share. Actual customer returns need separate inbound transfer cards, not erasure from outward physical cards | kg | Each receipt/dispatch/return and stock cut-off | Same period with original and old cohorts retained | All actual packaging | per 1 kg reference flow | Calibration, tare, receipts/dispatch/return documents and stock locations |
| cp_cloth_service | leaf_to_pigment | cotton_cloth; spent_cloth | Separate cloth physical and environmental-service ledgers | cloth item/lot id; full-period new receipts; unused/in-service opening/closing dry mass; external returns; actual discard; retained liquor/solid; evidenced stage use; original cohort Q; historical burden source and boundary | Reconcile full cotton mass and waste destinations by item/lot; separately assign environmental service using measured use. Linked aggregate supplier processes and expanded embedded upstream history are alternative representations of the same boundary, never additive manufacturing burdens | kg | Each batch use, actual replacement/discard and stock cut-off | Complete cloth fleet and all affected new/old cohorts | Whole physical fleet and separate environmental-service vector | per 1 kg reference flow | Purchase, calibration, wet/dry composition, use records, original Q and supplier boundary |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_normalisation | all inventory rows | Q = sum(m_first,e) over unique first-acceptance events e; Q > 0. a_i = A_i,new / Q. A_i,new includes losses and post-gate service attributable to this accepted cohort; quantities and inherited burdens for unaccepted WIP remain with WIP, not the accepted cohort. Report old-cohort A_i,old / Q_old using its original locked Q_old. Reference output is 1 kg; never add Q as another raw output. | cp_acceptance; attributed exchange A_i; cohort genealogy | Amount per reference flow and separate old-cohort service |  |
| acceptance_state_bridge | finished_pigment | Check independently measured Q against Q = D_new + S_new + L_new + X_new: net externally retained delivery D_new, all disjoint on-site post-gate stocks S_new (finished, returned inspection, rework etc.), irreversible loss L_new and other terminal disposition X_new, all on original acceptance mass basis. Only with L_new = X_new = 0 and no other post-gate state is Q = D_new + FG_close,new valid. | cp_acceptance; event genealogy; final states | Reconciliation residual, never Q definition |  |
| raw_and_burden_stocks | all inventory rows | From raw receipts, net external consumption = opening + receipts - closing - external_returns; never stock-correct a source already reporting net consumption. Trace to newly accepted output, unaccepted WIP, loss and other destinations by lot genealogy; carry physical and accumulated burden vectors separately, including inherited upstream burdens. | cp_materials; cp_residues; stock quantities; burden history | Stage physical closure and attributable burdens |  |
| species_and_conservation | all inventory rows | For each species X: I_X + G_X = O_X + deltaStock_X + C_X. Establish G_X/C_X from supported stoichiometry and extent or measured transformations, never fitted invented factors. The principal reaction is 2 C8H7NO (indoxyl) + O2 → C16H10N2O2 (indigotin) + 2 H2O; account separately for side reactions and fermentation. Reconcile total mass, C/N elements, water and energy separately; reacting species are not individually conserved. | cp_species; assays; reaction extents; gas/liquid/solid inventories | Separate species and conserved-quantity residuals | dutta-indigo-2017; eu-cww-2016 |


| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| packaging_stock_bridge | paper_bag; pe_liner; delivered_paper_bag; delivered_pe_liner; paper_scrap; film_scrap | For each packaging component: P_open + P_receipts + P_customer_returns = P_close + P_dispatch_gross + P_scrap + P_supplier_returns. Equivalently, with net delivery D_P = P_dispatch_gross - P_customer_returns, P_open + P_receipts = P_close + D_P + P_scrap + P_supplier_returns; never add customer returns again in the net equation. Opening/closing stocks include unused and filled packages. Keep full outward physical kg and actual inbound returns; re-dispatch creates no new purchase or manufacturing demand. | cp_packaging; cp_acceptance; physical receipt/dispatch/return/stocks | Per-component physical residual and separate net-delivery bridge, without changing pigment Q |  |
| cloth_representation | cotton_cloth; spent_cloth | Keep full-fleet physical quantities separate from environmental-service vectors: C_open + C_new_receipts = C_close + C_external_returns + C_dry_discard; in-service cloth remains stock, with measured retained liquor/solids added only to its actual waste composition, never duplicate cotton mass. Only environmental cloth/treatment service vectors are assigned by evidenced cohort use and divided by original Q. Never scale physical discard, assume a lifetime or add the same manufacturing burden as both aggregate supplier demand and embedded history. | cp_cloth_service; cp_materials; cp_residues; supplier and historical boundaries | Full-fleet physical closure, separate cohort service and non-overlapping upstream burdens |  |

Gross dispatch, customer returns, repeated grinding and re-acceptance are event histories, not additive final states. A returned portion is either still externally retained, held on site, subsequently delivered, lost or finally disposed; locate it once at the closing cut-off. A mass gain/loss after acceptance (moisture, contamination or transformation) needs its own measured exchange and genealogy conversion back to the locked acceptance basis, never a rewrite of Q. Partition the original accepted material once between surviving product, actual loss and other disposition: if accepted water evaporates, retain the surviving physical product and the evaporated portion separately in L; never restore the survivor to its pre-loss mass while also counting that loss. Newly added water or contamination is a separate external exchange and cannot inflate the accepted-material state sum. For opening accepted stock, apply the same disjoint state equation separately with the original cohort opening quantity and Q; do not merge it into new production.

Use stage water balances with biomass moisture, extraction/wash makeup, reagent carrier water, wet biomass, wet cake/finished moisture, wastewater, condensate and net evaporation distinguished. Reaction water generation/consumption uses supported extents. Gas-throughput records distinguish gross air, inlet humidity, oxygen uptake, CO2 and unchanged carrier gases; a component is not added again to its whole stream. Purchased electricity balances against measured heater/dryer work, losses and useful duty; no heat or oxygen is inferred as a missing-mass plug.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | finished_pigment | Prove no lime/carrier, whole natural commodity and correct species; disclose actual assay method and composition. Do not copy native Chinese precursor mistranslations as chemistry. | Recipe, batch specification, voucher, sampling and analysis |
| dq_evidence | all inventory rows | Source process/analytical cases cannot replace site measurement; no default water ratio, yield, dryer duty, assay, emission or allocation factor. | Primary original conditions and site records |
| dq_closure | all inventory rows | Trace raw, stock, conversion and allocation ledgers; declare site-justified tolerances and instrument uncertainty beforehand; investigate exceedances without a generic closure allowance. | Calibration, genealogy, balance residuals and resolution |
| dq_completeness | all inventory rows | Preserve missing measurements, unconfirmed identities and unknown treatment/providers as gaps; not_applicable requires physical absence evidence, never zero-filled missing data. | Exchange audit, method scope, monitoring and provider chain |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | all inventory rows | Verify whole product and mandatory qualifiers, correct natural route and first-acceptance gate. Stop applicability for lime/carrier blends, crude liquids or other species; never substitute pure indigotin mass for whole pigment mass. |  |
| validate_measurement | all inventory rows | Require independent finite Q > 0, unique acceptance event identities, calibrated net masses, compatible assay bases and 1 kg reference normalisation. A passing dimensional check does not establish measured factory data or scientific approval. |  |
| validate_states | all inventory rows | Verify disjoint new/old cohort states and post-gate L/X on the locked original basis. Reject Q inferred from shipments, omitted post-gate losses, gross-return summations, repeated acceptance, extra Q physical output or old-cohort services divided by new Q. |  |
| validate_balances | all inventory rows | Review raw/WIP/finished physical and burden stocks, upstream history and stage mass/C/N/water/energy closure. Review supported species G_X/C_X and side reactions separately. Reject false conservation of indican, indoxyl or indigotin, duplicated whole-stream/components, COD mass and invented residual-balancing inputs. |  |
| validate_actual_inventory | all inventory rows | Every actual water, electric/heat/fuel carrier, cleaning chemical, packaging component, waste and emission has an atomic row, measured amount, appropriate source/compartment and provider basis. Other actual exchanges require added cards. Native UUID gaps or missing empirical amounts leave the concrete dataset incomplete and prevent qualification. |  |
| validate_allocation | all inventory rows | Check coproduct evidence, treatment burdens, justified hierarchy, unity of burden shares and unchanged physical ledgers; no undocumented avoided-burden credit. |  |
| validate_language_evidence | all inventory rows | EN/ZH share rules, rows, quantities and source fields. Preserve exact official Chinese flow baseNames for confirmed UUIDs. Data sources support only their declared use, not transferred numeric recipes or readiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Downstream dyeing or pigment-supply modelling with complete evidence and compatible specification, preserving natural route and whole-commodity composition |
| excluded_use | Whole classification-leaf representation, pure-indigotin or generic colour-strength equivalence, paste/formulation substitution, cosmetic/medical safety, carbon neutrality or scientific-approval claims |
| required_metadata | All qualifiers; raw Q acceptance; new/old cohort genealogy; stocks and burden history; actual providers, treatments and allocation |
| required_quality_disclosure | Sampling/instrument uncertainty, scope coverage, identity/quantity gaps, source limitations and balance residuals |
| update_trigger | Change in species, additives, route, drying energy, commodity composition, acceptance gate, provider or treatment |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| hartl-indigo-2024 | literature | Hartl, A.; Polleichtner, A.; Novak, J. (2024). “Purplish Blue” or “Greenish Grey”? Indigo Qualities and Extraction Yields from Six Species. Plants 13(7), 918. https://doi.org/10.3390/plants13070918 ; sections 1, 3, 4.1.3 and 4.3 | Whole natural pigment, counterevidence on lime dilution, lime-free aqueous/aeration and recovery states; multi-species case conditions are not default yield, recipe or industrial activity |
| dutta-indigo-2017 | literature | Dutta, S.; Roychoudhary, S.; Sarangi, B.K. (2017). Effect of different physico-chemical parameters for natural indigo production during fermentation of Indigofera plant biomass. 3 Biotech 7, 322. https://doi.org/10.1007/s13205-017-0923-2 ; Introduction; Materials and methods; Results and discussion | Indigofera precursor hydrolysis/oxidation species, solid recovery/drying and distinction between crude product and analytical constituent; analytical DMSO is not a manufacturing solvent; no experimental temperature/yield/water-ratio default |
| eu-cww-2016 | official_guidance | European Commission JRC (2016). Best Available Techniques Reference Document for Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector. JRC103096, BAT 2, printed p.543 (PDF p.573). https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Independent process/reaction and wastewater/waste-gas inventory method; no legal applicability claim, pigment emission factor or mandatory treatment efficiency |
| eu-pef-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, section 4.5, printed/PDF pp.63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General multifunctionality hierarchy for subdivision, system expansion and justified allocation; no full-PEF claim, fixed coproduct share or automatic substitution credit |
| teanglum-indigo-wash-2012 | literature | Teanglum, A.; Teanglum, S.; Saithong, A. (2012). Selection of Indigo Plant Varieties and Other Plants that Yield Indigo Dye. Procedia Engineering 32, 184–190. https://doi.org/10.1016/j.proeng.2012.01.1255 ; original sections 1 and 2.2, printed pp.184–185 (PDF pp.1–2), with section 2.3 as separate plant controls | Laboratory four-variety Indigofera tinctoria aliquot/yield-isolation method: remove leaves, filter an oxidised-liquor aliquot, water-wash its recovered pigment residue and heat to constant dry mass; not a leaf wash or industrial manufacturing qualification. Other-species controls, inconsistent abstract/body yields, wash count, temperature/time and laboratory filter medium are not industrial recipes, purity proof or energy defaults |
