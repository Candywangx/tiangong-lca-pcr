---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.root-and-tuber-harvesting-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 块根块茎收获机械制造


## 1. 范围与适用性

本 PCR 描述从土壤挖掘块根块茎并提供配置确定的分离和作物输送功能的新完整机器前景制造。涵盖声明配置的悬挂式、牵引式或自走式马铃薯、甜菜及同类块根作物收获机。须明确作物类型及安装入料机构；多功能设计按交付挖掘配置表示，不对不兼容入料机构平均。

该单位支持制造数据集，不表示收获公顷或作物质量等效。排除农场作业、田间损失、土壤效应、作物产量、仅清理装载机器、运输车辆、拖拉机制造、维修服务、转售及报废。维修零件和不完整套件需要另行定义参考流，不作为此处完整机器输出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.root-and-tuber-harvesting-machinery |
| classification_refs | CPC 3.0 44126 — 块根块茎收获机；仅为分类背景 |
| covered_products | 配置明确的完整块根块茎土壤挖掘收获机，包含声明的作物入料、分离及出料机构 |
| excluded_products | 缺乏土壤挖掘的独立条铺拾取清理装载机；单独提供的拖拉机；作物服务；不完整套件 |
| representative_product | 一台有序列号且配置明确的验收合格马铃薯或甜菜收获机；不设代表性数值质量 |
| production_route | 实测外购部件，加上按实际执行记录的厂内制造、连接、表面处理、作物通道集成及验收 |
| market_state | 新制、完整、在声明制造出厂门验收合格；作物料仓为空 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够挖掘、分离及输送声明块根块茎作物的配置明确制造机械 |
| How much | 1 kg 验收合格完整机器净质量；按台采集并使用实测 M 换算 |
| How well | 符合有记录的配置、尺寸、防护、泄漏及功能工厂验收要求；不表示田间能力等效 |
| How long or cycle | 一次制造及工厂验收周期；不声明使用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 根茎或块茎收割机 `e3e7c424-4195-4bf9-bf45-a8b187b36944` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商及型号；序列号及配置版本；目标作物及土壤挖掘入料机构；悬挂/牵引/自走式路线；安装行布置及工作宽度；分离和输送设计；切顶和料仓配置；料仓额定载荷与净质量分开；发动机及拖拉机驱动边界；轮胎及车轴；液压及电气选装；工厂保留加注；验收净质量 M 及称重状态；包装排除；场址、时期及实际工序边界 |

必需限定信息应随数据集元数据、过程说明或参考流备注提供。M 仅包括相同交付配置的部件及工厂保留加注；排除作物载荷、运输支撑及单独提供的拖拉机。料仓载荷不是整机净质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `meter_units` | 过程电力、天然气及液体 | Energy; Volume; Mass | MJ; m3; kg | 每个原子交换按声明属性记录。依据已核验能量单位组系数 3.6 将 kWh 换算 MJ；体积质量换算需要实测成分、密度及参考状态。流属性 meanValue 1 不是液体或气体密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从工厂接收身份明确的外购金属坯料及成品部件开始；描述供应商预制及涂层 |
| starting_condition_role | 前景制造 |
| product_classification_scope | 完整块根块茎土壤挖掘收获机械；不包括农场活动 |
| recursive_input_rule | 购入同类别机器按身份明确的上游产品记录配置、净质量和供应商边界；只计新增前景转化，不重复计算已含部件 |
| upstream_dataset_requirement | 按声明产品、路线、属性、地域及时期匹配供应商数据集；逐项披露缺失或代理链接 |
| disclosure | 报告实际门点、外包工序、内部转移、公用工程覆盖及遗漏上游阶段。从接收到出厂的前景不声称完整摇篮到大门 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_routes` | all processes | 纳入实际厂内操作和工厂验收；外包表面处理仅在有供应商边界及分配交换证据时作为链接服务保留。必需集成不要求每个部件必须自制。 | `grimme-manufacturing-history` |
| `boundary_extension` | all inventory rows | 按实际物料表和工序增列原子交换，包括实际存在的车轴、紧固件、传感器、具体首次加注冷却液和制冷剂、实际焊接气体及废物。每项缺席须有配置或工序证据；未知不等于零。 | `grimme-multicrop` |
| `boundary_exclusions` | reference product | 排除整个寿命农场作业、作物产出、农艺效应及单独提供的拖拉机；区分工厂试验消耗、出厂保留加注及后续作业。 | `ropa-tiger` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 机架及挖掘部件制造 | conditional | 报告前景内制造这些部件；外购成品部件跳过此过程。 | foreground | 一台验收合格配置机器，按 M 归一化 |
| `joining` | 机架焊接连接 | conditional | 前景内实施焊接。 | foreground | 一台验收合格配置机器，按 M 归一化 |
| `finishing` | 表面处理与涂装 | conditional | 前景内实施表面处理或涂装。 | foreground | 一台验收合格配置机器，按 M 归一化 |
| `harvest` | 挖掘、分离及作物输送机构集成 | required | 所有覆盖的完整收获机；各部件卡按配置设计适用。 | foreground | 一台验收合格配置机器，按 M 归一化 |
| `integration` | 液压与电气集成 | conditional | 配置包含液压或电气设备；各卡仅在安装对应部件时适用。 | foreground | 一台验收合格配置机器，按 M 归一化 |
| `chassis` | 底盘及自走式动力总成安装 | conditional | 交付机器包含轮式底盘或自走式配置。 | foreground | 一台验收合格配置机器，按 M 归一化 |
| `acceptance` | 总装及工厂验收 | required | 每台验收合格的完整机器。 | foreground | 一台验收合格配置机器，按 M 归一化 |
| `packing` | 出厂防护包装 | conditional | 声明出厂门内实际使用防护包装。 | foreground | 一台验收合格配置机器，按 M 归一化 |

制造 → 连接 → 表面处理 → 作物通道及液压电气集成 → 底盘动力总成安装 → 总装验收 → 可选出厂防护。外购成品件在安装阶段进入。箭头为内部转移，不作为额外外购交换。

### 过程：机架及挖掘部件制造 (`fabrication`)

将切割钢板、成形焊接空心型材及机加工挖掘或支撑零件追溯至图纸。工单用电记录分别注明切割、折弯及钻孔；送至连接工序的内部转移不作为新增外购投入。

#### 输入

##### 产品流

###### 钢板 (`steel_plate`)

仅用于与采购规格匹配的热轧低合金高强度钢板；称量领用量并扣除记录的退料。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`grimme-manufacturing-history`

###### 非圆形截面焊接钢管和钢管 (`welded_section`)

与图纸匹配的非圆形焊接钢型材；称量领用成品型材，不重复计算外购机架组件。

- 选定流：非圆形截面焊接钢管和钢管 `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`grimme-manufacturing-history`

###### 工厂接入端电网交流电 (`fabrication_power`)

按声明的接入电压和供电地域计量制造用电；未明确电压时不采用检索到的 35–330 kV 流。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`grimme-manufacturing-history`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

离厂送往有记录回收路线的未经处理清洁钢切割边角料；与切屑分别称量。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`grimme-manufacturing-history`

###### 钢废料，机加工切屑 (`steel_chip`)

仅限常规减材机加工产生的洁净钢切屑；含油切屑作为不同身份分类单列，记录回收去向。

- 选定流：钢废料，机加工切屑 `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`grimme-manufacturing-history`

### 过程：机架焊接连接 (`joining`)

识别实际焊接工艺。焊丝卡仅适用于碳钢自保护药芯焊；其他工艺须另列具体耗材卡。实测残渣，不因出现焊接工序就推定烟尘排放。

#### 输入

##### 产品流

###### 药芯焊丝 (`weld_wire`)

仅限碳钢自保护药芯焊丝；核对焊丝盘领退和保留焊缝质量。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_joining`
- 来源：`grimme-manufacturing-history`

###### 工厂接入端电网交流电 (`joining_power`)

计量焊接单元及可归属通风用电，不重复计算制造电表量。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_joining`
- 来源：`grimme-manufacturing-history`

#### 输出

##### 废物流

###### 碳钢药芯焊固体焊渣 (`welding_slag`)

仅限收集的焊渣；称重并记录成分及处理路线，不采用冶炼渣身份。

- 选定流：碳钢药芯焊固体焊渣
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_joining`
- 来源：`grimme-manufacturing-history`

### 过程：表面处理与涂装 (`finishing`)

分别声明干式抛丸、湿式清洗及涂装。粉末涂装及燃气固化仅是按实际选择的路线，历史工厂说明并未要求所有产品采用。技术圈工艺水不是基础水资源取用。

#### 输入

##### 产品流

###### 铸钢球形抛丸丸料 (`blasting_shot`)

仅在消耗球形钢丸时适用；记录补加质量，排除内部循环库存。钢丸与钢砂混合名称不是精确身份。

- 选定流：铸钢球形抛丸丸料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`grimme-manufacturing-history`

###### 涂料（粉末） (`coating_powder`)

仅用于实际粉末涂装；记录树脂配方、牌号、新料领用及内部回收复用。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`grimme-manufacturing-history`

###### 工艺用水 (`cleaning_water`)

供湿式清洗的经处理工业工艺水；称量，或使用实测密度转换水表体积。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`grimme-manufacturing-history`

###### 工厂接入端电网交流电 (`finishing_power`)

按路线分表覆盖计量实际抛丸、清洗及涂装用电。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`grimme-manufacturing-history`

###### 气态天然气 (`curing_gas`)

仅用于固化实际消耗的管输气态天然气；记录成分、压力、温度及气表参考状态，不假定通用质量体积换算。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`grimme-manufacturing-history`

#### 输出

##### 废物流

###### 未回收固体涂装粉末过喷料 (`powder_residue`)

仅限送处理的粉末过喷料；扣除内部回收量，记录树脂和去向。检索公开废物流限定中国场址。

- 选定流：未回收固体涂装粉末过喷料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`grimme-manufacturing-history`

###### 送处理的金属零件清洗漂洗废水 (`rinse_wastewater`)

仅限移交处理的废水；记录污染成分及出口量。不以水资源或直接向水体排放替代。

- 选定流：送处理的金属零件清洗漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`grimme-manufacturing-history`

##### 基本流

###### 二氧化碳（化石源） (`curing_fossil_co2`)

仅用于实际燃气固化已证实向空气未特指子介质排放的化石源 CO2；使用可归属实测排放质量，不采用无依据因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`grimme-manufacturing-history`

### 过程：挖掘、分离及作物输送机构集成 (`harvest`)

识别土壤挖掘元件及安装的作物分离和输送路线。区分挖掘入料与条铺拾取，注明行布置、筛链杆间距、分离器形式、切顶装置及料仓。缺乏挖掘配置的仅条铺拾取装载机不在范围内。外购零件只计一次；自制件保留其制造交换。

#### 输入

##### 产品流

###### 钢制块根作物挖掘铲成品 (`lifting_share`)

仅限外购并声明几何尺寸和热处理的钢制挖掘铲成品；自制铲追溯制造工序。

- 选定流：钢制块根作物挖掘铲成品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_harvest。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`grimme-multicrop`

###### 钢制筛链杆成品 (`sieving_bar`)

仅限按声明间距和表面处理安装的外购钢杆；不重复计算外购完整筛链已含的杆。

- 选定流：钢制筛链杆成品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_harvest。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`grimme-multicrop`

###### 硫化橡胶作物输送带 (`conveyor_belt`)

仅用于安装的输送带；记录增强层、橡胶牌号和质量。不以输送及传动带宽泛类别代替具体带身份。

- 选定流：硫化橡胶作物输送带
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_harvest。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`grimme-multicrop`

###### 硫化橡胶作物分离指 (`separator_finger`)

仅用于安装的橡胶分离指；声明几何、橡胶规格及称量质量。

- 选定流：硫化橡胶作物分离指
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_harvest。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`grimme-multicrop`

###### 钢制滚珠轴承成品 (`ball_bearing`)

仅用于安装的钢制滚珠轴承；记录型号和供应商质量，与滚柱轴承区分。

- 选定流：钢制滚珠轴承成品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_harvest。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`grimme-multicrop`

###### 农业收获机机械齿轮箱成品 (`drive_gearbox`)

仅用于安装的机械齿轮箱；声明传动比、壳体和加注边界；风电齿轮箱不适用。

- 选定流：农业收获机机械齿轮箱成品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_harvest。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`grimme-multicrop`

#### 输出

### 过程：液压与电气集成 (`integration`)

记录液压回路驱动来源、压力、软管材质和首次加注牌号；区分拖拉机供油与机载泵。电子控制器和铜电缆分列交换。未包含在外购组件中的传感器、阀及终端须按每种明确部件增列交换。

#### 输入

##### 产品流

###### 双作用液压缸成品 (`hydraulic_cylinder`)

仅用于安装的液压缸；声明缸径、行程和额定压力，不以气缸类别替代。

- 选定流：双作用液压缸成品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_integration`
- 来源：`grimme-multicrop`

###### 农业机械液压泵成品 (`hydraulic_pump`)

仅用于安装的机载液压泵；记录排量及是否包含驱动电机。拖拉机液压供给不在产品制造范围内。

- 选定流：农业机械液压泵成品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_integration`
- 来源：`grimme-multicrop`

###### 液压作物筛链驱动马达成品 (`hydraulic_motor`)

仅用于安装的液压驱动马达，记录排量及供应商组件边界。

- 选定流：液压作物筛链驱动马达成品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_integration`
- 来源：`grimme-multicrop`

###### 液压软管 (`hydraulic_hose`)

仅用于安装的液压软管；记录增强层、压力等级及扣除已单列接头后的质量。

- 选定流：液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_integration`
- 来源：`grimme-multicrop`

###### 液压油 (`hydraulic_oil`)

仅用于工厂实际加入的精炼矿物油液压油；记录牌号和保留量，不重复计算供应商已含预加注。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_integration`
- 来源：`grimme-multicrop`

###### 绝缘铜控制电缆 (`copper_cable`)

仅用于安装的铜控制电缆；采集称量质量和绝缘类型。检索到能量属性电缆不能代表此质量交换。

- 选定流：绝缘铜控制电缆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_integration`
- 来源：`grimme-multicrop`

###### 农业收获机电子控制模块 (`electronic_controller`)

仅用于安装的具体控制器模块；记录硬件版本和质量。机床 PLC 及控制柜集合不是收获机模块身份。

- 选定流：农业收获机电子控制模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_integration`
- 来源：`grimme-multicrop`

#### 输出

### 过程：底盘及自走式动力总成安装 (`chassis`)

轮胎及轮辋分别购入时分别记录；声明车轴和制动配置。发动机、驾驶室及启动蓄电池卡仅用于实际安装的自走式设备。牵引收获机配套拖拉机不计入产品质量。仅当供应商边界未含这些部件时才展开外购组件，避免重复。

#### 输入

##### 产品流

###### 自走式收获机非道路柴油发动机成品 (`diesel_engine`)

仅用于安装的自走式发动机；记录型号、排放配置及实测组件净质量。检索发动机为物品数量属性，并非已核验质量属性。

- 选定流：自走式收获机非道路柴油发动机成品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`ropa-tiger`

###### 农业用新充气橡胶轮胎 (`pneumatic_tyre`)

仅用于安装的农业充气橡胶轮胎；记录尺寸、结构和称量质量。通用轮胎按件计量，橡胶或金属身份未明确。

- 选定流：农业用新充气橡胶轮胎
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`ropa-tiger`

###### 农业收获机钢制车轮轮辋 (`steel_rim`)

仅用于安装的轮辋；记录尺寸和载荷等级。公开拖车轮辋不能覆盖未明确的自走式轮辋。

- 选定流：农业收获机钢制车轮轮辋
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`ropa-tiger`

###### 铅酸蓄电池 (`starter_battery`)

仅用于安装的铅酸启动蓄电池；记录容量、含电解液质量及供应商边界。不假定电容量质量换算。

- 选定流：铅酸蓄电池 `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`ropa-tiger`

###### 农业收获机驾驶室组件 (`operator_cab`)

仅用于安装的外购驾驶室；记录包含的玻璃和附件。实际安装空调时须按具体化学品单列制冷剂加注。

- 选定流：农业收获机驾驶室组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`ropa-tiger`

#### 输出

### 过程：总装及工厂验收 (`acceptance`)

使用与序列号关联的扭矩、防护、液压泄漏及配置功能试验记录。纳入工厂试验；排除作物生产及整个寿命内田间作业。柴油投入仅适用于有实测燃料消耗的工厂试车。声明出厂保留的加注量，净称重不包含称重前已消耗的试验燃料。

#### 输入

##### 产品流

###### 钢螺钉 (`assembly_screw`)

仅用于装配物料表明确的钢螺钉；不以此交换代替螺栓、螺母或垫圈。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`grimme-manufacturing-history`

###### 工厂接入端电网交流电 (`assembly_power`)

计量总装及工厂功能试验用电；排除重复公用工程总量及田间作业用电。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`grimme-manufacturing-history`

###### 柴油 (`test_diesel`)

仅用于工厂发动机试验实测消耗柴油；记录牌号及化石和生物源比例；排除出厂残留加注和农场使用。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`grimme-manufacturing-history`

#### 输出

##### 产品流

###### 根茎或块茎收割机 (`finished_machine`)

声明出厂门处验收合格、配置明确的完整机器净质量；输出严格为 1 kg，不代表田间收获服务。

- 选定流：根茎或块茎收割机 `e3e7c424-4195-4bf9-bf45-a8b187b36944`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`grimme-manufacturing-history`

##### 基本流

###### 二氧化碳（化石源） (`test_fossil_co2`)

仅用于工厂燃料燃烧已证实向空气未特指子介质排放的化石源 CO2；采集可归属实测排放质量；不在此登记生物源 CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`grimme-manufacturing-history`

### 过程：出厂防护包装 (`packing`)

任何运输支撑单独称量，不计入整机净质量。木材卡仅涵盖窑干针叶锯材；其他包装须另列特定材质卡。不推定所有机器必须使用包装。

#### 输入

##### 产品流

###### 窑干锯材（针叶材） (`timber_support`)

仅用于出厂支撑实际使用的窑干针叶锯材；识别树种和干燥路线；从整机净质量 M 中排除。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`grimme-manufacturing-history`

#### 输出

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | shared production | 先按配置分离工单，优先使用直接电表、领料及工单记录。无法分离的共用公用工程使用实测机时或计量负荷，记录因果依据；工单份额为其测量驱动量除以全部覆盖工单驱动量之和。不以不同配置的台数作为无解释代理。 |  |
| `allocation_recovery` | waste outputs | 内部复用边角料、粉末及工艺水为内部转移，核对新料及库存。记录输出废物数量与去向，不自动给予避免原生钢或处置抵扣。如存在有价值共产品，记录其状态，尽量分离过程负担；任何剩余分配须经科学审查后方可声称可比性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收净整机 | weighing_record | 序列号；型号；配置；验收净质量 M；秤编号；加注状态；包装皮重 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 逐台或有代表性配置批次 | 与工单相同制造时期 | 声明制造场址及配置 | 每台验收净质量 | 秤校准、皮重及验收记录 |
| `cp_fabrication` | fabrication | 各具体原子交换 | measured_order_record | 工单；序列号及配置；条目编号；牌号；领用；退回；库存变化；交换量；仪表单位；仪表状态；验收台数；废物去向；分配驱动量；实测排放质量 | 使用物项物料表质量和领退核对；公用工程使用校准分表；废物分类称重及移交凭据；启用燃烧排放行时使用可归属实测排放记录。保留进出口、成分及校准证据。 | 按各行 kg、MJ 或 m3 | 逐工单，按覆盖时期汇总 | 覆盖声明连续制造时期 | 机架及挖掘部件制造 | 可归属交换数量 / 验收机器数量 | 物料核对、电表校准、转移及排放记录 |
| `cp_joining` | joining | 各具体原子交换 | measured_order_record | 工单；序列号及配置；条目编号；牌号；领用；退回；库存变化；交换量；仪表单位；仪表状态；验收台数；废物去向；分配驱动量；实测排放质量 | 使用物项物料表质量和领退核对；公用工程使用校准分表；废物分类称重及移交凭据；启用燃烧排放行时使用可归属实测排放记录。保留进出口、成分及校准证据。 | 按各行 kg、MJ 或 m3 | 逐工单，按覆盖时期汇总 | 覆盖声明连续制造时期 | 机架焊接连接 | 可归属交换数量 / 验收机器数量 | 物料核对、电表校准、转移及排放记录 |
| `cp_finishing` | finishing | 各具体原子交换 | measured_order_record | 工单；序列号及配置；条目编号；牌号；领用；退回；库存变化；交换量；仪表单位；仪表状态；验收台数；废物去向；分配驱动量；实测排放质量 | 使用物项物料表质量和领退核对；公用工程使用校准分表；废物分类称重及移交凭据；启用燃烧排放行时使用可归属实测排放记录。保留进出口、成分及校准证据。 | 按各行 kg、MJ 或 m3 | 逐工单，按覆盖时期汇总 | 覆盖声明连续制造时期 | 表面处理与涂装 | 可归属交换数量 / 验收机器数量 | 物料核对、电表校准、转移及排放记录 |
| `cp_harvest` | harvest | 各具体原子交换 | measured_order_record | 工单；序列号及配置；条目编号；牌号；领用；退回；库存变化；交换量；仪表单位；仪表状态；验收台数；废物去向；分配驱动量；实测排放质量 | 使用物项物料表质量和领退核对；公用工程使用校准分表；废物分类称重及移交凭据；启用燃烧排放行时使用可归属实测排放记录。保留进出口、成分及校准证据。 | 按各行 kg、MJ 或 m3 | 逐工单，按覆盖时期汇总 | 覆盖声明连续制造时期 | 挖掘、分离及作物输送机构集成 | 可归属交换数量 / 验收机器数量 | 物料核对、电表校准、转移及排放记录 |
| `cp_integration` | integration | 各具体原子交换 | measured_order_record | 工单；序列号及配置；条目编号；牌号；领用；退回；库存变化；交换量；仪表单位；仪表状态；验收台数；废物去向；分配驱动量；实测排放质量 | 使用物项物料表质量和领退核对；公用工程使用校准分表；废物分类称重及移交凭据；启用燃烧排放行时使用可归属实测排放记录。保留进出口、成分及校准证据。 | 按各行 kg、MJ 或 m3 | 逐工单，按覆盖时期汇总 | 覆盖声明连续制造时期 | 液压与电气集成 | 可归属交换数量 / 验收机器数量 | 物料核对、电表校准、转移及排放记录 |
| `cp_chassis` | chassis | 各具体原子交换 | measured_order_record | 工单；序列号及配置；条目编号；牌号；领用；退回；库存变化；交换量；仪表单位；仪表状态；验收台数；废物去向；分配驱动量；实测排放质量 | 使用物项物料表质量和领退核对；公用工程使用校准分表；废物分类称重及移交凭据；启用燃烧排放行时使用可归属实测排放记录。保留进出口、成分及校准证据。 | 按各行 kg、MJ 或 m3 | 逐工单，按覆盖时期汇总 | 覆盖声明连续制造时期 | 底盘及自走式动力总成安装 | 可归属交换数量 / 验收机器数量 | 物料核对、电表校准、转移及排放记录 |
| `cp_acceptance` | acceptance | 各具体原子交换 | measured_order_record | 工单；序列号及配置；条目编号；牌号；领用；退回；库存变化；交换量；仪表单位；仪表状态；验收台数；废物去向；分配驱动量；实测排放质量 | 使用物项物料表质量和领退核对；公用工程使用校准分表；废物分类称重及移交凭据；启用燃烧排放行时使用可归属实测排放记录。保留进出口、成分及校准证据。 | 按各行 kg、MJ 或 m3 | 逐工单，按覆盖时期汇总 | 覆盖声明连续制造时期 | 总装及工厂验收 | 可归属交换数量 / 验收机器数量 | 物料核对、电表校准、转移及排放记录 |
| `cp_packing` | packing | 各具体原子交换 | measured_order_record | 工单；序列号及配置；条目编号；牌号；领用；退回；库存变化；交换量；仪表单位；仪表状态；验收台数；废物去向；分配驱动量；实测排放质量 | 使用物项物料表质量和领退核对；公用工程使用校准分表；废物分类称重及移交凭据；启用燃烧排放行时使用可归属实测排放记录。保留进出口、成分及校准证据。 | 按各行 kg、MJ 或 m3 | 逐工单，按覆盖时期汇总 | 覆盖声明连续制造时期 | 出厂防护包装 | 可归属交换数量 / 验收机器数量 | 物料核对、电表校准、转移及排放记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

每个同质配置工单核对领退料及实测库存变化，仅分配有记录共用负担，再将可归属交换总量除以验收台数得到 q_item。时期内拒收及返工负担仍归属于合格产出，披露废品及在制品库存变化。M 对应相同验收和加注状态。混合型号批次须分开，不得除以不兼容整机质量平均值。同一配置各台质量有差异时，用可归属交换总量除以验收净质量总量，并保留逐序列号证据。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_config` | all rows | 将每项投入及试验追溯至精确配置；核对供应商组件边界、作物入料及自走选装。 | 配置物料表及序列号 |
| `quality_balance` | material and utility records | 核对投入库存、净产出、废物及损失；解释不平衡量、仪表覆盖、密度及参考状态换算和不确定性。不采用无依据损失因子。 | 称量及库存台账、仪表记录 |
| `quality_coverage` | all processes | 覆盖声明场址和连续报告时期；披露起止、外包、缺失月份、遗漏及排除阶段。按实际配置记录建立 QA 限值；公开型号描述不提供强度范围。 | 工单覆盖、校准和完整性核对 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 要求完整交付挖掘配置、通过 cp_mass 获得正实测 M、空作物料仓及明确加注皮重；拒绝将载荷能力作整机质量及将不完整套件作输出。 |  |
| `validate_identity` | all inventory rows | 核验单一原子交换、正确方向类型、属性、单位、路线及公开身份；将送处理废水、水资源及排放污染物分开。完全链接数据集发布前须明确解决空 UUID。 |  |
| `validate_amount` | all inventory rows | 检查采集协议链接及对验收产出、库存和返工的归一化。要求独立仪表覆盖，不重复计供应商组件或内部转移负担。未知量为待证据，不作零。 |  |
| `validate_emissions` | combustion rows | 仅在存在实际工厂燃烧及可归属实测排放质量时启用；核验化石或生物来源及空气子介质。其他实测污染物按物质和介质单列，不以 NO 代 NO2 或 N2O。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明完整机械的前景制造过程数据集 |
| downstream_use | secondary_dataset；background_dataset，仅在合格审查后且披露上游覆盖 |
| allowed_use | 相同配置产品、声明门点、质量属性及生产时期的制造供应链建模 |
| excluded_use | 按公顷作物比较、寿命期收获效率、土壤影响推断、不完整机器、未经重新配置的其他作物入料、缺乏链接上游覆盖的完整摇篮到大门声明 |
| required_metadata | 精确产品配置及限定信息；地域、场址及时期；实测 M；供应商边界；工序路线；采集及归一化记录；背景链接；分配及排除 |
| required_quality_disclosure | 缺失身份及量值、测量不确定性、路线未启用行、实际物料表扩展、历史来源限制、外包及未链接上游阶段 |
| update_trigger | 配置、入料或动力总成变化；供应商组件边界或涂层变化；M 或加注状态修订；场址供电或报告时期变化；证据缺口解决 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `grimme-manufacturing-history` | handbook | [GRIMME: Traces of success](https://static.grimme.com/files/2015/07/31/86784c2fc98fae5ef67a744c1f46f4347ceae8d0.pdf) | 保留 2015 URL 版本，PDF 第 11 页，印刷第 20–21 页：预装到总装段落。仅为制造、连接、表面处理、筛链及工厂试验历史案例；不是现行普遍要求或定量范围。 |
| `grimme-multicrop` | literature | [The new EVO 280 MultiCrop](https://products.grimme.com/en/p/evo-280-gen2-multicrop) | 型号介绍及 MultiCrop 入料说明：模块化牵引挖掘配置、液压筛链和电气接口。未提供工厂交换量、净质量或寿命；料仓载荷不是整机质量。 |
| `ropa-tiger` | literature | [ROPA at PotatoEurope and Sugar Beet Expo 2026](https://www.ropa-maschinenbau.de/us/news/ropa-auf-der-potatoeurope-und-sugar-beet-expo-2026/) | 仅 ROPA Tiger 6S 段落：自走式甜菜挖掘配置、发动机及液压电气设备。邻接 Maus 清理装载机和 Taurus 运输描述不在此收获机范围；不推导清单因子。 |
