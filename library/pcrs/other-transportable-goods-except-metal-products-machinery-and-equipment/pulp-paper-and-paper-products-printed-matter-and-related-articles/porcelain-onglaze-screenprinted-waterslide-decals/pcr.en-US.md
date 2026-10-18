---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.porcelain-onglaze-screenprinted-waterslide-decals
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Screenprinted waterslide decals for porcelain onglaze decoration

## 1. Scope and Applicability

This method covers unapplied ceramic waterslide decal sheets for fired onglaze decoration of glazed hard porcelain only: purchased unprinted gummed carrier paper, a single black ready-mixed ceramic screen ink, a separately printed clear burn-out covercoat, electrically powered drying, trimming, QC and dispatch. It requires actual supplier qualification of the ink/gum/film system on the declared porcelain glaze and firing schedule. The producer original establishes real screen exposure, screen printing and tunnel drying; it does not establish its supplier recipe, heat source or this site’s quantitative inputs. This selected electric/no-on-site-combustion route must be verified from heater nameplates, operating records and matched meters before application. It is a conditional method variant, not a measured inventory of the cited maker. Its selected CN electricity interface cannot represent that German maker’s actual electricity supply. [mr-screen-production; tullis-waterslide; vibrantz-ceramic]

Pressure-sensitive paper labels retain the paper face on the receiving article; this decal instead releases an ink/covercoat film from its temporary paper by water-softening the gum. The ink layer and transfer film have distinct supplied masses, retained solids and solvent releases. Offset books and loose image sheets retain their paper/ink structure and do not implement this release/film route. A calendar’s content alone is not a new manufacturing identity. This method excludes every calendar structure, PSA labels, heat/dry-peel transfer, non-fired organic/model decals, glass/enamel/plastic/metal receiving surfaces, bone china/stoneware, underglaze/inglaze and precious-metal decoration, digital/offset/UV routes, onsite paper/gum/ink manufacture, gas/steam drying and onsite combustion or effluent treatment. Additional chemistry or on-site emissions-control treatment requires explicit method extension. No source formulation, retention, drying time or historical quantity is a default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.porcelain-onglaze-screenprinted-waterslide-decals |
| classification_refs | CPC 3.0 32630; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unapplied black ceramic waterslide decal sheets for hard-porcelain onglaze firing |
| excluded_products | All incompatible structures, receiving substrates and routes in Section 1 |
| representative_product | Gummed ceramic carrier sheet with black ceramic image and separately printed clear transfer covercoat |
| production_route | Screen preparation → black screen print → drying → covercoat screen print → electric drying → trim/QC → dispatch with carrier retained |
| market_state | Dry accepted unapplied sheets at decal producer gate, before wet application/firing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a releasable black ceramic decoration for a declared glazed porcelain surface |
| How much | 1 kg net accepted unapplied decal sheets including temporary carrier and gum |
| How well | Declared image/coverage/registration, release integrity and actual glaze/firing compatibility; record decorated area per mass without claiming equal function across designs |
| How long or cycle | One production period at producer gate; downstream single application/firing has no default success rate or service lifetime |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Transfers (decalcomanias) and printed calendars `aef085ba-9ea8-418c-a94e-796a8bce8c8f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/period/design; net accepted sheet mass and packing tare; carrier fibre/grammage/moisture and supplier; release gum composition/coating mass and lot; black ink pigment/flux/medium/each solvent and grade; wet lacquer/retained transfer-film mass and formulation; declared hard-porcelain glaze and firing compatibility; electricity voltage/region/provider; actual drying and controls; screen lifetime; waste composition/receivers; image area/coverage; release/QC acceptance and test losses; boundary and upstream coverage |

Declare all qualifiers in the dataset and retained records. The broad reference name includes calendars; it never expands this physically qualified method.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Q is total calibrated net accepted dry sheet mass in the same period, including carrier/gum/image/film and measured residual water and solvent at the accepted supplied state, excluding packing/reject/test sheets. No per-sheet mass is fixed. |
| common_basis | reference denominator for all inventory rows | Mass | kg | Mass/kg applies to the common reference denominator Q only. Each numerator retains its own native property/unit: electricity is Net calorific value/MJ, not Mass/kg. Normalize every exchange and protocol to the same accepted output Q; zero/missing Q blocks normalization. |
| layer_mass | decal_paper, ceramic_ink, covercoat, finished | Mass | kg | Keep dry carrier, release-gum solids, ink solids, retained dry film and residual water separately. Purchased coated paper is one input: component disclosure cannot create duplicate paper/gum exchanges or backgrounds. |
| wet_supply | ceramic_ink, covercoat, emulsion, thinner, cleaner | Mass | kg | Supplied formulations use actual wet mass. Reconcile whole supplied mass into measured H2O, each organic/inorganic non-water liquid, actual measured nonvolatile solids and any other retained components. Non-water mass is not a solids measurement. Constituent mass uses actual lot composition; measured solids/retention reconcile every component to waste, stock, product and air. No source recipe becomes a default. |
| electric_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The selected electricity flow property is named Net calorific value, not a heating-value assumption about electric power. Record measured kWh and exact 3.6 MJ/kWh conversion; match the native CN grid-average consumption mix delivered at user-side 1–35 kV, actual region/year and provider. Producer machinery evidence does not establish this supply. |
| water_mass | water, washwater | Mass | kg | For volume records use measured density at recorded temperature and composition. Database secondary mass coefficients are not density; record wastewater solids and wet basis. |
| particle_basis | pm_fine, pm_coarse, pm_large, collected_dust | Mass | kg | Separate emitted disjoint fractions ≤2.5, >2.5–10 and >10 micrometres from collected dust. PM10 and total particulate sums are QA only, not additional exchanges. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received qualified unprinted gummed ceramic transfer paper, premixed black ceramic paste, lacquer and actual screen-preparation supplies |
| starting_condition_role | Foreground converting start, not the lifecycle start |
| product_classification_scope | Only the porcelain-onglaze decal subset of CPC32630; no calendar coverage |
| recursive_input_rule | Do not feed a generic finished decal back as virgin input. Trace actual externally supplied intermediates once; internal rework is an internal link, not purchased product |
| upstream_dataset_requirement | Require actual supplier-to-site transport coverage without duplication and supplier-compatible pulp/base-paper manufacture, gum/coating, ceramic pigment/flux/paste, lacquer/solvents, mesh/emulsion and utility/packaging backgrounds. Missing upstream processes make cradle-to-gate LCI incomplete |
| disclosure | Record supplier versus integrated production and every actual handoff. Application water/paper removal/porcelain firing are downstream, not hidden manufacturing omissions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground | Include screen preparation, make-ready, ink and covercoat printing, electric drying/ventilation, actual cleaning, trim/QC losses and dispatch. Aggregate them into one foreground unit while metering each stage separately; physical internal handoffs have equal incoming/outgoing masses. | mr-screen-production |
| upstream_paper | upstream | Use JRC pulp/paper processes only for the actual supplier route, including actual coating. Wood-sawmill, plywood or conifer surveys cannot substitute. No generic mill recipe, cutting factor or broke-recycling assumption is imported. | jrc-paper-bref-2015 |
| downstream_transfer | application | The paper carrier is delivered, then removed during downstream water release; track gum partition, film/ink transfer, spent paper, application water and kiln burnout/firing in any downstream model. No fired-ware or decoration-lifetime claim is made by the gate inventory. | tullis-waterslide; vibrantz-ceramic |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| decal_converting | Screen preparation, printing, drying and dispatch | required | Selected qualified route | foreground | 1 kg reference flow |

### Process: Screenprinted decal converting (`decal_converting`)

#### Inputs

##### Product flows

###### decal_paper (`decal_paper`)

Receive one purchased composite sheet; distinguish carrier paper and release gum by supplier/lot mass records, without double purchasing constituent burdens.

- Selected flow: Unprinted water-soluble-gum-coated ceramic waterslide paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_layers. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_layers`
- Sources: tullis-waterslide

###### ceramic_ink (`ceramic_ink`)

One ready-mixed wet black ceramic ink; record inorganic pigment/flux, organic medium and every solvent constituent; no conventional offset ink substitution.

- Selected flow: Black porcelain-onglaze ceramic screen-printing paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_materials. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: vibrantz-ceramic; mr-screen-production

###### covercoat (`covercoat`)

Apply the actual compatible lacquer after the image, then electrically dry. Record supplied wet lacquer, retained dry transfer film and evaporated constituents separately. The film is formed here, not an additional purchased plastic film.

- Selected flow: Clear burn-out ceramic decal covercoat lacquer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_layers. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_layers`
- Sources: vibrantz-ceramic; tullis-waterslide

###### thinner (`thinner`)

Conditional only if actual supplier SDS/CAS and batch additions establish CAS 123-86-4. Do not infer presence from screen printing or use a near-name isomer.

- Selected flow: n-Butyl acetate thinning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_materials. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: epa-eiip-2002

###### cleaner (`cleaner`)

Conditional single ethyl-acetate solvent component, CAS 141-78-6, of actual cleaning supply; pure/component mass only, with separately identified other formulation constituents. Actual supplier identity and background must be independently checked. Use either this separately accounted pure/component exchange or a verified complete cleaning formulation with its constituent ledger; never add component exchanges on top of a full formulation exchange for the same receipt.

- Selected flow: Ethyl acetate `7b656504-e685-4170-ab6a-56f948c994ee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_materials. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: epa-eiip-2002

###### emulsion (`emulsion`)

Actual single purchased stencil emulsion formulation, wet mass and chemistry, used in digital exposure/preparation; auxiliary sensitizer/reclaimer, if separately supplied, needs its own card before dataset completion.

- Selected flow: Screen stencil photosensitive emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_materials. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: mr-screen-production

###### mesh (`mesh`)

Replacement monofilament polyester printing mesh only. Record woven construction, grade and reuse cycles; broad record includes this subset but its textile-classification description is not a ceramic-screen specification.

- Selected flow: Fabrics for Screen `aa291ffd-eaaa-4345-88eb-a1a897ad3ece`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_materials. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: mr-screen-production

###### water (`water`)

Purchased process water for exposure wash, cleaning and actual QC release tests; no routine factory transfer application is included. Record supply origin and provider mass basis.

- Selected flow: Water, process `d8ad9111-4304-46fb-bc23-9a2f36d65a83`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_water. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: mr-screen-production

###### electricity (`electricity`)

CN grid-average consumption supply at 1–35 kV to user: meter digital exposure, press, electric tunnel dryer, ventilation, trimming and auxiliaries. Record actual incoming voltage, region, year and downstream transformation losses. The native CN geography, voltage, grid-average route and user delivery are hard provider constraints, not generic electricity metadata. A different supply requires a compatible identity/provider and method review; this UUID cannot be imposed on the cited German producer.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_energy. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: mr-screen-production

###### interleaf (`interleaf`)

Actual waxed separation sheet used to prevent blocking, if supplied. Record paper/wax composition and background; wax paper is removable transport separation, not the decal release layer.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_packing. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: vibrantz-ceramic

###### carton (`carton`)

Actual complete carton and its fibre composition; collect the actual supplier fibre composition.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_packing. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### pe_wrap (`pe_wrap`)

Conditional actual PE-LD removable transport wrap, grade and mass; require non-self-adhesive, non-cellular film without reinforcement, lamination or backing, consistent with the selected native identity. Record actual supplier composition; this flow has no native CAS field. This packing film is not the transfer covercoat film.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_packing. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### cloth (`cloth`)

Actual replacement cotton cloth for screen cleaning; record cotton identity and contaminated waste destination.

- Selected flow: Cotton cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_materials. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: epa-eiip-2002

#### Outputs

##### Product flows

###### finished (`finished`)

1 kg accepted dry unapplied decal sheets, including actual carrier paper and release gum, retained black image and dry transfer film plus measured residual water and solvent at the accepted supplied state. “Dry” denotes accepted delivery, not an assumed oven-dry or solvent-free sheet. Exclude transport packing and test/rejected sheets.

- Selected flow: Transfers (decalcomanias) and printed calendars `aef085ba-9ea8-418c-a94e-796a8bce8c8f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: tullis-waterslide; mr-screen-production

###### interleaf_out (`interleaf_out`)

The same actual interleaf leaves with the sheets; reconcile delivered versus received stock and offcuts. No allocation of product mass to this removable sheet.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_packing. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: vibrantz-ceramic

###### carton_out (`carton_out`)

The actual delivered carton mass, matched to packing inputs and stock changes, remains outside reference mass.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_packing. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### pe_wrap_out (`pe_wrap_out`)

Actual delivered PE-LD wrap; same physical identity as input, reconciled mass, outside reference mass.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_packing. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

##### Waste flows

###### paper_trim (`paper_trim`)

Dry trimmed/rejected gummed and printed sheet waste to actual receiver. Disclose pigment/flux/lacquer contamination, gum and moisture; the broad waste-paper identity does not establish recycling suitability.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_waste. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: jrc-paper-bref-2015

###### ink_waste (`ink_waste`)

One actual collected wet ink-residue stream; record pigment/flux/metals, organic solvent content and receiver.

- Selected flow: Waste black ceramic screen-printing paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_waste. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: epa-eiip-2002

###### lacquer_waste (`lacquer_waste`)

Actual separately collected lacquer residue; retain wet/dry composition and receiving treatment separately from ceramic ink waste.

- Selected flow: Waste ceramic decal covercoat lacquer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_waste. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: vibrantz-ceramic

###### solvent_waste (`solvent_waste`)

Conditional actual separately collected ethyl-acetate-containing cleaning liquor; characterize contaminants and retained solvent, not a default recovery credit.

- Selected flow: Spent ethyl-acetate screen-cleaning liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_waste. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: epa-eiip-2002

###### washwater (`washwater`)

Actual segregated aqueous stencil wash to documented external receiver, with volume/mass, suspended solids and chemistry. Not a direct elementary water discharge or manganese-residue washing waste.

- Selected flow: Screen-preparation washwater to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_water. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: mr-screen-production

###### rags (`rags`)

Actual spent cloth stream, with retained solvent and contaminant mass; do not duplicate its solvent in the collected liquid or emitted species.

- Selected flow: Spent solvent-contaminated cotton cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_waste. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: epa-eiip-2002

###### stencil_waste (`stencil_waste`)

Only physically separated collected stencil solids to receiver; solids still in washwater belong there and are not counted twice.

- Selected flow: Spent screen stencil emulsion solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_waste. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: mr-screen-production

###### collected_dust (`collected_dust`)

Actual collected dust with paper/gum/ink/lacquer composition and receiver; distinguish from outdoor particulate escape and internal reuse.

- Selected flow: Collected dry decal-sheet cutting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_waste. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: jrc-paper-bref-2015

###### Spent polyester printing mesh (`spent_mesh`)

Actual retired PET mesh to the documented receiver; record emulsion/ink contamination and reuse lifetime, independently of separated stencil solids.

- Selected flow: Spent polyester printing mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: mr-screen-production

##### Elementary flows

###### pm_fine (`pm_fine`)

Conditional net outdoor-air emission, unspecified subcompartment, aerodynamic PM2.5 fraction only, from actual dry cutting and handling; measure after capture. No positive dust factor is assigned.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_air. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: jrc-paper-bref-2015

###### pm_coarse (`pm_coarse`)

Conditional net outdoor-air emission, unspecified, 2.5–10 micrometre fraction only. Derive from aligned cumulative monitors only with measured bases; never add PM10 again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_air. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: jrc-paper-bref-2015

###### pm_large (`pm_large`)

Conditional net outdoor-air emission, unspecified, particles above PM10 only; require size-resolved evidence, not total minus guessed PM10.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_air. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: jrc-paper-bref-2015

###### butyl_air (`butyl_air`)

Conditional CAS 123-86-4 actually present and escaping the site, from thinning or formulation constituents; no double count with total VOC.

- Selected flow: n-Butyl acetate to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_air. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-eiip-2002

###### ethyl_air (`ethyl_air`)

Conditional CAS 141-78-6 net outdoor-air emission, unspecified; include fugitive and vented release after actual retention/recovery, never count workplace indoor exposure as another emission. Require ethyl acetate, not methyl acetate; conflicting source synonym formulas cannot establish identity or a conversion factor.

- Selected flow: ethyl acetate `4d9a8790-3ddd-11dd-97ba-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_air. Conditional rows require an actual occurrence record or evidenced zero, never an assumed positive amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-eiip-2002

###### Water evaporation (`water_vapour`)

Actual net water vapour emitted to outdoor air, unspecified, from wet preparation, conditioning and drying; reconcile to purchased water, water carried by paper/gum and every wet formulation, liquid/solid waste, beginning/end stocks and product residual water. Measure inlet/outlet ambient humidity on matched air bases; report net process-generated vapour without counting incoming atmospheric moisture again. Actual reaction water or oxygen uptake requires a separate evidenced H/O/component balance, not a guessed closure term. Require ordinary H2O, CAS 7732-18-5, in the declared vapour phase. Source synonyms for heavy/tritiated water or ice cannot establish isotope composition, phase or a conversion factor. This is not purchased steam or a water withdrawal.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exchange total divided by the same accepted output Q; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_separate | foreground | First investigate process subdivision and feasible system expansion to avoid allocation; meter actual campaigns/stages and directly attributable shared utilities. If neither is feasible, justify a relevant causal physical relationship; another relationship, including economic allocation, requires documented reasons for rejecting prior steps and matched output/value records. Expanded-system results cover the added functions explicitly. This uses the hierarchy in PEF Annex I Section 4.5 only and does not claim full PEF conformity or adopt a recycling formula. Physical product, stock, waste, water and carbon balances retain actual quantities before any environmental burden allocation; never multiply co-product physical output by allocation share. | pef-allocation |
| allocation_waste | waste | No co-product or substitution credit is assumed for contaminated paper, spent solvent or ink. If actual marketable recovery exists, independently establish quality, receiver and method, report pre-allocation physical balances and post-allocation burden ledger separately. Internal returns are counted once and treatment receiver burdens are linked explicitly. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Layer Accounting

| component_id | Physical layer | Quantity and fate |
| --- | --- | --- |
| carrier | Temporary cellulose-paper carrier | Supplier base-sheet dry mass and actual moisture, present at gate, later removed; never a directly applied label face |
| release | Water-softenable gum release layer | Actual supplier coat composition/mass on the purchased paper; require lot specification or validated differential weighing, disclose uncertainty and test loss; no guessed starch/PVA recipe |
| image | Black ceramic ink image | Wet paste input separates actual pigment/flux solids, medium and solvents; retained image solids distinct from transfer film |
| film | Clear organic covercoat transfer film | Wet lacquer input, dried retained film and air/waste solvent outputs separately; downstream burnout is not a permanent polymer decoration |

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | decal_converting | finished | foreground_record | accepted sheet lots; wet/dry net mass; tare; design; moisture; test/reject mass | Calibrated weighing and lot acceptance; moisture test at actual supplied state; preserve batch output Q | kg | Each lot and matched reporting period | Complete matched period, including setup and rejects | Actual site and supplier lots | per 1 kg reference flow | Calibration, batch/SDS/provider records, acceptance and uncertainty |
| cp_layers | decal_converting | decal_paper, ceramic_ink, covercoat | foreground_record | supplier lots; carrier and gum dry masses; coat composition; wet ink/lacquer; retained image/film solids; water/solvent residual; area | Supplier actual batch bill and validated coat-mass witness/differential tests; weigh each layer addition and dried witness; reconcile retention and test losses, never use a brochure grade as recipe | kg | Each lot and matched reporting period | Complete matched period, including setup and rejects | Actual site and supplier lots | per 1 kg reference flow | Calibration, batch/SDS/provider records, acceptance and uncertainty |
| cp_materials | decal_converting | materials | foreground_record | receipts; beginning/end stock; returns; formulation/SDS/CAS; mesh life; solids; supplier background; constituents | Calibrated issues/returns plus inventory reconciliation; record actual replacement/reuse and formulations; separate each newly identified exchange | kg | Each lot and matched reporting period | Complete matched period, including setup and rejects | Actual site and supplier lots | per 1 kg reference flow | Calibration, batch/SDS/provider records, acceptance and uncertainty |
| cp_energy | decal_converting | electricity | foreground_record | stage submeters; actual voltage; transformer losses; drying heater and ventilation; region/year/provider; kWh | Read calibrated matched-period meters; separately retain prepress/press/drying/trim counters and idle/changeover shares; verify electric-only heat | kWh; MJ | Each lot and matched reporting period | Complete matched period, including setup and rejects | Actual site and supplier lots | per 1 kg reference flow | Calibration, batch/SDS/provider records, acceptance and uncertainty |
| cp_water | decal_converting | water, washwater | foreground_record | purchased and returned water; density/temperature; washwater mass/volume; solids; receiver; residual water | Meter supply and segregated discharge, characterize washwater and measure retained/evaporated water; internal recirculation is not another withdrawal | kg | Each lot and matched reporting period | Complete matched period, including setup and rejects | Actual site and supplier lots | per 1 kg reference flow | Calibration, batch/SDS/provider records, acceptance and uncertainty |
| cp_packing | decal_converting | packing | foreground_record | interleaf/carton/PE grade; receipt; shipped mass; stock; offcuts; tare; reusable shares | Weigh actual individual packing components; match input and shipped output and stocks, exclude from Q | kg | Each lot and matched reporting period | Complete matched period, including setup and rejects | Actual site and supplier lots | per 1 kg reference flow | Calibration, batch/SDS/provider records, acceptance and uncertainty |
| cp_waste | decal_converting | wastes | foreground_record | separate stream mass; composition; solvent/water/solids; collected dust sizes; receiver; manifests | Calibrated segregated bins and waste transfer records; avoid double counting solids in water, solvent in rags, internal reuse and emitted dust | kg | Each lot and matched reporting period | Complete matched period, including setup and rejects | Actual site and supplier lots | per 1 kg reference flow | Calibration, batch/SDS/provider records, acceptance and uncertainty |
| cp_air | decal_converting | elementary releases | foreground_record | actual chemical CAS; input species fractions; retained/stock/waste/recovery species; matched vent/fugitive measurement; disjoint PM fractions; capture; uncertainty | Species-specific material balance and verified net vent/fugitive monitoring; apply actual capture/retention only. Survey all formulation constituents; new actual release species require separate verified cards | kg | Each lot and matched reporting period | Complete matched period, including setup and rejects | Actual site and supplier lots | per 1 kg reference flow | Calibration, batch/SDS/provider records, acceptance and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_basis | all inventory rows | For each row i, divide its measured period exchange A_i by accepted net output Q; a_i = A_i / Q. Keep the numerator unit and disclose stock/changeover reconciliation. | A_i; Q; cp_output | Amount per 1 kg reference flow |  |
| layer_reconcile | decal_paper, ceramic_ink, covercoat, finished | Accepted sheet mass is retained dry carrier + dry gum + retained image solids + retained covercoat-film solids + actual residual water/solvent. For purchased composite paper, its component sum reconciles to one receipt; no constituent double counting. | cp_layers; cp_output | Disclosed physical layer balance | tullis-waterslide; vibrantz-ceramic |
| solvent_balance | butyl_air, ethyl_air | For each actual species, net release is species input minus product retention, net stock accumulation, solvent sent out in each waste and documented recovered export. Internal solvent recovery is a loop, not destruction. Reconcile monitored vent and fugitive components without subtracting recovery twice or adding total VOC again. A negative/unclosed balance requires investigation, never clamping to zero. | cp_materials; cp_layers; cp_waste; cp_air | Species-specific net kg release | epa-eiip-2002 |
| wet_stream_balance | wet formulations and waste outputs | For each separately collected liquid stream, use whole wet mass or V multiplied by its measured density at the recorded state. Keep H2O, non-water liquids, actual solids and contaminants as internal composition ledgers whose sum equals that one whole stream; never send its solids or solvent out again unless physically separated and independently measured. Semisolid paste, separated solids, captured dust and contaminated cloth require their actual phase and receiver; “wet” alone does not establish liquid identity. Track issues/unused returns, beginning/end raw-material and work-in-progress stocks, test loss and internal rework once. | cp_layers; cp_materials; cp_water; cp_waste | Reconciled whole-stream and component accounts with residual uncertainty | epa-eiip-2002 |
| packing_reconcile | interleaf, carton, pe_wrap and their shipped outputs | For each actual component reconcile beginning stock plus receipts against end stock, shipped packing, unused supplier returns, recorded offcuts/damage and other actual losses. Shipped tare is outside Q. Screen inbound supplier containers, pallets, tape and other actual packing separately; identify each additional exchange and compatible receiver instead of hiding it in the sheet or imposing a generic packing rate. | cp_packing; cp_materials; cp_waste | Full individual packing/input-stock-output account |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| physical_balances | all inventory rows | Retain pre-allocation paper/solids, water and fossil/biogenic carbon balances, supplier backgrounds, actual losses and stock changes with uncertainty. Carbon in paper/gum/film is not an invented direct CO2 emission; actual biogenic CO2, if an expanded route emits it, must never be removed because of greenhouse-gas reporting conventions. | cp_layers; cp_water; cp_waste; cp_air |
| identity_provider | all inventory rows | Verified broad identities require actual compatible material/route qualifiers and independent provider quantity/background checks. Missing UUIDs or unresolved chemical composition/receiving medium remain explicit gaps before concrete dataset release. Survey every actual extra chemical, waste or release; this conditional inventory is not a fixed factory recipe. | cp_materials; cp_air |
| actual_consumables | screen preparation, press, drying, cleaning and controls | Screen actual frame/replacement parts, squeegees, sensitizers, reclaimers, antiblocking additions, oils/greases, filters and other maintenance/control consumables and their spent streams. A supplier-emulsion formulation is one receipt; separately purchased auxiliaries are separate exchanges. Retain reusable life/stock allocation and actual setup/replacement records; add each actual material, chemical, waste and elementary release as an atomic card before claiming complete LCI. No positive generic consumption is invented. If onsite abatement is present, measure its inputs, captured streams and actual species transformations in an explicit process extension; captured VOC is not automatically destroyed and exhaust after capture is the gate emission. | cp_materials; cp_energy; cp_water; cp_waste; cp_air |
| source_scope | all source rules | Manufacturer statements support the corresponding layer/operation only. Do not claim one maker uses another supplier’s grade. EPA supports solvent accounting, JRC supports actual upstream paper and qualitative cutting screening; no historical factor or single-site amount is generalized. | mr-screen-production; tullis-waterslide; vibrantz-ceramic; epa-eiip-2002; jrc-paper-bref-2015 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | Reject incompatible receiver/process routes, direct PSA labeling and every calendar. Require actual hard-porcelain glaze/firing compatibility; food-contact suitability requires separate actual migration/compliance evidence and is not established by this PCR. | mr-screen-production |
| validate_basis | all inventory rows | Require exactly one finished reference output, 1 kg basis in both languages and all protocols; preserve carrier/gum/ink/film and exclude packing from Q. Missing Q or unresolved reference identity blocks normalization. |  |
| validate_releases | elementary and waste outputs | Require exact chemical/CAS, actual receiving compartment and reference property/unit; reject correction flows, near-name species, double-counted cumulative PM or VOC, and direct-water UUIDs for external treatment. Keep collected dust separate. Actual additional species require their own identity/measurement audit. | epa-eiip-2002; jrc-paper-bref-2015 |
| validate_coverage | dataset | Report measured versus estimated/missing quantities, performed/skipped checks, unresolved UUIDs/provider bases and completeness. Authored method status does not prove a complete plant dataset or independent scientific approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground decal converting process with explicit supplier background links |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Physically qualified gate production of these unapplied porcelain-onglaze decal sheets; link actual use/firing separately |
| excluded_use | Calendar/label/full porcelain manufacture; incompatible receiver or transfer route; lifetime/food-contact claims without actual evidence |
| required_metadata | All reference qualifiers, per-row units and supply/receipt/receiver identity, boundaries, raw collection period and allocation |
| required_quality_disclosure | Layer/physical balances, measured/calculated gaps, UUID/provider compatibility debts, loss/stock/uncertainty and independent review state |
| update_trigger | Change of paper/gum, ink/film formulation, receiver glaze/firing compatibility, heating/controls, suppliers, emission identities or measurement basis |

## 11. Data Sources

| source_id | Title | type | reference | used_for |
| --- | --- | --- | --- | --- |
| tullis-waterslide | Waterslide Ceramic and Glass | handbook | https://www.tullisrussell.com/wp-content/uploads/Waterslide-Ceramic-and-Glass-1.pdf | PDF page 2: carrier/ink/covercoat diagram and clean-firing gum; qualitative structure only, not a gum formula or universal grammage |
| mr-screen-production | Screen printing for ceramic organic and technical decals | handbook | https://www.ceramictoner.com/en/pages/m-r-printdivision | Official production scope and machines, web paragraphs ceramic screen printing and cylinder screen/tunnel dryer/digital exposure; maker capability, not supplier recipe or heater fuel |
| vibrantz-ceramic | Ceramic Decoration Colors and Materials | handbook | https://vibrantz.com/expertise-and-solutions/products/ceramic-decoration-colors-and-materials | Sections flowing covercoats/media, cleaners, antiblocking and thixotropic covercoats: transferable printed lacquer film and burnout; actual formula/suitability still required |
| epa-eiip-2002 | EIIP Volume II Chapter 15 Printing Packaging and Graphic Arts | official_guidance | https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | May 2002, section 4.1.1, PDF31/printed15.4-1: input/retention/capture balance definitions only; no historical control or retention defaults |
| jrc-paper-bref-2015 | BAT Reference Document for Production of Pulp Paper and Board | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 2015, 7.1.10, PDF708/printed670: actual upstream paper finishing and dust potential; downstream dry-cut screening is physical analogy, not an emission factor or recycling guarantee |
| pef-allocation | Product Environmental Footprint Method, Annex I | official_guidance | https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Section 4.5, PDF/printed pages 63–64: subdivision/system expansion, relevant physical relationship, then justified other relationship; hierarchy only, no claim of complete PEF compliance or default recycling credit |
