---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鲜或冷藏鸡肉

## 1. 范围与适用性

本 PCR 适用于鸡（`Gallus domesticus`）可食用肉的前景生产，产品以鲜或冷藏状态离开屠宰场或肉类加工厂。代表性边界始于屠宰场门口接收活鸡，终于经检验、冷却并可在工厂门口发运的鸡肉。产品可为整只净膛胴体，也可为申报的带骨或去骨、带皮或去皮分割肉，并可包含初级包装，但必须始终保持鲜或冷藏状态。

本 PCR 不包括活鸡养殖、冷冻鸡肉、作为参考产品的食用禽杂碎、炼制禽脂，以及熟制、调味、腌渍、盐腌、熏制、罐藏或其他加工鸡肉；也不包括零售、餐饮、消费者烹饪和包装废弃处理。只有在切割、去骨、初级包装、厂内废水处理或副产品处理发生于申报工厂门口之前时，生产者才可将其纳入，且必须分别披露清单。必须说明产品形态、冷却方式、包装状态、地理范围和纳入的可选操作，因为这些因素会显著影响得率、用水、能源和共产品结果。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-fresh-or-chilled |
| classification_refs | CPC 3.0 `21121`，鲜或冷藏鸡肉，精确范围引用 |
| covered_products | 鲜或冷藏可食用鸡肉；整只净膛胴体；带骨分割肉；去骨分割肉；带皮或去皮分割肉；散装或初级包装产品 |
| excluded_products | 活鸡；冷冻鸡肉；作为独立产品的食用禽杂碎；炼制脂肪；除非适用司法辖区明确归入本类别的机械分离肉；熟制、调味、腌渍、盐腌、熏制、罐藏或其他加工鸡肉产品 |
| representative_product | 经检验、冷却并可在屠宰场门口发运的整只净膛鸡胴体 |
| production_route | 活禽接收和检验；击昏；放血；浸烫；脱毛；按需去头去脚；去内脏和宰后检验；清洗；快速冷却；可选切割和初级包装；冷藏暂存和发运 |
| market_state | 屠宰场或加工厂门口的鲜或冷藏可食用鸡肉；所代表路线中不得冷冻 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在申报工厂门口提供已通过适用宰后检验并可发运的鲜或冷藏可食用鸡肉 |
| How much | 1 kg 申报鸡肉产品净质量，不含包装、游离冰以及单独销售的食用杂碎或其他共产品 |
| How well | 产品身份、形态、卫生处置、冷却方式、发运温度和包装状态符合适用法律及客户规范；产品未经冷冻或进一步加工 |
| How long or cycle | 一个可识别生产批次经过屠宰、冷却、申报的可选加工和工厂门口发运；冷藏条件保持至工厂门口 |
| reference_flow_link | 一个功能单位由工厂门口恰好 1 kg 申报参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 工厂门口 1 kg 鲜或冷藏鸡肉净质量 |
| Reference product flow | Meat of chickens, fresh or chilled `562d85c5-f2c0-4a72-b866-5b3587bf4f29` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 鸡的物种和生产类别；整胴体或具名分割部位；带骨或去骨；带皮或去皮；鲜或冷藏状态；冷却方式；门口实测产品温度；净质量基准和沥水约定；包装状态；工厂门口地理范围；生产批次期间；纳入的切割、去骨、包装、废水处理和副产品处理操作 |

构建前景数据包时，必须在数据集元数据、过程备注、参考流注释、产品描述或等效字段中申报 `Required qualifiers` 所列项目。缺少任何必需限定项，均使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在冷却及申报沥水期后称量可销售鲜或冷藏鸡肉。扣除包装皮重、游离冰、容器、单独销售的食用杂碎和副产品，并将完整清单归一化至 1 kg 参考产品净质量。 |
| `product_temperature` | 工厂门口参考产品 | Temperature | °C | 按适用批次抽样计划记录产品温度。除主管机关或客户规定更严格限值外，冷藏禽肉默认采用不高于 4 °C 的指导值；保留实际限值、测量点和例外。 |
| `water_uptake_disclosure` | 水冷产品 | Mass | kg | 浸水或喷淋冷却改变产品质量时，以有记录的冷却前与沥水后质量测量确定吸水量并披露方法。不得通过改变申报参考量隐藏滞留水。 |
| `live_mass_basis` | 进厂活鸡 | Mass | kg live weight | 按批次同时记录鸡只数量和实测活体净质量。得率和质量平衡计算必须使用质量，不得只用只数。 |
| `energy_conversion` | 电力、燃料、蒸汽、热量和制冷 | Energy | kWh | 保留源计量单位。MJ 除以 3.6 换算为 kWh，并披露燃料低位或高位热值约定。采购电力和燃料能量只有换算到同一净能源基准后方可合并。 |
| `water_volume_conversion` | 供水和废水 | Volume | m3 | 使用计量体积；升除以 1,000 换算为立方米。单独排放的非接触冷却水和雨水须与工艺废水分开。 |
| `packaging_exclusion` | 参考产品与包装 | Mass | kg | 包装不计入参考产品质量；若初级包装发生在申报工厂门口前，则作为独立投入记录。 |
| `normalization_denominator` | 所有前景清单行 | Mass | per 1,000 kg reference product | 先汇总申报报告期，再将各流除以合格参考产品净质量并乘以 1,000。除非来源范围明确使用其他基准，不得按活禽总质量、胴体总质量或共产品总产出归一化。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场接收点获准屠宰的活鸡，并记录供应商、来源、到厂质量、只数、死亡情况和检验处置 |
| starting_condition_role | 前景门口投入条件；上游饲养和饲料生产由链接的背景数据集提供，不在屠宰前景内重复 |
| product_classification_scope | CPC 3.0 `21121` 下保持鲜或冷藏状态的可食用鸡肉；冷冻肉、食用杂碎和加工或保藏鸡肉不属于本 PCR 身份 |
| recursive_input_rule | 若鲜或冷藏鸡肉进入切割、去骨、重新包装或返工作业，须作为同类别独立技术圈投入并链接上游数据集，不得在接收过程中递归复制其屠宰清单 |
| upstream_dataset_requirement | 对跨越所选边界的活鸡生产及进厂运输、电力、燃料或热量、供水、化学品、包装、制冷剂和厂外处理，要求可追溯上游数据集 |
| disclosure | 申报地理范围、工厂类型、产品形态、冷却方式、门口温度限值、沥水约定、报告期、纳入的可选操作、处理权属、共产品去向、分配方法及所有边界偏离 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_slaughter_route` | 前景屠宰和冷却 | 纳入活禽接收与检验、击昏、放血、浸烫、脱毛、按需去头去脚、去内脏、宰后检验、清洗、冷却、冷藏暂存和发运。若切割、去骨和初级包装发生在申报产品门口前，也须纳入。 | `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005` |
| `boundary_rule_cold_chain` | 冷藏产品 | 纳入迅速降低产品温度并保持申报冷藏状态至工厂门口所需的制冷和操作。仅当有记录的操作确有需要时，才可表示临时冷链中断，并记录持续时间及温度后果。 | `codex-cxc-58-2005` |
| `boundary_rule_upstream` | 活鸡及其他供应投入 | 将养殖、孵化、饲料生产和厂外供应过程排除在屠宰前景之外，但通过上游数据集链接其负荷。若交付活鸡数据集尚未包含进厂运输，则单独纳入。 | `ifc-poultry-processing-ehs-2007` |
| `boundary_rule_stream_separation` | 鸡肉、食用共产品、不可食用物料和废水 | 将参考鸡肉、食用杂碎、可售副产品、判废物料、血液、羽毛、其他固体和废水作为不同物流。不得将可回收有机物隐含计入废水。 | `ifc-poultry-processing-ehs-2007`; `ec-bat-slaughterhouses-2023` |
| `boundary_rule_treatment` | 厂内与厂外处理 | 若厂内废水或副产品处理在申报工厂边界内运行，则纳入其负荷；否则记录外送废物或共产品，并链接适当的厂外处理或加工数据集。 | `ec-bat-slaughterhouses-2023` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入方式 | 纳入条件 | 作用 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `slaughter_chill_gate` | 鸡屠宰、冷却和工厂门口准备 | required | 始终纳入；切割、去骨、初级包装、厂内处理和副产品加工仅在申报门口前发生且已披露时纳入本过程 | 鲜或冷藏鸡肉前景生产 | 工厂门口 1,000 kg 合格参考产品净质量 |

代表性路线的天工过程身份引用：Chicken slaughtering and chilling `c7c5f519-5cd5-4e35-aa80-6a387051d896`。

### 过程：鸡屠宰、冷却和工厂门口准备（`slaughter_chill_gate`）

#### 输入

##### 产品流

###### 接收活鸡（`incoming_live_chickens`）

合格鸡只在屠宰场接收处跨入前景边界。按批次记录活体净质量和只数；上游饲养保留在链接的活鸡数据集中。

- 选定流：获准屠宰的活鸡；使用与申报鸡只及市场状态匹配且质量单位适配的天工产品流
- 流属性/单位：Mass / kg live weight
- 数量规则：进入屠宰路线的合格鸡只实测活体净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：工厂门口每 1,000 kg 合格鲜或冷藏鸡肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bird_receipt`
- 来源：`ifc-poultry-processing-ehs-2007`
- 数量范围：可替换的临时活禽投入筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1200
  - 上限：4000
  - 单位：kg live weight
  - 基准：每 1,000 kg 参考产品净质量；适用于整胴体和申报分割肉的宽泛包络，须由产品特定且经评审的得率证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 外购电力（`purchased_electricity`）

电力用于屠宰线设备、泵、通风、冷却、冷藏暂存、可选切割和包装，以及纳入边界的厂内处理。

- 选定流：与场址和电压相适配的外购电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：分配给纳入操作的计量外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-bat-slaughterhouses-2023`; `ifc-poultry-processing-ehs-2007`

###### 燃料、蒸汽或外供工艺热（`process_heat`）

记录浸烫、热水、卫生、空间调节及纳入处理操作使用的燃料、蒸汽或外供热；不得把不同产品合并成不可追溯的单一数量。

- 选定流：场址特定燃料、蒸汽或热产品流；对实质不同的能源载体在产出数据集中建立独立清单行
- 流属性/单位：Energy / kWh（经记录的换算后）
- 数量规则：按能源载体计量或与发票核对的纳入操作净能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-bat-slaughterhouses-2023`; `ifc-poultry-processing-ehs-2007`

###### 饮用级工艺和卫生用水（`process_water`）

记录浸烫、胴体清洗、冷却、清洁、卫生及纳入处理操作使用的供水。非接触冷却水须分开。

- 选定流：与地理范围适配的饮用水或工艺水产品流
- 流属性/单位：Volume / m3
- 数量规则：计量工艺及卫生供水减去单独计量的非工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_records`
- 来源：`ifc-poultry-processing-ehs-2007`; `ec-bat-slaughterhouses-2023`
- 数量范围：已发布的跨设施用水筛选范围
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：5.07
  - 上限：67.4
  - 单位：m3
  - 基准：来源基准下每 1,000 kg 屠宰动物；只有记录从 PCR 参考产品基准的换算后方可比较
  - 基准类型：过程产出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ifc-poultry-processing-ehs-2007`

###### 清洁与消毒剂（`cleaning_agents`）

记录纳入区域所用每种实质不同的清洁或消毒产品；活性成分浓度和稀释水必须保持可追溯。

- 选定流：产品特定清洁剂或消毒剂流
- 流属性/单位：Mass / kg product，并在相关时记录 kg active ingredient
- 数量规则：领用量减退库量，并与清洁记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables_records`
- 来源：`ifc-poultry-processing-ehs-2007`; `ec-bat-slaughterhouses-2023`

###### 初级包装材料（`primary_packaging`）

仅当申报产品在工厂门口前包装时，包装才跨入前景边界。对薄膜、托盘、吸水垫、标签、纸箱和可重复使用容器损耗按重要性分别记录。

- 选定流：材料特定初级包装产品流
- 流属性/单位：Mass / kg
- 数量规则：按材料记录合格产品包装领用量及可归属包装废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxc-58-2005`
- 数量范围：可替换的临时包装筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：kg packaging
  - 基准：每 1,000 kg 参考产品净质量；零表示无包装散装产品，上限仅为宽泛编写筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 制冷剂补充量（`refrigerant_makeup`）

记录服务于纳入路线的制冷系统所添加制冷剂。共享系统按有记录的计量、工程负荷或运行小时证据分配。

- 选定流：制冷剂特定产品流
- 流属性/单位：Mass / kg
- 数量规则：可归属于纳入冷却和冷藏暂存的年度或生产期实测补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-bat-slaughterhouses-2023`

##### 废物流

本 PCR 不规定废物投入。若厂内处理操作接收本产品系统之外的废物，应单独记录该废物投入并披露分配边界。

##### 基本流

仅当设施直接从环境取水时，将取水记录为基本流投入。不得与已由供水产品流表示的用水重复。

#### 输出

##### 产品流

###### 鲜或冷藏鸡肉参考产品（`reference_chicken_meat`）

这是在工厂门口完成检验、冷却、申报的可选加工和沥水后的合格参考产出。

- 选定流：Meat of chickens, fresh or chilled `562d85c5-f2c0-4a72-b866-5b3587bf4f29`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格产品净质量归一化为恰好 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_output_records`
- 来源：`codex-cxc-58-2005`; `ifc-poultry-processing-ehs-2007`

###### 食用杂碎共产品（`edible_offal_coproducts`）

食用器官及其他食用杂碎不属于参考产品身份，须与鸡肉分开记录；适用时区分冷藏、冷冻和其他状态。

- 选定流：与物种和状态适配的食用鸡杂碎产品流
- 流属性/单位：Mass / kg
- 数量规则：按产品和处置记录实测可售食用杂碎
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_stream_records`
- 来源：`unsd-cpc-v3-21121`; `codex-cxc-58-2005`

###### 其他可售屠宰共产品（`other_coproducts`）

仅当血液、脚、头、羽毛、脂肪、皮和其他物料符合适用产品定义且有记录的用途或市场去向时，才作为独立产品产出记录。

- 选定流：物料和去向特定共产品流
- 流属性/单位：Mass / kg
- 数量规则：按共产品类型和处置记录实测发运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_stream_records`
- 来源：`ifc-poultry-processing-ehs-2007`

##### 废物流

###### 判废及不可食用有机物（`inedible_organic_waste`）

按风险类别和去向记录到厂死亡鸡、判废胴体或部位、肠内容物、固体和其他不可食用物料。不得与可售共产品合并。

- 选定流：风险类别和处理方式特定的禽类加工废物流
- 流属性/单位：Mass / kg
- 数量规则：送往各厂内或厂外处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_stream_records`
- 来源：`ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005`

###### 工艺废水（`process_wastewater`）

记录离开纳入操作或厂内处理边界的工艺废水。单独排放的非接触冷却水和雨水须分开。

- 选定流：与去向和处理状态适配的禽类加工废水流
- 流属性/单位：Volume / m3
- 数量规则：按处理路线计量废水排放量，并与场址水平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_records`
- 来源：`ec-bat-slaughterhouses-2023`; `ifc-poultry-processing-ehs-2007`
- 数量范围：鸡屠宰场 BAT 相关废水排放筛选范围
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：1.45
  - 上限：6.30
  - 单位：m3
  - 基准：来源基准下每 1,000 kg 冷鸡胴体；只有记录从 PCR 参考产品基准的换算后方可比较
  - 基准类型：过程产出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ec-bat-slaughterhouses-2023`

##### 基本流

###### 制冷剂直接释放（`refrigerant_emissions`）

记录服务于纳入冷却和冷藏的系统直接排入空气的制冷剂。没有有记录的库存平衡时，不得把补充制冷剂同时作为投入和排放。

- 选定流：制冷剂特定的空气排放流
- 流属性/单位：Mass / kg
- 数量规则：可归属于纳入路线的实测泄漏或充注平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-bat-slaughterhouses-2023`

###### 厂内直接燃烧排放（`onsite_combustion_emissions`）

逐项记录纳入厂内燃烧的实测直接排放。若采用计算而非测量，产出数据集必须注明燃料记录、因子来源、氧化约定和污染物特定公式。

- 选定流：污染物和环境区室特定基本流
- 流属性/单位：Mass / kg pollutant
- 数量规则：场址排放测量，或基于实测燃料用量并单独引用的计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`ec-bat-slaughterhouses-2023`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_subdivision` | 单独计量的操作与产出 | 优先通过过程细分避免分配；若记录支持，将投入、废物和排放直接归属于冷却、切割、包装、废水处理或副产品操作。 | `eu-pef-2021-2279` |
| `allocation_rule_system_expansion` | 多功能产出系统 | 若申报研究目标允许系统扩展且可证明有代表性的替代功能，应一致建模并披露扩展系统。不得仅因残余物可能有用途就给予避免产品抵扣。 | `eu-pef-2021-2279` |
| `allocation_rule_physical` | 细分用尽后的共享屠宰负荷 | 不采用系统扩展时，优先使用可量化且能反映共享负荷成因的相关物理关系。记录所选关系、纳入产出流、测量期间及其代表过程的理由。 | `eu-pef-2021-2279` |
| `allocation_rule_other_relationship` | 无可辩护物理关系的共享负荷 | 若无可辩护的物理关系，使用另一项有记录的关系，例如共产品分离点的场址特定经济价值。报告价格、币种、期间、零价值流及对重大价格变化的敏感性。 | `eu-pef-2021-2279` |
| `allocation_rule_waste_status` | 判废或不可食用产出 | 除非法律状态、质量、购买者或使用者和实际去向证明其产品功能，否则将产出作为废物。废物处理负荷由产生废物的系统承担，除非所选方法和研究目标支持其他处理。 | `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005` |
| `allocation_rule_closure` | 所有参考产品和共产品产出 | 分配模型须按适用情况包括参考鸡肉、食用杂碎、血液、脚、羽毛、脂肪、皮、其他市场流和废物状态；被分摊负荷的分配份额必须在舍入容差内合计为 1。 | `ec-bat-slaughterhouses-2023`; `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_bird_receipt` | `slaughter_chill_gate` | 合格活鸡 | 接收秤、只数、供应商、死亡和检验记录 | lot_id; supplier_id; farm_origin; arrival_time; gross_vehicle_mass; tare_mass; net_live_mass; bird_count; dead_on_arrival_count; rejected_mass; accepted_mass; inspection_disposition | 与接收及检验记录链接的经校准地磅或台秤 | kg; item | 每个进厂批次 | 报告期全部批次 | 向申报产品供料的全部供应商和接收线 | 汇总合格活体质量和只数；判退与到厂死亡流分开 | 校准证书；批次日志；检验记录；与屠宰计划核对 |
| `cp_product_output_records` | `slaughter_chill_gate` | 参考鸡肉 | 产品秤、温度、沥水、分级和发运记录 | lot_id; product_form; bone_status; skin_status; chilling_method; pre_chill_mass; post_drain_mass; packaging_tare; net_product_mass; product_temperature; temperature_limit; disposition | 按批次抽样计划使用经校准产品秤和温度设备 | kg; °C | 每个生产和发运批次 | 报告期全部合格生产 | 范围内全部生产线、冷却器、切割间和发运点 | 扣皮后汇总合格净质量；判退、返工、冷冻和降级产品分开 | 秤和温度计校准；批次追溯；温度日志；检验与放行记录 |
| `cp_energy_records` | `slaughter_chill_gate` | 电力和工艺热 | 分表、总表、燃料发票、蒸汽表和运行日志 | meter_id; opening_reading; closing_reading; electricity_kWh; fuel_quantity; fuel_unit; heating_value_basis; steam_or_heat_kWh; included_area; allocation_driver; downtime | 优先直接分表；将分配记录与场址总量和发票核对 | kWh 加燃料原始单位 | 每日或每班；每月发票核对 | 代表性连续期间，通常至少 12 个月或完整季节性生产期 | 纳入的全部屠宰、冷却、冷藏暂存、可选加工和厂内处理设备 | 按载体汇总并换算 kWh；共享系统用有记录的驱动因子分配；与场址总量核对 | 仪表校准；发票；换算因子；运行小时和制冷负荷记录 |
| `cp_water_wastewater_records` | `slaughter_chill_gate` | 供水和废水 | 水表、废水流量计、生产日志和水平衡记录 | supply_meter_readings; non_contact_cooling_water; stormwater; process_water; wastewater_volume; discharge_route; pre_treatment_status; product_mass; carcass_basis_mass | 供水和排放点直接计量；仅对有记录缺口使用工程平衡 | m3 | 每日或每班；每月核对 | 与生产和能源记录同期 | 纳入的全部用水和排放点 | 分别汇总工艺水和废水；排除单独排放的冷却水和雨水；核对未解释差额 | 仪表校准；水流图；仪表图；排放和处理记录 |
| `cp_consumables_records` | `slaughter_chill_gate` | 清洁和消毒剂 | 库存领用、采购、浓度和清洁计划记录 | product_name; active_ingredient; concentration; issued_mass; returned_mass; dilution_ratio; application_area; lot_id | 与卫生记录链接的库存核对 | kg product; kg active ingredient | 每次领用；每月核对 | 与生产相同报告期 | 全部纳入清洁卫生区域 | 按产品和活性成分汇总净领用；排除无关设施用途 | 发票；安全数据表；库存台账；卫生日志 |
| `cp_packaging_records` | `slaughter_chill_gate` | 初级包装 | 物料清单、领用、废料和包装产出记录 | material; item_mass; items_issued; returned_items; scrap_mass; reusable_loss; packed_product_mass | 单件质量核验加库存核对 | kg | 每次包装运行；每月核对 | 报告期全部包装批次 | 全部申报初级包装线 | 按材料汇总；包括可归属废料；除实测损失外不计周转资产 | 供应商规范；抽样称重；库存台账；废料记录 |
| `cp_output_stream_records` | `slaughter_chill_gate` | 食用共产品、可售副产品和有机废物 | 专用秤、容器、发运、检验和处理记录 | stream_id; material_name; edible_status; risk_class; measured_mass; destination; product_or_waste_status; buyer_or_treatment_provider; lot_id | 称量各流，或采用经核验的容器皮重和毛重 | kg | 每个容器、批次或发运 | 报告期全部产出流 | 全部去内脏、切割、分拣、储存和副产品区域 | 按物料、状态和去向汇总；禁止产品与废物之间无解释冲抵 | 秤校准；检验处置；发运单；处理收据；购买者记录 |
| `cp_refrigerant_records` | `slaughter_chill_gate` | 制冷剂补充与直接损失 | 制冷维护、充注、回收和泄漏记录 | refrigerant_identity; opening_charge; additions; recoveries; closing_charge; leak_event; system_id; served_areas; operating_hours | 维护记录和充注平衡；可用时直接测量泄漏 | kg | 每次维护或泄漏事件；年度核对 | 完整报告年或含年化披露的申报生产期 | 服务于纳入操作的全部制冷系统 | 补充减回收和有记录库存变化；共享系统按有记录工程驱动因子分配 | 技师报告；采购与回收记录；检漏记录；设备台账 |
| `cp_direct_emission_records` | `slaughter_chill_gate` | 厂内燃烧排放 | 烟道测试、连续监测、燃料和运行记录 | source_id; pollutant; measured_concentration; gas_flow; operating_time; emitted_mass; fuel_quantity; factor_reference | 优先直接测量；计算值须单独引用污染物因子 | kg pollutant; source units | 按许可和运行计划 | 代表性正常和重大异常运行 | 全部纳入厂内燃烧源 | 按污染物和区室汇总实测质量；计算结果分开 | 认可测试报告；监测 QA；燃料发票；因子来源和公式 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单流 | 归一化数量 = 报告期流数量 / 报告期合格参考产品净质量 × 1,000 | 采集流数量；产品净质量 | 每 1,000 kg 参考产品的流数量 | `mass-balance-identity` |
| `calc_live_to_product_yield` | 活鸡和参考产品 | 得率 = 合格参考产品净质量 / 合格活体净质量；按产品形态和路线分别报告 | 合格活体质量；产品净质量 | 每 kg 合格活体质量对应的参考产品 kg | `ifc-poultry-processing-ehs-2007` |
| `calc_energy_intensity` | 电力和工艺热 | 按申报基准将各载体换算为 kWh，仅在换算后合计并除以产品净质量；可用时另算与来源兼容的冷胴体基准用于 BAT 比较 | 电力；燃料；蒸汽或热；热值；产品净质量；冷胴体质量 | 每 1,000 kg 参考产品 kWh；可用时每吨冷胴体 kWh | `ec-bat-slaughterhouses-2023` |
| `calc_water_balance` | 水和废水 | 在申报不确定度内，工艺供水 = 工艺废水 + 产品或副产品滞留水 + 蒸发 + 外送水分 + 有记录损失 | 供水；废水；吸水；产出；蒸发估计 | 经核对水平衡及未解释差额 | `ec-bat-slaughterhouses-2023`; `ifc-poultry-processing-ehs-2007` |
| `calc_chilling_uptake` | 水冷产品 | 吸水比例 =（沥水后产品质量 − 可比冷却前产品质量）/ 可比冷却前产品质量 | 配对冷却前和沥水后质量 | 每 kg 冷却前产品的滞留水 kg | `ifc-poultry-processing-ehs-2007` |
| `calc_refrigerant_loss` | 制冷系统 | 制冷剂损失 = 期初充注 + 补充 − 回收 − 期末充注，并按有记录转移调整 | 充注和维护记录 | 按制冷剂身份记录的排放 kg | `ec-bat-slaughterhouses-2023` |
| `calc_mass_balance` | 屠宰路线 | 比较合格活体质量及其他物料投入与参考鸡肉、共产品、废物、滞留水变化和有记录库存变化；解释残差而非强制闭合 | 全部物料投入产出；库存变化；水分或吸水 | 质量平衡残差及相对闭合度 | `mass-balance-identity`; `ifc-poultry-processing-ehs-2007` |
| `calc_allocation_fractions` | 共享负荷 | 各共产品分配份额 = 该共产品所选分配数量 / 所有产品产出的所选分配数量之和；份额在舍入容差内合计为 1 | 直接归属；产品质量或其他物理驱动；或有记录市场价值 | 各产出的分配份额和分配负荷 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和进厂鸡只 | 保留从供应商和合格鸡只，经检验、冷却、产品形态、温度放行到工厂门口发运的批次级链接。 | 接收、检验、生产、分级、温度和发运记录 |
| `dq_measurement_control` | 质量、温度、水、能源和流量记录 | 使用适合测量范围且经校准或核验的设备；保留校准状态、读数频率、缺失数据处理和核对结果。 | 校准证书；仪表图；设备日志；核对报告 |
| `dq_temporal_representativeness` | 前景报告期 | 季节产量或制冷负荷显著时，至少使用连续 12 个月；较短完整生产期须说明季节、产品组合和局限。 | 报告期声明；产量和运行日历 |
| `dq_completeness` | 过程清单 | 覆盖全部纳入班次、生产线、产品形态、可选操作、共产品、废物路线和重大异常事件。量化数据覆盖率并披露排除，不得默认为零。 | 完整性矩阵；生产核对；事件和停机日志 |
| `dq_stream_status` | 共产品和废物 | 分别证实各产出流的可食用、可销售、废物、风险类别和去向状态。 | 检验处置；法律分类；合同；发运单；处理收据 |
| `dq_source_basis` | 外部 QA 范围 | 保留原始来源分母；只有记录活禽、冷胴体和参考产品净质量基准间的换算后方可比较前景值。 | 计算表；来源引用；质量和得率记录 |
| `dq_geography_technology` | 背景数据集 | 电力电压和地理、燃料与供热技术、供水、包装材料、制冷剂身份及处理路线须与前景工厂匹配。 | 背景数据集元数据和选择理由 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_identity` | 产品类别 | 若参考产出为活鸡、冷冻鸡肉、食用杂碎、炼制脂肪或加工/保藏鸡肉，或申报产品并非鲜或冷藏可食用鸡肉，则失败。 | `unsd-cpc-v3-21121` |
| `validation_rule_reference_flow` | 功能单位和参考对象 | 要求恰好 1 kg 参考产品净质量，并链接产品流 `562d85c5-f2c0-4a72-b866-5b3587bf4f29`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 | `mass-balance-identity` |
| `validation_rule_qualifiers` | 数据集元数据 | 缺少任何必需限定项即判完整性失败，包括产品形态、骨皮状态、冷却方式、门口温度、净质量和沥水约定、包装状态、地理、期间或纳入的可选操作。 | `codex-cxc-58-2005`; `ifc-poultry-processing-ehs-2007` |
| `validation_rule_boundary` | 前景过程图 | 要求完整申报屠宰冷却路线，并为活鸡及其他供应投入明确链接上游数据集。拒绝在活鸡数据集与屠宰前景中重复计算养殖或饲料负荷。 | `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005` |
| `validation_rule_temperature` | 冷藏产品放行 | 要求产品温度实测证据及适用限值。超过默认 IFC 4 °C 指导值时须标记，除非数据集记录主管机关或客户规范及处置。 | `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005` |
| `validation_rule_streams` | 产品、共产品、废物和废水 | 要求分别记录参考鸡肉、食用杂碎、其他市场副产品、判废或不可食用物料和废水的数量与去向；拒绝无解释冲抵或把固体计入废水。 | `ifc-poultry-processing-ehs-2007`; `ec-bat-slaughterhouses-2023` |
| `validation_rule_allocation` | 多功能负荷 | 要求先直接归属再分配，记录所选分配关系的理由、完整产出集合，并使分配份额在 ±0.001 内合计为 1。 | `eu-pef-2021-2279` |
| `validation_rule_mass_balance` | 物料清单 | 要求记录质量平衡残差。相对残差超过合格活体质量 5% 时须调查；不得将残差强行归给参考产品或废水以实现闭合。 | `mass-balance-identity`; `ifc-poultry-processing-ehs-2007` |
| `validation_rule_energy_qa` | 净能源总量 | 可得到与来源兼容的冷胴体基准时，与欧盟 BAT 筛选区间每吨冷鸡胴体 170–490 kWh 比较。离群值触发评审而非自动替换，并解释边界或技术差异。 | `ec-bat-slaughterhouses-2023` |
| `validation_rule_wastewater_qa` | 废水排放 | 可得到与来源兼容的冷胴体基准时，与每吨冷鸡胴体 1.45–6.30 m3 比较。离群值触发评审，并保持单独排放冷却水和雨水的区别。 | `ec-bat-slaughterhouses-2023` |
| `validation_rule_evidence` | 前景数据包 | 要求来源记录、采集协议、计算输入、校准或核对证据，并明确披露缺失或估计字段。本 PCR 中的推理估计范围为可替换编写辅助值，不得覆盖采集的前景值。 | `ec-bat-slaughterhouses-2023` |

## 10. 已发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 经评审后可作为 `secondary_dataset` 或 `background_dataset` 发布的前景生产数据集 |
| downstream_use | 构建鸡肉产品系统、食品产品足迹、供应链 LCA、过程数据集和生命周期模型，且需要申报工厂门口鲜或冷藏鸡肉 |
| allowed_use | 用于申报的鸡肉形态、地理、技术、冷却路线、包装状态、报告期和分配方法；仅在记录代表性检查后调整 |
| excluded_use | 冷冻或进一步加工鸡肉；活鸡养殖；以食用杂碎为参考产品；零售、烹饪、消费或包装废弃；未统一产品形态或分配方法的比较声明 |
| required_metadata | canonical PCR id；产品与流 UUID；所有参考流限定项；工厂地理和技术；门口和边界；报告期；数据覆盖；产品温度规范；可选操作；上游数据集；共产品与废物去向；分配方法；source ids；评审状态 |
| required_quality_disclosure | 原始数据占比；仪表与秤覆盖；校准状态；缺失数据处理；得率和质量平衡残差；水平衡；能源与废水来源基准比较；制冷剂方法；分配敏感性；时间、地理和技术局限；全部可替换临时估计 |
| update_trigger | 产品形态、冷却或包装技术、工厂边界、供应商或地理、报告期、产量、能源或供水系统、制冷剂、处理路线、法定温度或卫生要求、共产品市场、分配关系、天工身份引用或更强来源证据发生重大变化 |

## 11. 数据来源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-v3-21121` | official_guidance | 联合国统计司，*Central Product Classification Version 3.0 Explanatory Notes*，子类 21121，2025，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-10） | 产品身份；纳入鲜或冷藏鸡肉；排除冷冻鸡肉和食用鸡杂碎 |
| `codex-cxc-58-2005` | standard | FAO/WHO 食品法典委员会，*Code of Hygienic Practice for Meat*，CXC 58-2005，https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf（检索于 2026-08-10） | 宰后检验；卫生过程控制；快速冷却；温度监测；冷链连续；分流和处理规则 |
| `ifc-poultry-processing-ehs-2007` | official_guidance | 国际金融公司、世界银行集团，*Environmental, Health, and Safety Guidelines for Poultry Processing*，2007-04-30，https://www.ifc.org/content/dam/ifc/doc/2000/2007-poultry-processing-ehs-guidelines-en.pdf（检索于 2026-08-10） | 禽类加工过程图；4 °C 冷却指导；水、能源、废水、副产品和废物清单要求；跨设施用水筛选范围 |
| `ec-bat-slaughterhouses-2023` | official_guidance | 欧盟委员会，Commission Implementing Decision (EU) 2023/2749 establishing BAT conclusions for slaughterhouses，2023-12-11，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023D2749（检索于 2026-08-10） | 投入产出清单与监测；制冷和处理边界；鸡屠宰总能源及废水排放 QA 范围 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，附件 I 第 4.5 节，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-10） | 多功能性一般层级：细分或系统扩展、物理分配、再采用另一有记录关系 |
| `mass-balance-identity` | method_factor | 质量守恒及申报参考流归一化恒等式；无外部数值因子 | 参考归一化、物料平衡及分配闭合计算 |
