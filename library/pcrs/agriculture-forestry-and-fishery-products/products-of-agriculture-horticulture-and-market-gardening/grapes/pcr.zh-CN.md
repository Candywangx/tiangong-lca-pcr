---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.grapes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 葡萄

## 1. 范围与适用性

本 PCR 适用于受管理多年生葡萄园生产并在农场边界交付的新鲜整粒葡萄。包括在申报作物周期内按年分摊的建园或补植、栽培、植保、灌溉、采收，以及有条件纳入的场内分选或包装。酿酒、制汁、干燥、零售配送和消费者使用不在默认边界内。数据包应声明品种或路线、产品状态、等级或可销售判据、地理位置、作物年度、产量基准以及是否包含包装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.grapes |
| classification_refs | CPC 3.0 01330, exact; mapping relation: exact |
| covered_products | 受管理葡萄园的新鲜葡萄；品种和产品状态需声明，可包括鲜食、酿酒、制汁、葡萄干及其他路线 |
| excluded_products | 葡萄酒、果汁、干葡萄、浓缩物、葡萄籽产品、零售服务和非管理采集 |
| representative_product | 农场边界新鲜整粒葡萄 |
| production_route | 多年生葡萄园建园或补植、管理栽培、采收及有条件的场内处理 |
| market_state | 农场边界新鲜整粒葡萄，按声明为散装或包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明产品状态在农场边界交付的新鲜整粒葡萄 |
| How much | 1 kg 可销售新鲜葡萄 |
| How well | 品种或路线、产品状态、质量或等级、测量时的水分或成熟度，以及声明的用途路线 |
| How long or cycle | 一个申报葡萄园作物周期；建园和补植按声明的生产寿命分摊 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 农场边界新鲜整粒葡萄＼ |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或产品路线；散装或包装状态；等级或可销售判据；农场边界位置；作物年度；产量基准 |

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品和质量流 | Mass＼ | kg | 可销售产出和质量库存采用一致的新鲜产品基准；明确水分或干物质换算。 |
| `measurement_yield_basis` | 栽培和采收 | Mass | kg fresh grapes/ha and kg/crop cycle | 在归一化前分别记录采收量、可销售量、次品量和保留使用量。 |
| `measurement_nutrient_basis` | 肥料和土壤改良剂总卡片 | Nutrient or product mass | kg product and kg N, P2O5, or K2O | 记录实际产品及养分分析；不得从通用产品名称推断养分量。 |
| `measurement_water_basis` | 灌溉和处理用水 | Volume or mass | m3 or kg | 区分计量或计算得到的施用灌溉量与降雨。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 作物周期开始时已建立的葡萄园土壤和多年生藤本；在申报分摊期间发生的补植纳入 |
| starting_condition_role | 前景农业生产；购入种苗、养分、农药、燃料、电力、包装和水作为上游投入，除非直接采集 |
| product_classification_scope | CPC 3.0 01330 grapes；必须声明路线和市场状态 |
| recursive_input_rule | 按实际来源和系统边界区分同类葡萄输入。已建模葡萄园或调理节点之间的转移属于内部链接，承接已有负担一次。从该系统外购入的葡萄属于外部产品投入，须链接兼容的上游生产及交付数据集，或明确登记证据缺口；不得仅为停止递归而将其视为内部转移或零负担。不得递归替换为最终参考产出。核对上游已覆盖的运输、分选、冷却或包装，避免重复计算。 |
| upstream_dataset_requirement | 为购入投入使用有记录的背景数据集，并披露地理、技术和时间代表性 |
| disclosure | 披露面积、藤龄或建园年份、品种或路线、灌溉制度、作物年度、产量、可销售判据、产品状态和有条件的包装作业 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_grape_farm_gate` | 所有过程 | 纳入管理葡萄园生产至声明的新鲜葡萄农场边界交付；除非明确扩展，否则排除下游加工和配送。 | `iso-14044-2006` |
| `boundary_perennial_annualization` | 建园和补植 | 按声明的生产寿命分摊建园、棚架和补植负荷，并披露分摊基准。 | `iso-14044-2006` |
| `boundary_background_inputs` | 购入投入 | 纳入投入至交付的上游供应，同时在葡萄园边界记录前景施用和使用。 | `iso-14044-2006` |
| `boundary_grape_origin` | 同类葡萄输入 | 依据供应商、批次、实际来源和已建模节点记录执行 recursive_input_rule。外购保留上游负担，内部转移保留一次已链接负担。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `vineyard_establishment_replanting` | 葡萄园建园和补植 | conditional | 申报分摊期间发生建园、换藤、棚架安装或移除时纳入。 | 建立或更新多年生生产资产。 | 每生产性公顷、每作物周期 |
| `vineyard_cultivation_harvest` | 葡萄园栽培和采收 | required | 始终纳入。 | 管理藤本和土壤、施用投入、采收并量化产出和损失。 | 每 kg 可销售产品 |
| `farm_gate_sorting_packing` | 农场边界分选和包装 | conditional | 声明交付包含场内分选、冷却、包装或短期储存时纳入。 | 调整并交付声明的市场状态。 | 每 kg 包装或散装产品 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：葡萄园建园和补植（`vineyard_establishment_replanting`）

#### 输入
##### 产品流

###### 葡萄种苗（`vine_planting_material_input`）

记录跨越建园边界的购入或内部繁育藤苗、嫁接苗和补植材料。

- 选定流：葡萄藤种植材料
- 流属性/单位：Mass or item count / kg or item
- 数量规则：记录实际种苗数量；只有在有依据时才进行数量到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每生产性公顷并按申报作物周期分摊.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_vineyard_establishment_records`
- 来源：

###### 柴油 (`establishment_fuel_input_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`establishment_fuel_input_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_vineyard_establishment_records`采集`vineyard_establishment_replanting`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_vineyard_establishment_records`
- 来源：`route-energy-fao`

###### 建园灌溉水（`establishment_irrigation_input`）

记录新建或补植藤本施用的水量。

- 选定流：灌溉供水
- 流属性/单位：Volume / m3
- 数量规则：水表、灌溉计划或有记录的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每生产性公顷并按申报作物周期分摊.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_vineyard_establishment_records`
- 来源：`fao-56-crop-evapotranspiration`

##### 基本流

###### 建园土地占用（`establishment_land_occupation`）

记录建园或补植的占地面积、时间及土地状态变化。

- 选定流：土地占用
- 流属性/单位：Area-time / m2 year
- 数量规则：面积乘占用时间并按作物周期分摊
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每生产性公顷并按申报作物周期分摊.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_vineyard_establishment_records`
- 来源：`iso-14044-2006`

#### 输出
##### 废物流

### 过程：葡萄园栽培和采收（`vineyard_cultivation_harvest`）

#### 输入
##### 产品流

###### 尿素肥料（`vineyard_cultivation_harvest_agricultural_nutrient_inputs_urea`）

**vineyard_cultivation_harvest_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`ipcc-2019-refinement-vol4`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`vineyard_cultivation_harvest_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`ipcc-2019-refinement-vol4`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`vineyard_cultivation_harvest_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`ipcc-2019-refinement-vol4`；`fao-fertilizer-identities`

###### 氯化钾肥料（`vineyard_cultivation_harvest_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`ipcc-2019-refinement-vol4`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`vineyard_cultivation_harvest_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`ipcc-2019-refinement-vol4`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`vineyard_cultivation_harvest_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`ipcc-2019-refinement-vol4`；`fao-organic-nutrients`

###### 施用灌溉水（`crop_irrigation_input`）

按葡萄园区块和作物周期记录灌溉量；旱作区有证据时记录为零。

- 选定流：灌溉供水
- 流属性/单位：Volume / m3
- 数量规则：按区块和作物周期计量或计算灌溉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`fao-56-crop-evapotranspiration`

###### 柴油 (`field_machinery_fuel_input_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`field_machinery_fuel_input_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_field_input_records`采集`vineyard_cultivation_harvest`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_input_records`
- 来源：`route-energy-fao`

##### 基本流

###### 葡萄园土地占用（`crop_land_occupation`）

记录作物周期内生产性葡萄园面积和占用时间。

- 选定流：土地占用
- 流属性/单位：Area-time / m2 year
- 数量规则：栽培面积乘作物周期占用时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_input_records`
- 来源：`iso-14044-2006`

#### 输出
##### 产品流

###### 送往处理的采收鲜葡萄（`harvested_grapes_to_conditioning`）

记录送往处理的采收量；未纳入处理时记录直接送往农场边界交付的数量。

- 选定流：用于农场门整理的鲜采收葡萄
- 流属性/单位：Mass / kg
- 数量规则：称量批次并与可销售量、次品及保留或损失量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期并换算为 1 kg 可销售新鲜葡萄.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：

###### 农场边界新鲜整粒葡萄（`fresh_grapes_farm_gate_output`）

葡萄以散装农场边界产品离开葡萄园时使用；纳入处理时转入处理过程。

- 选定流：农场门鲜完整葡萄
- 流属性/单位：Mass / kg
原始产出计量与核对要求：声明交付点的可销售鲜葡萄质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期并换算为 1 kg 可销售新鲜葡萄.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：

##### 废物流

##### 基本流

###### 排放至环境空气的氧化亚氮（`soil_n2o_air_output`）

根据氮、残体、土壤和排水记录计算直接及适用的间接氧化亚氮。

- 选定流：一氧化二氮向环境空气排放
- 流属性/单位：Mass / kg N2O
- 数量规则：对采集活动数据应用声明的方法和因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄.

- 归一化基准：每声明的参考流
- 基准类型：氮输入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_records`
- 来源：`ipcc-2019-refinement-vol4`

###### 排放至环境空气的氨（`soil_ammonia_air_output`）

根据养分产品、施用方法、天气和适用因子方法计算氨挥发。

- 选定流：氨向环境空气排放
- 流属性/单位：Mass / kg NH3
- 数量规则：根据氮施用记录和声明方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄.

- 归一化基准：每声明的参考流
- 基准类型：氮输入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_records`
- 来源：`ipcc-2019-refinement-vol4`

###### 排放至水体的硝酸盐（`soil_nitrate_water_output`）

仅在有监测平衡、适用模型或经过审查的方法支持时记录硝酸盐淋失或径流。

- 选定流：硝酸根向水体排放
- 流属性/单位：Mass / kg nitrate
- 数量规则：根据氮输入、土壤、排水和声明方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄.

- 归一化基准：每声明的参考流
- 基准类型：氮输入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_records`
- 来源：`ipcc-2019-refinement-vol4`

### 过程：农场边界分选和包装（`farm_gate_sorting_packing`）

#### 输入
##### 产品流

###### 接收的采收葡萄（`conditioning_grape_input`）

记录进入场内分选、冷却、包装或短期储存的批次。

- 选定流：用于农场门整理的鲜采收葡萄
- 流属性/单位：Mass / kg
- 数量规则：在处理交接点称量入料批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每批次并换算为 1 kg 包装农场边界葡萄.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 处理用水（`conditioning_water_input`）

仅记录声明处理边界内清洁或接触产品表面的用水。

- 选定流：生产用水
- 流属性/单位：Volume / m3
- 数量规则：处理批次的水表或清洁记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每批次并换算为 1 kg 包装农场边界葡萄.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 分选和冷却用电（`conditioning_electricity_input`）

记录声明处理边界内分选、冷却、称量和包装设备用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：分表、设备记录或有依据的场站电量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每批次并换算为 1 kg 包装农场边界葡萄.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：

#### 输出
##### 产品流

###### 农场边界包装鲜葡萄（`packed_grapes_farm_gate_output`）

记录处理过程离开的可销售包装葡萄；声明为散装交付时本行不适用。

- 选定流：农场门鲜完整葡萄，已包装状态
- 流属性/单位：Mass / kg
原始产出计量与核对要求：在声明交付点称量可销售包装批次

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每批次并换算为 1 kg 包装农场边界葡萄.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 废物流

### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：农场边界新鲜整粒葡萄＼
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：农场边界新鲜整粒葡萄＼
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_grape_outputs` | 采收葡萄、可销售葡萄、次品和保留使用残余物 | 将总采收量核对至可销售产品、共产品、保留使用和废物；仅在功能和质量可比时使用质量分配，否则记录有依据的方法。 | `iso-14044-2006` |
| `allocation_perennial_asset` | 建园、棚架和补植 | 按声明的生产寿命和面积分配多年生资产负荷，并披露同时存在的作物或土地用途。 | `iso-14044-2006` |
| `allocation_packing_losses` | 有条件的分选和包装 | 使用实测质量平衡将处理投入归属于包装产品、次品和其他输出，除非有经过审查的替代方法。 | `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `establishment_fuel_input_specific_input` | `cp_vineyard_establishment_records` | 作业 vineyard_establishment_replanting：记录整地、栽植、棚架作业和移除藤本使用的燃料。 原数量方法：按建园活动分配计量燃料或承包商记录 |
| `field_machinery_fuel_input_specific_input` | `cp_field_input_records` | 作业 vineyard_cultivation_harvest：记录耕作、割草、喷施、修剪、采收和田间运输燃料。 原数量方法：按有记录的燃料使用或承包商活动计算 |
| `crop_protection_input_specific_input` | `cp_field_input_records` | 作业 vineyard_cultivation_harvest：按实际产品、有效成分、剂量和施用事件记录杀菌剂、杀虫剂、除草剂、生物防治剂和助剂。 原数量方法：按区块和作物周期汇总实际施用量 |
| `packaging_material_input_specific_input` | `cp_conditioning_records` | 作业 farm_gate_sorting_packing：记录实际使用的纸箱、托盘、薄膜、周转箱、托盘及其他包装，单独记录可重复使用包装的回收。 原数量方法：按包装批次计数或称量，扣除有记录的可重复使用回收量 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_vineyard_establishment_records` | `vineyard_establishment_replanting` | 种苗、燃料、灌溉、土地、移除材料 | 苗木发票、地图、燃料和灌溉记录 | 面积、品种、藤数、日期、燃料、水、材料、去向 | 采集农场和承包商记录并与区块面积核对；原始汇总与分配：按区块汇总并按生产寿命分摊 `establishment_fuel_input_specific_input`: 作业 vineyard_establishment_replanting：记录整地、栽植、棚架作业和移除藤本使用的燃料。 原数量方法：按建园活动分配计量燃料或承包商记录 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `removed_vine_material_waste_specific_output`: 按去向记录移除的藤本、旧棚架组件和建园残余物。 按去向称量或核算移除材料 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。  | kg, item, m3, L, m2 year | 每次事件 | 建园期按作物周期分摊 | 葡萄园区块 | 每声明的参考流 | 发票、地图、水表、收据 |
| `cp_field_input_records` | `vineyard_cultivation_harvest` | 肥料、灌溉、燃料、植保、土地 | 发票、施用日志、水表、地图 | 产品、配方、养分、剂量、日期、面积、水、燃料、有效成分 | 逐次采集并仅用有依据的因子换算；原始汇总与分配：按区块和周期汇总 `field_machinery_fuel_input_specific_input`: 作业 vineyard_cultivation_harvest：记录耕作、割草、喷施、修剪、采收和田间运输燃料。 原数量方法：按有记录的燃料使用或承包商活动计算 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `crop_protection_input_specific_input`: 作业 vineyard_cultivation_harvest：按实际产品、有效成分、剂量和施用事件记录杀菌剂、杀虫剂、除草剂、生物防治剂和助剂。 原数量方法：按区块和作物周期汇总实际施用量 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg, kg nutrient, m3, L, m2 year | 每次施用和每作物周期 | 一个作物年度 | 区块和农场 | 每声明的参考流 | 发票、标签、水表、施用记录 |
| `cp_field_emission_records` | `vineyard_cultivation_harvest` | 土壤排放 | 氮台账、残体、土壤和排水记录 | 养分、残体、土壤、天气、排水、因子方法 | 检查适用性后计算；原始汇总与分配：一致应用方法 | kg N2O, kg NH3, kg nitrate | 每作物周期 | 一个作物年度 | 区块或申报模型区域 | 每声明的参考流 | 因子来源和计算表 |
| `cp_harvest_and_yield_records` | `vineyard_cultivation_harvest` | 采收葡萄、产出、次品 | 采收票据和称量记录 | 采收量、可销售量、等级、次品、去向、日期 | 称量批次并核对全部去向；原始汇总与分配：汇总批次并报告产量 `harvest_residue_culls_specific_output`: 按去向核对未作为声明产品销售的果穗、果粒、果梗及其他采收物。 总采收量减可销售产品和声明的保留使用量 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。  | kg | 每批次和作物周期 | 一个采收季 | 区块、批次和农场 | 每声明的参考流 | 校准秤和票据 |
| `cp_conditioning_records` | `farm_gate_sorting_packing` | 入料、包装、水、电、产出、废物 | 包装、能源、库存和废物记录 | 入料、包装、数量、水、kWh、产出、次品、废物 | 采集批次记录并核对质量平衡；原始汇总与分配：按包装产出汇总 `packaging_material_input_specific_input`: 作业 farm_gate_sorting_packing：记录实际使用的纸箱、托盘、薄膜、周转箱、托盘及其他包装，单独记录可重复使用包装的回收。 原数量方法：按包装批次计数或称量，扣除有记录的可重复使用回收量 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `conditioning_culls_waste_specific_output`: 记录分选或包装移除的葡萄并声明各去向。 入料质量减包装产出和其他声明去向 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。  `conditioning_waste_output_specific_output`: 按材料和去向记录一次性包装损失及非危险清洁废物。 按材料和去向称量或核算废物 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。  | kg, item, m3, kWh | 每批次或批量 | 包装季 | 场内处理点 | 每声明的参考流 | 称量、发票、公用工程、收据 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | 归一化数量 = 报告数量 / 可销售鲜葡萄产出；保留原始数量和基准 | 流数量、可销售产出、换算 | 每 kg 参考流的数量 | `iso-14044-2006` |
| `calc_perennial_annualization` | establishment | 年化负荷 = 事件负荷 × 作物周期占声明生产寿命的比例 | 事件量、寿命、周期、面积 | 作物周期负荷 | `iso-14044-2006` |
| `calc_nutrient_basis` | fertilizer total | 按养分和施用事件计算养分量 = 产品质量 × 声明养分比例之和 | 产品质量和养分比例 | kg 产品及 kg N、P2O5 或 K2O | `ipcc-2019-refinement-vol4` |
| `calc_mass_balance` | harvest and conditioning | 入料或采收量 = 可销售产出 + 共产品或保留使用 + 废物和损失 | 称量和去向记录 | 核对后的数量 | `iso-14044-2006` |
| `calc_soil_emissions` | soil emissions | 对记录的养分、残体、土壤和排水输入应用所选地理因子或模型 | 活动台账和方法 | 排放量 | `ipcc-2019-refinement-vol4` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emission_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_route` | all datasets | 声明路线、产品状态、等级、位置、作物年度和可销售判据。 | 农场规格和元数据 |
| `quality_mass_reconciliation` | harvest and conditioning | 核对产品、次品、保留使用和废物并调查残差。 | 称、票据、包装日志 |
| `quality_input_completeness` | cultivation and establishment | 覆盖养分、植保、水、燃料、电力、种苗和面积记录。 | 发票、日志、水表、地图 |
| `quality_temporal_geography` | all processes | 报告作物年度、区块或区域、技术、灌溉和异常事件。 | 农场记录和问卷 |
| `quality_method_disclosure` | emissions and annualization | 披露因子、寿命假设、分配、缺失数据和替代数据。 | 计算表和来源 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow | 缺少路线、产品状态、位置、作物年度或可销售判据时拒绝数据集。 | `iso-14044-2006` |
| `validation_yield_mass_balance` | harvest and conditioning | 在有记录的容差内检查采收或入料质量与产出和损失的一致性。 | `iso-14044-2006` |
| `validation_nutrient_traceability` | fertilizer | 每个养分总量必须可追溯至实际产品和声明的养分基准。 | `ipcc-2019-refinement-vol4` |
| `validation_period_annualization` | perennial establishment | 检查生产寿命已声明，并防止建园负荷在每个周期重复计入。 | `iso-14044-2006` |
| `validation_conditional_packing` | conditioning | 仅在声明交付包含场内处理时纳入包装，否则栽培过程提供参考产出。 | `iso-14044-2006` |
| `validation_emission_method` | soil emissions | 每项排放应识别因子或模型、输入基准、地理范围和时间适用性。 | `ipcc-2019-refinement-vol4` |
| `validation_grape_origin` | 葡萄投入及链接过程 | 不得仅因类别相同就将外购视为内部或零负担转移。须提供来源、上游覆盖及后续工序无重复核算记录；披露未解决的上游证据缺口。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜葡萄生产的 secondary_dataset；在披露代表性时允许作为 background_dataset |
| downstream_use | 前景农业清单以及食品或饮料产品系统 |
| allowed_use | 在声明边界和产品状态内建模新鲜葡萄生产路线 |
| excluded_use | 直接替代葡萄酒、果汁、干葡萄、浓缩物、零售、消费者使用或未声明路线 |
| required_metadata | 路线、品种、农场边界状态、地理、作物年度、藤龄、产量、灌溉、包装、分配和参考产品限定信息 |
| required_quality_disclosure | 投入完整性、质量平衡、因子、生产寿命假设、缺失数据和 QA 结果 |
| update_trigger | 路线、养分或植保方法、灌溉、包装边界、分类解释或审查方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | standard | ISO 14044:2006, https://www.iso.org/standard/38498.html | 边界、年化、分配、核算和平衡校验 |
| `fao-56-crop-evapotranspiration` | official_guidance | FAO Irrigation and drainage paper 56, https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉采集和水平衡 |
| `ipcc-2019-refinement-vol4` | method_factor | 2019 IPCC Refinement, Volume 4, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 土壤排放计算和养分基准 |
| `fao-pesticide-management-code-2014` | official_guidance | FAO/WHO International Code of Conduct on Pesticide Management, https://www.fao.org/3/i3604e/i3604e.pdf | 植保产品可追溯性 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
