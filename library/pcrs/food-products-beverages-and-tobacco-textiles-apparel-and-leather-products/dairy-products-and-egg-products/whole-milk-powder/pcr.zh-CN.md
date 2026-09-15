---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whole-milk-powder
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 全脂乳粉

## 1. 范围与适用性

本 PCR 适用于通过从乳或稀奶油中去除水分制得、且乳脂含量处于全脂乳粉组成范围内的全脂乳粉。前景产品为乳品工厂门处的成品粉，散装或已包装状态应明确声明。常规型、附聚型和速溶型全脂乳粉均可纳入，但必须报告相关热处理、附聚、卵磷脂化和包装操作。

默认生产路线从农场门可获得的生全脂乳开始，包括运往乳品厂、接收和储存、组成标准化、巴氏杀菌或其他已声明热处理、蒸发、使用时的均质、喷雾干燥或其他已声明干燥、粉体回收和后处理、清洗以及包装。上游原奶生产由独立的供应商或区域数据集表示。乳品工厂门后的配送、零售、复原、消费和包装废弃阶段不属于默认前景边界。

本 PCR 不包括脱脂乳粉、部分脱脂乳粉、稀奶油粉、乳清粉、以非乳脂替代乳脂的植脂粉、婴幼儿配方食品、配制营养粉，以及除加工助剂或已声明速溶化配料外含有实质性非乳配料的粉体混合物。滚筒干燥全脂乳粉仅在声明干燥路线和路线特定质量影响时方可采用本 PCR；喷雾干燥为代表性路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whole-milk-powder |
| classification_refs | CPC 3.0：22211，全脂乳粉，等义范围候选，尚待 accepted mapping 治理 |
| covered_products | 乳脂质量分数不低于 26% 且低于 42% 的全脂乳粉，包括供直接食用或进一步加工的常规型、速溶型或附聚型产品 |
| excluded_products | 稀奶油粉；部分脱脂乳粉；脱脂乳粉；乳清粉；酪乳粉；非乳脂植脂粉；婴幼儿配方食品；配制营养粉；产品身份不属于全脂乳粉的乳粉混合物 |
| representative_product | 由标准化并经巴氏杀菌的全脂乳制得的喷雾干燥全脂乳粉 |
| production_route | 原奶接收与标准化；热处理；蒸发；可选均质；喷雾干燥；粉体回收或可选附聚与卵磷脂化；包装 |
| market_state | 乳品工厂门处的成品干粉；必须声明散装或已包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在乳品工厂门处提供供直接食用或进一步食品加工的全脂乳粉 |
| How much | 1 kg 净重全脂乳粉 |
| How well | 符合已声明市场规格；作为 Codex 产品身份最低要求，乳脂质量分数不低于 26% 且低于 42%，水分不高于 5%，乳固体非脂肪中乳蛋白不低于 34% |
| How long or cycle | 工厂门处一个生产批次；不指定使用持续时间；已声明保质期和储存条件属于产品元数据 |
| reference_flow_link | 最终质量放行后恰好 1 kg 天工 Whole milk powder 产品流净输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品 |
| 参考产品流 | 全脂奶粉 `f268b0b6-9cf3-4bba-aaf7-7b57e4f3fac0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 动物种类和原奶产地；乳脂分数；水分或湿度分数；乳固体非脂肪中乳蛋白；常规型或附聚/速溶型；声称时的热处理等级或时间—温度记录；干燥技术；包装状态及包装纳入/排除；生产地域和时期；分配方法；工厂门放行规格 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 已放行全脂乳粉 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 扣除包装皮重后使用产品净质量。放行乳粉中所含水分仍计入参考质量。 |
| `composition_identity` | 已放行全脂乳粉 | 质量分数 | % m/m | 按适用产品规格和检测方法测量并报告乳脂、水分和乳固体非脂肪中乳蛋白。产品必须满足 Codex CXS 207-1999 的全脂乳粉身份限值。 |
| `energy_reporting` | 电力和热能 | 能量 | 电力用 kWh；燃料、蒸汽和外购热用 MJ | 保留计量的能源载体数量和换算因子。不得把电力和热能合并为一个未限定的能量值。 |
| `water_reporting` | 工艺水、清洗水、冷凝水和废水 | 体积或质量 | m3 或 kg | 分别记录取水、回收蒸发冷凝水、回用水和废水。质量与体积换算时声明密度或换算假设。 |
| `mass_balance_basis` | 乳固体、产品、回收细粉、不合格品和损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 干物质和 kg 湿质量 | 一致报告湿质量和干物质，使同一批次期间保留乳固体、移除水分、回收细粉、不合格乳粉和未解释损失可核算。 |
| `packaging_basis` | 包装材料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 材料/kg 净产品 | 分别报告各包装材料，并声明包装是否纳入工厂门产品系统。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生全脂乳在农场门可获得，并有实测质量、动物种类、产地、收集时期、脂肪、蛋白质及总固体或水分含量；用于组成调整的任何稀奶油、脱脂乳、截留液、渗透液或乳糖均须单独识别 |
| starting_condition_role | 前景乳品加工系统的上游产品投入 |
| product_classification_scope | 仅限全脂乳粉；分类参考仅描述映射语境，不把 PCR 范围扩展至其他乳、乳清、稀奶油或配制粉 |
| recursive_input_rule | 作为投入购入的全脂乳粉必须由单独来源的上游全脂乳粉数据集表示，并披露其用途和质量；不得在同一前景系统内递归重建其生产 |
| upstream_dataset_requirement | 对原奶、配料、包装、电力、燃料、热、水供应、运输、废物处理和废水处理使用地域、时间、技术和动物种类具有代表性的数据集 |
| disclosure | 声明起始地域和时间、原奶组成和质量、至乳品厂运输、纳入单元过程、包装状态、分配选择、回收细粉和冷凝水处理、排除项及对默认工厂门边界的任何改变 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 默认前景系统 | 纳入原奶从农场门至乳品厂的运输、接收和储存、标准化、热处理、浓缩、干燥、粉体回收和后处理、随产品供应时的包装、现场公用工程、清洗、废水、直接空气排放、制冷剂泄漏及至乳品工厂门的废物处理。 | `idf-bulletin-445-2010`; `fao-dairy-industry` |
| `boundary_rule_2` | 上游投入 | 用上游数据集表示原奶生产以及购入配料、运行材料、包装、电力、燃料、热和水的生产，不得把这些投入视为无负担。 | `idf-bulletin-445-2010` |
| `boundary_rule_3` | 下游阶段 | 默认前景数据包排除工厂门后的配送、零售、储存、复原、使用和废弃；只有在明确扩展的生命周期模型中方可纳入，并须披露该扩展。 | `idf-bulletin-445-2010` |
| `boundary_rule_4` | 完整性 | 不得仅因缺少独立计量而省略已知物料、能量、水、制冷剂、废水、废物或直接排放流。应透明估算或界定其范围，并披露有理由的排除及预期显著性。 | `idf-bulletin-445-2010` |
| `boundary_rule_5` | 产品身份 | 植脂粉、脱脂或部分脱脂乳粉、稀奶油粉、乳清粉和配制营养粉不属于本产品系统，除非作为独立共产品或上下游产品表示。 | `codex-cxs-207-1999` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_standardisation` | 原奶接收、储存和组成标准化 | required | 始终纳入；使用分离或添加允许的乳成分时纳入该操作 | 确立验收原奶数量、质量和目标全脂乳组成 | 送往热处理的标准化乳 kg |
| `heat_treatment_evaporation` | 热处理和蒸发 | required | 始终纳入；记录实际时间—温度和蒸发器配置 | 产品安全或功能性处理及高效去除大部分水分 | 送往干燥的浓缩乳 kg |
| `homogenisation_spray_drying` | 均质和喷雾干燥 | required | 未使用均质时该步骤为条件项；干燥始终必需，非喷雾路线必须声明 | 粉体形成；天工喷雾干燥过程身份 `311f94da-b94d-402e-ae4b-5e0b2389e07d` 仅作身份参考 | 离开干燥器和流化床系统的粉体 kg |
| `powder_finishing_packaging` | 粉体后处理、可选速溶化和包装 | required | 仅在实施时纳入附聚、卵磷脂化、气体置换和零售包装 | 最终质量放行和工厂门产品准备 | 净重已放行全脂乳粉 kg |
| `cleaning_wastewater_management` | 清洗和现场废水管理 | required | 将共享清洗和处理记录分配至所覆盖生产期间 | 记录水、清洗化学品、回收冷凝水、废水、污泥和处理去向 | 分配至 1 kg 净产品的生产期记录 |

### 过程：原奶接收、储存和组成标准化（`milk_reception_standardisation`）

#### 输入

##### 产品流

###### 农场门生全脂乳（`raw_whole_milk`）

原奶作为主要乳固体和乳脂投入进入前景系统。应选择与动物种类、产地和市场状态匹配的产品流。

- 选定流：与已声明动物种类和产地匹配的数据集特定生全脂乳产品流
- 流属性/单位：Mass / kg
- 数量规则：生产批次的实测验收原奶质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_milk_receipt`
- 来源：`idf-bulletin-445-2010`

###### 用于组成调整的乳成分（`milk_constituent_adjustments`）

为达到已声明组成而添加或移出的稀奶油、脱脂乳、乳截留液、乳渗透液或乳糖应分别记录。本 PCR 不允许用非乳脂进行调整。

- 选定流：与实际调整材料匹配的数据集特定乳成分产品流
- 流属性/单位：Mass / kg
- 数量规则：标准化平衡中添加或移出的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_standardisation_balance`
- 来源：`codex-cxs-207-1999`

##### 废物流

###### 拒收或洒漏原奶（`rejected_raw_milk`）

拒收批次、接收洒漏和送往废物处理的乳作为废物记录；退回供应商的物料另行披露。

- 选定流：数据集特定废乳流和处理路线
- 流属性/单位：Mass / kg
- 数量规则：实测或由质量平衡推导的拒收及洒漏乳
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_losses`
- 来源：`fao-dairy-industry`

##### 基本流

除非直接从环境取水，本过程不预期有基本流投入；此类取水应使用与地点匹配的基本流记录。

#### 输出

##### 产品流

###### 标准化全脂乳（`standardised_whole_milk`）

该输出携带实测脂肪、蛋白质和总固体组成，用于下游热量和质量平衡。

- 选定流：内部标准化全脂乳中间流
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量及实验室组成记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送往热处理的标准化乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_standardisation_balance`
- 来源：`codex-cxs-207-1999`

##### 废物流

离开产品系统且不作为共产品销售的移出乳组分，按其实际废物处理路线记录。

##### 基本流

不预期有常规基本流输出；接收冷却产生的任何实测直接制冷剂泄漏应另行记录。

### 过程：热处理和蒸发（`heat_treatment_evaporation`）

#### 输入

##### 产品流

###### 标准化全脂乳进料（`standardised_milk_feed`）

标准化乳进入已声明热处理和蒸发流程。

- 选定流：内部标准化全脂乳中间流
- 流属性/单位：Mass / kg
- 数量规则：来自标准化工序的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩乳输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_evaporation_mass_balance`
- 来源：`tetra-pak-milk-powder-handbook`

###### 热处理和蒸发用热能（`evaporation_thermal_energy`）

按能源载体记录外购热、蒸汽或燃料。现场产汽时记录燃料和锅炉投入，避免重复计算外购热。

- 选定流：数据集特定燃料、蒸汽或外购热产品流
- 流属性/单位：Energy / MJ；蒸汽还可用 kg 记录并进行焓值计算
- 数量规则：分配至批次的计量载体数量，并用有记录的净能量或焓值因子换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩乳输出和每 1 kg 净重已放行全脂乳粉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`idf-bulletin-445-2010`

###### 泵、分离和蒸发用电（`evaporation_electricity`）

记录分项电表用电；没有分项计量时，只有采用运行时间和额定负载并与完整电表平衡核对后才可分配。

- 选定流：地域和时期特定电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：计量或透明分配的耗电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩乳输出和每 1 kg 净重已放行全脂乳粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`idf-bulletin-445-2010`

##### 废物流

###### 蒸发器清洗废物和产品损失（`evaporator_product_loss`）

开机、停机、除垢或清洗期间排出的乳固体按实际回收或处理路线记录。

- 选定流：数据集特定乳品损失或废水流
- 流属性/单位：Mass / kg
- 数量规则：实测排放或分配至本过程的干物质平衡差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_losses`
- 来源：`fao-dairy-industry`

##### 基本流

除非对现场取水或直接燃料开采建模，否则不预期有基本流投入；公用工程供应的普通水和燃料属于产品流。

#### 输出

##### 产品流

###### 浓缩全脂乳（`concentrated_whole_milk`）

在干燥器进料边界测量浓缩乳质量和总固体分数。

- 选定流：内部浓缩全脂乳中间流
- 流属性/单位：Mass / kg
- 数量规则：实测浓缩乳质量和总固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送往干燥的浓缩乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_evaporation_mass_balance`
- 来源：`tetra-pak-milk-powder-handbook`

###### 回收蒸发冷凝水（`evaporator_condensate`）

冷凝水按实际质量和去向分别作为内部回用流、排放水或外售产品跟踪。

- 选定流：内部回收水或数据集特定废水/产品水流
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按去向实测冷凝水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩乳输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`idf-bulletin-445-2010`

##### 废物流

不满足回用或排放要求的冷凝水转入废水管理，不计作回收水信用。

##### 基本流

###### 直接燃烧和制冷剂排放（`evaporation_direct_emissions`）

记录现场燃烧和制冷剂泄漏的实测或由来源因子计算的排放，不得与外购能源数据集中已包含的排放重复。

- 选定流：与实测环境区室匹配的污染物特定基本流
- 流属性/单位：Mass / kg
- 数量规则：连续测量、定期检测、制冷剂库存平衡，或有记录因子乘以采集的燃料活动量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`idf-bulletin-445-2010`

### 过程：均质和喷雾干燥（`homogenisation_spray_drying`）

#### 输入

##### 产品流

###### 浓缩全脂乳进料（`dryer_concentrate_feed`）

干燥器进料包括浓缩乳及在干燥前添加的任何已声明允许强化或速溶化配料。

- 选定流：内部浓缩全脂乳中间流
- 流属性/单位：Mass / kg
- 数量规则：实测干燥器进料质量和总固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开干燥和流化床阶段的粉体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dryer_mass_balance`
- 来源：`tetra-pak-milk-powder-handbook`

###### 干燥空气用热能（`dryer_thermal_energy`）

按能源载体和实际计量边界记录用于加热干燥空气和流化床的燃料、蒸汽或外购热。

- 选定流：数据集特定燃料、蒸汽或外购热产品流
- 流属性/单位：Energy / MJ
- 数量规则：分配至批次干燥器运行的计量或计算能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开干燥的粉体和每 1 kg 净重已放行全脂乳粉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`tetra-pak-milk-powder-handbook`; `idf-bulletin-445-2010`

###### 均质、雾化、风机和粉体输送用电（`dryer_electricity`）

记录使用时的均质机、进料泵、雾化器、风机、旋风分离器或过滤器、流化床、冷却和粉体输送的用电。

- 选定流：地域和时期特定电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：分项计量用电或由完整设备记录形成的有据分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开干燥的粉体和每 1 kg 净重已放行全脂乳粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`tetra-pak-milk-powder-handbook`; `idf-bulletin-445-2010`

##### 废物流

###### 不合格乳粉和未回收细粉（`dryer_powder_loss`）

区分内部循环细粉、作为低等级共产品销售的乳粉，以及送往动物饲料、返工、废水或处置的乳粉。

- 选定流：按实际路线选择数据集特定不合格乳粉或废物流
- 流属性/单位：Mass / kg
- 数量规则：实测收集和去向记录，并与干燥器质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dryer_mass_balance`
- 来源：`tetra-pak-milk-powder-handbook`

##### 基本流

除非研究明确清查大气资源流，否则不对干燥空气作为基本流投入进行定量；能源和直接排放仍为必需项。

#### 输出

##### 产品流

###### 干燥器全脂乳粉（`dryer_powder_output`）

粉体输出在最终包装前测量，并携带水分、脂肪、蛋白质、堆积密度和路线特定质量结果。

- 选定流：全脂奶粉 `f268b0b6-9cf3-4bba-aaf7-7b57e4f3fac0`
- 流属性/单位：Mass / kg
- 数量规则：离开干燥器和流化床系统的实测粉体质量；回收细粉只计一次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开干燥的粉体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dryer_mass_balance`
- 来源：`codex-cxs-207-1999`; `tetra-pak-milk-powder-handbook`

##### 废物流

未返回产品的收集粉尘在 `dryer_powder_loss` 下按实际处理或回收路线记录。

##### 基本流

###### 排放至空气的乳粉颗粒物（`dryer_particulate_air`）

将通过末端控制设备的颗粒物记录为基本流排放；旋风分离器或过滤器内部回收的乳粉不得作为排放。

- 选定流：与报告粒径和区室匹配的空气颗粒物基本流
- 流属性/单位：Mass / kg
- 数量规则：烟道测量或场址特定排放因子乘以干燥器产量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`tetra-pak-milk-powder-handbook`

### 过程：粉体后处理、可选速溶化和包装（`powder_finishing_packaging`）

#### 输入

##### 产品流

###### 干燥器粉体（`finishing_powder_feed`）

干燥器粉体进入最终混合、筛分、使用时的附聚或卵磷脂化、质量放行和包装。

- 选定流：全脂奶粉 `f268b0b6-9cf3-4bba-aaf7-7b57e4f3fac0`
- 流属性/单位：Mass / kg
- 数量规则：进入后处理的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净重已放行全脂乳粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_quality`
- 来源：`tetra-pak-milk-powder-handbook`

###### 速溶化和强化配料（`finishing_ingredients`）

分别记录卵磷脂、维生素、矿物质或其他已声明配料。使产品身份超出全脂乳粉的实质性添加需要采用其他 PCR。

- 选定流：配料特定产品流
- 流属性/单位：Mass / kg
- 数量规则：批次称量添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_ingredients`
- 来源：`tetra-pak-milk-powder-handbook`; `codex-cxs-207-1999`

###### 包装材料和包装气体（`packaging_materials`）

按材料和包装形式记录初级、次级和三级包装，以及用于气体置换的氮气或二氧化碳。

- 选定流：材料特定包装和气体产品流
- 流属性/单位：Mass / kg
- 数量规则：购入并领用包装平衡减去有记录的未用退回量，再除以净重已放行产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`idf-bulletin-445-2010`

###### 后处理和包装用电（`finishing_electricity`）

记录流化或附聚、冷却、输送、筛分、混合、压缩空气和包装用电。

- 选定流：地域和时期特定电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：计量或有记录的设备分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`idf-bulletin-445-2010`

##### 废物流

###### 包装废料和拒收成品粉（`finishing_waste`）

按去向分别记录包装废料、留待返工的产品和拒收乳粉。

- 选定流：材料特定包装废物或不合格乳粉流
- 流属性/单位：Mass / kg
- 数量规则：实测废物和返工去向记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_losses`
- 来源：`idf-bulletin-445-2010`

##### 基本流

不预期有常规基本流投入。

#### 输出

##### 产品流

###### 已放行全脂乳粉（`reference_whole_milk_powder`）

该流为定量参考。净质量和组成仅基于已放行批次；1 kg 产品质量不含包装皮重。

- 选定流：全脂奶粉 `f268b0b6-9cf3-4bba-aaf7-7b57e4f3fac0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：质量验收后恰好 1 kg 净重已放行产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：`cp_batch_output_quality`
- 来源：`codex-cxs-207-1999`; `idf-bulletin-445-2010`

##### 废物流

拒收批次不计入参考输出，并在 `finishing_waste` 下保留，直至返工、作为已声明共产品销售或作为废物处理。

##### 基本流

实测直接制冷剂或包装气体释放应予记录；不得重复计算购入气体的上游生产排放。

### 过程：清洗和现场废水管理（`cleaning_wastewater_management`）

#### 输入

##### 产品流

###### 清洗用新水和回收水（`cleaning_water`）

分别记录新水和合格回收冷凝水，使回用可见且不高估取水。

- 选定流：与水源匹配的供水产品流和内部回收水流
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 数量规则：按水源和用途计量并分配至覆盖生产期间的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`idf-bulletin-445-2010`; `fao-dairy-industry`

###### 清洗和消毒化学品（`cleaning_chemicals`）

按活性产品和浓度记录碱、酸、消毒剂和其他清洗剂。

- 选定流：化学品特定产品流
- 流属性/单位：Mass / kg
- 数量规则：实测领用量或经库存变化修正的采购平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`idf-bulletin-445-2010`; `fao-dairy-industry`

##### 废物流

除非废水从另一个已声明现场产品系统转入，否则不预期有废物投入；发生转入时须披露并防止重复计算。

##### 基本流

只有当水直接从环境跨界、而非来自供水产品系统时，才将直接取水记录为基本流投入。

#### 输出

##### 产品流

外供另一产品系统的回收冷凝水或处理水，只有满足已声明质量和转移条件时才作为产品报告；否则仍为内部回用或废物流。

##### 废物流

###### 送处理的乳品废水（`dairy_wastewater`）

废水数量和处理路线应与代表性负荷指标一并记录。排入下水的产品损失仍须纳入干物质平衡。

- 选定流：送往实际处理路线的数据集特定乳品废水流
- 流属性/单位：Volume / m3；污染负荷另用 kg
- 数量规则：计量排放体积，并按可用情况采用采样或计算的 COD、BOD、总氮、总磷和乳固体负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`idf-bulletin-445-2010`; `fao-dairy-industry`

###### 废水处理污泥（`wastewater_sludge`）

记录污泥湿质量和干质量，以及实际回收、土地利用、厌氧消化、焚烧或处置路线。

- 选定流：数据集特定废水污泥废物流
- 流属性/单位：Mass / kg 湿质量和 kg 干物质
- 数量规则：分配至覆盖生产期间的实测污泥数量和固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`fao-dairy-industry`

##### 基本流

###### 现场废水处理排放（`wastewater_treatment_emissions`）

适用时记录现场处理的直接甲烷、氧化亚氮或其他实测排放；场外处理排放属于所选处理数据集。

- 选定流：与实测区室匹配的污染物特定基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放或有记录因子乘以采集的处理活动量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重已放行全脂乳粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`idf-bulletin-445-2010`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 分别计量的单元过程 | 在过程计量和质量平衡允许直接归属时，通过细分接收、标准化、蒸发、干燥、后处理、清洗和包装来避免分配。 | `idf-bulletin-445-2010` |
| `allocation_rule_2` | 内部细粉、冷凝水、热回收和返工 | 将返回同一生产系统的物料或能量视为内部循环。可获得时记录总产生量和返回量，但不得产生共产品信用或重复计算返回流。 | `idf-bulletin-445-2010` |
| `allocation_rule_3` | 标准化产生的稀奶油、脱脂乳或其他可售乳品共产品 | 当细分无法归属共享负担时，使用反映乳组分和资源关系的有记录物理化学分配。应对各共享投入或排放类别使用相应因子，不得假定所有资源共用一个纯质量因子。 | `idf-bulletin-445-2010` |
| `allocation_rule_4` | 缺乏可辩护物理化学关系的剩余共享负担 | 经济分配只能作为已披露的后备方法或敏感性情景，并尽可能采用有代表性的多年价格。报告数量、价格、时期、地域和所得因子。 | `idf-bulletin-445-2010` |
| `allocation_rule_5` | 不合格乳粉及送往饲料、返工或处置的物料 | 按实际去向和市场功能对输出分类。除非明确扩展的生命周期模型采用系统扩展并报告替代产品和敏感性，否则不得计入避免负担信用。 | `idf-bulletin-445-2010` |
| `allocation_rule_6` | 共享现场公用工程和清洗 | 只有在直接计量后才分配剩余共享量，采用运行时间、原位清洗回路体积、热负荷、产量或废水负荷等有记录因果驱动量；披露驱动量并与场址总量核对。 | `idf-bulletin-445-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_milk_receipt` | `milk_reception_standardisation` | 原奶数量、组成、产地和运输 | 地磅或校准流量计，加接收实验室记录和送货日志 | 验收质量；拒收质量；动物种类；供应商/产地；收集日期；脂肪；蛋白质；总固体或水分；运输距离和方式 | 将送货单与接收计量及实验室样品标识核对 | kg；% m/m；km | 每次送货和每批 | 有代表性的连续 12 个月或已声明季节性生产期 | 服务于产品的全部供应商和接收点 | 汇总验收质量并按质量加权批次组成；保留供应商分层 | 校准；采样计划；实验室方法；送货单核对 |
| `cp_standardisation_balance` | `milk_reception_standardisation` | 标准化乳和调整乳成分 | 校准计量、罐位及实验室组成结果 | 投入和输出质量；脂肪；蛋白质；总固体；稀奶油/脱脂乳/截留液/渗透液/乳糖添加或移出 | 建立闭合批次质量和乳固体平衡 | kg；% m/m | 每批 | 与产品输出相同期间 | 全部标准化生产线 | 核对投入、输出、库存变化和损失 | 仪表校准；样品链；平衡闭合 |
| `cp_evaporation_mass_balance` | `heat_treatment_evaporation` | 热处理和浓缩乳生产 | 批记录、时间—温度记录仪、流量计、密度和总固体检测 | 进料质量；进料固体；时间—温度；浓缩乳质量；浓缩乳固体；按去向冷凝水；开停机损失 | 将控制系统记录关联至批次标识 | kg；% m/m；°C；s 或 min | 每批 | 与产品输出相同期间 | 全部热处理和蒸发生产线 | 按批次进行干物质和水平衡，再按产量加权平均 | 传感器校准；实验室平行样；冷凝水仪表核查 |
| `cp_dryer_mass_balance` | `homogenisation_spray_drying` | 干燥器进料、粉体、细粉、拒收物和排放活动 | 进料和粉体计量、料斗或料仓库存、总固体和水分检测、过滤器或旋风回收日志 | 浓缩乳进料质量及固体；粉体输出及水分；回收细粉；返工；拒收物；库存变化；干燥器工时 | 核对进入和离开干燥器系统的乳固体 | kg；% m/m；h | 每批或每班 | 与产品输出相同期间 | 全部干燥器和粉体回收设备 | 回收细粉只计一次的干物质平衡 | 仪表校准；水分方法；库存核对；异常日志 |
| `cp_batch_output_quality` | `powder_finishing_packaging` | 净重已放行产品和产品身份 | 已放行批次称量、包装皮重及分析证书 | 毛重；皮重；净重；脂肪；水分；乳固体非脂肪中蛋白质；产品形态；热处理等级；批次状态 | 汇总已放行净质量并将实验室结果关联至批次 | kg；% m/m | 每个放行批次 | 与清单相同期间 | 全部成品料仓和包装线 | 拒收批次在放行或返工前排除；质量结果按产量加权 | 秤校准；实验室认可或 QA；放行授权 |
| `cp_finishing_ingredients` | `powder_finishing_packaging` | 卵磷脂、维生素、矿物质和其他添加物 | 批次投料记录和库存平衡 | 配料身份；供应商批号；添加质量；浓度；目标批次 | 核对称量添加与库存领用和退回 | kg | 每批 | 与产品输出相同期间 | 全部后处理生产线 | 按配料汇总并除以已放行产品 | 校准秤；配方批准；批号追溯 |
| `cp_packaging_records` | `powder_finishing_packaging` | 初级、次级和三级包装及气体 | 物料清单、领退料记录、包装单元数量和废料日志 | 材料；单元质量；使用单元数；未用退回；废料；气体质量；产品形式 | 按包装形式进行物料平衡 | kg | 每批或每班 | 有代表性的 12 个月或已声明生产期 | 产品全部包装线 | 净领用材料除以已放行净产品 | 供应商规格；单元质量核查；库存核对 |
| `cp_energy_and_utilities` | 所有前景过程 | 电力、燃料、蒸汽、热、压缩空气和制冷 | 校准分项仪表、公用工程账单、燃料仪表和运行日志 | 载体；仪表起止读数；燃料质量或体积；低位热值；蒸汽质量、压力和焓；运行工时；分配驱动量 | 优先直接归属；将剩余分配与场址总量核对 | kWh；MJ；kg；m3 | 连续或每班；账单每月 | 至少有代表性的 12 个月或完整生产期 | 全部相关设备和共享公用工程系统 | 按载体和过程汇总；分配后按已放行产品归一化 | 仪表校准；账单核对；有记录换算因子 |
| `cp_water_and_wastewater` | `cleaning_wastewater_management` | 取水、冷凝水回用、废水和污泥 | 水源和排放仪表、采样、处理日志及污泥凭证 | 按水源/用途用水；按去向冷凝水；排放体积；COD；BOD；总氮；总磷；污泥湿质量和固体；处理路线 | 仪表平衡加代表性混合采样 | m3；kg 污染物；kg 污泥 | 体积连续；按许可或运行计划进行代表性采样 | 至少有代表性的 12 个月或完整生产期 | 服务于产品的全部水源、原位清洗回路和处理路线 | 核对取水、回用、蒸发、产品含水、排放和库存 | 仪表校准；样品链；实验室 QA；许可报告 |
| `cp_cleaning_records` | `cleaning_wastewater_management` | 清洗和消毒化学品 | 原位清洗配方、加药仪表、化学品领用记录和库存平衡 | 化学品身份；浓度；剂量；循环次数；回路；回收或废弃溶液 | 按回路汇总活性产品，并按因果关系分配剩余共享循环 | kg 产品和 kg 活性物质 | 每次清洗循环 | 与生产相同期间 | 覆盖过程使用的全部回路 | 按回路直接归属；与采购和库存核对 | 加药校准；浓度验证；循环日志 |
| `cp_material_losses` | 所有前景过程 | 洒漏、拒收、返工、废物和共产品 | 事件、返工、废物转移和销售记录 | 物料身份；湿质量；固体；去向；回收量；处理；批次 | 将损失和去向与过程质量平衡核对 | kg 湿质量；kg 干物质 | 每次事件和每批 | 与生产相同期间 | 全部覆盖生产线和储存区域 | 按物料和去向汇总；返工只在最终去向计数 | 称量凭证；转移记录；质量平衡闭合 |
| `cp_direct_emissions` | 相关前景过程 | 燃烧、制冷剂、颗粒物和处理排放 | 烟道检测或连续监测、燃料记录、制冷剂库存、维护日志和处理活动 | 污染物；区室；实测浓度和流量；检测期；燃料活动；制冷剂充注和补充；排放因子及来源 | 代表性足够时采用测量；否则将采集活动量乘以已披露因子 | kg 污染物；mg/Nm3；Nm3；kg 制冷剂 | 视情况连续、定期检测或年度库存 | 生产期内代表性运行状态 | 服务于覆盖过程的全部直接排放点 | 按污染物和区室汇总；防止测量法和因子法重叠 | 方法、检出限、校准、运行状态证据、因子参考 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 已放行产品 | 净重已放行乳粉质量 = 包装毛重 - 包装皮重；全部已分配前景量按净重已放行乳粉质量归一化。 | 毛重；皮重；放行批次状态 | 每 1 kg 净重已放行乳粉的投入或输出 kg | `idf-bulletin-445-2010` |
| `calc_milk_solids_balance` | 从标准化至干燥 | 同一批次期间，原奶及添加乳成分中的干物质 = 已放行乳粉干物质 + 可售共产品 + 不合格物料 + 废水/产品损失 + 库存变化 + 未解释差。报告未解释百分比。 | 所有含乳投入和输出的质量及固体分数 | 闭合干物质平衡和未解释差 | `codex-cxs-207-1999`; `tetra-pak-milk-powder-handbook` |
| `calc_water_balance` | 蒸发、干燥和清洗 | 乳、配料和公用水中的水投入 = 产品和共产品含水 + 单独回收冷凝水 + 废水 + 蒸发水 + 库存变化 + 未解释差。内部回用不计入净取水。 | 湿质量；固体或水分；水表；冷凝水；废水 | 每参考流按去向划分的水平衡 | `idf-bulletin-445-2010`; `fao-dairy-industry` |
| `calc_energy_normalisation` | 各能源载体 | 在直接归属和已披露分配后归一化采集的载体量。燃料保留数量和低位热值换算；蒸汽保留质量和焓差。 | 仪表记录；燃料属性；蒸汽状态；已放行产品 | 每参考流 kWh 电力或 MJ 热能 | `idf-bulletin-445-2010` |
| `calc_physicochemical_allocation` | 多产品乳品加工 | 细分后，使用适用于相应流的有记录物理化学或资源使用因子分配各剩余共享投入或排放；产品 i 的因子 = quantity_i × relation_factor_i 除以所有共产品对应项之和。 | 共产品数量；流特定关系因子；共享负担 | 各负担流和产品的分配因子 | `idf-bulletin-445-2010` |
| `calc_packaging_intensity` | 包装 | 按材料的包装强度 = 向已放行批次净领用包装材料除以净重已放行全脂乳粉。 | 领用材料；退回；废料归属；已放行净产品 | kg 包装材料/kg 净产品 | `idf-bulletin-445-2010` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 证明全脂乳粉身份和准确天工产品流 UUID；保留已放行批次的脂肪、水分和乳固体非脂肪中蛋白质结果及全部必需限定信息。 | 分析证书；规格；天工身份参考；批次放行记录 |
| `dq_temporal` | 全部前景记录 | 使用一个一致且有代表性的时期，连续工厂宜采用连续 12 个月，季节性生产宜采用完整已声明生产期；解释停机、异常生产、季节性和替代。 | 仪表日期；生产日历；账单期间；异常日志 |
| `dq_technological` | 过程路线 | 识别数据所代表的蒸发器、均质机、干燥器阶段配置、粉体回收、附聚或卵磷脂化、公用工程生成、排放控制和包装线。 | 设备清单；工艺流程图；运行记录 |
| `dq_geographical` | 原奶和上游数据集 | 使原奶产地、运输、电力、燃料、热、水和处理数据集与已声明地域匹配，或对代理作出理由说明。 | 供应商产地；路线记录；数据集元数据；代理理由 |
| `dq_completeness` | 质量、能量、水和排放 | 将乳固体、湿质量、水、能源载体、包装、废水和废物记录与场址或生产线总量核对；量化并解释未解决差异和排除项。 | 签署的平衡表；仪表和账单核对；排除清单 |
| `dq_measurement` | 测量值和计算值 | 记录仪器标识、校准状态、采样方法、实验室方法、适用时的检出限、计算公式和记录责任人。 | 校准证书；实验室 QA；计算工作簿；审计轨迹 |
| `dq_allocation` | 共享过程和共产品 | 保留直接测量、共享总量、共产品数量、因子、使用时的价格、分配期间、公式和敏感性结果。 | 分配工作簿；产量和价格记录；与场址总量核对 |
| `dq_source_age` | 外部因子和次级数据集 | 在可得时使用与研究期间相符的因子和次级数据集；记录各代理的版本、地域、技术和替代理由。 | 数据集元数据；因子引用；更新日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR 和参考身份 | manifest id、Markdown `canonical_pcr_id` 和参考产品流必须识别全脂乳粉；参考数量必须恰好为 1 kg 净产品，并采用 Mass 和 Units of mass 单位组。 | `codex-cxs-207-1999` |
| `validation_rule_2` | 已放行产品组成 | 若已放行乳粉乳脂低于 26% 或不低于 42% m/m、水分高于 5% m/m，或乳固体非脂肪中乳蛋白低于 34% m/m，应判定数据集不属于本 PCR。 | `codex-cxs-207-1999` |
| `validation_rule_3` | 必需限定信息 | 动物种类/产地、组成、产品形态、热处理、干燥路线、包装状态、地域/时间、分配方法或工厂门放行规格缺失时，完整性校验失败。 | `codex-cxs-207-1999`; `idf-bulletin-445-2010` |
| `validation_rule_4` | 过程覆盖 | 必须具有接收和标准化、热处理和蒸发、干燥、后处理和包装、清洗和废水，以及全部适用运输、公用工程、制冷剂、废物和直接排放记录；仅在有证据时方可将步骤标记为不适用。 | `idf-bulletin-445-2010`; `fao-dairy-industry`; `tetra-pak-milk-powder-handbook` |
| `validation_rule_5` | 质量和水平衡 | 乳固体和水平衡必须采用共同批次或生产期间。报告未解释差异；若平衡范围、库存变化或循环细粉可能造成实质性重复计算，则阻止审查通过。 | `idf-bulletin-445-2010`; `tetra-pak-milk-powder-handbook` |
| `validation_rule_6` | 分配 | 要求先细分后分配，对每项剩余共享负担记录因子，各共享负担的因子和为 1，并将分配数量与场址总量核对。 | `idf-bulletin-445-2010` |
| `validation_rule_7` | 数据来源 | 每个前景值或计算值必须关联采集协议和期间；每个外部因子或规则必须关联已列出的 source id。天工 UUID 查询属于身份依据，不列为外部数据源。 | `idf-bulletin-445-2010` |
| `validation_rule_8` | 重复计算 | 检查内部细粉、冷凝水、热回收、返工和共享场址公用工程分配，使产生和回用可见且不重复计算同一负担或产品。 | `idf-bulletin-445-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 全脂乳粉生产前景数据包和工厂门产品数据集 |
| downstream_use | 经审查并与有代表性的上游原奶、能源、材料、运输和处理数据集组合后，可作为 `secondary_dataset` 或 `background_dataset` 发布 |
| allowed_use | 组成、动物种类、地域、技术、包装状态、时期和分配方法匹配的全脂乳粉归因型工厂门建模；扩展生命周期模型可明确增加下游阶段 |
| excluded_use | 脱脂、部分脱脂、乳清、稀奶油、植脂、婴幼儿配方或配制粉；产品身份、分配、地域、技术、包装或数据质量不等同时的比较性声明；未增加下游阶段却作为摇篮到消费者数据集使用 |
| required_metadata | PCR id 和版本；产品流 UUID；设施地域；参考期间；原奶动物种类和产地；组成；产品形态和热处理等级；蒸发和干燥技术；包装状态；纳入过程；上游数据集身份；分配方法；数据所有者和审查状态 |
| required_quality_disclosure | 计量和采样覆盖；实验室方法；质量、干物质和水平衡闭合；分配因子和敏感性；时间、地域和技术代表性；数据缺口、代理、排除、不确定性和未解决身份 |
| update_trigger | 原奶来源或组成、产品规格、蒸发器或干燥器技术、能源供应、包装、排放控制、水回用、废水处理、分配方法、设施地域或参考期间发生实质变化；替换实质性代理或来源规则也触发审查 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-207-1999` | standard | Codex Alimentarius，CXS 207-1999，Standard for Milk Powders and Cream Powder，官方英文文本，https://www.fao.org/input/download/standards/333/CXS_207e.pdf，检索日期 2026-08-10 | 全脂乳粉定义、允许的组成调整、身份限值、排除项、产品校验 |
| `idf-bulletin-445-2010` | official_guidance | International Dairy Federation Bulletin 445/2010，A common carbon footprint approach for dairy: The IDF guide to standard lifecycle assessment methodology for the dairy sector，https://www.ukidf.org/documents/bulletin445.pdf，检索日期 2026-08-10 | 加工厂门功能单位、加工边界、清单数据字段、分配、完整性、报告和数据质量 |
| `fao-dairy-industry` | official_guidance | Food and Agriculture Organization of the United Nations，Dairy Industry，https://www.fao.org/4/x6114e/x6114e06.htm，检索日期 2026-08-10 | 接收和乳粉过程语境、蒸发、清洗废水、产品损失、处理输出 |
| `tetra-pak-milk-powder-handbook` | handbook | Tetra Pak Dairy Processing Handbook，Milk and whey powdered ingredients，https://dairyprocessinghandbook.tetrapak.com/chapter/milk-and-whey-powdered-ingredients，检索日期 2026-08-10 | 全脂乳粉路线、标准化、巴氏杀菌、蒸发、均质、喷雾和多级干燥、细粉回收、附聚及产品质量字段 |
