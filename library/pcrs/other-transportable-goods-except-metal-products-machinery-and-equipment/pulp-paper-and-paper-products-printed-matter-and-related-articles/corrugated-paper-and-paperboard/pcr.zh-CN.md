---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.corrugated-paper-and-paperboard
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 瓦楞纸和纸板

## 1. 范围与适用性

本 PCR 适用于通过瓦楞机将面纸和瓦楞芯纸组合而成的瓦楞纸和纸板前景数据包。产品在工厂门口仍为卷筒或平张形式的瓦楞纸或纸板时，单面、单瓦楞、双瓦楞和三瓦楞纸板均在覆盖范围内。

本 PCR 覆盖蒸汽或热调湿、起楞、施加淀粉、面纸与瓦楞芯纸贴合、在瓦楞机上干燥或固化、纵切、横切为平张或复卷、堆码，以及直接相关的场内公用工程和废物处理。纸浆生产、回收纸制浆和瓦楞原纸制造不作为前景作业纳入；这些投入必须由上游数据集表示。本 PCR 也排除将纸板进一步转化为纸箱、纸盒、箱体、纸袋、展示架或其他成品容器的印刷、开槽、模切、折叠、钉合和制箱粘合。

仅当涂布或覆膜发生在报告场址且可售产品仍属于 CPC 32151 时才纳入。数据集必须说明面纸牌号、瓦楞芯纸牌号、瓦楞层结构、楞型、定量、含水率基准、再生纤维状态，以及任何涂布或覆膜。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.corrugated-paper-and-paperboard |
| classification_refs | CPC 3.0：32151，瓦楞纸和纸板，精确映射 |
| covered_products | 卷筒或平张形式的瓦楞纸和纸板；单面、单瓦楞、双瓦楞和三瓦楞纸板；仅在仍为中间纸板产品时覆盖涂布或覆膜瓦楞纸板 |
| excluded_products | 起楞前的箱板纸和瓦楞芯纸；纸浆和原纸制造；纸袋；纸箱、纸盒、箱体、展示架及其他转化容器；对他人拥有的材料提供的制造服务 |
| representative_product | 由两层面纸和一层瓦楞芯纸以淀粉胶黏剂贴合而成的单瓦楞双面瓦楞纸板平张 |
| production_route | 面纸和瓦楞芯纸卷经调湿、起楞、在瓦楞机上贴合、固化或干燥、纵切、横切或复卷，形成净可售瓦楞纸板 |
| market_state | 瓦楞机工厂门口的净可售瓦楞纸板，尚未转化为纸箱或其他容器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由瓦楞机转化生产的净可售瓦楞纸或纸板 |
| How much | 1,000 kg |
| How well | 符合可售要求的纸板，已声明面纸和瓦楞芯纸牌号、瓦楞层结构、楞型、定量、厚度、含水率、再生纤维状态及表面处理 |
| How long or cycle | 一个报告期的生产输出，归一化至 1,000 kg 净可售产品 |
| reference_flow_link | `corrugated_board_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净可售产品 |
| 参考产品流 | 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 面纸牌号和供应路线；瓦楞芯纸牌号和供应路线；瓦楞层结构；楞型；产品定量（g/m2）；厚度（mm）；含水率及测量基准；再生纤维含量声明基准；涂布或覆膜；产品形态；场址；地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有材料流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 净可售产品和材料投入或产出均以 kg 记录；按 1 t = 1,000 kg 换算吨。 |
| `saleable_mass_basis` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用离开瓦楞机边界的净可售纸板称量质量，排除单独报告的运输包装、边料和不合格品。 |
| `grammage_measurement` | 产品定量限定信息 | 单位面积质量 | g/m2 | 采用 ISO 536:2019 或可证明等效的方法测定并报告定量；说明该值是在组合纸板上实测还是由各层原纸计算。 |
| `moisture_measurement` | 产品含水率限定信息和水分修正 | 质量分数 | 质量百分比 | 采用 ISO 287:2017 或可证明等效的烘干法测定批次含水率。说明清单质量按销售状态还是水分修正状态报告；不得混用基准。 |
| `thickness_measurement` | 产品厚度限定信息 | 长度 | mm | 采用 ISO 3034:2011 或适用于瓦楞纤维板的可证明等效方法测定单张厚度。 |
| `energy_measurement` | 电力和外购蒸汽或热 | 与所选 Tiangong 流一致的净热值或高位热值 | 电力用 kWh；热用 MJ | 保留计量单位和所选流属性基准。记录换算；没有实测焓值或有据的运行条件时不得把蒸汽质量换算为能量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 面纸和瓦楞芯纸卷、淀粉或配制胶、外购公用工程和辅料进入瓦楞机场址边界。 |
| starting_condition_role | 前景“门到门”瓦楞机转化的起点；上游纤维、纸浆、回收纸制浆和原纸生产由供应商数据集或二手数据集表示。 |
| product_classification_scope | 仅限 CPC 3.0 子类 32151；在转化为 CPC 32152 或 32153 的纸袋、纸箱、纸盒、箱体或相关容器之前结束边界。 |
| recursive_input_rule | 场内返回再加工的瓦楞纸板保留为内部循环。外购或外部回收且跨越边界的瓦楞材料作为单独投入记录其来源、处理状态和上游数据集，不得与产出静默净额处理。 |
| upstream_dataset_requirement | 每种面纸、瓦楞芯纸、胶黏剂、电力组合、热或蒸汽供应、供水及外部废物处理均使用与牌号和路线匹配的上游数据集。 |
| disclosure | 声明场址、地理范围、报告期、瓦楞层和楞型结构、产品组合、综合或非综合生产、纳入的后处理、上游数据集替代、场内公用工程、废水处理及所有截断。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_corrugator_conversion` | 前景瓦楞机转化 | 纳入面纸和瓦楞芯纸放卷、热或蒸汽调湿、瓦楞辊、施加淀粉、单面贴合和双面贴合、固化或干燥、纵切、横切或复卷、堆码及直接相关的场内搬运。 | fefco-corrugated-board-production; fefco-corrugated-board-boundaries |
| `boundary_supporting_operations` | 场址支持作业 | 当场内供热或供汽、发电、水处理、废水处理和固体废物处理发生在报告场址边界内时纳入；否则以产品流或废物流表示外购公用工程或外部处理。 | fefco-corrugated-board-boundaries |
| `boundary_upstream_base_paper` | 上游面纸和瓦楞芯纸生产 | 前景瓦楞机过程排除纸浆和瓦楞原纸制造，但要求所有面纸和瓦楞芯纸提供上游数据集及实际牌号质量。 | fefco-corrugated-board-boundaries |
| `boundary_container_conversion` | 下游容器制造 | 排除把瓦楞纸板转化为纸箱或其他容器的印刷、开槽、模切、折叠、钉合和粘合；如需这些作业，应建立单独的下游过程。 | unstats-cpc-32151; fefco-corrugated-board-production |
| `boundary_cutoff_disclosure` | 清单完整性 | 不得遗漏已知的面纸、瓦楞芯纸、胶黏剂、电力、热或蒸汽、水、边料、不合格品或处理流。其他任何省略应在可行时量化，并说明理由及估计显著性。 | eu-pef-2021-2279 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `corrugator_conversion` | 瓦楞机转化为净可售纸板 | `required` | 对本 PCR 范围内产品始终纳入 | 制箱转化之前的前景纸板成形和后处理 | 1,000 kg 净可售瓦楞纸板 |

### 过程：瓦楞机转化为净可售纸板（`corrugator_conversion`）

#### 输入

##### 产品流

###### 面纸和瓦楞芯原纸（`base_paper_input`）

按牌号和供应路线采集所有跨越场址边界的面纸和瓦楞芯纸。所选汇总流提供稳定清单角色；在可行时，前景数据包应为上游路线存在实质差异的牌号保留单独交换。

- 选定流：干燥后纸或纸板原纸幅 `51b5350f-bd87-4d08-9f00-f9ae3c6e1767`
- 流属性/单位：Mass / kg
- 数量规则：汇总所有实际消耗的面纸和瓦楞芯纸卷称量质量，并按有据的库存变化修正；保留牌号层级质量和上游数据集身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售瓦楞纸板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_base_paper_receipts`
- 来源：fefco-corrugated-board-data-2024; fefco-corrugated-board-material-inputs
- 数量范围：欧洲平均原纸投入作者先验，不是符合性限值
  - 范围角色：典型范围（`typical_range`）
  - 下限：1120
  - 上限：1120
  - 单位：kg
  - 基准：每 1,000 kg 平均瓦楞纸板产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：fefco-corrugated-board-data-2024

###### 淀粉基瓦楞胶黏剂（`starch_adhesive_input`）

记录配制淀粉胶，或记录其干淀粉和配方组分，但不得重复计量。必须保留配方基准和含水量。

- 选定流：淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位：Mass / kg
- 数量规则：根据配胶批次、领料记录或罐体平衡实测胶黏剂用量，并声明湿基或干基。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售瓦楞纸板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_adhesive_records`
- 来源：fefco-corrugated-board-production; fefco-corrugated-board-material-inputs
- 数量范围：待评审证据替换的暂定胶黏剂用量筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 净可售瓦楞纸板的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 过程水（`process_water_input`）

记录进入胶黏剂配制、未包含在外购蒸汽中的蒸汽或加湿系统、清洗及其他瓦楞机作业的水。避免重复计算循环水。

- 选定流：工艺用水 `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass / kg
- 数量规则：计量或分配至瓦楞机边界的场址供水，扣除有据的内部循环量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售瓦楞纸板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：fefco-corrugated-board-boundaries
- 数量范围：待评审证据替换的暂定用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 净可售瓦楞纸板的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中压电力（`electricity_input`）

记录瓦楞机传动、风机、泵、纵横切和堆码设备，以及分配的支持用电。使用实际场址电力组合或供应商特定数据集。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：瓦楞机计量用电加上有据分配的场址共用电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售瓦楞纸板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：fefco-corrugated-board-boundaries
- 数量范围：待评审证据替换的暂定用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：每 1,000 kg 净可售瓦楞纸板的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购蒸汽或过程热（`steam_heat_input`）

记录用于原纸调湿和胶黏剂固化的外购蒸汽或热。如果热在场内产生，应以同一场址边界内的燃料和直接排放行替换该交换。

- 选定流：蒸汽热 `74d07391-d5e4-4beb-bd80-4fe9a7617cf1`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：计量交付至瓦楞机的热或蒸汽焓；记录压力、温度、凝结水回收及换算假设。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售瓦楞纸板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：fefco-corrugated-board-production; fefco-corrugated-board-boundaries
- 数量范围：待评审证据替换的暂定过程热筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：MJ
  - 基准：每 1,000 kg 净可售瓦楞纸板的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净可售瓦楞纸板（`corrugated_board_output`）

参考产品在起楞、固化或干燥、纵切、横切或复卷及正常内部质量剔除后称量，但在制箱转化前结束。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：将报告期净可售产品质量归一化为准确 1,000 kg，同时保留未归一化实测质量和含水率基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净可售瓦楞纸板
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_saleable_product`
- 来源：fefco-corrugated-board-boundaries
- 数量范围：参考流归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：fefco-corrugated-board-boundaries

##### 废物流

###### 瓦楞纸板边料和不合格品（`paper_shavings_output`）

记录离开过程边界的瓦楞机修边料、切边和质量不合格品。内部再加工不作为产出；必须说明场外回收或处理去向。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass / kg
- 数量规则：按去向分类称量离开边界的边料和不合格纸板；不得在未保留显式产出时从纸料投入中扣除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售瓦楞纸板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shavings_records`
- 来源：fefco-corrugated-board-data-2024; fefco-corrugated-board-closed-loop
- 数量范围：欧洲典型瓦楞机生产边料作者先验，不是符合性限值
  - 范围角色：典型范围（`typical_range`）
  - 下限：100
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 瓦楞产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：fefco-corrugated-board-closed-loop

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | 生产瓦楞纸板的瓦楞机转化 | 将瓦楞纸板作为参考产品，把边料、不合格品、废水及其他处理产出作为显式废物或残余流；不得仅因其可能具有回收价值而向其分配前景负荷。 | fefco-corrugated-board-closed-loop |
| `allocation_subdivision_first` | 共享公用工程的多个纸板牌号或生产线 | 在技术可行时，首先按生产线、牌号、批次或机器时间细分计量数据。仅对无法细分的共享余量分配，默认按净可售质量分配，并披露各产品组的分配份额。 | eu-pef-2021-2279 |
| `allocation_recycling_separate` | 纸边料和下游回收 | 在本“门到门”前景数据集中报告边料及其去向，不计入避免生产信用。如果下游生命周期模型采用闭环或循环足迹方法，应单独声明方法、地理范围、时期、再生含量投入、回收产出和分配因子。 | fefco-corrugated-board-closed-loop; eu-pef-2021-2279 |
| `allocation_no_silent_netting` | 内部再加工和库存变化 | 内部再加工可留在边界内，但外购或外部回收纸板、外部废物产出及期初或期末库存不得静默净额处理。保留总量记录并展示归一化计算。 | fefco-corrugated-board-data-2024 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_saleable_product` | `corrugator_conversion` | 净可售瓦楞纸板 | 校准秤记录和产品质量记录 | 时间戳；产品代码；瓦楞层结构；楞型；面纸和瓦楞芯纸牌号；毛质量；运输包装质量；不合格品质量；含水率样品；定量；厚度 | 与产品批次关联的出库秤或生产秤；ISO 536 定量；ISO 287 含水率；ISO 3034 厚度，或可证明等效的方法 | kg；g/m2；质量百分比；mm | 每批次或生产订单，按月汇总 | 至少连续 12 个有代表性的月份；季节性或短周期生产采用完整生产期 | 数据集代表的全部生产线和产品 | 扣除单独报告的运输包装后汇总净可售质量；归一化前保留产品层级总量 | 秤校准；抽样计划；测试记录；与销售或发运总量核对 |
| `cp_base_paper_receipts` | `corrugator_conversion` | 面纸和瓦楞芯原纸 | 收货、领料和库存记录 | 供应商；工厂；牌号；面纸或瓦楞芯纸角色；原生或再生纤维状态；流 UUID；上游数据集；纸卷质量；领料质量；期初库存；期末库存；含水率基准 | 校准的收货秤或过程秤及库存台账 | kg | 每次交付和领用，按月核对 | 与产品输出相同的报告期 | 纳入瓦楞机生产线的全部原纸投入 | 消耗量 = 期初库存 + 收货 - 期末库存 - 有据的转出；保留牌号层级值 | 秤校准；供应商规格；发票或收货单；库存核对 |
| `cp_adhesive_records` | `corrugator_conversion` | 淀粉胶黏剂及配方组分 | 批次单、领料和罐体平衡 | 批次 id；干淀粉；水；烧碱；硼砂或替代物；湿强剂；配制胶质量；回流或损失；固含量 | 批次称量或流量计加库存核对 | kg | 每批次，按月汇总 | 与产品输出相同的报告期 | 服务于纳入生产线的全部胶黏剂配制 | 在明确声明的基准上报告配制胶和干组分；防止水和配方组分重复计量 | 校准秤或仪表；配方单；库存核对 |
| `cp_utility_meters` | `corrugator_conversion` | 电力、热或蒸汽和过程水 | 公用工程仪表和分配记录 | 仪表 id；起止读数；单位；压力；温度；凝结水回收；共享负荷驱动量；停机时间 | 优先使用专用仪表；否则依据场址总表进行有据的工程分配 | kWh；MJ；kg | 连续或每班，按月汇总 | 与产品输出相同的报告期 | 瓦楞机及纳入的支持作业 | 扣除有据的非生产负荷；归一化前按实测机器时间、产量或工程热平衡分配共享公用工程 | 仪表校准；账单；分配工作表；完整性核对 |
| `cp_shavings_records` | `corrugator_conversion` | 边料和不合格纸板 | 废物外运和生产不合格品记录 | 称重单；容器 id；产品牌号；内部再加工；外部去向；回收商或处理路线；含水率基准 | 专用废物秤、打包机秤或经核验的收运方称重单 | kg | 每次外运或生产班次，按月汇总 | 与产品输出相同的报告期 | 纳入生产线的全部修边料和不合格品 | 从外部产出中排除内部再加工；按去向汇总外部边料和不合格品总量 | 秤校准；回收方收据；废物联单；与纸料质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单交换 | 归一化数量 = 报告期交换数量 / 报告期净可售纸板质量 × 1,000 kg | 交换数量；净可售纸板质量 | 每 1,000 kg 参考流的数量 | fefco-corrugated-board-boundaries |
| `calc_base_paper_consumption` | 面纸和瓦楞芯纸投入 | 原纸消耗量 = 期初库存 + 收货 - 期末库存 - 转出；求和前保留各面纸和瓦楞芯纸牌号总量 | 按牌号的库存和收货记录 | 按牌号及合计的原纸消耗 kg | fefco-corrugated-board-material-inputs |
| `calc_board_mass_balance` | 瓦楞机转化 | 核对原纸 + 干胶黏剂组分 + 其他留在产品中的材料，与净可售纸板 + 外部边料和不合格品 + 有据的库存或水分变化；调查并披露残差 | 原纸记录；胶黏剂记录；产品质量；边料；含水率；库存 | 质量平衡残差及解释 | fefco-corrugated-board-data-2024 |
| `calc_energy_conversion` | 热或蒸汽 | 仅根据计量能量，或有据的质量、压力、温度、凝结水回收和焓差把蒸汽换算为 MJ；记录所选流使用的属性基准 | 蒸汽或热记录；运行条件 | 按声明高位或低位基准的交付热量 MJ | eu-pef-2021-2279 |
| `calc_moisture_disclosure` | 产品和原纸质量 | 保留销售状态质量作为参考基准；如同时报告干质量，应由实测含水率计算，并保留两个值及公式 | 销售状态质量；ISO 287 含水率结果 | 销售状态质量和可选干质量 | iso-287-2017; fefco-corrugated-board-outputs |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和过程身份 | 产品代码、瓦楞层结构、楞型、面纸和瓦楞芯纸牌号、产品形态、表面处理、场址、地理范围和报告期必须明确且与 CPC 32151 一致。 | 产品规格、生产订单和分类评审 |
| `dq_temporal` | 前景活动数据 | 除非有理由采用更短的完整生产期，否则使用至少连续 12 个有代表性的月份；说明停机、异常时期和参考年。 | 仪表导出、生产台账及报告期核对 |
| `dq_completeness` | 所有必需清单角色 | 核对原纸、胶黏剂、公用工程、可售产出、边料及其他已知产出。仅在确认该流确实不发生时记录零；区分数据不可得与零。 | 质量平衡、公用工程核对、废物记录和省略清单 |
| `dq_measurement` | 质量、定量、含水率、厚度和公用工程 | 保留仪器身份、校准状态、抽样频率、测试方法、单位换算和汇总工作表。 | 校准证书、ISO 或等效测试记录及计算工作簿 |
| `dq_representativeness` | 场址数据集和二手数据集 | 评估技术、地理、时间和精度代表性；说明所有代理上游数据集，并识别纤维路线、能源组合、工厂技术和产品牌号差异。 | 欧盟 PEF 数据质量评估和供应商数据集元数据 |
| `dq_supplier_coverage` | 面纸、瓦楞芯纸、胶黏剂、能源和处理数据集 | 每项重要上游投入及外部处理路线必须具名数据集或有据的数据缺口；FEFCO 平均值可用于 QA，但不得替代供应商或路线特定前景数量。 | 供应商声明、二手数据集引用及缺口登记 |
| `dq_industry_prior` | 与行业证据的比较 | FEFCO 加权平均值仅作为外部筛选先验。不得声称其在报告的欧洲地理范围、技术和参考年之外具有场址特定或普遍代表性。 | FEFCO 问卷覆盖和同行评审说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity_scope` | 产品类别 | 确认产出为瓦楞纸或纸板，而不是原纸、纸箱、纸盒、纸袋、展示架或制造服务；拒绝身份含糊的产品。 | unstats-cpc-32151; environdec-pcr-2010-14-v4-2026 |
| `validation_reference_flow` | 参考流 | 要求准确归一化至 1,000 kg 净可售瓦楞纸板，使用质量属性和质量单位组 UUID，并提供全部必需产品限定信息。 | fefco-corrugated-board-boundaries; iso-536-2019; iso-287-2017; iso-3034-2011 |
| `validation_process_coverage` | 瓦楞机边界 | 要求记录原纸调湿、起楞、施加淀粉、面纸贴合、固化或干燥、纵切、横切或复卷、堆码及纳入的支持公用工程；单独披露每项被排除的场内作业。 | fefco-corrugated-board-production; fefco-corrugated-board-boundaries |
| `validation_mass_balance` | 材料清单 | 把原纸总投入、胶黏剂组分、净可售产出、边料和不合格品、含水率基准及库存变化作为一个质量平衡检查；非零且无法解释的残差构成发现项，不得自动调整。 | fefco-corrugated-board-data-2024 |
| `validation_energy_water` | 公用工程 | 要求实测或透明分配电力、热或蒸汽和过程水；要求保留的记录可复算单位和属性换算。 | eu-pef-2021-2279 |
| `validation_recycling` | 边料和回收 | 要求边料或不合格品总量及去向。除非范围内另行声明下游回收方法，否则拒绝在“门到门”过程中静默净额处理或计入避免生产信用。 | fefco-corrugated-board-closed-loop |
| `validation_data_quality` | 发布的前景数据包 | 要求充分披露时间、技术、地理、完整性、精度、校准、代理和不确定性，以支持下游二手或背景用途。 | eu-pef-2021-2279; fefco-corrugated-board-questionnaire-2024 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从瓦楞机转化至瓦楞纸或纸板的场址和技术特定前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在产品限定信息和地理范围匹配时，用于前景过程构建、供应链建模、产品环境足迹研究、按适用有效 PCR 编制 EPD、情景比较和生命周期模型组装 |
| excluded_use | 直接代表纸浆或原纸生产；直接代表纸箱或容器转化；无依据的地理或技术代表性声明；把暂定推理估算范围作为场址实测数据；在缺少适用项目规则时进行产品间比较声明 |
| required_metadata | 规范 PCR id；CPC 引用；场址和地理范围；报告期；技术；面纸和瓦楞芯纸牌号及路线；瓦楞层和楞型结构；定量；厚度；含水率基准；再生纤维声明基准；表面处理；参考流 UUID；上游数据集身份；分配；截断 |
| required_quality_disclosure | 原始数据占比；仪表和抽样覆盖；校准；质量平衡残差；代理数据集；时间、技术、地理和精度代表性；暂定估计；不确定性；处理去向；评审状态 |
| update_trigger | 瓦楞机技术、产品组合、纤维路线、胶黏剂配方、能源或供热、分配、系统边界、场址或数据源发生实质变化，或距前景参考年超过五年 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `environdec-pcr-2010-14-v4-2026` | 标准（`standard`） | EPD International，PCR 2010:14 Processed paper and paperboard，版本 4.0.0，2026-03-03 发布，有效期至 2030-03-03，https://www.environdec.com/pcr-library/pcr_487bc5e7-8e58-474b-f2f6-08de791141fe，检索于 2026-07-27 | 确认覆盖 UN CPC 32151 的现行官方 PCR 范围 |
| `unstats-cpc-32151` | 官方指南（`official_guidance`） | 联合国统计司，CPC 子类 32151 和类别 3215 分类详情，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/32151，检索于 2026-07-27 | 产品身份及与单独容器子类的边界 |
| `fefco-corrugated-board-production` | 行业技术指南（`extension_guidance`） | FEFCO，European Database for Corrugated Board Life Cycle Studies，Corrugated board production，https://www.fefco.org/lca/dscription-of-production-system/corrugated-board-production，检索于 2026-07-27 | 产品构造和瓦楞机过程分解 |
| `fefco-corrugated-board-boundaries` | 官方指南（`official_guidance`） | FEFCO，European Database for Corrugated Board Life Cycle Studies，Boundaries and declared unit，https://www.fefco.org/lca/methodology-questions/boundaries，检索于 2026-07-27 | 门到门边界、支持过程及 1 t 净可售产品基准 |
| `fefco-corrugated-board-data-2024` | 数据集（`dataset`） | FEFCO，European Database for Corrugated Board Life Cycle Studies，1 t 瓦楞产品的计算投入和产出，https://www.fefco.org/lca/data，检索于 2026-07-27 | 欧洲平均纸料投入 1.12 t/t 产品和可回收纸产出 0.12 t/t；质量平衡 QA 先验 |
| `fefco-corrugated-board-material-inputs` | 数据集（`dataset`） | FEFCO，European Database for Corrugated Board Life Cycle Studies，Material inputs，https://www.fefco.org/lca/data-description/material/inputs，检索于 2026-07-27 | 面纸、瓦楞芯纸、淀粉胶及配方组分清单角色 |
| `fefco-corrugated-board-outputs` | 数据集（`dataset`） | FEFCO，European Database for Corrugated Board Life Cycle Studies，Material outputs，https://www.fefco.org/lca/data-description/material/outputs，检索于 2026-07-27 | 产品含水率证据及残余物流边界解释 |
| `fefco-corrugated-board-questionnaire-2024` | 数据集（`dataset`） | FEFCO，European Database for Corrugated Board Life Cycle Studies，2024 数据采集问卷和覆盖，https://www.fefco.org/lca/data-description/questionnaire，检索于 2026-07-27 | 前景数据角色、报告期设计、行业覆盖和代表性限制 |
| `fefco-corrugated-board-closed-loop` | 方法因子（`method_factor`） | FEFCO，European Database for Corrugated Board Life Cycle Studies，Closed-loop approach，https://www.fefco.org/lca/methodology-questions/closed-loop-approach，检索于 2026-07-27 | 回收分配方法及约 100 kg/t 瓦楞产品的典型瓦楞机生产边料 |
| `iso-536-2019` | 标准（`standard`） | ISO 536:2019，Paper and board — Determination of grammage，https://www.iso.org/standard/77583.html，检索于 2026-07-27 | 产品定量测量 |
| `iso-287-2017` | 标准（`standard`） | ISO 287:2017，Paper and board — Determination of moisture content of a lot — Oven-drying method，https://www.iso.org/standard/69063.html，检索于 2026-07-27 | 适用于瓦楞纸板的含水率测量 |
| `iso-3034-2011` | 标准（`standard`） | ISO 3034:2011，Corrugated fibreboard — Determination of single sheet thickness，https://www.iso.org/standard/51266.html，检索于 2026-07-27 | 产品厚度测量 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会建议 (EU) 2021/2279，产品环境足迹和组织环境足迹方法，合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02021H2279-20211230，检索于 2026-07-27 | 分配层级、企业特定活动数据、截断披露和数据质量维度 |
