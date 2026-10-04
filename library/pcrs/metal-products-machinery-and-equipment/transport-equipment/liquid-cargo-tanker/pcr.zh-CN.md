---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.liquid-cargo-tanker
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢质双壳柴油成品油船制造

## 1. 范围与适用性

本候选 PCR 覆盖新制完整钢质双壳柴油动力成品油船，机械柴油与柴油电力推进分别声明。液货制造范围须记录实际分舱、内表面、货泵/货管/透气/液位及安全配置。前景始于指定坯料/分段与外购模块，止于配置特定的船厂验收/交付，纳入可归属建造试验。有充分依据时链接供应商上游；仅接收到交付记录不能代表完整摇篮到大门。[来源：`damen-product-tanker`、`damen-seagoing`]

排除原油船、专用化学品船、液化/加压/低温气体船、单壳或非钢船舶、替代燃料/牵引电池推进、仅船体中间件、维修改装及货运运营/维护/报废。双认证设计按声明石油成品配置建造时可纳入，但不建模化学货物服务。本范围窄于 CPC 49312。货物围护/舾装及油船验收需要机动车车身和客运渡船制造所缺少的方法；旧脚手架保持只读。科学审查待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.liquid-cargo-tanker |
| classification_refs | CPC 3.0 49312；较窄钢质双壳柴油成品油船制造 |
| covered_products | 新制完整配置钢质双壳柴油成品油船 |
| excluded_products | 排除原油船、专用化学品船、液化/加压/低温气体船、单壳或非钢船舶、替代燃料/牵引电池推进、仅船体中间件、维修改装及货运运营/维护/报废。双认证设计按声明石油成品配置建造时可纳入，但不建模化学货物服务。本范围窄于 CPC 49312。货物围护/舾装及油船验收需要机动车车身和客运渡船制造所缺少的方法；旧脚手架保持只读。科学审查待完成。 |
| representative_product | 一艘序列号关联验收完整油船，具有受控实际净 M |
| production_route | 坯料/分段结构制造、条件船体及货舱涂装、货物系统集成、推进/舾装、建造试验及验收 |
| market_state | 船厂门点验收完整船舶；净 M 不含货物或运营消耗品 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配置完整钢质船体柴油成品油船 |
| How much | 1 kg 验收完整船舶净质量；实际按艘记录除以正受控 M |
| How well | 船舶特定结构安装调试放行准则，声明时追溯适用船旗船级验收。等质量不等于载货容量或性能 |
| How long or cycle | 一次制造建造验收周期，不假定油船寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 油轮（船） `6285cffb-df99-4532-9f3a-8de1c4bb6fde` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 建造者/型号；船体序列号与图纸版本；钢质双壳成品油货物范围及分舱；机械柴油或柴油电力推进结构；船体/货舱舱壁牌号、厚度及供应分段完整性；货泵/污油泵、货管/集管、透气/气相返回及液位测量设计；实际货舱涂料配方及适配性；条件加热、惰性气体、固定洗舱、压载水处理及消防救生设备；实际声明船旗/船级验收；当前受控验收记录的正净 M，单位 kg，附实际轻船/重量检验原件、校准、静水力/物理输入和逐项净配置修正；排除货物/污油、人员、消耗性燃油/淡水、压载及临时测试舱液；安装工作液及整体交付拆卸件；实际供应商包含、制造场址/时期、调试与交付门点；上游链接 |

在元数据或等效参考备注声明所有限定。泛指公开船舶产品身份须限至实际油船配置。净 M 包含完整安装船体机械舾装整体交付装备声明安装工作液。交付拆卸整体件按实测质量核对。排除人员货物车辆消耗性燃油淡水压载可拆保护临时试航载荷工装。总净吨位载重量目录质量满载排水量满燃油状态不能替代 M。实际检验状态测量只能经下述可追溯净配置修正记录用于 M。

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
| product_classification_scope | 钢质船体柴油成品油船，声明推进货物系统变型 |
| recursive_input_rule | 不递归生成完整油船为自身投入，外购成品分段模块跳过所含操作 |
| upstream_dataset_requirement | 匹配实际牌号配方模块完整性推进时期地域属性，披露供应商生产缺失 |
| disclosure | 建造者/型号；船体序列号与图纸版本；钢质双壳成品油货物范围及分舱；机械柴油或柴油电力推进结构；船体/货舱舱壁牌号、厚度及供应分段完整性；货泵/污油泵、货管/集管、透气/气相返回及液位测量设计；实际货舱涂料配方及适配性；条件加热、惰性气体、固定洗舱、压载水处理及消防救生设备；实际声明船旗/船级验收；当前受控验收记录的正净 M，单位 kg，附实际轻船/重量检验原件、校准、静水力/物理输入和逐项净配置修正；排除货物/污油、人员、消耗性燃油/淡水、压载及临时测试舱液；安装工作液及整体交付拆卸件；实际供应商包含、制造场址/时期、调试与交付门点；上游链接 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | 纳入实际制造可归属返工下水建造调试至声明验收门。分配独立实测生产支持试航资源，排除货运服务研发运营维护。纳入时实际拖曳船坞起重服务燃料须独立声明交换，含服务边界时长供应商范围。不推断寿命航次负担。 |  |
| `boundary_modules` | purchased components | 成品船体分段发电机组推进器货物/生活/安全模块连组成预加液体计一次。所含供入替代组成行。实际厂内制造须实测部件清单。数据集放行前补齐全部实际物料表条件化学已证实物质，候选行不是穷尽船舶物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | 船体与货舱舱壁坯料准备 | conditional | 未成形坯料在报告船厂内切割或成形。 | foreground | 一艘验收配置油船，使用 M 归一化 |
| `hull_join` | 双壳与货舱结构装配 | required | 每艘完整双壳成品油船。 | foreground | 一艘验收配置油船，使用 M 归一化 |
| `surface_finish` | 船体表面准备与保护涂装 | conditional | 表面处理在报告前景内实施。 | foreground | 一艘验收配置油船，使用 M 归一化 |
| `cargo_system` | 货舱内表面与货泵管路安装 | required | 每艘配置完整的成品油船。 | foreground | 一艘验收配置油船，使用 M 归一化 |
| `machinery` | 柴油推进与辅助机械安装 | required | 实际机械柴油或柴油电力配置。 | foreground | 一艘验收配置油船，使用 M 归一化 |
| `outfit` | 电气安全与船员舾装 | required | 每艘完整油船。 | foreground | 一艘验收配置油船，使用 M 归一化 |
| `acceptance` | 下水建造试验与净质量验收 | required | 每艘在声明船厂门点放行的船舶。 | foreground | 一艘验收配置油船，使用 M 归一化 |
| `packing` | 可拆交付保护 | conditional | 交付时供入保护材料。 | foreground | 一艘验收配置油船，使用 M 归一化 |

实际坯料成形供入双壳/货舱连接、条件船体涂装、货物系统集成、机械舾装及下水调试验收，再条件交付保护。阶段可重叠，资源一次归属实际操作供应商范围。即使必需阶段，每行也须精确组成状态配置。遗漏实际部件燃料化学及已证实废物排放各自独立增列。不声称普遍焊接涂装配方或强制排放。

### 过程：船体与货舱舱壁坯料准备 (`stock_form`)

追溯外壳、内壳、双底和货舱舱壁的实际图纸、钢牌号及切割成形路线。接收完整分段时，替代其包含的坯料和已完成制造。实际切割气体、切削油和厂内部件制造须分别增列，不规定普遍坯料配方。

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

###### 钢板 (`hsla_plate`)

仅实际匹配公开物理路线牌号厚度热轧低合金高强厚板。造船适用材料批准须实际图纸供应商记录独立建立，本身份不是船用批准。其他钢牌号须独立行。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
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

### 过程：双壳与货舱结构装配 (`hull_join`)

连接声明船体分段、内外壳、货舱/污油舱/隔离压载舱舱壁、甲板及上层建筑。记录实际接头、焊接规程、检验、密性检查和返工。供应商已完成的分段制造只计一次；认证与双壳尺寸来自实际适用图纸，不在此推断普遍法定阈值。下列焊接耗材为条件路线。

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
- 来源：`imo-tankers`

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
- 来源：`imo-tankers`

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
- 来源：`imo-tankers`

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
- 来源：`imo-tankers`

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
- 来源：`imo-tankers`

### 过程：船体表面准备与保护涂装 (`surface_finish`)

追溯实际船体、压载舱与外表面涂层、准备及固化。基料、固化剂与防污涂料配方分别记录；供应商已完成层替代重复前景作业。列出的环氧及 Cu2O 涂料为条件案例，不是强制配方。实际稀释剂、清洗剂、其他层及实测排放须分别增列。

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
- 来源：

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
- 来源：

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
- 来源：

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
- 来源：

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
- 来源：

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
- 来源：

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
- 来源：

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
- 来源：

### 过程：货舱内表面与货泵管路安装 (`cargo_system`)

安装实际固定液货系统，涵盖独立供入的货泵/污油泵、管路/集管、透气/气相返回、液位测量及洗舱设备。货舱涂层、加热盘管和惰性气体设备仅按实际设计及货物适配/验收制度纳入。外购系统的所含零件只计一次。建造验收内采集舱管冲洗和密性试验，不纳入运营航次或洗舱服务。Damen 初步产品表仅为设计案例，不证明本船配置。

#### 输入

##### 产品流

###### 成品深井式石油成品货泵总成 (`cargo_pump`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品深井式石油成品货泵总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 成品碳钢成品油货管预制管段 (`cargo_pipe`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品碳钢成品油货管预制管段
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 货舱压力真空透气阀总成 (`cargo_vent`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：货舱压力真空透气阀总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 封闭式船用货舱液位测量总成 (`cargo_gauge`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：封闭式船用货舱液位测量总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 环氧酚醛货舱涂料基料配方 (`cargo_epoxy`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：环氧酚醛货舱涂料基料配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 胺类环氧酚醛货舱涂料固化剂配方 (`cargo_hardener`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：胺类环氧酚醛货舱涂料固化剂配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 成品不锈钢液货加热盘管总成 (`heating_coil`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品不锈钢液货加热盘管总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 成品船用惰性气体发生器总成 (`inert_gas_unit`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品船用惰性气体发生器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 工艺用水 (`cargo_flush_water`)

仅实际供入的处理工业工艺水用于建造货物系统冲洗或试验；不得用海水原水替代。内部回收循环不作二次采购，实际出口须独立识别。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

###### 声明船厂进线供入交流电力 (`electricity_cargo_system`)

采集实际工位电力 kWh 船厂进线电压供电路线实测共用驱动量分母，铭牌 kW 不是能量。

- 选定流：声明船厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

#### 输出

##### 废物流

###### 转交处理的调试货管冲洗水性废液 (`cargo_flush_effluent`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：转交处理的调试货管冲洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cargo_system。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cargo_system`
- 来源：`damen-product-tanker`

### 过程：柴油推进与辅助机械安装 (`machinery`)

机械驱动路线记录独立柴油机及机械传动部件；柴油电力路线记录完整发电机组与推进电机/变流器。外购完整发电机组替代所含发动机；发动机 Item(s) 交换与实测安装质量保持区别。供应商未含的转向、冷却、尾气、燃油、侧推及辅助总成须增列独立供应/制造模块。

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
- 来源：`damen-seagoing`

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
- 来源：`damen-seagoing`

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
- 来源：`damen-seagoing`

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
- 来源：`damen-seagoing`

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
- 来源：`damen-seagoing`

###### 成品船用电力推进电机 (`propulsion_motor`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品船用电力推进电机
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_machinery`
- 来源：`damen-seagoing`

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
- 来源：`damen-seagoing`

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
- 来源：`damen-seagoing`

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
- 来源：`damen-seagoing`

### 过程：电气安全与船员舾装 (`outfit`)

安装实际接线、船员生活设施、导航、救生、货物甲板消防及辅助污染控制设备。每项供入完整设备作为声明完整性的原子总成。数据集完成前增列实际绞车、系泊、转向、救生艇、绝热材料、家具、制冷物质及工作液。软管吊机、泡沫系统或压载水处理单元按实际设计纳入；制造商通用产品表不认证真实船舶。

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
- 来源：`damen-product-tanker`

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
- 来源：`damen-product-tanker`

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
- 来源：`damen-product-tanker`

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
- 来源：`damen-product-tanker`

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
- 来源：`damen-product-tanker`

###### 成品船用压载水处理单元 (`ballast_unit`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品船用压载水处理单元
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-product-tanker`

###### 安装式液货甲板泡沫消防系统总成 (`foam_system`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：安装式液货甲板泡沫消防系统总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-product-tanker`

###### 液压驱动船用货物软管吊机总成 (`hose_crane`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：液压驱动船用货物软管吊机总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`damen-product-tanker`

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
- 来源：`damen-product-tanker`

### 过程：下水建造试验与净质量验收 (`acceptance`)

记录实际下水、港内/海上调试、货物系统建造试验、返工及验收。燃料消耗与退回或交付保留燃料分开；运营货物、人员、消耗性燃油/淡水、压载和临时试验载荷从净 M 排除。永久工作液按声明安装配置保留。实际测试介质与出口须分别识别，不预设原水使用、冲洗残渣或气体排放。不采用普遍时长、载荷、燃料耗用或寿命因子。

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
- 来源：`nma-lightship`

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
- 来源：`nma-lightship`

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
- 来源：`nma-lightship`

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
- 来源：`nma-lightship`

#### 输出

##### 产品流

###### 油轮（船） (`finished_machine`)

声明船厂门点处验收配置完整钢质双壳柴油成品油船一千克，核对安装装备工作液，从净 M 排除消耗性货物燃油淡水压载。泛指公开船舶身份须所有油船限定，不含运输服务上游完整声明。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：油轮（船） `6285cffb-df99-4532-9f3a-8de1c4bb6fde`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`nma-lightship`

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
- 来源：`nma-lightship`

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
- 来源：`nma-lightship`

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
- 来源：`nma-lightship`

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
- 来源：`nma-lightship`

### 过程：可拆交付保护 (`packing`)

分别计量实际可拆保护交换并从 M 排除；整体交付拆卸件须独立称量并核对验收完整配置。排除单独销售备件及外部拖曳/支持船。

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
| `cp_stock_form` | stock_form | 船体与货舱舱壁坯料准备 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留图纸版本与材料证书，实测坯料领退、切割边角料和工位电力。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_hull_join` | hull_join | 双壳与货舱结构装配 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集分段范围、焊接检验与密性记录、实际焊材/气体领用及仪表读数。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_surface_finish` | surface_finish | 船体表面准备与保护涂装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留各层安全数据表、组成、实测领退、涂覆面积、用水、捕集残渣及出口记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_cargo_system` | cargo_system | 货舱内表面与货泵管路安装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集货物系统管仪图、分舱/涂层计划、供应商部件范围、独立总成称量、配方记录及实际冲洗、密性和功能试验日志。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_machinery` | machinery | 柴油推进与辅助机械安装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 追溯实际推进结构、供应商物料表/序列号、数量、独立安装质量、对中及连接记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_outfit` | outfit | 电气安全与船员舾装 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留安装图纸、实际声明证书、供应商边界、独立模块实测质量及试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_acceptance` | acceptance | 下水建造试验与净质量验收 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 保留当前实际轻船/重量检验原件、受控验收质量/配置记录、校准及逐项修正；保留调试领退和实测物质/出口。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_packing` | packing | 可拆交付保护 | foreground_record | 船体序列号工单；配置；验收艘数；交换身份状态属性单位；领退库存变化；供应商包含；发动机台数独立安装质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 称量材料领退并核对整体交付件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐船体配置工单采集可归属净坯料领用独立模块公用工程建造试航消耗废物实际排放，扣记录退回库存变化并合理共用分配，再除验收艘数得 q_item，除同一受控实测净 M。发动机交换保留 Item(s)/kg，独立实测发动机质量用于完整性；质量交换 kg/kg，电力 MJ/kg。兼容序列号船舶实测质量变化时可归属总量除验收净质量之和，保留全部序列号记录。分开不兼容推进船体舾装涂装试航范围。未知为缺口，不作零，不推断吨位容量额定功率寿命换算。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | 当前船舶验收质量原件须实施 mass_record_provenance。保留实际物理轻船重量检验、可观测方法输入校准及签署逐项交付净配置核对；核对独立称量安装模块工作液。目录无解释排水量吨位记录不足。方法缺失修正不确定配置变化阻止完整量值数据集；以新测量核对解决，不假定重量。 | 原件与修正台账；nma-lightship 仅方法案例 |
| `quality_bom` | complete vessel | 核对图纸物料表安装船体机械推进管系电气货物、船员、安全与导航实际工作液质量供应商范围拆卸交付件。完成前增列全部实际缺失部件，接收完整模块计一次。 | 图纸原件称量供应商完整性 |
| `quality_balances` | flows and trials | 保留校准物料领退复用实际配方密度调试消耗保留燃料实测物质介质出口。QA 限值来自适用实际记录核验可比证据，不编造收率强度范围普遍调试耗用。 | 库存仪表安全数据表试验移交 |
| `quality_coverage` | dataset | 披露实际地域时期配置条件缺席外包身份量值不确定性经验范围缺口上游缺失适用验收制度。历史制造者主管案例不证明目前证书现行法律完整性本船实际 M。PCR 检查核验声明关系，不验证真实船记录科学批准。 | 覆盖证据限制登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求配置完整钢质船体柴油油船及实施 mass_record_provenance 的受控记录正实际净 M。排除运营货物人员燃油淡水压载临时载荷，保留声明安装工作液。拒绝吨位载重量目录满载排水量满燃油质量替代。底层方法平衡缺失须审查并阻止量值数据完成。 |  |
| `validate_identity` | all rows | 核对逐原子物理化学交换公开参考属性单位组路线状态供应商范围。发动机台数不是质量，发电机组发动机只计一次，纯树脂不是配方货舱涂料，CuO 不是 Cu2O 涂料，供水不是废液资源取用。无依据身份留空，完成前增列实际物质部件。 |  |
| `validate_measurement` | all rows | 逐数量采集换算核验同配置实际时期场址验收艘数净 M。核对安装预加液体消耗试航燃料供应商组成无重复；核验校准密度单位换算共用分母。未知不得作零。 |  |
| `validate_species` | elementary rows | 仅采用已证实可归属建造试航物质实际环境介质。本 CO2/NO/NO2 身份为空气未指定即时排放，化石 CO2 须化石来源。未分物种总 NOx、N2O、氮亚硝酸盐生物源 CO2 水土壤长期排放不得替代。捕集滤尘保留废物。 |  |
| `validate_cargo_system` | cargo containment and equipment | 将实际货舱/污油舱分隔、货管/集管/透气/液位图纸和材料/涂层适配性核对至声明石油成品配置。追溯实际泄漏/密性/功能试验方法、测试介质与出口；仅纳入可归属建造试验。加热、惰性气体、泡沫及压载水处理的适用性按实际设计和当前核验验收要求确定；初步产品表数量或普遍阈值不认证本船。 | `damen-product-tanker` |
| `validate_acceptance` | claimed flag/class acceptance | 声明时追溯实际船舶特定检验证书适用主管船级制度。泛指制造者认证 IMO 概览不认证本油船，不采用普遍数值标准试验载荷。 | `imo-tankers` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整钢质船体柴油油船前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配船体推进舾装涂装受控净质量范围试航边界门点场址时期制造供应链模型 |
| excluded_use | 货运服务寿命比较等质量容量等效其他推进材料无依据完整摇篮到大门声明 |
| required_metadata | 建造者/型号；船体序列号与图纸版本；钢质双壳成品油货物范围及分舱；机械柴油或柴油电力推进结构；船体/货舱舱壁牌号、厚度及供应分段完整性；货泵/污油泵、货管/集管、透气/气相返回及液位测量设计；实际货舱涂料配方及适配性；条件加热、惰性气体、固定洗舱、压载水处理及消防救生设备；实际声明船旗/船级验收；当前受控验收记录的正净 M，单位 kg，附实际轻船/重量检验原件、校准、静水力/物理输入和逐项净配置修正；排除货物/污油、人员、消耗性燃油/淡水、压载及临时测试舱液；安装工作液及整体交付拆卸件；实际供应商包含、制造场址/时期、调试与交付门点；上游链接 |
| required_quality_disclosure | 身份量值质量原始依据缺口不确定性条件缺席完整物料表分配实际验收范围未链接上游 |
| update_trigger | 船体推进舾装涂装供应商模块实际 M 证据修正试航状态边界制造验收制度场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `damen-product-tanker` | literature | [Damen: Combi Tanker 6000 preliminary sheet](https://medialibrary.damen.com/m/3a17769dc9b8dc79/original/product-sheet-combi-tanker-5800.pdf) | PDF 第 1 页货物、推进、甲板/安全及选装系统；第 1–2 页页脚声明资料初步且可变。文件名为 5800，原文标题为 6000。仅作候选设备/配置案例，不采用数量、流量、额定值、舱容、载重量或 GT 作为制造量值或净 M。 |
| `damen-seagoing` | literature | [Damen: Seagoing Transport](https://medialibrary.damen.com/m/95d5489057a4c08f/original/Seagoing-transport.pdf) | PDF 第 5 页（印刷 8–9）模块化建造；第 8 页（印刷 14–15）成品油船选项及独立气体船类别。仅用于路线/选项描述，不采用制造商性能声明、数值基准或普遍配方。 |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/印刷第 5–7 页第 3.2–3.4 节：船况、舱液、水密度及吃水/干舷测量。仅为历史挪威方法案例；仍须当前实际船舶测量原件及净配置核对。不采用历史数值阈值或全球法律适用性。 |
| `imo-tankers` | official_guidance | [IMO: Tanker safety—preventing accidental pollution](https://www.imo.org/en/ourwork/safety/pages/oiltankers.aspx) | 惰性气体、双壳及附则 I 修订各节描述安全/围护背景和历史变化。不代表完整现行法律规范或实际船舶证书。各设计须核对实际适用制度，不采用页面阈值、普遍惰性气体要求或舱试验载荷。 |
