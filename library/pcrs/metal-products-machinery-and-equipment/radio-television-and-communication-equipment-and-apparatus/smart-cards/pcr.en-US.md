---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.smart-cards
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Smart cards

## 1. Scope and Applicability

This PCR covers physical smart cards supplied as finished or explicitly declared unpersonalized electronic carriers for payment, identity, telecommunications, access, transit, and Internet-of-Things applications. A conforming foreground data package must identify the card interface as contact, contactless, or dual-interface and must define one concrete product profile rather than a category-average card.

The foreground boundary may include card-body preparation, contactless antenna or inlay manufacture, chip or module attachment, layer assembly and lamination, printing and cutting, electrical and visual testing, personalization, and packaging. Each data package must state whether the reference product is unpersonalized, pre-personalized, or fully personalized and which of these operations occur inside the reported boundary.

This PCR does not cover bare semiconductor dies or wafers, standalone integrated-circuit modules, magnetic-stripe-only cards, card readers or terminals, mobile-network subscriptions, remote SIM provisioning, downloadable eSIM profiles, or other services. A removable physical UICC/SIM card may be covered only as a declared physical smart-card product. Embedded or integrated eUICC hardware and eSIM service systems require their own product and service boundaries. Evidence for a contact payment card, identity credential, removable SIM, or one card size must not be extrapolated to the entire category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.smart-cards |
| classification_refs | CPC 3.0: 47920, Smart cards, exact mapping context |
| covered_products | Physical contact, contactless, and dual-interface smart cards; finished or explicitly declared unpersonalized smart-card carriers for payment, identity, telecommunications, access, transit, and IoT applications |
| excluded_products | Bare chips and wafers; standalone IC modules; magnetic-stripe-only cards; card readers and terminals; embedded or integrated eUICC hardware outside a card product; eSIM profiles, subscriptions, remote-provisioning platforms, and other services |
| representative_product | A finished smart card at the manufacturing plant gate with a declared interface, card-body material system, chip/module configuration, antenna configuration where applicable, dimensions, mass, personalization state, and application class |
| production_route | Declared combination of card-body preparation, antenna/inlay integration when applicable, chip/module attachment, layer assembly and lamination, printing and cutting, testing, personalization when in scope, and packaging |
| market_state | Finished or explicitly declared unpersonalized physical smart cards at the stated plant gate; not an averaged service or a bare electronic component |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished smart cards conforming to one declared product profile at the stated plant gate |
| How much | 1 kg of accepted smart cards, excluding packaging unless packaging is explicitly included and separately reported |
| How well | Meets the declared physical, interface, electrical, visual, personalization, and quality-acceptance specification |
| How long or cycle | One production lot or reporting campaign; service life is disclosed separately and is not the normalization basis |
| reference_flow_link | Accepted reference-product output from `p_final_test_packaging`, or from `p_lamination_print_cut` when personalization and separate final packaging are outside the declared boundary |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Smart cards `da4b294a-b663-486c-8e61-05dc1a40ad40` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | interface: contact/contactless/dual-interface; card-body material and layer construction; chip/module type and whether supplied as die, module, or inlay; antenna conductor, substrate, and integration route when applicable; single-chip or multi-chip implementation; dimensions and thickness; measured unit mass; personalization state and included personalization operations; application class; accepted-card count and mass; scrap, reject, and rework count and mass; packaging inclusion; manufacturing geography and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference-product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground inventories to 1 kg of accepted smart cards. Derive mass from calibrated lot weighing or accepted-card count multiplied by a statistically representative measured unit mass. |
| `card_dimensions` | physical reference-product specification | Dimension | mm | Report length, width, and thickness for the declared card form and the applicable specification or drawing. Do not assume ID-1 dimensions for SIM plug-ins, tokens, or other form factors. |
| `unit_mass_and_count` | production and quality records | Mass and count | kg and card | Record accepted, rejected, scrapped, and reworked card counts together with measured or sampled unit mass so count-to-mass conversion is reproducible. |
| `component_mass` | card-body, chip/module, antenna/inlay, overlay, adhesive, ink, and other material inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report issued, returned, and incorporated mass by component or material family; do not infer all smart-card compositions from a debit card or a contact-only card. |
| `scrap_rate` | each foreground manufacturing process | Mass and count | kg and % | Calculate scrap and reject rates from process-specific accepted, rejected, scrapped, and reworked records. State denominator and whether rework is ultimately accepted or scrapped. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased card-body materials or prepared sheets, chip/module or die, antenna/inlay materials where applicable, adhesives, inks, overlays, auxiliaries, and packaging received at the foreground plant gate; included upstream component manufacture must be explicitly identified |
| starting_condition_role | Physical and electronic inputs before the first foreground card-manufacturing operation |
| product_classification_scope | One declared physical smart-card profile within CPC 3.0:47920, not a category-average payment, identity, telecommunications, or IoT service |
| recursive_input_rule | A same-category unpersonalized or partially finished smart card entering a downstream personalization, testing, or packaging process remains an explicit upstream product input. Use its upstream dataset and do not recursively rebuild or double count the same card-manufacturing stages. |
| upstream_dataset_requirement | Upstream datasets must match material, chip/module, antenna/inlay, interface, geography, technology, and personalization state or document justified substitutions and their consequences. |
| disclosure | Declare included/excluded component manufacture, contact/contactless/dual-interface design, card-body construction, antenna route, lamination and printing route, personalization boundary, dimensions, unit mass, quality yield, scrap/rework treatment, packaging, and waste destinations. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_physical_card_only` | product and service boundary | Include the physical smart-card product and its declared manufacturing operations; exclude card-use services, transaction processing, subscriptions, remote SIM provisioning, and downloadable profiles unless a separate service study is explicitly linked. | `gsma-sgp22-v3-1` |
| `boundary_interface_specific` | interface-specific manufacturing | Include antenna/inlay formation and connection for contactless or dual-interface cards and contact-pad/module operations for contact or dual-interface cards only when those operations are inside the declared foreground boundary. | `iso-iec-14443-1-2018`; `emvco-contact-chip`; `nist-fips-201-3-front-end` |
| `boundary_personalization` | personalization and issuance | State whether logical loading, key injection, encoding, visual printing, embossing, laser engraving, and issuance-specific testing are included. Do not treat an unpersonalized output as a personalized card. | `nist-fips-201-3-front-end` |
| `boundary_material_and_construction` | card body and finished dimensions | Include and disclose the material and construction steps needed to achieve the declared card form, dimensions, and physical performance; link purchased materials to upstream datasets. | `iso-iec-7810-2019` |
| `boundary_no_narrow_extrapolation` | category synthesis | Use debit-card evidence only to identify plausible component and manufacturing data fields. Do not apply its material quantities, mass, lifetime, or reject observations to other smart-card profiles without profile-specific evidence. | `lindgreen-debit-card-lca-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_card_body` | Card-body material preparation and sheet or blank formation | required | Required for every physical card; purchased finished card bodies may enter as an upstream product and shorten this foreground process | Prepare the declared card-body material and layer system | kg prepared card-body material or blanks |
| `p_antenna_inlay` | Contactless antenna or inlay manufacture and integration | conditional | Include for contactless and dual-interface profiles when not fully represented by a purchased inlay dataset | Form and connect the declared antenna/inlay system | kg conforming inlay or antenna-equipped body |
| `p_module_embedding` | Chip or module attachment and electrical interconnection | required | Include the route matching contact, contactless, or dual-interface construction; purchased finished inlays/modules remain upstream inputs | Attach the secure IC/module and make contact-pad or antenna connections | kg module-equipped card construction |
| `p_lamination_print_cut` | Layer assembly, lamination, printing, finishing, and cutting | required | Split or combine unit operations only when foreground records preserve their burdens and yields | Convert layered constructions into dimensionally conforming unpersonalized cards | kg conforming unpersonalized cards |
| `p_personalization` | Logical and visual personalization | conditional | Include only when the reference product is pre-personalized or fully personalized and the operations occur inside the plant boundary | Load or encode data and apply product-specific visual features | kg accepted personalized cards |
| `p_final_test_packaging` | Final electrical/visual test, quality release, and packaging | required | Packaging may be outside the reference mass but must be separately inventoried when supplied with the product | Release accepted reference cards and segregate rejects, rework, and packaging | kg accepted reference cards |

### Process: Card-body material preparation and sheet or blank formation (`p_card_body`)

#### Inputs

##### Product flows

###### Declared card-body materials and layers (`card_body_materials`)

Record each resin, polymer sheet, paper/fibre layer, coating, overlay, recycled-content feedstock, or other declared card-body material that crosses the foreground boundary. Material family, grade, recycled or biobased content, supplier dataset, and issued/returned mass must remain distinguishable.

- Selected flow: Route-specific card-body material or prepared sheet; exact Tiangong UUID selected by declared material profile
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused returns, normalized to prepared card-body output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared card-body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_card_body_records`
- Sources: `iso-iec-7810-2019`

###### Card-body process energy (`card_body_energy`)

Record metered electricity, heat, compressed air, and other energy carriers used for compounding, sheet preparation, printing preparation, forming, or blank preparation within this process.

- Selected flow: Site- and carrier-specific energy flow
- Flow property / unit: Energy / MJ or kWh as metered
- Amount rule: metered process energy allocated to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared card-body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_card_body_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared card-body sheets or blanks (`prepared_card_body`)

Record the conforming intermediate output transferred to antenna/inlay, module, or lamination operations, with material construction and dimensions preserved.

- Selected flow: Prepared smart-card body sheet or blank; exact Tiangong UUID selected if a matching published row exists
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared card-body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_card_body_records`

##### Waste flows

###### Card-body trim, off-specification material, and rejects (`card_body_scrap`)

Record trim, start-up losses, off-specification sheets, and rejected blanks separately by material family and destination. Recycled internal returns must not be counted both as waste output and new external input.

- Selected flow: Route- and material-specific production waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste leaving the process, separated from internally reworked or recycled material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared card-body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_card_body_records`

##### Elementary flows

### Process: Contactless antenna or inlay manufacture and integration (`p_antenna_inlay`)

#### Inputs

##### Product flows

###### Antenna conductor, substrate, and connection materials (`antenna_materials`)

For contactless or dual-interface cards, record conductor material and geometry route, inlay substrate, conductive adhesive or connection material, and purchased antenna/inlay inputs. Omit this row for contact-only products and state that it is not applicable.

- Selected flow: Route-specific antenna conductor, substrate, and connection materials; exact Tiangong UUIDs selected by declared design
- Flow property / unit: Mass / kg
- Amount rule: measured material issues minus documented returns for accepted inlay output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming inlay or antenna-equipped body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_antenna_inlay_records`
- Sources: `iso-iec-14443-1-2018`; `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017`

###### Antenna/inlay process energy (`antenna_process_energy`)

Record metered energy for wire embedding, etching, printing, bonding, testing, and other included antenna or inlay operations.

- Selected flow: Site- and carrier-specific energy flow
- Flow property / unit: Energy / MJ or kWh as metered
- Amount rule: metered process energy assigned to the declared lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming inlay or antenna-equipped body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_antenna_inlay_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming antenna inlay or antenna-equipped body (`conforming_antenna_inlay`)

Record output mass and count after continuity, resonance, or other declared electrical acceptance tests.

- Selected flow: Product-specific contactless antenna inlay or antenna-equipped card body
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass and accepted count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming inlay or antenna-equipped body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_antenna_inlay_records`

##### Waste flows

###### Antenna and inlay rejects (`antenna_inlay_rejects`)

Record conductor, substrate, connection, and electrical-test rejects by material and destination.

- Selected flow: Route-specific antenna/inlay production waste
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass leaving the process, net of successful rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming inlay or antenna-equipped body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_antenna_inlay_records`

##### Elementary flows

### Process: Chip or module attachment and electrical interconnection (`p_module_embedding`)

#### Inputs

##### Product flows

###### Declared chip, module, or purchased inlay (`chip_module_input`)

Record the exact secure IC form and interface configuration: bare die, contact module, contactless module/inlay, or dual-interface module/inlay. Do not substitute the verified contact-module flow for contactless-only or dual-interface products.

- Selected flow: Product- and interface-specific chip/module/inlay; exact Tiangong UUID selected after profile matching
- Flow property / unit: Mass / kg
- Amount rule: measured received and issued mass, reconciled with module count and sampled unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming module-equipped card construction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_module_embedding_records`
- Sources: `emvco-contact-chip`; `iso-iec-14443-1-2018`; `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017`

###### Module attachment materials and energy (`module_attachment_inputs`)

Record cavity preparation, adhesives, conductive connections, encapsulants, solder or bonding materials, and metered energy used in the declared attachment route.

- Selected flow: Route-specific attachment material and energy flows
- Flow property / unit: Mass / kg for materials; energy / MJ or kWh for carriers
- Amount rule: measured material issues and metered energy assigned to the declared lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming module-equipped card construction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_module_embedding_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming module-equipped card construction (`module_equipped_cards`)

Record conforming output mass and count after connection and basic electrical checks.

- Selected flow: Product-specific module-equipped smart-card construction
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass and accepted count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming module-equipped card construction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_module_embedding_records`

##### Waste flows

###### Chip/module and attachment rejects (`module_embedding_rejects`)

Record damaged chips/modules, failed connections, rejected bodies, and recovered components separately, with final destinations.

- Selected flow: Route-specific electronic and card-body production wastes
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass leaving the process, net of documented recovery and successful rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming module-equipped card construction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_module_embedding_records`

##### Elementary flows

### Process: Layer assembly, lamination, printing, finishing, and cutting (`p_lamination_print_cut`)

#### Inputs

##### Product flows

###### Prepared constructions, overlays, inks, adhesives, and finishes (`lamination_print_inputs`)

Record prepared bodies, antenna/inlays where applicable, module-equipped constructions, overlays, inks, coatings, adhesives, and security or surface features entering the declared operations.

- Selected flow: Product-specific prepared constructions and route-specific materials
- Flow property / unit: Mass / kg
- Amount rule: measured transferred intermediate mass plus net issued auxiliary material mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming unpersonalized cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lamination_print_cut_records`
- Sources: `iso-iec-7810-2019`; `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017`

###### Lamination, printing, and cutting energy (`lamination_print_cut_energy`)

Record metered electricity, heat, compressed air, and other energy used for layer assembly, lamination/pressing, printing, curing, finishing, punching, and cutting.

- Selected flow: Site- and carrier-specific energy flow
- Flow property / unit: Energy / MJ or kWh as metered
- Amount rule: metered process energy assigned to the declared lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unpersonalized cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lamination_print_cut_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming unpersonalized smart cards (`unpersonalized_cards`)

Record dimensionally, visually, and electrically conforming cards before product-specific personalization. When this is the reference product, link it to the declared reference flow and state that personalization is excluded.

- Selected flow: Smart card, unpersonalized (embedded module, laminated/finished) `d0e27754-4f25-412f-b693-80d41310168e` only when the product and boundary match this narrower identity
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass and accepted count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming unpersonalized cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lamination_print_cut_records`

##### Waste flows

###### Lamination, printing, and cutting scrap (`lamination_print_cut_scrap`)

Record trim, delamination, print rejects, dimension rejects, and damaged electronic constructions separately by material/electronic content and destination.

- Selected flow: Route-specific composite or electronic-containing production waste
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass leaving the process, net of successful rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unpersonalized cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lamination_print_cut_records`

##### Elementary flows

### Process: Logical and visual personalization (`p_personalization`)

#### Inputs

##### Product flows

###### Unpersonalized or pre-personalized cards (`cards_for_personalization`)

Record the incoming physical cards by mass, count, interface, material construction, chip/module, antenna configuration, dimensions, and prior personalization state. The upstream card dataset must not be reconstructed inside this process.

- Selected flow: Smart card, unpersonalized (embedded module, laminated/finished) `d0e27754-4f25-412f-b693-80d41310168e` only when the incoming card matches this narrower identity
- Flow property / unit: Mass / kg
- Amount rule: measured incoming lot mass reconciled with card count and unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted personalized cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_personalization_records`
- Sources: `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017`

###### Personalization materials and energy (`personalization_inputs`)

Record overlays, ribbons, inks, laser consumables, labels, carriers, key-injection or encoding equipment energy, and other physical inputs. Digital profiles or subscription services are not mass inputs to the physical card and must not be modelled as smart-card products.

- Selected flow: Route-specific personalization material and energy flows
- Flow property / unit: Mass / kg for materials; energy / MJ or kWh for carriers
- Amount rule: measured material issues and metered energy assigned to the declared lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted personalized cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_personalization_records`
- Sources: `nist-fips-201-3-front-end`; `gsma-sgp22-v3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted personalized smart cards (`personalized_cards`)

Record mass and count after required logical, visual, and interface tests, with personalization state and application class declared.

- Selected flow: Smart cards `da4b294a-b663-486c-8e61-05dc1a40ad40`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass or accepted count multiplied by representative measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted personalized cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_personalization_records`

##### Waste flows

###### Personalization rejects and secure destruction (`personalization_rejects`)

Record incorrect orders, encoding failures, visual defects, security rejects, successful rework, and secure destruction by count, mass, reason, and destination.

- Selected flow: Route-specific electronic-containing reject card waste
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass leaving the process after subtracting successfully reworked cards
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted personalized cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_personalization_records`
- Sources: `lindgreen-debit-card-lca-2017`

##### Elementary flows

### Process: Final electrical/visual test, quality release, and packaging (`p_final_test_packaging`)

#### Inputs

##### Product flows

###### Cards awaiting final release (`cards_for_final_release`)

Record incoming cards by prior personalization state and reconcile mass and count with released, reworked, and rejected outputs.

- Selected flow: Product-specific unpersonalized, pre-personalized, or personalized smart cards
- Flow property / unit: Mass / kg
- Amount rule: measured incoming mass reconciled with card count and representative unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release_records`

###### Packaging and final-test energy (`final_test_packaging_inputs`)

Record trays, carriers, envelopes, cartons, labels, protective materials, and metered testing/packaging energy. Packaging mass remains outside the smart-card reference mass unless explicitly declared otherwise.

- Selected flow: Packaging material and site-specific energy flows
- Flow property / unit: Mass / kg for packaging; energy / MJ or kWh for carriers
- Amount rule: measured packaging issues and metered energy assigned to the released lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference cards
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference smart cards (`reference_smart_cards`)

This is the reference output. Record accepted mass, count, measured unit-mass basis, interface, material construction, chip/module, antenna where applicable, dimensions, personalization state, and packaging inclusion.

- Selected flow: Smart cards `da4b294a-b663-486c-8e61-05dc1a40ad40`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted lot mass; count-derived mass is allowed only under `calc_reference_mass`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted reference smart cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release_records`

##### Waste flows

###### Final-test rejects, rework losses, and packaging waste (`final_release_waste`)

Record failed cards, cards routed to rework, cards destroyed after failed rework, and packaging waste separately. Preserve defect reason, electronic content, security handling, and final destination.

- Selected flow: Route-specific electronic-containing reject and packaging waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass leaving final release, excluding cards still in open rework and avoiding double counting with upstream reject rows
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reference cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release_records`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi-product card manufacturing | Subdivide records by product profile, interface, material construction, line, lot, and process wherever separate measurements exist before allocating shared burdens. |  |
| `allocation_shared_operations` | shared lamination, printing, personalization, testing, and utilities | Allocate shared measured burdens using a documented causal physical driver such as machine time, meter interval, processed sheet area, card count adjusted by measured unit mass, or batch time. Use economic allocation only when physical causality cannot be established and disclose the sensitivity. |  |
| `allocation_rework` | rework loops | Assign rework inputs and losses to the lot that generated the rework. Count successfully reworked cards once as accepted output and do not also count them as scrap. |  |
| `allocation_scrap_recycling` | scrap sent to recycling or recovery | Report scrap leaving the foreground as waste. Apply recycling, recovery, or substitution credits only in a separately declared downstream model with documented method and destination; no avoided-burden credit is applied by default. |  |
| `allocation_no_service_coproduct` | digital profiles and services | Do not allocate physical card-manufacturing burdens to eSIM profiles, subscriptions, transaction processing, or other services unless a separate service model defines the relationship and prevents double counting. | `gsma-sgp22-v3-1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_card_body_records` | `p_card_body` | materials, energy, conforming output, trim and rejects | purchase/issue/return logs; meters; production and waste tickets | material_id; material_family; grade; recycled_or_biobased_content; issued_mass; returned_mass; energy_by_carrier; accepted_mass; accepted_count; trim_mass; reject_mass; destination | Reconcile stores records, calibrated meters, line counters, and waste tickets by lot | kg; card; kWh; MJ | per lot and monthly reconciliation | representative reporting campaign, normally at least 12 months or all campaigns for seasonal/short production | all foreground card-body lines in scope | sum net material and energy by lot; keep internal recycle separate; normalize to conforming output | calibration records; material specifications; supplier records; lot reconciliation; waste transfer evidence |
| `cp_antenna_inlay_records` | `p_antenna_inlay` | conductor/substrate/connection inputs, energy, conforming inlay, rejects | bill of materials; issue/return logs; meters; electrical-test and reject logs | interface; antenna_route; conductor; substrate; connection_material; issued_mass; returned_mass; energy; processed_count; accepted_count; reject_count; reject_mass; test_result; destination | Reconcile material issues with inlay counts and mass; retain continuity/resonance or declared acceptance results | kg; item; kWh; MJ | per lot | representative reporting campaign | all contactless/dual-interface inlay lines in scope | net issues and energy divided by conforming output; successful rework retained separately | material certificates; meter calibration; electrical-test records; waste tickets |
| `cp_module_embedding_records` | `p_module_embedding` | chip/module/inlay inputs, attachment materials, energy, conforming output, rejects | receiving, issue, placement/bonding, electrical-test, rework and reject records | interface; module_id; chip_form; chip_count; module_count; sampled_unit_mass; issued_mass; attachment_material; energy; accepted_count; reject_count; reject_mass; recovered_count; destination | Reconcile secure-component serial/count records with material mass, line output, and defect disposition | kg; item; kWh; MJ | per lot | representative reporting campaign | all module-attachment lines in scope | calculate mass from measured lot mass or statistically supported unit mass; normalize net inputs to conforming output | supplier specification; count reconciliation; sampling plan; test and destruction records |
| `cp_lamination_print_cut_records` | `p_lamination_print_cut` | layered inputs, auxiliaries, energy, dimensions, conforming cards, trim and defects | batch recipes; issue/return logs; meters; dimension/visual/electrical QC; waste tickets | layer_construction; input_mass; overlay_ink_adhesive_mass; energy; sheet_count; card_count; length_mm; width_mm; thickness_mm; unit_mass; accepted_count; accepted_mass; trim_mass; defect_mass; rework_count; destination | Reconcile batch records with calibrated dimension and mass sampling, counters, and waste records | kg; card; mm; kWh; MJ | per lot | representative reporting campaign | all lamination/printing/cutting lines in scope | sum accepted and rejected outputs; normalize net materials and energy to accepted unpersonalized mass | recipe approval; instrument calibration; QC sampling plan; waste transfer evidence |
| `cp_personalization_records` | `p_personalization` | incoming cards, personalization materials/energy, accepted cards, rework and rejects | secure inventory, job, encoding/key-injection, visual personalization, test, rework and destruction records | application_class; incoming_state; target_state; interface; incoming_count; incoming_mass; material_issue; energy; accepted_count; accepted_mass; rework_count; reject_count; reject_mass; defect_reason; destruction_destination | Reconcile secure card custody with job completion and destruction evidence without storing secret credentials in the LCA dataset | kg; card; kWh; MJ | per personalization job/lot | representative reporting campaign | all personalization facilities in scope | incoming = accepted + open rework + rejected, adjusted only for documented transfers; normalize to accepted mass | custody reconciliation; equipment logs; acceptance tests; secure destruction certificate |
| `cp_final_release_records` | `p_final_test_packaging` | final-test input, accepted reference output, packaging, rework, reject and waste | final QC; calibrated lot weights; card counts; packaging issues; rework and waste records | interface; material_system; module; antenna; dimensions; personalization_state; input_count; accepted_count; accepted_mass; sampled_unit_mass; sample_size; packaging_mass; energy; rework_count; reject_count; reject_mass; destination | Weigh released lots net of packaging or use an approved representative unit-mass sampling plan; reconcile all dispositions | kg; card; mm; kWh; MJ | per released lot | representative reporting campaign | all final release and packaging lines in scope | accepted reference mass plus separately reported packaging; reconcile input and all output dispositions | scale calibration; sampling plan; release certificate; packaging specification; waste/destruction evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | accepted reference smart cards | Prefer net calibrated accepted-lot mass. If count conversion is used: accepted_mass_kg = accepted_count x representative_unit_mass_g / 1000; report sampling design and uncertainty. | accepted_count; accepted_lot_mass; representative_unit_mass_g; sample_size | accepted reference mass in kg |  |
| `calc_net_material_input` | each material or component | net_input_kg = issued_mass_kg - documented_unused_return_kg - documented_internal_recycle_return_kg; internal recycle is tracked but not counted as new external input. | issued_mass; unused_return_mass; internal_recycle_return_mass | net external material input in kg |  |
| `calc_scrap_rate_mass` | each process and total foreground | scrap_rate_mass_percent = 100 x final_scrap_mass / (accepted_output_mass + final_scrap_mass); exclude open rework and report any recovered component mass separately. | accepted_output_mass; final_scrap_mass; open_rework_mass; recovered_component_mass | process-specific and total mass scrap rate |  |
| `calc_rework_rate_count` | each process | rework_rate_count_percent = 100 x cards_entering_rework / processed_card_count; report the fraction later accepted and the fraction later scrapped. | processed_card_count; rework_entry_count; rework_accepted_count; rework_scrapped_count | rework rate and disposition shares |  |
| `calc_normalized_inventory` | all foreground rows | normalized_amount = reconciled lot amount / accepted reference mass_kg, after applying documented allocation for shared operations. | reconciled lot amount; accepted reference mass; allocation driver | amount per 1 kg accepted smart cards |  |
| `calc_mass_reconciliation` | each process | Compare net mass inputs with conforming output, scrap/reject output, recovered components, emissions if measured, and inventory change. Investigate and disclose unexplained imbalance; do not force balance by inventing flows. | net mass inputs; conforming outputs; wastes; recoveries; measured releases; opening/closing inventory | mass-reconciliation result and unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_profile` | reference product | Preserve interface, application class, card-body material/layers, chip/module, antenna/inlay where applicable, single/multi-chip design, dimensions, mass, personalization state, and packaging inclusion. | approved product specification and bill of materials |
| `dq_identity` | UUID-bearing references | Confirm the current public Tiangong identity and reference property before use; do not use a component, unpersonalized-card, wrong-CPC, or wrong-state row as the generic reference product. | Tiangong public-row readback and product-profile match |
| `dq_temporal` | foreground activity data | Use one representative reporting campaign, normally at least 12 months, or all campaigns for short/seasonal products; disclose deviations and major process changes. | dated production, meter, purchasing, and waste records |
| `dq_completeness` | foreground inventory | Reconcile accepted, rejected, scrapped, reworked, recovered, and transferred counts/masses at every process; include all material and energy carriers that cross the declared boundary. | lot reconciliation and mass-balance report |
| `dq_measurement` | mass, dimensions, counts, and energy | Retain calibration status, sampling plan, sample size, conversion factors, and uncertainty for count-to-mass and dimension measurements. | calibration certificates, sampling records, and meter logs |
| `dq_security_and_privacy` | personalization records | Retain auditable counts, mass, process status, and destruction evidence without publishing secret keys, personal data, credentials, or cardholder information in the LCA dataset. | redacted custody and destruction records; data-governance approval |
| `dq_no_extrapolation` | secondary evidence | Treat payment-card, identity-card, SIM, and IoT-card evidence as profile-specific. Any transfer to another profile requires a documented representativeness argument and sensitivity assessment. | evidence-to-field mapping and substitution log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference product flow must be Smart cards `da4b294a-b663-486c-8e61-05dc1a40ad40`, state-code-100 identity verified at authoring, with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| `validate_interface` | product profile and process applicability | Declare exactly one interface profile: contact, contactless, or dual-interface. Contactless and dual-interface profiles must disclose antenna/inlay material and integration; contact and dual-interface profiles must disclose contact module/pad construction. | `iso-iec-14443-1-2018`; `emvco-contact-chip`; `nist-fips-201-3-front-end` |
| `validate_card_body` | card-body construction | Declare material family, layer construction, recycled or biobased content where applicable, and upstream dataset for every material layer. | `iso-iec-7810-2019` |
| `validate_dimensions_mass` | physical product | Report length, width, thickness, specification/drawing, measured unit mass, sampling basis, accepted count, and accepted mass. Reject datasets that assume a single card form for the entire category. | `iso-iec-7810-2019` |
| `validate_chip_module` | electronic component boundary | Declare chip/module form, interface compatibility, single/multi-chip implementation, supplier or component identity, unit count/mass basis, and whether chip/module manufacture is upstream or foreground. Bare-chip or contact-module evidence must not represent the whole category. | `emvco-contact-chip`; `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017` |
| `validate_personalization_boundary` | product state and foreground boundary | Declare unpersonalized, pre-personalized, or fully personalized output and list logical loading, encoding, key injection, visual printing/engraving, testing, and secure destruction operations included or excluded. | `nist-fips-201-3-front-end`; `gsma-sgp22-v3-1` |
| `validate_scrap_rework` | yield and waste inventory | Report process-specific accepted, rejected, scrapped, and reworked counts and masses, denominator definitions, final destinations, and prevention of double counting. A debit-card reject observation is not a category default. | `lindgreen-debit-card-lca-2017` |
| `validate_mass_reconciliation` | each foreground process | Provide a reconciled mass balance or a documented investigation of unexplained differences without invented flows. |  |
| `validate_service_exclusion` | eSIM and other services | Exclude eSIM profile download, subscription management, remote provisioning, transaction processing, and other services from the physical smart-card product dataset unless separately modelled and linked without double counting. | `gsma-sgp22-v3-1` |
| `validate_no_narrow_extrapolation` | evidence representativeness | Do not extrapolate a contact-only module, unpersonalized-card route, debit-card composition, identity-card construction, removable SIM, or one form factor to all smart cards without explicit profile matching and evidence. | `lindgreen-debit-card-lca-2017`; `nist-fips-201-3-front-end`; `gsma-sgp22-v3-1` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground smart-card manufacturing data package suitable for publication as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Product LCAs and lifecycle models requiring a physical smart-card manufacturing inventory for a declared contact, contactless, or dual-interface profile |
| allowed_use | Use for the declared card material system, interface, chip/module and antenna configuration, dimensions, personalization state, geography, technology, and reporting period; documented scenario substitution is allowed with sensitivity analysis |
| excluded_use | Generic representation of bare chips/modules, card readers, eUICC hardware outside a physical card, eSIM/telecommunications/payment/identity services, transaction processing, or all smart cards without profile matching |
| required_metadata | canonical PCR id; CPC mapping context; application class; interface; card-body material/layers; chip/module; antenna/inlay when applicable; dimensions/thickness; measured unit mass; personalization state/boundary; process route; geography; period; allocation; accepted/reject/scrap/rework data; packaging inclusion; UUID verification |
| required_quality_disclosure | source coverage; meter and scale calibration; count-to-mass sampling; mass reconciliation; temporal and site coverage; substitutions; missing flows; waste destinations; security/privacy redaction; reason narrow-profile evidence was or was not transferred |
| update_trigger | Change in card form, material/layer construction, recycled/biobased content, interface, chip/module, antenna/inlay, lamination or personalization technology, dimensions/mass, plant/geography, allocation, scrap/rework treatment, packaging, or evidence/UUID identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-iec-7810-2019` | standard | ISO/IEC 7810:2019, Identification cards - Physical characteristics, confirmed current in 2025, https://www.iso.org/standard/70483.html (retrieved 2026-08-09) | Card materials, construction, physical characteristics, dimensions, and test-linked disclosure requirements |
| `iso-iec-14443-1-2018` | standard | ISO/IEC 14443-1:2018, Cards and security devices for personal identification - Contactless proximity objects - Part 1: Physical characteristics, https://www.iso.org/standard/73596.html (retrieved 2026-08-09) | Contactless-interface scope and antenna/inlay applicability |
| `emvco-contact-chip` | official_guidance | EMVCo, EMV Contact Chip and supporting ISO standards, https://www.emvco.com/emv-technologies/emv-contact-chip/ (retrieved 2026-08-09) | Contact-interface definition and distinction from contactless payment interfaces; not category-wide composition evidence |
| `nist-fips-201-3-front-end` | official_guidance | NIST, FIPS 201-3 PIV Front-End Subsystem, https://pages.nist.gov/FIPS201/frontend/ (retrieved 2026-08-09) | Dual-interface identity-card example; card-body, embedded antenna, lamination, printed/electronic information, personalization, and testing boundaries; not category-wide quantities |
| `gsma-sgp22-v3-1` | standard | GSMA SGP.22 v3.1, RSP Technical Specification, https://www.gsma.com/esim/wp-content/uploads/2023/12/SGP.22-v3.1.pdf (retrieved 2026-08-09) | Distinguishing eUICC/profile/remote-provisioning systems and services from a physical smart-card manufacturing dataset |
| `lindgreen-debit-card-lca-2017` | literature | Lindgreen, E.R. et al., Evaluating the environmental impact of debit card payments, DOI: 10.1007/s11367-017-1408-6; DNB Working Paper 574, https://www.dnb.nl/media/a3sk2oob/574-evaluating-the-environmental-impact-of-debit-card-payments.pdf (retrieved 2026-08-09) | Narrow debit-card evidence for separating card body, chip module, NFC antenna, lamination/manufacturing, personalization, rejects, and waste fields; no category-wide numeric extrapolation |
