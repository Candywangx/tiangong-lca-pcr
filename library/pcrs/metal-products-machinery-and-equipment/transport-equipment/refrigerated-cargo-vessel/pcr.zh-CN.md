---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.refrigerated-cargo-vessel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢质船体柴油冷藏货船制造

## 1. 范围与适用性

本候选 PCR 覆盖新制完整钢质船体柴油冷藏货船，设固定保温冷藏货舱及实际 R717 无水氨制冷。机械柴油柴油电力、直接氨次级盐水系统为分别声明配置。边界窄于 CPC 49313。排除油轮捕鱼捕捞船上加工船客船仅冷藏集装箱制冷船、其他船体材料替代燃料混合动力、非氨制冷、仅船体改装维修及运输服务。每台验收成品设备指一艘完整船，与英文 accepted finished unit 计量含义一致。

采集实际接收到船厂交付制造连接涂装机械舾装固定冷藏货舱集成下水及可归属建造试验返工。声称完整摇篮到门前必须明示链接供应商生产。排除货物生产航次客户制冷能耗货运产出维护报废；不设寿命吨距离等效。船厂及独立设备制造商原件仅建立可能结构，不规定必需化学制造强度目前证书。科学审查待完成。[来源：kyokuyo-reefer；gea-reefer]

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.refrigerated-cargo-vessel |
| classification_refs | CPC 3.0 49313；较窄背景，无已接受映射 |
| covered_products | 完整钢质船体柴油固定货舱冷藏货船及实际 R717 制冷 |
| excluded_products | 油轮捕鱼加工客船仅集装箱船；其他船体推进制冷剂；中间件维修服务 |
| representative_product | 一艘验收序列号关联完整船及声明修正净交付配置 |
| production_route | 条件坯料成形船体连接条件表面处理机械保温货舱制冷货物安全舾装下水验收 |
| market_state | 新制完整验收船厂交付船；含安装制冷剂充注工作液，从 M 排除运营消耗品 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明完整配置冷藏货船 |
| How much | 1 kg 验收船舶净输出，按艘交换记录除以实际 M |
| How well | 在记录实际试验条件下符合船舶特定结构机械安全制冷密封热空气分配放行准则。等质量不等于货容量温度性能货运服务。不规定目录温度货舱容量营销节能效益。 |
| How long or cycle | 一次制造建造验收周期，不假定运营寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 冷藏船（船舶），油轮除外 `331ba65e-48c0-492e-b791-96b2a30831e8` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 建造者型号；船体序列号图纸版本；固定冷藏货舱布置钢牌号分段完整性；声明机械柴油或柴油电力推进；实际 R717 氨制冷直接或次级盐水管系制冷剂纯度充注保留工作液；绝热化学发泡剂内衬隔汽层舱盖空气分配实际装卸装备；实际试验准则热设计；受控正净 M，单位 kg，当前实际轻船重量检验原件签署净配置修正平衡；排除货物人员消耗燃料淡水压载临时试验载荷货物托盘冷藏集装箱；实际船厂场址时期路线供应商边界交付门 |

M 是本完整验收配置受控实际净质量，含安装船体机械冷藏货舱围护舾装实际保留制冷剂盐水油及整体交付件。排除货物人员消耗燃料淡水压载临时试验重物散装托盘集装箱备件防护外部支持船。不将检验排水量目录吨位等同净 M；保留当前实际物理轻船重量检验原件及下述精确净交付范围逐项实测修正。不假定整船台秤。

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
| product_classification_scope | 钢质船体柴油冷藏货船，固定保温货舱及 R717 制冷 |
| recursive_input_rule | 不递归生成完整冷藏货船为自身投入，外购成品分段模块跳过所含操作 |
| upstream_dataset_requirement | 匹配实际牌号配方模块完整性推进时期地域属性，披露供应商生产缺失 |
| disclosure | 建造者型号；船体序列号图纸版本；固定冷藏货舱布置钢牌号分段完整性；声明机械柴油或柴油电力推进；实际 R717 氨制冷直接或次级盐水管系制冷剂纯度充注保留工作液；绝热化学发泡剂内衬隔汽层舱盖空气分配实际装卸装备；实际试验准则热设计；受控正净 M，单位 kg，当前实际轻船重量检验原件签署净配置修正平衡；排除货物人员消耗燃料淡水压载临时试验载荷货物托盘冷藏集装箱；实际船厂场址时期路线供应商边界交付门 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | 纳入实际制造可归属返工下水建造调试至声明验收门。分配独立实测生产支持试航资源，排除制冷货运服务研发运营维护。纳入时实际拖曳船坞起重服务燃料须独立声明交换，含服务边界时长供应商范围。不推断寿命航次负担。 |  |
| `boundary_modules` | purchased components | 成品船体分段发电机组推进器装修客舱安全模块连组成预加液体计一次。所含供入替代组成行。实际厂内制造须实测部件清单。数据集放行前补齐全部实际物料表条件化学已证实物质，候选行不是穷尽船舶物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | 船体坯料切割成形 | conditional | 未成形船体坯料在报告船厂边界内加工。 | foreground | 一艘验收配置冷藏货船，使用 M 归一化 |
| `hull_join` | 船体分段连接结构完成 | required | 每艘新制完整钢质船体冷藏货船。 | foreground | 一艘验收配置冷藏货船，使用 M 归一化 |
| `surface_finish` | 条件表面准备涂装 | conditional | 实际表面准备涂装在报告前景内实施。 | foreground | 一艘验收配置冷藏货船，使用 M 归一化 |
| `machinery` | 推进机械安装 | required | 每艘声明柴油动力冷藏货船配置。 | foreground | 一艘验收配置冷藏货船，使用 M 归一化 |
| `refrigeration` | 冷藏货舱保温与制冷集成 | required | 每艘声明固定冷藏货舱船舶；本 PCR 将制冷限定于实际无水氨系统。 | foreground | 一艘验收配置冷藏货船，使用 M 归一化 |
| `outfit` | 电气货物装卸与安全舾装 | required | 每艘完整配置冷藏货船。 | foreground | 一艘验收配置冷藏货船，使用 M 归一化 |
| `acceptance` | 下水调试整船验收 | required | 每艘声明船厂交付门点放行完整船舶。 | foreground | 一艘验收配置冷藏货船，使用 M 归一化 |
| `packing` | 条件可拆交付保护 | conditional | 冷藏货船实际供入可拆交付保护。 | foreground | 一艘验收配置冷藏货船，使用 M 归一化 |

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

### 过程：推进机械安装 (`machinery`)

安装实际柴油推进路线：机械驱动采用独立供入发动机减速轴螺旋桨范围；柴油电力采用发电机组配电变流器推进电机推进器。两者为替代。外购完整发电机组推进器替代所含发动机电机齿轮组成；船机台数独立于称量安装质量。供应商未含时转向冷却尾气燃油每项实际泵管辅助模块独立增列。厂内部件制造须自有实测模块。

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
- 来源：`kyokuyo-reefer`

###### 成品船用推进减速齿轮箱 (`reduction`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品船用推进减速齿轮箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`kyokuyo-reefer`

###### 成品钢制船用螺旋桨轴 (`shaft`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品钢制船用螺旋桨轴
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`kyokuyo-reefer`

###### 成品镍铝青铜船用螺旋桨 (`propeller`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品镍铝青铜船用螺旋桨
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`kyokuyo-reefer`

###### 成品船用柴油发电机组 (`diesel_genset`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品船用柴油发电机组
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`kyokuyo-reefer`

###### 成品船用电力推进电机 (`propulsion_motor`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品船用电力推进电机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`kyokuyo-reefer`

###### 成品船用离心舱底水泵 (`bilge_pump`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品船用离心舱底水泵
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`kyokuyo-reefer`

###### 成品碳钢船用舱底管 (`bilge_pipe`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品碳钢船用舱底管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machinery`
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

### 过程：冷藏货舱保温与制冷集成 (`refrigeration`)

按签署热设计安装实际保温货舱围护、隔汽层、内衬、封闭件、压缩机、冷凝器、蒸发器、制冷剂管系及空气分配。实际直接氨或次级盐水配置分别记录。GEA 记载格栅地板与不依赖格栅的冷却器替代，两者都不是通用必需。外购完整制冷撬替代所含组成及预充液。实际 R717 纯度、管系压力状态、加注回收和保留液来自供应商及前景记录，不从 GEA 营销推断。排除其他制冷剂、船上鱼类加工及仅冷藏集装箱冷却船。

#### 输入

##### 产品流

###### 成品硬质聚氨酯闭孔冷藏货舱保温板 (`pu_board`)

仅实际供应商确认板材，含组成发泡剂防火规格实测净领用安装质量；不从船厂来源推断绝热化学。采用场内发泡时另列组分化学。

- 选定流：成品硬质聚氨酯闭孔冷藏货舱保温板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 成品不锈钢冷藏货舱内衬板 (`liner`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品不锈钢冷藏货舱内衬板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 冷藏货舱围护用铝箔隔汽层 (`vapour_barrier`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：冷藏货舱围护用铝箔隔汽层
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 完整钢制保温冷藏货舱检修门 (`door`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：完整钢制保温冷藏货舱检修门
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 完整船用 R717 螺杆压缩机总成 (`compressor`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：完整船用 R717 螺杆压缩机总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 完整海水冷却 R717 壳管式冷凝器 (`condenser`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：完整海水冷却 R717 壳管式冷凝器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 完整 R717 冷藏货舱空气冷却器总成 (`cooler`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：完整 R717 冷藏货舱空气冷却器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 成品焊接碳钢 R717 制冷管 (`refrigerant_pipe`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品焊接碳钢 R717 制冷管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 氨，无水，液体 (`ammonia_charge`)

仅实际供入无水液态 NH3，符合声明 R717 管系及供应商纯度状态。称气瓶领用扣退回回收量，记录安装充注及外购撬所含预加液。氨不是氨水燃料排放；不假定按容积充注量。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 含缓蚀剂氯化钙水性制冷盐水预混液 (`brine`)

仅实际次级盐水配置；记录供货浓度缓蚀剂温度密度及保留首次加注质量。直接氨系统不必用盐水；替代配方须独立精确行。

- 选定流：含缓蚀剂氯化钙水性制冷盐水预混液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 交流电 (`electricity_refrigeration`)

仅实际匹配公开身份的中国用户侧电网平均1–35kV交流采购供电；计量可归属工位电力共用驱动量，保留实际进线场址时期。其他地域电压自发电合同组合须独立相符行，不用本身份。内部配电不是二次采购投入，铭牌 kW 不是能量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

#### 输出

##### 废物流

###### 分流硬质聚氨酯保温板边料废物 (`pu_offcut`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：分流硬质聚氨酯保温板边料废物
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

###### 转交处理的回收无水氨制冷剂 (`recovered_ammonia`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：转交处理的回收无水氨制冷剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

#### 输出

##### 基本流

###### 氨 (`ammonia_air`)

仅工厂加注检漏调试期间独立实测可归属 NH3 即时排至室外空气未指定子介质。充注缺额本身不证明大气排放；区分保留充注退回回收废物。不规定必然泄漏默认比例。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_refrigeration。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigeration`
- 来源：`gea-reefer`

### 过程：电气货物装卸与安全舾装 (`outfit`)

安装声明电气、导航、船员生活、舱底、消防及救生设备。货物吊杆起重机与舱盖仅按实际已装配置总成记录，不规定通用装卸系统。各完整供入总成所含组成只计一次。数据集完成前独立识别传感器通风管系绞车及其他实际部件。货物托盘、货物、冷藏集装箱及船舶运营不属于本固定冷藏货舱完整船制造。

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

###### 成品船用导航雷达总成 (`radar`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：成品船用导航雷达总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`kyokuyo-reefer`

###### 包装充气式船用救生筏 (`liferaft`)

仅精确声明实际交换；采集称量领退出口质量供应商完整性精确组成状态接收者。

- 选定流：包装充气式船用救生筏
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`kyokuyo-reefer`

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
- 来源：`kyokuyo-reefer`

### 过程：下水调试整船验收 (`acceptance`)

按配置特定准则采集实际下水港内海上调试试航返工放行。不假定普遍时长路线距离测试载荷。分别记录试验燃料领退消耗剩余交付舱液；消耗性燃料淡水压载乘客船员货物排除制造净 M。永久安装工作液整体交付救生设备属于声明配置质量核对。实际船用推进燃料物质来源排放为独立实测行，不为寿命运营。声明船旗船级验收须可追溯适用制度。

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

###### 冷藏船（船舶），油轮除外 (`finished_machine`)

声明船厂门点处验收配置完整钢质船体柴油冷藏货船一千克，核对安装装备工作液，从净 M 排除消耗性货物燃油淡水压载。泛指公开船舶身份须所有冷藏货船限定，不含运输服务上游完整声明。

- 选定流：冷藏船（船舶），油轮除外 `331ba65e-48c0-492e-b791-96b2a30831e8`
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
| `cp_mass` | acceptance | 验收完整船舶净质量 | controlled_acceptance_record | 型号；配置；序列号；验收净质量 M；验收重量报告原件编号日期；实际轻船重量检验方法；仪表校准；交付状态；安装工作液；逐项增加扣除质量；排除货物人员燃油淡水压载试验载荷；拆卸整体件；核验者；质量平衡 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 逐艘验收 | 该船实际制造验收时期 | 声明船厂验收门点 | 每台验收净质量 | 原始实际检验配置修正质量平衡核验记录 |
| `cp_stock_form` | stock_form | 船体坯料切割成形 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集材料证书图纸版本称量领退边角料实际成形切割操作工位仪表。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_hull_join` | hull_join | 船体分段连接结构完成 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留分段范围焊接规程检验填料气体领用实际仪表，外包连接核对一次。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_surface_finish` | surface_finish | 条件表面准备涂装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留层安全数据表基料固化剂比例实测领退涂装面积层范围水捕集残渣实际物质实测。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_machinery` | machinery | 推进机械安装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 追溯机械物料表序列号船用额定供应商包含、实际发动机台数独立安装质量对中连接首次加注记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_refrigeration` | refrigeration | 冷藏货舱保温与制冷集成 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留货舱围护图纸面积、各材料配方称量安装废物、机械序列号撬内包含、制冷剂加注回收保留质量、冷媒组成、货舱传感器及实际试验准则结果。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_outfit` | outfit | 电气货物装卸与安全舾装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留接线货物装卸安全图纸、声明时船用供应商证书、实测模块收货、供应商边界及安装试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_acceptance` | acceptance | 下水调试整船验收 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留船厂验收重量报告原件实际轻船重量检验校准配置加减项、试验加注燃料来源实测物质出口。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_packing` | packing | 条件可拆交付保护 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 称实际保护领退核对整体交付件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐船体配置工单采集可归属净坯料领用独立模块公用工程建造试航消耗废物实际排放，扣记录退回库存变化并合理共用分配，再除验收艘数得 q_item，除同一受控实测净 M。发动机交换保留 Item(s)/kg，独立实测发动机质量用于完整性；质量交换 kg/kg，电力 MJ/kg。兼容序列号船舶实测质量变化时可归属总量除验收净质量之和，保留全部序列号记录。分开不兼容推进船体舾装涂装试航范围。未知为缺口，不作零，不推断吨位容量额定功率寿命换算。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | 当前船舶验收质量原件须实施 mass_record_provenance。保留实际物理轻船重量检验、可观测方法输入校准及签署逐项交付净配置核对；核对独立称量安装模块工作液。目录无解释排水量吨位记录不足。方法缺失修正不确定配置变化阻止完整量值数据集；以新测量核对解决，不假定重量。 | 原件与修正台账；nma-lightship 仅方法案例 |
| `quality_bom` | complete vessel | 核对图纸物料表安装船体机械推进管系电气船员安全导航实际工作液质量供应商范围拆卸交付件。完成前增列全部实际缺失部件，接收完整模块计一次。 | 图纸原件称量供应商完整性 |
| `quality_balances` | flows and trials | 保留校准物料领退复用实际配方密度调试消耗保留燃料实测物质介质出口。QA 限值来自适用实际记录核验可比证据，不编造收率强度范围普遍调试耗用。 | 库存仪表安全数据表试验移交 |
| `quality_refrigeration` | refrigeration; acceptance | 要求实际管系货舱设计、压缩机冷凝器冷却器撬所含、隔汽层绝热组成、充注纯度状态及实测安装质量。保留校准泄漏密封及热调试协议：环境货舱条件、空舱或临时试验载荷、温度气流时长仪表起终、制冷剂领退回收废物保留及独立实测物质出口。临时试验货物及其制冷能量仅为可归属建造试验投入，不是运营货运。不采用通用货舱温度泄漏比例制冷剂充注强度。平衡缺失或试验条件未记录保留科学数据缺口。 | 实际图纸安全数据表校准调试报告 |
| `quality_coverage` | dataset | 披露实际地域时期配置条件缺席外包身份量值不确定性经验范围缺口上游缺失适用验收制度。历史制造者主管案例不证明目前证书现行法律完整性本船实际 M。PCR 检查核验声明关系，不验证真实船记录科学批准。 | 覆盖证据限制登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求配置完整钢质船体柴油冷藏货船及实施 mass_record_provenance 的受控记录正实际净 M。排除运营货物人员燃油淡水压载临时载荷，保留声明安装工作液。拒绝吨位载重量目录满载排水量满燃油质量替代。底层方法平衡缺失须审查并阻止量值数据完成。 |  |
| `validate_identity` | all rows | 核对逐原子物理化学交换公开参考属性单位组路线状态供应商范围。发动机台数不是质量，发电机组发动机只计一次，CuO 不是 Cu2O 涂料，供水不是废液资源取用。无依据身份留空，完成前增列实际物质部件。 |  |
| `validate_measurement` | all rows | 逐数量采集换算核验同配置实际时期场址验收艘数净 M。核对安装预加液体消耗试航燃料供应商组成无重复；核验校准密度单位换算共用分母。未知不得作零。 |  |
| `validate_species` | elementary rows | 仅采用已证实可归属建造试航物质实际环境介质。本 CO2/NO/NO2 身份为空气未指定即时排放，化石 CO2 须化石来源。未分物种总 NOx、N2O、氮亚硝酸盐生物源 CO2 水土壤长期排放不得替代。捕集滤尘保留废物。 |  |
| `validate_acceptance` | claimed flag/class acceptance | 声明时追溯实际船舶特定检验证书适用主管船级制度。泛指制造者认证不认证本冷藏货船，不采用普遍数值标准试验载荷。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整钢质船体柴油冷藏货船前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配船体推进舾装涂装受控净质量范围试航边界门点场址时期制造供应链模型 |
| excluded_use | 制冷货运服务寿命比较等质量容量等效其他推进材料无依据完整摇篮到大门声明 |
| required_metadata | 建造者型号；船体序列号图纸版本；固定冷藏货舱布置钢牌号分段完整性；声明机械柴油或柴油电力推进；实际 R717 氨制冷直接或次级盐水管系制冷剂纯度充注保留工作液；绝热化学发泡剂内衬隔汽层舱盖空气分配实际装卸装备；实际试验准则热设计；受控正净 M，单位 kg，当前实际轻船重量检验原件签署净配置修正平衡；排除货物人员消耗燃料淡水压载临时试验载荷货物托盘冷藏集装箱；实际船厂场址时期路线供应商边界交付门 |
| required_quality_disclosure | 身份量值质量原始依据缺口不确定性条件缺席完整物料表分配实际验收范围未链接上游 |
| update_trigger | 船体推进舾装涂装供应商模块实际 M 证据修正试航状态边界制造验收制度场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `kyokuyo-reefer` | literature | [Kyokuyo Shipyard: Reefer Ship](https://www.kyokuyoshipyard.com/en/products/reefer) | Fresh Food Transporter 与 Customization At Will 段：船厂产品结构热保护空气设计配置依赖。未注明日期的出版者留存快照，2026-10-05 检索。不采用容量温度船重配方认证制造强度。 |
| `gea-reefer` | literature | [GEA: Reefer ships](https://www.gea.com/en/heating-refrigeration/marine/reefer-ships/) | Cost Saving Solution 与 Focus on Sustainability 段：常规格栅地板替代冷却器布局、氨 CO2 制冷剂替代。本较窄 PCR 仅纳入氨结构，实际纯度机械管系充注须前景记录。不规定必需地板通用制冷剂节能或排放泄漏因子。未注明日期留存快照，2026-10-05 检索。 |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E, Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF 印刷5–7页3.1–3.4节：船身份检验状态完工扣除重量水密度舱液吃水干舷。历史挪威方法案例，要求当前实际本船方法签署净配置修正。不采用历史舱液纵倾阈值全球法律要求。2026-10-05 读取共享原件核验。 |
| `ghg-product-allocation-2011` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, 2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | 印刷63页 PDF65页表9.1–9.2：仅历史分配层级，要求实际因果驱动量证据，无通用船舶分配因子。2026-10-05 读取核验共享原件。 |
