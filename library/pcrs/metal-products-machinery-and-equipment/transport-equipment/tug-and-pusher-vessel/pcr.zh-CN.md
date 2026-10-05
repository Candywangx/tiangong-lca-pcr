---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.tug-and-pusher-vessel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢质船体柴油拖船与推船制造

## 1. 范围与适用性

本候选 PCR 覆盖新制完整钢质船体机械柴油推进港口/沿海拖船及内河推船，轴系与机械驱动全回转推进器配置分别声明。拖曳、推顶及联合甲板设计为独立配置。前景始于指定坯料/分段与外购模块，止于配置特定船厂验收/交付，纳入可归属建造试验。有依据时链接供应商上游；仅接收到交付记录不能代表完整摇篮到大门。[来源：`damen-asd-tug`、`damen-seagoing`]

排除非钢船体、柴油电力/牵引电池/混合或替代燃料推进、海上起抛锚专业船舶、客货运输船及无动力驳船、仅船体中间件、维修改装转售及运营拖曳/推顶/维护/报废。附属选装装备仅实际安装于声明拖船/推船时纳入，并记录完整供应范围。本范围窄于 CPC 49316。拖曳/推顶基座、甲板装备及性能验收与客运渡船、液货船制造和钢材料 PCR 有实质区别；旧分类叶保持只读。科学审查待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.tug-and-pusher-vessel |
| classification_refs | CPC 3.0 49316；较窄钢质机械柴油拖船/推船制造，仅背景 |
| covered_products | 新制完整配置钢质机械柴油港口/沿海拖船及内河推船 |
| excluded_products | 排除非钢船体、柴油电力/牵引电池/混合或替代燃料推进、海上起抛锚专业船舶、客货运输船及无动力驳船、仅船体中间件、维修改装转售及运营拖曳/推顶/维护/报废。附属选装装备仅实际安装于声明拖船/推船时纳入，并记录完整供应范围。本范围窄于 CPC 49316。拖曳/推顶基座、甲板装备及性能验收与客运渡船、液货船制造和钢材料 PCR 有实质区别；旧分类叶保持只读。科学审查待完成。 |
| representative_product | 一艘序列号关联验收完整拖船或推船，具有受控实际净 M |
| production_route | 坯料/分段结构制造、条件涂装、机械推进、拖曳/推顶及舾装集成、建造试验及验收 |
| market_state | 声明船厂门点验收完整船舶；净 M 不含运营载荷或消耗品 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配置完整钢质船体柴油拖船/推船 |
| How much | 1 kg 验收完整船舶净质量；实际按艘记录除以正受控 M |
| How well | 船舶特定结构安装调试放行准则，声明时追溯适用船旗船级验收。等质量不等于拖曳/推顶性能 |
| How long or cycle | 一次制造建造验收周期，不假定拖船/推船寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 拖船及顶推船 `f323a122-a4de-4c9d-920f-4c09196c70ae` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 建造者/型号、船体序列号/图纸版本、钢牌号/厚度及供应分段完整性；机械柴油轴系或全回转推进及供应商包含；实际拖曳/推顶或联合配置、基座、绞车/拖钩/拖桩、拖缆材料、护舷几何/组成、推顶支架及联接；辅助管系/电气/导航/安全、涂料配方及实际声明验收制度；当前受控验收记录正净 M，单位 kg，附实际轻船/重量检验原件、可追溯方法/校准/可观测输入及签署逐项配置核对；安装工作液及整体交付拆卸件；排除人员、货物、消耗性燃油/淡水、压载、可拆保护及临时试验载荷；实际建造试验、场址/时期/交付门点及上游链接 |

在元数据或等效参考备注声明所有限定。泛指公开船舶产品身份须限至实际拖船/推船配置。净 M 包含完整安装船体机械舾装整体交付装备声明安装工作液。交付拆卸整体件按实测质量核对。排除人员货物消耗性燃油淡水压载可拆保护临时试航载荷工装。总净吨位载重量目录质量满载排水量满燃油状态不能替代 M。实际检验状态测量只能经下述可追溯净配置修正记录用于 M。

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
| product_classification_scope | 钢质船体柴油拖船/推船，声明推进拖曳/推顶变型 |
| recursive_input_rule | 不递归生成完整拖船/推船为自身投入，外购成品分段模块跳过所含操作 |
| upstream_dataset_requirement | 匹配实际牌号配方模块完整性推进时期地域属性，披露供应商生产缺失 |
| disclosure | 建造者/型号、船体序列号/图纸版本、钢牌号/厚度及供应分段完整性；机械柴油轴系或全回转推进及供应商包含；实际拖曳/推顶或联合配置、基座、绞车/拖钩/拖桩、拖缆材料、护舷几何/组成、推顶支架及联接；辅助管系/电气/导航/安全、涂料配方及实际声明验收制度；当前受控验收记录正净 M，单位 kg，附实际轻船/重量检验原件、可追溯方法/校准/可观测输入及签署逐项配置核对；安装工作液及整体交付拆卸件；排除人员、货物、消耗性燃油/淡水、压载、可拆保护及临时试验载荷；实际建造试验、场址/时期/交付门点及上游链接 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | 纳入实际制造可归属返工下水建造调试至声明验收门。分配独立实测生产支持试航资源，排除拖曳/推顶服务研发运营维护。纳入时实际拖曳船坞起重服务燃料须独立声明交换，含服务边界时长供应商范围。不推断寿命航次负担。 |  |
| `boundary_modules` | purchased components | 成品船体分段发电机组推进器装修客舱安全模块连组成预加液体计一次。所含供入替代组成行。实际厂内制造须实测部件清单。数据集放行前补齐全部实际物料表条件化学已证实物质，候选行不是穷尽船舶物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | 船体及拖曳基座坯料准备 | conditional | 坯料切割或成形在报告船厂实施。 | foreground | 一艘验收配置拖船/推船，使用 M 归一化 |
| `hull_join` | 船体及承载基座装配 | required | 每艘完整船舶。 | foreground | 一艘验收配置拖船/推船，使用 M 归一化 |
| `surface_finish` | 船体表面准备与涂装 | conditional | 表面处理在声明前景内。 | foreground | 一艘验收配置拖船/推船，使用 M 归一化 |
| `machinery` | 机械柴油推进安装 | required | 声明轴系或机械驱动全回转推进器配置。 | foreground | 一艘验收配置拖船/推船，使用 M 归一化 |
| `tow_push_gear` | 拖曳与推顶装备集成 | required | 实际拖曳、推顶或联合验收设计。 | foreground | 一艘验收配置拖船/推船，使用 M 归一化 |
| `outfit` | 管系、电气、导航及安全舾装 | required | 每个验收完整配置。 | foreground | 一艘验收配置拖船/推船，使用 M 归一化 |
| `acceptance` | 下水、建造试验与船舶验收 | required | 配置特定交付验收之前。 | foreground | 一艘验收配置拖船/推船，使用 M 归一化 |
| `packing` | 交付保护及整体拆卸件 | conditional | 实际可拆保护或整体交付拆卸件。 | foreground | 一艘验收配置拖船/推船，使用 M 归一化 |

实际坯料成形供入船体连接条件表面处理机械舾装下水调试验收，再条件交付保护。阶段可重叠，资源一次归属实际操作供应商范围。即使必需阶段，每行也须精确组成状态配置。遗漏实际部件燃料化学及已证实废物排放各自独立增列。不声称普遍焊接涂装配方或强制排放。

### 过程：船体及拖曳基座坯料准备 (`stock_form`)

追溯实际船体、拖曳/推顶基座及甲板图纸、钢牌号和准备。接收完整分段替代组成坯料及供应商已完成工作。实际切割气体、切削油及部件制造分别采集，不规定普遍板材牌号或配方。

#### 输入

##### 产品流

###### 热轧普通强度认证造船钢板 (`normal_hull_plate`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：热轧普通强度认证造船钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`damen-seagoing`

###### 热轧低合金高强厚造船钢板 (`hsla_plate`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：热轧低合金高强厚造船钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`damen-seagoing`

###### 热轧钢制船体加强筋型材 (`hull_profile`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：热轧钢制船体加强筋型材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`damen-seagoing`

###### 声明船厂进线供入交流电力 (`electricity_stock_form`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`damen-seagoing`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

内部复用后输出分类未处理钢切割边角料，称实际量保留接收者，不含后续处理。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`damen-seagoing`

### 过程：船体及承载基座装配 (`hull_join`)

连接实际船体分段、甲板、上层建筑及拖曳/推顶载荷路径。记录焊接规程、尺寸检验、密性检查及返工。供应商已完成结构计一次。保护气及焊丝行按实际条件路线纳入。

#### 输入

##### 产品流

###### 实心低合金钢气体保护焊丝 (`solid_wire`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：实心低合金钢气体保护焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`damen-seagoing`

###### 二氧化碳 (`co2_shield`)

仅匹配本中国厂内路线身份实际使用供入纯 CO2 保护气。采集实测消耗质量，不替代氩预混液态或推定化石排放。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`damen-seagoing`

###### 氩二氧化碳预混焊接保护气 (`argon_mix`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：氩二氧化碳预混焊接保护气
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`damen-seagoing`

###### 声明船厂进线供入交流电力 (`electricity_hull_join`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`damen-seagoing`

#### 输出

##### 废物流

###### 捕集的富氧化铁船体焊接滤尘 (`weld_dust`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：捕集的富氧化铁船体焊接滤尘
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`damen-seagoing`

### 过程：船体表面准备与涂装 (`surface_finish`)

分别记录实际表面准备及涂层，包括基料和固化剂。供应商涂装替代重复工作。列出的环氧及氧化亚铜涂料为条件案例；实际稀释剂、清洗剂、不同配方及实测出口须分别增列。

#### 输入

##### 产品流

###### 工艺用水 (`clean_water`)

实际清洗供入处理工业工艺水，排除内部循环环境资源取用。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`damen-asd-tug`

###### 球形铸钢船体抛丸磨料 (`abrasive`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：球形铸钢船体抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`damen-asd-tug`

###### 配方环氧船用涂料基料组分 (`epoxy_base`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：配方环氧船用涂料基料组分
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`damen-asd-tug`

###### 聚胺船用环氧涂料固化剂配方 (`epoxy_hardener`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：聚胺船用环氧涂料固化剂配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`damen-asd-tug`

###### 氧化亚铜自抛光船用防污涂料配方 (`cu2o_paint`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：氧化亚铜自抛光船用防污涂料配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`damen-asd-tug`

###### 声明船厂进线供入交流电力 (`electricity_surface_finish`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`damen-asd-tug`

#### 输出

##### 废物流

###### 含去除船体涂层残渣的废钢抛丸磨料 (`spent_abrasive`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：含去除船体涂层残渣的废钢抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`damen-asd-tug`

###### 转交处理的钢船体清洗水性废液 (`clean_effluent`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：转交处理的钢船体清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`damen-asd-tug`

### 过程：机械柴油推进安装 (`machinery`)

安装独立柴油机及实际传动系统。外购完整全回转推进包替代所含齿轮箱、轴及螺旋桨行。完整发电机组替代所含发动机。保留独立发动机 Item(s) 与独立实测安装质量。实际冷却、操舵、排气及燃油总成在供应商未包含时增列。不覆盖柴油电力或牵引电池推进。

#### 输入

##### 产品流

###### 柴油发动机 (`marine_engine`)

仅公开非机动车非航空范围独立供入装配压燃船用活塞发动机。采集实际 Item(s) 台数及独立实测安装质量核对船 M，台数不是质量。外购完整发电机组推进包所含时省略本投入。
公开身份保留参考流属性 `01846770-4cfe-4a25-8ad9-919d8d378345`、单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` 及交换单位 Item(s)。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：Number of items / Item(s)
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

###### 成品船用推进减速齿轮箱 (`reduction`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品船用推进减速齿轮箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

###### 成品钢制船用螺旋桨轴 (`shaft`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品钢制船用螺旋桨轴
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

###### 成品镍铝青铜船用螺旋桨 (`propeller`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品镍铝青铜船用螺旋桨
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

###### 成品船用柴油发电机组 (`diesel_genset`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品船用柴油发电机组
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

###### 成品船用离心舱底水泵 (`bilge_pump`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品船用离心舱底水泵
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

###### 成品碳钢船用舱底管 (`bilge_pipe`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品碳钢船用舱底管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

###### 成品机械驱动船用全回转推进器总成 (`azimuth`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品机械驱动船用全回转推进器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

###### 声明船厂进线供入交流电力 (`electricity_machinery`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-asd-tug`

### 过程：拖曳与推顶装备集成 (`tow_push_gear`)

分别记录实际绞车或拖钩/拖桩配置、拖缆材料、承载基座、护舷几何/材料、推顶支架及联接设备。它们为配置路线，不是强制组合清单。外购完整装备所含液压零件与预加液只计一次。厂内制造推顶结构采用坯料及实际制造，不能再重复外购总成。制造商选装甲板装备不是强制。

#### 输入

##### 产品流

###### 成品液压驱动船用拖曳绞车 (`towing_winch`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品液压驱动船用拖曳绞车
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_tow_push_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tow_push_gear`
- 来源：`damen-asd-tug`

###### 成品锻钢船用快速释放拖钩 (`towing_hook`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品锻钢船用快速释放拖钩
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_tow_push_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tow_push_gear`
- 来源：`damen-asd-tug`

###### 成品聚酯纤维船用拖缆 (`towing_rope`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品聚酯纤维船用拖缆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_tow_push_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tow_push_gear`
- 来源：`damen-asd-tug`

###### 成品硫化橡胶圆柱形拖船护舷 (`rubber_fender`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品硫化橡胶圆柱形拖船护舷
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_tow_push_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tow_push_gear`
- 来源：`damen-asd-tug`

###### 成品加工钢制船用推顶支架总成 (`push_knee`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品加工钢制船用推顶支架总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_tow_push_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tow_push_gear`
- 来源：`damen-asd-tug`

###### 成品钢制推船驳船联接绞车总成 (`coupling`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品钢制推船驳船联接绞车总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_tow_push_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tow_push_gear`
- 来源：`damen-asd-tug`

###### 供船用装备首次加注的矿物基础液压油配方 (`hydraulic_oil`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：供船用装备首次加注的矿物基础液压油配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_tow_push_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tow_push_gear`
- 来源：`damen-asd-tug`

###### 声明船厂进线供入交流电力 (`electricity_tow_push_gear`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_tow_push_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tow_push_gear`
- 来源：`damen-asd-tug`

### 过程：管系、电气、导航及安全舾装 (`outfit`)

安装实际独立舱底管/泵、电缆、导航、生活及安全部件。消防或吊机仅实际安装时纳入，具有精确供应范围及独立实际清单。完整装备替代所含组成与液体。安全或性能声明须本船记录。

#### 输入

##### 产品流

###### 绝缘铜船用电缆 (`cable`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：绝缘铜船用电缆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-asd-tug`

###### 已充液铅酸船用起动电池 (`starter_battery`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：已充液铅酸船用起动电池
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-asd-tug`

###### 夹层安全玻璃船用窗片 (`window`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：夹层安全玻璃船用窗片
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-asd-tug`

###### 成品船用导航雷达总成 (`radar`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品船用导航雷达总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-asd-tug`

###### 包装充气式船用救生筏 (`liferaft`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：包装充气式船用救生筏
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-asd-tug`

###### 声明船厂进线供入交流电力 (`electricity_outfit`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-asd-tug`

### 过程：下水、建造试验与船舶验收 (`acceptance`)

采集实际下水、推进、拖曳/推顶装备及建造验收试验。系柱拉力、制动/载荷试验力及联接性能为独立观测验收准则，不能作净质量 M 或清单换算因子。记录实际消耗与保留燃料及工作液；物质仅有实测依据时纳入。边界内外部试验支持服务须独立声明。排除运营拖曳/推顶作业及船舶寿命。

#### 输入

##### 产品流

###### 润滑油 (`mineral_oil`)

仅实际匹配独立供入首次加注配方石油馏分润滑油。记录净领用保留安装量核对 M；供应商所含时不二次加注，描述热值不是制造因子。不同实际油配方须独立行。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`damen-asd-tug`

###### 含缓蚀剂乙二醇水船机冷却预混液 (`coolant`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：含缓蚀剂乙二醇水船机冷却预混液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`damen-asd-tug`

###### 供调试的化石低硫船用柴油 (`test_diesel`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：供调试的化石低硫船用柴油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`damen-asd-tug`

###### 声明船厂进线供入交流电力 (`electricity_acceptance`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`damen-asd-tug`

#### 输出

##### 产品流

###### 拖船及顶推船 (`finished_machine`)

声明船厂门点处验收配置完整钢质船体机械推进柴油拖船或推船一千克，核对安装装备工作液，从净 M 排除消耗性货物燃油淡水压载。泛指公开船舶身份须所有拖船/推船限定，不含运输服务上游完整声明。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：拖船及顶推船 `f323a122-a4de-4c9d-920f-4c09196c70ae`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`damen-asd-tug`

#### 输出

##### 废物流

###### 转交处理的废石油润滑油 (`spent_oil`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：转交处理的废石油润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`damen-asd-tug`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅已证实化石来源可归属实测化石燃料调试 CO2 排至空气未指定子介质，不推断保护气或寿命运营因子。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`damen-asd-tug`

###### 一氧化氮 (`nitric_oxide`)

仅独立实测调试 NO 排至空气未指定子介质。未物种拆分总 NOx 结果不能建立本数量，不假定强制排放。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`damen-asd-tug`

###### 二氧化氮 (`nitrogen_dioxide`)

仅独立实测调试 NO2 排至空气未指定子介质。未物种拆分总 NOx 结果不能建立本数量，不假定强制排放。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`damen-asd-tug`

### 过程：交付保护及整体拆卸件 (`packing`)

可拆保护独立称量并从净 M 排除。整体交付拆卸件独立计量核对验收完整配置。排除单独销售备件及外部支持船。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅可拆非自黏非泡沫未增强未层压 PE-LD 保护膜，称实际领退平衡从 M 排除。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 声明船厂进线供入交流电力 (`electricity_packing`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared shipyard resources | 按船体工单配置分开，优先直接归属实测坯料领退机械收货工时仪表试航返工。不可分离共用资源采用已证实实测因果驱动量如操作时间负荷涂装面积层要求：份额 = 工单驱动量 / 全部覆盖工单驱动量总和。保留时期分母因果，吨位标称排水量等艘数不自动作因果驱动。 |  |
| `allocation_recovery` | internal reuse and waste | 内部复用坯料水试验燃料为转移，不重复新投入自动抵扣。输出废物保留实测量接收者，不假定避免生产效益。经记录审查剩余分配前分离可售共产品。将报告期拒收返工建造在制核对至验收产出。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整船舶净质量 | controlled_acceptance_record | 型号；配置；序列号；验收净质量 M；验收重量报告原件编号日期；实际轻船重量检验方法；仪表校准；交付状态；安装工作液；逐项增加扣除质量；排除货物人员燃油淡水压载试验载荷；拆卸整体件；核验者；质量平衡 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 逐艘验收 | 该船实际制造验收时期 | 声明船厂验收门点 | 每台验收净质量 | 原始实际检验配置修正质量平衡核验记录 |
| `cp_stock_form` | stock_form | 船体及拖曳基座坯料准备 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、工位仪表及可归属检验/试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_hull_join` | hull_join | 船体及承载基座装配 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、工位仪表及可归属检验/试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_surface_finish` | surface_finish | 船体表面准备与涂装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、工位仪表及可归属检验/试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_machinery` | machinery | 机械柴油推进安装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、工位仪表及可归属检验/试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_tow_push_gear` | tow_push_gear | 拖曳与推顶装备集成 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、工位仪表及可归属检验/试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_outfit` | outfit | 管系、电气、导航及安全舾装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、工位仪表及可归属检验/试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_acceptance` | acceptance | 下水、建造试验与船舶验收 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、工位仪表及可归属检验/试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_packing` | packing | 交付保护及整体拆卸件 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、工位仪表及可归属检验/试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐船体配置工单采集可归属净坯料领用独立模块公用工程建造试航消耗废物实际排放，扣记录退回库存变化并合理共用分配，再除验收艘数得 q_item，除同一受控实测净 M。发动机交换保留 Item(s)/kg，独立实测发动机质量用于完整性；质量交换 kg/kg，电力 MJ/kg。兼容序列号船舶实测质量变化时可归属总量除验收净质量之和，保留全部序列号记录。分开不兼容推进船体舾装涂装试航范围。未知为缺口，不作零，不推断吨位容量额定功率寿命换算。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | 当前船舶验收质量原件须实施 mass_record_provenance。保留实际物理轻船重量检验、可观测方法输入校准及签署逐项交付净配置核对；核对独立称量安装模块工作液。目录无解释排水量吨位记录不足。方法缺失修正不确定配置变化阻止完整量值数据集；以新测量核对解决，不假定重量。 | 原件与修正台账；nma-lightship 仅方法案例 |
| `quality_bom` | complete vessel | 核对图纸物料表安装船体机械推进管系电气拖曳/推顶、安全与导航实际工作液质量供应商范围拆卸交付件。完成前增列全部实际缺失部件，接收完整模块计一次。 | 图纸原件称量供应商完整性 |
| `quality_balances` | flows and trials | 保留校准物料领退复用实际配方密度调试消耗保留燃料实测物质介质出口。QA 限值来自适用实际记录核验可比证据，不编造收率强度范围普遍调试耗用。 | 库存仪表安全数据表试验移交 |
| `quality_coverage` | dataset | 披露实际地域时期配置条件缺席外包身份量值不确定性经验范围缺口上游缺失适用验收制度。历史制造者主管案例不证明目前证书现行法律完整性本船实际 M。PCR 检查核验声明关系，不验证真实船记录科学批准。 | 覆盖证据限制登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求配置完整钢质船体柴油拖船/推船及实施 mass_record_provenance 的受控记录正实际净 M。排除运营货物人员燃油淡水压载临时载荷，保留声明安装工作液。拒绝吨位载重量目录满载排水量满燃油质量替代。底层方法平衡缺失须审查并阻止量值数据完成。 |  |
| `validate_identity` | all rows | 核对逐原子物理化学交换公开参考属性单位组路线状态供应商范围。发动机台数不是质量，发电机组发动机只计一次，CuO 不是 Cu2O 涂料，供水不是废液资源取用。无依据身份留空，完成前增列实际物质部件。 |  |
| `validate_measurement` | all rows | 逐数量采集换算核验同配置实际时期场址验收艘数净 M。核对安装预加液体消耗试航燃料供应商组成无重复；核验校准密度单位换算共用分母。未知不得作零。 |  |
| `validate_species` | elementary rows | 仅采用已证实可归属建造试航物质实际环境介质。本 CO2/NO/NO2 身份为空气未指定即时排放，化石 CO2 须化石来源。未分物种总 NOx、N2O、氮亚硝酸盐生物源 CO2 水土壤长期排放不得替代。捕集滤尘保留废物。 |  |
| `validate_tow_push_gear` | towing/pushing configuration | 将实际基座、拖曳绞车/拖钩/拖桩、拖缆材料、护舷几何/组成及推顶/联接装备核对至图纸、供应完整性及验收船舶配置。保留实际功能及载荷试验方法、校准实测力及测试介质/出口记录。系柱拉力和制动/联接额定值仅描述验收性能，不提供净 M 或清单因子。制造商选装装备及历史二手船记录不能建立实际安装或现行认证。 | `damen-asd-tug` |
| `validate_acceptance` | claimed flag/class acceptance | 声明时追溯实际船舶特定检验证书适用主管船级制度。制造商装备表不认证本艘拖船/推船，不采用普遍数值标准试验载荷。 | `damen-asd-tug` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整钢质船体柴油拖船/推船前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配船体推进舾装涂装受控净质量范围试航边界门点场址时期制造供应链模型 |
| excluded_use | 拖曳/推顶服务寿命比较等质量容量等效其他推进材料无依据完整摇篮到大门声明 |
| required_metadata | 建造者/型号、船体序列号/图纸版本、钢牌号/厚度及供应分段完整性；机械柴油轴系或全回转推进及供应商包含；实际拖曳/推顶或联合配置、基座、绞车/拖钩/拖桩、拖缆材料、护舷几何/组成、推顶支架及联接；辅助管系/电气/导航/安全、涂料配方及实际声明验收制度；当前受控验收记录正净 M，单位 kg，附实际轻船/重量检验原件、可追溯方法/校准/可观测输入及签署逐项配置核对；安装工作液及整体交付拆卸件；排除人员、货物、消耗性燃油/淡水、压载、可拆保护及临时试验载荷；实际建造试验、场址/时期/交付门点及上游链接 |
| required_quality_disclosure | 身份量值质量原始依据缺口不确定性条件缺席完整物料表分配实际验收范围未链接上游 |
| update_trigger | 船体推进舾装涂装供应商模块实际 M 证据修正试航状态边界制造验收制度场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `damen-asd-tug` | literature | [Damen: Azimuth Stern Drive Tug 2813 STOCK](https://medialibrary.damen.com/m/3ffb16484e7ba471/original/product-sheet-asd-tug-2813.pdf) | PDF 第 1 页用途、推进、环氧涂装、甲板装备及护舷配置；Ø 标记为选项。无日期装备案例，不是实际交付船舶规格。不采用额定力、数量、尺寸、近似排水量、GT、燃油舱容、质量或数值强度。 |
| `damen-tug-pusher` | literature | [Damen Trading: folio 07802 Tug/Pushboat](https://medialibrary.damen.com/m/bcd65829ff4b920/original/tug-pusher-damen-trading-07802.pdf) | PDF 第 1 页为 1980 年建造及后来改装的二手船，描述固定桨柴油推进、艏推顶支架/橡胶护舷及联接/拖曳装备。仅历史物理装备案例。不采用维修/转售过程、现行证书、数值额定值或排水量作为制造数据或净 M。 |
| `damen-seagoing` | literature | [Damen: Seagoing Transport](https://medialibrary.damen.com/m/95d5489057a4c08f/original/Seagoing-transport.pdf) | PDF 第 5 页（印刷 8–9）明确以拖船建造说明模块化方法。仅制造路线背景，不采用普遍材料配方、当前船舶验收或数值制造因子。 |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/印刷第 5–7 页第 3.2–3.4 节：船况、舱液、水密度及吃水/干舷观测。仅历史挪威方法案例；仍须当前实际轻船/重量检验及逐项净配置修正。不采用历史数值阈值或普遍法律适用性。 |
