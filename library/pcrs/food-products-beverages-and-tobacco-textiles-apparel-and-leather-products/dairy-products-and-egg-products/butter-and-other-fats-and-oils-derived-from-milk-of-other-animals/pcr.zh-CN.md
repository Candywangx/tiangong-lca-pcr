---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-other-animals
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他动物乳制黄油及其他乳脂和乳油

## 1. 范围与适用性

本 PCR 覆盖以牛和水牛以外动物的乳为来源的黄油、乳脂涂抹酱、黄油脂、无水乳脂、黄油油、酥油及其他乳源脂肪或油。当天然、罐装、熔融、分提、重组、再凝固、加盐及类似市场状态的申报产品仍属于乳脂产品时，本 PCR 均可适用。生产数据包应识别全部来源物种，并保留可审计的农场、供应商、收货或监管链证据，将每项乳源投入与其来源物种关联。

本类别是残余物种 gate。牛乳来源产品排除为 CPC 22241，水牛乳来源产品排除为 CPC 22242。物种未知、混合物种投入未披露全部物种、或分类主张缺少可审计物种证据时，应标记为 `manual_review`，不得表示其自动符合本 PCR。非乳脂替代品，以及以非乳成分替代乳脂的产品不在范围内。产品识别与命名遵循适用的 CXS 279-1971、CXS 280-1973 和 CXS 206-1999 定义，但其中的组成限值与质量规格不得作为默认 LCI 数量。

前景 gate 从制造场址接收已申报且物种可审计的乳、稀奶油、黄油、乳脂或其他乳源原料开始，在未包装产品离开工厂时结束；若包装和储存被纳入，则在包装产品到达申报发运 gate 时结束。上游畜牧养殖和原乳生产应链接独立数据集，不得静默并入前景制造记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-other-animals |
| classification_refs | CPC 3.0：22249，其他动物乳制黄油及其他乳脂和乳油 |
| covered_products | 牛和水牛以外动物乳制黄油、乳脂涂抹酱、黄油脂、无水乳脂、黄油油、酥油及其他脂肪或油；天然、罐装、熔融、分提、重组、再凝固、加盐及类似市场状态 |
| excluded_products | 牛乳来源产品（CPC 22241）；水牛乳来源产品（CPC 22242）；来源物种未知或未经审计；非乳脂替代品；以非乳成分替代乳脂的产品 |
| representative_product | 一种来源于已识别的非牛、非水牛动物，且已申报市场状态的黄油或乳脂产品 |
| production_route | 接收并核验其他动物乳源原料，按路线进行脂肪分离或浓缩、黄油加工或乳脂澄清、可选配料、包装和储存 |
| market_state | 工厂 gate 未包装产品或发运 gate 包装产品，并申报物种、产品形态、组成基准、包装状态和储存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完全来源于已识别的牛和水牛以外动物乳或乳制品的已申报黄油或其他脂肪或油 |
| How much | 申报 gate 处 1 kg 净产品 |
| How well | 符合申报的产品识别和市场规格；记录来源物种、产品形态、适用时的脂肪和水分测量基准，以及包装和储存状态 |
| How long or cycle | 在申报工厂或发运 gate 交付的一个生产批次；不赋予使用期限功能 |
| reference_flow_link | 下列 Tiangong 产品流，并由来源物种、产品形态、路线、组成基准、gate、包装状态和储存条件限定 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Butter and other fats and oils derived from milk of other animals `57b3e5ff-3686-4435-96b5-9c09b765a0ac` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 每项乳源投入的来源动物物种；物种证据引用；产品形态；生产路线；适用时的脂肪和水分测量基准；适用时的加盐或未加盐状态；gate；包装状态；储存条件；地理范围；生产期间；批次或生产活动标识 |

构建前景数据包时，`必需限定信息` 中的每项信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。来源物种识别或证据缺失将触发 `manual_review`；其他限定信息缺失则使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以申报 gate 处的 kg 净产品表示参考流；扣除包装皮重，除非研究将包装总质量明确建模为独立流。 |
| `lot_mass_balance` | 乳源原料、产品、共产品、损失和回收残余物 | Mass | kg | 保留实测批次或生产活动质量及其水分或组成基准；仅在确定质量平衡期间和参考产品产出后进行归一化。 |
| `energy_carrier_separation` | 外购电力、外购热力和现场燃料 | 与能源载体相符的能量或质量/体积 | kWh、MJ、kg 或 m3 | 分别记录电力、外购热能和每种燃料；记录换算，且不得将不同能源载体合并为无说明的总量。 |
| `water_stream_separation` | 工艺水、清洗水、回收水和废水 | 质量或体积 | kg 或 m3 | 换算时采用一致的密度或直接测量基准，并将回用水与新鲜取水和排放废水分开。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `species_scope_gate` | 产品识别和每项乳源投入 | 仅纳入具有可审计证据、证明全部来源动物既不是牛也不是水牛的产品。物种未知、混合物种披露不完整或分类证据未经审计时，必须进入 `manual_review`。 | `unsd-cpc-3-0-22249`; `codex-cxs-206-1999` |
| `foreground_unit_operations` | 申报制造路线 | 纳入收货和冷藏、实施时的脂肪分离或浓缩、黄油路线的搅拌和压炼、实施时的加热、澄清、脱水、分提、重组、再凝固或风味形成、直接工艺公用工程、清洗、产品回收、废水处理和现场废物处理。 | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `eu-fdm-bat-2019-2031` |
| `upstream_linkage` | 外购乳源原料、配料、包装、能源、水、化学品和运输 | 将每项外购投入记录为可见产品流，并链接在地理和技术上具有代表性的上游数据集；不得用供应商活动数据之外的组成限值或 BAT 性能水平替代实际数据。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `direct_emissions_and_wastes` | 前景场址 | 记录纳入操作产生的实测或计算直接排放、废水流、产品损失、残余物和废物，以及处理路线和数据来源。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `packaging_and_storage_gate` | 包装发运 gate 产品 | 仅当一次、二次和三次包装以及储存或制冷发生在申报 gate 之前时纳入；否则披露其排除。 | `eu-pef-2021-2279` |
| `no_silent_cutoff` | 前景清单 | 记录全部已知投入和产出。任何排除都应明确说明理由、尽可能量化，并作为数据缺口或下游研究特定 cut-off 报告，不得从前景数据包中静默省略。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收物种已识别且证据可审计的乳源原料 |
| starting_condition_role | 前景制造起点和物种识别控制点 |
| product_classification_scope | 仅 CPC 3.0 22249；排除牛乳来源 CPC 22241 和水牛乳来源 CPC 22242 |
| recursive_input_rule | 已属于本 PCR 类别的外购投入仍作为显式产品投入并带有自身上游数据集；不得在消费过程中递归重建其制造。 |
| upstream_dataset_requirement | 将原乳生产或既有乳脂产品制造、配料、包装、能源、水、化学品和运输链接至代表性上游数据集，并披露来源物种和 gate 兼容性。 |
| disclosure | 申报来源物种与证据、投入形态、产品形态、生产路线、前景 gate、纳入单元操作、包装和储存状态、地理范围、生产期间、分配方法以及每项排除或数据缺口。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `milkfat_product_manufacturing` | 其他动物乳脂产品制造 | required |  | 从接收物种已识别原料到未包装产品的前景制造 | 1 kg 未包装参考产品 |
| `packaging_and_dispatch_storage` | 包装与发运储存 | conditional | 当包装或包装后储存发生在申报参考 gate 之前时纳入。 | 前景整饰和发运 | 1 kg 包装参考产品 |

### 过程：其他动物乳脂产品制造（`milkfat_product_manufacturing`）

#### 输入

##### 产品流

###### 物种已识别乳源原料（`milk_derived_feedstock_input`）

按来源物种、供应商批次、产品形态、组成基准和上游数据集分别记录每项接收的乳、稀奶油、黄油、乳脂或其他乳源原料。牛、水牛、未知或未经审计的投入不通过类别 gate。

- 选定流：其他动物乳、稀奶油、黄油、乳脂或路线特定乳源原料
- 流属性/单位：Mass / kg
- 数量规则：每个接收批次的实测验收质量，仅换算至申报的测量基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

###### 配料和加工助剂（`ingredients_and_processing_aids`）

记录申报路线实际消耗的盐、发酵剂、允许的配方配料和加工助剂。Codex 许可或组成规格只用于确立产品识别，不代表清单数量。

- 选定流：路线特定配料或加工助剂
- 流属性/单位：Mass / kg
- 数量规则：生产批次的领用量减去有记录的退回或回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`codex-cxs-279-1971`; `codex-cxs-280-1973`

###### 外购电力（`manufacturing_electricity`）

记录收货、分离、搅拌、压炼、加热、澄清、脱水、分提、重组、冷却、泵送和可直接归属清洗操作使用的计量电力。

- 选定流：供应至制造场址的电力
- 流属性/单位：Energy / kWh
- 数量规则：覆盖批次或生产活动的分表用量，或以场址总表为基础的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 热能和现场燃料（`manufacturing_thermal_energy`）

按路线和期间分别记录外购蒸汽或热力以及每种现场燃料。保留能源载体、数量、热值基准、锅炉或加热设备归属以及热回收信息。

- 选定流：外购热力、蒸汽或路线特定燃料
- 流属性/单位：能量或载体质量/体积 / MJ、kWh、kg 或 m3
- 数量规则：可归属于生产批次或生产活动的计量热力或实测燃料用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 工艺和清洗用水（`process_and_cleaning_water`）

将进入产品接触操作、工艺步骤和清洗的新鲜水与回收或回用水分开记录，并保留测量和回用边界。

- 选定流：路线和来源特定的水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：覆盖批次或生产活动中按来源和用途实测的取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-fdm-bat-2019-2031`

###### 清洗和消毒化学品（`cleaning_chemicals`）

记录实际消耗的每种清洗或消毒化学品，包括适用时的 CIP 加药；不得将 BAT 加药量或性能值作为默认 LCI。

- 选定流：配方特定清洗或消毒化学品
- 流属性/单位：Mass / kg
- 数量规则：覆盖批次或生产活动的实测领用、加药系统记录或库存核对量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装参考乳脂产品（`unpackaged_reference_product`）

记录制造 gate 处申报产品形态的验收净质量。选定的 Tiangong 流识别是固定的；具体数据集是否符合本残余物种类别由批次限定信息确定。

- 选定流：Butter and other fats and oils derived from milk of other animals `57b3e5ff-3686-4435-96b5-9c09b765a0ac`
- 流属性/单位：Mass / kg
- 数量规则：实测验收净产品质量；归一化至 1 kg 参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

###### 可销售共产品和回收乳组分（`saleable_coproducts`）

按实测质量和去向分别记录酪乳、脱脂组分、回收乳固体或其他可销售产出。不得仅为减少负荷而将某个流划为共产品。

- 选定流：路线特定可销售共产品或回收乳组分
- 流属性/单位：Mass / kg
- 数量规则：质量平衡期间作为产品离开过程的实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

##### 废物流

###### 产品损失和不可销售残余物（`product_losses_and_residues`）

按实测或核对质量及实际处理路线记录泄漏、不合格产品、含脂残余物、过滤残余物及其他不可销售物料。

- 选定流：送往处理的路线特定产品损失或残余物
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，或经调查并分配到处理路线的质量平衡差额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019-2031`

###### 制造废水（`manufacturing_wastewater`）

记录分流废水体积或质量、排放或处理目的地，以及与设施有关的监测特征。已回收产品和已回用水不得同时计入排放废水。

- 选定流：送至申报处理或排放路线的废水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：覆盖批次或生产活动的计量排放量或有记录水量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

###### 现场能源和加工直接排放（`direct_site_emissions`）

记录实测排放，或依据采集活动数据和有记录因子计算排放。分别保留空气、水和土壤环境区室及各物质。

- 选定流：物质和环境区室特定基本流
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或按 `calculate_direct_emissions` 使用采集的燃料、工艺和处理活动数据计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：包装与发运储存（`packaging_and_dispatch_storage`）

#### 输入

##### 产品流

###### 待包装未包装乳脂产品（`unpackaged_product_for_packing`）

将实测未包装参考产品转入本过程，不重复计算生产负荷。

- 选定流：Butter and other fats and oils derived from milk of other animals `57b3e5ff-3686-4435-96b5-9c09b765a0ac`
- 流属性/单位：Mass / kg
- 数量规则：进入包装的实测净产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

###### 包装材料（`packaging_materials`）

按材料、适用时的再生含量主张、供应商以及实测领用量或物料清单，分别记录一次、二次和分配的三次包装。

- 选定流：材料特定包装材料
- 流属性/单位：Mass / kg
- 数量规则：与包装可销售产出核对的产品特定物料清单
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

###### 包装和储存电力（`packaging_storage_electricity`）

使用计量或有记录分配数据，记录申报 gate 前纳入的包装线和发运前冷藏电力。

- 选定流：供应至包装和发运储存的电力
- 流属性/单位：Energy / kWh
- 数量规则：包装批次和申报储存时段的分表用量或有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装参考乳脂产品（`packaged_reference_product`）

记录发运时的验收净产品质量。包装质量保留为独立清单投入，不计入 1 kg 净参考数量。

- 选定流：Butter and other fats and oils derived from milk of other animals `57b3e5ff-3686-4435-96b5-9c09b765a0ac`
- 流属性/单位：Mass / kg
- 数量规则：发运时实测验收净产品质量；归一化至 1 kg 参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

##### 废物流

###### 包装损失（`packaging_losses`）

按材料和处理路线记录离开过程的拒收、破损或未使用包装。

- 选定流：材料特定包装废物
- 流属性/单位：Mass / kg
- 数量规则：包装批次的实测废物质量或包装核对量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 路线特定操作和可直接归属的流 | 细分单元操作、仪表、批次和清洗记录，使可直接归属的投入、产出和排放保留给造成这些流的产品或共产品。 | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | 不可分割的多功能过程 | 无法细分时，使用能够反映共享流成因功能且有记录、可量化的物理关系；说明其与各产出的相关性。 | `eu-pef-2021-2279` |
| `allocation_other_relationship_fallback` | 缺少可辩护物理关系的共享流 | 仅在说明细分和物理分配不可行后，使用经济分配等其他关系；采用批次、生产活动、市场和过程阶段特定数量与价值，并披露敏感性。 | `eu-pef-2021-2279` |
| `allocation_no_universal_factor` | 黄油、酪乳、脱脂组分、乳固体、残余物和其他产出 | 不得在不同动物物种、产品形态或路线间使用一个通用分配因子。Codex 组成限值和质量指标以及 EU BAT 性能水平均不是分配因子或默认 LCI。 | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `eu-fdm-bat-2019-2031` |
| `allocation_output_status` | 回收物料、残余物、废物和共产品分类 | 根据过程 gate 处可审计的去向和经济或法律状态对每项产出分类。作为废物处理的物料承担实际处理负荷；可销售产出仍为适用申报分配规则的共产品。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_species_identity` | milkfat_product_manufacturing | 来源物种资格 | 供应商和收货识别记录 | 供应商批次；来源物种；农场或监管链引用；乳源投入形态；收货日期；验收或拒收状态 | 将供应商声明和可审计来源证据核对至每个接收批次；将未知、牛、水牛或冲突结果转入人工审核 | not applicable | 每个接收批次 | 完整生产期间 | 全部供应来源和收货场址 | 在每个批次通过物种 gate 前不得跨批次汇总 | 签署的供应商证据、可追溯来源记录、收货记录和审核处置 |
| `cp_material_balance` | milkfat_product_manufacturing | 乳源投入、配料、产品、共产品和内部转移 | 批次或生产活动质量平衡记录 | 批次 id；物料 id；乳源物料的来源物种；投入质量；产出质量；退回；回收；损失；水分或组成基准；时间戳 | 校准秤、储罐测量、生产记录和库存核对 | kg | 每次收货、转移和产出事件 | 每个生产批次或同质生产活动 | 每个制造和包装场址 | 在一个申报基准上汇总兼容记录，调查不平衡后除以验收净参考产品质量 | 校准记录、批次谱系、核对批准和基准换算记录 |
| `cp_utility_records` | milkfat_product_manufacturing | 电力、外购热力、蒸汽和燃料 | 仪表、发票或燃料领用记录 | 仪表 id；载体；起止读数；燃料量；热值基准；生产期间；分配键；回收热 | 优先分表；否则使用有记录的因果分配键将场址总表或发票与运行记录核对 | kWh、MJ、kg 或 m3 | 连续或每个仪表与燃料读数时段 | 覆盖季节运行的代表性生产期间 | 每个场址和可归属公用工程系统 | 按载体和过程汇总，扣除有记录的输出或回收，并归一化至验收产出 | 仪表校准、发票核对、运行小时记录和分配理由 |
| `cp_water_and_wastewater` | milkfat_product_manufacturing | 新鲜水、回用水和废水 | 水表、回用日志和废水记录 | 来源；仪表读数；用途区域；回用体积；排放体积；目的地；监测时的相关 pH、温度、COD 或 TOC、氮、磷、氯化物、电导率和固体 | 在最适当的过程或场址层级直接计量和监测，并以水量平衡支持 | kg 或 m3 及参数特定单位 | 每个仪表时段和监测事件 | 代表性生产期间 | 每个场址、水源、回用回路和排放点 | 分开保留新鲜水、回用水和排放流；汇总兼容记录并归一化至验收产出 | 仪表校准、实验室方法、采样记录和水量平衡闭合 |
| `cp_cleaning_records` | milkfat_product_manufacturing | 清洗和消毒化学品 | CIP 或消毒批次记录 | 化学品识别；浓度；剂量；水量；温度；适用时的电导率或 pH；循环 id；设备；回收或排放量 | 加药系统日志、库存核对和 CIP 控制记录 | kg 和 m3 | 每个清洗循环或核对的生产活动 | 代表性生产期间 | 每个清洗回路和场址 | 按纳入设备汇总实际化学品和水耗，并归一化至验收产出 | 加药校准、库存核对、CIP 趋势和异常日志 |
| `cp_waste_records` | milkfat_product_manufacturing | 产品损失、残余物和废物 | 废物转移和生产损失记录 | 物料识别；来源操作；质量；产品或废物状态；处理路线；运输方或接收方；日期 | 秤记录、库存核对和废物转移文件 | kg | 每次事件或容器发运 | 代表性生产期间 | 每个场址和处理路线 | 按物料和路线汇总，排除已回到过程的回收产品，并归一化至验收产出 | 秤校准、转移联单、接收方证据和损失调查 |
| `cp_direct_emissions` | milkfat_product_manufacturing | 对空气、水和土壤的直接排放 | 测量或排放计算记录 | 物质；环境区室；实测值或活动数据；因子；因子来源；控制装置；运行状态；时间间隔 | 可得时直接测量，否则使用有记录因子从采集活动数据计算 | kg 及参数特定单位 | 每个监测或活动数据时段 | 包含正常变动的代表性生产期间 | 每个排放点和场址 | 按物质和环境区室分别计算，汇总兼容时段并归一化至验收产出 | 分析报告、仪器校准、活动记录、因子来源和计算复核 |
| `cp_packaging_records` | packaging_and_dispatch_storage | 包装投入和损失 | 产品特定物料清单和包装核对 | 材料；组件；供应商；领用质量；包装单元；退回质量；拒收质量；处理路线；适用时的再生含量证据 | 将物料清单与仓库领用、包装产出、退回和废物记录核对 | kg | 每个包装批次或包装生产活动 | 代表性生产期间 | 每个包装场址和生产线 | 按材料和组件汇总，并归一化至验收净产品质量 | 批准的物料清单、供应商规格、库存核对和废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 全部前景数量 | 归一化数量 = 兼容期间数量 / 申报参考产品验收净 kg | `cp_material_balance` 加适用采集协议 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `close_material_balance` | 乳源物料、配料、产品、共产品、回收物料和损失 | 将申报基准上的总投入质量与总产出、回收、蒸发或去除水以及损失质量比较；归一化前调查并披露无法解释的不平衡 | `cp_material_balance`; `cp_waste_records` | 经审核的批次或生产活动质量平衡及披露残差 |  |
| `calculate_direct_emissions` | 未连续实测的现场直接排放 | 按物质和环境区室的排放量 = 采集活动量乘以有记录的适用因子，且仅按有证据的控制效率调整 | `cp_direct_emissions`; `cp_utility_records`; `cp_water_and_wastewater` | 每 1 kg 参考产品的 kg 基本流 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `allocate_shared_inventory` | 共享前景投入和排放 | 应用申报分配层级：先细分，其次相关物理关系，最后有理由的其他关系；保留分子、分母、期间和敏感性数据 | 过程记录；共产品数量；分配驱动记录 | 每 1 kg 参考产品的分配量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_traceability` | 每项乳源投入 | 保留与每个供应商批次关联的物种证据。未知、冲突、牛、水牛或混合物种披露不完整时，必须进入 `manual_review` 并阻止自动 PCR 符合。 | `cp_species_identity`；供应商声明；农场或监管链记录；`unsd-cpc-3-0-22249`；`codex-cxs-206-1999` |
| `dq_technological_representativeness` | 路线和产品形态 | 数据应代表实际黄油、乳脂涂抹酱、无水乳脂、黄油油、酥油、分提、重组或其他申报路线；披露代理路线和省略单元操作。 | 过程流程图、设备清单、批次谱系和 `eu-pef-2021-2279` |
| `dq_temporal_and_geographical_coverage` | 全部前景记录 | 报告生产期间、地理范围、运行天数、季节覆盖和异常排除；说明记录为何代表申报产品和场址。 | 带日期的源记录和 `eu-pef-2021-2279` |
| `dq_completeness_and_consistency` | 前景清单 | 纳入全部已知投入和产出，采用兼容的质量和能量基准，闭合物料和水量平衡，并记录每项排除、估计、代理和未解决缺口。 | 审核的平衡、协议覆盖报告和 `eu-pef-2021-2279` |
| `dq_measurement_quality` | 仪表、秤、实验室结果和计算 | 保留与每项记录相适应的校准、采样、分析方法、因子来源、计算版本和审核证据。 | 校准证书、实验室报告、计算工作簿和 `eu-fdm-bat-2019-2031` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | 参考流 | 参考产品流 UUID 应为 `57b3e5ff-3686-4435-96b5-9c09b765a0ac`，Mass 属性 UUID 应为 `93a60a56-a3c8-11da-a746-0800200b9a66`，Units of mass UUID 应为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位应为 kg。 |  |
| `validate_species_gate` | 产品和乳源投入 | 确认每个乳源批次具有可审计来源物种证据，并确认来源均不是牛或水牛。未知、不完整或冲突证据返回 `manual_review`，不得自动判定符合。 | `unsd-cpc-3-0-22249`; `codex-cxs-206-1999` |
| `validate_product_identity` | 申报产品形态 | 确认产品仍属于与申报 Codex 识别一致的乳源黄油或其他乳脂产品；不得将 Codex 组成限值或质量值作为 LCI 数量。 | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `codex-cxs-206-1999` |
| `validate_boundary_and_route` | 前景过程图 | 确认申报 gate 前实际实施的每项单元操作均已纳入，外购投入具有上游链接，且包装和储存纳入情况与 gate 声明一致。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_inventory_provenance` | 清单行 | 确认每个非零前景数量均可追溯到采集记录或有记录计算，且未将 BAT 性能值、Codex 组成限值或无支持的通用数字用作默认 LCI。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`; `codex-cxs-279-1971`; `codex-cxs-280-1973` |
| `validate_balances_and_double_counting` | 物料、水、能源、回收和转移记录 | 确认平衡期间兼容，调查无法解释的残差，并验证回用水、回收产品、内部转移和递归同类别投入未被重复计算。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_allocation` | 多功能过程 | 确认分配层级、驱动、期间、数量、去向证据和敏感性披露；拒绝无证据跨物种或路线应用通用因子。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 发布候选 | 确认物种可追溯性、路线代表性、地理范围、时间覆盖、完整性、校准、分析方法、来源文件，以及估计、代理、排除和数据缺口披露。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 申报其他动物乳脂产品制造的前景单元过程数据包 |
| downstream_use | secondary_dataset；background_dataset；校验后的 process 和 lifecyclemodel 投影 |
| allowed_use | 可证明属于 CPC 3.0 22249，且来源物种、产品形态、生产路线、地理范围、期间、gate、包装状态、储存条件和分配方法匹配的产品 |
| excluded_use | 牛乳来源 CPC 22241；水牛乳来源 CPC 22242；物种未知或未经审计；非乳脂替代品；未披露的混合物种产品；与所代表系统存在实质差异的路线或 gate |
| required_metadata | PCR id；参考 UUID；来源物种和证据引用；产品形态；路线；适用时的组成测量基准；gate；包装和储存状态；地理范围；期间；批次或生产活动；过程图；上游链接；分配方法 |
| required_quality_disclosure | 协议覆盖；技术、地理和时间代表性；完整性；校准和分析证据；物料与水量平衡；分配理由；处理路线；估计、代理、排除、未解决缺口和人工审核处置 |
| update_trigger | 来源物种或证据链、产品形态、路线、场址、技术、配方、分配驱动、gate、包装、储存、上游数据集、测量基准、数据期间，或任何实质来源或监管要求发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-22249` | official_guidance | 联合国统计司，CPC Version 3.0 Explanatory Notes，子类 22249，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | 类别识别、纳入产品形态、残余其他动物物种 gate，以及明确排除牛 22241 和水牛 22242 |
| `codex-cxs-279-1971` | standard | Codex Alimentarius，CXS 279-1971，Standard for Butter，https://workspace.fao.org/sites/codex/Standards/CXS%20279-1971/CXS_279e.pdf（检索于 2026-08-12） | 黄油识别、乳源原料边界和路线相关配料背景；组成与质量值不作为默认 LCI |
| `codex-cxs-280-1973` | standard | Codex Alimentarius，CXS 280-1973，Standard for Milkfat Products，https://workspace.fao.org/sites/codex/Standards/CXS%20280-1973/CXS_280e.pdf（检索于 2026-08-12） | 无水乳脂、乳脂、黄油油和酥油识别及过程边界解释；组成与质量值不作为默认 LCI |
| `codex-cxs-206-1999` | standard | Codex Alimentarius，CXS 206-1999，General Standard for the Use of Dairy Terms，https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf（检索于 2026-08-12） | 乳制品定义、来源动物声明、乳品术语识别和混合物种披露 gate |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会 Recommendation (EU) 2021/2279，Environmental Footprint methods，ELI：http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-12） | 功能单位与参考流、企业特定数据、系统边界、上游数据集、多功能层级、完整性、数据质量、验证、包装和透明 cut-off 披露 |
| `eu-fdm-bat-2019-2031` | official_guidance | 欧盟委员会 Implementing Decision (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论，ELI：http://data.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-12） | 过程层级的水、能源、原料、废水、废气、残余物、监测和清洗记录采集；BAT 性能水平不作为默认 LCI |
