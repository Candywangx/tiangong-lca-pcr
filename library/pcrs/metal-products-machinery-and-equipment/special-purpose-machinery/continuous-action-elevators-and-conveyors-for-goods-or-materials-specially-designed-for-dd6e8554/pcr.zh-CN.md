---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.continuous-action-elevators-and-conveyors-for-goods-or-materials-specially-designed-for-dd6e8554
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 地下专用连续式货物或物料提升机和输送机

## 1. 范围与适用性

本PCR用于形成地下专用完整连续式提升机及输送机的配置特定摇篮到厂门前景数据包。出厂交付包含已安装输送构件、支承结构、驱动、控制、防护、安全装置及所声明首充液体。覆盖带式、链式/刮板式、铠装工作面及转载架构、柔性连续运输，以及实际地下专用斗式或其他连续式提升机。是否纳入由地下工程设计及验收记录确定，而非地上产品标签。
直接核查的Komatsu资料提供铸造槽帮工作面输送机及带链复合柔性运输实例；独立Fenner资料证实地下PVC/PVG带替代路线，JDT/ITG支持链条制造与硬化。这些是路线实例，不是强制设计、配方或行业均值。斗式及其他路线在取得真实设计证据时仍可适用；不预设未经验证的地下斗式设计、带配方或合规证书。
排除普通地上输送机、运输服务、单独替换输送带/链/部件、液体提升机、间歇井筒提升机、人员升降机、截割机、钻掘设备、支架及矿山土建。集成输送总成包含随供进出料与安全接口；单独销售破碎机或截割机不纳入。包含出厂验收试验；安装、运输服务运行能耗、维护及寿命终结属于后续阶段。
## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.continuous-action-elevators-and-conveyors-for-goods-or-materials-specially-designed-for-dd6e8554 |
| classification_refs | CPC 3.0: 44411 |
| covered_products | 地下专用完整连续带式、链式、刮板式、斗式及其他提升机/输送机；固定与柔性系统 |
| excluded_products | 地上通用输送机；部件；间歇提升机；截割/钻掘机；运输服务 |
| representative_product | 已验收且架构明确的完整地下物料输送机；不存在代表全部架构的单一型号 |
| production_route | 真实自制外购矩阵；收货；条件性加工/铸造/链条/输送带/表面处理；装配；出厂试验；发运 |
| market_state | 已验收厂门完整设备，净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供地下专用完整连续式货物/物料输送机或提升机 |
| How much | 一台验收完整设备；清单归一至每1 kg参考流 |
| How well | 声明架构、能力、长度/提升高度、倾角、速度、物料粒度、地下/危险区域、阻燃/抗静电安全与验收规范 |
| How long or cycle | 一次厂门交付；无默认寿命或运行周期 |
| reference_flow_link | finished_underground_conveyor |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 按专门设计用于地下运送货物及原料的连动升降机和输送机 `609af8a1-d52f-4af9-9baf-fefe36a22a50` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；同一配置与架构；验收物料清单；净质量；带/PVC/PVG/链/斗规格；物料；能力；长度/提升高度；速度；倾角；驱动/耦合器；电压；地下与危险区域依据；阻燃/抗静电要求；供货状态；试验边界；场址；期间；自制外购；包装 |

质量归一输出是制造参考，不构成设备之间功能等价。比较须匹配架构、能力及安全配置。前景包必须声明所有限定信息。
## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| physical_species | 仅物理物料与物种记录 | Mass | kg | 每种物料采用自身湿干基、水分及分析；保留首充计入设备质量，包装及废品不计入。总质量不等于所含Fe、Cr、Mn、Zn、溶剂或油质量。 |
| utility_units | 公用工程记录 | 记录的交付属性 | 原始计量单位 | 电力kWh、热MJ及气体体积/状态分开；1 kWh = 3.6 MJ为精确换算，不是电力排放因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付工厂的牌号特定物料及完整部件；声明已完成加工及预充液 |
| starting_condition_role | 前景制造，上游供应链仅链接一次 |
| product_classification_scope | 地下专用连续货物/物料机械；全部真实架构 |
| recursive_input_rule | 外购同类别完整设备或总成作为一个外购产品链接上游数据集；不得再次展开相同工序 |
| upstream_dataset_requirement | 匹配实际牌号、制造路线、供应状态、地域、期间、电压及废物处理接口；披露未解决代理 |
| disclosure | 配置、自制外购矩阵、场址、期间、供应、试验模式、分配、未测交换及后续阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_manufacture | 前景 | 纳入可归属收货、真实制造、表面处理、装配、首充、试验、废品返工、工厂废物排放及发运。 |  |
| b_makebuy | 所有工序 | 采用下方矩阵：外购成品部件保留一次上游负担；厂内原料替代对应外购成品；内部转移在汇总清单抵消。 | komatsu-longwall-2023 |
| b_later | 前景 | 区分地下安装、使用阶段运输能耗、维护及寿命终结；破碎机/截割机/支架不得作为参考输送机。 | komatsu-haulage-2021;un-cpc-3-2025 |

### 自制外购与架构矩阵

| 架构 | 真实构件 | 外购路线 | 自制路线 |
| --- | --- | --- | --- |
| AFC | 铸造槽帮、耐磨底板、链、刮板及驱动 | 外购成品铸件/链；仅加工真实板件及后续机加工 | 实际执行时计合金炉料/型砂/捕集衡算及链环成形/焊接/热处理/证明载荷试验 |
| Belt/FCT | 阻燃带、托辊/滚筒、驱动及真实牵引构件 | 外购规定PVC/PVG/橡胶带含上游负担；前景仅安装与拼接 | PVC整芯路线：真实浸渍/塑化；橡胶路线：真实压延/硫化；PVG覆盖路线仅按真实工单确定。拆分每种实测组分；无共同配方或统一硫化要求。 |
| Bucket/other | 真实地下专用输送构件及驱动 | 外购完整料斗/链或带；保留供货状态 | 按真实料斗牌号切割/成形/连接及真实驱动/构件工序；取得项目设计证据 |
| Drive/control | 电机、减速器、耦合器、控制柜、电缆及安全装置 | 一个完整外购部件，含嵌入金属/电子/预充液 | 仅真实厂内制造及额外充液/试验负荷；不重复嵌入清单 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | 收货、齐套与入厂运输 | required | 始终 | 真实前景操作 | 每台验收成品设备 |
| fabrication | 板材制造与机加工 | conditional | 厂内制造机架、槽体、溜槽、料斗、轴或滚筒 | 真实前景操作 | 每台验收成品设备 |
| casting | 钢制部件铸造 | conditional | 实际厂内铸造槽帮、驱动架或壳体 | 真实前景操作 | 每台验收成品设备 |
| chain | 链条与刮板制造 | conditional | 实际厂内制造链环、连接件、刮板或链轮 | 真实前景操作 | 每台验收成品设备 |
| belt | 输送带及提升机构件制造 | conditional | 实际厂内成带或料斗制造；区分真实路线 | 真实前景操作 | 每台验收成品设备 |
| finish | 清洗与表面防护 | conditional | 场址实际清洗、喷砂或涂装 | 真实前景操作 | 每台验收成品设备 |
| assembly | 装配、初次充液与出厂验收 | required | 始终 | 真实前景操作 | 每台验收成品设备 |
| services | 剩余共用公用工程与发运 | required | 仅可归属且尚未分配的场址剩余服务及发运 | 真实前景操作 | 每台验收成品设备 |

以下为原子路线卡片，不是配方或封闭默认物料清单。数据包必须为尚未表示的每一实际牌号、树脂、固化剂、硫化剂、阻燃剂、增强体、燃料、润滑剂、液压部件、轴承、紧固件、传感器、液压缸、危险废物或污染物添加独立行。外购组件制造仅嵌入一次。新增行保留相同分母、链接协议、精确物理身份及路线证据。仅有物理缺席证据时使用not_applicable；未知单独记录。
### 过程：收货、齐套与入厂运输（`receipt`）

#### 输入

##### 产品流

###### 铸钢工作面输送机槽帮（`purchased_pan_side`）

仅外购成品铸件；记录真实合金牌号及供货机加工状态。

- 选定流：铸钢工作面输送机槽帮
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`komatsu-longwall-2023`

###### 经热处理的焊接合金钢输送链（`purchased_chain`）

外购完整链条；注明牌号、链环几何形状、节距及试验证书。

- 选定流：经热处理的焊接合金钢输送链
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`jdt-manufacturing`; `itg-chain-hardening`

###### 阻燃抗静电PVC整芯输送带（`purchased_belt`）

仅实际安装此种外购带结构时；不得以普通橡胶带替代。

- 选定流：阻燃抗静电PVC整芯输送带
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`fenner-pvc`

###### 阻燃织物增强橡胶输送带（`purchased_rubber_belt`）

仅实际外购地下认证橡胶带；不是PVC/PVG胶料化学。

- 选定流：阻燃织物增强橡胶输送带
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`fenner-production`

###### 阻燃橡胶覆盖PVC整芯输送带（`purchased_pvg`）

仅实际外购PVG配置；仅PVC与PVG为替代路线，除非分别供货。

- 选定流：阻燃橡胶覆盖PVC整芯输送带
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`fenner-pvg`

###### 制造完成的钢制提升料斗（`purchased_bucket`）

实际外购并装入地下专用连续式提升机的料斗；保留牌号及净质量。

- 选定流：制造完成的钢制提升料斗
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`

###### 柴油货车货运服务（`inbound_road`）

实际公路交付；采用货运载荷距离，不得将设备质量乘任意距离。

- 选定流：柴油货车货运服务
- 流属性/单位：Mass * distance / t km
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_transport。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport`

###### 外购交流电（`electricity_receipt`）

真实供应商、电压、交付电表与地域；本工序仅分配自身计量或因果分配负荷。

- 选定流：外购交流电
- 流属性/单位：Electrical energy / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electricity。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`jrc-metal-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：板材制造与机加工（`fabrication`）

#### 输入

##### 产品流

###### 耐磨钢板（`abrasion_plate`）

用于实际制造的工作面输送机上底板或耐磨衬板；声明钢厂牌号及炉批证书。

- 选定流：耐磨钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`komatsu-longwall-2023`

###### 结构碳钢板（`structural_plate`）

实际切割、折弯及焊接结构；认证牌号须与耐磨板分开。

- 选定流：结构碳钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 合金钢轴用棒材（`shaft_bar`）

仅实际厂内轴机加工；注明具体合金牌号及来料状态。

- 选定流：合金钢轴用棒材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 实心碳钢焊丝（`welding_wire`）

仅气体保护焊实际消耗的焊丝牌号；其他耗材分别拆行。

- 选定流：实心碳钢焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 氩气保护气体（`argon`）

仅实际氩气供给；混合气组成需要分别计量组分或经验证混合气流。

- 选定流：氩气保护气体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 热切割用氧气（`oxygen_cut`）

仅实际氧气切割路线；注明交付状态及纯度。

- 选定流：热切割用氧气
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 水混溶金属加工液浓缩液（`coolant`）

实际机加工冷却液配方及稀释比例；水独立记录，不得把乳化液总量当作浓缩液。

- 选定流：水混溶金属加工液浓缩液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`jrc-metal-2020`

###### 外购交流电（`electricity_fabrication`）

真实供应商、电压、交付电表与地域；本工序仅分配自身计量或因果分配负荷。

- 选定流：外购交流电
- 流属性/单位：Electrical energy / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electricity。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`jrc-metal-2020`

###### 工业过程水（`water_fabrication`）

仅实际外购水；分别计量补水、物料含水、再用、蒸发及排水。

- 选定流：工业过程水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-metal-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类钢制加工废料（`steel_scrap`）

仅外送回收；记录牌号及其自身含水与含油分析；内部可用边角料按成对转移。

- 选定流：分类钢制加工废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 废含水金属加工乳化液（`spent_emulsion`）

实际场外处理；通过对应样品区分载体水、所含油及金属。

- 选定流：废含水金属加工乳化液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`jrc-metal-2020`

###### 工业含水废水（`wastewater_fabrication`）

仅实际外部处理排水；明确处理接口、污染物浓度及自身水分基准。

- 选定流：工业含水废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

##### 基本流

### 过程：钢制部件铸造（`casting`）

#### 输入

##### 产品流

###### 合金钢铸造炉料（`steel_charge`）

仅实际厂内铸造；各牌号与炉次、原生料和外购废钢分别记录；回炉浇冒口内部抵消。

- 选定流：合金钢铸造炉料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`komatsu-longwall-2023`

###### 硅质型砂（`silica_sand`）

仅实际砂型路线；采用干基并将黏结剂分开。

- 选定流：硅质型砂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 硅酸钠铸造黏结剂（`silicate_binder`）

仅实际无机黏结砂型；保留配方水与固体含量。

- 选定流：硅酸钠铸造黏结剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 外购交流电（`electricity_casting`）

真实供应商、电压、交付电表与地域；本工序仅分配自身计量或因果分配负荷。

- 选定流：外购交流电
- 流属性/单位：Electrical energy / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electricity。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`jrc-metal-2020`

###### 工业过程水（`water_casting`）

仅实际外购水；分别计量补水、物料含水、再用、蒸发及排水。

- 选定流：工业过程水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-metal-2020`

###### 管输天然气（`natural_gas_casting`）

仅实际燃气炉、干燥机或烘炉；测量组成、热值基准及交付供气；电炉为替代路线。

- 选定流：管输天然气
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铸钢炉渣（`casting_slag`）

实际外送炉渣；采用其自身干质量及合金元素分析，不得沿用钢炉料成分。

- 选定流：铸钢炉渣
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 捕集铸钢除尘灰（`foundry_dust`）

实际离开场址的过滤残渣；记录自身水分及各物种分析。

- 选定流：捕集铸钢除尘灰
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 废硅质铸造砂（`spent_sand`）

实际废弃型砂；再用库存须与废物分开。

- 选定流：废硅质铸造砂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 工业含水废水（`wastewater_casting`）

仅实际外部处理排水；明确处理接口、污染物浓度及自身水分基准。

- 选定流：工业含水废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

##### 基本流

###### 排入空气的化石二氧化碳（`co2_casting`）

实际现场化石燃烧；采用燃料碳及物种特定烟囱证据；不在此计外购电力燃烧。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`

### 过程：链条与刮板制造（`chain`）

#### 输入

##### 产品流

###### 合金钢链条盘条（`chain_bar`）

实际厂内链条路线：切断、成形、焊环、热处理及证明载荷试验；采用认证牌号。

- 选定流：合金钢链条盘条
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`jdt-manufacturing`; `itg-chain-hardening`

###### 合金钢刮板锻坯（`flight_forging`）

实际刮板、链轮或连接件路线；外购锻坯仅计一次上游锻造，前景仅后续加工与硬化。

- 选定流：合金钢刮板锻坯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`jdt-manufacturing`

###### 矿物淬火油（`quench_oil`）

仅实际油淬；计量补充、回收返回、带出及库存变化。

- 选定流：矿物淬火油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`itg-chain-hardening`

###### 外购交流电（`electricity_chain`）

真实供应商、电压、交付电表与地域；本工序仅分配自身计量或因果分配负荷。

- 选定流：外购交流电
- 流属性/单位：Electrical energy / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electricity。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`jrc-metal-2020`

###### 工业过程水（`water_chain`）

仅实际外购水；分别计量补水、物料含水、再用、蒸发及排水。

- 选定流：工业过程水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-metal-2020`

###### 管输天然气（`natural_gas_chain`）

仅实际燃气炉、干燥机或烘炉；测量组成、热值基准及交付供气；电炉为替代路线。

- 选定流：管输天然气
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废矿物淬火油（`spent_quench`）

实际废弃淬火油；内部循环油成对抵消。

- 选定流：废矿物淬火油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 工业含水废水（`wastewater_chain`）

仅实际外部处理排水；明确处理接口、污染物浓度及自身水分基准。

- 选定流：工业含水废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

##### 基本流

###### 排入空气的化石二氧化碳（`co2_chain`）

实际现场化石燃烧；采用燃料碳及物种特定烟囱证据；不在此计外购电力燃烧。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`

### 过程：输送带及提升机构件制造（`belt`）

#### 输入

##### 产品流

###### 未硫化阻燃输送带胶料（`rubber_compound`）

压延或硫化实际消耗的外购预配胶料；无默认聚合物与填料配方。若现场混炼，拆出每种实际组分。

- 选定流：未硫化阻燃输送带胶料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`fenner-production`

###### 聚酯织物输送带芯体（`textile_carcass`）

仅实际聚酯增强材料；尼龙或钢丝绳增强须另列。

- 选定流：聚酯织物输送带芯体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`fenner-production`

###### PVC输送带浸渍胶料（`pvc_compound`）

整芯浸渍及塑化实际使用的外购配混PVC；记录成分证书及保留比例。

- 选定流：PVC输送带浸渍胶料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`fenner-pvc`

###### 外购交流电（`electricity_belt`）

真实供应商、电压、交付电表与地域；本工序仅分配自身计量或因果分配负荷。

- 选定流：外购交流电
- 流属性/单位：Electrical energy / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electricity。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`jrc-metal-2020`

###### 工业过程水（`water_belt`）

仅实际外购水；分别计量补水、物料含水、再用、蒸发及排水。

- 选定流：工业过程水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-metal-2020`

###### 管输天然气（`natural_gas_belt`）

仅实际燃气炉、干燥机或烘炉；测量组成、热值基准及交付供气；电炉为替代路线。

- 选定流：管输天然气
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 阻燃橡胶输送带边角料（`belt_offcut`）

实际离场的橡胶带边角料；PVC废料须独立一行。

- 选定流：阻燃橡胶输送带边角料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 工业含水废水（`wastewater_belt`）

仅实际外部处理排水；明确处理接口、污染物浓度及自身水分基准。

- 选定流：工业含水废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

##### 基本流

###### 排入空气的化石二氧化碳（`co2_belt`）

实际现场化石燃烧；采用燃料碳及物种特定烟囱证据；不在此计外购电力燃烧。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`

### 过程：清洗与表面防护（`finish`）

#### 输入

##### 产品流

###### 钢质喷砂磨料（`blasting_grit`）

仅实际喷砂；再用磨料库存与过滤粉尘分开。

- 选定流：钢质喷砂磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 双组分环氧防护涂料（`epoxy_coating`）

实际供应树脂与固化剂混合产品；记录各批号、混合比例、水、溶剂及干固体；不得假定所有设备涂装。

- 选定流：双组分环氧防护涂料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 二甲苯溶剂（`xylene_solvent`）

仅实际辨识的清洗或稀释溶剂；由安全数据表确定组分及异构体组成。

- 选定流：二甲苯溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 外购交流电（`electricity_finish`）

真实供应商、电压、交付电表与地域；本工序仅分配自身计量或因果分配负荷。

- 选定流：外购交流电
- 流属性/单位：Electrical energy / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electricity。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`jrc-metal-2020`

###### 工业过程水（`water_finish`）

仅实际外购水；分别计量补水、物料含水、再用、蒸发及排水。

- 选定流：工业过程水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-metal-2020`

###### 管输天然气（`natural_gas_finish`）

仅实际燃气炉、干燥机或烘炉；测量组成、热值基准及交付供气；电炉为替代路线。

- 选定流：管输天然气
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 环氧涂料过喷污泥（`coating_sludge`）

实际外送涂料残渣；采用自身固体、水分、溶剂及金属分析。

- 选定流：环氧涂料过喷污泥
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 工业含水废水（`wastewater_finish`）

仅实际外部处理排水；明确处理接口、污染物浓度及自身水分基准。

- 选定流：工业含水废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

##### 基本流

###### 排入空气的二甲苯（`xylene_air`）

仅扣除产品保留、回收、捕集、实际销毁或化学转化及非空气项后的物种特定实测未捕集释放；不得把总VOC当二甲苯。

- 选定流：排入空气的二甲苯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`

###### 排入空气的化石二氧化碳（`co2_finish`）

实际现场化石燃烧；采用燃料碳及物种特定烟囱证据；不在此计外购电力燃烧。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`

### 过程：装配、初次充液与出厂验收（`assembly`）

#### 输入

##### 产品流

###### 地下用额定交流驱动电机（`motor`）

实际外购完整电机；声明外壳、冷却及危险区域额定条件。

- 选定流：地下用额定交流驱动电机
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 工业输送机减速器（`gearbox`）

实际外购减速器；声明传动比、扭矩、净质量及预充润滑油。

- 选定流：工业输送机减速器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 地下输送机控制柜（`control`）

实际完整外购柜；声明电压、防护及安全接口。

- 选定流：地下输送机控制柜
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 钢制输送机托辊（`idlers`）

实际外购托辊；记录数量与部件实测质量，含轴承。

- 选定流：钢制输送机托辊
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 钢制输送机驱动滚筒（`pulley`）

实际外购滚筒；记录钢制筒体及供货包胶状态。

- 选定流：钢制输送机驱动滚筒
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 合金钢输送机刮板（`flightbar`）

实际外购成品刮板，不得在链条工序重复制造。

- 选定流：合金钢输送机刮板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 铜芯绝缘动力电缆（`copper_cable`）

实际安装电缆；说明屏蔽与导体规格，记录供应组件净质量。

- 选定流：铜芯绝缘动力电缆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_components。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 矿物齿轮润滑油（`oil_fill`）

仅实际新充且保留的首充质量；排除已含于外购减速器的油及维护油。

- 选定流：矿物齿轮润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 阻燃水乙二醇液压液（`hydraulic_fill`）

仅实际随供液压或张紧回路；记录真实牌号、成分及湿质量。

- 选定流：阻燃水乙二醇液压液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 液力耦合器用除盐水（`coupling_water`）

仅实际水介质耦合器及厂内试验或充液；区分保留充液与排出试验水。

- 选定流：液力耦合器用除盐水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`komatsu-longwall-2023`; `komatsu-haulage-2021`

###### 外购交流电（`electricity_assembly`）

真实供应商、电压、交付电表与地域；本工序仅分配自身计量或因果分配负荷。

- 选定流：外购交流电
- 流属性/单位：Electrical energy / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electricity。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`jrc-metal-2020`

###### 工业过程水（`water_assembly`）

仅实际外购水；分别计量补水、物料含水、再用、蒸发及排水。

- 选定流：工业过程水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-metal-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 按专门设计用于地下运送货物及原料的连动升降机和输送机（`finished_underground_conveyor`）

已验收完整配置，测量净质量；此行为参考输出。

- 选定流：按专门设计用于地下运送货物及原料的连动升降机和输送机 `609af8a1-d52f-4af9-9baf-fefe36a22a50`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`

##### 废物流

###### 废矿物齿轮试验油（`spent_test_oil`）

实际排出并外送的油；回收油与安装首充分别计量。

- 选定流：废矿物齿轮试验油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 工业含水废水（`wastewater_assembly`）

仅实际外部处理排水；明确处理接口、污染物浓度及自身水分基准。

- 选定流：工业含水废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

##### 基本流

### 过程：剩余共用公用工程与发运（`services`）

#### 输入

##### 产品流

###### 锯制软木运输木箱（`wood_crate`）

实际出厂运输包装；单独输出并排除在验收设备净质量外。

- 选定流：锯制软木运输木箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

###### 外购交流电（`electricity_services`）

真实供应商、电压、交付电表与地域；本工序仅分配自身计量或因果分配负荷。

- 选定流：外购交流电
- 流属性/单位：Electrical energy / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electricity。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`jrc-metal-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 锯制软木运输木箱（`packaging_output`）

随货运输包装；质量与包装输入核对，不计参考质量。

- 选定流：锯制软木运输木箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_physical。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_direct | 共用操作 | 优先物理拆分、工单及分表；将废品返工生产负担保留在可归属期间Q内。 |  |
| a_causal | 剩余共用服务 | 仅对实测未分配剩余服务采用合理机时、热需求、涂覆面积或其他实测因果驱动分配；披露分子与分母。 | jrc-metal-2020 |
| a_scrap | 废料及残渣 | 报告真实废物输出及处理接口；前景清单无避免原生金属信用。内部回炉料不是外购再生金属。 |  |
| a_unresolved | 不可拆分产品 | 不默认按收入或质量分配；若拆分无法区分共同负担，要求因果证据及敏感性审查。 |  |

## 8. 前景数据采集、计算与质量规则

对一个配置及一个代表性报告期间，Q定义为包含废品/返工负担的可归属交换量，N为验收完整设备数量，验收总净质量为经校准同配置质量之和。M = 验收总净质量 / N；q_item = Q / N；然后q_ref = q_item / M = Q / 验收总净质量。验收总净质量不得包含废品或包装，不得平均不同配置。下方有限normalize_mass规则仅表示最终换算；先完成原始期间核算及分配。
### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | finished_underground_conveyor | 实测记录 | 型号；配置；序列号；验收净质量 M；验收数量 N；验收总净质量；皮重；验收 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每批与报告期间 | 一个声明期间 | 声明工厂及供应商 | 每台验收净质量 | 校准；发票；签署记录；样品链；不确定性 |
| cp_physical | receipt;fabrication;casting;chain;belt;finish;assembly;services | 物理质量输入及输出 | 实测记录 | 行身份；牌号；批次；领料；退料；期初与期末库存；毛重/皮重/净重；湿基/干基；自身水分与物种分析；内部转移对；Q；N；配置 | 将校准秤、领退料、转移联单及样品追溯至同一配置与期间；计入废品及返工负担。 | kg | 每批与报告期间 | 一个声明期间 | 声明工厂及供应商 | 每台验收成品设备 | 校准；发票；签署记录；样品链；不确定性 |
| cp_components | receipt;assembly | 外购完整部件 | 实测记录 | 部件/序列号；供应商；实际牌号；供货状态；数量；已验证部件净质量；预充液；物料清单；Q；N | 核对实际验收物料清单与供应商称重；长度换算质量须包含接头、拼接及余料，不采用名义平均值。 | kg | 每批与报告期间 | 一个声明期间 | 声明工厂及供应商 | 每台验收成品设备 | 校准；发票；签署记录；样品链；不确定性 |
| cp_electricity | receipt;fabrication;casting;chain;belt;finish;assembly;services | 电力行 | 实测记录 | row_id；电表；期初/期末；输入；发电；外送；储能；已分配工序负荷；剩余量；因果驱动；Q；N | 以一个场址期间核对各电表及已分配剩余负荷；保留kWh及不确定性。 | kWh | 每批与报告期间 | 一个声明期间 | 声明工厂及供应商 | 每台验收成品设备 | 校准；发票；签署记录；样品链；不确定性 |
| cp_water | fabrication;casting;chain;belt;finish;assembly | 水及含水排水 | 实测记录 | 补水；组分水分；期初/期末水库存；循环对；蒸发；反应水；排水；自身水分；Q；N | 计量全部外部水并按各自湿干基采样含水输出；成对再用为内部转移。 | kg | 每批与报告期间 | 一个声明期间 | 声明工厂及供应商 | 每台验收成品设备 | 校准；发票；签署记录；样品链；不确定性 |
| cp_fuel | casting;chain;belt;finish | 天然气 | 实测记录 | 交付体积；温度；压力；标准状态；组成；低位热值；碳；Q；N | 保留交付条件；仅以实际状态与组成换算体积；记录可归属热负荷。 | m3 | 每批与报告期间 | 一个声明期间 | 声明工厂及供应商 | 每台验收成品设备 | 校准；发票；签署记录；样品链；不确定性 |
| cp_emission | casting;chain;belt;finish | 物种特定空气输出 | 实测记录 | 物种；环境介质；浓度；气体流量；时间；捕集；保留；回收；实际销毁或化学转化；非空气；库存；不确定性；Q；N | 采用物种分辨实测释放质量或已验证闭合物种衡算；捕集不等于实际销毁或化学转化。 | kg | 每批与报告期间 | 一个声明期间 | 声明工厂及供应商 | 每台验收成品设备 | 校准；发票；签署记录；样品链；不确定性 |
| cp_transport | receipt | inbound_road | 实测记录 | 货运；模式；载荷；距离；车辆类别；返回；Q；N | 匹配真实货运载荷与行驶距离；空返仅在服务边界有证据时纳入。 | t km | 每批与报告期间 | 一个声明期间 | 声明工厂及供应商 | 每台验收成品设备 | 校准；发票；签署记录；样品链；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 物理核对与有限衡算

**materials**: 对每种真实物料身份：外部输入+期初库存+反应生成=验收保留物料+废品/废料+渣+污泥+废水携带物料+捕集残渣+释放物种+期末库存+反应消耗。内部返回输入/输出成对抵消；将返工追踪至验收输出或废物。通过真实称重及工艺化学核对总量，不假定产率。

**contained-species**: 对Fe/Cr/Mn/Zn或真实物种k，各项k = 该项干质量×其自身对应干基分析（或湿质量×其自身湿基浓度）。产品、废料、渣、尘、污泥、废水及释放各需自身分析、水分及采样覆盖。加入物种库存与真实反应/转化；不得将输入钢成分用于全部输出或把废物总质量等同所含金属。

**water**: 外部补水+来料/涂料/液体含水+期初水库存+反应生成水=产品/首充保留水+蒸发水+排水+废物含水+期末水库存+反应消耗水。每种湿物流使用自身水分；内部循环冷却/试验水为成对转移，不是新供水。区分外购水与真实资源环境介质的直接取水。

**solvent**: 对每种真实溶剂：外部新输入+配方所含溶剂+期初溶剂库存=产品保留溶剂+外送回收溶剂+废物/捕集介质/废水所含溶剂+该物种实测销毁或化学转化+向空气释放溶剂+期末库存。内部回收再用溶剂成对抵消。捕集效率不是实际销毁或化学转化；缺失非空气项不得分配至空气。每种真实溶剂物种拆分并分别计氧化装置反应产物。

**utilities**: 同一场址期间及单位：净可用电力=外购输入+实测现场发电+储能放电-外送-储能充电/损失。已分配工序负荷+未分配剩余量必须核对至该量；共用服务仅获得实测剩余及可归属因果份额。不得在工序电表上叠加工厂总量。压缩空气与循环热为内部转移，压缩机/供能输入仅计一次。现场燃料与物种排放同外购公用工程上游分开。使用原始读数调查负剩余、电表重叠或不确定储能，不得截零。

**uncertainty**: 对各残差传播真实秤、电表、采样、分析、分配及库存不确定性，已知时记录相关性。调查有统计意义的残差及可能缺失流或期间/状态不匹配；未解释残差保留为质量缺口。不使用统一数值容差、虚构损失因子或默认排放因子。燃料碳核对本身不能确定CO、NOx或颗粒物排放；取得物种/环境介质特定证据并添加原子行。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_scope | 配置 | 保留真实地下设计、验收、物料清单、自制外购及供应物理状态 | 图纸；证书；路线台账 |
| dq_period | 记录 | 匹配代表期间及配置；含废品返工；说明试生产及产品组合 | 生产台账；工时记录 |
| dq_closure | 物理衡算 | 以自身实测分数及合并不确定性完成衡算；缺失视为未解决 | 校准；实验室链；衡算工作簿 |
| dq_supply | 上游 | 匹配物理供货接口与地域；不得将来源特定美国电力或生物质焚烧当通用工厂电力 | 供应合同；数据集备注；敏感性 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_scope | 参考产品 | 验证完整地下连续设计、架构、安全及验收限定；拒绝普通地上输送机或运输服务。 |  |
| v_denominator | 所有清单行 | 验证同一配置期间Q、N及校准验收净质量；输出1 kg且各行具有支持换算。拒绝包装/废品分母或跨配置平均。 |  |
| v_routes | 自制外购矩阵 | 证明每种条件交换存在或not_applicable；未知不是零。不得随意累加外购/自制、带/链/斗及电/气路线。 |  |
| v_balance | 物理物料及物种 | 采用库存、反应及内部成对转移闭合总质量、自身分析所含物种、水与溶剂；将残差与真实合并不确定性比较并调查，不设统一容差。 |  |
| v_utility | 公用工程行 | 将工序分表与仅未分配剩余量核对至同一场址期间净供应，含发电、外送及储能；调查负剩余，不得截零。 | jrc-metal-2020 |
| v_identity | 上游及排放行 | 要求真实类型/属性/状态/供应方/地域/环境介质相容；未解决UUID及经验因子仍为声明缺口，不得虚构替代。燃料碳本身不能确定CO或NOx。 |  |
| v_balance_materials | 物理物料及物种记录 | 对每种真实物料身份：外部输入+期初库存+反应生成=验收保留物料+废品/废料+渣+污泥+废水携带物料+捕集残渣+释放物种+期末库存+反应消耗。内部返回输入/输出成对抵消；将返工追踪至验收输出或废物。通过真实称重及工艺化学核对总量，不假定产率。 |  |
| v_balance_contained-species | 物理物料及物种记录 | 对Fe/Cr/Mn/Zn或真实物种k，各项k = 该项干质量×其自身对应干基分析（或湿质量×其自身湿基浓度）。产品、废料、渣、尘、污泥、废水及释放各需自身分析、水分及采样覆盖。加入物种库存与真实反应/转化；不得将输入钢成分用于全部输出或把废物总质量等同所含金属。 |  |
| v_balance_water | 物理物料及物种记录 | 外部补水+来料/涂料/液体含水+期初水库存+反应生成水=产品/首充保留水+蒸发水+排水+废物含水+期末水库存+反应消耗水。每种湿物流使用自身水分；内部循环冷却/试验水为成对转移，不是新供水。区分外购水与真实资源环境介质的直接取水。 |  |
| v_balance_solvent | 物理物料及物种记录 | 对每种真实溶剂：外部新输入+配方所含溶剂+期初溶剂库存=产品保留溶剂+外送回收溶剂+废物/捕集介质/废水所含溶剂+该物种实测销毁或化学转化+向空气释放溶剂+期末库存。内部回收再用溶剂成对抵消。捕集效率不是实际销毁或化学转化；缺失非空气项不得分配至空气。每种真实溶剂物种拆分并分别计氧化装置反应产物。 |  |
| v_balance_utilities | 公用工程记录 | 同一场址期间及单位：净可用电力=外购输入+实测现场发电+储能放电-外送-储能充电/损失。已分配工序负荷+未分配剩余量必须核对至该量；共用服务仅获得实测剩余及可归属因果份额。不得在工序电表上叠加工厂总量。压缩空气与循环热为内部转移，压缩机/供能输入仅计一次。现场燃料与物种排放同外购公用工程上游分开。使用原始读数调查负剩余、电表重叠或不确定储能，不得截零。 |  |
| v_balance_uncertainty | 物理物料及物种记录 | 对各残差传播真实秤、电表、采样、分析、分配及库存不确定性，已知时记录相关性。调查有统计意义的残差及可能缺失流或期间/状态不匹配；未解释残差保留为质量缺口。不使用统一数值容差、虚构损失因子或默认排放因子。燃料碳核对本身不能确定CO、NOx或颗粒物排放；取得物种/环境介质特定证据并添加原子行。 |  |
| v_period_accounting | 所有清单行 | 对每一同配置期间，Q为含废品返工负担的可归属交换；N为完整验收数量；M = 经校准验收净质量之和 / N；q_item = Q / N；q_ref = q_item / M = Q / 验收净质量之和。分母排除包装及废品质量；不得混合不同配置。保留安装首充包含于验收净质量。 |  |
| v_architecture_makebuy | 真实路线记录 | 工作面铸造槽帮与加工耐磨板为不同操作；仅真实厂内铸造/链环成形焊接硬化具有前景输入。外购铸件、热处理链、齿轮及电机仅计一次嵌入制造。PVC整芯浸渍塑化、橡胶压延硫化及真实PVG覆盖为不同条件路线，不是共同配方。外购带含上游负担，前景仅真实安装拼接。真实地下斗式/其他设计需项目证据及真实切割成形连接或外购构件供货状态。不推定强制合金、温度、胶料配方或安全认证。 | komatsu-longwall-2023;fenner-pvc;fenner-pvg;fenner-production |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置特定前景制造包 |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 匹配地下架构与声明功能能力的制造/采购研究 |
| excluded_use | 不同输送机每kg直接等价；未加使用/安装阶段的运输服务生命周期 |
| required_metadata | PCR/版本；配置；验收物料清单；真实供应商/自制外购；Q/N/M；场址/期间；安全；驱动/构件；边界；包装；分配；库存；分析；不确定性；代理 |
| required_quality_disclosure | 覆盖、缺失记录/UUID/范围、校准、残差、采样不确定性、条件缺席及未解决来源证据 |
| update_trigger | 架构、能力、牌号/配方、链/带、驱动、供应商/场址/公用工程、安全、工艺或边界改变 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, codes 44411 and 43220; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 分类边界：地下连续货物/物料输送与液体提升机区分；不是架构或方法证据 |
| komatsu-longwall-2023 | handbook | Komatsu, Longwall systems, EN-Longwall_FA01-0123-V3, PDF p. 10, https://www.komatsu.com/content/dam/komatsu/sales-and-marketing-documents/brochures/longwall/longwall-systems-product-overview-English-en-fa01.pdf | 工作面输送机铸造槽帮、耐磨板与匹配传动；条件架构实例，不采用数量或寿命 |
| komatsu-haulage-2021 | handbook | Komatsu, Haulage Systems, EN-HSP001-0821-V3, PDF p. 11, https://www.komatsu.com/content/dam/komatsu/sales-and-marketing-documents/brochures/room-pillar/en-hspo01-0821-v3.pdf | 地下柔性连续带链运输及驱动/配置接口；与单独地上输送机区分 |
| jdt-manufacturing | extension_guidance | J.D. Theile, Mining and industrial contract manufacturing, https://www.jdt.de/en/ (dated snapshot 2026-10-01) | 独立链/刮板/链轮供应方及锻造/折弯/焊接/热处理可能工序；不是配方或强制工厂路线 |
| itg-chain-hardening | extension_guidance | ITG Induktionsanlagen, Chain hardening systems, https://www.itg-induktion.de/en/induction-systems/hardening-annealing-and-tempering-systems/chain-hardening-systems (dated snapshot 2026-10-01) | 独立矿用链热处理；须验证真实硬化路线 |
| fenner-pvc | extension_guidance | Fenner Conveyor Belting, Fenner PVC (FR), https://fennerconveyorbelting.com/products/fenner-pvc/ (dated snapshot 2026-10-01) | 地下阻燃抗静电PVC整芯带；无通用带配方 |
| fenner-pvg | extension_guidance | Fenner Conveyor Belting, Fenner PVG (FRSR), https://fennerconveyorbelting.com/products/fenner-pvg/ (dated snapshot 2026-10-01) | 独立橡胶覆盖PVC带地下替代路线；不把橡胶硫化配方强加于PVC浸渍 |
| fenner-production | extension_guidance | Fenner Dunlop, Production Methods and Quality Control, https://www.fennerdunlopemea.com/about-us/products-implementation-production/ (dated snapshot 2026-10-01) | 条件成带压延/硫化及增强路线；供应方实例，不是必需配方 |
| jrc-metal-2020 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products manufacturing sector, EUR 30025 EN, 2020, doi:10.2760/894966, chapters 3-4; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | 通用机加工液及工厂公用工程记录完整性；不将行业基准作为输送机数值 |
