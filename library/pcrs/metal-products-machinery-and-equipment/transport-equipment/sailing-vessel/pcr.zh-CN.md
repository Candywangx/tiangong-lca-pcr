---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.sailing-vessel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置复合材料辅助柴油帆船制造

## 1. 范围与适用性

制造一种配置新非充气巡航单体帆船：湿法铺层单层玻璃聚酯船体内部框架、注入玻璃聚酯巴沙夹芯甲板、固定铸铁鳍龙骨传统铝桅装、聚酯机织主前帆及机械轴传动船用辅助柴油机。Jeanneau历史型号文件支持本结构，不确定通用工厂配方数量实际船重。其他船体芯树脂路线纯机动艇赛艇充气艇无机配置不完整船体修理改装独立部件须另作适用性决定。现有帆织品螺旋桨方法关注供货部件，不覆盖完整船复合成型桅舾装集成验收质量。航行帆船服务旅客运输航次使用期推进寿命维护报废排除。候选方法等待科学审查。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.sailing-vessel |
| classification_refs | CPC 3.0 49410; 较窄候选边界；不声明已接受映射 |
| covered_products | 配置完整复合材料巡航辅助柴油单体帆船 |
| excluded_products | 其他船体树脂芯推进路线充气纯机动无机不完整艇修理散装部件 |
| representative_product | 历史SUN ODYSSEY349标准传统桅装固定深鳍龙骨示例的声明完整船结构；不采用目录数值 |
| production_route | 湿法铺层船体框架；注入巴沙夹芯甲板；连接龙骨轴舾装；桅帆；工厂验收 |
| market_state | 声明船厂边界新完整验收配置帆船 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种完整声明复合材料辅助柴油帆船 |
| How much | 1 kg验收净完整设备；一台验收完整设备具有物理核验M kg |
| How well | 满足实际受控设计清单验收计划，包括层合固化粘接完整性水密龙骨舵轴桅功能永久电水安全舾装质量状态；保留实际准则结果，不设虚构公差法规批准 |
| How long or cycle | 一次制造交付；不采用海里旅客寿命单位 |
| reference_flow_link | `finished_vessel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 帆船，不论是否装有辅助电动机（可充气者除外） `8afadbed-02c2-49dd-8389-f9c4bc8d108f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 船体船号；图样清单修订；实际树脂胶衣引发剂玻璃芯接头规格；模固化修边路线；船体甲板龙骨桅帆机内舱电水安全配置；供货已含工作液；实际验收检查；场址期间；称重方法校准皮重原始读数干燥状态；签认配置修正正值净M kg；柜内容物交付支撑排除；上游运输接收覆盖 |

在数据集元数据或等效注释声明全部限定。逐字保留官方中文公开标签；实际推进为双语公开说明宽泛类别所容纳的声明船用柴油机，不将显示标签解释为仅电动要求。1kg制造不建立等帆航功能。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mass_reference` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `engine_count` | marine_engine | 件数 | Item(s) | 保留公开件数；另测安装供货发动机kg及已含预充液范围用于物理M，保留实际件数台账。不假设kg/件改写质量。 |
| `electric_energy` | electricity rows | 净热值 | MJ | 计量实际阶段能量；1 kWh =3.6 MJ。按M归一MJ/台；额定设备不是测量。 |

## 5. 系统边界

前景始于声明船厂实际原配方增强芯与供货部件收货，终于完整配置工厂验收。纳入船体甲板成型本地连接精整桅推进永久舾装返工实际工厂下水检查接收边界废物。按文件化因果使用归属工装服务实际模维护；不假设模寿命每船必需换模。供货成品龙骨涂层桅机帆内部件按实际供货边界计量，不重复供货制造已含液。采购成品船体甲板将改变声明本地成型路线，须文件化独立适用模型，不能同时计入坯料成品船体。可选清洗化学固化引发剂本地涂层加热压缩空气辅助设备船坞海试仅实际路线需执行时纳入，各写明确原子卡。不设默认包装；实际运输支架帆套须自身交换并排除M。原料开采上游制造入厂运输废物处理仅由相符独立链接数据集表示；缺少链接为缺口且阻止完整摇篮到工厂门声明。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 船厂收货实际未固化配方干玻璃巴沙及供货成品部件 |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | 配置非充气复合帆船制造；较窄CPC49410 |
| recursive_input_rule | 链接实际相符供货生产交付边界；复合配方采购总成区别已含组分 |
| upstream_dataset_requirement | 更广边界声明前匹配树脂稀释剂芯纤维状态供货地区期间组件完整性属性运输废物接收 |
| disclosure | 仅制造前景；披露清单供货边界测量链接缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hull` | 湿法铺层船体内部框架成型 | required | 实际模具准备胶衣涂布玻璃树脂铺层经评定固化脱模修边；不设通用毡铺层 | foreground | declared same accepted boat; q_item / M |
| `deck` | 注入巴沙夹芯甲板成型 | required | 实际模具胶衣干增强芯铺放树脂注入固化修边；测量泵返工 | foreground | declared same accepted boat; q_item / M |
| `assembly` | 船体甲板连接龙骨推进永久舾装 | required | 实际接头计划龙骨舵轴安装及完整声明永久内舱电水安全舾装 | foreground | declared same accepted boat; q_item / M |
| `rigging` | 桅索帆甲板设备集成 | required | 安装声明桅帆桁固定活动索具独立帆帆装绞盘；保留采购完整供货边界 | foreground | declared same accepted boat; q_item / M |
| `acceptance` | 工厂下水调试完整船验收 | required | 实际执行水密功能索机检查下水厂区试验独立净M核对；海试以实际执行为条件 | final_product | finished_vessel; 1 kg |

### 过程：湿法铺层船体内部框架成型 (`hull`)

#### 输入

##### 产品流

###### 未固化不饱和聚酯层合树脂配方 (`polyester_hull`)

一种实际供应商证实未固化不饱和聚酯层合配方，包括已含反应稀释剂；保留安全数据表固体及组分边界。称量净领用退回固化余留。公开原料树脂身份以证实不饱和聚酯边界为条件；不重复已含苯乙烯促进剂添加剂的新收货。其他配方须独立卡片。

- 选定流： 不饱和聚酯树脂 `6af057bf-05f5-446b-b69c-e66c5b8e66e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 干燥E玻璃短切原丝增强毡 (`glass_mat_hull`)

仅当实际受控本阶段铺层采用本单一干毡，证实纤维浸润剂粘结剂交付含水。称量领用退回边角料；采购固化复合材不是增强纤维。其他粗纱织物铺层须独立物理卡片实际数量。不设玻璃树脂比例。

- 选定流： 干燥E玻璃短切原丝增强毡
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 一种未固化有色聚酯船用胶衣配方 (`gelcoat_hull`)

实际成型计划规定本地涂布的一种胶衣；称量净混合领用退回固化余留层。核验产品安全数据表颜色及已含树脂稀释剂颜料；不重复组分。制造商胶衣结构不确定通用化学厚度用量。

- 选定流： 一种未固化有色聚酯船用胶衣配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 一种甲基乙基酮过氧化物固化引发剂配方 (`initiator_hull`)

以实际经评定树脂胶衣固化计划采用本单一供货配方为条件。称量净配方并保留过氧化物浓度钝化剂相容性批次。排除已含预催化剂；过氧化物三聚体基本排放不是供货固化产品。不设通用引发剂比例固化温度。

- 选定流： 一种甲基乙基酮过氧化物固化引发剂配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 一种石蜡脱模剂配方 (`release_agent_hull`)

仅当实际模具准备采用本单一证实配方；按供货溶剂纯度边界称量补加退回余留。其他脱模化学品须独立卡片。单列工装维护计量按实际使用分配，不设默认船数。

- 选定流： 一种石蜡脱模剂配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压电网电力 (`electricity_hull`)

计量实际应归属阶段电力，含待机返工实际使用树脂注入泵。公开身份要求电网平均用户端低于1kV交流；其他发电电压须独立卡片。安装设备额定值不是消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

###### 纯液态丙酮清洗溶剂 (`acetone_cleaner`)

仅当实际模具层合工具清洗采用本单一证实纯溶剂；称量净新收货回收，分开收集废溶剂实测空气丙酮。内部回收溶剂不是新输入。混合物须独立组成卡片。清洗溶剂非必需。

- 选定流： 纯液态丙酮清洗溶剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

#### 输出

##### 废物流

###### 分类固化玻璃聚酯船体修边边角料 (`grp_offcut`)

仅实际独立收集单一废物跨接收边界外运。按记录含水基准称量，保留树脂玻璃巴沙溶剂水污染及处理凭证。内部回用回收单列；不默认环境排放避免产品抵扣。

- 选定流： 分类固化玻璃聚酯船体修边边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 收集未固化不饱和聚酯树脂废物 (`uncured_resin`)

仅实际独立收集单一废物跨接收边界外运。按记录含水基准称量，保留树脂玻璃巴沙溶剂水污染及处理凭证。内部回用回收单列；不默认环境排放避免产品抵扣。

- 选定流： 收集未固化不饱和聚酯树脂废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 收集废丙酮清洗溶液 (`spent_acetone`)

仅实际独立收集单一废物跨接收边界外运。按记录含水基准称量，保留树脂玻璃巴沙溶剂水污染及处理凭证。内部回用回收单列；不默认环境排放避免产品抵扣。

- 选定流： 收集废丙酮清洗溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 捕集干燥固化玻璃聚酯修边粉尘 (`captured_dust`)

仅实际独立收集单一废物跨接收边界外运。按记录含水基准称量，保留树脂玻璃巴沙溶剂水污染及处理凭证。内部回用回收单列；不默认环境排放避免产品抵扣。

- 选定流： 捕集干燥固化玻璃聚酯修边粉尘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 实测即时空气苯乙烯 (`styrene_air`)

以本应归属制造阶段实际逐物种实测治理后排放为条件。公开身份为即时空气子介质未特指；粉尘粒径未特指，另核验CO2化石来源。积分匹配浓度排气体积条件，扣除实测背景保留不确定性。不设必需排放配方损失法规限值数量；捕集废物单列。如观察甲板排放须自身应归属阶段卡片。

- 选定流： 苯乙烯 `08a91e70-3ddc-11dd-9910-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

###### 实测即时空气丙酮 (`acetone_air`)

以本应归属制造阶段实际逐物种实测治理后排放为条件。公开身份为即时空气子介质未特指；粉尘粒径未特指，另核验CO2化石来源。积分匹配浓度排气体积条件，扣除实测背景保留不确定性。不设必需排放配方损失法规限值数量；捕集废物单列。如观察甲板排放须自身应归属阶段卡片。

- 选定流： 丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

###### 实测未特指粒径空气颗粒 (`air_dust`)

以本应归属制造阶段实际逐物种实测治理后排放为条件。公开身份为即时空气子介质未特指；粉尘粒径未特指，另核验CO2化石来源。积分匹配浓度排气体积条件，扣除实测背景保留不确定性。不设必需排放配方损失法规限值数量；捕集废物单列。如观察甲板排放须自身应归属阶段卡片。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

### 过程：注入巴沙夹芯甲板成型 (`deck`)

#### 输入

##### 产品流

###### 未固化不饱和聚酯层合树脂配方 (`polyester_deck`)

一种实际供应商证实未固化不饱和聚酯层合配方，包括已含反应稀释剂；保留安全数据表固体及组分边界。称量净领用退回固化余留。公开原料树脂身份以证实不饱和聚酯边界为条件；不重复已含苯乙烯促进剂添加剂的新收货。其他配方须独立卡片。

- 选定流： 不饱和聚酯树脂 `6af057bf-05f5-446b-b69c-e66c5b8e66e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 干燥E玻璃短切原丝增强毡 (`glass_mat_deck`)

仅当实际受控本阶段铺层采用本单一干毡，证实纤维浸润剂粘结剂交付含水。称量领用退回边角料；采购固化复合材不是增强纤维。其他粗纱织物铺层须独立物理卡片实际数量。不设玻璃树脂比例。

- 选定流： 干燥E玻璃短切原丝增强毡
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 一种未固化有色聚酯船用胶衣配方 (`gelcoat_deck`)

实际成型计划规定本地涂布的一种胶衣；称量净混合领用退回固化余留层。核验产品安全数据表颜色及已含树脂稀释剂颜料；不重复组分。制造商胶衣结构不确定通用化学厚度用量。

- 选定流： 一种未固化有色聚酯船用胶衣配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 一种甲基乙基酮过氧化物固化引发剂配方 (`initiator_deck`)

以实际经评定树脂胶衣固化计划采用本单一供货配方为条件。称量净配方并保留过氧化物浓度钝化剂相容性批次。排除已含预催化剂；过氧化物三聚体基本排放不是供货固化产品。不设通用引发剂比例固化温度。

- 选定流： 一种甲基乙基酮过氧化物固化引发剂配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 一种石蜡脱模剂配方 (`release_agent_deck`)

仅当实际模具准备采用本单一证实配方；按供货溶剂纯度边界称量补加退回余留。其他脱模化学品须独立卡片。单列工装维护计量按实际使用分配，不设默认船数。

- 选定流： 一种石蜡脱模剂配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 干燥端纹巴沙木块芯板 (`balsa_core`)

一种实际证实巴沙块芯，按交付含水基准用于注入夹芯甲板；称量领用退回修边，识别密度等级已含载体粘结。木芯胶合板泡沫完整固化甲板不是本芯材。不设默认密度吸液。

- 选定流： 干燥端纹巴沙木块芯板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压电网电力 (`electricity_deck`)

计量实际应归属阶段电力，含待机返工实际使用树脂注入泵。公开身份要求电网平均用户端低于1kV交流；其他发电电压须独立卡片。安装设备额定值不是消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 分类固化玻璃聚酯巴沙甲板修边边角料 (`deck_trim`)

仅实际独立收集单一废物跨接收边界外运。按记录含水基准称量，保留树脂玻璃巴沙溶剂水污染及处理凭证。内部回用回收单列；不默认环境排放避免产品抵扣。

- 选定流： 分类固化玻璃聚酯巴沙甲板修边边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

### 过程：船体甲板连接龙骨推进永久舾装 (`assembly`)

#### 输入

##### 产品流

###### 一种船用胶合板结构底板 (`plywood_floor`)

船体内部框架底部集成实际受控结构胶合板，识别树种胶合等级厚度含水供货精整；称量净安装板材。本地切割精整须独立实际坯料废物化学原子交换。不设通用胶合板树种质量。

- 选定流： 一种船用胶合板结构底板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种混合结构聚酯粘接膏配方 (`bonding_compound`)

仅当实际船体甲板框架接头计划采用本单一供货膏。称量净混合领用退回接头余留；识别固化验收及已含填料催化剂。机械连接其他化学品须自身卡片；示例结构不使粘接剂必需。

- 选定流： 一种混合结构聚酯粘接膏配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 一种成品环氧隔离涂层铸铁鳍龙骨 (`keel`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品环氧隔离涂层铸铁鳍龙骨
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品玻璃聚酯帆船舵 (`rudder`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品玻璃聚酯帆船舵
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品六角头钢制龙骨螺栓 (`steel_bolt`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 钢紧固件 `cad280ce-7850-46a1-9060-4f8b68bf5532`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一台完整船用压燃辅助发动机 (`marine_engine`)

一台实际用于机械轴辅助推进的船用活塞柴油机。计数供货安装发动机并保留公开件数；另测实际供货发动机kg及已含热交换器齿轮箱预充液用于船质量核对。class43110排除道路航空，仅适用于核验船用用途。不采用目录发动机kg/件。

- 选定流： 柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位： 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_count。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_count`
- 来源：

###### 一种成品船用轴传动减速齿轮箱 (`reduction_gear`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品船用轴传动减速齿轮箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品不锈钢螺旋桨轴 (`propeller_shaft`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品不锈钢螺旋桨轴
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品固定三叶船用螺旋桨 (`propeller`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 船只螺旋桨及其桨叶 `8f01d846-f812-4209-a4c1-9f2daa531e79`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品铅酸发动机启动蓄电池 (`starter_battery`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品铅酸发动机启动蓄电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种PVC绝缘铜低压船用电缆 (`electrical_cable`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种PVC绝缘铜低压船用电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品手动船用舱底水泵 (`bilge_pump`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品手动船用舱底水泵
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种空置成品旋转成型聚乙烯燃油柜 (`fuel_tank`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种空置成品旋转成型聚乙烯燃油柜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种空置成品旋转成型聚乙烯淡水柜 (`water_tank`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种空置成品旋转成型聚乙烯淡水柜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种空置成品旋转成型聚乙烯污水储柜 (`holding_tank`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种空置成品旋转成型聚乙烯污水储柜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种完整密封玻璃船体舷窗 (`portlight`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种完整密封玻璃船体舷窗
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种完整手动泵船用厕所 (`marine_toilet`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种完整手动泵船用厕所
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 用户端低压电网电力 (`electricity_assembly`)

计量实际应归属阶段电力，含待机返工实际使用树脂注入泵。公开身份要求电网平均用户端低于1kV交流；其他发电电压须独立卡片。安装设备额定值不是消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

### 过程：桅索帆甲板设备集成 (`rigging`)

#### 输入

##### 产品流

###### 一种完整铝制传统帆船桅杆 (`mast`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种完整铝制传统帆船桅杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品铝制帆船帆桁 (`boom`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品铝制帆船帆桁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品不锈钢固定索具支索 (`standing_rig`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品不锈钢固定索具支索
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品聚酯主帆缭绳 (`running_line`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 一种成品聚酯主帆缭绳
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种完整横向裁剪聚酯机织主帆 (`mainsail`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 防水帆布、船帆布、帐篷布、遮日帘、帐幕及宿营用品（包括充气床垫） `176ee965-23e5-444c-8b6c-9457334cae4c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种完整横向裁剪聚酯机织前帆 (`headsail`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 防水帆布、船帆布、帐篷布、遮日帘、帐幕及宿营用品（包括充气床垫） `176ee965-23e5-444c-8b6c-9457334cae4c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 一种成品自尾帆装绞盘 (`sail_winch`)

一种实际声明供货设计材料尺寸完整性，在收货安装测量净值。保留准确成品配置供货已含内部件精整液图样。完整供货总成替代已含坯料供货工序；本地制造展开自身原子清单。帆卡分别称量各成品聚酯机织帆，排除帆套；不采用目录帆面积到kg换算。

- 选定流： 复（式）滑车及起重机，箕斗提升机除外，卷扬机及绞盘，千斤顶 `7984041f-134f-4b73-89b9-30d9be48684f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 用户端低压电网电力 (`electricity_rigging`)

计量实际应归属阶段电力，含待机返工实际使用树脂注入泵。公开身份要求电网平均用户端低于1kV交流；其他发电电压须独立卡片。安装设备额定值不是消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

### 过程：工厂下水调试完整船验收 (`acceptance`)

#### 输入

##### 产品流

###### 用户端低压电网电力 (`electricity_acceptance`)

计量实际应归属阶段电力，含待机返工实际使用树脂注入泵。公开身份要求电网平均用户端低于1kV交流；其他发电电压须独立卡片。安装设备额定值不是消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

###### 外供饮用水等级试验清洗水 (`cleaning_water`)

用于工厂调试清洗实际外供饮用水等级自来水补加。称量或按实际密度温度计量，保留M外回收余留柜水。不是直接自然资源取用污水使用期淡水供给。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 消耗纯化石柴油辅助机试验燃油 (`test_diesel`)

仅应归属制造验收试验实际消耗石油源柴油，具有来源证书柜平衡；分别测量供货消耗退回交付余留。不采用生物柴油混合额定满柜手册小时因子。余留服务燃油在净M外，单独披露附带交付供货。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_fuel。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fuel`
- 来源：

#### 输出

##### 产品流

###### 验收完整复合材料辅助柴油帆船 (`finished_vessel`)

一种完整声明非充气巡航单体船，湿法铺层玻璃聚酯船体注入玻璃聚酯巴沙甲板，固定铸铁鳍龙骨铝桅帆桁不锈钢固定索聚酯机织主前帆轴传动船用柴油机及声明永久舱室电水安全舾装。通过受控验收记录独立称重来源配置核对，记录正值物理核验净M kg。公开宽泛成品船身份限定为本单一声明配置，不是混合类别。

- 选定流： 帆船，不论是否装有辅助电动机（可充气者除外） `8afadbed-02c2-49dd-8389-f9c4bc8d108f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`
- 来源：

##### 废物流

###### 收集废船舶清洗水基溶液 (`spent_water`)

仅实际独立收集单一废物跨接收边界外运。按记录含水基准称量，保留树脂玻璃巴沙溶剂水污染及处理凭证。内部回用回收单列；不默认环境排放避免产品抵扣。

- 选定流： 收集废船舶清洗水基溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 实测即时化石二氧化碳空气排放 (`air_co2`)

以本应归属制造阶段实际逐物种实测治理后排放为条件。公开身份为即时空气子介质未特指；粉尘粒径未特指，另核验CO2化石来源。积分匹配浓度排气体积条件，扣除实测背景保留不确定性。不设必需排放配方损失法规限值数量；捕集废物单列。如观察甲板排放须自身应归属阶段卡片。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；mass_reference；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_order` | shared operations | 分配前按型号工单独立阶段表计。共享树脂注入固化通风模维护调试采用记录占模时间监测能量或证实因果能力，保留拒收船返工待机负担。质量不能单独解释不同层合桅试验复杂度。记录实际驱动总数分母敏感性，不设通用系数。 |  |
| `recovery_export` | single wastes | 追踪内部树脂溶剂材料回收，不重复外运。分别实测边角料未固化树脂污染清洗液至实际接收方。实际有价共产品按文件化细分因果关系处理，无物理因果时明确替代模型敏感性；不默用市价分配回收抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_vessel | 受控物理验收质量 | 配置；验收净质量 M；船配置号；M kg；实际原始称重方法读数；校准皮重干燥状态；安装未竖桅部件；柜内容物；签认净修正台账；验收数 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每艘验收船配置 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 每台验收净质量 | 当前签认原始物理称重交付状态修正依据；survey_provenance及net_configuration |
| cp_configuration | all processes | declared configuration | 竣工配置路线记录 | 船体清单图样修订；层合芯固化接头计划；供货边界充注；桅帆机永久舾装；自制外购；实际试验交付状态 | 记录实际受控清单阶段路线完整验收配置。追溯各组件化学批次供货已含边界实际验收准则结果；保留偏差返工。不从历史规格推定完整工厂清单。 | kg | 每工单设计改变验收 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 限定记录伴实际交换数量；不以额定值替代 | 受控设计清单；安全数据表批证书；供货试验边界依据 |
| cp_stock | hull; deck; assembly; acceptance | single formulation or dry stock | 净领用材料平衡 | 单一配方牌号纤维芯；批次；kg领用退回库存；已含组分；含水固体；实际余留修边废物；水表计时密度温度 | 分别称量各实际材料配方净领用，核对期初期末库存退回安装余留收集废物实测排放。供货UPR胶衣引发剂各有自身已含组分边界；不能将采购混合物又计作新组分质量。水按实际体积表计记录温度实测密度得kg。不用目录密度损失比。 | kg | 每次领用退回批阶段 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 应归属净材料kg / 同一配置的验收设备数 | 校准秤表；批次安全数据表；库存组分平衡 |
| cp_parts | assembly; rigging | single supplied component | 实测供货安装部件 | 单一供货设计材料精整；kg可追溯件数；已含内部件工作液；预充；安装退回；供货边界 | 称量各实际供货安装部件，或采用经核验相同配置供应商原始实测质量，保留精整内部件已含充注。分别称量成品主前帆，不采用帆面积乘目录布重。区分供货总成本地材料制造及排除包装。额外余留工作液加注追溯为独立实际原子卡；不重复供应商预充。 | kg | 每次实际部件收货安装 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 应归属安装部件kg / 同一配置的验收设备数 | 物理测量；供货已含范围证书；安装台账 |
| cp_count | assembly | marine_engine | 实际安装发动机件数 | 船用用途配置；供货安装Item(s)；另测发动机kg；已含齿轮箱热交换器预充；批次；安装台账 | 计数同一设计实际供货安装船用发动机。另称量或核验原始实测供货发动机kg及已含预充完整性用于物理船质量；保留件数公开交换属性。不设默认发动机kg/件。 | Item(s) | 每台供货安装发动机 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 应归属安装发动机件数 / 同一配置的验收设备数 | 船用用途供货边界证书；发动机kg件数台账 |
| cp_energy | hull; deck; assembly; rigging; acceptance | electricity | 实际阶段电力 | 场址工单阶段；kWh/MJ；时段校准；泵固化通风待机返工归属 | 计量应归属实际阶段电能；按1 kWh =3.6 MJ换算并保留实际因果共享驱动。不用额定功率额定循环时数消耗。 | MJ | 每表计工单时段 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 应归属阶段能量 / 同一配置的验收设备数 | 表计校准；账单实际阶段驱动 |
| cp_fuel | acceptance | test_diesel | 消耗试验燃油平衡 | 单一证实化石牌号；实际加注消耗退回余留kg；表计时密度温度；实际试验范围时段 | 称量或按实际密度温度表计，分开消耗试验燃油交付余留服务燃油净M排除项。记录实际制造验收时段；不用使用航次消耗手册因子。 | kg | 每次实际执行验收试验 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 应归属消耗试验燃油kg / 同一配置的验收设备数 | 燃油来源；校准表秤；实际试验柜台账 |
| cp_waste | hull; deck; acceptance | single exported waste | 分类接收边界废物 | 单一废物；组成含水；kg外运回收；接收处理边界 | 将固化层合边角料未固化树脂捕集粉尘废丙酮废水基溶液分别按实际外运称量并保留污染接收记录。内部回收不是外运；收集溶液不是自然水体排放。 | kg | 每次废物外运工单 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 应归属外运废物kg / 同一配置的验收设备数 | 秤；组成含水；接收凭证 |
| cp_emission | hull; acceptance | single actual air species | 逐物种治理后监测 | 化学CAS来源；即时空气子介质；粉尘粒径；实际浓度排气体积参考条件时段；治理背景不确定性 | 按相同参考条件逐物种实测治理后浓度排气体积，积分应归属时段扣实测背景。独立核验苯乙烯丙酮化学身份CO2化石来源。所选空气子介质粉尘粒径未特指；具体测量须独立相符身份。不设必需排放总VOC到苯乙烯当量。 | kg | 每代表性实际排放时段 | 同一声明制造验收期间；披露缺口 | 声明船厂受控制造验收试验 | 应归属实测物种kg / 同一配置的验收设备数 | 监测流量校准；物种介质来源依据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `survey_provenance` | cp_mass; finished_vessel | 要求本验收船当前受控原始物理称重重量检验记录，包括校准足量程起重龙门吊负荷传感器读数或其他实际证实可追溯方法、实测空吊索支撑皮重零点、干燥风稳定条件、重复观测不确定性日期操作见证签名。WS2017 H.3.1解释物理校准皮重龙骨艇起吊原则；不引入比赛船体重量定义最低值。验收记录必须引证这些实际原件；采集接口不能单独建立M。不假设整船台秤。本PCR不提供实际船实测值。 | ws-weighing-2017; cp_mass |
| `net_configuration` | cp_mass; cp_parts; cp_count | 将原始称量总成核对为准确一种完整验收清单：纳入船体甲板龙骨桅帆桁固定活动索具两件声明成品帆机及永久舱室电水安全舾装余留工作润滑冷却液。桅帆分离交付时，独立测量同一标识验收部件并签认加减台账，不估缺少桅装质量。排除吊具支架包装人员货物非清单散装件柜服务燃油淡水污水试验压载非预期舱底水，各有实际实测修正。核对组分余留质量独立供货发动机kg预充与净M，避免重复。排水量载重量吨位目录估计满柜重量不能替代M。 | cp_configuration; cp_mass; cp_stock; cp_parts; cp_count |
| `quality_coverage` | complete inventory | 当前受控铺层芯固化接头竣工完整清单确定实际交换，本示例清单不能替代。将各实际额外粗纱织物溶剂促进剂接头本地涂层工作液舱室附件排气冷却操舵导航安全单元模服务包装运输接收处理展开为独立具体卡。匹配供货已含实际库存余留外运排放平衡上游链接，报告不确定性缺口。缺少原始质量路线清单记录阻止声明实测物理完整数据集。不设通用产率用量密度帆质量发动机质量液填充模寿命排放因子。 | cp_configuration; cp_stock; cp_parts; cp_waste; cp_emission |
| `quality_source_limits` | external architecture and weighing | Jeanneau IndexA手册第13页及2014型号规格无编号第1–3页（更新2013年11月，非合同文件）仅建立历史复合桅轴舾装示例。制造商原件保留自船主社区镜像。WS2017年1月手册物理第135–136页印刷H47–H48提供历史测量原则，不是现行法规义务完整设备PCR定义。不采用目录质量面积数值验收公差工作分数。本方法要求当前独立物理记录科学审查。 | jeanneau-owner-manual; jeanneau-spec-2014; ws-weighing-2017 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核对声明完整配置正值实际净M kg、cp_mass原件及独立survey_provenance/net_configuration。保留各公开属性按M归一其单位数量。分开发动机Item(s)件数供货实测kg，余留预充仅一次。 |  |
| `validation_route` | all processes | 要求实际模铺层注入固化接头修边记录、树脂胶衣芯纤维身份组件供货边界，核对输入余留外运实测排放。采购总成不重复组分生产。完整性声明前审查未列舱室电水导航安全实际试验交换。 |  |
| `validation_identity` | all rows | 核验物质类型参考属性单位组实际路线状态浓度介质官方双语名。晶圆路线丙酮不是清洗溶剂；基本丙酮苯乙烯不是采购产品；废溶液不是自来资源水。船用class43110发动机不是道路class43123。即时空气不是长期土壤室内；未特指粉尘不是实测粒级。未解决身份保留明确行缺口。 |  |
| `validation_claims` | dataset claims | 机械PCR检查不能确定科学批准实测工厂完整性现行船级法律符合帆航性能寿命。完整数据集声明前披露缺少实际质量检验限定清单链接上游接收依据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置复合辅助柴油帆船制造前景；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实际净M放大的相同完整配置船制造，单独披露相符供货运输接收链接 |
| excluded_use | 帆航航次旅客航次运输使用燃油维护寿命报废其他船体推进路线方法学批准 |
| required_metadata | 参考限定；当前完整竣工清单路线化学批供货边界；校准原始重量皮重干燥交付加减记录签认M；发动机件数独立供货kg预充；帆纳入；实际验收燃油余留水排除；场址期间分配相符链接 |
| required_quality_disclosure | 身份清单路线质量原始测量链接缺口；来源年代镜像适用性；返工回收外运；不确定性分配敏感性 |
| update_trigger | 船体芯树脂固化接头精整路线；龙骨桅帆机永久舾装供货完整性；质量检验交付柜状态；船厂期间试验计划分配改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| jeanneau-owner-manual | handbook | Jeanneau / SPBI S.A., SUN ODYSSEY349 Owner's Manual158918, IndexA, historical model manual; printed/physical p.13. Manufacturer original retained from owner-community mirror: https://jeanneau349.com/index_htm_files/Jeanneau%20SO349%20-%20Owners%20Manual.pdf | 历史湿法铺层单层玻璃聚酯船体框架及注入玻璃聚酯巴沙甲板结构。不采用尺寸发动机最大质量配方实际M。 |
| jeanneau-spec-2014 | handbook | Jeanneau, SUN ODYSSEY349 Model year2014 specification, updatedNovember2013, non-contractual, unnumbered physical pp.1–3. Manufacturer original retained from owner-community mirror: https://www.jeanneau349.com/index_htm_files/Jeanneau%20SO%20349%20Specs.pdf | 历史固定已涂铸铁龙骨传统铝桅不锈钢固定索机织Dacron帆船用轴机永久舾装示例。不混合替代帆龙骨选配路线。不采用目录kg面积性能认证工厂数量。 |
| ws-weighing-2017 | handbook | World Sailing, International Measurers' Manual, VersionJanuary2017, H.3/H.3.1, printedH47–H48, physical PDFpp.135–136. https://www.sailing.org/tools/documents/IMManual2017-%5B21963%5D.pdf | 历史物理校准干燥风皮重零点及起重龙门吊龙骨艇称重原则；排除来源船体重量定义比赛最低值。不提供实际完整船M法律要求数值公差当前设备记录。 |
