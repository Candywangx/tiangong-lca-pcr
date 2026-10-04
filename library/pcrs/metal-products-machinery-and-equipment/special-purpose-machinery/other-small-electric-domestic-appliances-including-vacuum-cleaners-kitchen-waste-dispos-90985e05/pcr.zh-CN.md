---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-small-electric-domestic-appliances-including-vacuum-cleaners-kitchen-waste-dispos-90985e05
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 其他小型家用电器

## 1. 范围与适用性

本方法覆盖小型家用电器完整剩余类别：吸尘器、厨房食物垃圾处理器、家用食品搅拌器、剃须刀、电吹风、熨斗、咖啡机和烤面包机。其他剩余家用电器须审查主要功能。输出 UUID 或电池化学未知时，有线和无线配置仍纳入。编制一个配置特定的工厂前景数据包；质量不能使不同家用服务功能等价。

确定主要功能及预期家用市场。相邻 CPC3.0 类别是冰箱及冷冻柜44811、洗碗及衣服或亚麻洗涤或烘干机44812、电热毯44813、缝纫机44814、风扇或通风或循环排气罩44815、专用水或空间或土壤加热器及烤箱或炊具或烧烤设备44817、独立供应的电阻加热元件44818。内置电吹风风扇、烤面包机加热器或吸尘器电机不会使整机变成部件类别。专用室内风扇或加热器、工业食品机器、非电器具和独立供应零件排除。多功能边界不明确时应审查，不得静默选择剩余类别。来源：`un-cpc-3-0-44816`；已审查 CPC3.0 结构。

原始示例具有不同架构：Dyson V11 供应电动附件、将 PC、ABS 及铝列为独立的构造材料条目，电池体系未说明；InSinkErator35ss 具有感应传动、不锈钢研磨及永久润滑轴承；Braun 手持搅拌器具有家用搅拌及电机控制；Philips S7885 具有锂离子储能及传感、USB 线及条件性灌装清洁盒，但无适配器；Philips 电吹风具有气流及加热、熨斗具有底板及水路；Braun 烤面包机具有热功能，咖啡机具有受控水流及温度。来源说明产品架构，而非工厂配方、生产因子或通用生命周期效益。不同厂商提供反例，避免单一聚合物小器具、通用电机、全电池、全湿式或全加热清单。未展示变体须实际配置文件解决；任何来源功率、单位质量、消费用水、保修或性能均不作为生产默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-small-electric-domestic-appliances-including-vacuum-cleaners-kitchen-waste-dispos-90985e05 |
| classification_refs | CPC3.0:44816 |
| covered_products | 完整剩余小型家用电器类别，见第1节；有线及无线 |
| excluded_products | 第1节相邻主要功能及非家用或非电或独立零件 |
| representative_product | 选定实际型号配置的完整验收家用电器；不作跨家族代表重量 |
| production_route | 实际自制或外购及机械、流体、热、电气条件架构 |
| market_state | 完整验收交付配置含实际附件和首次填充；净质量排除包装及废品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一个实际家用功能整机，不是其下游家用服务 |
| How much | 1 kg 同一配置验收净整机质量 |
| How well | 满足声明电气安全、功能、接口及实际验收计划 |
| How long or cycle | 一个制造及交付期间；无默认使用寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他小型家用电器 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要功能；家用市场；型号修订；供电接口；电机及热或水路；电池实际体系或缺口；随附附件及填充；自制外购；供应状态；实际验收试验；校准净质量；N；场址期间；公用工程供应条件；废物及排放；上游或处理；分配不确定性 |

必需限定信息须在数据包明确声明。参考产品 UUID 未解决，不得以单一吸尘器或废电池代替完整类别。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `material_species` | physical material/species records | 质量 | kg | 按各项自身含水或含金属或化学分析、库存和反应记录换算。总量不能代替元素量；不用于电力或运输。 |
| `energy_interface` | electricity, steam, condensate and fuel | 交付能量或燃料质量及净热值 | MJ; kg; MJ/kg | 电力保留 kWh，1 kWh=3.6 MJ。蒸汽供回质量各乘自身相对于共同零点 MJ/kg；总已净区别，返回仅扣一次。燃料用自身质量及净热值，不能代替供应蒸汽。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 纳入从收料、场内制造、传动或加热或电气装配、集成、工厂试验或返工、公共服务、废物及包装至验收放行的实际操作。 |  |
| `make_buy` | supplier_interface | 各部件选择实际自制或外购状态：完整外购电机、加热器、电池、板、泵或清洁头的嵌入投入计一次；自制改用实际原料及操作。仅计后续场内工作。内部转移成对，不把场内中间品列为外购。 |  |
| `factory_use` | production | 工厂合格试验用水、食品、布或毛发替代物、粉尘、电力及电池充电在实际消耗时为生产负荷；可重复工装采用库存或重复记录。下游消费电力、充电、咖啡、清洁地面、剃须、织物服务及垃圾处理不是制造输出。 |  |
| `bom_extension` | route | 卡片为具体条件性锚点，不是通用配方。审查实际物料清单、配方、试料、包装、燃料、废物和物种。增补每个缺失实际原子交换；仅有不存在证据时记录 not_applicable，未知不同于零。电池体系未知仍纳入，须匹配实际身份。 |  |
| `upstream` | links | 按实际牌号、状态、交付地理或电压及期间链接供应商生产和运输；计量废物转移后的外部处理与场内排放不同。供应商链接未完成时此工厂包不是完整摇篮到大门结果。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所选实际输入的供应牌号、完成状态及交付接口 |
| starting_condition_role | 工厂前景收料边界 |
| product_classification_scope | 第1节审查的完整剩余家用电器功能类别 |
| recursive_input_rule | 同类别外购前体上游计一次，只展开后续场内加工；成对内部转移抵消，不无限递归 |
| upstream_dataset_requirement | 匹配实际牌号、配方、完成工艺、地理期间及供应接口；披露缺失供应商和替代 |
| disclosure | 实际配置、自制外购、覆盖和条件不适用、运输处理、计量分母及不确定性 |

### 家族及自制外购矩阵

| 家族 | 实际条件路线 | 证据边界 |
| --- | --- | --- |
| 吸尘器 | 吸力电机、风道或过滤、实际清洁头及有线或电池接口 | Dyson 部件配置分明；PC 和 ABS 分列，滤材及电池体系未知 |
| 垃圾处理器 | 研磨电机、传动及湿侧密封，自制或完整外购 | 感应电机示例不能代表全部电机；永久润滑件不再填充 |
| 食品搅拌器 | 家用电机及减速或工具；食品接触件；实际负载试验 | Braun 家用搅拌；不包括工业食品制造设备 |
| 剃须刀 | 刀头传动、实际电池及电气控制或湿式结构 | 锂离子不证明子体系；线随附、适配器不附；清洁盒另列 |
| 电吹风 | 送风、实际加热及绝缘控制，有无附加离子模块按实物 | AC 电机名称不证明通用电机型号或加热合金 |
| 熨斗 | 加热底板、有无实际水路及泵；干式和蒸汽式分离 | 陶瓷描述不证明铝基材或配方；试水不是交付净质量 |
| 咖啡机 | 实际热水路、重力或泵、控制及随附壶 | 受控水流不证明泵；冲煮咖啡为下游服务或实际工厂试料 |
| 烤面包机 | 实际加热支架、控制及机械弹出机构 | 不锈钢外壳不证明全机合金；试面包不作电器输出 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 壳体及机械制造 | conditional | 仅实际场内成型、铸造、冲压、机械加工、清洗及涂覆；外购成品不重复嵌入制造 | foreground | 每 1 kg 参考流 |
| `drive_thermal` | 电机、传动及热元件制造 | conditional | 仅实际场内绕组、叠片、转子或电刷或磁体集成及加热器制造；保持实际替代路线 | foreground | 每 1 kg 参考流 |
| `electronics` | 电气与控制装配 | conditional | 仅实际布线、电路板装配、焊接及控制；外购已装配板不重复嵌入投入 | foreground | 每 1 kg 参考流 |
| `integration` | 整机集成 | required | 每种实际配置均需；采用实际机械、流体、热及电气架构 | foreground | 每 1 kg 参考流 |
| `test` | 工厂试验及返工 | required | 实际验收计划；仅实际负载、湿式、热、安全及电池试验 | foreground | 每 1 kg 参考流 |
| `dispatch` | 包装及验收放行 | required | 要求完整选定交付配置；包装不入输出净质量 | foreground | 每 1 kg 参考流 |
| `services` | 未分配共享公用工程及实际产能 | conditional | 仅未分配剩余及实际产能；核对所有已分配子过程 | foreground | 每 1 kg 参考流 |

### 过程：壳体及机械制造（`fabrication`）

仅实际场内成型、铸造、冲压、机械加工、清洗及涂覆；外购成品不重复嵌入制造。

#### 输入

##### 产品流

###### 丙烯腈-丁二烯-苯乙烯树脂 （`abs`）

仅场内成型实际 ABS 牌号；资料将 ABS 与 PC 分列，未证明共混物。 仅实际中国工厂采购 ABS 粒料，匹配牌号或添加剂及供应商；不施加共混身份或来源数量。

- 选定流：丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：dyson-v11-spec

###### 聚碳酸酯树脂 （`pc`）

仅场内成型实际 PC 牌号；区分添加剂及复合或再生状态。 仅实际工厂端 PC 颗粒；使用供应商模型前匹配实际添加剂、再生成分及供应商地理范围。

- 选定流：聚碳酸酯颗粒 `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：dyson-v11-spec

###### 聚丙烯树脂 （`pp`）

条件性实际文件支持壳体或水箱 PP 牌号；不得作通用材料假设。 仅实际初级形态 PP 树脂；匹配牌号及供应聚合物或复合状态；不用于成品水箱。

- 选定流：聚丙烯 `54802cfb-bd58-4f85-9ebf-9e0616529c1c`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 低碳钢板 （`steel`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：低碳钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 不锈钢板 （`stainless`）

仅自制认证合金板材加工；来源不锈钢标签未确立合金牌号。 仅实际深加工平板不锈钢，牌号或厚度及完成状态匹配供应商；仅热或冷轧及其他材料须另行未解决身份。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：insinkerator-35ss; braun-identity-toaster

###### 铝合金坯料 （`aluminium`）

自制机加工或铸造实际合金原料；外购成品部件为替代路线。

- 选定流：铝合金坯料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：dyson-v11-spec

###### 水混合型金属加工液浓缩液 （`coolant`）

仅实际配制浓缩液；稀释水另测；未知化学须配方证据。

- 选定流：水混合型金属加工液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工艺用水 （`water`）

仅场内冷却、清洗或稀释新补水；成对内部循环不是新进口。 仅实际供应经过处理的工业工艺水，记录供应商处理及水质；自然取水为另一交换。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 异丙醇 （`ipa`）

仅实际异丙醇清洗，记录自身含量、水比例、捕集或返回及库存。 此身份仅用于实际中国工厂端异丙醇，纯度须计量；水稀释混合物须自身配方身份或分开组成。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 环氧粉末涂料 （`powder`）

仅实际环氧涂覆配方；陶瓷底板描述不证明环氧涂层。

- 选定流：环氧粉末涂料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`fabrication_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 此 UUID 仅用于实际中国用户侧 1–35 kV 电网消费，须匹配场址交付接口、供应组合及报告年份。外购进口分配至各过程负荷计一次；场内变压不是新增外购进口。其他电压、国家、约定发电来源或自产电力须独立实际流身份。此流引用技术属性 Net calorific value，其已核实单位组为能量（MJ；1 kWh=3.6 MJ）；表达交付电能，不进行燃料热含量计算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不锈钢加工废料 （`ss_scrap`）

实际合金分流，采用自身水分、加工液及含金属分析；废料不是负新料投入。

- 选定流：不锈钢加工废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### ABS 成型废弃物 （`abs_reject`）

区分成对内部再磨料返回、外送废物及库存变化。

- 选定流：ABS 成型废弃物
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废异丙醇清洗液 （`spent_solvent`）

自身醇或水比例及实际处理；捕集或回收溶剂不等于销毁。

- 选定流：废异丙醇清洗液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 异丙醇向空气排放 （`ipa_air`）

仅独立确立异丙醇空气排放；未闭合差额不是空气排放。 仅实际异丙醇向未特指空气释放；室内或城市或高烟囱类别须自身匹配身份。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

### 过程：电机、传动及热元件制造（`drive_thermal`）

仅实际场内绕组、叠片、转子或电刷或磁体集成及加热器制造；保持实际替代路线。

#### 输入

##### 产品流

###### 无取向电工钢带 （`electrical_steel`）

仅自制电机叠片；外购电机上游钢材计一次。

- 选定流：无取向电工钢带
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 漆包铜绕组线 （`copper_wire`）

仅自制绕组，记录供应绝缘状态；不在外购漆包线后重复原铜负荷。 仅供应商确认的实际铜漆包绕组线；通用名亦允许铝，不得静默替换。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 钕铁硼永磁体 （`magnet`）

仅有证据的永磁设计；感应电机不意味着含磁体。

- 选定流：钕铁硼永磁体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 石墨碳刷 （`brush`）

仅实际有刷电机；无刷路线记录不适用而非假定零值。

- 选定流：石墨碳刷
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 镍铬电阻丝 （`nichrome`）

仅实际场内线型加热器；资料额定热功率不能识别电阻合金。

- 选定流：镍铬电阻丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 云母绝缘片 （`mica`）

仅实际加热器支架；外购完整加热器已包含。

- 选定流：云母绝缘片
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 润滑滚动轴承 （`bearing`）

仅自制传动中独立外购轴承；排除外购电机已含轴承。 仅实际独立外购成品滚珠或滚柱轴承，润滑状态及尺寸须由供应商确认；排除外购电机已嵌入的轴承或润滑脂。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`drive_thermal_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 此 UUID 仅用于实际中国用户侧 1–35 kV 电网消费，须匹配场址交付接口、供应组合及报告年份。外购进口分配至各过程负荷计一次；场内变压不是新增外购进口。其他电压、国家、约定发电来源或自产电力须独立实际流身份。此流引用技术属性 Net calorific value，其已核实单位组为能量（MJ；1 kWh=3.6 MJ）；表达交付电能，不进行燃料热含量计算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：电气与控制装配（`electronics`）

仅实际布线、电路板装配、焊接及控制；外购已装配板不重复嵌入投入。

#### 输入

##### 产品流

###### FR-4 覆铜印制电路板 （`bare_board`）

仅实际场内装元器件的空板；不得重复外购装配板。 仅实际裸 FR4 玻纤环氧覆铜板；来源明确区分 PWB 与已装配 PWA。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 锡银铜焊料合金 （`solder`）

仅实际合金及焊接；其他合金或助焊配方须自身卡片。

- 选定流：锡银铜焊料合金
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 松香型助焊剂 （`flux`）

仅实际配方；衡算适用时独立分析树脂或溶剂及水。

- 选定流：松香型助焊剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 封装微控制器 （`control_ic`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际单独供应、供场内 SMT 贴装的封装集成电路；核实实际微控制器功能、封装及供应商，排除外购已装配板中嵌入的器件。

- 选定流：封装集成电路 `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`electronics_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 此 UUID 仅用于实际中国用户侧 1–35 kV 电网消费，须匹配场址交付接口、供应组合及报告年份。外购进口分配至各过程负荷计一次；场内变压不是新增外购进口。其他电压、国家、约定发电来源或自产电力须独立实际流身份。此流引用技术属性 Net calorific value，其已核实单位组为能量（MJ；1 kWh=3.6 MJ）；表达交付电能，不进行燃料热含量计算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃已装配控制电路板 （`pcb_reject`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际中国工厂端转移缺陷装配板或元件；其他地理或处理接口须匹配独立流。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：整机集成（`integration`）

每种实际配置均需；采用实际机械、流体、热及电气架构。

#### 输入

##### 产品流

###### 单相感应电机总成 （`induction_motor`）

条件性外购完整电机；不得重复绕组线、叠片或轴承润滑脂。

- 选定流：单相感应电机总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：insinkerator-35ss

###### 无刷直流电机总成 （`bldc_motor`）

仅实际外购无刷设计；来源转速不能单独确立电机子类型。

- 选定流：无刷直流电机总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 串励交直流通用电机总成 （`universal_motor`）

仅实际外购通用电机；电吹风交流标签不证明此子类型。

- 选定流：串励交直流通用电机总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 电阻加热器总成 （`heater`）

仅实际外购完整加热器；自制清单不得重复其嵌入电阻线及支撑材料。

- 选定流：电阻加热器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：philips-iron; philips-hairdryer; braun-identity-toaster

###### 涂层铝制熨斗底板 （`soleplate`）

仅实际铝基材及有证据涂层；Philips 陶瓷描述未识别基材或涂层配方。

- 选定流：涂层铝制熨斗底板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：philips-iron

###### 不锈钢研磨总成 （`grind`）

仅外购完整垃圾处理器研磨总成，采用实际合金及完成状态。

- 选定流：不锈钢研磨总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 不锈钢搅拌器搅拌头 （`beater`）

仅实际合金及随附附件；其他搅拌工具设计须自身交换。

- 选定流：不锈钢搅拌器搅拌头
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：braun-handmixers

###### 钢制剃须刀刀头总成 （`blade`）

仅实际外购刀头；不假定刀片合金、涂层或使用寿命。

- 选定流：钢制剃须刀刀头总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：philips-s7885

###### 电动吸尘器清洁头 （`head`）

仅实际供应完整清洁头；其电机负荷计一次，不再单独重复。

- 选定流：电动吸尘器清洁头
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：dyson-v11-spec

###### 聚酯吸尘器滤芯 （`filter`）

仅核实的实际聚酯介质；Dyson 可洗滤芯未识别聚合物。

- 选定流：聚酯吸尘器滤芯
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 隔膜水泵总成 （`pump`）

仅实际隔膜泵；咖啡受控水流不证明泵的存在或此机构。

- 选定流：隔膜水泵总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：braun-multiserve

###### 已装配控制印制电路板 （`board`）

实际外购已装配板的基材、器件及焊料上游计一次。

- 选定流：已装配控制印制电路板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 锂离子电池包 （`li_pack`）

仅核实的实际锂离子电池包，不假定正极体系；供应保护板计一次。

- 选定流：锂离子电池包
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：philips-s7885

###### 镍氢电池包 （`nimh_pack`）

仅实际供应商核实镍氢配置；未知电池体系保留缺口而非强制不存在。

- 选定流：镍氢电池包
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 绝缘市电电源线 （`cord`）

仅实际随附线缆；所引垃圾处理器35ss 配置电源线另售。

- 选定流：绝缘市电电源线
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### USB-A 充电线 （`usb`）

仅实际随附 USB-A 线；S7885/50 附线但不附电源适配器。

- 选定流：USB-A 充电线
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：philips-s7885

###### 交流转直流电源适配器 （`adapter`）

仅实际随附适配器；不得为 S7885/50 虚构不附的适配器。

- 选定流：交流转直流电源适配器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：philips-s7885

###### 硅橡胶密封件 （`seal`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：硅橡胶密封件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 聚丙烯水箱 （`reservoir`）

仅实际核实 PP 水箱；外购成品水箱不重复上游 PP 成型投入。

- 选定流：聚丙烯水箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：philips-iron; braun-multiserve

###### 玻璃咖啡壶 （`carafe`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：玻璃咖啡壶
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：braun-multiserve

###### 已灌装剃须刀清洁液盒 （`clean_cartridge`）

实际随附已灌装盒；识别液体化学及供应商；保留内容物不同于工厂消耗清洁剂。

- 选定流：已灌装剃须刀清洁液盒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：philips-s7885

###### 锂皂润滑脂 （`grease`）

仅实际文件支持自制传动首次填充；永久润滑外购轴承或电机已含脂。

- 选定流：锂皂润滑脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`integration_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 此 UUID 仅用于实际中国用户侧 1–35 kV 电网消费，须匹配场址交付接口、供应组合及报告年份。外购进口分配至各过程负荷计一次；场内变压不是新增外购进口。其他电压、国家、约定发电来源或自产电力须独立实际流身份。此流引用技术属性 Net calorific value，其已核实单位组为能量（MJ；1 kWh=3.6 MJ）；表达交付电能，不进行燃料热含量计算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂试验及返工（`test`）

实际验收计划；仅实际负载、湿式、热、安全及电池试验。

#### 输入

##### 产品流

###### 工厂试验用水 （`test_water`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际供应经过处理的工业工艺水，记录供应商处理及水质；自然取水为另一交换。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 小麦粉试验投料 （`test_flour`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际小麦面粉工厂试料，计量牌号或水分及实际供应商，不是通用搅拌试验配方。

- 选定流：面粉 `f87532de-91ec-4971-8cde-7cb05b236b0f`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 烘焙咖啡粉试验投料 （`test_coffee`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。

- 选定流：烘焙咖啡粉试验投料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 面包试验投料 （`test_bread`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际面包工厂试料，记录配方或水分及实际供应商，不能用于消费面包用量。

- 选定流：面包 `82f5df4a-9ada-46d2-8686-b3b1265a8188`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 棉制试验布 （`test_fabric`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。

- 选定流：棉制试验布
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 聚酰胺人造毛发试验纤维 （`test_hair`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际作为有文件支持替代物的 PA6 单丝，匹配尺寸及供应商；其他真实或合成毛发须自身卡片。

- 选定流：聚酰胺6单丝 `61fa6be2-e90f-41af-aba5-86209fb72896`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 二氧化硅试验粉尘 （`test_dust`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际二氧化硅工厂试验介质，纯度、晶态或非晶态及粒径规范须有文件；混合试尘须分列组分或采用自身配方身份，不能使用此纯物料 UUID。

- 选定流：二氧化硅 `7a49705c-abee-4573-be50-a01a1e799ab3`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`test_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 此 UUID 仅用于实际中国用户侧 1–35 kV 电网消费，须匹配场址交付接口、供应组合及报告年份。外购进口分配至各过程负荷计一次；场内变压不是新增外购进口。其他电压、国家、约定发电来源或自产电力须独立实际流身份。此流引用技术属性 Net calorific value，其已核实单位组为能量（MJ；1 kWh=3.6 MJ）；表达交付电能，不进行燃料热含量计算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工厂试验废水 （`effluent`）

计量液体及自身组成或处理，不从消费排水使用推定。

- 选定流：工厂试验废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废咖啡粉试验残渣 （`food_residue`）

仅实际咖啡试验残渣，记录自身干固体、水及库存状态；其他试验须自身残渣。

- 选定流：废咖啡粉试验残渣
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废弃小型家用电器 （`appliance_reject`）

仅实际无法修复整机废品；负荷保留在合格分子，质量排除于分母。

- 选定流：废弃小型家用电器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 水蒸气向空气排放 （`water_vapour`）

仅实际工厂蒸发或蒸汽排放；排除消费用水默认值。 仅实际水蒸气向未特指空气排放；不用于淡水、土壤或平流层释放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

### 过程：包装及验收放行（`dispatch`）

要求完整选定交付配置；包装不入输出净质量。

#### 输入

##### 产品流

###### 瓦楞纸箱 （`box`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 聚乙烯包装袋 （`bag`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：聚乙烯包装袋
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 模塑纸浆包装衬垫 （`insert`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：模塑纸浆包装衬垫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`dispatch_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 此 UUID 仅用于实际中国用户侧 1–35 kV 电网消费，须匹配场址交付接口、供应组合及报告年份。外购进口分配至各过程负荷计一次；场内变压不是新增外购进口。其他电压、国家、约定发电来源或自产电力须独立实际流身份。此流引用技术属性 Net calorific value，其已核实单位组为能量（MJ；1 kWh=3.6 MJ）；表达交付电能，不进行燃料热含量计算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他小型家用电器 （`reference_product`）

选定完整验收配置包括实际保留填充及附件，排除包装和废品。

- 选定流：其他小型家用电器
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：

##### 废物流

##### 基本流

### 过程：未分配共享公用工程及实际产能（`services`）

仅未分配剩余及实际产能；核对所有已分配子过程。

#### 输入

##### 产品流

###### 外购交流电 （`electricity`）

仅扣除各过程电表后的未分配共享剩余；要求外购交付电压、地理范围及供应商。 此 UUID 仅用于实际中国用户侧 1–35 kV 电网消费，须匹配场址交付接口、供应组合及报告年份。外购进口分配至各过程负荷计一次；场内变压不是新增外购进口。其他电压、国家、约定发电来源或自产电力须独立实际流身份。此流引用技术属性 Net calorific value，其已核实单位组为能量（MJ；1 kWh=3.6 MJ）；表达交付电能，不进行燃料热含量计算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 外购蒸汽 （`steam`）

仅实际供应质量乘自身相对于共同零点 MJ/kg；返回冷凝水分测，净发票返回只扣一次。

- 选定流：外购蒸汽
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 天然气 （`gas`）

仅实际燃烧器或锅炉燃料及自身组成或净热值；外购蒸汽不得重复虚构場内锅炉。

- 选定流：天然气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 返回冷凝水 （`condensate`）

仅实际返回质量乘计量状态自身 MJ/kg；已净供应不得再扣。

- 选定流：返回冷凝水
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

###### 二氧化碳向空气排放 （`co2`）

仅实际燃烧或反应 CO2，采用自身碳和氧化证据。 UUID 仅用于实测化石源 CO2、未特指空气排放；生物或反应来源及特定空气子介质须自身身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 一氧化碳向空气排放 （`co`）

自身 CO 计量或核实实际燃料及技术因子；碳闭合不能单独确立 CO。 UUID 仅用于实测化石源 CO、未特指空气排放；保留自身物种证据并区分 NOx。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮向空气排放 （`no2`）

仅独立确立 NO2 物种质量；以 NO2 当量表示的 NOx 为另一身份。

- 选定流：二氧化氮向空气排放
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `causal` | site | 优先分离配置及子过程；按实测因果负荷、运行时间或适当物理驱动分配公共剩余，保留分子分母记录及不确定性。不得平均无关型号，也不得对全部公用工程自动按整机质量分配。 |  |
| `rejects` | accepted | 在合格输出归属 Q 中纳入实际废品、返工及合格试验负荷；分母仅含验收净质量或数量。分离回收转移及处理，不假定替代产品抵扣或再生上游零负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收批次 | 同一制造期间 | 同一配置工厂 | 每台验收净质量 | 校准、皮重、配套附件及验收记录 |
| cp_material | all | actual inputs | meter_issue | 具体物种牌号；供应状态；投料；各项水分密度或含量；自制外购；库存；Q；N | 同一期间按独立交换核对计量及仓储、配方和成对返回；Q 含废品或返工负荷，保留各项自身分析。 | kg | 每批或连续表 | 同一制造期间 | 同一配置工厂及供应商 | 分配数量 / 验收设备数量 | 牌号或成分检验、计量及库存 |
| cp_energy | all | electricity and heat | meter | 各过程表；总进口；实际产能；出口；储能；供回蒸汽各质量温压焓；已净发票；Q；N | 核对同一期间和单位的各过程表，共享服务仅尚未分配剩余；调查负剩余。供应或返回蒸汽各用自身 kg 和 MJ/kg，共同零点，返回仅扣一次。 | MJ | 连续表及各试验 | 同一制造期间 | 同一配置及场址 | 分配能量 / 验收设备数量 | 校准表、供电接口、热力及分配不确定性 |
| cp_waste | all | specific waste | transfer | 各物流质量和自身含水或含量；期初末库存；内部返回；外送处理；Q；N | 称重、取样及处理转移，区分返回再用、回收及处置，不能推定替代抵扣。 | kg | 每批转移 | 同一制造期间 | 同一配置场址及处理接口 | 分配废物 / 验收设备数量 | 废物联单、取样及库存 |
| cp_emission | all | specific species/compartment | species_measurement | 实际物种介质；浓度；排气或液流；水分温压基准；捕集或销毁；各项分析；Q；N | 对每项计量排放，采用实际控制措施之后的物种浓度乘以匹配气体或液体流量，并按同一实测时间区间积分；保留原始干湿基准、温度或压力、单位及有依据的换算。无组织排放独立计量，声明采样、面积及期间基准。已核实因子须匹配实际物种、技术及控制条件。调查闭合：捕集不是销毁，不明差额不是空气排放。 | kg | 实际试验及排放期间 | 同一制造期间 | 同一配置场址边界 | 分配排放 / 验收设备数量 | 采样流量和综合不确定性 |

原始期间协议：N 为同一配置验收设备数，D 为该批校准验收净质量之和，M=D/N。每项 Q 为同期间归属数量，含废品、返工和工厂试验负荷；先 q_item=Q/N，再 q_ref=Q/D。包装及废品质量不入 D，保留实际各项原单位和各项成分、库存及反应记录。

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| raw_period_basis | 全部清单行 | 保留同一配置及同一期间归属数量 Q 的实际原单位，纳入废品、返工及工厂试验负荷。N 为验收设备数；D 为这些验收完整设备的校准净质量之和，排除包装、废品质量及工厂试验所消耗的负载质量。M=D/N；q_item=Q/N；q_ref=Q/D=q_item/M。交付时保留的附件及填充属于声明的完整设备配置。保留原始仪表、库存、验收、分配及换算记录；不得混合配置或代入型号名义质量。 | cp_mass; cp_material; cp_energy; cp_waste; cp_emission; 原始期间验收及交换记录 |
| complete_bom | actual configuration | 覆盖实际全部交换，自制外购及附件、填充、试料分离；缺口明确 | 实际 BOM、路线及供应商 |
| mass_period | cohort | 同一配置期间和验收记录、校准质量及库存；不跨家族均值 | 校准及期间台账 |
| balance_uncertainty | physical balances | 按各项自身水分、密度、含量、反应及成对返回核对，与综合不确定性比较 | 实测、采样、反应及分配证据 |
| provider_gaps | links | 每个实际上游和处理匹配状态地理期间；未核实不可作为完整足迹 | 直接记录及替代披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | 确认主要功能、家用市场、型号或修订、交付配置及激活架构。每个实际交换须匹配身份、属性、单位及供应商；不存在、零及未知保持不同。 |  |
| `denominator` | all inventory rows | 全部清单采用同一验收批次及共同期间。核实校准验收净质量和 N，废品及包装质量排除。核对 q_item=Q/N 后按同一平均 M 归一化；混合配置无效。 |  |
| `double_count` | make_buy | 核对完整外购模块与自制材料及操作、保留填充或附件与工厂消耗、成对内部转移与外部投入。每项实际负荷计一次。 |  |
| `water_close` | physical water records | 每项采用自身实测水比例、密度及干湿基准：新水及输入水分、反应水和期初库存减期末库存、产品保留、排水和蒸发；内部返回成对抵消。按采样、仪表及分配综合不确定性调查实测闭合，无通用容差。 |  |
| `species_close` | material and chemical records | 每种含金属或化学物分别闭合，采用各输入、产品、废料、污泥、液体及释放自身匹配分析和干湿基准、反应计量及库存。总质量不是含元素量。不得将全部清单质量规则用于能量或运输。 |  |
| `solvent_close` | solvent records | 区分保留溶剂、回收返回、捕集液体或介质、已证实销毁、废水或非空气剩余及实际空气物种释放。捕集不是销毁；不明差额应调查，不分配至空气。 |  |
| `utility_close` | energy records | 按同一期间及单位核对外购进口、实际场内产能、出口及储能变化和已分配制造、传动、电气、集成、试验或包装负荷。共享行仅未分配剩余；按期间、单位及综合计量不确定性调查负剩余，不截零。 |  |
| `steam_close` | steam and condensate | 相对于共同零点，按计量压力或温度采用供应质量乘供应自身 MJ/kg 和返回质量乘返回自身 MJ/kg。总供应只扣返回一次；已净发票不得再扣。物理蒸汽或冷凝水质量衡算独立于能量。 |  |
| `species_emissions` | air releases | 独立校验每种排放物及环境介质。燃料碳衡算不能单独确立 CO 或 NOx。NO2 质量不是以 NO2 当量报告的 NOx；报告约定与实际物种身份保持不同。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 实际配置工厂生产前景数据及明确已完成上游链接的模型 |
| excluded_use | 跨家族功能等价、默认消费者服务、默认重量或制造因子、缺失供应商的完整足迹 |
| required_metadata | 第3节限定及原始期间分母、实际架构、自制外购和边界 |
| required_quality_disclosure | 采集覆盖、供应商或身份或配方缺口、分配和综合不确定性、全部条件及排除 |
| update_trigger | 型号或架构、配方、供应状态或地区、计量、工厂试验或处理路线改变 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| dyson-v11-spec | handbook | Dyson V11 Technical specification; edition not printed; public PDF snapshot 2026-10-02; https://www.dyson.com/content/dam/dyson/for-business/business-refresh/docs/us/vacuums/v11-cord-free-tech-spec-us.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| braun-multiserve | handbook | Braun MultiServe Plus Coffee Maker KF9250BK; public HTML snapshot2026-10-02; https://www.braunhousehold.com/en-us/p/multiserve-coffee-machines-multiserve-plus-coffee-maker-with-cold-brew/KF9250BK.html | 产品架构或类别边界；非工厂配方或数量默认值 |
| philips-iron | handbook | Philips 3000 Series DST3010/30 steam iron; public HTML snapshot2026-10-02; https://www.home-appliances.philips/sg/en/p/DST3010_30 | 产品架构或类别边界；非工厂配方或数量默认值 |
| philips-hairdryer | handbook | Philips DryCare Pro BHD176/00 hairdryer; public HTML snapshot2026-10-02; https://www.philips.com.au/c-p/BHD176_00/drycare-pro-hairdryer | 产品架构或类别边界；非工厂配方或数量默认值 |
| un-cpc-3-0-44816 | official_guidance | UNSD CPC Version3.0 subclass44816; Version3.0; public snapshot2026-10-02; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/44816 | 产品架构或类别边界；非工厂配方或数量默认值 |
| philips-s7885 | handbook | Philips Shaver series 7000 S7885/50; Issue date 2025-07-15; version15.15.1; https://acc.documents.philips.com/assets/20250715/95ab27f73ba94a139b0ab31b009abfbf.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| braun-identity-toaster | handbook | Braun Identity collection; public HTML snapshot2026-10-02; https://www.braunhousehold.com/en-us/e/collections/identity | 产品架构或类别边界；非工厂配方或数量默认值 |
| braun-handmixers | handbook | Braun MultiMix Hand mixers; public HTML snapshot2026-10-02; https://www.braunhousehold.com/en-us/e/food-preparation/hand-mixers | 产品架构或类别边界；非工厂配方或数量默认值 |
| insinkerator-35ss | handbook | InSinkErator Evolution 35ss Submittal Sheet; H975-23G-83-10; copyright2023; https://www.insinkerator.com/documents/evolution-35ss-specification-sheet-en-us-72626.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
