---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-conditioning-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 空气调节设备

## 1. 范围与适用性

本规则规定结合电动风机与改变空气温湿度元件的可销售空气调节设备生产，含湿度不能单独调节的设备。包括整体式/窗/墙/顶/地板式、分体/多联、风管/屋顶及车辆乘员空气调节形式；纳入可逆空气调节热泵及不自带制冷装置的设备。排除仅通风风机、独立制冷/冷冻设备或非空气调节设备的热泵、单独替换零部件、安装、使用与报废。CPC3 当前名称、历史 CPC2.1 对照及 WCO 范围是互补证据，不是可互换版本。

代表路线为声明蒸气压缩配置的工厂生产。热驱动吸收式及外供水/热力盘管配置在交付设备满足空气调节边界时仍在范围内，独立吸收式冷水机不自动成为空调。声明实际路线：压缩设备需要压缩机及制冷回路；吸收式采用实际发生器/吸收器、泵与工质对替代；外供盘管设备可不带充注介质交付。其他新兴技术须明确路线专属模块/化学品清单并审查证据，禁止借用压缩机 BOM。厂商来源中的磁制冷属于前瞻。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-conditioning-machines |
| classification_refs | CPC 3.0:43912 |
| covered_products | 空气调节设备 |
| excluded_products | 仅通风风机；其他制冷/热泵设备；单独零件；服务 |
| representative_product | 声明验收合格完整空调销售配置 |
| production_route | 实际有条件板材/盘管/塑料加工，回路/电气装配、充注或干式放行、工厂试验及包装；保留路线备选 |
| market_state | 工厂出口已验收测试设备，含声明模块及留存充注介质，排除安装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明完整空气调节设备 |
| How much | 1 kg 净验收设备；配置质量 M 关联逐台 BOM/试验数据 |
| How well | 型号及交付模块清单；固定或车辆用途；空气调节功能及风机；是否自带制冷装置；蒸气压缩、吸收或外供盘管技术；单冷或可逆；压缩机驱动及变频器；盘管材料及结构；额定制冷/制热能力及试验标准；制冷剂身份、混合物组成及实际出厂留存充注量；干式或已充注交货；净质量 M；声明工厂起始状态；自制/外购边界；工厂地域、供电电压及参考期间；包装清单 |
| How long or cycle | 一次工厂供应；不规定服役寿命或制冷能量等价 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格完整空气调节设备 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及交付模块清单；固定或车辆用途；空气调节功能及风机；是否自带制冷装置；蒸气压缩、吸收或外供盘管技术；单冷或可逆；压缩机驱动及变频器；盘管材料及结构；额定制冷/制热能力及试验标准；制冷剂身份、混合物组成及实际出厂留存充注量；干式或已充注交货；净质量 M；声明工厂起始状态；自制/外购边界；工厂地域、供电电压及参考期间；包装清单 |

前景数据包须声明全部限定信息；干式外供盘管路线须依据路线证据将压缩机/制冷剂字段明确标为 not_applicable，并与未知身份或充注量区分。净质量 M 为一套验收完整配置实测质量，包含全部交付模块及留存充注介质/油，排除包装、安装增补、不合格品及临时试验介质。禁止虚构设备重量，禁止将等质量、额定制冷能力或能效视为等价制冷服务。异质产品先按型号解析记录再归一化聚合，禁止将混合 BOM 除以无关平均质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| energy_units | 厂用能源 | 电能或交付热量 | kWh; MJ | 保留表计单位，1 kWh = 3.6 MJ；制冷/制热能力是限定信息，不是电力投入。蒸汽换算采用实际送入/回流焓。 |
| species_balance | 充注及释放 | Mass | kg | 逐制冷剂或工质对组分核对库存、收料、合格品留存充注、样品/不合格品封存介质、外送回收/废物及实测释放；未解释残差保留为缺口，不假定排放因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收声明外购原料、部件或完整子模块 |
| starting_condition_role | 供应产品接口；实际厂内制造从此开始 |
| product_classification_scope | 空气调节设备 |
| recursive_input_rule | 外购同类设备/模块保留独立供应负荷；内部返工/转移不是新外部供应，作为交换抵消 |
| upstream_dataset_requirement | 匹配部件状态、技术、地域/年份及实际供应接口；外购压缩机含其电机与油，除非声明相反 |
| disclosure | 工厂出口含全部交付模块/充注介质及单独包装；排除安装、运行电力/热量、使用泄漏及报废 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| factory_scope | all processes | 纳入实际加工、连接、清洗/表面处理、装配、抽真空/充注、泄漏/安全/功能试验、可归属返工、包装及直接释放。前景从接收原料/部件开始；按声明供应边界关联上游开采/生产/运输，纳入未被供应数据覆盖的入厂物流；排除下游安装及服务能耗。 | `wco-hs84-2022`; `ipcc-ods-2006` |
| make_buy | fabrication; assembly | 建立部件自制/外购矩阵：同一盘管计入外购成品盘管或厂内金属进料/成形/连接之一，禁止两者同时计入。压缩机/电机/电路板/机壳与吸收模块同样处理，不重复计入供应方已完成工序。 | `daikin-technology-carbon` |
| route_scope | all processes | 采用实际路线条件；无自带制冷装置不表示无制造负荷，可逆空气调节热泵不得仅因能制热而排除。吸收制冷模块仅在具备风机/空气调节功能的合格配置中纳入；复用前记录省略工序证据及实际其他技术。 | `wco-hs84-2022`; `doe-hvac-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 有条件机壳、盘管及塑料加工 | conditional | 实际厂内实施时：板材落料/冲压/折弯，铜管切割/弯管/胀管及翅片冲制，或铝微通道成形/连接；粒料进厂时注塑外壳；实际表面脱脂、粉末喷涂及固化。购入成品零件时跳过对应原料与工序。 | 制造前景 | 1 kg 参考流 |
| assembly | 机械、电气及流体回路装配 | required | 装入实际风机、驱动、压缩机或吸收模块、盘管、阀件、传感器及控制器；按实际钎焊/焊接/机械连接接管；保留序列/模块配置。可逆设备纳入实际换向阀及控制。 | 制造前景 | 1 kg 参考流 |
| charge | 回路抽真空、压力试验及工厂充注 | conditional | 实际密闭制冷/吸收回路：记录试验气体、抽真空、充注、捕集制冷剂、残存库存、释放及废弃充注介质。干式交付外供盘管设备不虚构制冷剂充注。 | 制造前景 | 1 kg 参考流 |
| acceptance | 电气安全、泄漏及功能验收 | required | 记录实际泄漏/安全/功能试验及返工。可逆型号测试声明模式；吸收试验记录实际供热；外供盘管测试记录冷/热水供应。破坏性抽样设备不计入合格销售产出。 | 制造前景 | 1 kg 参考流 |
| dispatch | 最终保护、包装及出厂放行 | required | 核验完整销售交付配置，包含规定的各室内/室外模块或车用调节设备；分别称量净设备、留存充注介质及包装，记录实际干式/充注放行状态。 | 制造前景 | 1 kg 参考流 |
| services | 共享公用工程及污染控制 | required | 实际压缩空气、真空、冷却水及废水/空气治理负荷只分配一次。外购压缩空气或外供试验热量与厂内产生的公用工程区分。 | 制造前景 | 1 kg 参考流 |

每张卡片为一个物理交换。采集前应用路线条件，缺 UUID/数量不表示零。为实际其他合金、制冷剂、涂层、废物及排放物种增加独立卡片。抵消内部转移，不将通用分总成映射为完整参考产品。

### 过程：有条件机壳、盘管及塑料加工 (`fabrication`)

实际厂内实施时：板材落料/冲压/折弯，铜管切割/弯管/胀管及翅片冲制，或铝微通道成形/连接；粒料进厂时注塑外壳；实际表面脱脂、粉末喷涂及固化。购入成品零件时跳过对应原料与工序。

#### 输入

##### 产品流

###### 机壳用冷轧碳钢板 (`steel_sheet`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 机壳用冷轧碳钢板
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_steel_sheet。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_steel_sheet`
- 来源: `daikin-technology-carbon`

###### 铝制翅片箔 (`fin_foil`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 铝制翅片箔
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fin_foil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fin_foil`
- 来源: `daikin-technology-carbon`

###### 制冷级铜管 (`copper_tube`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 制冷级铜管
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_copper_tube。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_copper_tube`
- 来源: `daikin-technology-carbon`

###### 铝制多孔微通道管 (`microchannel`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 铝制多孔微通道管
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_microchannel。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_microchannel`
- 来源: `daikin-technology-carbon`

###### 丙烯腈-丁二烯-苯乙烯粒料 (`abs_resin`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 丙烯腈-丁二烯-苯乙烯粒料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_abs_resin。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_abs_resin`
- 来源: `daikin-technology-carbon`

###### 聚丙烯粒料 (`pp_resin`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 聚丙烯粒料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_pp_resin。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pp_resin`
- 来源: `daikin-technology-carbon`

###### 板材成形润滑油 (`forming_oil`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 板材成形润滑油
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_forming_oil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_forming_oil`
- 来源: `daikin-technology-carbon`

###### 氢氧化钠脱脂溶液 (`degreaser`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 氢氧化钠脱脂溶液
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_degreaser。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_degreaser`
- 来源: `daikin-technology-carbon`

###### 聚酯粉末涂料 (`powder_coat`)

仅为有条件厂内加工物料。记录实际牌号、厚度或配方及组分浓度、成材率与损失。铜管/铝翅片与全铝微通道结构为备选；树脂投入仅适用于本厂注塑。其他实际配方逐项具名增加，禁止以通用物料集合替代。

- 选定流: 聚酯粉末涂料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_powder_coat。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_powder_coat`
- 来源: `daikin-technology-carbon`

###### 铝板材 (`al_sheet`)

用于实际牌号/状态匹配且厚度超过 0.2 mm 的机壳/支架板材，不用于薄翅片箔卡片。须匹配供应合金及上游加工负荷。

- 选定流: 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_al_sheet。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_al_sheet`
- 来源: `daikin-technology-carbon`

###### 购入厂用电 (`fabrication_electricity`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 购入厂用电
- 流属性/单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication_electricity。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fabrication_electricity`
- 来源:

###### 固化及钎焊用天然气 (`natural_gas`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 固化及钎焊用天然气
- 流属性/单位: Energy / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_natural_gas。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_natural_gas`
- 来源:

###### 吸收容器用不锈钢板 (`stainless_sheet`)

仅适用于实际厂内容器制造，保留指定钢级及成形/焊接工序。外购吸收容器/模块已含钢材及供应制造。

- 选定流: 吸收容器用不锈钢板
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_stainless_sheet。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_stainless_sheet`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 冲压废钢 (`steel_scrap`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 冲压废钢
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_steel_scrap。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_steel_scrap`
- 来源:

###### 加工废铝 (`al_scrap`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 加工废铝
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_al_scrap。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_al_scrap`
- 来源:

###### 铜管加工废铜 (`cu_scrap`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 铜管加工废铜
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_cu_scrap。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cu_scrap`
- 来源:

###### ABS 注塑废料 (`abs_scrap`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: ABS 注塑废料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_abs_scrap。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_abs_scrap`
- 来源:

###### 聚丙烯注塑废料 (`pp_scrap`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 聚丙烯注塑废料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_pp_scrap。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pp_scrap`
- 来源:

###### 废聚酯涂料粉末 (`waste_powder`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 废聚酯涂料粉末
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_waste_powder。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_powder`
- 来源:

###### 废氢氧化钠脱脂液 (`spent_degreaser`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 废氢氧化钠脱脂液
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_spent_degreaser。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_spent_degreaser`
- 来源:

##### 基本流

###### 固化燃料产生的化石二氧化碳排入空气 (`co2_cure`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 固化燃料产生的化石二氧化碳排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_co2_cure。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_co2_cure`
- 来源:

###### 一氧化碳排入空气 (`fabrication_co`)

实际燃烧、焊接或表面处理工序产生该实测治理后释放时纳入，不采用假定工厂排放因子或固定路线。

- 选定流: 一氧化碳排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication_co。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fabrication_co`
- 来源:

###### 氮氧化物，以 NO2 计，排入空气 (`fabrication_nox`)

实际燃烧、焊接或表面处理工序产生该实测治理后释放时纳入，不采用假定工厂排放因子或固定路线。

- 选定流: 氮氧化物，以 NO2 计，排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication_nox。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fabrication_nox`
- 来源:

###### 小于 2.5 微米颗粒物排入空气 (`fabrication_pm`)

实际燃烧、焊接或表面处理工序产生该实测治理后释放时纳入，不采用假定工厂排放因子或固定路线。

- 选定流: 小于 2.5 微米颗粒物排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication_pm。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fabrication_pm`
- 来源:

### 过程：机械、电气及流体回路装配 (`assembly`)

装入实际风机、驱动、压缩机或吸收模块、盘管、阀件、传感器及控制器；按实际钎焊/焊接/机械连接接管；保留序列/模块配置。可逆设备纳入实际换向阀及控制。

#### 输入

##### 产品流

###### 全封闭制冷压缩机 (`compressor`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 全封闭制冷压缩机 `a2a3427c-5d93-494b-a1fd-bcab42fea432`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_compressor。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_compressor`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 车用空调开启式驱动压缩机 (`open_compressor`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 车用空调开启式驱动压缩机
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_open_compressor。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_open_compressor`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 空调风机电动机 (`fan_motor`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 空调风机电动机
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fan_motor。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fan_motor`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 空调风机叶轮 (`fan_impeller`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 空调风机叶轮
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fan_impeller。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fan_impeller`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 已装配空调控制电路板 (`pcba`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 已装配空调控制电路板
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_pcba。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pcba`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 空调变频驱动模块 (`inverter`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 空调变频驱动模块
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_inverter。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inverter`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 空调温度传感器 (`sensor`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 空调温度传感器
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_sensor。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_sensor`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 外购铜管铝翅片换热器 (`copper_coil`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 外购铜管铝翅片换热器
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_copper_coil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_copper_coil`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 外购铝微通道换热器 (`al_coil`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 外购铝微通道换热器
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_al_coil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_al_coil`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 外购冷水空气调节盘管 (`external_coil`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 外购冷水空气调节盘管
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_external_coil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_external_coil`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 四通制冷剂换向阀 (`reversing_valve`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 四通制冷剂换向阀
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_reversing_valve。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reversing_valve`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 制冷剂膨胀阀 (`expansion_valve`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 制冷剂膨胀阀
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_expansion_valve。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_expansion_valve`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 制冷剂回路过滤干燥器 (`filter_drier`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 制冷剂回路过滤干燥器
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_filter_drier。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_filter_drier`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 外购氨-水吸收式制冷模块 (`absorption_module`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 外购氨-水吸收式制冷模块
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_absorption_module。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_absorption_module`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 外购溴化锂-水吸收式制冷模块 (`libr_module`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 外购溴化锂-水吸收式制冷模块
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_libr_module。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_libr_module`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 吸收循环溶液泵 (`abs_pump`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 吸收循环溶液泵
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_abs_pump。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_abs_pump`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 不锈钢吸收循环发生器容器 (`abs_vessel`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 不锈钢吸收循环发生器容器
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_abs_vessel。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_abs_vessel`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 铜导体绝缘线束 (`wiring`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 铜导体绝缘线束
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_wiring。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wiring`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 钢制装配螺钉 (`screw`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 钢制装配螺钉
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_screw。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_screw`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 闭孔弹性体管道保温材料 (`insulation`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 闭孔弹性体管道保温材料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_insulation。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_insulation`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 铜磷钎焊填充合金 (`braze_cu`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 铜磷钎焊填充合金
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_braze_cu。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_braze_cu`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 铝硅钎焊填充合金 (`braze_al`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 铝硅钎焊填充合金
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_braze_al。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_braze_al`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 氟铝酸钾钎焊助焊剂 (`flux`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 氟铝酸钾钎焊助焊剂
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_flux。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_flux`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 钎焊用氧气 (`oxygen`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 钎焊用氧气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_oxygen。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_oxygen`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 钎焊用乙炔 (`acetylene`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 钎焊用乙炔
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_acetylene。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_acetylene`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 多元醇酯压缩机润滑油 (`poe_oil`)

仅用于实际型号/路线。购入模块/盘管的上游材料及制造只计一次，本厂省略其内含组分投入。厂内制造时以实际组分行及工序替代购入项。换向阀仅适用于可逆回路；压缩机备选须匹配驱动/状态。压缩机流为中国厂内接口身份，不采用备注中的质量占比估计。吸收模块是压缩式备选，不额外要求压缩机。外购压缩机已含油时不重复充油。

- 选定流: 多元醇酯压缩机润滑油
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_poe_oil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_poe_oil`
- 来源: `daikin-technology-carbon`; `doe-hvac-2011`

###### 购入厂用电 (`assembly_electricity`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 购入厂用电
- 流属性/单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly_electricity。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assembly_electricity`
- 来源:

###### 外购热水空气调节盘管 (`hot_water_coil`)

仅在声明空气调节/吸收路线装入或消耗时计入，外购模块组分质量不重复作为外部供应；保留实际牌号及自制/外购范围。

- 选定流: 外购热水空气调节盘管
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_hot_water_coil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_hot_water_coil`
- 来源:

###### 不锈钢吸收器容器 (`absorber`)

仅在声明空气调节/吸收路线装入或消耗时计入，外购模块组分质量不重复作为外部供应；保留实际牌号及自制/外购范围。

- 选定流: 不锈钢吸收器容器
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_absorber。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_absorber`
- 来源:

###### 空调电阻加热元件 (`electric_heater`)

仅在声明空气调节/吸收路线装入或消耗时计入，外购模块组分质量不重复作为外部供应；保留实际牌号及自制/外购范围。

- 选定流: 空调电阻加热元件
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_electric_heater。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electric_heater`
- 来源:

###### 空调水加湿器储水槽 (`humidifier`)

仅在声明空气调节/吸收路线装入或消耗时计入，外购模块组分质量不重复作为外部供应；保留实际牌号及自制/外购范围。

- 选定流: 空调水加湿器储水槽
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_humidifier。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_humidifier`
- 来源:

###### 空调颗粒空气滤芯 (`air_filter`)

仅在声明空气调节/吸收路线装入或消耗时计入，外购模块组分质量不重复作为外部供应；保留实际牌号及自制/外购范围。

- 选定流: 空调颗粒空气滤芯
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_air_filter。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_air_filter`
- 来源:

###### 不锈钢焊接填充焊丝 (`weld_wire`)

仅在声明空气调节/吸收路线装入或消耗时计入，外购模块组分质量不重复作为外部供应；保留实际牌号及自制/外购范围。

- 选定流: 不锈钢焊接填充焊丝
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_weld_wire。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_weld_wire`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废氟铝酸钾钎焊残渣 (`braze_residue`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 废氟铝酸钾钎焊残渣
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_braze_residue。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_braze_residue`
- 来源:

##### 基本流

###### 钎焊产生的化石二氧化碳排入空气 (`co2_braze`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 钎焊产生的化石二氧化碳排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_co2_braze。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_co2_braze`
- 来源:

###### 一氧化碳排入空气 (`assembly_co`)

实际燃烧、焊接或表面处理工序产生该实测治理后释放时纳入，不采用假定工厂排放因子或固定路线。

- 选定流: 一氧化碳排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly_co。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assembly_co`
- 来源:

###### 氮氧化物，以 NO2 计，排入空气 (`assembly_nox`)

实际燃烧、焊接或表面处理工序产生该实测治理后释放时纳入，不采用假定工厂排放因子或固定路线。

- 选定流: 氮氧化物，以 NO2 计，排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly_nox。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assembly_nox`
- 来源:

###### 小于 2.5 微米颗粒物排入空气 (`assembly_pm`)

实际燃烧、焊接或表面处理工序产生该实测治理后释放时纳入，不采用假定工厂排放因子或固定路线。

- 选定流: 小于 2.5 微米颗粒物排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly_pm。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assembly_pm`
- 来源:

### 过程：回路抽真空、压力试验及工厂充注 (`charge`)

实际密闭制冷/吸收回路：记录试验气体、抽真空、充注、捕集制冷剂、残存库存、释放及废弃充注介质。干式交付外供盘管设备不虚构制冷剂充注。

#### 输入

##### 产品流

###### 压力试验及钎焊保护用氮气 (`nitrogen`)

仅用于声明回路；R-32、R410A、R-290、R-1234yf、氨-水与溴化锂-水路线各自独立，不同时设为默认。其他实际制冷剂须增加独立物种/混合物卡片。氮气为外购产品气体，不是大气氮或 N2O。R410A 身份为中国厂内制造/试验接口，其他地点需匹配供应方或披露替代。

- 选定流: 压力试验及钎焊保护用氮气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_nitrogen。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nitrogen`
- 来源: `ipcc-ods-2006`; `doe-hvac-2011`

###### 二氟甲烷制冷剂 R-32 (`r32`)

仅用于声明回路；R-32、R410A、R-290、R-1234yf、氨-水与溴化锂-水路线各自独立，不同时设为默认。其他实际制冷剂须增加独立物种/混合物卡片。氮气为外购产品气体，不是大气氮或 N2O。R410A 身份为中国厂内制造/试验接口，其他地点需匹配供应方或披露替代。

- 选定流: 二氟甲烷制冷剂 R-32
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_r32。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_r32`
- 来源: `ipcc-ods-2006`; `doe-hvac-2011`

###### 制冷剂R410A (`r410a`)

仅用于声明回路；R-32、R410A、R-290、R-1234yf、氨-水与溴化锂-水路线各自独立，不同时设为默认。其他实际制冷剂须增加独立物种/混合物卡片。氮气为外购产品气体，不是大气氮或 N2O。R410A 身份为中国厂内制造/试验接口，其他地点需匹配供应方或披露替代。

- 选定流: 制冷剂R410A `7d38fb13-97b6-4c65-a866-0d89444afbe4`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_r410a。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_r410a`
- 来源: `ipcc-ods-2006`; `doe-hvac-2011`

###### 丙烷制冷剂 R-290 (`r290`)

仅用于声明回路；R-32、R410A、R-290、R-1234yf、氨-水与溴化锂-水路线各自独立，不同时设为默认。其他实际制冷剂须增加独立物种/混合物卡片。氮气为外购产品气体，不是大气氮或 N2O。R410A 身份为中国厂内制造/试验接口，其他地点需匹配供应方或披露替代。

- 选定流: 丙烷制冷剂 R-290
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_r290。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_r290`
- 来源: `ipcc-ods-2006`; `doe-hvac-2011`

###### 2,3,3,3-四氟丙烯制冷剂 R-1234yf (`r1234yf`)

仅用于声明回路；R-32、R410A、R-290、R-1234yf、氨-水与溴化锂-水路线各自独立，不同时设为默认。其他实际制冷剂须增加独立物种/混合物卡片。氮气为外购产品气体，不是大气氮或 N2O。R410A 身份为中国厂内制造/试验接口，其他地点需匹配供应方或披露替代。

- 选定流: 2,3,3,3-四氟丙烯制冷剂 R-1234yf
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_r1234yf。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_r1234yf`
- 来源: `ipcc-ods-2006`; `doe-hvac-2011`

###### 吸收回路充注氨 (`ammonia`)

仅用于声明回路；R-32、R410A、R-290、R-1234yf、氨-水与溴化锂-水路线各自独立，不同时设为默认。其他实际制冷剂须增加独立物种/混合物卡片。氮气为外购产品气体，不是大气氮或 N2O。R410A 身份为中国厂内制造/试验接口，其他地点需匹配供应方或披露替代。

- 选定流: 吸收回路充注氨
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_ammonia。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_ammonia`
- 来源: `ipcc-ods-2006`; `doe-hvac-2011`

###### 吸收回路充注纯化水 (`water_charge`)

仅用于声明回路；R-32、R410A、R-290、R-1234yf、氨-水与溴化锂-水路线各自独立，不同时设为默认。其他实际制冷剂须增加独立物种/混合物卡片。氮气为外购产品气体，不是大气氮或 N2O。R410A 身份为中国厂内制造/试验接口，其他地点需匹配供应方或披露替代。

- 选定流: 吸收回路充注纯化水
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_water_charge。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water_charge`
- 来源: `ipcc-ods-2006`; `doe-hvac-2011`

###### 溴化锂水溶液吸收剂 (`libr`)

仅用于声明回路；R-32、R410A、R-290、R-1234yf、氨-水与溴化锂-水路线各自独立，不同时设为默认。其他实际制冷剂须增加独立物种/混合物卡片。氮气为外购产品气体，不是大气氮或 N2O。R410A 身份为中国厂内制造/试验接口，其他地点需匹配供应方或披露替代。

- 选定流: 溴化锂水溶液吸收剂
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_libr。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_libr`
- 来源: `ipcc-ods-2006`; `doe-hvac-2011`

###### 购入厂用电 (`charge_electricity`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 购入厂用电
- 流属性/单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_charge_electricity。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_charge_electricity`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 外送可再用回收 R-410A (`reclaimed_r410a`)

仅适用于实际外送可再用产品；内部回收复用是库存移动，不是另一项外部原生投入或大气排放。记录法律/产品状态及接收方，不自动抵扣原生制冷剂。

- 选定流: 外送可再用回收 R-410A
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_reclaimed_r410a。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reclaimed_r410a`
- 来源: `ipcc-ods-2006`

##### 废物流

###### 外送处理的废二氟甲烷制冷剂 (`waste_r32`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 外送处理的废二氟甲烷制冷剂
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_waste_r32。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_r32`
- 来源: `ipcc-ods-2006`

###### 外送处理的废 R-410A 制冷剂 (`waste_r410a`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 外送处理的废 R-410A 制冷剂
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_waste_r410a。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_r410a`
- 来源: `ipcc-ods-2006`

###### 废氨-水吸收溶液 (`waste_ammonia`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 废氨-水吸收溶液
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_waste_ammonia。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_ammonia`
- 来源: `ipcc-ods-2006`

###### 废溴化锂-水吸收溶液 (`waste_libr`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 废溴化锂-水吸收溶液
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_waste_libr。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_libr`
- 来源: `ipcc-ods-2006`

##### 基本流

###### 二氟甲烷（HFC-32）排入空气 (`r32_release`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 二氟甲烷（HFC-32）排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_r32_release。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_r32_release`
- 来源: `ipcc-ods-2006`

###### R-410A 制冷剂混合物排入空气 (`r410a_release`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: R-410A 制冷剂混合物排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_r410a_release。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_r410a_release`
- 来源: `ipcc-ods-2006`

###### 丙烷排入空气 (`propane_release`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 丙烷排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_propane_release。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_propane_release`
- 来源: `ipcc-ods-2006`

###### 2,3,3,3-四氟丙烯排入空气 (`yf_release`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 2,3,3,3-四氟丙烯排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_yf_release。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_yf_release`
- 来源: `ipcc-ods-2006`

###### 氨排入空气 (`ammonia_release`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 氨排入空气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_ammonia_release。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_ammonia_release`
- 来源: `ipcc-ods-2006`

### 过程：电气安全、泄漏及功能验收 (`acceptance`)

记录实际泄漏/安全/功能试验及返工。可逆型号测试声明模式；吸收试验记录实际供热；外供盘管测试记录冷/热水供应。破坏性抽样设备不计入合格销售产出。

#### 输入

##### 产品流

###### 购入厂用电 (`acceptance_electricity`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 购入厂用电
- 流属性/单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_acceptance_electricity。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_acceptance_electricity`
- 来源:

###### 吸收式验收试验外购蒸汽 (`steam`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 吸收式验收试验外购蒸汽
- 流属性/单位: Energy / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_steam。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_steam`
- 来源:

###### 外供盘管验收试验购入水 (`test_water`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 外供盘管验收试验购入水
- 流属性/单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_water。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test_water`
- 来源:

###### 热力验收试验外购热量 (`test_heat`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 热力验收试验外购热量
- 流属性/单位: Energy / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_heat。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test_heat`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 空调破坏性试验不合格机体 (`destructive_sample`)

回收后称量送处理的抽样/不合格干机体，捕集充注介质留在库存或独立外送废物/产品卡片，不默认计为大气排放。合格生产保留重复试验/材料负荷。

- 选定流: 空调破坏性试验不合格机体
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_destructive_sample。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_destructive_sample`
- 来源:

##### 基本流

### 过程：最终保护、包装及出厂放行 (`dispatch`)

核验完整销售交付配置，包含规定的各室内/室外模块或车用调节设备；分别称量净设备、留存充注介质及包装，记录实际干式/充注放行状态。

#### 输入

##### 产品流

###### 购入厂用电 (`dispatch_electricity`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 购入厂用电
- 流属性/单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_dispatch_electricity。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dispatch_electricity`
- 来源:

###### 瓦楞纸板运输箱 (`box`)

实际交付包装质量与净设备质量分开记录，可重复托盘采用有据的复用/处理约定，不虚构复用次数。

- 选定流: 瓦楞纸板运输箱
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_box。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_box`
- 来源:

###### 发泡聚苯乙烯包装衬垫 (`eps`)

实际交付包装质量与净设备质量分开记录，可重复托盘采用有据的复用/处理约定，不虚构复用次数。

- 选定流: 发泡聚苯乙烯包装衬垫
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_eps。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_eps`
- 来源:

###### 聚乙烯包装薄膜 (`pe_film`)

实际交付包装质量与净设备质量分开记录，可重复托盘采用有据的复用/处理约定，不虚构复用次数。

- 选定流: 聚乙烯包装薄膜
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_pe_film。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pe_film`
- 来源:

###### 木制运输托盘 (`pallet`)

实际交付包装质量与净设备质量分开记录，可重复托盘采用有据的复用/处理约定，不虚构复用次数。

- 选定流: 木制运输托盘
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_pallet。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pallet`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格完整空气调节设备 (`reference_product`)

一套合格销售配置，禁止将每个内部盘管或模块重复计为整机。参考净质量 M 包含全部交付模块及留存充注介质，包装分开。

- 选定流: 验收合格完整空气调节设备
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_mass`
- 来源: `wco-hs84-2022`

##### 废物流

##### 基本流

### 过程：共享公用工程及污染控制 (`services`)

实际压缩空气、真空、冷却水及废水/空气治理负荷只分配一次。外购压缩空气或外供试验热量与厂内产生的公用工程区分。

#### 输入

##### 产品流

###### 购入厂用电 (`services_electricity`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 购入厂用电
- 流属性/单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_services_electricity。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_services_electricity`
- 来源:

###### 购入工业工艺水 (`water`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 购入工业工艺水
- 流属性/单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_water。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`
- 来源:

###### 外购压缩空气 (`air`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 外购压缩空气
- 流属性/单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_air。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_air`
- 来源:

###### 真空泵润滑油 (`oil`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 真空泵润滑油
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_oil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_oil`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外送处理的工业废水 (`ww`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 外送处理的工业废水
- 流属性/单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_ww。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_ww`
- 来源:

###### 含金属废水处理污泥 (`sludge`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 含金属废水处理污泥
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_sludge。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_sludge`
- 来源:

###### 废真空泵润滑油 (`spent_oil`)

仅在该具体交换跨越声明工厂/工序边界时纳入，区分路线不发生与数据缺失。

- 选定流: 废真空泵润滑油
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_spent_oil。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_spent_oil`
- 来源:

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_driver | shared utilities | 先细分计量工序。按有据物理因果分配共享服务：实际设备工时/负荷、试验台能耗/时间及有证据的加工物料量。能力额定值或成品质量本身不证明因果。需其他分配时说明理由并开展敏感性分析，分配和应等于观测总量。 | `ef-allocation-2021` |
| recovery_and_rework | charge; fabrication; acceptance | 返工及复试能耗/物料保留在合格产出负荷。内部制冷剂回收通过库存平衡减少新料需求，不作负原生生产；分别识别外送可再用产品及危险废物。废料销售本身不确立联产品身份或避免材料抵扣。声明回收处理只应用一次。 | `ef-allocation-2021`; `ipcc-ods-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | measurement_record | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每套验收配置 | 匹配报告期 | 选定工厂出口全部声明交付模块 | 每台验收净质量 | 校准；净称量；模块/充注介质核对；验收记录 |
| cp_steel_sheet | fabrication | steel_sheet | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_fin_foil | fabrication | fin_foil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_copper_tube | fabrication | copper_tube | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_microchannel | fabrication | microchannel | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_abs_resin | fabrication | abs_resin | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_pp_resin | fabrication | pp_resin | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_forming_oil | fabrication | forming_oil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_degreaser | fabrication | degreaser | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_powder_coat | fabrication | powder_coat | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_al_sheet | fabrication | al_sheet | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_steel_scrap | fabrication | steel_scrap | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_al_scrap | fabrication | al_scrap | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_cu_scrap | fabrication | cu_scrap | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_abs_scrap | fabrication | abs_scrap | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_pp_scrap | fabrication | pp_scrap | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_waste_powder | fabrication | waste_powder | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_spent_degreaser | fabrication | spent_degreaser | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_compressor | assembly | compressor | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_open_compressor | assembly | open_compressor | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_fan_motor | assembly | fan_motor | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_fan_impeller | assembly | fan_impeller | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_pcba | assembly | pcba | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_inverter | assembly | inverter | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_sensor | assembly | sensor | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_copper_coil | assembly | copper_coil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_al_coil | assembly | al_coil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_external_coil | assembly | external_coil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_reversing_valve | assembly | reversing_valve | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_expansion_valve | assembly | expansion_valve | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_filter_drier | assembly | filter_drier | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_absorption_module | assembly | absorption_module | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_libr_module | assembly | libr_module | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_abs_pump | assembly | abs_pump | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_abs_vessel | assembly | abs_vessel | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_wiring | assembly | wiring | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_screw | assembly | screw | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_insulation | assembly | insulation | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_braze_cu | assembly | braze_cu | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_braze_al | assembly | braze_al | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_flux | assembly | flux | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_oxygen | assembly | oxygen | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_acetylene | assembly | acetylene | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_poe_oil | assembly | poe_oil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_braze_residue | assembly | braze_residue | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_co2_braze | assembly | co2_braze | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 采用实测燃料消耗及已验证碳含量或匹配排气监测，乙炔燃烧与外购燃料供应上游负荷分开，不采用默认燃烧因子。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_nitrogen | charge | nitrogen | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量充注钢瓶并使用校准加注计，保留实际型号/物种/混合配方、放行留存充注量、回收库存、破坏性样品/不合格品内含量及外部转移。匹配期初期末库存并披露未解释残差及不确定性，不假定充注量或损失率。外购已充注模块保留供应充注，不重复新料充注。外购溴化锂溶液已含溶剂水；纯化水卡片仅计单独供给的制冷介质或稀释水。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_r32 | charge | r32 | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量充注钢瓶并使用校准加注计，保留实际型号/物种/混合配方、放行留存充注量、回收库存、破坏性样品/不合格品内含量及外部转移。匹配期初期末库存并披露未解释残差及不确定性，不假定充注量或损失率。外购已充注模块保留供应充注，不重复新料充注。外购溴化锂溶液已含溶剂水；纯化水卡片仅计单独供给的制冷介质或稀释水。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_r410a | charge | r410a | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量充注钢瓶并使用校准加注计，保留实际型号/物种/混合配方、放行留存充注量、回收库存、破坏性样品/不合格品内含量及外部转移。匹配期初期末库存并披露未解释残差及不确定性，不假定充注量或损失率。外购已充注模块保留供应充注，不重复新料充注。外购溴化锂溶液已含溶剂水；纯化水卡片仅计单独供给的制冷介质或稀释水。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_r290 | charge | r290 | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量充注钢瓶并使用校准加注计，保留实际型号/物种/混合配方、放行留存充注量、回收库存、破坏性样品/不合格品内含量及外部转移。匹配期初期末库存并披露未解释残差及不确定性，不假定充注量或损失率。外购已充注模块保留供应充注，不重复新料充注。外购溴化锂溶液已含溶剂水；纯化水卡片仅计单独供给的制冷介质或稀释水。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_r1234yf | charge | r1234yf | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量充注钢瓶并使用校准加注计，保留实际型号/物种/混合配方、放行留存充注量、回收库存、破坏性样品/不合格品内含量及外部转移。匹配期初期末库存并披露未解释残差及不确定性，不假定充注量或损失率。外购已充注模块保留供应充注，不重复新料充注。外购溴化锂溶液已含溶剂水；纯化水卡片仅计单独供给的制冷介质或稀释水。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_ammonia | charge | ammonia | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量充注钢瓶并使用校准加注计，保留实际型号/物种/混合配方、放行留存充注量、回收库存、破坏性样品/不合格品内含量及外部转移。匹配期初期末库存并披露未解释残差及不确定性，不假定充注量或损失率。外购已充注模块保留供应充注，不重复新料充注。外购溴化锂溶液已含溶剂水；纯化水卡片仅计单独供给的制冷介质或稀释水。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_water_charge | charge | water_charge | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量充注钢瓶并使用校准加注计，保留实际型号/物种/混合配方、放行留存充注量、回收库存、破坏性样品/不合格品内含量及外部转移。匹配期初期末库存并披露未解释残差及不确定性，不假定充注量或损失率。外购已充注模块保留供应充注，不重复新料充注。外购溴化锂溶液已含溶剂水；纯化水卡片仅计单独供给的制冷介质或稀释水。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_libr | charge | libr | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量充注钢瓶并使用校准加注计，保留实际型号/物种/混合配方、放行留存充注量、回收库存、破坏性样品/不合格品内含量及外部转移。匹配期初期末库存并披露未解释残差及不确定性，不假定充注量或损失率。外购已充注模块保留供应充注，不重复新料充注。外购溴化锂溶液已含溶剂水；纯化水卡片仅计单独供给的制冷介质或稀释水。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_r32_release | charge | r32_release | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 测量捕集/未受控释放或采用闭合的物种库存/充注平衡，禁止将交付留存、返回回收库存及废弃封存制冷剂计为大气损失。R410A 可解析为实际混合物或单独测量的组分排放，禁止同时计入；物种拆分前须核验分馏。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_r410a_release | charge | r410a_release | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 测量捕集/未受控释放或采用闭合的物种库存/充注平衡，禁止将交付留存、返回回收库存及废弃封存制冷剂计为大气损失。R410A 可解析为实际混合物或单独测量的组分排放，禁止同时计入；物种拆分前须核验分馏。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_propane_release | charge | propane_release | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 测量捕集/未受控释放或采用闭合的物种库存/充注平衡，禁止将交付留存、返回回收库存及废弃封存制冷剂计为大气损失。R410A 可解析为实际混合物或单独测量的组分排放，禁止同时计入；物种拆分前须核验分馏。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_yf_release | charge | yf_release | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 测量捕集/未受控释放或采用闭合的物种库存/充注平衡，禁止将交付留存、返回回收库存及废弃封存制冷剂计为大气损失。R410A 可解析为实际混合物或单独测量的组分排放，禁止同时计入；物种拆分前须核验分馏。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_ammonia_release | charge | ammonia_release | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 测量捕集/未受控释放或采用闭合的物种库存/充注平衡，禁止将交付留存、返回回收库存及废弃封存制冷剂计为大气损失。R410A 可解析为实际混合物或单独测量的组分排放，禁止同时计入；物种拆分前须核验分馏。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_waste_r32 | charge | waste_r32 | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_waste_r410a | charge | waste_r410a | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_waste_ammonia | charge | waste_ammonia | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_waste_libr | charge | waste_libr | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_reclaimed_r410a | charge | reclaimed_r410a | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_fabrication_electricity | fabrication | fabrication_electricity | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 读取工序/试验分表并与场址购电核对，按实测工时/负荷分配共享真空/空气/压缩机负荷。保留电压、地域、年份及供应/消费接口；试验能耗采用实际测量，禁止以额定制冷能力乘时间。 | kWh | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_assembly_electricity | assembly | assembly_electricity | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 读取工序/试验分表并与场址购电核对，按实测工时/负荷分配共享真空/空气/压缩机负荷。保留电压、地域、年份及供应/消费接口；试验能耗采用实际测量，禁止以额定制冷能力乘时间。 | kWh | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_charge_electricity | charge | charge_electricity | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 读取工序/试验分表并与场址购电核对，按实测工时/负荷分配共享真空/空气/压缩机负荷。保留电压、地域、年份及供应/消费接口；试验能耗采用实际测量，禁止以额定制冷能力乘时间。 | kWh | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_acceptance_electricity | acceptance | acceptance_electricity | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 读取工序/试验分表并与场址购电核对，按实测工时/负荷分配共享真空/空气/压缩机负荷。保留电压、地域、年份及供应/消费接口；试验能耗采用实际测量，禁止以额定制冷能力乘时间。 | kWh | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_dispatch_electricity | dispatch | dispatch_electricity | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 读取工序/试验分表并与场址购电核对，按实测工时/负荷分配共享真空/空气/压缩机负荷。保留电压、地域、年份及供应/消费接口；试验能耗采用实际测量，禁止以额定制冷能力乘时间。 | kWh | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_services_electricity | services | services_electricity | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 读取工序/试验分表并与场址购电核对，按实测工时/负荷分配共享真空/空气/压缩机负荷。保留电压、地域、年份及供应/消费接口；试验能耗采用实际测量，禁止以额定制冷能力乘时间。 | kWh | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_natural_gas | fabrication | natural_gas | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 计量实际燃气，记录温压及实测低位热值；保留可燃化学身份，不规定默认燃料路线。 | MJ | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_co2_cure | fabrication | co2_cure | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 采用匹配实测燃料碳平衡或排气监测，不导入外购电上游燃烧。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_steam | acceptance | steam | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 测量实际试验台送汽及凝结水回流，在实测温压下计算净焓传递，排除安装后寿命期热需求。 | MJ | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_test_water | acceptance | test_water | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 仅计量新鲜补水，记录进出口条件及单独归属冷水机/锅炉能耗，禁止将循环水作为反复外部投入。 | m3 | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_test_heat | acceptance | test_heat | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 测量净实际供热及供应边界；购入接口为热量时替代蒸汽卡片，同一次供热禁止同时计入两者。 | MJ | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_destructive_sample | acceptance | destructive_sample | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_box | dispatch | box | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_eps | dispatch | eps | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_pe_film | dispatch | pe_film | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_pallet | dispatch | pallet | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_water | services | water | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 计量加工冲洗/冷却外部补水，排除内部循环重复数量，核对储量、排水、蒸发及带出。 | m3 | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_air | services | air | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 记录外部供应表计及声明参考温压；厂内压缩机用电不另计外购压缩空气。 | m3 | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_ww | services | ww | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按去向计量转移体积，分析 pH、油及金属含量；区分外部处理与实际本厂处理后排放。 | m3 | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_sludge | services | sludge | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 称量湿污泥，测量水分及金属/油组成和去向，不假定干物质比例。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_spent_oil | services | spent_oil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_oil | services | oil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_stainless_sheet | fabrication | stainless_sheet | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_hot_water_coil | assembly | hot_water_coil | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_absorber | assembly | absorber | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_electric_heater | assembly | electric_heater | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_humidifier | assembly | humidifier | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_air_filter | assembly | air_filter | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_weld_wire | assembly | weld_wire | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 按校准批次称量与库存核对关联型号/BOM、合格产出及实际自制/外购路线，分开工序废料与退回库存。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_fabrication_co | fabrication | fabrication_co | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 保留匹配排放浓度、排气流量、物种/粒级、捕集/治理性能及实际工时，分别计量烟囱与逸散释放。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_fabrication_nox | fabrication | fabrication_nox | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 保留匹配排放浓度、排气流量、物种/粒级、捕集/治理性能及实际工时，分别计量烟囱与逸散释放。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_fabrication_pm | fabrication | fabrication_pm | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 保留匹配排放浓度、排气流量、物种/粒级、捕集/治理性能及实际工时，分别计量烟囱与逸散释放。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_assembly_co | assembly | assembly_co | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 保留匹配排放浓度、排气流量、物种/粒级、捕集/治理性能及实际工时，分别计量烟囱与逸散释放。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_assembly_nox | assembly | assembly_nox | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 保留匹配排放浓度、排气流量、物种/粒级、捕集/治理性能及实际工时，分别计量烟囱与逸散释放。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |
| cp_assembly_pm | assembly | assembly_pm | measurement_record | 场址；期间；型号；批次；原数量/单位；期初期末库存；路线；表计或秤；分配；合格设备数量；配置 M | 保留匹配排放浓度、排气流量、物种/粒级、捕集/治理性能及实际工时，分别计量烟囱与逸散释放。 | kg | 逐批或计量区间；按月平衡 | 全年或有据的代表周期，含返工 | 选定工厂及匹配交付配置 | 可归属数量 / 验收设备数量 | 原始测量；校准；BOM；库存；验收及去向；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

参考产出直接声明 1 kg，无需再次换算。其他各交换按每套合格完整配置采集，保留原数量及合格数量并纳入可归属返工与抽样。记录实际工质对浓度及逐物种库存。期初库存与收料之和等于期末库存、合格产出留存充注、样品/不合格品封存介质、外部转移与实际损失之和。内部回收返回在两侧抵消；未解释残差保留测量不确定性及审查状态。气体/参考体积与焓换算保留原温压、组成及测量证据。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_completeness | all processes | 保留按型号解析自制/外购矩阵、实际物料/部件/化学品清单及省略工序证据，不将压缩式型号外推到吸收式或无自带制冷装置配置。 | BOM；工艺路线单；供应范围；模块验收 |
| identity | all exchanges | 完整数据集交付前解析准确产品/废物/基本流身份、属性/单位、供应接口/地域及环境介质；未确认时保留候选未解决状态。 | manifest review_metadata |
| ranges | all quantities | 不提供通用 BOM 占比、盘管比例、整机重量、充注量、制造损失/GWP、能耗/试验时间或强度范围。采集实际场址/型号证据，区分不发生、实测零与未知。 | 称量；表计；校准充注；库存；不确定性 |
| charge_disclosure | charge; dispatch | 逐交付模块说明制冷剂/吸收剂身份、实际留存充注及回收去向，含干式交货状态。混合物排放身份须匹配测量，不仅采用名义供应组成。 | 充注日志；物种分析；释放/去向记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| reference_check | reference_product | M 须为准确声明交付配置的正校准净质量；kg 归一化、逐台 BOM/试验记录及各模块/充注数量采用共同分母。净产品排除包装、临时试验介质及破坏性不合格品。 |  |
| no_double_count | all inventory rows | 核验自制/外购互斥、压缩机电机/油纳入、内部转移/回收、合格与不合格数量、重复试验及能源表计覆盖。外购热量/蒸汽及外部压缩空气不得重复同一次供应。工厂总量不得包含使用阶段电力或泄漏。 |  |
| balance_check | charge; fabrication; services | 依据测量不确定性核对逐物种充注、材料废料、水及验收质量平衡。设备留存充注不是排空气基本流，外送废物或回收产品不默认视为释放。调查未知残差及缺失身份，禁止填入未验证默认泄漏率、GWP 或零。 | `ipcc-ods-2006` |
| scope_check | all processes | 独立核验技术及空气调节功能，不仅看能力标签。车辆、可逆、吸收及无自带制冷装置形式须具备实际 BOM/试验/充注条件及来源限制；等 kg 不证明制冷服务等价。 | `wco-hs84-2022`; `doe-hvac-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 建模声明工厂出口设备生产及实际供应关联的下游 process/lifecyclemodel 投影 |
| excluded_use | 无独立情景证据的制冷/制热服务比较、寿命期运行电力/泄漏、安装或报废 |
| required_metadata | 型号及交付模块清单；固定或车辆用途；空气调节功能及风机；是否自带制冷装置；蒸气压缩、吸收或外供盘管技术；单冷或可逆；压缩机驱动及变频器；盘管材料及结构；额定制冷/制热能力及试验标准；制冷剂身份、混合物组成及实际出厂留存充注量；干式或已充注交货；净质量 M；声明工厂起始状态；自制/外购边界；工厂地域、供电电压及参考期间；包装清单 |
| required_quality_disclosure | BOM/自制外购覆盖；供应接口；实测 M/充注；试验及分配；缺失身份；平衡/不确定性；来源限制 |
| update_trigger | 型号/模块、盘管路线、工质、充注/驱动、供应方、工厂边界或实测生产数据变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025, subclasses 43912, 43913 and 43941. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 当前分类名称及相邻设备/零部件边界；结构本身不提供制造强度或完整解释范围。 |
| unsd-cpc21-correspondence | official_guidance | UNSD, CPC Version 2.1 subclass 43912 classification detail, HS 2012/2017 correspondence, retrieved 2 October 2026. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/43912 | 历史同名子类对应 841510、841520、841581、841582 与 841583。历史对照仅为支持背景，不声称已验证 CPC3 与 HS2022 对照表。 |
| wco-hs84-2022 | official_guidance | WCO, HS Nomenclature 2022 Chapter 84, PDF pages 7-8, headings 8415 and 8418. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1684_2022e.pdf | 风机与温湿调节边界；固定/分体、车辆、可逆及不自带制冷装置形式；排除零部件及空气调节设备以外的热泵。不提供生产数值默认值。 |
| doe-hvac-2011 | official_guidance | US DOE, Energy Savings Potential and RD&D Opportunities for Commercial Building HVAC Systems, September 2011, Appendix B.1 Advanced Absorption Pairs, printed page 183 / PDF page 199. https://www.energy.gov/sites/prod/files/2014/07/f17/commercial_hvac_research_opportunities.pdf | 热驱动吸收及氨-水/水-溴化锂工质对。商业 HVAC 研究报告；热源描述运行，不构成必需制造能源投入；不采用数值节能量。 |
| daikin-technology-carbon | extension_guidance | Daikin, Challenge for Carbon Neutrality, Energy-Saving Technologies: Motors/Inverters and Refrigerant-Saving Technologies, retrieved 2 October 2026. https://www.daikin.com/about/corporate/tic/technology/carbon | 压缩机/风机电机与变频器区分；翅片管与全铝微通道盘管备选。厂商示例不规定所有产品、组成、充注量或厂用能耗。磁制冷论述属于前瞻，不证明常规生产。 |
| ipcc-ods-2006 | official_guidance | IPCC, 2006 Guidelines Volume 3 Chapter 7, section 7.5 Refrigeration and Air Conditioning, manufacturing versus operation/disposal and charge accounting. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_7_Ch7_ODS_Substitutes.pdf | 跨生命周期阶段区分制冷剂留存与充注损失；国家默认充注/泄漏因子不作为工厂测量或校验限值。不规定 GWP 因子。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 仅采用细分、物理因果及有据的其他关系分配层级；不声称完全符合 PEF。 |
