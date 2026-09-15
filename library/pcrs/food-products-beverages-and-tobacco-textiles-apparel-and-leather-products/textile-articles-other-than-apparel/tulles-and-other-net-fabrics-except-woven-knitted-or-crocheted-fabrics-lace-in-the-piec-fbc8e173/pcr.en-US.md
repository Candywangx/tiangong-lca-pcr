---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tulles-and-other-net-fabrics-except-woven-knitted-or-crocheted-fabrics-lace-in-the-piec-fbc8e173
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Tulles and Other Net Fabrics, Except Woven, Knitted or Crocheted Fabrics; Lace in the Piece, in Strips or in Motifs

## 1. Scope and Applicability

This PCR applies to the factory-gate production of tulle and other open net fabrics made by non-woven, non-knitted and non-crocheted thread-interlacing routes, and to lace supplied in the piece, in strips or in motifs. It covers bobbinet or comparable twisted-thread net formation, bobbin lace and other lace routes within the CPC 27912 semantic boundary, including route-applicable preparation, wet processing, finishing, inspection, trimming and packaging. The declared dataset starts with purchased yarn or thread at the reporting-facility gate and ends with saleable packed product at that gate.

Woven gauze or mesh scrim, knitted or crocheted net and lace, embroidery classified separately, narrow woven trimmings, knotted netting or made-up nets, nonwovens, coated or impregnated fabrics classified elsewhere, and made-up apparel or articles are excluded. A foreground package shall identify one concrete production route and shall not combine materially different fibre systems, formation technologies, finishing routes or sites unless the aggregation is disclosed and satisfies this PCR's allocation and quality rules. The CPC scope is supported by `unsd-cpc-3-0-2025`; fibre identity and composition disclosure are supported by `eu-textile-fibre-regulation-1007-2011` and `iso-1833-1-2020`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tulles-and-other-net-fabrics-except-woven-knitted-or-crocheted-fabrics-lace-in-the-piec-fbc8e173 |
| classification_refs | CPC 3.0: 27912 (exact) |
| covered_products | Tulle and other non-woven, non-knitted and non-crocheted net fabrics; bobbinet and comparable twisted-thread net; lace in the piece, in strips or in motifs |
| excluded_products | Woven fabrics and mesh scrims; knitted or crocheted fabrics; embroidery; narrow woven fabrics and trimmings; knotted netting and made-up nets; nonwovens; coated or impregnated fabrics classified elsewhere; made-up apparel and articles |
| representative_product | One saleable factory-gate batch of finished CPC 27912 tulle, net fabric or lace with declared fibre composition, construction, finish and market state |
| production_route | Purchased yarn or thread receipt; non-woven/non-knitted/non-crocheted net or lace formation; route-applicable scouring, bleaching, dyeing, washing and finishing; inspection, trimming and packaging |
| market_state | Finished product, manufactured; dry and conditioned for mass determination; in the piece, strip or motif form; packed at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate provision of finished tulle, non-woven/non-knitted/non-crocheted net fabric, or lace in the piece, in strips or in motifs |
| How much | 1 kg net mass of saleable finished product, excluding transport packaging |
| How well | Conforming to the declared fibre composition, route, construction, dimensions, finish, colour, quality grade and moisture-conditioning method |
| How long or cycle | One completed production lot or campaign within the declared reporting period |
| reference_flow_link | The reference amount equals the conditioned net mass of accepted saleable CPC 27912 output from `integrated_net_lace_manufacturing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tulles and other net fabrics, except woven, knitted or crocheted fabrics, lace in the piece, in strips or in motifs `50009892-d697-4047-8df6-0d07a25cf0bb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre names and mass fractions; yarn or thread specification; tulle, net or lace product form; formation technology; mesh or pattern designation; width and piece/strip/motif dimensions; mass per unit area or mass per unit length where contractually relevant; colour and dye route; applied finish and finish add-on; moisture-conditioning method; quality grade; production site; reporting period; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted saleable reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass after the declared conditioning procedure; exclude pallets, cartons, cores and wrapping from the 1 kg reference amount. Record gross, tare and net mass evidence. |
| `conditioning_basis` | product, yarn and offcut mass measurements | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Condition specimens or lots under ISO 139 or a declared contractually equivalent atmosphere before using measured mass for product qualification or mass-balance validation; disclose any alternative atmosphere. |
| `area_length_conversion` | records collected in m2 or linear m | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert area or length records to mass only with lot-specific measured mass per unit area or mass per unit length and declared width; do not substitute a generic fabric factor. |
| `fibre_composition_basis` | mixed-fibre product and material inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | mass fraction | State fibre names and dry-mass fractions from supplier evidence or an applicable ISO 1833 method; keep finish/add-on mass separate when it is not included in the stated fibre composition. |
| `water_mass_volume` | process water and wastewater | Mass or volume | kg or m3 | Preserve the metered unit. Convert volume to mass only with a documented density and temperature basis; never assume that chemical baths or concentrated wastewater have the density of pure water. |
| `energy_carrier_separation` | electricity, natural gas and purchased steam | Energy or mass | kWh, MJ or kg | Preserve each metered carrier as a separate exchange and document every conversion factor; do not combine electricity, fuel and steam into one energy row. |

## 5. System Boundary

The foreground boundary includes receipt and internal handling of yarn, thread, chemicals and packaging; bobbin winding or equivalent route-specific preparation; non-woven/non-knitted/non-crocheted net or lace formation; route-applicable washing, scouring, bleaching, dyeing, rinsing, drying, heat-setting or chemical finishing; inspection, mending where performed, trimming, packing; on-site utilities; internal material handling; direct emissions; and on-site waste and wastewater handling. Upstream production of purchased yarn, chemicals, energy, water and packaging is represented by upstream datasets. Capital goods, employee travel, product use and downstream end-of-life are outside this factory-gate dataset unless the study goal explicitly extends the boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased yarn or thread lots, purchased auxiliaries and packaging are received at the reporting-facility gate with supplier identity, quantity, fibre/composition specification and upstream dataset reference. |
| starting_condition_role | The received yarn or thread is the first foreground-controlled material state; upstream fibre, polymer, spinning, filament and transport burdens remain represented by linked upstream datasets. |
| product_classification_scope | Only products satisfying the CPC 27912 boundary are reference products; woven, knitted, crocheted, embroidered, knotted-net, made-up-article and separately classified coated-fabric outputs are excluded. |
| recursive_input_rule | A purchased CPC 27912 input used in another CPC 27912 product shall be recorded once as an upstream product input with its supplier dataset; its manufacture shall not be recursively reconstructed inside this foreground dataset. |
| upstream_dataset_requirement | Each purchased yarn/thread, chemical, energy carrier, water supply and packaging input requires a geographically and technologically representative upstream dataset or an explicit documented data gap. |
| disclosure | Declare fibre composition, formation route, wet-processing and finishing applicability, outsourced operations, site, period, allocation basis, rejected output, wastewater route, packaging state and all excluded operations. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all foreground packages | Include all on-site operations from receipt of yarn/thread through packed saleable product and all associated direct wastes and emissions; identify outsourced operations and link their datasets rather than silently excluding them. | `ec-jrc-textiles-bref-2023`; `eu-pef-2021-2279` |
| `boundary_route_specificity` | formation, wet processing and finishing | Mark each route-applicable operation as included or demonstrably not applicable; absence requires product and process evidence, not a zero inserted without explanation. | `irvine-ruskey-bobbin-lace-2014`; `ec-jrc-textiles-bref-2023` |
| `boundary_no_recursive_rebuild` | purchased CPC 27912 intermediates | Stop foreground tracing at the declared supplier product and require an upstream dataset, preventing double counting of the same manufacturing steps. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_net_lace_manufacturing` | Integrated tulle, net-fabric or lace manufacturing | required | Always; operation-level applicability for preparation, formation, wet processing, finishing and packing must be declared | Foreground production from purchased yarn/thread to packed factory-gate CPC 27912 product | 1 kg accepted conditioned net product output |

### Process: Integrated tulle, net-fabric or lace manufacturing (`integrated_net_lace_manufacturing`)

This process is an aggregated foreground unit process. Its operation ledger shall separately identify yarn/thread preparation, bobbinet or other non-woven/non-knitted/non-crocheted formation, any wet processing, drying/setting/finishing, inspection/trimming and packaging. Bobbin-lace formation by braided threads is supported by `irvine-ruskey-bobbin-lace-2014`; cross-cutting preparation, pretreatment, dyeing and finishing operations are supported by `ec-jrc-textiles-bref-2023`.

#### Inputs

##### Product flows

###### Polyester filament yarn (`polyester_filament_yarn_input`)

Polyester filament yarn is recorded only when the declared product composition contains this yarn. Each materially different grade, recycled content, linear density or supplier lot is a separate foreground exchange.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record accepted production issues plus attributable preparation and formation losses from weigh tickets, warehouse issues and lot reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_and_issues`
- Sources: `eu-textile-fibre-regulation-1007-2011`

###### Polyamide filament yarn (`polyamide_filament_yarn_input`)

Polyamide filament yarn is recorded only when used in the declared product; grades and supplier lots shall not be merged if their upstream datasets differ materially.

- Selected flow: Polyamide filament yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record accepted production issues plus attributable preparation and formation losses from weigh tickets, warehouse issues and lot reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_and_issues`
- Sources: `eu-textile-fibre-regulation-1007-2011`

###### Cotton thread (`cotton_thread_input`)

Cotton thread is recorded only when used in the declared tulle, net or lace route, with supplier specification and moisture basis retained.

- Selected flow: Cotton thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record accepted production issues plus attributable preparation and formation losses from weigh tickets, warehouse issues and lot reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_and_issues`
- Sources: `eu-textile-fibre-regulation-1007-2011`; `iso-139-2005`

###### Silk yarn (`silk_yarn_input`)

Silk yarn is recorded only for a declared silk-containing route; supplier lot, yarn count and conditioning basis are retained.

- Selected flow: Silk yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record accepted production issues plus attributable preparation and formation losses from weigh tickets, warehouse issues and lot reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_and_issues`
- Sources: `eu-textile-fibre-regulation-1007-2011`; `iso-139-2005`

###### Viscose filament yarn (`viscose_filament_yarn_input`)

Viscose filament yarn is recorded only when present in the declared fibre composition; supplier lot and filament specification are retained.

- Selected flow: Viscose filament yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record accepted production issues plus attributable preparation and formation losses from weigh tickets, warehouse issues and lot reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_and_issues`
- Sources: `eu-textile-fibre-regulation-1007-2011`

###### Medium-voltage electricity (`medium_voltage_electricity_input`)

Grid or supplier electricity consumed by winding, formation, wet-processing, drying, finishing, inspection, ventilation and packing is separately metered or allocated from validated submeter records.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record meter difference for the reporting lot or allocate a shared meter using validated machine-hours and rated-load evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Natural gas (`natural_gas_input`)

Natural gas crossing the site boundary is recorded when used in boilers, dryers, ovens or heat-setting equipment; it is not combined with purchased steam or electricity.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record custody-transfer or calibrated submeter quantity and lower/higher heating value basis for the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Purchased steam (`purchased_steam_input`)

Purchased steam is recorded only when it crosses the facility boundary; pressure, temperature, condensate return and supplier shall be declared.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Record supplier meter or invoice quantity and convert only with documented steam conditions and enthalpy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Process water (`process_water_input`)

Water entering scouring, bleaching, dyeing, washing, rinsing, finishing, cleaning or on-site treatment is recorded separately from non-contact cooling water when meters permit.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record calibrated meter differences or validated batch make-up volumes for the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Sodium hydroxide is recorded as a distinct chemical exchange when used in scouring, pH control, mercerising or cleaning; supplied concentration shall be declared.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied solution
- Amount rule: Record issue mass from batch sheets and chemical inventory reconciliation; retain supplied concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

###### Hydrogen peroxide (`hydrogen_peroxide_input`)

Hydrogen peroxide is recorded when used for bleaching or cleaning; supplied concentration and stabiliser system are disclosed separately.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied solution
- Amount rule: Record issue mass from batch sheets and chemical inventory reconciliation; retain supplied concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

###### Sodium chloride (`sodium_chloride_input`)

Sodium chloride is recorded when used in a declared dyeing or finishing recipe and is not combined with other salts.

- Selected flow: Sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record issue mass from batch sheets and chemical inventory reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `us-epa-textile-effluent-2004`

###### Polydimethylsiloxane textile softener (`pdms_softener_input`)

Polydimethylsiloxane softener is recorded only when the declared finishing recipe uses that formulation; active content and carrier are retained.

- Selected flow: Polydimethylsiloxane textile softener
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied formulation
- Amount rule: Record recipe issue mass and reconcile against chemical stock movement for the lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `ec-jrc-textiles-bref-2023`

###### Styrene-acrylate binder dispersion (`styrene_acrylate_binder_input`)

Styrene-acrylate binder dispersion is recorded when applied to stabilise the declared net or lace product; solids content and carrier are retained.

- Selected flow: Styrene-acrylate binder dispersion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied dispersion
- Amount rule: Record recipe issue mass and reconcile against chemical stock movement for the lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `ec-jrc-textiles-bref-2023`

###### Low-density polyethylene packaging film (`ldpe_packaging_film_input`)

LDPE film used to wrap the saleable product is recorded separately from cartons, cores and pallets; thickness and recycled content are declared.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record packaging issue mass or calculate from counted rolls/packages using verified item mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

###### Corrugated board carton (`corrugated_carton_input`)

Corrugated cartons used for saleable units are recorded as a separate exchange with board grade and recycled content.

- Selected flow: Corrugated board carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record packaging issue mass or calculate from carton counts using verified item mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

Any yarn, thread, dye, pigment, auxiliary, finish, solvent, fuel, refrigerant, core, pallet or packaging component not represented above but actually crossing the foreground boundary shall be added to the concrete foreground package as its own chemically or physically specific atomic exchange. It shall not be placed in a plural or selector row.

##### Waste flows

No waste input is part of the default manufacturing route. If recovered material enters as a waste input, the concrete foreground package shall add one treatment-route-specific atomic waste exchange and disclose its quality and burden assignment.

##### Elementary flows

No elementary input is prescribed. Resource elementary flows are represented in linked upstream datasets unless directly abstracted by the reporting facility, in which case each resource and compartment is added as one atomic foreground exchange.

#### Outputs

##### Product flows

###### Accepted CPC 27912 product (`finished_net_lace_product_output`)

The accepted, conditioned and packed factory-gate output is the quantitative reference. Its UUID is used because the exact CPC 27912 Product flow with Mass reference property was confirmed by both hybrid discovery and a state-100 direct read.

- Selected flow: Tulles and other net fabrics, except woven, knitted or crocheted fabrics, lace in the piece, in strips or in motifs `50009892-d697-4047-8df6-0d07a25cf0bb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Set to the accepted conditioned net product mass; normalize the dataset to exactly 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_and_quality`
- Sources: `unsd-cpc-3-0-2025`; `iso-139-2005`

##### Waste flows

###### Polyester textile offcuts (`polyester_textile_offcuts_output`)

Polyester offcuts, thread ends and formation rejects leaving the foreground process for recovery or disposal are recorded only for polyester-containing routes.

- Selected flow: Polyester textile offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated polyester offcuts by treatment route and reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `eu-pef-2021-2279`

###### Polyamide textile offcuts (`polyamide_textile_offcuts_output`)

Polyamide offcuts, thread ends and formation rejects leaving the foreground process are segregated from other fibre wastes when their treatment routes differ.

- Selected flow: Polyamide textile offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated polyamide offcuts by treatment route and reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `eu-pef-2021-2279`

###### Cotton textile offcuts (`cotton_textile_offcuts_output`)

Cotton offcuts, thread ends and formation rejects leaving the foreground process are recorded separately from synthetic-fibre wastes.

- Selected flow: Cotton textile offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated cotton offcuts by treatment route and reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `eu-pef-2021-2279`

###### Silk textile offcuts (`silk_textile_offcuts_output`)

Silk offcuts, thread ends and formation rejects leaving the foreground process are recorded only for silk-containing routes.

- Selected flow: Silk textile offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated silk offcuts by treatment route and reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `eu-pef-2021-2279`

###### Viscose textile offcuts (`viscose_textile_offcuts_output`)

Viscose offcuts, thread ends and formation rejects leaving the foreground process are recorded only for viscose-containing routes.

- Selected flow: Viscose textile offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated viscose offcuts by treatment route and reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `eu-pef-2021-2279`

###### Off-spec finished CPC 27912 product (`off_spec_finished_product_output`)

Finished product rejected after inspection is recorded separately from formation offcuts and by its actual recovery, rework or disposal route.

- Selected flow: Off-spec finished CPC 27912 product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record conditioned rejected mass from quality-release and waste-transfer records; do not subtract reworked material twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_and_quality`
- Sources: `eu-pef-2021-2279`

###### Textile process wastewater (`textile_process_wastewater_output`)

Wastewater transferred to on-site or off-site treatment is one waste exchange distinguished by the declared treatment route; separate routes require separate concrete rows.

- Selected flow: Textile process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharge meter difference or validated batch discharge volume for the reporting lot and link the sampled composition record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

###### Textile wastewater-treatment sludge (`wastewater_sludge_output`)

Sludge leaving on-site wastewater treatment is recorded only when treatment is inside the foreground boundary; wet or dry basis and destination are declared.

- Selected flow: Textile wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg wet sludge
- Amount rule: Record dispatch scale mass and solids fraction for each treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

##### Elementary flows

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil_output`)

Direct fossil carbon dioxide is recorded when fuel combustion occurs inside the foreground boundary; supplier fuel quantity and the declared measured or jurisdiction-approved calculation evidence are retained.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record continuously measured emissions or a facility-approved result calculated from the collected fuel record; do not use an uncited PCR default factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_records`

###### Chemical oxygen demand to water (`chemical_oxygen_demand_water_output`)

COD is recorded as a direct elementary emission only for discharge leaving the foreground boundary to the receiving environment; a transfer to treatment remains a waste flow.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg COD
- Amount rule: Record laboratory load or calculate from sampled concentration and contemporaneous measured discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_records`
- Sources: `us-epa-textile-effluent-2004`

###### Total nitrogen to water (`total_nitrogen_water_output`)

Total nitrogen is recorded only for direct discharge to the receiving environment and only when monitored or required by the applicable permit.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N
- Amount rule: Record laboratory load or calculate from sampled concentration and contemporaneous measured discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Total phosphorus to water (`total_phosphorus_water_output`)

Total phosphorus is recorded only for direct discharge to the receiving environment and only when monitored or required by the applicable permit.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg P
- Amount rule: Record laboratory load or calculate from sampled concentration and contemporaneous measured discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conditioned reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_records`
- Sources: `ec-jrc-textiles-bref-2023`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared production and utilities | Prefer submetering, batch records and physically separated inventories so allocation is avoided. Do not allocate avoidable material losses or rework away from the lot that caused them. | `eu-pef-2021-2279` |
| `allocation_physical` | shared equipment or meters serving multiple products | When separation is not feasible, allocate electricity, fuel, steam, water and common consumables using the measured causal driver: machine-hours adjusted by measured load, bath volume, dryer throughput or conditioned product mass, in that order of relevance. Record the denominator and coverage. | `eu-pef-2021-2279` |
| `allocation_economic_exception` | multiple valuable outputs lacking a defensible physical relationship | Use economic allocation only after documenting why subdivision and physical causality fail; use contemporaneous factory-gate values, disclose price period and currency, and test sensitivity. | `eu-pef-2021-2279` |
| `allocation_rework` | internal rework | Keep the original material and energy burdens in the reporting lot; record only additional rework inputs and do not count the same intermediate mass as a co-product. | `eu-pef-2021-2279` |
| `allocation_waste_recovery` | offcuts, rejects, sludge and packaging waste | Report waste mass and destination separately. Apply the selected study's documented waste/recycling method consistently; do not credit recovery without a named downstream dataset and explicit burden/benefit boundary. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts_and_issues` | `integrated_net_lace_manufacturing` | fibre-specific yarn/thread inputs | supplier certificate, purchase receipt, warehouse issue, return and lot genealogy | material identity; fibre name; supplier; lot; yarn/thread specification; dry/conditioned basis; received mass; issued mass; returned mass; recycled content; upstream dataset | Reconcile supplier and warehouse records to production-lot genealogy; verify fibre composition by applicable ISO 1833 analysis when claims are material or disputed. | kg | each receipt and production issue | complete reporting period with opening and closing inventory | all reporting-site stores and production lines | Sum net issues by exact material identity; keep materially different upstream datasets separate; normalize after accepted output is known. | supplier certificate; calibrated scale record; inventory reconciliation; composition test report; lot trace |
| `cp_energy_records` | `integrated_net_lace_manufacturing` | electricity, natural gas and purchased steam | utility meter, submeter, invoice, batch and machine log | carrier; meter id; opening/closing reading; unit; timestamp; machine-hours; load evidence; steam conditions; heating value; lot link | Prefer lot-level submeters; otherwise reconcile site meters to invoices and allocate using a validated causal driver. | kWh; MJ; kg steam | meter interval and each lot/campaign | complete reporting period including shutdown and start-up assigned consistently | all on-site operations inside boundary | Subtract opening from closing readings, correct documented meter resets, subtract excluded loads, then allocate and normalize by accepted mass. | calibration status; invoice reconciliation; meter coverage; allocation worksheet |
| `cp_water_and_wastewater_records` | `integrated_net_lace_manufacturing` | process water and wastewater | supply/discharge meter, batch sheet, sampling and treatment-transfer record | source; meter id; volume; timestamp; bath id; operation; discharge destination; sample id; concentration; treatment route | Meter supply and discharge; retain batch make-up and dump records; pair representative samples with contemporaneous flow. | m3; mg/L; kg | each batch and meter interval; sampling per permit or control plan | complete reporting period and representative operating states | all wet-processing, cleaning and on-site treatment operations | Reconcile water balance; aggregate by source and destination; calculate loads only from measured volume and concentration. | meter calibration; chain of custody; laboratory accreditation; water-balance closure |
| `cp_chemical_ledger` | `integrated_net_lace_manufacturing` | each atomic process chemical | recipe, batch issue, return, purchase and stock record | chemical identity; CAS or formulation id; supplier; concentration/solids; lot; issued mass; returned mass; bath id; operation; safety data sheet | Reconcile recipe issues and returns to stock movement; create one exchange per actual chemical or supplied formulation. | kg supplied product | each batch issue/return | complete reporting period | all chemical stores and process lines inside boundary | Sum net issue by exact identity and concentration; do not aggregate dyes, salts, auxiliaries or finishes into plural rows. | signed batch sheet; stock reconciliation; supplier SDS/technical sheet; scale calibration |
| `cp_packaging_records` | `integrated_net_lace_manufacturing` | each packaging component | issue record, bill of materials and item mass check | component identity; material; grade; recycled content; count; unit mass; issued mass; returned mass; product lot | Weigh packaging or multiply verified item mass by count; keep film, carton, core and pallet components separate. | kg; count | each packing lot | complete reporting period | reporting-site packing operations | Sum net issues by component and normalize by accepted product mass. | approved bill of materials; item mass sample; issue/return reconciliation |
| `cp_finished_product_and_quality` | `integrated_net_lace_manufacturing` | accepted and off-spec finished product | production completion, conditioned mass, inspection, release, rework and rejection record | lot; product form; formation route; composition; dimensions; mass; conditioning atmosphere; accepted mass; rejected mass; rework mass; defect reason; packaging tare | Condition and weigh product; reconcile accepted, rejected and reworked quantities to release records. | kg; m; m2; count | each production lot | complete reporting period | all lines and quality-release points inside boundary | Sum accepted conditioned net mass by declared product; exclude packaging tare; prevent double counting of rework. | calibrated scale; ISO 139 conditioning record; inspection report; release authorization; mass reconciliation |
| `cp_solid_waste_records` | `integrated_net_lace_manufacturing` | each fibre-specific offcut and sludge waste | line collection, scale ticket, waste manifest and treatment receipt | waste identity; fibre/material; wet/dry basis; mass; source lot; destination; recovery/disposal route; transporter; treatment dataset | Segregate and weigh at collection or dispatch; link each route to the generating lots. | kg | each container or dispatch | complete reporting period | all production and on-site treatment areas | Sum by exact waste identity and destination; allocate shared containers by weighed composition, not assumed percentages. | calibrated scale; manifest; receiving receipt; solids test for sludge; route reconciliation |
| `cp_direct_emissions_records` | `integrated_net_lace_manufacturing` | each direct air or water elementary flow | continuous monitor, stack test, permit sample, fuel calculation or accredited laboratory result | substance; compartment; location; timestamp; concentration; flow/volume; load; method; detection limit; linked fuel or discharge record | Use measured load where available; otherwise calculate only with a documented approved factor and collected activity record. | kg; mg/L; mg/Nm3 | monitoring interval required by permit/control plan | representative operating conditions across reporting period | all direct release points inside boundary | Integrate measured load or concentration times contemporaneous flow; treat non-detects by the declared laboratory/permit rule. | calibration; chain of custody; accredited method; permit report; calculation audit trail |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory exchange | normalized amount = attributable reporting-period exchange / accepted conditioned net product mass | exchange amount; accepted net product mass | exchange per 1 kg reference product | `eu-pef-2021-2279`; `iso-139-2005` |
| `calc_net_material_issue` | yarn/thread, chemical and packaging inputs | net issue = opening inventory + receipts - closing inventory - documented returns; reconcile to lot issues before normalization | inventory and receipt/return records | net material input by exact identity | `eu-pef-2021-2279` |
| `calc_area_length_to_mass` | product records in m2 or m | mass = measured area or length × lot-specific measured mass per unit area or length; width is required for conversions that use area | measured dimension; lot-specific factor; width where relevant | conditioned product mass | `iso-139-2005` |
| `calc_shared_utility_allocation` | shared utility meter | attributable utility = shared-meter total × validated causal driver for target lots / sum of the same driver for all served lots | meter total; machine-hours/load, bath volume, throughput or mass driver | allocated carrier amount | `eu-pef-2021-2279` |
| `calc_discharge_load` | monitored water emission | load = contemporaneous discharge volume × laboratory concentration with explicit unit conversion | discharge volume; concentration; sample representativeness | kg substance or parameter to water | `us-epa-textile-effluent-2004` |
| `calc_mass_balance` | material system | reconcile conditioned material inputs with accepted product, off-spec product, fibre-specific offcuts, retained inventory and documented emissions/add-on changes; investigate unexplained difference rather than forcing closure | material issues; accepted/rejected product; wastes; inventory change; finish add-on | mass-balance residual and explanation | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and material flows | Preserve exact fibre names, composition, yarn/thread grade, route, finish, supplier and lot; prohibit a generic textile-material row when the actual identity is available. | supplier specification; composition test; lot genealogy; product release record |
| `dq_temporal` | all foreground records | Use one continuous representative reporting period, normally at least twelve months or the complete campaign for campaign production; disclose start-up, shutdown and abnormal-event treatment. | dated record coverage; production calendar; exception log |
| `dq_geographical` | foreground and upstream data | Foreground data shall represent the declared site; upstream datasets shall match supplier geography and technology where material, with gaps disclosed. | site identifier; supplier origin; upstream dataset metadata; gap register |
| `dq_completeness` | all boundary exchanges | Reconcile material, utility, water, chemical, waste and product ledgers; document every excluded or not-applicable operation and all unmonitored direct releases. | reconciliation worksheets; meter coverage; permit inventory; exclusion register |
| `dq_measurement` | meters, scales and laboratory data | Use calibrated instruments and documented methods; retain detection limits, uncertainty or accuracy information and sampling representativeness. | calibration certificates; laboratory reports; sampling plan; QA/QC records |
| `dq_allocation` | shared records | Document source total, driver, denominator, affected products and sensitivity; allocation factors shall sum to one for every shared record. | allocation workbook; meter and driver evidence; sensitivity check |
| `dq_versioning` | published dataset | Update when fibre composition, supplier, formation technology, wet-processing recipe, finish, energy system, wastewater route, site, allocation basis or representative period changes materially. | change-control record; annual representativeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | product identity | Reject a package unless the reference product is within CPC 27912 and exclusions are checked; require declared product form, formation route, fibre composition, finish and market state. | `unsd-cpc-3-0-2025`; `eu-textile-fibre-regulation-1007-2011` |
| `validate_reference_flow` | reference quantity | Require exactly 1 kg accepted conditioned net product, separate packaging tare, the verified product-flow UUID and Mass flow-property UUID, plus every required qualifier. | `iso-139-2005` |
| `validate_atomic_exchanges` | inventory | Reject plural collections, combined utilities, selector instructions and unresolved placeholder identities. Every concrete material, chemical, energy carrier, packaging component, waste and elementary emission shall be one atomic row with route applicability. | `ec-jrc-textiles-bref-2023`; `eu-pef-2021-2279` |
| `validate_uuid_evidence` | Tiangong references | Accept a UUID only after hybrid discovery and state-100 direct read agree on semantic identity, public state, flow type, classification where applicable, and reference property; otherwise omit it and retain the row-level rejection reason. | `unsd-cpc-3-0-2025` |
| `validate_foreground_amounts` | all inventory rows | Require a collected foreground record or a value calculated from collected records and a linked protocol. Reject AI-authored or uncited default quantity ranges. | `eu-pef-2021-2279` |
| `validate_route_coverage` | process boundary | Require an operation ledger for preparation, formation, wet processing, finishing, inspection/trimming and packaging; each operation shall be included, outsourced with a dataset, or demonstrably not applicable. | `irvine-ruskey-bobbin-lace-2014`; `ec-jrc-textiles-bref-2023` |
| `validate_mass_balance` | materials and outputs | Require reconciled yarn/thread and finish inputs against accepted product, rejects, fibre-specific offcuts, inventory change and documented releases; investigate material residuals. | `eu-pef-2021-2279` |
| `validate_wastewater` | wet-processing routes | Require metered or batch-reconciled water, declared chemical identities, wastewater destination and applicable monitoring; do not report transfers to treatment as direct elementary emissions. | `ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004` |
| `validate_allocation` | shared records | Require the allocation hierarchy, causal driver, factor-sum check and disclosure; reject unexplained allocation or unsupported recycling credit. | `eu-pef-2021-2279` |
| `validate_bilingual_alignment` | PCR implementation | English and Chinese implementations shall preserve identical ordered process ids, row ids, rule ids, controlled tokens, source ids and UUIDs. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground dataset for a declared CPC 27912 tulle, non-woven/non-knitted/non-crocheted net fabric, or lace product |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for apparel, furnishings, components or other products that consume the declared textile, provided the product and route qualifiers match |
| allowed_use | Product-system modelling with matching fibre composition, formation technology, finish, geography, period, quality grade, packaging state and wastewater route |
| excluded_use | Generic use for woven, knitted, crocheted, embroidered, knotted-net, nonwoven, coated-fabric or made-up-article products; substitution across materially different fibre or finish routes without sensitivity analysis |
| required_metadata | PCR id; product-flow UUID; product form; CPC scope; fibre names/fractions; yarn/thread grades; formation route; dimensions and mass factor; wet-processing/finish route; site and geography; period; accepted/rejected mass; allocation; wastewater and waste destinations; upstream dataset references; packaging state |
| required_quality_disclosure | Foreground share; record and meter coverage; conditioning method; composition evidence; allocation factors; mass-balance residual; sampling and laboratory methods; unresolved UUIDs/data gaps; exclusions; representativeness and uncertainty evidence |
| update_trigger | Material change in fibre composition, supplier/upstream dataset, formation technology, recipe or finish, utility system, wastewater treatment, allocation, site, product specification, or representative reporting period; otherwise review at least annually |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact CPC 27912 scope and exclusions from adjacent textile categories |
| `ec-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry | Fibre preparation, pretreatment, dyeing, finishing, energy, water, chemical, wastewater and emissions process coverage |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng | Functional unit, company-specific data, data quality, allocation, cut-off, waste/recycling and dataset rules |
| `eu-textile-fibre-regulation-1007-2011` | standard | Regulation (EU) No 1007/2011 on textile fibre names and related labelling and marking of fibre composition, https://eur-lex.europa.eu/eli/reg/2011/1007/oj/eng | Fibre names, composition disclosure, textile-product identity and quantitative analysis requirements |
| `iso-139-2005` | standard | ISO 139:2005, *Textiles — Standard atmospheres for conditioning and testing*, https://www.iso.org/standard/35179.html | Conditioning basis for product, yarn and waste mass evidence |
| `iso-1833-1-2020` | standard | ISO 1833-1:2020, *Textiles — Quantitative chemical analysis — Part 1: General principles of testing*, https://www.iso.org/standard/74881.html | Fibre-mixture composition verification |
| `irvine-ruskey-bobbin-lace-2014` | literature | Irvine, V.; Ruskey, F. (2014), *Developing a mathematical model for bobbin lace*, Journal of Mathematics and the Arts 8(3-4), 95-110, https://doi.org/10.1080/17513472.2014.982938; open full text: https://arxiv.org/abs/1406.1532 | Bobbin-lace formation as braiding of multiple threads and route-specific construction evidence |
| `us-epa-textile-effluent-2004` | official_guidance | U.S. EPA, *Technical Support Document for the 2004 Effluent Guidelines Program Plan*, textile manufacturing review, https://www.epa.gov/sites/default/files/2015-11/documents/2004_effluent-guidelines-plan_tsd.pdf | Wet-process wastewater sources, chemical identities and discharge-load collection |
