---
pcr_id: pcr.constructions-and-construction-services.construction-services.electrical-wiring-and-fitting-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 螺钉端子接地双联插座配件安装服务

## 1. 范围与适用性

本 PCR 适用于室内非电子式 15 A、125 V 接地双联插座在单路供电电路中的首次安装。安装方将已准备好的兼容铜导线接至侧面螺钉端子，在现有合适接线盒内固定插座、安装面板，并在具备相应能力人员控制下恢复供电，交付已测试并验收的安装成品。物理接口和签署验收记录界定该服务；品牌本身不决定类别归属。

范围排除分支电路新建或延长、新接线盒或配电盘、既有插座拆除或更换、分路供电改造、插入式接线、GFCI/AFCI 及电子或智能插座、火灾或防盗报警、电信、家电，以及交付后的用电。基材钻孔和电缆延长不属于所选路线。制造商说明用于说明路线；实际兼容性和验收由交付型号的说明及适用辖区要求和设计决定。[leviton-receptacle-installation; leviton-5320-product]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.electrical-wiring-and-fitting-services |
| classification_refs | CPC 3.0 54611; narrower |
| covered_products | 首次安装的接地、单路供电、螺钉端子双联插座配件，含面板及验收记录。 |
| excluded_products | 第 1 节排除的施工、更换、接线方式、电子器件及后续使用活动。 |
| representative_product | Leviton 5320 系列接地双联插座作为示例，不据此设定通用质量、导线规格或安装清单。 |
| production_route | 接收插座和面板；核查已准备接口并隔离和确认断电；准备导线并侧面端接；固定插座和面板；受控恢复供电；测试、纠正、复测并签署验收。 |
| market_state | 签署安装方交付时的完整已安装配件，附已披露的现有电路、接线盒和接地接口。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 安装方交付时已验收的首次安装接地单路供电双联插座配件（含面板） |
| How much | 1 Item(s) |
| How well | 准确型号及额定值、螺钉端子兼容铜导线材质和规格；单路供电状态；合适的现有接线盒、电路和接地；面板和紧固件包含关系；设计和辖区要求；隔离及确认断电、端接、接地、极性和功能测试记录；纠正与复测闭环以及签署验收。 |
| How long or cycle | 一个从接收到验收的作业周期，含未成功尝试和复测。将作业日期关联到各共享资源的购置/制造、服务/报告期、维护/更换及退役/终止阶段；不主张运行年的功能收益。 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 安装方交付时已验收的首次安装接地单路供电双联插座配件（含面板） |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 型号/额定值；导线材质/规格和螺钉端子兼容性；单路供电配置；现有接线盒/电路/接地责任；供应面板/紧固件；辖区/设计；隔离/确认断电记录；端接/接地/极性/功能测试；纠正/复测结果；安装日期；签署验收。 |

归一化前，独立清点同一披露配置下已验收完整安装的数量 D；D 必须为正。部件数量、测试次数和进度百分比均不能替代 D。实质不同配置应分开，除非有等效证据。一个计数输出不存在质量等价公式。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性（`required_property`） | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_basis | 参考产品；owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution；hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 使用独立证实为正的 D 及相同作业/配置边界。Item(s) 按适用情形表示完整验收输出、准确可重复使用资产的份额或真实完整合同事件。 |
| mass_conversion | receptacle; plate_and_fixings_wallplate; plate_and_fixings_permanent_fixing; atomic_plate_and_fixings; atomic_incoming_packaging; unused_product_return_receptacle_return; unused_product_return_wallplate_return; unused_product_return_fixing_return; atomic_unused_product_return; installation_waste_conductor_offcut; installation_waste_failed_receptacle; installation_waste_failed_wallplate; installation_waste_failed_fixing; atomic_installation_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用经校准的净重称量或可追溯的同 SKU 计数/长度转质量系数。保留系数、单位和不确定性；异质总量仅作诊断，不是单一交换。 |
| energy_preservation | installation_electricity | Energy | kWh | 保留实际供应的计量 kWh 及电表/供应方/电压边界。Energy 支持身份尚未核实；不得以净热值、Ah、额定功率或经过时间代替实际电能。 |
| contract_reference | hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅对有准确服务定义的真实完整采购事件计数。按小时合同需要 Duration 支持和审查；不得虚构计数事件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合适的现有接线盒，兼容且已准备的单路电路、导线和接地接口经确认就绪，同时接收实际插座及面板供应。 |
| starting_condition_role | 披露的既有接口；就绪状态既非新供应，也非抵扣。 |
| product_classification_scope | CPC 3.0 54611 下较窄的电气配件服务，不覆盖全部布线或配件技术。 |
| recursive_input_rule | 采购同类别先前安装服务时，须识别实际输入状态及不重叠的上游交付点；不得递归重放已验收安装或重复计数。未经审查的扩围需要单独范围审查。 |
| upstream_dataset_requirement | 将准确供应匹配至上游制造、实际入场交付和包装包含边界，每项负荷只归属一次。 |
| disclosure | 披露既有电路/接线盒/接地的权责及适用性、接收和交付日期、供应包含项、实际型号说明/设计、共享资源期间及所有缺项。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本 PCR 适用于室内非电子式 15 A、125 V 接地双联插座在单路供电电路中的首次安装。安装方将已准备好的兼容铜导线接至侧面螺钉端子，在现有合适接线盒内固定插座、安装面板，并在具备相应能力人员控制下恢复供电，交付已测试并验收的安装成品。物理接口和签署验收记录界定该服务；品牌本身不决定类别归属。 范围排除分支电路新建或延长、新接线盒或配电盘、既有插座拆除或更换、分路供电改造、插入式接线、GFCI/AFCI 及电子或智能插座、火灾或防盗报警、电信、家电，以及交付后的用电。基材钻孔和电缆延长不属于所选路线。制造商说明用于说明路线；实际兼容性和验收由交付型号的说明及适用辖区要求和设计决定。[leviton-receptacle-installation; leviton-5320-product] | `leviton-receptacle-installation`; `leviton-5320-product` |
| installation_gate | install_accept | 安装方负责接收及到场供应、插座/面板/永久紧固件集成、安全核查、端接、固定、受控恢复供电、测试、纠正、复测和签署交付。准备导线/接线盒的施工及交付后使用在此交付点之外。 | `leviton-receptacle-installation`; `leviton-5320-product` |
| supply_custody | install_accept | 即使上游制造已含包装，仍追踪实际入场包装。仅当上游排除包装时另计其负荷；使用交付/包装包含台账避免重复。 |  |
| resource_boundary | install_accept | 准确的安装方自有工具、测试仪、外部充电器和登高资产可能服务于其他作业及报告期的 install_accept 实例；在 cp_services 中枚举每个使用方和阶段。出租服务方承担所租资产生命周期；记录已包含的前景能源。 |  |
| period_gate | install_accept | 分别索引制造/购置、各服务/报告期、维护/更换及退役/终止。将输入、资产、验收输出和事件关联到作业和期间；剩余使用期或终止证据未解决时不能完成最终归属。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_accept | 插座安装、测试和验收 | required | 已证明所选首次安装范围和准备接口。 | 将供应插座、面板和永久紧固件与准备导线集成；独立负责端接、固定、测试和验收。 | accepted_installation |

所有接收、端接、紧固和验收责任均属于此单一集成节点。端子松动/不正确、极性错误、接地不合格或功能测试失败均为未验收状态：识别实际缺陷和原作业事件，在 install_accept 内纠正复测，或记录带接收方的可用退货或按材质区分的废物出界。降级或回收需要实际去向和证据，且绝非已验收安装。损失保留在原作业负荷中；未完成或未解决故障的插座不得增加 D。不引入仅代表阶段的交换。

### 过程：插座安装、测试和验收 (`install_accept`)

每张条件卡要求按 SKU、材质/状态和接收方确定零个、一个或多个实际交换，而不是固定的混合身份。只有明确活动/保管证据方可确认不存在。缺失记录绝不表示零。尚未建立通用数量界限；下述各卡证据需求需在完整数据包中解决。

#### 输入

##### 产品流

###### 供应接地双联插座 (`receptacle`)

安装前接收的实际兼容、非电子式 15 A、125 V 单路供电铜线螺钉端子插座；其随附螺钉在此只计一次。 数量范围证据需求：任何每次安装范围均需匹配型号/SKU 的供应净重及安装、库存、退货和故障数量。

- 选定流：供应接地双联插座
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实际归属的插座供应净质量 / D；保留独立接收记录和材料核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_materials`
- 来源：`leviton-receptacle-installation`; `leviton-5320-product`

###### 单独供应的插座面板 (`plate_and_fixings_wallplate`)

单独供应的插座面板是原plate_and_fixings范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：确定每个实际面板及另供紧固件；按材质/SKU 分开，排除已随插座包含的五金。

- 选定流：单独供应的插座面板
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_plate_and_fixings_wallplate_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 单独供应的插座永久紧固件 (`plate_and_fixings_permanent_fixing`)

单独供应的插座永久紧固件是原plate_and_fixings范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：确定每个实际面板及另供紧固件；按材质/SKU 分开，排除已随插座包含的五金。

- 选定流：单独供应的插座永久紧固件
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_plate_and_fixings_permanent_fixing_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。



###### 自有安装手工具生命周期份额 (`owned_equipment_attribution_hand_tool`)

自有安装手工具生命周期份额是原owned_equipment_attribution范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按制造商/型号/序列号确定每件实际使用的手动/电动工具、测试仪、外部充电器和登高资产。这是资源生命周期份额，不是永久插座部件或假定的全新整件工具。

- 选定流：自有安装手工具生命周期份额
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本对象保留原PCR方法及分母D：自有资产使用原完整生命周期物理活动份额a_rj=A_rj/sum(A_rk)，正且完整的全部消费者分母、各期间及制造/维护/更换/寿命终结责任必须有证据，独立子对象的资产份额只除以D一次。外购服务仅在实际合同明确以Item(s)计量本卡完成的物理事件时，以独立签署的完整事件数及实际消费者份额计量，再除以D一次；小时租赁或其他单位不得换成虚构次数，须保留为未解决细化要求。排除已含能源、运输、操作员或资产负担的重复项。不得复制父量或Range；缺完整生命周期、任务定义、实际单位或分配证据即阻断完成。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 自有动力安装工具生命周期份额 (`owned_equipment_attribution_powered_tool`)

自有动力安装工具生命周期份额是原owned_equipment_attribution范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按制造商/型号/序列号确定每件实际使用的手动/电动工具、测试仪、外部充电器和登高资产。这是资源生命周期份额，不是永久插座部件或假定的全新整件工具。

- 选定流：自有动力安装工具生命周期份额
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本对象保留原PCR方法及分母D：自有资产使用原完整生命周期物理活动份额a_rj=A_rj/sum(A_rk)，正且完整的全部消费者分母、各期间及制造/维护/更换/寿命终结责任必须有证据，独立子对象的资产份额只除以D一次。外购服务仅在实际合同明确以Item(s)计量本卡完成的物理事件时，以独立签署的完整事件数及实际消费者份额计量，再除以D一次；小时租赁或其他单位不得换成虚构次数，须保留为未解决细化要求。排除已含能源、运输、操作员或资产负担的重复项。不得复制父量或Range；缺完整生命周期、任务定义、实际单位或分配证据即阻断完成。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 自有电气测试仪生命周期份额 (`owned_equipment_attribution_electrical_tester`)

自有电气测试仪生命周期份额是原owned_equipment_attribution范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按制造商/型号/序列号确定每件实际使用的手动/电动工具、测试仪、外部充电器和登高资产。这是资源生命周期份额，不是永久插座部件或假定的全新整件工具。

- 选定流：自有电气测试仪生命周期份额
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本对象保留原PCR方法及分母D：自有资产使用原完整生命周期物理活动份额a_rj=A_rj/sum(A_rk)，正且完整的全部消费者分母、各期间及制造/维护/更换/寿命终结责任必须有证据，独立子对象的资产份额只除以D一次。外购服务仅在实际合同明确以Item(s)计量本卡完成的物理事件时，以独立签署的完整事件数及实际消费者份额计量，再除以D一次；小时租赁或其他单位不得换成虚构次数，须保留为未解决细化要求。排除已含能源、运输、操作员或资产负担的重复项。不得复制父量或Range；缺完整生命周期、任务定义、实际单位或分配证据即阻断完成。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 自有工具外置充电器生命周期份额 (`owned_equipment_attribution_external_charger`)

自有工具外置充电器生命周期份额是原owned_equipment_attribution范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按制造商/型号/序列号确定每件实际使用的手动/电动工具、测试仪、外部充电器和登高资产。这是资源生命周期份额，不是永久插座部件或假定的全新整件工具。

- 选定流：自有工具外置充电器生命周期份额
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本对象保留原PCR方法及分母D：自有资产使用原完整生命周期物理活动份额a_rj=A_rj/sum(A_rk)，正且完整的全部消费者分母、各期间及制造/维护/更换/寿命终结责任必须有证据，独立子对象的资产份额只除以D一次。外购服务仅在实际合同明确以Item(s)计量本卡完成的物理事件时，以独立签署的完整事件数及实际消费者份额计量，再除以D一次；小时租赁或其他单位不得换成虚构次数，须保留为未解决细化要求。排除已含能源、运输、操作员或资产负担的重复项。不得复制父量或Range；缺完整生命周期、任务定义、实际单位或分配证据即阻断完成。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 自有作业通达设备生命周期份额 (`owned_equipment_attribution_access_asset`)

自有作业通达设备生命周期份额是原owned_equipment_attribution范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按制造商/型号/序列号确定每件实际使用的手动/电动工具、测试仪、外部充电器和登高资产。这是资源生命周期份额，不是永久插座部件或假定的全新整件工具。

- 选定流：自有作业通达设备生命周期份额
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本对象保留原PCR方法及分母D：自有资产使用原完整生命周期物理活动份额a_rj=A_rj/sum(A_rk)，正且完整的全部消费者分母、各期间及制造/维护/更换/寿命终结责任必须有证据，独立子对象的资产份额只除以D一次。外购服务仅在实际合同明确以Item(s)计量本卡完成的物理事件时，以独立签署的完整事件数及实际消费者份额计量，再除以D一次；小时租赁或其他单位不得换成虚构次数，须保留为未解决细化要求。排除已含能源、运输、操作员或资产负担的重复项。不得复制父量或Range；缺完整生命周期、任务定义、实际单位或分配证据即阻断完成。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。


###### 交付前供应电力 (`installation_electricity`)

确定外部工具/充电器/测试和调试用电的实际供应方、电压、场址和电表边界。不含插座后续使用用电。 数量范围证据需求：需要电表差值、共享活动、已含测试负载和准确 Energy 支持；功率或电池容量不能提供范围。

- 选定流：交付前供应电力
- 流属性/单位：Energy / kWh
- 数量规则：实际归属的计量电力 / D；保留 kWh 和前景包含台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`

###### 已完成的合同安装运输事件 (`hired_support_service_transport_event`)

已完成的合同安装运输事件是原hired_support_service范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：确定每个真实采购的运输/登高/测试/支持事件及服务配置。服务方承担设备生命周期；识别已包含前景能源。按小时租用等待 Duration 支持和审查。

- 选定流：已完成的合同安装运输事件
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本对象保留原PCR方法及分母D：自有资产使用原完整生命周期物理活动份额a_rj=A_rj/sum(A_rk)，正且完整的全部消费者分母、各期间及制造/维护/更换/寿命终结责任必须有证据，独立子对象的资产份额只除以D一次。外购服务仅在实际合同明确以Item(s)计量本卡完成的物理事件时，以独立签署的完整事件数及实际消费者份额计量，再除以D一次；小时租赁或其他单位不得换成虚构次数，须保留为未解决细化要求。排除已含能源、运输、操作员或资产负担的重复项。不得复制父量或Range；缺完整生命周期、任务定义、实际单位或分配证据即阻断完成。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 已完成的合同安装通达事件 (`hired_support_service_access_event`)

已完成的合同安装通达事件是原hired_support_service范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：确定每个真实采购的运输/登高/测试/支持事件及服务配置。服务方承担设备生命周期；识别已包含前景能源。按小时租用等待 Duration 支持和审查。

- 选定流：已完成的合同安装通达事件
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本对象保留原PCR方法及分母D：自有资产使用原完整生命周期物理活动份额a_rj=A_rj/sum(A_rk)，正且完整的全部消费者分母、各期间及制造/维护/更换/寿命终结责任必须有证据，独立子对象的资产份额只除以D一次。外购服务仅在实际合同明确以Item(s)计量本卡完成的物理事件时，以独立签署的完整事件数及实际消费者份额计量，再除以D一次；小时租赁或其他单位不得换成虚构次数，须保留为未解决细化要求。排除已含能源、运输、操作员或资产负担的重复项。不得复制父量或Range；缺完整生命周期、任务定义、实际单位或分配证据即阻断完成。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 已完成的合同交付前测试事件 (`hired_support_service_test_event`)

已完成的合同交付前测试事件是原hired_support_service范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：确定每个真实采购的运输/登高/测试/支持事件及服务配置。服务方承担设备生命周期；识别已包含前景能源。按小时租用等待 Duration 支持和审查。

- 选定流：已完成的合同交付前测试事件
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本对象保留原PCR方法及分母D：自有资产使用原完整生命周期物理活动份额a_rj=A_rj/sum(A_rk)，正且完整的全部消费者分母、各期间及制造/维护/更换/寿命终结责任必须有证据，独立子对象的资产份额只除以D一次。外购服务仅在实际合同明确以Item(s)计量本卡完成的物理事件时，以独立签署的完整事件数及实际消费者份额计量，再除以D一次；小时租赁或其他单位不得换成虚构次数，须保留为未解决细化要求。排除已含能源、运输、操作员或资产负担的重复项。不得复制父量或Range；缺完整生命周期、任务定义、实际单位或分配证据即阻断完成。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。


##### 废物流

本插座安装路线不含输入废物。

##### 基本流

不设默认直接资源开采。

#### 输出

##### 产品流

###### 可用原态插座外退 (`unused_product_return_receptacle_return`)

可用原态插座外退是原unused_product_return范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：确定每个未经转化而离开安装方保管的可用部件/材料；保留 SKU 和原供应身份、接收及退货事件、状态和接收方。

- 选定流：可用原态插座外退
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_unused_product_return_receptacle_return_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 可用原态面板外退 (`unused_product_return_wallplate_return`)

可用原态面板外退是原unused_product_return范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：确定每个未经转化而离开安装方保管的可用部件/材料；保留 SKU 和原供应身份、接收及退货事件、状态和接收方。

- 选定流：可用原态面板外退
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_unused_product_return_wallplate_return_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 可用原态永久紧固件外退 (`unused_product_return_fixing_return`)

可用原态永久紧固件外退是原unused_product_return范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：确定每个未经转化而离开安装方保管的可用部件/材料；保留 SKU 和原供应身份、接收及退货事件、状态和接收方。

- 选定流：可用原态永久紧固件外退
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_unused_product_return_fixing_return_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。


###### 安装方交付时已验收的首次安装接地单路供电双联插座配件（含面板） (`accepted_installation`)

仅已完成、测试并签署的声明配置安装计入 D。每次纠正/复测保留与原 install_accept 事件的关联。

- 选定流：安装方交付时已验收的首次安装接地单路供电双联插座配件（含面板）
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：1 Item(s)
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_acceptance`
- 来源：`leviton-receptacle-installation`; `leviton-5320-product`

##### 废物流

###### 丢弃导体边角料 (`installation_waste_conductor_offcut`)

丢弃导体边角料是原installation_waste范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按材质/状态/危险特性及获授权接收方分别确定包装、导线边角料和拆下故障部件的废物。保留原领用/返工事件。工具电子部件/电池残余仅在自有资源生命周期确实承担其处置事件时纳入；电子式插座不在范围内。

- 选定流：丢弃导体边角料
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_installation_waste_conductor_offcut_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 丢弃不合格完整插座 (`installation_waste_failed_receptacle`)

丢弃不合格完整插座是原installation_waste范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按材质/状态/危险特性及获授权接收方分别确定包装、导线边角料和拆下故障部件的废物。保留原领用/返工事件。工具电子部件/电池残余仅在自有资源生命周期确实承担其处置事件时纳入；电子式插座不在范围内。

- 选定流：丢弃不合格完整插座
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_installation_waste_failed_receptacle_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 丢弃不合格面板 (`installation_waste_failed_wallplate`)

丢弃不合格面板是原installation_waste范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按材质/状态/危险特性及获授权接收方分别确定包装、导线边角料和拆下故障部件的废物。保留原领用/返工事件。工具电子部件/电池残余仅在自有资源生命周期确实承担其处置事件时纳入；电子式插座不在范围内。

- 选定流：丢弃不合格面板
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_installation_waste_failed_wallplate_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 丢弃不合格永久紧固件 (`installation_waste_failed_fixing`)

丢弃不合格永久紧固件是原installation_waste范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：按材质/状态/危险特性及获授权接收方分别确定包装、导线边角料和拆下故障部件的废物。保留原领用/返工事件。工具电子部件/电池残余仅在自有资源生命周期确实承担其处置事件时纳入；电子式插座不在范围内。

- 选定流：丢弃不合格永久紧固件
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_installation_waste_failed_fixing_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母D归一化一次，D=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。


##### 基本流

不得从导线准备或未解释平衡残差推断通用排放。若有实际直接释放证据，在 cp_releases 中识别物种/粒径及接收介质、实测或有依据的方法、捕集与排放比例及原作业。添加具体交换前，此类证据须经范围/身份审查；不得以笼统粉尘或 VOC 虚构污染物 UUID。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| reject_burden | install_accept | 不假定预期联产品。未成功工作、损坏输入、纠正工作及复测保留在原验收作业负荷中。返工留在 install_accept；可用退货和实际废物/回收/丢弃出界需要事件、状态和接收方。未解决不合格品不计入验收输出，退货不获避免生产抵扣。 |  |
| resource_share | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | 对准确资源 r 和作业 j，a_rj = A_rj / sum(A_rk)，k 包括同一资源生命周期资料包内所有受益作业，采用共同的因果物理活动基准。要求分母完整且为正，sum(a_rj) = 1。归属资产数量为 a_rj / D Item(s)，负荷为 B_r * a_rj / D。记录期间特定份额及证据；使用不同的情况下不适合按输出计数分配。不得虚构寿命或遗漏其他作业。 |  |
| phase_reconciliation | install_accept | 将资源制造/购置、各服务/报告期、维护/更换和退役/终止关联到可识别资料包、作业和日期。更换有其自身实际事件；明确剩余使用不确定性。阶段总量只核对一次，每个资料包只计一次；租用服务已含服务方资产制造时，不另作安装方输入。作业特定损失保留在其作业责任下。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_accept | 验收安装及纠正 | job_acceptance | 作业/配置/型号/额定值；BOM；电路/接线盒/接地/设计；隔离/确认断电；端接/接地/极性/功能测试结果；失败/纠正/复测事件；日期；签字；独立清点 D | 检查实际范围及兼容接口；保留具备相应能力人员的测试及签署验收记录，将完整验收作业与部件、尝试及不合格状态分开核对。 由独立完整验收安装计数确定正的 D。 | Item(s) | 每个作业及复测 | 接收到签署验收 | 声明的室内插座场址/配置 | 每参考流 | 签署测试；排除项核对；日期及配置覆盖 |
| cp_materials | install_accept | 供应、包装及可用退货 | material_custody | 批次/作业/日期；SKU/材质/状态；净重；计数/长度及匹配系数；安装/库存/退货/废物；接收/退货接收方；上游制造/交付/包装包含项; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | 经校准设备称量净数量，或采用可追溯同 SKU 转换记录；跟踪各来源池从接收到安装保留、期末库存及原事件关联出界。 按 SKU 和状态计算实际归属质量 / D。 保留上述PCR原定库存、事件、分母、归属及闭合方法。按节点、期间和parent_ledger_id保留实际子流名册。每个有数量的交换只表示一个独立实物产品、完整配方/组件、已定义有界服务、实际废物载体或物种/介质，并使用唯一固定property/unit及独立采集的物理分子。保留原全部角色、纠正、库存/在制品和去向记录。原集合量仅为非交换保管或闭合诊断，不得将集合总量或Range复制或按比例分给子流，不得把不同单位加成交换。实际SKU、状态、供应方或接收方构成独立交换时分别记录。完整供货包及其已含组成互斥；同一实体电缆承担多用途时只计一次。实际子流名册、数量、发生/未发生证据、身份/状态/介质、方法或单位支持缺失均阻断前景数据完成，不得记零或默认不适用。现场记录提供操作数，不能另选参考分母、分配、库存或去向约定。 actual_<row_id>_quantity是本CP按atomic_flow_row_id记录的独立物理分子independent_physical_quantity的具名别名，遵循atomic_child_normalization；不是新增观测或父集合复制量。 实际子流记录保留legacy_parent_role和own_node_helper_id；child_quantity_operands按原role helper声明的每个操作数独立采集，按quantity_ledger_group_key的物料/来源状态/当前状态/期间/单位分组；真实内部发送与接收用paired_atomic_row_id及actual_transfer_event_id匹配，不从父总量或残差倒算。 内部配对的I=F是同实际物料/SKU、状态、事件、保管边界及gate的对账条件，不是给子流赋值的公式。每子卡保留自己的实际发送量和接收/保管证据；同一有签收的计量凭证可追溯复用，不虚构重新称量。不得复制父集合量给每个子流，不覆盖真实接收记录，不以未知强设相等。差异保留原值及单位、计量不确定性、真实转移损失、状态改变和责任方证据，未查清即阻断完成。全部内部数量为未归一化实物量，仅在各卡最后除原参考分母一次；父role求和仅QA。 | kg | 每批接收和保管事件 | 期初库存到作业闭合 | 归属声明作业的所有供应 | 每参考流 | 校准；系数/SKU 匹配；供应方边界；接收方及残差台账 |
| cp_energy | install_accept | 供应的交付前电力 | meter_record | 供应方/电压/场址/电表；作业/工具/充电器/测试/负载；起止 kWh 和日期；全部共享使用方/活动；合同能源包含项 | 读取声明边界的实际电表差值，按记录活动归属共享供应；保留原始电能，与额定功率、Ah 及经过时间区分。 实际归属 kWh / D。 | kWh | 每项计量活动/期间 | 仅安装至验收 | 声明电表及全部受益使用方 | 每参考流 | 电表校准/分辨率；包含台账；完整活动分母；Energy 支持缺口 |
| cp_services | install_accept | 自有资产与采购支持 | resource_lifecycle | 制造商/型号/序列号或服务方/合同/事件；所有权；参考单位；每个使用节点/作业和期间；物理活动 A_rj 及完整 sum(A_rk)；制造/购置/服务/维护/更换/退役资料包；B_r；剩余使用；能源包含项; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | 跨所有作业和阶段核对准确资产及合同日志；记录各期实际因果份额决定和采购完整事件；区分按小时租用及未解决 Duration 支持。 归属资源份额或完整事件计数 / D。 保留上述PCR原定库存、事件、分母、归属及闭合方法。按节点、期间和parent_ledger_id保留实际子流名册。每个有数量的交换只表示一个独立实物产品、完整配方/组件、已定义有界服务、实际废物载体或物种/介质，并使用唯一固定property/unit及独立采集的物理分子。保留原全部角色、纠正、库存/在制品和去向记录。原集合量仅为非交换保管或闭合诊断，不得将集合总量或Range复制或按比例分给子流，不得把不同单位加成交换。实际SKU、状态、供应方或接收方构成独立交换时分别记录。完整供货包及其已含组成互斥；同一实体电缆承担多用途时只计一次。实际子流名册、数量、发生/未发生证据、身份/状态/介质、方法或单位支持缺失均阻断前景数据完成，不得记零或默认不适用。现场记录提供操作数，不能另选参考分母、分配、库存或去向约定。 actual_<row_id>_quantity是本CP按atomic_flow_row_id记录的独立物理分子independent_physical_quantity的具名别名，遵循atomic_child_normalization；不是新增观测或父集合复制量。 实际子流记录保留legacy_parent_role和own_node_helper_id；child_quantity_operands按原role helper声明的每个操作数独立采集，按quantity_ledger_group_key的物料/来源状态/当前状态/期间/单位分组；真实内部发送与接收用paired_atomic_row_id及actual_transfer_event_id匹配，不从父总量或残差倒算。 内部配对的I=F是同实际物料/SKU、状态、事件、保管边界及gate的对账条件，不是给子流赋值的公式。每子卡保留自己的实际发送量和接收/保管证据；同一有签收的计量凭证可追溯复用，不虚构重新称量。不得复制父集合量给每个子流，不覆盖真实接收记录，不以未知强设相等。差异保留原值及单位、计量不确定性、真实转移损失、状态改变和责任方证据，未查清即阻断完成。全部内部数量为未归一化实物量，仅在各卡最后除原参考分母一次；父role求和仅QA。 | Item(s) | 每次使用、事件及阶段变化 | 完整资源资料包、全部服务/报告期及终止 | install_accept 实例及其他所有受益作业/期间 | 每参考流 | 完整使用方名单；正的活动分母；份额闭合；服务方所有权；剩余寿命不确定性 |
| cp_releases | install_accept | 废物出界及直接释放证据 | exit_record | 原领用/返工/作业/日期；材质/SKU/状态/危险特性；废物/退货联单及接收方；净重；捕集/保留/排放区分；物种/粒径/接收介质；实测或有依据的方法及不确定性; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | 将接收方联单与原保管和缺陷事件核对；分别采集相关释放证据、捕集废物与未解释残差，披露全部闭合缺口。 各项有证据可归属出界质量 / D。 保留上述PCR原定库存、事件、分母、归属及闭合方法。按节点、期间和parent_ledger_id保留实际子流名册。每个有数量的交换只表示一个独立实物产品、完整配方/组件、已定义有界服务、实际废物载体或物种/介质，并使用唯一固定property/unit及独立采集的物理分子。保留原全部角色、纠正、库存/在制品和去向记录。原集合量仅为非交换保管或闭合诊断，不得将集合总量或Range复制或按比例分给子流，不得把不同单位加成交换。实际SKU、状态、供应方或接收方构成独立交换时分别记录。完整供货包及其已含组成互斥；同一实体电缆承担多用途时只计一次。实际子流名册、数量、发生/未发生证据、身份/状态/介质、方法或单位支持缺失均阻断前景数据完成，不得记零或默认不适用。现场记录提供操作数，不能另选参考分母、分配、库存或去向约定。 actual_<row_id>_quantity是本CP按atomic_flow_row_id记录的独立物理分子independent_physical_quantity的具名别名，遵循atomic_child_normalization；不是新增观测或父集合复制量。 实际子流记录保留legacy_parent_role和own_node_helper_id；child_quantity_operands按原role helper声明的每个操作数独立采集，按quantity_ledger_group_key的物料/来源状态/当前状态/期间/单位分组；真实内部发送与接收用paired_atomic_row_id及actual_transfer_event_id匹配，不从父总量或残差倒算。 内部配对的I=F是同实际物料/SKU、状态、事件、保管边界及gate的对账条件，不是给子流赋值的公式。每子卡保留自己的实际发送量和接收/保管证据；同一有签收的计量凭证可追溯复用，不虚构重新称量。不得复制父集合量给每个子流，不覆盖真实接收记录，不以未知强设相等。差异保留原值及单位、计量不确定性、真实转移损失、状态改变和责任方证据，未查清即阻断完成。全部内部数量为未归一化实物量，仅在各卡最后除原参考分母一次；父role求和仅QA。 | kg | 每次出界或有证据释放 | 接收/纠正至闭合，仅在可归属时包含自有生命周期事件 | 声明作业及实际获授权接收方 | 每参考流 | 接收方联单；校准质量；危险特性/状态证据；释放方法；闭合容差及缺口 |

### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | source_ids |
| --- | --- | --- | --- | --- | --- |
| actual_normalization | 所有非参考清单行 | q_i = N_i / D；N_i 为独立采集的、以本行单位表示的可归属实际分子；D 为独立清点、为正的同配置完整验收安装数量。保留原始 N_i 及其协议；不得从目标参考数量反求 N_i。 | N_i; D; cp_acceptance; cp_materials; cp_energy; cp_services; cp_releases | q_i |  |
| custody_closure | receptacle; plate_and_fixings_wallplate; plate_and_fixings_permanent_fixing; atomic_plate_and_fixings; atomic_incoming_packaging; unused_product_return_receptacle_return; unused_product_return_wallplate_return; unused_product_return_fixing_return; atomic_unused_product_return; installation_waste_conductor_offcut; installation_waste_failed_receptacle; installation_waste_failed_wallplate; installation_waste_failed_fixing; atomic_installation_waste | 对每个可识别来源池，期初库存 + 接收 = 安装保留材料 + 期末库存 + 可用退货 + 实际废物 + 已识别释放 + 残差。记录容差和残差；未解决质量是缺口而非粉尘。异质质量总量仅作诊断。 | cp_materials; cp_releases | 来源池闭合及残差 |  |
| asset_attribution | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution | a_rj = A_rj / sum(A_rk)；归属数量 = a_rj / D；归属负荷 = B_r * a_rj / D。将 resource_share 应用于完整生命周期资料包，每个期间特定责任及阶段总量仅保留一次。 | A_rj; A_rk; B_r; D; cp_services | 资产数量及负荷份额 |  |
| atomic_child_normalization | plate_and_fixings_wallplate; plate_and_fixings_permanent_fixing; owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; unused_product_return_receptacle_return; unused_product_return_wallplate_return; unused_product_return_fixing_return; installation_waste_conductor_offcut; installation_waste_failed_receptacle; installation_waste_failed_wallplate; installation_waste_failed_fixing | 按atomic_flow_row_id逐条记录独立子流物理分子independent_physical_quantity。actual_<row_id>_quantity只是该子流记录的具名别名，不是父集合量。材料输入沿用原CP规定的库存毛量/净量及外退约定，独立称量或同SKU换算后核对；内转按实际配对交接量；可用外退和废物各按实际独立去向量。自有资产子流物理量为原方法a_rj=A_rj/sum(A_rk)的完整生命周期资产等价值，全部消费者及正分母必须完整；外购服务子流仅用实际合同已定义Item(s)的完整事件数及原归属份额，不以小时或价格伪造次数。atomic_child_intensity = independent_physical_quantity / D，D由cp_acceptance独立确认的原同配置完整验收安装数量；D=0阻断归一化，不更换分母或分配方法。 | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; D; cp_acceptance; cp_materials; cp_services; cp_releases | atomic_child_intensity |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| configuration_quality | install_accept | 匹配场址、期间、型号、技术说明、单路供电状态、接口、BOM 和验收。不得将示例产品规格移植到所有安装。 | cp_acceptance；实际型号/设计记录 |
| measurement_quality | 所有清单行 | 保留校准、可追溯 SKU 特定转换、原始分子和独立正 D。缺失数据及条件性不存在均需证据；不得补零。 | 所有关联协议及不确定性台账 |
| identity_quality | 所有清单行 | 保留实际功能/状态/交付点、准确属性/单位支持及分开的具体交换；不支持的 UUID、Energy/Duration 和数量范围证据保留为明确缺口。 | 实际前景身份及支持记录 |
| resource_quality | cp_services | 覆盖每个使用方、期间和阶段；记录因果决定、完整活动分母、剩余使用不确定性、份额闭合和唯一负荷归属。 | 序列号/合同日志；生命周期及包含资料包 |
| atomic_plate_and_fixings | install_accept; cp_materials | 原plate_and_fixings是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：确定每个实际面板及另供紧固件；按材质/SKU 分开，排除已随插座包含的五金。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_materials; actual_child_register; parent_ledger_id |
| atomic_incoming_packaging | install_accept; cp_materials | 原incoming_packaging是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：追踪各批次实际包装材质/SKU 的接收、库存和处置；制造负荷已嵌入上游时仍保留实际保管记录。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_materials; actual_child_register; parent_ledger_id |
| atomic_owned_equipment_attribution | install_accept; cp_services | 原owned_equipment_attribution是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：按制造商/型号/序列号确定每件实际使用的手动/电动工具、测试仪、外部充电器和登高资产。这是资源生命周期份额，不是永久插座部件或假定的全新整件工具。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_services; actual_child_register; parent_ledger_id |
| atomic_hired_support_service | install_accept; cp_services | 原hired_support_service是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：确定每个真实采购的运输/登高/测试/支持事件及服务配置。服务方承担设备生命周期；识别已包含前景能源。按小时租用等待 Duration 支持和审查。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_services; actual_child_register; parent_ledger_id |
| atomic_unused_product_return | install_accept; cp_materials | 原unused_product_return是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：确定每个未经转化而离开安装方保管的可用部件/材料；保留 SKU 和原供应身份、接收及退货事件、状态和接收方。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_materials; actual_child_register; parent_ledger_id |
| atomic_installation_waste | install_accept; cp_releases | 原installation_waste是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：按材质/状态/危险特性及获授权接收方分别确定包装、导线边角料和拆下故障部件的废物。保留原领用/返工事件。工具电子部件/电池残余仅在自有资源生命周期确实承担其处置事件时纳入；电子式插座不在范围内。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_releases; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | install_accept | 旧角色键只保留为原CP中的非交换库存、活动或闭合台账键。全部当前有数量的交换由具名子卡及其独立原始量表示；atomic_要求代表剩余实际对象名册的强制细化门槛，不代表一个混合交换。原计量、边界、分配、计算、质量和验证表的适用对象已迁至下列子卡/要求；原raw字段及运算量不因改名丢失，不能将父台账量再加一次。映射：plate_and_fixings => plate_and_fixings_wallplate, plate_and_fixings_permanent_fixing, atomic_plate_and_fixings; incoming_packaging => atomic_incoming_packaging; owned_equipment_attribution => owned_equipment_attribution_hand_tool, owned_equipment_attribution_powered_tool, owned_equipment_attribution_electrical_tester, owned_equipment_attribution_external_charger, owned_equipment_attribution_access_asset, atomic_owned_equipment_attribution; hired_support_service => hired_support_service_transport_event, hired_support_service_access_event, hired_support_service_test_event, atomic_hired_support_service; unused_product_return => unused_product_return_receptacle_return, unused_product_return_wallplate_return, unused_product_return_fixing_return, atomic_unused_product_return; installation_waste => installation_waste_conductor_offcut, installation_waste_failed_receptacle, installation_waste_failed_wallplate, installation_waste_failed_fixing, atomic_installation_waste | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | install_accept | 以下为每个子流的原role、节点、唯一单位及方法CP路由。对每个实际身份/状态子流独立执行其原role的计量、库存、来源/去向、返工、份额、单位转换与归一化方法：原helper/selector的role参数保留为legacy_parent_role，数量操作数改由该子流的独立记录提供；ROW_UNIT(child_row_id)为下列明确unit。只有同身份状态及相容原生单位可做库存或转移闭合；不同材料、介质、状态或单位分组核对。父总量只是非交换诊断，不能作为每个子流的输入或把不同单位相加。原helper方法不适用或所需实际转换、分母、证据缺失即阻断完成，不可由现场自选新方法。原量公式中的role命名变量仅保留为台账名，不能成为重复交换；如原role跨单位，按本映射和实际子流单位分别执行，不能沿用错误固定单位。路由：plate_and_fixings_wallplate => role=plate_and_fixings, node=install_accept, property=Mass, unit=kg, CP=cp_materials; plate_and_fixings_permanent_fixing => role=plate_and_fixings, node=install_accept, property=Mass, unit=kg, CP=cp_materials; owned_equipment_attribution_hand_tool => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_powered_tool => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_electrical_tester => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_external_charger => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_access_asset => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_transport_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_access_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_test_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; unused_product_return_receptacle_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_materials; unused_product_return_wallplate_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_materials; unused_product_return_fixing_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_materials; installation_waste_conductor_offcut => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_receptacle => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_wallplate => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_fixing => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| atomic_range_noninheritance | plate_and_fixings_wallplate; plate_and_fixings_permanent_fixing; owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; unused_product_return_receptacle_return; unused_product_return_wallplate_return; unused_product_return_fixing_return; installation_waste_conductor_offcut; installation_waste_failed_receptacle; installation_waste_failed_wallplate; installation_waste_failed_fixing | 本轮退休父卡的原数值范围、逐交换筛选指令及理由只在实施审计中保存，不适用于任何新子卡或父集合合计，也不按比例分配。每个新子流只保留独立数量、身份状态、计量换算、不确定性及可比独立观测的证据需求；只有审查确认其确实适用于该独立对象时，才能新增自己的范围。不得用本批最大值自证本批。未变且语义兼容单一对象的原范围保持其原性质。 | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | 内部配对的I=F是同实际物料/SKU、状态、事件、保管边界及gate的对账条件，不是给子流赋值的公式。每子卡保留自己的实际发送量和接收/保管证据；同一有签收的计量凭证可追溯复用，不虚构重新称量。不得复制父集合量给每个子流，不覆盖真实接收记录，不以未知强设相等。差异保留原值及单位、计量不确定性、真实转移损失、状态改变和责任方证据，未查清即阻断完成。全部内部数量为未归一化实物量，仅在各卡最后除原参考分母一次；父role求和仅QA。 | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_and_acceptance | install_accept | 检查声明的首次安装排除项和准备接线盒/电路/接地接口、实际型号兼容性及每项必需限定条件；要求签署端接/接地/极性/功能测试及已完成纠正/复测。 | `leviton-receptacle-installation`; `leviton-5320-product` |
| reference_integrity | accepted_installation | 检查独立正 D、同配置等效性、未完成/不合格工作排除，以及两种语言参考名称、卡 id、属性、单位和明确 1 Item(s) 输出的匹配。 |  |
| custody_and_route | install_accept | 检查各实际 SKU/状态供应及安装/库存/退货/废物/释放闭合、接收方和原产生事件。确认纠正仍关联 install_accept，各不合格状态具有核实的退货、返工、回收或丢弃路径。不得使用混合身份、将残差作污染物或将缺失记录补零。 |  |
| shared_period_integrity | install_accept | 核查准确资产/服务、全部使用节点/作业及服务/报告期、购置/制造、维护/更换和退役/终止关联、物理份额决定及完整正分母。检查各资料包内 sum(a_rj) = 1，期间/阶段总量仅核对一次，防止交付、包装、服务方资本或测试电能重复。更换/剩余使用/终止证据缺失时不得完成最终归属。 |  |
| evidence_completeness | 所有清单行 | 检查采集/计算/协议关联、实际分子基准及固定或未解决身份/支持计数。将已执行检查、跳过项、发现和完整性与缺失 Range 警告分开报告；结构检查不能核实具体 UUID，也不能解决 Energy/Duration 和量化证据缺口。 |  |
| close_atomic_plate_and_fixings | install_accept; cp_materials | 在atomic_plate_and_fixings全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_incoming_packaging | install_accept; cp_materials | 在atomic_incoming_packaging全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_owned_equipment_attribution | install_accept; cp_services | 在atomic_owned_equipment_attribution全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_hired_support_service | install_accept; cp_services | 在atomic_hired_support_service全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_unused_product_return | install_accept; cp_materials | 在atomic_unused_product_return全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_installation_waste | install_accept; cp_releases | 在atomic_installation_waste全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | 按同物料/状态/事件/gate核对实际发送及接收凭证、原始实物量及单位和责任；允许可追溯复用同一签收计量，禁止父量复制、覆盖实收或未知强制相等。差异未经不确定性、实际损失或状态改变责任证据解释即阻断完成；核对各卡仅归一化一次。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景插座配件安装数据包，下游投影为 process 或 lifecyclemodel。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 兼容的首次安装范围、准确配置、准备接口和验收交付点。 |
| excluded_use | 整栋建筑等效；不同端接/器件路线；更换；后续运行电力、维护或监控；寿命/性能保证。 |
| required_metadata | 场址/时间；准确型号/配置/BOM；接口/设计/辖区；数量和正 D；测试/验收；供应数据集；清单/协议；资源所有权/期间及归属。 |
| required_quality_disclosure | 覆盖度、不确定性、保管残差、缺失使用方/期间证据、身份/属性支持及数量范围缺口，以及实际验证完整性。 |
| update_trigger | 型号、接口、路线、BOM、验收设计变化，或获得更强实测/身份证据。 |

## 11. 数据源

| 来源（`source_id`） | 类型（`type`） | 参考（`reference`） | 用途（`used_for`） |
| --- | --- | --- | --- |
| unsd-cpc3-explanatory-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 解释，PDF 第 293 页：电气配件子集及与报警/电信服务的区分；分类本身不创建 PCR 身份。 |
| leviton-receptacle-installation | handbook | https://leviton.com/content/dam/leviton/residential/product_documents/instruction_sheet/15a-receptacle-instruction-sheet.pdf | 示例隔离/确认断电、铜线侧面螺钉端接、火线/中性线/接地区分、固定及面板/恢复供电路线。型号特定剥线长度/扭矩/线规不是通用清单范围。前景协议规定实际采集，不虚构数量。 |
| leviton-5320-product | official_guidance | https://leviton.com/products/5320-4w | 示例 15 A、125 V 两极三线接地双联插座；实际材质、安装支架、随附五金及型号兼容性。不建立完整服务质量、电能、废物、资产寿命或界限。 |
