---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-of-pig-and-poultry-unrendered
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 猪和家禽的未熬制脂肪

## 1. 范围与适用性

本 PCR 适用于猪或家禽在屠宰、整理、宰后处置、分割或修整后分离所得的未熬制脂肪组织或脂肪原料前景数据包。合规数据包仅代表一种已声明动物来源，即 `pig` 或 `poultry`，并声明具体物种和解剖组织或商业产品形态。范围可包括鲜、冷却或冷冻材料，以及分离、卫生处理、冷却或冷冻、包装、储存、装载和至声明交接点的运输。

产品应保持组织或脂肪原料状态。熬制、脂肪熔化、提取、为回收脂肪而蒸煮、精炼、分提、氢化、酯交换，以及猪油、熬制猪脂、熬制家禽脂、牛羊脂、动物油或脂肪分提物的制造，均不在默认前景边界内。CPC 将本产品归入 21511，并将熬制猪脂和家禽脂分别归入 21521 和 21522。CXS 211-1999 描述命名熬制脂肪；本 PCR 仅用其防止把熬制脂肪的名称、组成范围或配方用于未熬制材料。

本 PCR 不提供跨动物来源平均值。猪与家禽数据，以及组织形态或物理状态存在实质差异的数据，应分别参数化。无法保留这些差异的物理混合物或清单平均值不能构成合规的单一产品数据包。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-of-pig-and-poultry-unrendered |
| classification_refs | UNSD CPC 3.0 子类 21511，猪和家禽的未熬制脂肪 |
| covered_products | 屠宰或分割后分离的未熬制猪脂肪组织或家禽脂肪组织/脂肪原料；鲜、冷却或冷冻；仅在声明用途和处置状态时包括食用级、饲料级或技术用途材料 |
| excluded_products | 熬制猪脂或猪油（CPC 21521）；熬制家禽脂（CPC 21522）；CPC 21523–21529 的牛羊脂及其他熬制动物脂肪或油；精炼、分提、氢化或其他化学改性脂肪；来源不明的猪—家禽平均值或不可分离混合物 |
| representative_product | 在声明交接点的一种已声明猪或家禽未熬制脂肪组织/产品形态，净质量 1 kg |
| production_route | 屠宰或分割共产品识别 -> 卫生分离/修整和分选 -> 称量 -> 条件性冷却/冷冻 -> 条件性包装和储存 -> 声明的运输交接；不含熬制或精炼 |
| market_state | 熬制前的鲜、冷却或冷冻脂肪组织/脂肪原料，散装或采用已声明包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供来自一种已声明动物来源（猪或家禽）的未熬制脂肪组织/脂肪原料，供后续使用或加工。 |
| How much | 声明交接点的 1 kg 产品净质量。 |
| How well | 声明动物来源、物种、解剖组织/产品形态、物理状态、处置/等级、包装、交接温度或条件，并确认未经熬制。 |
| How long or cycle | 一次产品交接；声明交接前纳入的冷藏时长和运输段。 |
| reference_flow_link | 参考流是实现所声明 1 kg 中间产品功能所需的净质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 猪和家禽脂肪，未煅烧的 `0ba97549-7663-496e-8451-8396d31d2bcf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | animal_source（`pig` 或 `poultry`，只能一个）；species；anatomical_tissue_or_product_form；physical_state（`fresh`、`chilled` 或 `frozen`）；disposition_or_grade；rendering_status（`unrendered`）；packaging_form；handover_point；handover_temperature_or_condition；storage_duration_if_any；included_transport_if_any |

构建前景数据包时，每项必需限定信息都应出现在数据集元数据、过程说明、参考流备注、产品说明或等效字段中。通用 CPC 流 UUID 不代表可以省略动物来源，也不允许采用猪与家禽运行参数的平均值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 交接时的参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明物理状态和交接点报告 1 kg 未熬制脂肪净质量；排除包装及运输设备皮重。 |
| `gross_to_net_mass` | 包装或容器化产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 若仅记录毛重，应减去相同包装类型或批次的实测容器与包装皮重，并保留两项记录。 |
| `animal_and_form_segregation` | 所有参考量和清单量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别计量和归一化猪与家禽，并为实质不同的组织形态和鲜/冷却/冷冻状态保留独立记录；不得使用无说明的合并平均值。 |
| `handover_state_mass` | 水分、滴液、血液、瘦肉组织或修整差异 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 不采用干脂肪或熬制脂肪换算。按交接状态报告质量，并将滴液、剔除修整物或其他质量变化记录为独立流。 |
| `transport_work` | 纳入的出厂运输 | 质量和距离 | tonne-kilometre | 每一运输段按装载产品吨数乘实际装载距离（km）计算；说明所选运输数据集是否包括返程或装载率。 |
| `cold_storage_normalization` | 冷却、冷冻和冷藏 | 能量和时间 | kWh 和 h | 按声明物理状态和储存期记录能耗，并以通过该操作的产品净质量归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 来自已声明猪或家禽物种的脂肪组织或脂肪原料已在屠宰/整理/宰后处置和/或分割后识别，未经熬制，可供分离，或刚作为共产品分离。 |
| starting_condition_role | 从屠宰或分割系统向未熬制脂肪前景转移的共产品/原料交接；应声明确切负担转移点。 |
| product_classification_scope | 仅限 CPC 3.0 21511；排除熬制猪脂 21521、熬制家禽脂 21522 和其他熬制脂肪/油 21523–21529。 |
| recursive_input_rule | 进入前景操作的外购 CPC 21511 材料应作为具有自身上游数据集和限定信息的独立产品输入，不得递归吸收到参考输出中。单一数据集不得把猪和家禽输入合并为来源不明的参考产品。 |
| upstream_dataset_requirement | 若屠宰、整理或分割发生在声明起点之前，应采用单独记录的上游数据集及其共产品分配。若这些操作属于前景，应采集分配所需的联合过程投入以及全部共产品/废物输出。 |
| disclosure | 声明动物来源、物种、组织/产品形态、处置/等级、鲜/冷却/冷冻状态、分离点、纳入操作、包装、冷藏时长、交接点、纳入的运输，以及是否包括上游屠宰/分割负担。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_unrendered_identity` | 产品识别和过程清单 | 参考产品应保持未熬制组织/脂肪原料状态。任何熬制、脂肪熔化、提取、精炼、分提、氢化或命名熬制脂肪制造均被排除，需采用另一产品系统。 | unsd-cpc-3-0-2025; codex-cxs-211-1999 |
| `boundary_foreground_operations` | 前景系统 | 纳入可归属的分离/修整、分选、卫生处理、称量、条件性冷却/冷冻、包装、储存、装载，以及声明交接前受控制的运输。 | codex-cxc-58-2005; eu-pef-2021-2279 |
| `boundary_cold_chain` | 冷却或冷冻产品 | 记录冷却/冷冻、冷藏时长、温度控制、损失及纳入的冷藏运输；不得由本 PCR 推断统一温度或保存时间。 | codex-cxc-58-2005 |
| `boundary_transport_handover` | 出厂物流 | 运输仅纳入至声明的合同或物理交接点，并识别每一运输段；交接后的下游运输默认排除，除非明确纳入研究范围。 | codex-cxc-58-2005; eu-pef-2021-2279 |
| `boundary_upstream_coproduct` | 屠宰和分割联合过程 | 识别脂肪成为共产品的节点，并将可直接归属的分离后负担留给脂肪；共同发生的屠宰/分割负担采用第 7 节分配规则。 | eu-pef-2021-2279 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `separation_preparation` | 共产品识别、分离、修整、分选和称量 | required | 始终纳入；声明确切起点和已完成的操作。 | 建立未熬制产品识别和净质量，并保留联合过程分配证据。 | kg 分离后的未熬制脂肪净质量 |
| `temperature_management` | 冷却、冷冻和冷藏 | conditional | 交接前发生任何降温或受控冷藏时纳入。 | 保持声明物理状态，并记录能耗、时长、制冷剂和损失。 | kg 通过操作的产品和储存小时数 |
| `packaging_handover` | 包装、最终称量、储存、装载和交接 | required | 无包装散装交接时包装投入为条件性；称量和交接记录始终必需。 | 在声明门点生产参考流。 | kg 参考产品净质量 |
| `outbound_transport` | 至声明交接点的出厂运输 | conditional | 仅当报告主体控制或纳入交接前运输时纳入。 | 将发运连接至声明交货门点，不延伸至下游熬制。 | 各运输段 tonne-kilometre 和 kg 交付量 |

### 过程：共产品识别、分离、修整、分选和称量（`separation_preparation`）

#### 输入

##### 产品流

###### 合格猪或家禽脂肪组织/部位（`eligible_fatty_material_input`）

记录进入前景分离步骤的质量及其与屠宰或分割批次的关联。

- 选定流：已声明的猪或家禽胴体部位、脂肪组织或分割材料；场址特定产品输入
- 流属性/单位：Mass / kg
- 数量规则：按批次和动物来源实测输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 分离后的未熬制脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_identity_mass`
- 来源：`codex-cxc-58-2005`

###### 清洁和工艺用水（`separation_water`）

记录可归属于本步骤的设备或产品接触清洁用水。

- 选定流：场址特定供水
- 流属性/单位：Volume / m3
- 数量规则：计量或核算得到的分离和卫生操作用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离后的未熬制脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_water_records`
- 来源：`codex-cxc-58-2005`；`eu-fdm-bat-2019-2031`

###### 分离用电，实测（`separation_electricity_measured`）

当可归属修整、输送、分选、称量和卫生操作时，采用分表、仪表核算或公用工程记录。

- 选定流：场址特定电力供应
- 流属性/单位：Energy / kWh
- 数量规则：生产期内可归属于本过程的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离后的未熬制脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_water_records`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 分离用电，暂定后备值（`separation_electricity_provisional`）

仅在候选数据集缺少实测电量时使用。按设备额定功率、记录的运行时间和有据可查的场址负载系数估算；不得采用统一的猪—家禽平均值。一旦获得代表性的分表、经核算的公用工程或设备测试记录，应立即替换本行。

- 选定流：场址特定电力供应
- 流属性/单位：Energy / kWh
- 数量规则：纳入设备的额定功率乘记录运行时间和有据可查负载系数之和
- 数值来源模式：模型估算（`modelled_estimate`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离后的未熬制脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：推理估算（`reasoned_estimate`）
- 采集协议：`cp_utility_and_water_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分离后的未熬制猪或家禽脂肪（`separated_unrendered_fat`）

记录任何熬制前的净输出质量，并保留动物和组织/形态限定信息。

- 选定流：猪和家禽脂肪，未煅烧的 `0ba97549-7663-496e-8451-8396d31d2bcf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分离和修整后的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：下游纳入操作前的过程输出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_identity_mass`
- 来源：`unsd-cpc-3-0-2025`

###### 其他可销售屠宰或分割共产品（`other_coproducts`）

当本数据包分配屠宰或分割负担时，记录联合过程边界的全部其他可销售输出。

- 选定流：按产品识别的场址特定共产品记录
- 流属性/单位：Mass / kg
- 数量规则：分配期内按共产品实测质量和处置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：联合屠宰或分割过程输出期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_allocation_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 剔除或判废材料（`rejected_material`）

记录从参考产品剔除的材料及其处置；不得无说明计为产品或共产品。

- 选定流：场址特定剔除或判废动物材料
- 流属性/单位：Mass / kg
- 数量规则：按处置路线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离后的未熬制脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_identity_mass`
- 来源：`codex-cxc-58-2005`；`eu-pef-2021-2279`

###### 分离废水（`separation_wastewater`）

记录离开前景的废水，并识别在场内或下游处理。

- 选定流：流向声明处理路线的场址特定废水
- 流属性/单位：Volume / m3
- 数量规则：计量或水量平衡得到的可归属废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离后的未熬制脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_and_water_records`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

### 过程：冷却、冷冻和冷藏（`temperature_management`）

#### 输入

##### 产品流

###### 进入温控的已分离未熬制脂肪（`fat_to_temperature_management`）

记录进入纳入的冷却、冷冻或储存操作的质量和产品限定信息。

- 选定流：猪和家禽脂肪，未煅烧的 `0ba97549-7663-496e-8451-8396d31d2bcf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入冷却、冷冻或储存操作的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 温控后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_storage_records`
- 来源：`codex-cxc-58-2005`

###### 制冷用电（`temperature_electricity`）

记录纳入的温控操作及其声明储存期对应的用电。

- 选定流：场址特定电力供应
- 流属性/单位：Energy / kWh
- 数量规则：冷却/冷冻和储存的计量或核算电量；共用时采用有据可查的因果驱动因素分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 温控后输出和声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_storage_records`
- 来源：`codex-cxc-58-2005`；`eu-pef-2021-2279`

###### 制冷剂补充（`refrigerant_makeup`）

按物质记录制冷系统补充量，以便核算排放且不采用通用制冷剂假设。

- 选定流：按物质和场址记录识别的制冷剂
- 流属性/单位：Mass / kg
- 数量规则：报告期内可归属于纳入制冷系统的购入或充注制冷剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一报告期每 kg 温控后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_storage_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却或冷冻未熬制脂肪（`temperature_managed_fat`）

记录离开温控操作且仍处于熬制前状态的产品质量和物理状态。

- 选定流：猪和家禽脂肪，未煅烧的 `0ba97549-7663-496e-8451-8396d31d2bcf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明出口温度和物理状态实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_storage_records`
- 来源：`codex-cxc-58-2005`

##### 废物流

###### 温控过程中的滴液、渗出或剔除材料（`temperature_management_loss`）

记录未保留在温控后输出中的全部产品质量及其处置。

- 选定流：流向声明处理路线的场址特定有机损失
- 流属性/单位：Mass / kg
- 数量规则：按类型和处置分别报告的实测或质量平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 温控后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_temperature_storage_records`
- 来源：`codex-cxc-58-2005`

##### 基本流

###### 排放至空气的制冷剂（`refrigerant_emission`）

根据纳入系统的制冷维护和库存记录计算物质特定排放。

- 选定流：排放至空气的已声明制冷剂物质；由数据集作者选择物质特定流
- 流属性/单位：Mass / kg
- 数量规则：根据补充、移出、回收和库存变化建立纳入系统的制冷剂平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：报告期每 kg 温控后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_temperature_storage_records`
- 来源：`eu-pef-2021-2279`

### 过程：包装、最终称量、储存、装载和交接（`packaging_handover`）

#### 输入

##### 产品流

###### 进入交接准备的未熬制脂肪（`fat_to_handover`）

记录进入包装或散装交接准备的产品质量，并保持批次识别。

- 选定流：猪和家禽脂肪，未煅烧的 `0ba97549-7663-496e-8451-8396d31d2bcf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入包装或散装交接准备的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接时每 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_handover_records`
- 来源：`codex-cxc-58-2005`

###### 包装材料（`packaging_materials`）

记录随产品投放的每种材料，并扣除边界内有据可查的退回或再用量。

- 选定流：分别识别每种初级、次级、托盘、内衬、容器或可重复使用包装材料
- 流属性/单位：Mass / kg；需要时用实测单件质量将件数换算为质量
- 数量规则：可归属于发运参考产品的包装领用量减退回/再用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接时每 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_handover_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明交接点的参考产品（`reference_product_output`）

这是唯一的定量参考输出。产品保持未熬制状态并携带全部必需限定信息。

- 选定流：猪和家禽脂肪，未煅烧的 `0ba97549-7663-496e-8451-8396d31d2bcf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除皮重后的实测交接净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_handover_records`
- 来源：`unsd-cpc-3-0-2025`；`codex-cxc-58-2005`

##### 废物流

###### 包装损失和废弃包装（`packaging_waste`）

记录在前景内废弃、而非随交接产品输出的包装。

- 选定流：分别识别每种包装废物材料和处理路线
- 流属性/单位：Mass / kg
- 数量规则：可归属于发运期的实测废弃包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接时每 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_handover_records`
- 来源：`eu-pef-2021-2279`

##### 基本流

### 过程：至声明交接点的出厂运输（`outbound_transport`）

#### 输入

##### 产品流

###### 发运的未熬制脂肪（`dispatched_product`）

记录每个纳入运输段的装载产品净质量。

- 选定流：猪和家禽脂肪，未煅烧的 `0ba97549-7663-496e-8451-8396d31d2bcf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按货运批次实测装载净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明交接点每 kg 交付量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport_records`
- 来源：`codex-cxc-58-2005`

###### 货运运输服务（`outbound_freight_service`）

记录至声明交接点的路线特定运输功，且不得与单独的自有车队模型重复计算。

- 选定流：由数据集作者选择路线、方式、车辆、载荷和制冷特定运输服务
- 流属性/单位：Transport work / tonne-kilometre
- 数量规则：每个纳入运输段的实测装载产品吨数乘实际装载距离
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：声明交接点每 kg 交付量
- 基准类型：运输服务（`transport_service`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`codex-cxc-58-2005`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已交付未熬制脂肪（`delivered_product`）

记录交货点验收的产品质量，并保留全部参考产品限定信息。

- 选定流：猪和家禽脂肪，未煅烧的 `0ba97549-7663-496e-8451-8396d31d2bcf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在声明交货点实测验收净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已交付参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport_records`
- 来源：`codex-cxc-58-2005`

##### 废物流

###### 运输损失或拒收（`transport_loss`）

记录发运与验收之间经核算的差异及其有据可查的处置。

- 选定流：流向声明去向的产品损失或拒收货物
- 流属性/单位：Mass / kg
- 数量规则：发运质量减验收交付质量，并核算有据可查的计量差异
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 验收交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`codex-cxc-58-2005`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_subdivision` | 分离、冷却、包装和运输负担 | 在分配任何联合负担前，将直接计量或可直接归属的投入、排放和废物分配给未熬制脂肪操作。 | eu-pef-2021-2279 |
| `allocation_joint_slaughter_cutting` | 上游屠宰或分割联合过程 | 若无法细分，应记录所选 PEF 兼容层级。PEF 猪产品研究采用 Recommendation (EU) 2021/2279 当前猪屠宰规定。家禽不得复用猪因子：存在经证明的因果物理关系时采用该关系，否则采用联合生产阶段同期价格的经济分配。 | eu-pef-2021-2279 |
| `allocation_no_cross_species_default` | 任何通用或多场址结果 | 不得把猪和家禽的分配因子、产率、价格、公用工程强度或组织组成平均为无说明类别默认值。应发布独立数据集或分别参数化情景。 | eu-pef-2021-2279 |
| `allocation_output_status` | 产品、共产品、残余物和废物 | 记录所有相关联合过程输出的质量、处置和经济状态。作为废物处理的材料采用相应废物处理模型；可销售未熬制脂肪参考产品不得被重标为无负担废物。 | eu-pef-2021-2279 |
| `allocation_rendering_excluded` | 下游熬制 | 不得把熬制、熔化、精炼或熬制脂肪处理负担分配给本参考产品。除非明确纳入至交接点的运输，否则向下游熬制者交接即为本前景终点。 | unsd-cpc-3-0-2025; codex-cxs-211-1999 |
| `allocation_disclosure` | 经分配数据集 | 报告联合过程边界、分配层级、变量、采用经济分配时的价格和价格期、承担负担的输出，以及与解释有关的敏感性或限制。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_identity_mass` | `separation_preparation` | identity, input, product, reject | 批次记录和秤记录 | batch_id; animal_source; species; tissue_or_product_form; slaughter_or_cutting_lot; post_mortem_disposition; intended_grade; rendering_status; input_mass; output_mass; rejected_mass; tare; timestamp; scale_id | 追溯批次至来源批，并记录分离前后校准秤读数 | kg | 每批次或货批 | 报告期全部批次，或有据可查的代表性抽样框架 | 各屠宰/分割场址和生产线 | 仅在动物来源、物种、组织/形态、状态和边界相同时汇总；按净输出质量加权 | 校准记录；批次追溯；处置记录；质量核算 |
| `cp_utility_and_water_records` | `separation_preparation` | electricity, water, wastewater | 仪表、发票、运行时间和水量平衡记录 | meter_start; meter_end; invoice_quantity; equipment_id; rated_power; runtime; load_factor_basis; water_input; water_to_product_if_any; wastewater_output; allocation_driver; production_mass | 优先分表，其次采用有据可查的仪表或发票核算；保留暂定估算的设备运行输入 | kWh; m3; h; kg output | 各来源记录对应的生产期 | 覆盖声明产品和场址的代表性运行期 | 每个设施和声明的公用工程仪表边界 | 分别处理猪、家禽及实质不同过程路线；按净过程输出归一化 | 仪表编号；发票；生产日志；核算；估算假设 |
| `cp_coproduct_allocation_records` | `separation_preparation` | joint products, co-products, residues, wastes | 联合过程质量和价值台账 | allocation_period; process_boundary; output_id; output_status; mass; price; currency; price_date; destination; directly_attributable_burden; allocation_method | 在同一联合过程边界核算生产、销售、废物和处置记录 | kg; currency/kg | 各分配期 | 与纳入联合过程负担相同的期间 | 按场址和动物来源分别处理 | 不汇总猪与家禽；每个边界采用一种有据可查分配层级 | 质量平衡；销售发票；处置记录；分配工作表 |
| `cp_temperature_storage_records` | `temperature_management` | product mass, temperature, energy, refrigerant, loss | 批次温度日志、仪表和制冷维护记录 | batch_id; entry_mass; exit_mass; entry_temperature; exit_temperature; physical_state; storage_start; storage_end; electricity; refrigerant_type; opening_stock; additions; recovery; closing_stock; loss_mass | 温度和储存记录关联至批次；核算制冷仪表和维护日志 | kg; degree C; h; kWh | 识别/温度按批次，共用公用工程按报告期 | 交接前全部纳入的冷却/冷冻/储存 | 每个设施、制冷系统和声明储存边界 | 按动物来源、状态、路线和储存制度分开；共用能耗采用有据可查的因果驱动因素 | 连续或定期温度记录；仪表；维护发票；质量核算 |
| `cp_packaging_handover_records` | `packaging_handover` | packaging, tare, reference output, packaging waste | 包装领退、秤和发运记录 | batch_id; packaging_material; units_issued; units_returned; unit_mass; reusable_cycles_if_known; gross_mass; tare_mass; net_mass; handover_point; handover_time; condition; waste_mass | 核算包装库存和发运重量；采用实测包装单件质量 | kg; count | 每次发运，并进行期间库存核算 | 报告期全部发运 | 每条包装线、散装装载点和声明交接门点 | 仅汇总产品限定信息和包装形态相同的记录；按产品净质量归一化 | 秤校准；包装规格；库存台账；发运验收 |
| `cp_transport_records` | `outbound_transport` | shipment mass, distance, mode, refrigeration, accepted mass | 承运、发运、路线和收货记录 | shipment_id; dispatch_mass; accepted_mass; origin; destination; actual_distance; mode; vehicle_class; payload; capacity_utilization; refrigeration; return_trip_treatment; temperature_log; rejection_or_loss | 获取承运人/车载记录距离和收货验收；各运输段分别建模 | kg; km; tonne-kilometre | 每票运输 | 报告期全部纳入运输 | 每条起讫路线和声明交接门点 | 汇总各段吨公里和损失；计算前不得合并路线 | 提单；承运记录；路线证据；收货记录；温度记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_handover_mass` | 参考产品 | net_mass_kg = gross_mass_kg - measured_tare_mass_kg | 毛重；皮重 | 交接点净 kg | codex-cxc-58-2005 |
| `calc_reference_normalization` | 所有清单行 | normalized_quantity = period_or_batch_quantity / 相同边界和期间的 net_reference_product_kg | 流数量；匹配的净输出质量 | 每 kg 参考产品数量 | eu-pef-2021-2279 |
| `calc_provisional_separation_electricity` | `separation_electricity_provisional` | estimated_kWh = sum(rated_power_kW x operating_time_h x documented_load_factor)；仅在无实测电量时使用，并在取得代表性实测或核算记录时替换 | 设备额定功率；运行时间；场址特定负载系数依据；净输出质量 | 标记为 `reasoned_estimate` 的暂定 kWh/kg |  |
| `calc_wastewater_balance` | 分离废水 | 废水 = 计量排放量，或用水投入减有据可查的产品含水、蒸发和其他单独去向 | 水表记录；保留水量；其他出口 | 每 kg 输出的 m3 废水 | eu-fdm-bat-2019-2031 |
| `calc_refrigerant_balance` | 制冷剂排放 | emitted_mass = opening_stock + additions - recovered_or_returned - closing_stock，仅按有据可查转移调整 | 制冷剂库存和维护记录 | 每 kg 输出的 kg 物质排放 | eu-pef-2021-2279 |
| `calc_transport_work` | 每个纳入运输段 | tonne_km = loaded_net_mass_kg / 1000 x actual_loaded_distance_km | 运输质量；距离 | 各段每 kg 交付量的 tonne-kilometre | eu-pef-2021-2279 |
| `calc_mass_balance` | 每个前景过程 | 使用一致湿态质量：input_mass = product_outputs + co_products + wastes + measured_or_explained_stock_change and losses | 投入、输出、废物和库存记录 | 经核算质量平衡和未解释残差 | eu-pef-2021-2279 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_product_identity` | 参考产品和所有产品行 | 声明且仅声明一种动物来源（猪或家禽），以及物种、组织/产品形态、物理状态、处置/等级和未熬制状态；保持货批关联至交接。 | 批次、检验/处置和交接记录 |
| `dqr_measurement` | 质量、能量、水、温度和时间 | 使用经校准或受控仪器，并保留仪表/秤识别、日期、方法和单位换算。 | 校准、仪表、秤和运行记录 |
| `dqr_temporal` | 所有前景数据 | 将流记录、生产质量、价格、分配期和交接记录对齐到同一代表期；披露缺口和季节性。 | 带时间戳记录和覆盖说明 |
| `dqr_completeness` | 过程清单 | 核算产品、共产品、废物、能源、水/废水、包装、制冷剂、储存和纳入运输记录；解释每个被省略的适用过程。 | 过程流程图、台账、平衡和省略说明 |
| `dqr_allocation` | 屠宰/分割共产品负担 | 分配前保留直接归属，并保留联合过程输出、所选层级、变量及适用时的价格证据。 | 分配工作表、输出台账、发票和方法说明 |
| `dqr_reasoned_estimate_replacement` | 暂定用电后备值 | 将该行标记为 `reasoned_estimate`，披露设备、运行时间和负载系数假设；取得代表性分表、经核算公用工程或设备测试证据时，或经评审产品特定证据取代时，应予替换。 | 估算工作表、数据缺口说明和替换评审触发条件 |
| `dqr_source_limits` | 外部标准使用 | 不得把 CXC 卫生指南转为统一温度限值，不得把 CXS 熬制脂肪组成转为未熬制脂肪规格，不得把 PEF 猪分配值转为家禽默认值，也不得把 FDM BAT 的适用性/绩效表述转为通用法律限值。 | 来源用途和限制说明 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID 应为 `0ba97549-7663-496e-8451-8396d31d2bcf`，参考属性 UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位为 kg。 |  |
| `validate_required_qualifiers` | 数据集元数据 | animal_source 缺失、不是且仅不是 `pig` 或 `poultry`，或缺少物种、解剖组织/产品形态、物理状态、处置/等级、熬制状态、包装或交接条件时，校验失败。 | unsd-cpc-3-0-2025 |
| `validate_unrendered_boundary` | 过程图和产品说明 | 若将熬制、脂肪熔化/提取、精炼、分提或 CPC 21521–21529 熬制脂肪制造作为参考产品前景生产步骤，校验失败。 | unsd-cpc-3-0-2025; codex-cxs-211-1999 |
| `validate_species_separation` | 前景记录和发布结果 | 若猪与家禽实际参数被平均或合并，且没有独立数据集/情景和保留的分列记录，校验失败。 | eu-pef-2021-2279 |
| `validate_mass_and_tare` | 参考数量和过程平衡 | 确认净质量排除包装皮重，且每个纳入过程均有投入/输出/共产品/废物/库存变化平衡，或披露残差。 | eu-pef-2021-2279 |
| `validate_cold_chain` | 冷却或冷冻产品 | 温控适用时，确认物理状态、温度记录、储存时长、能耗、损失和冷藏运输处理完整；不适用时，应说明理由并报告为跳过检查。 | codex-cxc-58-2005 |
| `validate_allocation` | 屠宰或分割联合负担 | 纳入上游联合负担时，确认先直接细分，记录动物特定分配，且未把猪特定因子用于家禽。 | eu-pef-2021-2279 |
| `validate_transport_gate` | 出厂运输 | 确认纳入运输段终止于声明交接点，运输质量和距离支持吨公里，且下游熬制运输被排除，除非明确属于交接范围。 | codex-cxc-58-2005; eu-pef-2021-2279 |
| `validate_reasoned_estimate` | 暂定用电后备值 | 仅在实测用电不可得、假设有记录、未与实测行同时使用且记录替换触发条件时接受；否则形成错误发现。 |  |
| `validate_completeness` | 校验结果 | 报告已接受输入、执行检查、跳过检查、发现和完整性。缺少识别、边界、分配或计量证据时，应判为不确定或失败，不得静默标记完整。 | eu-pef-2021-2279 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 在声明交接门点的一种已声明猪或家禽未熬制脂肪组织/产品形态前景数据包。 |
| downstream_use | 经方法评审、来源/计量 QA 和校验后，可成为 `secondary_dataset` 或 `background_dataset`；支持下游 `process` 和 `lifecyclemodel` 投影。 |
| allowed_use | 对鲜、冷却或冷冻的未熬制猪或家禽脂肪进行熬制前建模，且动物来源、物种、组织/形态、状态、地域、技术、分配边界和交接条件相匹配。 |
| excluded_use | 熬制或精炼脂肪和油；猪油或熬制家禽脂；来源不明的猪—家禽平均值；无独立参数化的混合动物材料；食品安全合规声明；替代司法辖区特定法律要求或产品规格。 |
| required_metadata | PCR id/版本；产品流、属性和单位 UUID；动物来源；物种；解剖组织/产品形态；处置/等级；熬制状态；物理状态；净质量/皮重方法；场址/地域；技术；期间；分离点；纳入过程；冷藏时长；包装；交接点；运输段；分配方法；来源 id。 |
| required_quality_disclosure | 记录覆盖和代表性；校准和核算；质量平衡残差；直接与分配负担；分配变量和价格期；数据缺口；跳过检查；不确定性；每项 `reasoned_estimate`；来源限制。 |
| update_trigger | 新的场址或物种/组织实测证据；可用于替换暂定能耗估算的分表数据；动物来源、产品形态、物理状态、屠宰/分割边界、分配方法或价格、冷却/冷冻路线、包装、储存时长、运输交接、Tiangong 识别、CPC 范围或控制来源发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 类别识别以及未熬制/熬制边界：21511 对比熬制猪脂 21521、熬制家禽脂 21522 和其他熬制脂肪 21523–21529。限制：分类定义范围，不提供 LCA 数量、卫生限值或组成。 |
| `codex-cxc-58-2005` | standard | Codex Alimentarius, *Code of Hygienic Practice for Meat (CXC 58-2005)*. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf（检索日期 2026-08-11） | 宰后处理、修整/分割、冷却/冷冻、包装、储存、运输、温度记录、隔离和追溯的过程控制完整性。限制：仅作卫生/过程背景；本 PCR 不将其提升为统一法律阈值或 LCA 绩效值。 |
| `codex-cxs-211-1999` | standard | Codex Alimentarius, *Standard for Named Animal Fats (CXS 211-1999)*，现行官方文本修订至 2024。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf（检索日期 2026-08-11） | 反向边界证据：其命名产品包括熬制猪油和熬制猪脂。限制：不定义未熬制猪/家禽脂肪的类别配方，本 PCR 不采用其任何组成或质量值作为默认值。 |
| `eu-pef-2021-2279` | official_guidance | European Commission, *Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, Annex I PEF method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期 2026-08-11） | 功能/声明单位、参考流、系统边界、企业特定数据、过程清单、数据质量、分配层级和屠宰共产品处理。限制：猪特定屠宰规定不是家禽证据，不得平均或转用于家禽；EF 特定默认值仅适用于其规定的 EF 情境。 |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission, *Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries*. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng（检索日期 2026-08-11） | 当设施/活动属于适用范围时，作为过程流程图以及水、能源、原料、废水、废气和监测参数清单的条件性检查表。限制：本 PCR 不推广任何法律适用阈值、BAT 相关绩效水平、排放限值或行业数值；屠宰场适用性须另行判断。 |
