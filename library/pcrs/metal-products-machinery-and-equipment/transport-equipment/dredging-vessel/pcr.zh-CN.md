---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.dredging-vessel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢质柴油非自行式绞吸疏浚船制造

## 1. 范围与适用性

本候选 PCR 覆盖新制完整钢质柴油非自行式绞吸疏浚船。将 CPC49319 收窄为一种制造结构：安装绞刀桥架泥泵船内管定位桩绞车柴油液压动力控制安全舾装。排除自行式疏浚船耙吸挖泥舱船抓斗链斗反铲船浮吊浮坞军舰钻井平台独立外部排泥管助推船工作船仅浮箱维修改装疏浚服务。每台验收成品设备指一艘完整船，与英文 accepted finished unit 计量含义一致。

采集实际接收到建造者交付船体制造连接条件涂装动力疏浚集成舾装下水可归属装配水上验收试验。临时试验仅属制造验收时按实测纳入。沉积物开挖处置生态改变运营疏浚吞吐客户拖航维护报废排除。制造者原件支持结构配置依赖，不支持普遍配方质量性能强度。供应商生产链接缺失时不得声明完整摇篮到门；科学审查待完成。[来源：damen-csd350；ihc-beaver50-2023]

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.dredging-vessel |
| classification_refs | CPC3.0 49319；较窄背景，无已接受映射 |
| covered_products | 完整钢质柴油非自行式绞吸疏浚船 |
| excluded_products | 其他疏浚结构自行船平台其他浮式机械外部管线支持船中间件维修服务 |
| representative_product | 一艘验收序列号关联完整疏浚船及记录净交付配置 |
| production_route | 条件坯料成形钢船体连接条件涂装柴油液压绞刀泥泵定位集成控制安全下水验收 |
| market_state | 新制验收完整配置疏浚船；含安装工作液，从 M 排除临时运营消耗品外部设备 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明完整配置非自行式绞吸疏浚船 |
| How much | 1 kg 验收船舶净输出，按艘交换记录除以实际 M |
| How well | 按记录试验条件符合实际船体模块连接泥泵驱动绞刀桥架定位液压电气安全船舶特定放行准则。等质量不建立等土质疏浚深度泵流量服务性能。不将目录容量功率作制造因子。 |
| How long or cycle | 一次制造建造验收周期，不假定运营寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整钢质柴油非自行式绞吸疏浚船 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 建造者型号；船体序列号图纸版本；钢船体模块完整性；非自行式柴油绞吸路线；实际绞刀头驱动桥架泥浆泵耐磨材船内管系；桩绞车固定桩或台车定位；控制电气安全范围保留工作液；实际装配试验准则净交付状态；当前物理轻船重量检验原始实测输入校准签署修正平衡的受控正 M kg；排除外部管线助推船工作船燃油淡水压载人员临时试验沉积物重物保护独立备件；实际场址时期供应商包含门点 |

M 是本完整验收配置受控实际净质量，含安装船体驱动疏浚机械舾装实际保留液压润滑冷却工作液及整体交付件。排除试验沉积物人员消耗燃料淡水压载临时试验重物外部管试验载荷备件防护外部支持船。不将检验排水量目录吨位等同净 M；保留当前实际物理轻船重量检验原件及下述精确净交付范围逐项实测修正。不假定整船台秤。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `mass_record_provenance` | controlled acceptance mass records | Mass | kg | 受控验收质量是采集接口，不是测量证明。要求当前实际轻船重量检验原件、序列号配置交付状态记录、可追溯实测核对方法逐项质量平衡。将加减项安装工作液核对至本 PCR 净范围。检验派生记录保留观测吃水干舷实际水密度核验船体静水力资料仪表校准临时舱液实测；不以未修正排水量设计估计替代净 M。历史挪威程序仅方法案例，不为当前普遍法律阈值。[来源：nma-lightship] |
| `engine_count` | marine_engine | Number of items | Item(s) | 独立供入发动机按 Item(s) 计数，保留船用规格独立实测安装质量核对 M 物料表。外购完整发电机组替代所含发动机台数。不假定固定发动机质量。 |
| `energy_conversion` | electricity | Net calorific value | MJ | 实际实测 kWh 按已核验单位身份 3.6 MJ/kWh 换算，保留进线电压场址路线。发动机电机铭牌 kW 不是实测能量。 |
| `formulation_mass` | liquid formulations | Mass | kg | 分别称实际涂料基料固化剂燃料工作液配方。体积质量换算须声明组成状态温度下实测密度，不用油舱容量目录涂料覆盖率因子。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定坯料分段机械舾装模块及实际供应商包含 |
| starting_condition_role | 前景接收到验收船舶交付制造 |
| product_classification_scope | 钢质船体柴油非自行式绞吸疏浚船，安装绞刀桥架泥浆泵定位系统 |
| recursive_input_rule | 不递归生成完整非自行式绞吸疏浚船为自身投入，外购成品分段模块跳过所含操作 |
| upstream_dataset_requirement | 匹配实际牌号配方模块完整性泥泵驱动时期地域属性，披露供应商生产缺失 |
| disclosure | 建造者型号；船体序列号图纸版本；钢船体模块完整性；非自行式柴油绞吸路线；实际绞刀头驱动桥架泥浆泵耐磨材船内管系；桩绞车固定桩或台车定位；控制电气安全范围保留工作液；实际装配试验准则净交付状态；当前物理轻船重量检验原始实测输入校准签署修正平衡的受控正 M kg；排除外部管线助推船工作船燃油淡水压载人员临时试验沉积物重物保护独立备件；实际场址时期供应商包含门点 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | 纳入实际制造可归属返工下水建造调试至声明验收门。分配独立实测生产支持试航资源，排除运营疏浚开挖服务研发运营维护。纳入时实际拖曳船坞起重服务燃料须独立声明交换，含服务边界时长供应商范围。不推断寿命航次负担。 |  |
| `boundary_modules` | purchased components | 成品船体分段动力包控制安全模块连组成预加液体计一次。所含供入替代组成行。实际厂内制造须实测部件清单。数据集放行前补齐全部实际物料表条件化学已证实物质，候选行不是穷尽船舶物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | 船体坯料切割成形 | conditional | 未成形船体坯料在报告船厂边界内加工。 | foreground | 一艘验收配置非自行式绞吸疏浚船，使用 M 归一化 |
| `hull_join` | 船体分段连接结构完成 | required | 每艘新制完整钢质船体非自行式绞吸疏浚船。 | foreground | 一艘验收配置非自行式绞吸疏浚船，使用 M 归一化 |
| `surface_finish` | 条件表面准备涂装 | conditional | 实际表面准备涂装在报告前景内实施。 | foreground | 一艘验收配置非自行式绞吸疏浚船，使用 M 归一化 |
| `machinery` | 柴油驱动与液压动力安装 | required | 每艘声明完整柴油非自行式绞吸疏浚船。 | foreground | 一艘验收配置非自行式绞吸疏浚船，使用 M 归一化 |
| `dredging` | 绞刀桥架泥泵与定位集成 | required | 每艘声明完整柴油非自行式绞吸疏浚船。 | foreground | 一艘验收配置非自行式绞吸疏浚船，使用 M 归一化 |
| `outfit` | 控制电气安全舾装 | required | 每艘声明完整柴油非自行式绞吸疏浚船。 | foreground | 一艘验收配置非自行式绞吸疏浚船，使用 M 归一化 |
| `acceptance` | 下水调试整船验收 | required | 每艘声明船厂交付门点放行完整船舶。 | foreground | 一艘验收配置非自行式绞吸疏浚船，使用 M 归一化 |
| `packing` | 条件可拆交付保护 | conditional | 非自行式绞吸疏浚船实际供入可拆交付保护。 | foreground | 一艘验收配置非自行式绞吸疏浚船，使用 M 归一化 |

实际坯料成形供入船体连接条件表面处理机械舾装下水调试验收，再条件交付保护。阶段可重叠，资源一次归属实际操作供应商范围。即使必需阶段，每行也须精确组成状态配置。遗漏实际部件燃料化学及已证实废物排放各自独立增列。不声称普遍焊接涂装配方或强制排放。

### 过程：船体坯料切割成形 (`stock_form`)

按序列号关联批准结构图切割成形声明板型材。追溯牌号厚度材料证书领退边角料。外购已制造分段一次替代所含坯料已完成制造。实际切割气润滑剂其他制造耗材须化学专用独立行。实际工单必须建立每项制造操作；制造商结构证据不规定通用配方。

#### 输入

##### 产品流

###### 热轧普通强度认证造船钢板 (`normal_hull_plate`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：热轧普通强度认证造船钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`damen-csd350`

###### 钢板 (`hsla_plate`)

仅实际匹配公开物理路线牌号厚度热轧低合金高强厚板。造船适用材料批准须实际图纸供应商记录独立建立，本身份不是船用批准。其他钢牌号须独立行。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`damen-csd350`

###### 热轧钢制船体加强筋型材 (`hull_profile`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：热轧钢制船体加强筋型材
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`damen-csd350`

###### 交流电 (`electricity_stock_form`)

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`damen-csd350`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

内部复用后输出分类未处理钢切割边角料，称实际量保留接收者，不含后续处理。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_form`
- 来源：`damen-csd350`

### 过程：船体分段连接结构完成 (`hull_join`)

按声明建造路线连接规程验收记录装配连接船体分段舱壁甲板上层建筑。记录实际焊法填料气体变形校正结构检验返工。外购分段跳过已实施组成制造；中间分段质量不是成船 M。焊接变型不表示所有填料气体同时存在。

#### 输入

##### 产品流

###### 实心低合金钢气体保护焊丝 (`solid_wire`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：实心低合金钢气体保护焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`damen-csd350`

###### 二氧化碳 (`co2_shield`)

仅匹配本中国厂内路线身份实际使用供入纯 CO2 保护气。采集实测消耗质量，不替代氩预混液态或推定化石排放。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`damen-csd350`

###### 氩二氧化碳预混焊接保护气 (`argon_mix`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：氩二氧化碳预混焊接保护气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`damen-csd350`

###### 交流电 (`electricity_hull_join`)

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`damen-csd350`

#### 输出

##### 废物流

###### 捕集的富氧化铁船体焊接滤尘 (`weld_dust`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：捕集的富氧化铁船体焊接滤尘
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hull_join`
- 来源：`damen-csd350`

### 过程：条件表面准备涂装 (`surface_finish`)

采集实际清洗抛丸、分别记录涂料基料固化剂、实际使用时防污涂料固化废物出口。供应商已涂分段跳过已完成层。环氧 Cu2O 防污为条件精确化学案例，不强制配方。替代层实际稀释剂清洗物质各自增列。捕集磨料涂料残渣为废物，实际实测环境排放须独立元素物质行。

#### 输入

##### 产品流

###### 工艺用水 (`clean_water`)

实际清洗供入处理工业工艺水，排除内部循环环境资源取用。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`damen-csd350`

###### 球形铸钢船体抛丸磨料 (`abrasive`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：球形铸钢船体抛丸磨料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`damen-csd350`

###### 配方环氧船用涂料基料组分 (`epoxy_base`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：配方环氧船用涂料基料组分
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`damen-csd350`

###### 聚胺船用环氧涂料固化剂配方 (`epoxy_hardener`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：聚胺船用环氧涂料固化剂配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`damen-csd350`

###### 氧化亚铜自抛光船用防污涂料配方 (`cu2o_paint`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：氧化亚铜自抛光船用防污涂料配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`damen-csd350`

###### 交流电 (`electricity_surface_finish`)

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`damen-csd350`

#### 输出

##### 废物流

###### 含去除船体涂层残渣的废钢抛丸磨料 (`spent_abrasive`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：含去除船体涂层残渣的废钢抛丸磨料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`damen-csd350`

###### 转交处理的钢船体清洗水性废液 (`clean_effluent`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：转交处理的钢船体清洗水性废液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_surface_finish`
- 来源：`damen-csd350`

### 过程：柴油驱动与液压动力安装 (`machinery`)

安装实际独立柴油发动机泥泵驱动离合减速轴承座液压动力单元，记录冷却尾气控制首次加注。外购完整动力包替代所含发动机齿轮液压组成。不假定螺旋桨推进传动，本范围非自行式。另供辅助发电机所含计一次。供应商总成不表示厂内铸造发动机制造。

#### 输入

##### 产品流

###### 柴油发动机 (`marine_engine`)

仅公开非机动车非航空范围独立供入装配压燃船用活塞发动机。采集实际 Item(s) 台数及独立实测安装质量核对船 M，台数不是质量。外购完整发电机组推进包所含时省略本投入。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：物品数量 / Item(s)
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`ihc-beaver50-2023`

###### 完整柴油泥泵减速离合总成 (`pump_drive`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整柴油泥泵减速离合总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`ihc-beaver50-2023`

###### 完整油液压绞刀定位动力单元 (`hydraulic_unit`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整油液压绞刀定位动力单元
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`ihc-beaver50-2023`

###### 完整水冷柴油发动机换热器总成 (`engine_cooling`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整水冷柴油发动机换热器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`ihc-beaver50-2023`

###### 液压油 (`hydraulic_oil`)

仅实际供入矿物基础配方液压油，匹配公开厂内真空蒸馏氢化精炼路线供应商添加剂组成记录。保留质量参考属性，不用次级体积，称首次加注领退保留平衡；供应商预加液压单元内部不再增计。合成水基液体不匹配路线须独立精确身份。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`ihc-beaver50-2023`

###### 交流电 (`electricity_machinery`)

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`ihc-beaver50-2023`

### 过程：绞刀桥架泥泵与定位集成 (`dredging`)

安装实际绞刀头驱动桥架提升装置耐磨泥浆泵船内吸排管定位桩横移定位绞车锚。固定定位桩与可选桩台车配置分别记录。泵材质刀齿衬里驱动船内管尺寸遵循实际供应商图，历史 Beaver 案例不是普遍设计。安装整体模块属净 M，含与验收配置核对的交付拆卸浮箱桥架桩。外部排泥管助推船工作船仍是独立产品。

#### 输入

##### 产品流

###### 完整旋转疏浚绞刀头总成 (`cutter`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整旋转疏浚绞刀头总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 完整钢制绞吸疏浚船桥架总成 (`ladder`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整钢制绞吸疏浚船桥架总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 完整耐磨离心疏浚泥浆泵 (`slurry_pump`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整耐磨离心疏浚泥浆泵
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 成品钢制船内疏浚泥浆管段 (`onboard_pipe`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：成品钢制船内疏浚泥浆管段
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 成品钢制疏浚船定位桩 (`spud`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：成品钢制疏浚船定位桩
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 完整液压疏浚船横移绞车 (`winch`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整液压疏浚船横移绞车
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 成品钢制疏浚船横移钢丝绳 (`wire_rope`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：成品钢制疏浚船横移钢丝绳
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 成品钢制疏浚船横移锚 (`anchor`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：成品钢制疏浚船横移锚
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 完整钢制疏浚船定位桩台车总成 (`spud_carriage`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整钢制疏浚船定位桩台车总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

###### 交流电 (`electricity_dredging`)

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dredging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dredging`
- 来源：`ihc-beaver50-2023`

### 过程：控制电气安全舾装 (`outfit`)

安装配置控制舱电气配电接线实际泥泵压力仪表安全舱底系统。甲板起重机空调导航自动化包按实际安装条件总成记录。生活舱远程监控订阅不自动属船制造。完整模块计一次，数据集完成前增列遗漏实际硬件管材物质。

#### 输入

##### 产品流

###### 绝缘铜船用电缆 (`cable`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：绝缘铜船用电缆
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`ihc-beaver50-2023`

###### 已充液铅酸船用起动电池 (`starter_battery`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：已充液铅酸船用起动电池
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`ihc-beaver50-2023`

###### 夹层安全玻璃船用窗片 (`window`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：夹层安全玻璃船用窗片
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`ihc-beaver50-2023`

###### 成品船用离心舱底水泵 (`bilge_pump`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品船用离心舱底水泵
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`ihc-beaver50-2023`

###### 成品碳钢船用舱底管 (`bilge_pipe`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品碳钢船用舱底管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`ihc-beaver50-2023`

###### 完整钢制疏浚船控制舱模块 (`control_cabin`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整钢制疏浚船控制舱模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`ihc-beaver50-2023`

###### 完整疏浚泥浆压力变送器总成 (`pressure_sensor`)

仅实际独立供入配置部件；记录供应商包含物理规格称量净领退。完整模块内部不重复计数。

- 选定流：完整疏浚泥浆压力变送器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`ihc-beaver50-2023`

###### 交流电 (`electricity_outfit`)

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`ihc-beaver50-2023`

### 过程：下水调试整船验收 (`acceptance`)

按配置特定放行准则采集实际下水水上装配泥泵驱动绞刀桥架定位桩绞车液压控制安全验收试验可归属返工。不假定普遍时长路线疏浚体积土质载荷。记录实际临时试验水砂循环补给回收废物接收者；排除后续运营开挖土处置生态变化。区分燃料领退消耗与为船东运营保留燃料。临时介质燃料淡水压载人员外部管排除净 M，整体保留工作液交付模块核对净配置。声明船旗船级验收须实际适用原件。

#### 输入

##### 产品流

###### 石油馏分船用润滑油配方 (`mineral_oil`)

仅实际匹配独立供入首次加注配方石油馏分润滑油。记录净领用保留安装量核对 M；供应商所含时不二次加注，描述热值不是制造因子。不同实际油配方须独立行。

- 选定流：石油馏分船用润滑油配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

###### 含缓蚀剂乙二醇水船机冷却预混液 (`coolant`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：含缓蚀剂乙二醇水船机冷却预混液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

###### 供调试的化石低硫船用柴油 (`test_diesel`)

仅可归属建造试验实际消耗化石低硫船用柴油牌号。保留供应商规格化石来源、校准领退及实际条件舱液测深密度；区分试验消耗未用燃料与仅为后续船东航次保留燃料。船东剩余燃料不属制造净 M，也不是试验消耗。不假定默认硫比例热值排放因子。

- 选定流：供调试的化石低硫船用柴油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

###### 调试试验用二氧化硅石英砂 (`test_quartz`)

仅可归属验收泥泵绞刀试验实际称量采用石英砂时；记录组成粒度回收。不规定普遍泥浆试验介质，天然污染沉积物须独立实测组成范围。

- 选定流：调试试验用二氧化硅石英砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

###### 工艺用水 (`trial_water`)

实际调试供入工艺水补给，循环计一次，不为环境水资源取用。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
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

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

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

###### 验收完整钢质柴油非自行式绞吸疏浚船 (`finished_machine`)

验收完整净配置疏浚船一千克；核对船体安装疏浚驱动控制系统保留工作液，排除试验沉积物消耗燃料淡水压载外部排泥管工作船可拆防护。不作疏浚服务产出开挖体积分母。

- 选定流：验收完整钢质柴油非自行式绞吸疏浚船
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

###### 转交处理的废石油润滑油 (`spent_oil`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：转交处理的废石油润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`nma-lightship`

###### 转交处理的水性石英砂调试泥浆 (`quartz_test_slurry`)

仅实测输出水石英试验悬浮液；记录干固体液相组成接收者回收。其所含水石英不重复作为独立输出质量。不含常规运营疏浚弃土。

- 选定流：转交处理的水性石英砂调试泥浆
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

仅已证实化石来源可归属实测化石燃料调试 CO2 排至空气未指定子介质，不推断保护气或寿命运营因子。

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

仅独立实测调试 NO 排至空气未指定子介质。未物种拆分总 NOx 结果不能建立本数量，不假定强制排放。

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

仅独立实测调试 NO2 排至空气未指定子介质。未物种拆分总 NOx 结果不能建立本数量，不假定强制排放。

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

### 过程：条件可拆交付保护 (`packing`)

各实际保护材料独立计量从 M 排除。交付拆卸整体件称量核对完整船配置；单独销售备件外部拖曳支持船运输工装排除。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅可拆非自黏非泡沫未增强未层压 PE-LD 保护膜，称实际领退平衡从 M 排除。

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

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

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
| `cp_mass` | acceptance | 验收完整船舶净质量 | controlled_acceptance_record | 型号；配置；序列号；验收净质量 M；验收重量报告原件编号日期；实际轻船重量检验方法；仪表校准；交付状态；安装工作液；逐项增加扣除质量；排除试验沉积物人员燃油淡水压载试验载荷；拆卸整体件；核验者；质量平衡 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 逐艘验收 | 该船实际制造验收时期 | 声明船厂验收门点 | 每台验收净质量 | 原始实际检验配置修正质量平衡核验记录 |
| `cp_stock_form` | stock_form | 船体坯料切割成形 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集材料证书图纸版本称量领退边角料实际成形切割操作工位仪表。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_hull_join` | hull_join | 船体分段连接结构完成 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留分段范围焊接规程检验填料气体领用实际仪表，外包连接核对一次。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_surface_finish` | surface_finish | 条件表面准备涂装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留层安全数据表基料固化剂比例实测领退涂装面积层范围水捕集残渣实际物质实测。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_machinery` | machinery | 柴油驱动与液压动力安装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留发动机模块序列号供应商包含实际独立台数安装质量对中液压船机管系加注平衡。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_dredging` | dredging | 绞刀桥架泥泵与定位集成 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留供应商总成组成实际绞刀泥泵桥架桩范围独立称量安装质量连接图液压设定装配定位验收记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_outfit` | outfit | 控制电气安全舾装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集控制电气图模块收货包含称安装件保留实际仪表校准安全功能试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_acceptance` | acceptance | 下水调试整船验收 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留船厂验收重量报告原件实际轻船重量检验校准配置加减项、试验加注燃料来源实测物质出口。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_packing` | packing | 条件可拆交付保护 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 称实际保护领退核对整体交付件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐船体配置工单采集可归属净坯料领用独立模块公用工程建造试航消耗废物实际排放，扣记录退回库存变化并合理共用分配，再除验收艘数得 q_item，除同一受控实测净 M。发动机交换保留 Item(s)/kg，独立实测发动机质量用于完整性；质量交换 kg/kg，电力 MJ/kg。兼容序列号船舶实测质量变化时可归属总量除验收净质量之和，保留全部序列号记录。分开不兼容泥泵驱动船体舾装涂装试航范围。未知为缺口，不作零，不推断吨位容量额定功率寿命换算。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | 当前船舶验收质量原件须实施 mass_record_provenance。保留实际物理轻船重量检验、可观测方法输入校准及签署逐项交付净配置核对；核对独立称量安装模块工作液。目录无解释排水量吨位记录不足。方法缺失修正不确定配置变化阻止完整量值数据集；以新测量核对解决，不假定重量。 | 原件与修正台账；nma-lightship 仅方法案例 |
| `quality_bom` | complete vessel | 核对图纸物料表安装船体机械泥泵驱动管系电气控制安全导航实际工作液质量供应商范围拆卸交付件。完成前增列全部实际缺失部件，接收完整模块计一次。 | 图纸原件称量供应商完整性 |
| `quality_balances` | flows and trials | 保留校准物料领退复用实际配方密度调试消耗保留燃料实测物质介质出口。QA 限值来自适用实际记录核验可比证据，不编造收率强度范围普遍调试耗用。 | 库存仪表安全数据表试验移交 |
| `quality_dredging` | dredging; acceptance | 保留实际船体模块图供应商包含绞刀桥架泥泵耐磨材设计定位安排安装管液压回路实测质量。保留水上试验条件：临时保留舱物试验介质组成粒度循环补给回收废物移交绞刀定位动作实际泵压力流量负荷时长校准仪表。不以目录土密度泵性能曲线标称功率默认试验时长换算交换量。拆装交付核对全部整体模块至同验收净 M，排除外部管线。缺失实际试验质量平衡为科学数据缺口。 | 实际图纸称量与校准试验报告 |
| `quality_coverage` | dataset | 披露实际地域时期配置条件缺席外包身份量值不确定性经验范围缺口上游缺失适用验收制度。历史制造者主管案例不证明目前证书现行法律完整性本船实际 M。PCR 检查核验声明关系，不验证真实船记录科学批准。 | 覆盖证据限制登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求配置完整钢质船体柴油非自行式绞吸疏浚船及实施 mass_record_provenance 的受控记录正实际净 M。排除运营试验沉积物人员燃油淡水压载临时载荷，保留声明安装工作液。拒绝吨位载重量目录满载排水量满燃油质量替代。底层方法平衡缺失须审查并阻止量值数据完成。 |  |
| `validate_identity` | all rows | 核对逐原子物理化学交换公开参考属性单位组路线状态供应商范围。发动机台数不是质量，发电机组发动机只计一次，CuO 不是 Cu2O 涂料，供水不是废液资源取用。无依据身份留空，完成前增列实际物质部件。 |  |
| `validate_measurement` | all rows | 逐数量采集换算核验同配置实际时期场址验收艘数净 M。核对安装预加液体消耗试航燃料供应商组成无重复；核验校准密度单位换算共用分母。未知不得作零。 |  |
| `validate_species` | elementary rows | 仅采用已证实可归属建造试航物质实际环境介质。本 CO2/NO/NO2 身份为空气未指定即时排放，化石 CO2 须化石来源。未分物种总 NOx、N2O、氮亚硝酸盐生物源 CO2 水土壤长期排放不得替代。捕集滤尘保留废物。 |  |
| `validate_acceptance` | claimed flag/class acceptance | 声明时追溯实际船舶特定检验证书适用主管船级制度。泛指制造者认证不认证本非自行式绞吸疏浚船，不采用普遍数值标准试验载荷。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整钢质船体柴油非自行式绞吸疏浚船前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配船体泥泵驱动舾装涂装受控净质量范围试航边界门点场址时期制造供应链模型 |
| excluded_use | 运营疏浚开挖服务寿命比较等质量容量等效其他泥泵驱动材料无依据完整摇篮到大门声明 |
| required_metadata | 建造者型号；船体序列号图纸版本；钢船体模块完整性；非自行式柴油绞吸路线；实际绞刀头驱动桥架泥浆泵耐磨材船内管系；桩绞车固定桩或台车定位；控制电气安全范围保留工作液；实际装配试验准则净交付状态；当前物理轻船重量检验原始实测输入校准签署修正平衡的受控正 M kg；排除外部管线助推船工作船燃油淡水压载人员临时试验沉积物重物保护独立备件；实际场址时期供应商包含门点 |
| required_quality_disclosure | 身份量值质量原始依据缺口不确定性条件缺席完整物料表分配实际验收范围未链接上游 |
| update_trigger | 船体泥泵驱动舾装涂装供应商模块实际 M 证据修正试航状态边界制造验收制度场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `damen-csd350` | literature | [Damen CSD350](https://www.damen.com/vessels/dredging-and-dredging-equipment/cutter-suction-dredgers/csd350) | 产品描述选项段：可拆模块结构绞刀泥泵可选定位导航包。未注明日期出版者快照。不采用目录重量功率深度容量寿命制造配方。 |
| `ihc-beaver50-2023` | literature | [Royal IHC Beaver50 RevA110569933 July2023](https://www.royalihc.com/sites/default/files/documents/%E2%80%A2RIHC%20Dredging%20Productsheet%20Beaver%2050_110569933.pdf) | PDF1–2页：柴油绞吸结构非自行式型号泥泵驱动液压定位系统装配水上试验可拆交付可选辅助。仅历史型号案例，不采用目前证书排放合规配方标称桩重油耗泵输出因子。第2页曲线限制显示性能依赖物料场地条件。 |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E, Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF 印刷5–7页3.1–3.4节：船身份检验状态完工扣除重量水密度舱液吃水干舷。历史挪威方法案例，要求当前实际本船方法签署净配置修正。不采用历史舱液纵倾阈值全球法律要求。核验留存原件。 |
| `ghg-product-allocation-2011` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, 2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | 印刷63页 PDF65页表9.1–9.2：仅历史分配层级，要求实际因果驱动量证据，无通用船舶分配因子。核验留存原件。 |
