---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-printers-used-with-data-processing-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 与数据处理设备配套使用的其他打印机

## 1. 范围与适用性

本PCR用于能够连接计算机或网络的单功能打印机的工厂装配及验收测试前景数据包，排除喷墨和激光技术。针式、直接热敏及热转印打印共用装配边界，但分别保留打印机芯及测试耗材的纳入条件。其语义区别在于成像机构及其耗材，而非仅凭分类叶节点。来源：`un-cpc-3-0-notes-2025`、`epson-lx350-specifications`、`zebra-zd400-specifications`。

默认结果为从厂门到厂门的制造模块，并非完整产品足迹或打印服务比较。形成从摇篮到厂门的结果时必须链接上游零部件生产及运输；分销、使用、维护和寿命终结需要另行声明的下游模型。存在厂内零部件制造时，必须补充经计量的原子交换，才可用本装配模块代表该场址。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-printers-used-with-data-processing-machines |
| classification_refs | CPC 3.0: 45265; `un-cpc-3-0-structure-2025` |
| covered_products | 可连接的单功能针式及热敏打印机；其他成像技术须明确披露机芯及耗材。 |
| excluded_products | 喷墨打印机；激光打印机；打印、扫描、复印、传真多功能设备；不可连接的独立打印机；增材制造设备；单独销售的打印机零件。 |
| representative_product | 与计算机连接的针式打印机，声明型号及配置。 |
| production_route | 采购外壳、已装联控制板、电源及一体化打印机芯；装配、固件配置、验收测试及包装。 |
| market_state | 出厂的新制、已测试完整打印机；包装单独核算。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可将数字输入呈现在声明介质上的完整打印机。 |
| How much | 以1 kg合格打印机净输出作为制造声明单位；保留型号特定的单台质量。 |
| How well | 通过有记录的连接、进纸和打印质量验收；声明分辨率、打印宽度、速度及介质兼容性。 |
| How long or cycle | 一个制造交付周期。不预设使用寿命及全寿命打印量；下游服务比较须采集这些信息。 |
| reference_flow_link | finished_printer |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 与数据处理设备一起使用的其他打印机 `ab2017fe-300f-4fa2-ab9c-10bfd897b2d7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；成像技术；单功能及连接能力证据；单台净重；随附电源及初始色带；分辨率；打印宽度；速度及测试图案；介质及涂层；工厂及国家；报告期；固件；采购组件边界。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | finished_printer | Mass | kg | 称量声明的随附配置，不含运输包装。仅对同型号批次，以批次净重除以实测单台质量换算台数。 |
| electricity_unit | electricity | Net calorific value | MJ | 保留交付电量；以3.6将kWh换算为MJ。记录电压及电网组合；不得将上游发电排放计作工厂直接排放。 |
| consumable_mass | 测试耗材 | Mass | kg | 通过实测面密度或单位长度质量换算纸张或色带；在平衡中分别保留卷芯、色带盒壳、测试耗用量及交付余量。 |

## 5. 系统边界

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_assembly | foreground | 纳入收料及领料、集成、验收测试、返工和包装，直至出厂合格交付，包括测试耗材及报废品。 |  |
| boundary_partial | result_scope | 将从厂门到厂门的结果报告为部分结果；披露所链接的全部上游数据集及排除项。不得凭本模块宣称符合完整生命周期温室气体标准。 | ghg-protocol-product-standard |
| boundary_routes | technology | 仅纳入实际机芯及耗材路线。直接热敏纸与针式色带不可互换。 | epson-lx350-specifications; zebra-zd400-specifications; zebra-thermal-media |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购成品组件到达装配场址。 |
| starting_condition_role | 前景装配投入边界。 |
| product_classification_scope | CPC 3.0: 45265 |
| recursive_input_rule | 采购同类别完整打印机时，将其作为具有自身上游数据集的投入；不得递归展开本PCR或再次计入其零件。翻新须与新制分别披露。 |
| upstream_dataset_requirement | 为各采购组件匹配供应商及技术特定的生产数据集，保留所含零件及交付状态；宣称从摇篮到厂门覆盖前须识别缺口。 |
| disclosure | 自制与外购划分、装配覆盖范围、组件内容、运输覆盖范围、计量活动及未纳入的生命周期阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | inclusion_condition | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 打印机装配、测试及包装 | required | 所有范围内工厂装配数据包 | 前景生产 | 1 kg finished_printer |

以下卡片描述声明装配路线的采购原子组件，不可用原料替代。应核对供应商与场址物料清单。实际跨越边界的其他外壳树脂、独立电缆、紧固件、胶黏剂、溶剂、包装内衬或废物，均须在前景数据包中建立各自具体交换并计量。不得使用“其他材料”剩余项。

### 过程：打印机装配、测试及包装（`assembly`）

#### 输入

##### 产品流

###### ABS打印机外壳 (`housing`)

仅适用于采购的ABS模塑外壳；记录净领用、退料和不合格品。

- 选定流：ABS打印机外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 已装联元器件的打印机控制电路板 (`pcb`)

采购的控制电路板含已安装元器件；排除已包含在采购打印机芯内的电路板。

- 选定流：已装联元器件的打印机控制电路板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 打印机开关电源 (`supply`)

包括内置或随附外置开关电源及其一体式电缆；不得在其他组件内重复计入。

- 选定流：打印机开关电源
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 针式打印机芯组件 (`mechanism`)

inclusion_condition：针式打印路线。采购的一体化机架、打印头、驱动和走纸机构组件；供应商物料清单界定其包含零件。

- 选定流：针式打印机芯组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 热敏打印机芯组件 (`thermal`)

inclusion_condition：直接热敏或热转印路线。采购的一体化打印头、机架和介质驱动组件；声明实际技术及所含零件。

- 选定流：热敏打印机芯组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 电力 (`electricity`)

合并计量装配、固件加载、测试、返工和包装用电；依据记录的运行时间计入可归属的共用设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 打印机含墨色带盒 (`ribbon`)

inclusion_condition：针式打印测试或随附初始色带盒。记录色带盒质量，并区分测试耗用部分和随产品交付的余量。

- 选定流：打印机含墨色带盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 蜡基热转印打印色带 (`transfer_ribbon`)

inclusion_condition：使用蜡基色带的热转印路线。计量卷材领用及退回质量，分别保留配方及卷芯质量信息。

- 选定流：蜡基热转印打印色带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 无涂层无木纸 (`paper`)

inclusion_condition：使用未涂布无机械木浆纸测试。称量工厂验收测试耗纸，包括重复测试。

- 选定流：无涂层无木纸 `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 热敏打印纸 (`thermal_paper`)

inclusion_condition：直接热敏测试。计量涂层纸而不含可重复使用的纸卷支架；记录涂层、纸卷及底纸配置。

- 选定流：热敏打印纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 瓦楞纸箱 (`box`)

inclusion_condition：随附瓦楞运输纸箱。纸箱质量单独记录，不计入打印机净参考质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

#### 输出

##### 产品流

###### 与数据处理设备一起使用的其他打印机 (`finished_printer`)

出厂验收合格的完整打印机；参考输出为1 kg产品净重，包括声明的随附电源及初始色带盒，不包括运输包装。

- 选定流：与数据处理设备一起使用的其他打印机 `ab2017fe-300f-4fa2-ab9c-10bfd897b2d7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

##### 废物流

###### 打印机测试产生的印刷废纸 (`paper_waste`)

inclusion_condition：普通纸张测试废纸离开生产线。与热敏废纸分开称量，记录接收方及处理路线。

- 选定流：打印机测试产生的印刷废纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 热敏打印废纸 (`thermal_waste`)

inclusion_condition：热敏测试纸被丢弃。记录涂层化学成分及实际处置路线，独立于普通废纸回收。

- 选定流：热敏打印废纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 废打印机色带盒 (`spent_ribbon`)

inclusion_condition：测试中丢弃耗尽的针式打印色带盒。记录整盒废弃质量及处理去向。

- 选定流：废打印机色带盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

###### 不合格废打印机 (`reject`)

inclusion_condition：整机测试不合格后报废。记录实际质量；返工后合格的设备不作为废物输出。

- 选定流：不合格废打印机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以批次交换台账除以合格打印机净质量；明确记录路线中不存在的流为不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格打印机净输出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_meter | shared_activities | 首先用批次记录及分表计量细分。仍有共用电力时，使用有记录的机器运行时间及负载，并论证物理关系。 | ghg-protocol-product-standard |
| allocation_rework | rejects | 将测试失败及返工负荷归于同型号群组的合格输出。将报废品作为废物并计入其处理负荷；不得默认为避免生产原生材料而计入信用。 |  |
| allocation_coproduct | saleable_outputs | 如产生可销售共产品，记录其功能及物理关系；仅在不存在合理物理关系时采用经济分配，并披露价格期及敏感性。 | ghg-protocol-product-standard |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly | assembly | 全部所列交换 | 批次台账及计量记录 | 型号、批次、日期、技术、物料编号、随附内容、领料、退料、库存变动、合格台数及质量、报废品、测试纸及色带、表读数、废物接收方 | 将称量的领退料与物料清单、计量日志、验收记录及废物转移记录核对 | kg; MJ; item | 每批次及计量间隔 | 一个已披露的连续生产期，包含停机及返工；报告季节代表性 | 一个工厂及已识别生产线 | 汇总可归属数量后除以合格净输出质量；批次比率须按输出加权 | 校准、供应商声明、物料清单版本、可追溯日志及平衡核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | assembly | x_i = 可归属批次数量_i / 批次合格打印机净质量。使用报告群组的全部批次。 | cp_assembly | kg/kg; MJ/kg |  |
| balance | assembly | 领用材料减退料等于交付材料、测试废物和报废品，加在制品净变化；依据计量不确定度调查差额。包装及耗材须可与打印机净质量区分。 | cp_assembly | 已核对批次平衡 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | reference_flow | 技术、接口、型号及随附件须与称量配置一致。 | cp_assembly; epson-lx350-specifications; zebra-zd400-specifications |
| coverage | assembly | 覆盖完整物料清单，不重复计入采购组件内容。列出排除项及不确定性；缺失交换数据不等于零。 | cp_assembly |
| range_evidence | amounts | 使用实测前景值。本PCR不提供外部数量范围；型号规格不是相互独立的生产基准。 | cp_assembly |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_printer | 要求合格输出质量为正，声明单台质量及全部参考限定信息；拒绝喷墨、激光及多功能身份。 | un-cpc-3-0-notes-2025 |
| validate_atomic | inventory | 每项交换须为原子交换、量纲一致、可追溯至cp_assembly，并具有真实UUID或明确未解决身份；拒绝汇总类别流。 |  |
| validate_balance | assembly | 核验库存调整后的质量平衡、电力分配、重复测试覆盖及路线适用性。调查差额，不得虚构交换以强制平衡。 |  |
| validate_scope | result | 要求明确披露部分边界，并将上游及下游追加内容单独列示；仅凭从厂门到厂门结果不得进行全寿命服务比较。 | ghg-protocol-product-standard |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为型号特定的工厂装配数据，输入有记录的更广生命周期系统。 |
| excluded_use | 无条件的完整生命周期足迹、通用服务比较，或替代喷墨及激光制造数据。 |
| required_metadata | 参考限定信息、时间、地理、型号、自制外购划分、上游链接、过程边界及分配。 |
| required_quality_disclosure | 未解决身份、缺失交换、未提供范围、平衡差额、不确定性及代表性。 |
| update_trigger | 型号、物料清单、固件或场址变化；新增计量、供应数据、废物路线或已解决流身份。 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UNSD CPC 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 检索日期 2026-09-09 | 分类身份 |
| un-cpc-3-0-notes-2025 | official_guidance | UNSD CPC 3.0 Explanatory Notes, p. 247; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; 检索日期 2026-09-09 | 连接能力及排除的打印机类别 |
| epson-lx350-specifications | handbook | Epson LX-350 User Guide: Printer Specifications; https://files.support.epson.com/htmldocs/lx350_/lx350_ug/html/apspe_2.htm; 检索日期 2026-09-09 | 针式打印机示例、纸张与色带区别及性能限定信息；不提供默认数量 |
| zebra-zd400-specifications | handbook | Zebra ZD400 Series Desktop Printers Specification Sheet; https://www.zebra.com/us/en/products/spec-sheets/printers/desktop/zd400-series.html; 检索日期 2026-09-09 | 热敏技术、连接能力及随附电源；不提供默认数量 |
| zebra-thermal-media | handbook | Zebra ZD421/ZD621 User Guide: Types of Thermal Media; https://docs.zebra.com/us/en/printers/desktop/zd421-and-zd621-desktop-printers-user-guide/media/types-of-thermal-media.html; 检索日期 2026-09-09 | 热敏卷材与底纸区别 |
| ghg-protocol-product-standard | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, chapters 7 and 9; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; 检索日期 2026-09-09 | 部分边界披露及分配层级；仅用于温室气体方法，不表示本PCR已获认证 |
