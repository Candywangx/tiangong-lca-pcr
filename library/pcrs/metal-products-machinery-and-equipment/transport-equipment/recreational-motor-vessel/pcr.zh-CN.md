---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.recreational-motor-vessel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 焊接铝汽油舷外机休闲机动船制造

## 1. 范围与适用性

本候选 PCR 覆盖新制完整焊接铝单体休闲机动船，安装汽油四冲程舷外机及声明安装装置舾装。范围窄于 CPC49490。排除充气艇帆船划艇皮艇摩托艇商业客运专业船裸船体内装艉驱柴油电动配置其他船体材料独立运输拖车维修改装服务。每台验收成品设备指一艘完整船，与英文 accepted finished unit 计量含义一致。

采集实际坯料船体接收制造连接条件处理舷外机安装舾装建造调试验收建造者门点交付。排除后续休闲出行船东燃油配件维护报废新型号研发试验。不采用目录型号重量速度功率研发试验时长寿命燃料因子。制造者来源仅建立可能结构配置，完整摇篮到门声明前须实际工厂路线及上游供应商链接。科学审查待完成。[来源：buster-welding-2022；buster-xl-config；anytec-owner]

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.recreational-motor-vessel |
| classification_refs | CPC3.0 49490；较窄背景，无已接受映射 |
| covered_products | 完整焊接铝单体休闲船及汽油四冲程舷外机 |
| excluded_products | 其他船体推进类别帆船充气艇皮艇摩托艇专业客船裸船体拖车服务 |
| representative_product | 一艘验收船体发动机序列号关联完整船及记录净交付配置 |
| production_route | 条件铝坯料成形船体焊接完成条件表面处理舷外机转向安装甲板电气安全舾装建造验收 |
| market_state | 新制完整验收安装船，保留整体工作液属 M，拖车运营消耗品可拆保护排除 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明完整配置休闲机动船 |
| How much | 1 kg 验收船舶净输出，按艘交换记录除以实际 M |
| How well | 按记录配置特定条件符合实际船体焊接密封舷外机安装转向燃油电气安装安全功能放行准则。等质量不表示等载客容量船操纵旅行服务。不普遍强加制造者营销规格。 |
| How long or cycle | 一次制造建造验收周期，不假定运营寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整焊接铝汽油舷外机休闲机动船 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 建造者型号船体序列号；图纸物料表版本；焊接铝单体船合金状态供入船体完整性；安装汽油四冲程舷外机数量序列号支架螺旋桨转向安装；实际甲板座椅玻璃泡沫电气安全配置涂层保留工作液；实际装配验收准则修正净交付状态；受控验收记录正 M kg，当前实际物理重量轻船检验校准可追溯输入签署逐项质量核对；排除人员燃油淡水压载试验载荷拖车可拆保护散装备件；实际工厂场址时期供应商边界门点 |

M 是本完整验收配置受控实际净质量，含安装船体驱动船舾装舾装实际保留润滑液压工作液及整体交付件。排除临时试验载荷人员消耗燃料淡水压载临时试验重物运输拖车试验载荷备件防护外部支持船。不将检验排水量目录吨位等同净 M；保留当前实际物理轻船重量检验原件及下述精确净交付范围逐项实测修正。不假定整船台秤。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `mass_record_provenance` | controlled acceptance mass records | Mass | kg | 受控验收质量是采集接口，不是测量证明。要求当前实际轻船重量检验原件、序列号配置交付状态记录、可追溯实测核对方法逐项质量平衡。将加减项安装工作液核对至本 PCR 净范围。物理可行时保留实际完整船或核对组成的校准传感器称量及实测工装支承皮重，不规定整船台秤。水上检验派生记录保留观测吃水干舷实际水密度核验船体静水力资料仪表校准临时舱液实测；不以未修正排水量设计估计替代净 M。历史挪威程序仅方法案例，不为当前普遍法律阈值。[来源：nma-lightship] |
| `installed_scope` | outboard; outfitting | Mass | kg | 保留独立实测安装总成质量供应商包含核对净 M，完整舷外机仅按供货含动力头齿轮螺旋桨。所含组成供应商预加液体不二次增计。目录干船体标称发动机质量不替代验收完整配置质量。历史 Anytec 手册区分无发动机空船、带发动机空船、含燃油液体拖运及最大满载状态：均不自动是本 PCR 净 M。 |
| `energy_conversion` | electricity | Net calorific value | MJ | 实际实测 kWh 按已核验单位身份 3.6 MJ/kWh 换算，保留进线电压场址路线。发动机电机铭牌 kW 不是实测能量。 |
| `formulation_mass` | liquid formulations | Mass | kg | 分别称实际涂料基料固化剂燃料工作液配方。体积质量换算须声明组成状态温度下实测密度，不用油舱容量目录涂料覆盖率因子。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定坯料已制造船体机械舾装模块及实际供应商包含 |
| starting_condition_role | 前景接收到验收船舶交付制造 |
| product_classification_scope | 焊接铝汽油舷外机休闲机动船，安装舷外机安装装置舾装 |
| recursive_input_rule | 不递归生成完整休闲机动船为自身投入，外购成品船体模块跳过所含操作 |
| upstream_dataset_requirement | 匹配实际牌号配方模块完整性舷外机驱动时期地域属性，披露供应商生产缺失 |
| disclosure | 建造者型号船体序列号；图纸物料表版本；焊接铝单体船合金状态供入船体完整性；安装汽油四冲程舷外机数量序列号支架螺旋桨转向安装；实际甲板座椅玻璃泡沫电气安全配置涂层保留工作液；实际装配验收准则修正净交付状态；受控验收记录正 M kg，当前实际物理重量轻船检验校准可追溯输入签署逐项质量核对；排除人员燃油淡水压载试验载荷拖车可拆保护散装备件；实际工厂场址时期供应商边界门点 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | 纳入实际制造可归属返工下水建造调试至声明验收门。分配独立实测生产支持试航资源，排除休闲航行运输服务研发运营维护。纳入时实际拖曳船坞起重服务燃料须独立声明交换，含服务边界时长供应商范围。不推断寿命航次负担。 |  |
| `boundary_modules` | purchased components | 成品船体舷外机包控制安全模块连组成预加液体计一次。所含供入替代组成行。实际厂内制造须实测部件清单。数据集放行前补齐全部实际物料表条件化学已证实物质，候选行不是穷尽船舶物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | 铝船体坯料切割成形 | conditional | 报告建造者边界内实施坯料切割成形。 | foreground | 一艘验收配置休闲机动船，使用 M 归一化 |
| `hull_join` | 焊接船体装配完成 | required | 每艘完整焊接铝配置船。 | foreground | 一艘验收配置休闲机动船，使用 M 归一化 |
| `surface_finish` | 条件船体准备涂装 | conditional | 实际表面准备涂装在报告前景实施。 | foreground | 一艘验收配置休闲机动船，使用 M 归一化 |
| `rigging` | 汽油舷外机与转向安装 | required | 每艘验收完整汽油舷外机配置。 | foreground | 一艘验收配置休闲机动船，使用 M 归一化 |
| `outfit` | 甲板电气安全舾装 | required | 每艘完整声明休闲配置。 | foreground | 一艘验收配置休闲机动船，使用 M 归一化 |
| `acceptance` | 建造调试与完整船验收 | required | 每艘声明建造者门点放行船。 | foreground | 一艘验收配置休闲机动船，使用 M 归一化 |
| `packing` | 条件交付保护 | conditional | 交付实际供入可拆保护。 | foreground | 一艘验收配置休闲机动船，使用 M 归一化 |

实际坯料成形供入船体连接条件表面处理机械舾装下水调试验收，再条件交付保护。阶段可重叠，资源一次归属实际操作供应商范围。即使必需阶段，每行也须精确组成状态配置。遗漏实际部件燃料化学及已证实废物排放各自独立增列。不声称普遍焊接涂装配方或强制排放。

### 过程：铝船体坯料切割成形 (`stock_form`)

按序列号关联船体图切割成形实际认证合金板型材。记录厚度合金状态实际切割成形技术领退边角料。外购已制造船体替代所含坯料制造，披露已完成操作。不假定厂内挤压铸造。

#### 输入

##### 产品流

###### 铝板材 (`hull_sheet`)

仅实际公开分类范围内厚于0.2mm轧制铝合金板材，独立核验供应商合金状态厚度船图适用性。本身份不认证船用品级。排除箔未轧锭。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`buster-welding-2022`

###### 铝挤压型材 (`hull_profile`)

仅实际匹配公开身份挤压铝结构型材，保留供应商合金状态截面独立建立船设计适用性。本身份不授予合金强度船用认证。

- 选定流：铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`buster-welding-2022`

###### 交流电 (`electricity_stock_form`)

仅实际匹配公开身份的中国用户侧电网平均 1–35kV交流供电，计量可归属操作。其他场址电压组合自发电须独立兼容身份，不将欧洲工厂映射中国供电；内部配电不二次计，额定 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`buster-welding-2022`

#### 输出

##### 废物流

###### 分流未处理铝合金切割边角料 (`al_offcut`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：分流未处理铝合金切割边角料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`buster-welding-2022`

### 过程：焊接船体装配完成 (`hull_join`)

按实际焊规装配船体艉板肋骨甲板声明结构连接。记录填料合金保护气返工检验检漏。Buster 来源记载 MIG 人工机器人工具，不规定机器人填料配方普遍连接程序。外购成品船体跳过已实施焊接但核对接口完整性。不将钢焊气替代铝焊。

#### 输入

##### 产品流

###### 完整已制造焊接铝休闲裸船体 (`fabricated_hull`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：完整已制造焊接铝休闲裸船体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`buster-welding-2022`

###### 实心铝镁合金焊接填充丝 (`al_wire`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：实心铝镁合金焊接填充丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`buster-welding-2022`

###### 气态氩焊接保护气供应 (`argon`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：气态氩焊接保护气供应
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`buster-welding-2022`

###### 交流电 (`electricity_hull_join`)

仅实际匹配公开身份的中国用户侧电网平均 1–35kV交流供电，计量可归属操作。其他场址电压组合自发电须独立兼容身份，不将欧洲工厂映射中国供电；内部配电不二次计，额定 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`buster-welding-2022`

#### 输出

##### 废物流

###### 捕集富氧化铝焊接滤尘 (`weld_dust`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：捕集富氧化铝焊接滤尘
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`buster-welding-2022`

### 过程：条件船体准备涂装 (`surface_finish`)

分别记录实际清洗前处理底漆涂料基料固化剂，防污仅实际配置时。裸铝处理铝涂装铝可选船底层为不同路线，不为普遍配方。Anytec M400 专有营销不披露化学身份用量，采用此处理必须实际安全数据表。供应商已完成船体层跳过已实施处理。实际溶剂物质配方已证实排放各自增列。

#### 输入

##### 产品流

###### 工艺用水 (`clean_water`)

仅实际供入处理工业工艺水，称补给排除内部再循环，区分环境资源取用清洗废液。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`buster-xl-config`

###### 配方环氧船体底漆基料组分 (`epoxy_base`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：配方环氧船体底漆基料组分
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`buster-xl-config`

###### 聚胺船体环氧底漆固化剂配方 (`epoxy_hardener`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：聚胺船体环氧底漆固化剂配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`buster-xl-config`

###### 配方 International Trilux33 铝船体防污涂料 (`cu2o_paint`)

仅实际供入施涂本精确配置涂料时，须当前供应商安全数据表配方独立建立铝适用性。历史 Anytec第66页记载本可选商品并警示铝用含铜产品；不推断杀生剂化学普遍配方。其他实际配方须各自原子行。

- 选定流：配方 International Trilux33 铝船体防污涂料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`buster-xl-config`

###### 交流电 (`electricity_surface_finish`)

仅实际匹配公开身份的中国用户侧电网平均 1–35kV交流供电，计量可归属操作。其他场址电压组合自发电须独立兼容身份，不将欧洲工厂映射中国供电；内部配电不二次计，额定 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`buster-xl-config`

#### 输出

##### 废物流

###### 转交处理的铝船体清洗水性废液 (`clean_effluent`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：转交处理的铝船体清洗水性废液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`buster-xl-config`

### 过程：汽油舷外机与转向安装 (`rigging`)

安装实际完整汽油舷外机艉板支架转向油门换挡燃油系统电气接口。外购完整舷外机可能含动力头齿轮箱螺旋桨工作液：所含组成计一次，不另计制造。螺旋桨配置舷外机数量遵循供应商配置记录。舱底燃油电气模块未含时独立。排除内装机艉驱柴油电动变型。

#### 输入

##### 产品流

###### 完整汽油四冲程船用舷外机 (`outboard`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：完整汽油四冲程船用舷外机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_rigging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rigging`
- 来源：`anytec-owner`

###### 完整液压舷外机转向系统 (`steering`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：完整液压舷外机转向系统
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_rigging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rigging`
- 来源：`anytec-owner`

###### 成品铝制汽油船用油舱总成 (`fuel_tank`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：成品铝制汽油船用油舱总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_rigging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rigging`
- 来源：`anytec-owner`

###### 润滑油 (`lube_oil`)

仅实际匹配公开范围石油馏分润滑油配方，独立记录四冲程舷外机供应商品级添加剂。称净首次加注安装保留量，外购已加船机内部省略。描述热值不是燃烧强度因子，排除合成 PAO 不同实际配方。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_rigging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rigging`
- 来源：`anytec-owner`

###### 交流电 (`electricity_rigging`)

仅实际匹配公开身份的中国用户侧电网平均 1–35kV交流供电，计量可归属操作。其他场址电压组合自发电须独立兼容身份，不将欧洲工厂映射中国供电；内部配电不二次计，额定 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_rigging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rigging`
- 来源：`anytec-owner`

### 过程：甲板电气安全舾装 (`outfit`)

安装实际甲板控制台挡风玻璃座椅电池接线舱底泵安装安全件。浮力泡沫栏杆灭火器灯可选电子仅按实际物料表记录。泡沫化学座椅面材玻璃类型来自供应商记录，夹层钢化窗片不同不可替代。拖车单卖配件不属 M。完整总成替代所含组成一次。

#### 输入

##### 产品流

###### 已充液铅酸船用起动电池 (`battery`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：已充液铅酸船用起动电池
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`buster-xl-config`

###### 绝缘铜船用低压电缆 (`cable`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：绝缘铜船用低压电缆
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`buster-xl-config`

###### 钢化安全玻璃船用挡风窗片 (`windshield`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：钢化安全玻璃船用挡风窗片
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`buster-xl-config`

###### 完整软垫船用乘客座椅 (`seat`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：完整软垫船用乘客座椅
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`buster-xl-config`

###### 闭孔聚乙烯船用浮力泡沫块 (`buoyancy`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：闭孔聚乙烯船用浮力泡沫块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`buster-xl-config`

###### 完整离心船用舱底水泵 (`bilge_pump`)

仅本精确实际独立交换；采集供应商规格组成状态称量领退或接收者出口记录供应商完整性。完整供入总成所含组成替代一次。

- 选定流：完整离心船用舱底水泵
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`buster-xl-config`

###### 交流电 (`electricity_outfit`)

仅实际匹配公开身份的中国用户侧电网平均 1–35kV交流供电，计量可归属操作。其他场址电压组合自发电须独立兼容身份，不将欧洲工厂映射中国供电；内部配电不二次计，额定 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`buster-xl-config`

### 过程：建造调试与完整船验收 (`acceptance`)

记录实际尺寸船体密封安装电气安全及可归属下水水上发动机试验返工放行。Buster 新型号开发试验为研发证据，不是每艘工厂试验强制时长。保留实际载荷人员舱液状态燃料领退消耗保留校准仪表。排除运营出行休闲旅行维护寿命燃料。不假定普遍试验距离速度排放因子油耗。

#### 输入

##### 产品流

###### 供建造调试的化石汽油 (`test_petrol`)

仅实际消耗可归属建造试验汽油。记录供货组成化石生物比例校准净领退及消耗船东保留燃料，不假定乙醇比例密度热值。船东燃油从 M 排除，不自动为工厂消耗。

- 选定流：供建造调试的化石汽油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

###### 交流电 (`electricity_acceptance`)

仅实际匹配公开身份的中国用户侧电网平均 1–35kV交流供电，计量可归属操作。其他场址电压组合自发电须独立兼容身份，不将欧洲工厂映射中国供电；内部配电不二次计，额定 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

#### 输出

##### 产品流

###### 验收完整焊接铝汽油舷外机休闲机动船 (`finished_machine`)

验收完整净船一千克，含安装发动机螺旋桨安装装置舾装保留工作液；排除燃油人员淡水压载试验载荷拖车可拆保护散装备件。

- 选定流：验收完整焊接铝汽油舷外机休闲机动船
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`nma-lightship`

#### 输出

##### 废物流

###### 废润滑油 (`spent_oil`)

仅实际建造调试产生使用污染石油发动机润滑油，记录接收者实测净质量作为未处理废物转出。公开流含石油或合成废油，本行限实际石油部分。不推断再生燃烧避免制造信用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅可归属独立实测化石 CO2 试验尾气即时排至空气未指定子介质，须已证实化石比例，不推断汽油混合因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

###### 一氧化氮 (`nitric_oxide`)

仅独立实测试验 NO 即时排至空气未指定子介质。未物种拆分总 NOx 不建立本数量，不规定必然排放默认因子。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

###### 二氧化氮 (`nitrogen_dioxide`)

仅独立实测试验 NO2 即时排至空气未指定子介质。未物种拆分总 NOx 不建立本数量，不规定必然排放默认因子。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

### 过程：条件交付保护 (`packing`)

可拆保护膜独立记录从 M 排除。交付拆卸整体船件核对验收完整配置，排除临时工装运输拖车单卖备件散装船东用品。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅实际可拆非自黏非泡沫未增强未层压 PE-LD 保护膜，称净领退从 M 排除。其他层压包装须独立精确行。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：

###### 交流电 (`electricity_packing`)

仅实际匹配公开身份的中国用户侧电网平均 1–35kV交流供电，计量可归属操作。其他场址电压组合自发电须独立兼容身份，不将欧洲工厂映射中国供电；内部配电不二次计，额定 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared shipyard resources | 按船体工单配置分开，优先直接归属实测坯料领退机械收货工时仪表试航返工。不可分离共用资源采用已证实实测因果驱动量如操作时间负荷涂装面积层要求：份额 = 工单驱动量 / 全部覆盖工单驱动量总和。保留时期分母因果，吨位标称排水量等艘数不自动作因果驱动。 | `ghg-product-allocation-2011` |
| `allocation_recovery` | internal reuse and waste | 内部复用坯料水试验燃料为转移，不重复新投入自动抵扣。输出废物保留实测量接收者，不假定避免生产效益。经记录审查剩余分配前分离可售共产品。将报告期拒收返工建造在制核对至验收产出。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整船舶净质量 | controlled_acceptance_record | 型号；配置；序列号；验收净质量 M；验收重量报告原件编号日期；实际轻船重量检验方法；仪表校准；交付状态；安装工作液；逐项增加扣除质量；排除临时试验载荷人员燃油淡水压载试验载荷；拆卸整体件；核验者；质量平衡 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 逐艘验收 | 该船实际制造验收时期 | 声明船厂验收门点 | 每台验收净质量 | 原始实际检验配置修正质量平衡核验记录 |
| `cp_stock_form` | stock_form | 铝船体坯料切割成形 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；舷外机序列号独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集图纸版本材料证书称量领退边角料切割成形工位仪表工单。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_hull_join` | hull_join | 焊接船体装配完成 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；舷外机序列号独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留船体序列号实际焊规检验填料气体净领用外购船体已完成范围实测工位公用工程。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_surface_finish` | surface_finish | 条件船体准备涂装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；舷外机序列号独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集层安全数据表供应商包含记录称量基料固化剂清洗剂领退工艺水施涂面积分流废物实测物质出口。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_rigging` | rigging | 汽油舷外机与转向安装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；舷外机序列号独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留船发动机序列号发动机燃料规格供应商包含独立实测安装模块质量安装转向连接螺旋桨首次加注平衡。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_outfit` | outfit | 甲板电气安全舾装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；舷外机序列号独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留实际舾装物料表供应商范围安装净质量电气浮力功能验收记录条件设备缺席。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_acceptance` | acceptance | 建造调试与完整船验收 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；舷外机序列号独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留原始实际完整配置重量验收记录测量方法校准皮重修正试验协议条件实测燃料物质废物记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_packing` | packing | 条件交付保护 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；舷外机序列号独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 称各实际保护领退，核对拆卸整体交付件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐船体配置工单采集可归属净坯料领用独立模块公用工程建造试航消耗废物实际排放，扣记录退回库存变化并合理共用分配，再除验收艘数得 q_item，除同一受控实测净 M。保留物理质量交换 kg/kg 及电力 MJ/kg；独立实测舷外机质量建立配置完整性，不用固定目录船机质量。兼容序列号船舶实测质量变化时可归属总量除验收净质量之和，保留全部序列号记录。分开不兼容舷外机驱动船体舾装涂装试航范围。未知为缺口，不作零，不推断吨位容量额定功率寿命换算。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | 当前船舶验收质量原件须实施 mass_record_provenance。保留实际物理轻船重量检验、可观测方法输入校准及签署逐项交付净配置核对；核对独立称量安装模块工作液。目录无解释排水量吨位记录不足。方法缺失修正不确定配置变化阻止完整量值数据集；以新测量核对解决，不假定重量。 | 原件与修正台账；nma-lightship 仅方法案例 |
| `quality_bom` | complete vessel | 核对图纸物料表安装船体机械舷外机驱动管系电气控制安全导航实际工作液质量供应商范围拆卸交付件。完成前增列全部实际缺失部件，接收完整模块计一次。 | 图纸原件称量供应商完整性 |
| `quality_balances` | flows and trials | 保留校准物料领退复用实际配方密度调试消耗保留燃料实测物质介质出口。QA 限值来自适用实际记录核验可比证据，不编造收率强度范围普遍调试耗用。 | 库存仪表安全数据表试验移交 |
| `quality_boat` | rigging; outfit; acceptance | 核对船体合金状态实际连接供应商船体范围；安装舷外机螺旋桨转向燃油电气安全件实际工作液质量。记录实际建造试验载荷人员舱液，速度负荷时长仅实测，校准工位发动机试验能量燃料净退回回收废物独立实测尾气物质。开发型号试验不是每艘必然制造投入。净配置重量方法修正平衡缺失阻止完整量值数据。 | 实际图纸供应商称量校准试验记录 |
| `quality_coverage` | dataset | 披露实际地域时期配置条件缺席外包身份量值不确定性经验范围缺口上游缺失适用验收制度。历史制造者主管案例不证明目前证书现行法律完整性本船实际 M。PCR 检查核验声明关系，不验证真实船记录科学批准。 | 覆盖证据限制登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求配置完整焊接铝汽油舷外机休闲机动船及实施 mass_record_provenance 的受控记录正实际净 M。排除运营临时试验载荷人员燃油淡水压载临时载荷，保留声明安装工作液。拒绝吨位载重量目录满载排水量满燃油质量替代。底层方法平衡缺失须审查并阻止量值数据完成。 |  |
| `validate_identity` | all rows | 核对逐原子物理化学交换公开参考属性单位组路线状态供应商范围。发动机台数不是质量，完整舷外机发动机安装组成只计一次，CuO/Cu2O 化学粉不是配方铝兼容防污涂料，供水不是废液资源取用。无依据身份留空，完成前增列实际物质部件。 |  |
| `validate_measurement` | all rows | 逐数量采集换算核验同配置实际时期场址验收艘数净 M。核对安装预加液体消耗试航燃料供应商组成无重复；核验校准密度单位换算共用分母。未知不得作零。 |  |
| `validate_species` | elementary rows | 仅采用已证实可归属建造试航物质实际环境介质。本 CO2/NO/NO2 身份为空气未指定即时排放，化石 CO2 须化石来源。未分物种总 NOx、N2O、氮亚硝酸盐生物源 CO2 水土壤长期排放不得替代。捕集滤尘保留废物。 |  |
| `validate_acceptance` | claimed flag/class acceptance | 声明时追溯实际船舶特定检验证书适用主管船级制度。泛指制造者认证不认证本休闲机动船，不采用普遍数值标准试验载荷。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整焊接铝汽油舷外机休闲机动船前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配船体舷外机驱动舾装涂装受控净质量范围试航边界门点场址时期制造供应链模型 |
| excluded_use | 休闲航行运输服务寿命比较等质量容量等效其他舷外机驱动材料无依据完整摇篮到大门声明 |
| required_metadata | 建造者型号船体序列号；图纸物料表版本；焊接铝单体船合金状态供入船体完整性；安装汽油四冲程舷外机数量序列号支架螺旋桨转向安装；实际甲板座椅玻璃泡沫电气安全配置涂层保留工作液；实际装配验收准则修正净交付状态；受控验收记录正 M kg，当前实际物理重量轻船检验校准可追溯输入签署逐项质量核对；排除人员燃油淡水压载试验载荷拖车可拆保护散装备件；实际工厂场址时期供应商边界门点 |
| required_quality_disclosure | 身份量值质量原始依据缺口不确定性条件缺席完整物料表分配实际验收范围未链接上游 |
| update_trigger | 船体舷外机驱动舾装涂装供应商模块实际 M 证据修正试航状态边界制造验收制度场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `buster-welding-2022` | literature | [Buster: Designers prioritise safety and performance,23March2022](https://www.buster.fi/en/news/buster-designers-prioritise-safety-and-performance) | 设计制造工具段：铝船 MIG 人工机器人案例。新型号开发试验段反证每艘强制试验小时假定；不复用时长质量制造强度。历史工厂案例，不规定目前机器人焊接配方。 |
| `buster-xl-config` | literature | [Buster XL configured product](https://www.buster.fi/en/models/buster-xl) | 发动机标准配件工厂选项船体处理列表：完整舷外机包液压转向钢化玻璃铝地板可选底漆防污。未注明日期型号快照，不采用目录重量目前证书功率速度配方。实际供入遵循供应商配置记录。 |
| `anytec-owner` | literature | [Anytec A21 Owner Manual,issued15February2019](https://www.anytec.se/s/a21_owner_s_manual_english.pdf) | PDF11/33/35/51/53/73–74页、印刷3/25/27/43/45/65–66页、1.1、3.1、3.3、4.1–4.2、6.2.1–6.2.2节：独立铝舷外机配置、区分含无发动机运营载荷型号质量状态、燃油转向模块可选专有涂层背景。历史型号手册，不采用运营维护指令型号重量功率燃油阈值目前合规。不推断 M400 专有组成。 |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E,Rev07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF印刷5–7页3.1–3.4节：物理检验身份状态实测修正舱液水密度吃水。仅历史挪威水上方法案例；须当前实际校准重量轻船检验及净交付修正记录。不提供全球法律舱液纵倾阈值实际船 M。 |
| `ghg-product-allocation-2011` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | 印刷63页PDF65页表9.1–9.2：仅历史分配层级，须实际实测因果驱动量，不给等艘数标称质量分配因子。 |
