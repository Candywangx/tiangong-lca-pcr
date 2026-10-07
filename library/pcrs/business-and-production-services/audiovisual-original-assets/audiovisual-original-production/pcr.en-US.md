---
pcr_id: pcr.business-and-production-services.audiovisual-original-assets.audiovisual-original-production
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Audiovisual original production

## 1. Scope and Applicability

Creation of identifiable copyright-protectable audiovisual originals: motion-picture and videotape/video originals for cinema, home-video or other non-broadcast delivery, and television originals intended for over-the-air broadcast. Includes actual development, studio/location capture, animation, live or hybrid creation, finishing, and content/technical/rights acceptance. The original is a complete identified work or bounded edition, not the physical carrier or one downloadable copy. No genre, runtime, camera format, fixed set or compulsory cinema package is assumed. The actual route and make-or-buy interfaces determine inventory [cpc-tv-original; cpc-sale-original].

Exclude radio-only originals, bare commissioned production services without delivery of an original asset, channel scheduling, transmission, screenings/viewings, recurring downloads, licence administration alone and standalone equipment manufacture as a separate product activity. Attributable capital-manufacturing shares may be included only with explicit coverage and cp_assets conservation evidence; otherwise disclose their exclusion. CPC 96123 adds production without contract for outright sale with attendant property rights; CPC 84612 adds broadcast intent. These conditions can coexist. Record contract, copyright and rights/reuse conditions without claiming legal approval. This methodology covers their audiovisual intersection and non-broadcast audiovisual assets; it does not cover the entire 96123 leaf, which also includes radio originals.

Digital cinema source masters can generate cinema, home-video and broadcast masters; the source master itself is not specified by DCI [dci-master-lineage]. Original production therefore uses one resource ledger across intended outlets, while actual format conversion, version finishing and initial acceptance work are separately identified. DCP/IMF completeness and delivery conditions differ from broadcaster/live acceptance and must be checked with the actual current recipient specification. A distribution package or supplemental package can be incomplete without its referenced assets; package count is not original count [dci-master-lineage; sony-imf-lineage]. Rights, income, audience, bytes and duration are not physical mass.

Digital recorded motion pictures are representative, not an exclusion of animation, live television, videotape or photochemical capture. Photochemical work records actual film stock, laboratory processing and rejected film where used. The outsourced laboratory job includes declared processing coverage; an in-house laboratory requires its actual measured chemical, water, energy, waste and direct-release rows. The illustrated cards are no permission to omit those operations or force an electrical-only route. Each original must disclose its actual capture/creation and delivery embodiment, including absent conditional exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.audiovisual-original-assets.audiovisual-original-production |
| classification_refs | CPC:3.0:84612; CPC:3.0:96123 (audiovisual subset; not whole-leaf coverage) |
| covered_products | Broadcast and non-broadcast motion-picture, video and television audiovisual originals; actual recorded, animated, live and hybrid routes |
| excluded_products | Radio-only originals; bare service or licence; replication, channel, transmission, exhibition, viewing and equipment activities |
| representative_product | Accepted complete audiovisual original |
| production_route | Development → actual capture/digital creation → actual finishing → verified acceptance; resource ledger covers all included stages |
| market_state | Content/technically accepted original asset with declared edition, completeness, rights and cinema/home-video/broadcast/other use; not a download copy |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Create and accept the declared complete audiovisual original |
| How much | One complete identified work, programme/episode or bounded live edition; disclose actual running time, content and deliverable coverage |
| How well | Content, picture/sound, metadata, rights and asset-dependency completeness meet the actual current recipient brief; disclose captions/audio description and delivered versions |
| How long or cycle | One complete original production cycle from development through acceptance, including attributable retries; no assumed viewing or archive lifetime |
| reference_flow_link | accepted_original |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete audiovisual original |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | original ID; work/episode/edition/version; actual duration; cinema/home-video/broadcast/other intent and territory; digital/photochemical/videotape/animation/live route; picture format/frame rate; audio tracks; accessibility; source-master and delivery-master/package relationship; asset dependencies and checksums; rights and reuse permissions; commissioned/outright-sale interface; acceptance brief and result; sites/dates; production storage interval; owned/supplier boundary |

item is the same quantity unit as the public unit-group reference Item(s); 件 is its Chinese display. No count-to-mass conversion is required or authorized. A series is decomposed into identified originals, with actual shared resources attributed once. Multiple encoding files and rights transfers do not multiply the reference output. Cinema/IMF dependency packages are not extra originals; a live original uses actual live acceptance evidence without inventing an offline master [dci-master-lineage; sony-imf-lineage].

Work count is not master-package, carrier or rights-transfer count. Digital originals retain source-master, actual delivered-edition and dependency manifests; analogue originals retain carrier identity, specification, measured length and complete-content verification. Declare cinema, home-video, broadcast or other acceptance intent; no work must deliver all formats.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| original_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Exactly one accepted original; use cp_original. Reference count is not the number of encodings, viewers or transmissions. Record actual duration in seconds as a qualifier, not a substitute denominator. |
| energy_preserve | grid_cn, grid_other | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the confirmed electricity reference property; the energy unit group is 93a60a57-a3c8-11da-a746-0800200c9a66. Its kWh conversion is 3.6 MJ/kWh. Use cp_energy actual readings; neither runtime nor network bytes proves electricity. For unresolved grid_other verify its own property before adopting identity. |
| atomic_units | all inventory rows | Actual exchange property | Declared row unit | Retain native supplier count, energy, mass or passenger-distance property. Conversion from volume to mass requires actual density/temperature. Do not rewrite a public property to match a preferred unit. cp_services defines a job/session/contract/item before counting it. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Start of attributable original development; incoming licensed clips, finished set materials, services and equipment interfaces are separately declared |
| starting_condition_role | foreground_production |
| product_classification_scope | Broadcast/non-broadcast audiovisual original creation; no channel, transmission or exhibition service; not whole CPC96123 coverage |
| recursive_input_rule | Record an existing original used as a licensed clip at its actual acquired-asset interface, with source original ID and attributed upstream burden. Do not recursively reproduce its whole production or count a reused clip as a new whole original. Add one atomic input per actual clip asset. |
| upstream_dataset_requirement | Match electricity geography/voltage, fuel formulation, material production state and supplier-service scope; disclose missing upstream and capital assets. Foreign supply cannot inherit the CN flow. |
| disclosure | Development/capture/digital/finishing/acceptance sites and period; failed work; outsourcing; production storage and bounded acceptance transfer; excluded transmitter/distribution/exhibition/use/archive; capital manufacture included only with declared coverage and cp_assets evidence, otherwise excluded and disclosed |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | dataset | Include actual pre-production, production and post-production resources through acceptance. EBU Tech3367 printed p.5 explicitly separates production from broadcast/distribution; its 2014 examples provide historical decomposition only. No historic benchmark or factor is adopted. | ebu-production-scope |
| boundary_routes | processes | Document capture, animation and live route decisions. Include attempts, rehearsals, retakes, renders, corrections and failed portions attributable to the accepted original. Conditional exchanges absent in a route need recorded absence evidence; no compulsory diesel/set/wastewater assumption. |  |
| boundary_delivery | acceptance | Include encoding, checking and actual bounded transfer needed for initial acceptance, with supplier transfer scope and measured electricity. Transmitter operation, recurrent network distribution, audience devices and post-acceptance archives are separate modules. Equipment manufacture is separately disclosed; this foreground alone is not complete cradle-to-gate. | dci-master-lineage; sony-imf-lineage |
| boundary_versions | acceptance | Record source master, master conversion, picture/sound/subtitle assets, edition IDs and acceptance tests for the actual delivery interface. Resolve DCP CPL/essence dependencies and IMF base/supplemental assets; a supplemental package alone is not a complete original. Retain actual incremental edition work while counting base creation once. | dci-master-lineage; sony-imf-lineage |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| production_resources | Development and attributable production resource ledger | required | All originals; stages individually recorded | foreground_production | per declared reference flow |
| capture | Studio, location and live picture/sound capture | conditional | Actual recorded or live capture route | foreground_production | per declared reference flow |
| digital_creation | Animation, graphics and production data handling | conditional | Actual digital creation or purchased storage/rendering | foreground_production | per declared reference flow |
| postproduction | Editing, grading, sound and version finishing | conditional | Actual finishing, including live gallery mixing; no compulsory offline edit | foreground_production | per declared reference flow |
| acceptance | Content, rights and technical acceptance | required | All originals; route-specific live or file acceptance | foreground_production | per declared reference flow |

The resource ledger records energy and travel by stage/site, even where no material crosses a creative stage boundary. Internal scripts, rushes, rough cuts and renders are tracked internal states, not invented purchased products or co-products. cp_original links development/capture/digital/finishing tasks to accepted_original. The following atomic interfaces are examples requiring actual applicability; expand the ledger with each actual other exchange, never hide it in a residual materials or waste collection.

### Process: Development and attributable production resource ledger (`production_resources`)

Record actual tasks, dates, sites and make-or-buy coverage in cp_original; shared stage electricity belongs exclusively to production_resources, not a second stage meter total.

#### Inputs

##### Product flows

###### Alternating current (`grid_cn`)

Only for metered China grid-average consumption at the user interface below 1 kV. Account for development, lighting, cameras, gallery, workstations, rendering, cooling, production storage and acceptance by stage in one resource ledger; count owned metered electricity and supplier-embedded burdens once each. Remove only evidenced overlap from the identified ledger that duplicates an already represented quantity, documenting both boundaries and the deduction basis. Do not remove independent electricity at a different supplier site merely because it is electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_energy; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Alternating-current electricity at another documented user supply interface (`grid_other`)

Conditional on a supply geography, voltage or generation mix outside grid_cn. Keep every distinct actual supply as a separate instantiated atomic row; never substitute the China low-voltage identity. Amounts are disjoint from grid_cn.

- Selected flow: Alternating-current electricity at another documented user supply interface
- Flow property / unit: Energy / MJ
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_energy; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Configured digital motion-picture camera (`camera_capital`)

The public camera identity is a manufactured finished-camera interface with Mass, not item count. This row applies only to an actual professional digital video/motion-picture camera with identified model/configuration matching the public television/professional-video-camera category. Camcorders, web cameras, still-image-optimized digital cameras and photochemical film cameras require distinct verified identities; the word cinema does not by itself establish the camera category. Under cp_assets measure net camera mass using a calibrated scale or traceable net-mass records for the same actual configuration, excluding packaging and separately listed accessories. Original equipment counts use that measured net mass to establish the manufacturing inventory kg quantity before applying the reconciled cross-project manufacturing share to this original. Preserve public Mass; invent no per-camera weight or lifetime.

Only where declared equipment manufacture is included: allocate the actual camera manufacturing quantity/share to this original using the cross-project conservation register. Record model and accessories separately; a rental whose supplier already includes manufacturing is not a second camera input. Unknown lifetime denominator remains review, not an invented whole camera per project.

- Selected flow: Television cameras `ce2c0eb5-09e4-487a-a0f9-0c8e9844f999`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_assets; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Diesel fuel (`generator_diesel`)

Only diesel actually consumed by a production-controlled generator; disclose fuel grade, fossil and biogenic fractions, supplier, location and combustion equipment. The generic material identity does not supply a refinery inventory or establish a fossil fraction. Other fuels require separate rows.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_fuel; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`

###### Rental of one configured digital motion-picture camera for one day (`camera_rental`)

Only an actual rented digital-camera-day service. Record model, included accessories, day definition, supplier energy and asset coverage; customer electricity remains separately measured. An owned camera is not a rental input.

- Selected flow: Rental of one configured digital motion-picture camera for one day
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_services; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

###### Diesel coach passenger transport (`bus_travel`)

Conditional on actual production-attributable coach travel. Declare occupied passenger count, route distance and service coverage. Add actual rail, air, car and freight interfaces separately; absence of those example rows is not a cutoff permission.

- Selected flow: Diesel coach passenger transport
- Flow property / unit: Passenger transport / passenger-km
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_services; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

###### One occupied hotel room-night (`hotel_night`)

Only attributable overnight accommodation; define occupancy, room type, location, included utilities and meals. Record every actual food burden once: meals demonstrably covered by the accommodation environmental inventory remain within that service, with supplier/menu and coverage evidence, and are not additional food inputs. Food outside that verified inventory requires separate physically specific rows, even when financially included in the room bill. Billing inclusion alone does not prove environmental coverage; unknown coverage requires review and a disclosed gap, not assumed omission or unsupported subtraction. Separately purchased costume, makeup, props and administrative materials require their own physically specific rows, not a composite materials flow.

- Selected flow: One occupied hotel room-night
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_services; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`direct_co2`)

Only evidenced immediate fossil-carbon dioxide releases from controlled combustion to air with unspecified subcompartment. Where urban near-ground or non-urban/high-stack location is known, resolve the corresponding compartment instead. Never use soil, water, long-term or biogenic identities. Purchased electricity does not produce this direct exchange.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_emissions; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

###### Nitrogen dioxide released immediately to air (`direct_no2`)

Conditional on species-specific measurement or a documented applicable combustion calculation; immediate release to air, unspecified subcompartment only. Known release subcompartments require their own matching identity. NOx reported as NO2-equivalent is not actual NO2 mass; retain unresolved species separately. Do not substitute NO, nitrogen, nitrate, nitrite or N2O. Add other evidenced pollutants separately.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_emissions; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

### Process: Studio, location and live picture/sound capture (`capture`)

Record actual tasks, dates, sites and make-or-buy coverage in cp_original; shared stage electricity belongs exclusively to production_resources, not a second stage meter total.

#### Inputs

##### Product flows

###### Unexposed colour-negative motion-picture camera film (`film_stock`)

Only actual photochemical capture. Declare gauge, support/emulsion, lot, length issued/returned and measured consumption. Neither silver content nor developing recipe is inferred from length. The stock supplier dataset must match the purchased film state and unit; do not substitute finished video content or digital storage.

- Selected flow: Unexposed colour-negative motion-picture camera film
- Flow property / unit: Length / m
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_film; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_film`

- Sources: `kodak-film-route`

###### Finished plywood panel for audiovisual set construction (`set_plywood`)

Conditional on actual plywood set construction. Record wood species, adhesive, thickness, moisture and purchased finished state; upstream forestry and panel manufacture belong to the supplier dataset. Charge consumed panels separately from reused panels; reusable manufacturing shares require cp_assets lifetime/activity denominator and cross-project conservation, never a full panel manufacturing burden reset per project.

- Selected flow: Finished plywood panel for audiovisual set construction
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_materials; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Treated municipal tap water supplied to the production location (`supplied_water`)

This tap-water identity has primary Mass. Under cp_materials measure actual treated supply mass; volume records require an applicable measured/supplier density and temperature conversion, not automatic use of the record screening conversion. Match actual supply geography, treatment, user/plant interface and upstream water inventory; raw water, Hong Kong-specific Volume and viscose-process CTUe identities are not substitutes.

Conditional on actual water used for the production location, set operation or cleaning. Record supplier and use; measured volume requires documented density and temperature conversion. This is a technosphere water product, not freshwater resource abstraction.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_materials; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Discarded exposed colour-negative motion-picture film (`discarded_negative`)

Only producer-controlled film physically sent to a waste handler; weigh net discarded film and declare support, emulsion, contamination and actual treatment. Preserve accepted negatives/assets separately. Do not double-count laboratory waste already included by the purchased processing supplier; do not equate film metres with kg.

- Selected flow: Discarded exposed colour-negative motion-picture film
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_materials; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Discarded glued plywood set panel (`discarded_plywood`)

Only panels crossing the production boundary to a waste handler. Record adhesive, coatings, contamination, recipient and actual treatment; reuse retained within the production is not waste. No avoided-production credit follows merely from sending material for recycling.

- Selected flow: Discarded glued plywood set panel
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_materials; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Production-location sanitary wastewater sent to municipal treatment (`sanitary_wastewater`)

Only actual project-attributable untreated sanitary influent received at a municipal treatment plant. Reconcile production sanitation, sewer/transport boundaries, infiltration and transfer losses with the measured recipient volume and composition; site discharge alone does not prove this inlet quantity. Industrial or laboratory effluent is a separate row. No wastewater-treatment service or direct freshwater emission is implied.

- Selected flow: Untreated municipal wastewater influent `41eb8873-6852-40fe-8b5d-b792fe4d4754`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_wastewater; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

##### Elementary flows

### Process: Animation, graphics and production data handling (`digital_creation`)

Record actual tasks, dates, sites and make-or-buy coverage in cp_original; shared stage electricity belongs exclusively to production_resources, not a second stage meter total.

#### Inputs

##### Product flows

###### Completed audiovisual animation rendering job (`render_job`)

Conditional on externally rendered animation, graphics or virtual sets. Define job identifier, frames, resolution, software, compute time, site and included electricity/cooling/storage. One item is one actual documented job, not one arbitrary GPU-hour or one GB. In-house rendering is measured in cp_energy.

- Selected flow: Completed audiovisual animation rendering job
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_services; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

###### One defined production digital storage service contract (`storage_contract`)

Only purchased production-period storage; define provider, bytes stored, actual retention interval, replication, backups and allocation. Do not equate GB or GB-days to kWh. Long-term archival storage after acceptance is separate and excluded unless an explicit additional module is declared.

- Selected flow: One defined production digital storage service contract
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_services; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Editing, grading, sound and version finishing (`postproduction`)

Record actual tasks, dates, sites and make-or-buy coverage in cp_original; shared stage electricity belongs exclusively to production_resources, not a second stage meter total.

#### Inputs

##### Product flows

###### Completed laboratory processing job for exposed colour-negative motion-picture film (`film_lab`)

Only purchased actual film processing, including declared development, scanning and waste handling coverage. Define one job by order, gauge, emulsion, measured footage, processing route and accepted result; separately purchased scans are separate exchanges. Require supplier primary chemical/water/energy/waste records and disclose gaps. If processing is in-house, do not enter a fictitious purchased job: instantiate each actual atomic laboratory exchange under postproduction.

- Selected flow: Completed laboratory processing job for exposed colour-negative motion-picture film
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_services; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

- Sources: `kodak-film-route`

###### Completed audiovisual sound mixing session (`sound_mix`)

Conditional on externally supplied mixing. Define programme/version, session duration, delivered tracks, sample rate, channel layout, supplier scope and acceptance. Editing, grading, dubbing and captioning supplied separately must each have their own delivery row. Rejected mixes and revisions remain attributed to the final original.

- Selected flow: Completed audiovisual sound mixing session
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_services; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Content, rights and technical acceptance (`acceptance`)

Verify actual current recipient requirements and content version, rights, completeness and dependent assets. DCI/IMF delivery examples apply only where selected; no universal master format is imposed [dci-master-lineage; sony-imf-lineage].

#### Inputs

##### Product flows

###### Completed mastering job for one declared audiovisual edition (`mastering_job`)

Only separately purchased first-acceptance mastering: identify source master, actual target edition, encode/colour/audio/subtitle scope, dependency files, verification and acceptance. One job is one accepted bounded supplier order, not a copy/viewing. Provider metering and asset coverage must be retained; own metered encoding is recorded only in grid_cn/grid_other, never again as a purchased job.

- Selected flow: Completed mastering job for one declared audiovisual edition
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable exchange quantity for the identified original, measured using cp_services; absent conditional exchange requires recorded route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete accepted original (`accepted_original`)

One identified accepted complete audiovisual work, programme/episode or bounded live edition. Retain source-master or analogue carrier identity, complete picture/sound and required metadata, rights evidence and route-specific acceptance. Record actual delivery-master, edition and dependency relationships. Extra encodings and dependent packages are deliverables, not extra originals. A new substantive cut declares its parent and incremental work rather than silently duplicating base creation. Live acceptance retains actual verification without demanding an offline master.

- Selected flow: Accepted complete audiovisual original
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_original`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | all inventory rows | Use direct original/stage metering and supplier task records first. Where a shared studio, edit suite, render cluster or storage system is unavoidable, retain a measured resource total, a causal job/use driver and the allocation schedule, reconciling all shares to that total. Validate idle/base load and cooling coverage explicitly. Price, copyright value and audience cannot stand in for a causal energy relationship. |  |
| allocation_original | accepted_original | One original-production ledger serves the accepted edition and its technical copies. Attribute separately measured additional versions and reuse work once; record reusable asset ownership and actual reuse history. Do not divide original production by future downloads or broadcasts without a separately justified downstream model. |  |
| allocation_failures | dataset | Retakes and rejected intermediate work are attributable production burdens, not saleable co-products. If genuinely separate saleable originals are jointly produced, disclose their distinct outputs and a measured subdivision or causal allocation; unresolved allocation requires review. No speculative avoided-burden credit for reusable sets or digital copies. |  |
| allocation_assets | camera_capital; set_plywood | Allocate equipment and reusable-set manufacturing using a unique asset ID, manufacturing inventory and an evidenced actual cumulative service life/activity or justified expected lifetime denominator. Measured project use is only the numerator. Cumulative manufacturing shares across every project and period must not exceed one or reset. Expected denominators require sensitivity and later reconciliation. A period allocation distributes only the manufacturing share already attributable to that period, never automatically the full asset inventory each period. Unknown life/activity denominator requires review; invent no default. Separate consumed material from reused capital and prevent duplicate supplier-rental manufacturing shares. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | acceptance | accepted_original | acceptance_record | original ID; accepted version; source-master/carrier; intended outlet; dependent picture/audio/text assets; delivery-master/package/CPL lineage; duration seconds; content inventory; rights; recipient specification and live/file QC; route tasks; revisions; sites/dates | Retain actual commissioning/content brief, creative task ledger, rights record and accepted file checksum or live edition verification record. Count each complete original once. | item | Each accepted original | Entire development-to-acceptance cycle | All actual sites and suppliers | per declared reference flow | Acceptance and rights records; version lineage |
| cp_energy | production_resources | electricity | meter_record | meter ID; site; voltage; mix; stage; original ID; start/end readings; unit; shared-job driver; cooling/idle; outsourced overlap | Calibrated submeter or reconciled facility meter with actual causal allocation records; convert recorded kWh using the verified unit-group factor. Measure production-period rendering/storage, not assumed GB-to-energy factors. | MJ | Per task/day and acceptance | Complete included cycle including idle and rework | Actual offices, studios, locations and digital sites | per declared reference flow | Calibration, invoices, meter reconciliation and allocation schedule |
| cp_fuel | production_resources | generator_diesel | consumption_record | fuel lot; grade; blend; mass; opening/closing stock; generator; original; dates; density/temperature if volume | Reconcile issue/return and tank measurements to consumed diesel; retain real supplier composition. Volume conversion uses measured or supplier-certified applicable density, never an invented constant. | kg | Each actual generator run | All attributable runs | Actual production-controlled generators | per declared reference flow | Fuel receipts, stock ledger and composition evidence |
| cp_materials | capture | material_water_waste | material_record | row ID; product state; grade; moisture; mass; volume/density; source/recipient; reuse history; treatment; original ID | Weigh issued/returned/discarded plywood and discarded exposed film separately; reconcile actual water and wastewater records separately. Retain composition, waste contamination and treatment. Measure actual reused share with documented use history; no assumed lifespan. | kg | Each issue and boundary transfer | Full included production and dismantling | Actual capture locations and waste handlers | per declared reference flow | Weighing, supplier specifications, water meters and transfer notes |
| cp_services | production_resources | purchased_service | supplier_record | row ID; contract/job/session; supplier; count; duration; bytes/frames where relevant; native unit; transport occupancy/distance; included assets/energy; original allocation; room-night occupancy/menu; financial meal inclusion; environmental meal coverage; separately covered food and overlap evidence | Obtain actual accepted service deliverable and supplier primary activity/boundary records. Disaggregate transport modes and hotel nights; define each rental day, render job, storage contract and mix session. Track supplier and own energy overlap. Acceptance transfer requires its own actual service row if purchased.; verify accommodation inventory boundaries independently of billing; reconcile food burdens once under hotel_night, retaining unresolved coverage as a gap | Native row unit | Each service and invoice | Full attributable production interval | All actual suppliers | per declared reference flow | Contract, acceptance, job logs and supplier boundary evidence |
| cp_emissions | production_resources | direct_species_release | measurement_record | chemical species; fossil fraction; fuel; equipment; released kg; time; medium/submedium; measurement uncertainty; calculation inputs | Use actual species measurement or independently documented applicable fuel-carbon and combustion calculation. Retain the complete formula, carbon oxidation evidence and fossil share. NOx as equivalent needs species resolution; verify immediate air subcompartment. Electricity/background emission factors cannot be entered as direct releases. | kg | Each evidenced release/campaign | Only actual included combustion events | Controlled production sites | per declared reference flow | Species report, calculation evidence and compartment record |
| cp_film | capture | film_stock | stock_record | original/take ID; gauge; support/emulsion; lot; issued/returned/exposed/discarded length; carrier ID; processing order | Reconcile traceable roll labels, length metering and issue/return records to actual consumed length including tests, failures and rework. Retain separately weighed kg waste-film records; length is not waste mass. Reconcile laboratory order coverage. | m | Each roll and issue/return | Full included capture and processing | Actual capture locations and laboratories | per declared reference flow | Roll labels, meter records, processing and returns evidence |
| cp_assets | production_resources | camera_capital; set_plywood | asset_register | unique asset ID; configuration; actual manufacturing inventory and count/mass; measured net camera mass and weighing method; cumulative projects/periods; measured use activity; evidenced cumulative service denominator; period-attributed share; expected life evidence; cumulative shares and residual | Retain manufacturing and all-project asset-use register; reconcile cumulative manufacturing shares at no more than one, with no project/period reset. Expected denominator requires sensitivity and later actual reconciliation. Unknown denominator stops completeness claims and requires review. | Native row unit | Each use, period close and lifetime update | Across every project/period until asset retirement | All shared assets and rental suppliers | per declared reference flow | Manufacturing inventory, service/life evidence, conservation ledger and uncertainty |
| cp_wastewater | capture | sanitary_wastewater | transfer_record | original/site; sanitary influent composition; discharge and recipient volume-meter readings; period; sewer/transport scope; infiltration/losses; treatment-plant inlet; allocation schedule | Reconcile actual received untreated-influent volume and project attribution. Distinguish sanitary from laboratory/industrial wastewater. Do not infer wastewater volume from purchased water or equate site pipe discharge automatically to plant influent. | m3 | Each transfer and receiving interval | All included actual sanitary transfers | Production locations, transfer route and recipient treatment plant | per declared reference flow | Meters, composition, transfer and receiving records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| same_original_basis | all inventory rows | Retain actual attributable numerator quantity per declared reference flow. For a shared production pool, record the actual accepted-original register and causal allocation schedule before deriving each original inventory; never average incompatible editions without stratification. | cp_original; cp_energy; cp_fuel; cp_materials; cp_services; cp_emissions; cp_film; cp_assets; cp_wastewater | Exchange quantity per declared reference flow in the original row unit |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | accepted_original | Preserve accepted edition, duration, configuration, rights and reproduction conditions; a file checksum proves byte identity, not content completeness or lawful rights. | cp_original |
| quality_complete | dataset | Reconcile every actual stage and supplier; expand specific consumable, travel, waste and direct-release rows where present. Reconcile actual food burdens under the hotel_night supplier-coverage rule: retain verified service-inclusive meals once, add separate food rows for meals outside that environmental inventory, and disclose unresolved coverage. Describe capital-asset coverage, storage interval, failed work and all exclusions. Record omissions and uncertainty without declaring full life-cycle coverage. | cp_original; cp_services |
| quality_energy | grid_cn, grid_other | Verified voltage/geography/mix, calibration and measured allocation; no arbitrary monetary, GB, CPU-time or runtime conversion to energy. Supplier job records must show the actual resource relationship and site boundary. | cp_energy; cp_services |
| quality_comparability | dataset | Original counts are only comparable for declared equivalent duration, genre, production route, picture/sound/accessibility and rights/delivery conditions; no automatic intensity ranking across programmes. Report temporal, geographic and technology representativeness. | cp_original |
| quality_master | accepted_original | Bind source-master and delivery-master/package editions and asset dependencies. Check cinema/IMF completeness only for the actual selected interface; current recipient specifications supersede historical examples. New encodings, CPLs or rights transfers are not new originals; a substantive new cut declares its burden relationship to the base original. | cp_original; dci-master-lineage; sony-imf-lineage |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_original | accepted_original | Require 1 item complete accepted original, same reference-product and output names, cp_original and actual edition qualifiers. Candidate blank product UUID must be precisely registered against accepted_original. Do not replace it with a physical carrier or generic service UUID. |  |
| validation_ledger | all inventory rows | Verify atomic exchange, native property/unit, same-original denominator and real collection protocol; audit CN low-voltage conditional use and disjoint other electricity. Reject double-counted service energy, fake density, unsupported emissions or storage-to-energy coefficients. |  |
| validation_boundary | dataset | Require a declared broadcast/non-broadcast audiovisual original asset and route-specific acceptance evidence. Check commissioned-service/outright-sale interfaces and multi-use originals for duplication. No broadcast/distribution/user-device/long-term archive activity silently belongs to original production. | cpc-tv-original; cpc-sale-original |
| validation_species | direct_co2, direct_no2 | Actual release evidence, fossil/biogenic distinction, species and immediate medium/submedium are mandatory. NO2-equivalent totals and purchased power emissions cannot be inserted as direct NO2 or direct CO2. Unresolved identity or causal allocation remains a disclosed review need. |  |
| validation_assets | camera_capital; set_plywood | Check unique asset ID, actual same-configuration net mass/manufacturing quantity, evidenced cumulative life/service denominator, project/period share register and residual. Cumulative manufacturing shares cannot exceed one or reset. Expected denominator needs sensitivity and later reconciliation; period attribution must not input a full asset inventory each period. Missing denominator remains review without complete capital-coverage claims. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Identified audiovisual-original production input to separately scoped distribution/broadcast/exhibition models; comparisons only for equivalent editions |
| excluded_use | Emission per viewer/download/broadcast; complete broadcast-service footprint; arbitrary mass of intellectual property; automatic equipment-inclusive cradle-to-gate |
| required_metadata | Original and edition IDs; duration; content and rights; route; sites/dates; configuration; accepted deliverables; energy interfaces; supplier/capital/transport/storage coverage; source and collection protocols |
| required_quality_disclosure | Identity gaps; meter/allocation uncertainty; failed work; supplier overlap; omissions; historical-source limits; content and acceptance representativeness; review status |
| update_trigger | New accepted edition or substantive route/site/supplier/format/rights/boundary change; revised measurements or resolved identity/causal allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc-tv-original | official_guidance | UNSD CPC 3.0 subclass 84612 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84612 | Broadcast-intended original scope; no numerical factors |
| cpc-sale-original | official_guidance | UNSD CPC 3.0 subclass 96123 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/96123 | Non-commissioned outright-sale audiovisual intersection; not whole-leaf coverage |
| ebu-production-scope | official_guidance | EBU Tech3367, Sustainable Production—Overview, November 2014, printed p.5; https://tech.ebu.ch/docs/tech/tech3367.pdf | Historical TV production/distribution separation and stage example only; no film energy or emission extrapolation |
| dci-master-lineage | standard | DCI Digital Cinema System Specification, definitive HTML, snapshot 2026-10-06, §§2.1.1.1–2.1.1.4, 3.1.1, 3.1.3, 5.2.3 and 5.5.1; https://dcss.dcimovies.com/latest/dcss.html | Source/derived master relationships, CPL and distribution-package completeness; selected cinema interfaces only |
| sony-imf-lineage | standard | Sony Pictures IMF Deliverable Specification v2.1, printed publication date 09-06-2018, pp.4–5; https://partnerzone.sonypictures.com/assets/downloads/Sony_Pictures_IMF_Specification_v2.1.pdf | Historical supplier base/supplemental asset and edition example; not universal current format, lifetime or quality threshold |
| kodak-film-route | handbook | Kodak VISION3 500T Color Negative Film 5219/7219, Technical Data, March 2026, H-1-5219, p.2, Processing/Identification/Post-Production; https://www.kodak.com/content/products-brochures/motion-picture/KODAK-VISION3-5219-7219-technical-information.pdf | Real colour-negative film, processing-service and postproduction-scan route example; ECN-2 applies only to specified manufacturer film, not all film, recipes, temperature or energy |
