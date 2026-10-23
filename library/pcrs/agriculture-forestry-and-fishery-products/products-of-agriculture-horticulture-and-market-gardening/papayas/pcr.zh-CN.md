---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.papayas
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 木瓜

## 1. 范围与适用性

本 PCR 覆盖在露地或保护地管理种植中生产，并在声明的农场交接点或第一包装场交接点交付的新鲜整果木瓜。边界从声明的生产周期开始，包含种植材料接收、作物建立、作物管理、灌溉、养分和土壤改良剂使用、植保、采收、可选的场内分选或清洗，以及在声明交接点前发生的初级包装。适用于整果鲜木瓜；品种、大小、等级、成熟度和生产路线差异应在前景数据包中披露。

本 PCR 不包含种植材料、肥料、土壤改良剂、植保产品、燃料、电力、包装、运输、储存、零售、消费者使用、木瓜浆或果汁加工，以及声明交接点之后的废物处理。上述活动跨越边界时作为上游或下游数据集表示。木瓜种子或幼苗不作为木瓜果实产出处理。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.papayas |
| classification_refs | CPC 3.0:01317; mapping relation: exact |
| covered_products | 管理种植获得的新鲜整果木瓜，包括加工前在农场或第一包装场呈现的产品 |
| excluded_products | 干制、冷冻、罐装、打浆、榨汁、发酵或其他加工木瓜；木瓜种植材料；作为独立产品销售的木瓜废弃物 |
| representative_product | 在声明农场或第一包装场交接点的可销售新鲜整果木瓜 |
| production_route | 露地或保护地种植，随后采收，并可进行初级分选、清洗、冷却和包装 |
| market_state | 在声明交接点的新鲜整果可销售产品；品种、等级、成熟度和包装状态为必需限定信息 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明农场或第一包装场交接点交付的可销售新鲜整果木瓜 |
| How much | 1 kg 可销售新鲜整果木瓜 |
| How well | 符合声明品种或产品身份、成熟度、等级、大小、修整、清洗、冷却和包装限定信息的整果 |
| How long or cycle | 一个声明的生产周期和采收批次；所有采收批次应关联同一田块或保护地单元及声明交接点 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木瓜 `5f8859fd-4690-4c28-afbe-c4846a84da32` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 木瓜身份和品种；生产国家或地区；露地或保护地路线；田块或保护地单元标识；周期和采收日期；种植面积；灌溉来源和方法；养分及土壤改良剂产品和养分基准；植保方案；采收质量；可销售等级和成熟度；拒收物和残余物去向；清洗；冷却；包装；声明交接点 |
| 绑定模式 | 参考产品流保持未映射 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

本参考 UUID 表示新鲜、未加工的农场门产品。使用该绑定前须核对实际物种、产品状态及交接门；独立包装站、进一步加工或不兼容状态的输出必须单独核实身份，不得直接继承此 UUID。身份核实不改变本 PCR 的实际系统边界或数量归一化要求。

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`papaya_gate_preparation` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `papaya_marketable_output` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收果实和交接点产出 | Mass | kg | 将采收总质量、可销售木瓜、降级或拒收果、修剪物和田间残余物作为不同数量记录。 |
| `area_and_cycle_normalization` | 建立和作物管理 | Area and mass | ha and kg | 在将投入和产出归一化到可销售产品前，记录每个田块或保护地单元、种植面积、周期日期和采收批次。 |
| `nutrient_equivalent_basis` | 肥料和土壤改良剂投入 | Product mass and nutrient mass | kg product, kg N, kg P2O5, or kg K2O | 记录实际产品和声明养分浓度；保留模型采用产品质量还是养分当量的基准。 |
| `irrigation_volume` | 灌溉和取水 | Volume | m3 | 区分水源取水量和输送到作物的水量；模型化降水时另行记录降水。 |
| `multiple_harvest_reconciliation` | 多次采收 | Mass | kg | 只有在采收批次关联到同一田块或保护地单元、周期、品种、等级和声明交接点后，才汇总采收批次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备的生产田块或保护地单元接收木瓜种子或幼苗材料，并披露此前土地利用和建立前作业 |
| starting_condition_role | 声明木瓜生产周期的开始 |
| product_classification_scope | CPC 3.0:01317 的新鲜整果木瓜，直至声明的农场或第一包装场交接点 |
| recursive_input_rule | 外购木瓜种子或幼苗作为上游产品投入只关联一次；不在本 PCR 内重新创建额外的木瓜果实周期。 |
| upstream_dataset_requirement | 使用与种子或幼苗、肥料和改良剂、植保产品、灌溉水、能源、包装、运输和废物处理相容的上游数据集，只要这些活动在声明交接点前使用。 |
| disclosure | 声明品种或产品身份、地理范围、路线、田块或保护地面积、周期日期、灌溉来源和方法、养分基准、植保方案、采收批次、等级和成熟度、清洗、冷却、包装、拒收物去向、残余物去向和交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 作物建立和作物管理 | 纳入从声明起始条件到所代表采收批次的投入和直接种植交换，并将其分配到同一声明周期的可销售产出。 | `fao-gap-framework-2003` |
| `boundary_declared_gate` | 采收和交接点处理 | 终止于声明的农场或第一包装场交接点；只有在该交接前发生时，才纳入分选、修整、清洗、冷却和初级包装。 | `codex-cxc-53-2003` |
| `boundary_soil_emissions` | 管理土壤和残余物 | 对氮肥、改良剂和返还残余物氮使用一个声明的方法，并避免重复计算上游或投入造成的排放。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 田间残余物和拒收物 | 按去向记录田间残余物和采后拒收物；未说明去向的拒收物或残余物不是共产品。 | `fao-gap-framework-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `papaya_crop_establishment` | 木瓜作物建立 | required | 每个所代表的作物周期 | 前景建立 | 种植面积、种植材料数量和周期 |
| `papaya_crop_management` | 木瓜作物管理 | required | 每个所代表的作物周期 | 前景管理型生物生产 | 田块或保护地周期和可销售产出 |
| `papaya_harvest` | 木瓜采收和田间处理 | required | 每个所代表的采收批次 | 前景采收和田间分流 | 采收总量、可销售产出、拒收物和残余物 |
| `papaya_gate_preparation` | 木瓜交接点准备和交付 | conditional | 仅在声明交接点前发生分选、清洗、冷却或初级包装时 | 前景交接点处理 | 1,000 kg 可销售新鲜木瓜 |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1 kg 同一声明交接点净合格产品 |

### 过程：木瓜作物建立（`papaya_crop_establishment`）

#### 输入
##### 产品流

###### 木瓜种植材料（`papaya_planting_material`）

记录进入声明田块或保护地单元的种子、幼苗或嫁接种植材料。识别材料类型，不要将其作为可销售木瓜果实产出。

- 选定流：木瓜种子或幼苗种植材料
- 流属性/单位：Number of items or mass / seedling or kg
- 数量规则：按品种、田块或保护地单元和周期计数或称量种植材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个种植公顷或保护地单元，再按每 1,000 kg 可销售产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_establishment_records`
- 来源：`fao-gap-framework-2003`

###### 尿素肥料（`papaya_crop_establishment_agricultural_nutrient_inputs_urea`）

**papaya_crop_establishment_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每个作物周期，再按每 1,000 kg 可销售产出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_papaya_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`papaya_crop_establishment_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_papaya_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`papaya_crop_establishment_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_papaya_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

###### 氯化钾肥料（`papaya_crop_establishment_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_papaya_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`papaya_crop_establishment_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_papaya_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-gap-framework-2003`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`papaya_crop_establishment_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_papaya_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-gap-framework-2003`；`fao-organic-nutrients`

##### 废物流

##### 基本流

###### 木瓜生产土地占用（`papaya_land_occupation`）

记录声明木瓜周期的耕作面积和占用时间；区分生产性土地的年度化占用与土地转化。

- 选定流：农业土地占用
- 流属性/单位：Area-time / m2*year
- 数量规则：种植面积乘以该周期在一年中的占用比例。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个作物周期，再按每 1,000 kg 可销售产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_papaya_establishment_records`
- 来源：`fao-gap-framework-2003`

#### 输出
##### 产品流

##### 废物流

##### 基本流

### 过程：木瓜作物管理（`papaya_crop_management`）

#### 输入
##### 产品流

###### 作物周期灌溉水（`papaya_irrigation_water`）

按来源和灌溉技术记录输送给作物的水；除非研究明确将降水作为取水量模型化，否则排除降水。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 数量规则：按田块或保护地单元和周期计量或记录输送的灌溉水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个作物周期，再按每 1,000 kg 可销售产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-irrigation-drainage-paper-56`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20,000
  - 单位：m3/ha or protected-unit cycle
  - 基准：取决于气候、土壤、品种、作物年龄和灌溉技术的宽泛区间
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油 (`papaya_mobile_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`papaya_mobile_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_papaya_input_records`采集`papaya_crop_management`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_papaya_input_records`
- 来源：`route-energy-fao`

##### 废物流

##### 基本流

###### 作物生产取水（`papaya_water_withdrawal`）

当水源取水量与输送给作物的水量不同时，记录水源取水，并披露水源类型以及回流或损失处理。

- 选定流：水资源取水
- 流属性/单位：Volume / m3
- 数量规则：记录水源取水计量或有文件支持的取水体积，并与灌溉输送量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个作物周期，再按每 1,000 kg 可销售产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-irrigation-drainage-paper-56`

#### 输出
##### 产品流

##### 废物流

##### 基本流

### 过程：木瓜采收和田间处理（`papaya_harvest`）

#### 输入
##### 产品流

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 采收木瓜总量（`papaya_gross_harvest`）

记录分级、拒收、修整、清洗、冷却或初级包装前的新鲜木瓜采收总量。

- 选定流：新鲜整果木瓜，采收总量
- 流属性/单位：Mass / kg
- 数量规则：在田间或采收站入口对每个采收批次称量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个采收批次，再按每 1,000 kg 可销售产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_harvest_records`
- 来源：`fao-gap-framework-2003`

##### 废物流


###### 采收拒收物（`papaya_harvest_rejects`）

记录采收或田间分选中拒收的果实，并说明其留在田间、堆肥、饲喂、进入其他产品路线或送往废物处理的去向。

- 选定流：木瓜采收拒收物
- 流属性/单位：Mass / kg wet fruit
- 数量规则：按批次和去向称量或核算拒收果；没有文件化接收路线时不得将其作为共产品给予信用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个采收批次，再按每 1,000 kg 可销售产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_harvest_records`
- 来源：`fao-gap-framework-2003`


##### 基本流

### 过程：木瓜交接点准备和交付（`papaya_gate_preparation`）

#### 输入
##### 产品流

###### 进入交接点准备的采收木瓜总量（`papaya_gate_input`）

当交接点前发生准备时，将进入分选、清洗、冷却或初级包装的采收批次与采收过程产出核对。

- 选定流：新鲜整果木瓜，采收总量
- 流属性/单位：Mass / kg
- 数量规则：将接收称量与来源采收批次和声明交接点核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个交接点准备批次，再按每 1,000 kg 可销售产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

###### 条件性交接点清洗水（`papaya_washing_water`）

仅在声明交接点前清洗木瓜时记录用水，并包含用水处理或排放去向。

- 选定流：木瓜清洗用工艺水
- 流属性/单位：Volume / m3
- 数量规则：记录进入清洗作业的计量水量或批次水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 在声明交接点前清洗的可销售产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 声明交接点的新鲜整果木瓜（`papaya_marketable_output`）

仅在 `papaya_gate_preparation` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流：木瓜 `5f8859fd-4690-4c28-afbe-c4846a84da32`
- 流属性/单位：Mass / kg
原始产出计量及核对：按 `cp_papaya_gate_records` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_papaya_gate_records` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

##### 废物流


##### 基本流

### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：木瓜 `5f8859fd-4690-4c28-afbe-c4846a84da32`
- 流属性/单位：质量 / kg
- 数量规则：本同一交接点实测净合格质量，按 R/R × 1 kg 归一化；成对投入与合格产出相等，保留原始 R
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`

##### 废物流
##### 基本流
#### 输出
##### 产品流
###### 声明交接点参考产品 (`reference_product_at_declared_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：木瓜 `5f8859fd-4690-4c28-afbe-c4846a84da32`
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`

##### 废物流
实际废物保留在其产生作业，不在此重复。
##### 基本流
实际释放保留在其负责的实体作业，不在此重复。

## 7. 分配与共产品处理

- `allocation_marketable_output`：使用可销售质量作为主要产出基准，将作物周期投入和直接种植交换分配给可销售新鲜木瓜。`source_ids`：`iso-14044-2006`。
- `allocation_rejects`：除非文件化接收路线产生单独规定的共产品，否则将田间和交接点拒收物作为废物处理。本 PCR 不提供避免产品信用。`source_ids`：`iso-14044-2006`、`fao-gap-framework-2003`。
- `allocation_reusable_containers`：按记录的服务周期对可重复使用采收容器和周转箱建模，将其生产负荷分摊到记录的使用次数，并将消耗性包装作为独立投入保留。`source_ids`：`iso-14044-2006`、`codex-cxc-53-2003`。

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `papaya_mobile_fuel_specific_input` | `cp_papaya_input_records` | 作业 papaya_crop_management：记录拖拉机、水泵、喷雾器、割草机和其他移动或田间机械使用且跨越种植边界的燃料。 原数量方法：根据计量、发票或设备日志分配到木瓜田块或保护地单元。 |
| `papaya_crop_protection_specific_input` | `cp_papaya_input_records` | 作业 papaya_crop_management：只记录实际施用的植保产品，并保留有效成分、制剂、施用量和目标处理信息。产品身份在获得审查确认前保持证据缺口。 原数量方法：按施用事件记录产品质量和声明的有效成分质量。 |
| `papaya_primary_packaging_specific_input` | `cp_papaya_gate_records` | 作业 papaya_gate_preparation：仅记录声明交接点前使用的初级包装，包括材料、质量、重复使用周期和包装损失。 原数量方法：按可销售产出批次计数包装，并记录消耗材料质量。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_papaya_establishment_records` | `papaya_crop_establishment` | planting material and occupied area | field establishment record | cultivar; material type; supplier; quantity; field or protected-unit id; planted area; cycle start | supplier record, planting log, and area register；原始汇总与分配：reconcile planted quantity and area to the same cycle | seedling, kg, ha | each cycle | full declared crop cycle | each represented field or protected unit | 每声明的参考流 | purchase record, planting log, and field map |
| `cp_papaya_input_records` | `papaya_crop_management` | water, fuel, nutrient products, crop protection, and emissions basis | input and application record | product; formulation; nutrient or active ingredient; quantity; source; application date; irrigation meter; fuel meter; field id | invoice review, meter reading, application log, and source register；原始汇总与分配：sum applications and meter periods after field and cycle reconciliation `papaya_mobile_fuel_specific_input`: 作业 papaya_crop_management：记录拖拉机、水泵、喷雾器、割草机和其他移动或田间机械使用且跨越种植边界的燃料。 原数量方法：根据计量、发票或设备日志分配到木瓜田块或保护地单元。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `papaya_crop_protection_specific_input`: 作业 papaya_crop_management：只记录实际施用的植保产品，并保留有效成分、制剂、施用量和目标处理信息。产品身份在获得审查确认前保持证据缺口。 原数量方法：按施用事件记录产品质量和声明的有效成分质量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `papaya_soil_nitrogen_emissions_specific_emission`: 根据声明的肥料、改良剂和返还残余物氮基准，使用一个声明的方法计算直接和间接管理土壤氮排放。 对有记录的氮投入和保留残余物基准应用声明的方法因子；不得重复计算上游数据集已提供的排放。 这是必需的排放身份确认要求，不是集合式基本交换。每种适用物质及其实际接收介质须分别识别，保留兼容单位、实测活动量或有依据的计算方法、参数适用性及不确定性。保留原作业、期间、分配及最终参考流归一化规则。直接、间接路径及上游覆盖仅核算一次，不用总氮、燃烧总排放或泛称污染物替代具体化合物。适用时另行记录实际归还环境的材料及去向。完成数据集前须为每项必需交换建立具体卡片，并核验兼容UUID或明确保留未解析身份。缺少记录不等于零排放或不适用。 `ipcc-2019-managed-soils` | kg product, kg nutrient, m3, MJ, kg fuel | each application or meter period | full declared cycle | each represented field or protected unit | 每声明的参考流 | invoices, meters, calibration checks, and application records |
| `cp_papaya_harvest_records` | `papaya_harvest` | containers, harvest, rejects, and residue | harvest lot and residue record | lot id; date; field id; gross mass; grade; reject mass; residue mass; container use; destination | calibrated scale, lot sheet, container log, and residue estimate；原始汇总与分配：aggregate only lots sharing field, cycle, cultivar, grade, and gate `papaya_harvest_containers_specific_input`: 记录进入采收作业的可重复使用或一次性采收容器，并区分可重复使用的服务周期和消耗的包装材料。 计数容器使用次数；消耗性容器跨越边界时记录其材料质量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg and container-use | each harvest lot | full harvest campaign | each harvest lot | 每声明的参考流 | scale check, lot reconciliation, and destination evidence |
| `cp_papaya_gate_records` | `papaya_gate_preparation` | receiving, washing, packaging, output, and gate rejects | packing or gate batch record | batch id; received mass; wash water; wash loss; packaging type and mass; cooling; accepted mass; reject mass; destination; gate; 每股物流的材料或产品身份；组成及污染状态；原生数量与单位；件重或密度换算依据；批次；产品与包装净质量；复用或返工；接收方；处理路线；匹配参考产出 | batch sheet, water meter, packaging issue record, and scale；原始汇总与分配：reconcile batch input to accepted output and separately identified losses `papaya_primary_packaging_specific_input`: 作业 papaya_gate_preparation：仅记录声明交接点前使用的初级包装，包括材料、质量、重复使用周期和包装损失。 原数量方法：按可销售产出批次计数包装，并记录消耗材料质量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。; papaya_gate_rejects_specific_output: 对每个木瓜门前准备批次，分别核对接收果实、合格果实、降级果实、修整物、受损果实和处理损失，并与废弃包装分开。果实流按实际物理状态和去向识别，包装按每种实际材料识别。仍可销售的降级果实不自动成为废物，应保留有依据的产品或废物角色。保留原每 1,000 kg 可销售产出的活动口径及阶段到最终产出的归属，避免重复归一化。 这是必须完成的采集与计算要求，不是一项库存交换。完成数据集前，应对每股实际外运物流建立物理身份具体的卡片，记录组成、状态、原生数量与流属性、去向以及有依据的产品或废物角色。仅使用兼容且已验证的 UUID，或明确登记具体未解析身份。不得编造包装配方、假定已分选、根据缺证据推断零或省略必需物流。真实的一股混合物流只有在存在收集与交付证据、明确组成且处理路线兼容时，才可保留为一个身份；不得同时重复计入其组分外运量。分别处理的液体与固体物流分开记录。保留原归属、期间、质量与水量平衡、参考分母及处理服务边界；已有匹配交换时建立关联而不重复计数。原集合范围不作为单股物流默认量或限制。 | kg, m3, package-use; 每股物流的 kg 分别记录；液体原生体积另列；件数与质量分开 | each gate batch | full period before declared hand-off | each declared farm or first packing-site gate | 每声明的参考流 | scale and meter checks, packaging records, and destination records |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_marketable_normalization` | all processes | 将每项采集数量归一化到声明交接点的合格木瓜质量：`quantity / marketable_gate_mass`。 | field, cycle, lot, and gate records | quantity per kg or 1,000 kg marketable papaya | `iso-14044-2006` |
| `calc_nutrient_equivalent` | fertilizer and soil amendments | `product_mass × declared nutrient fraction`；分别保留产品质量和养分当量结果。 | product invoice, formulation, and declared N/P2O5/K2O fraction | product mass and nutrient mass | `fao-gap-framework-2003` |
| `calc_soil_nitrogen_emissions` | managed soil emissions | 对有记录的氮投入和返还残余物氮应用一个选定的 IPCC 兼容因子方法，不重复计算上游排放。 | nutrient records, residue basis, method factor | declared soil-emission flows | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest and gate preparation | `gross harvested mass = marketable output + rejects + residue or process loss`，文件化库存变化另行显示。 | harvest lots, gate batches, reject and residue records | reconciled mass-balance check | `codex-cxc-53-2003` |
| `calc_reusable_container_burden` | harvest containers and crates | 用容器生产负荷除以文件化服务周期，并将本次使用份额分配到所代表的木瓜产出。 | container mass, material, expected or observed service cycles | container burden per declared output | `iso-14044-2006` |
| `papaya_gate_rejects_specific_output` | `papaya_gate_preparation` | 对每个木瓜门前准备批次，分别核对接收果实、合格果实、降级果实、修整物、受损果实和处理损失，并与废弃包装分开。果实流按实际物理状态和去向识别，包装按每种实际材料识别。仍可销售的降级果实不自动成为废物，应保留有依据的产品或废物角色。保留原每 1,000 kg 可销售产出的活动口径及阶段到最终产出的归属，避免重复归一化。 这是必须完成的采集与计算要求，不是一项库存交换。完成数据集前，应对每股实际外运物流建立物理身份具体的卡片，记录组成、状态、原生数量与流属性、去向以及有依据的产品或废物角色。仅使用兼容且已验证的 UUID，或明确登记具体未解析身份。不得编造包装配方、假定已分选、根据缺证据推断零或省略必需物流。真实的一股混合物流只有在存在收集与交付证据、明确组成且处理路线兼容时，才可保留为一个身份；不得同时重复计入其组分外运量。分别处理的液体与固体物流分开记录。保留原归属、期间、质量与水量平衡、参考分母及处理服务边界；已有匹配交换时建立关联而不重复计数。原集合范围不作为单股物流默认量或限制。 | `cp_papaya_gate_records` | 逐实际物流的交换、去向及无重复质量平衡 | `codex-cxc-53-2003` |
| `papaya_field_residue_identity_and_fate` | `papaya_harvest` | 按实测干湿基和实际去向核对作物残余物、收获损失和生物量。留田或还田生物量是支持分解与养分路径计算的内部残余物台账，不是外购资源或虚构的生物量基本交换。单独收集的材料须有实际产品／废物身份及去向；环境释放须识别物质与接收环境。 本规则替代含糊的聚合交换，不取消采集义务。数据集完整性通过前，每项实际交换须建立具体卡片、核实相容 UUID 或明确保留未解析身份，并记录数量、单位、阶段／期间、去向和证据。依据相连协议恢复可归属原始分子量，再按匹配的合格参考产出归一化一次。缺失数据不等于零，原聚合范围不得作为单项物流默认值。 | `cp_papaya_harvest_records` | 按身份区分的交换和对账活动记录 | `fao-gap-framework-2003` |
| `papaya_gate_wastewater_identity_and_fate` | `papaya_gate_preparation` | 识别每项实际独立材料物流、组成、状态和接收者。废保藏剂、盐水、动植物材料、包装、排液和有意共产品在独立处理时分别记录，仅建立本作业有证据的物流。物理混合物流只有在组成和相容处理有据时才可采用一个身份，不得再把组分作为额外输出重复计量。区分销售产出、内部返工、废物转移、外购处理和基本排放，不重复处理负荷。 本规则替代含糊的聚合交换，不取消采集义务。数据集完整性通过前，每项实际交换须建立具体卡片、核实相容 UUID 或明确保留未解析身份，并记录数量、单位、阶段／期间、去向和证据。依据相连协议恢复可归属原始分子量，再按匹配的合格参考产出归一化一次。缺失数据不等于零，原聚合范围不得作为单项物流默认值。 | `cp_papaya_gate_records` | 按身份区分的交换和对账活动记录 | `codex-cxc-53-2003` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all product and input flows | 声明品种、材料或产品身份、田块或保护地单元、交接点，以及没有固定或参数化绑定时的身份证据记录。 | source records, labels, invoices, and dataset metadata |
| `quality_measurement` | mass, water, fuel, nutrient, and packaging rows | 尽可能使用经过校准的秤或计量表；否则记录估计方法、换算因子和不确定性。 | calibration record, meter log, or estimation worksheet |
| `quality_temporal` | all processes | 覆盖完整声明生产周期和采收批次，并披露缺失期间或替代记录。 | cycle calendar, lot register, and data-quality note |
| `quality_completeness` | inventory and emissions | 将田间投入、采收、合格产出、拒收物、残余物、水、养分基准和包装与声明交接点核对。 | mass balance, application log, and gate batch reconciliation |
| `quality_disclosure` | dataset package | 在数据集元数据中保留所有必需限定信息、边界决定、分配选择、具体流身份核验。 | dataset metadata and PCR conformance checklist |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 校验规则

- `validation_identity`：数据集必须识别木瓜品种或产品类别、田块或保护地单元、生产路线、周期、声明交接点以及所有证据缺口的投入或产出身份。`source_ids`：`fao-gap-framework-2003`。
- `validation_mass_balance`：每个采收和交接点批次中，采收或接收总质量必须与可销售产出、拒收物、残余物、废水或清洗损失、包装损失和披露的库存变化相符。`source_ids`：`codex-cxc-53-2003`。
- `validation_normalization`：每个归一化库存值必须使用同一声明的可销售交接点质量，不得混用农场交接点和第一包装场产出。`source_ids`：`iso-14044-2006`。
- `validation_nutrient_emissions`：养分当量投入和管理土壤排放必须声明其基准，并使用一种不重复计算的方法。`source_ids`：`ipcc-2019-managed-soils`。
- `validation_temporal`：数据集必须覆盖所代表的生产周期和采收批次，或明确披露缺失记录和替代记录。`source_ids`：`fao-gap-framework-2003`。


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜整果木瓜的前景农业生产数据集 |
| downstream_use | 农场到交接点 LCA 的二级数据集；当声明交接点和限定信息匹配时，可作为产品系统模型的背景数据集输入 |
| allowed_use | 当品种、地理范围、路线、周期、交接点、可销售产出和库存完整性相容时，用于新鲜整果木瓜的比较或归因建模 |
| excluded_use | 加工木瓜产品；通用水果替代；声明交接点之外的运输、零售、消费者或终端处理声明；未报告拒收物或残余物去向的数据集 |
| required_metadata | 木瓜身份和品种、地理范围、路线、田块或保护地单元、周期日期、面积、灌溉来源、养分和植保基准、采收和等级、清洗、冷却、包装、拒收物和残余物去向、声明交接点、参考质量、具体流身份核验和身份证据缺口覆盖 |
| required_quality_disclosure | 计量基准、采集期间、完整性、质量平衡结果、分配规则、暂定范围、数据替代、不确定性和证据缺口 UUID 或流身份 |
| update_trigger | 种植路线、灌溉系统、养分或植保方案、采收或交接点处理、包装、产品定义、方法因子或身份映射发生变化 |

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-irrigation-drainage-paper-56` | handbook | FAO Irrigation and drainage paper 56, *Crop evapotranspiration* | 灌溉计量和输水量区分 |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines，管理土壤和氮排放 | 管理土壤氮计算和非重复规则 |
| `codex-cxc-53-2003` | official_guidance | Codex Alimentarius CXC 53-2003，鲜食水果和蔬菜卫生操作规范 | 采收、清洗、包装、卫生、批次核对和交接点处理 |
| `iso-14044-2006` | standard | ISO 14044:2006，环境管理—生命周期评价—要求和指南 | 归一化、分配、可重复使用容器处理和校验原则 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |
