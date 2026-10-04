---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-keeping-mechanical-equipment
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 自动家禽干料输送分配设备制造

## 1. 范围与适用性

本 PCR 覆盖新制完整自动家禽干料输送与分配设备的前景制造，具体为配置明确的螺旋管道料盘喂料线及链式料槽喂料回路。不同配置分别记录。完整设备可按可追溯分段发运供后续场址装配，但须交付全部规定喂料、驱动、控制及设备支撑部件，披露工厂验收限制。部分备件发运不是参考产品。

语义边界比 CPC 44194 窄。排除饮水系统、产蛋箱和集蛋、清粪、舍内通风供暖、孵化育雏、屠宰加工机械及饲料粉碎混合。排除外部散装贮料塔、上游转运输送机和舍体建筑，除非另行定义设备参考包含它们；本参考起于喂料设备进料口。排除农场安装服务、禽群喂养、饲料生产消耗、禽体生长、死亡、粪便排放、农场清洗消毒、维护及报废。不声称每只禽生产率或寿命等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-keeping-mechanical-equipment |
| classification_refs | CPC 3.0 44194 家禽饲养机械；较窄自动干料设备范围；仅分类背景 |
| covered_products | 完整配置自动螺旋料盘线或链式料槽家禽干料回路 |
| excluded_products | 其他家禽饲养功能；不完整套件及备件；饲料制备；农场作业及安装服务 |
| representative_product | 一套关联工单及布局物料表的验收合格设备；实测 M，不设典型设备重量 |
| production_route | 实际厂内板带制造和聚合物成型、外购模块集成、控制、工厂验收及出厂 |
| market_state | 完整验收交付套装，明确进出口及支撑边界；排除饲料包装，场址调试另行披露 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明完整自动家禽干料分配设备 |
| How much | 1 kg 验收合格完整设备净质量；按台采集，使用实测 M 换算 |
| How well | 符合有记录配置完整性、尺寸、驱动、传感联锁及防护工厂验收要求；披露仅能场址进行的试验 |
| How long or cycle | 一次制造及工厂验收周期；不假定农场使用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 家禽饲养机械 `f1ec443d-7549-4c44-b840-802dc1d73c5c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商型号；工单序列号和配置版本；家禽干料功能；螺旋料盘或链式料槽结构；线回路长度及形状；管槽截面及镀层；喂料点数、盘几何材质及尼龙牌号；料斗延长段；螺旋或链节规格；驱动功率相数减速及完整性；转角轮及轴承；固定或悬挂支撑、绞盘钢丝绳防护；专用传感控制及布线；供应商总成边界；交付分段数量；净质量 M 和包装皮重；排除料塔建筑和共用系统；工厂验收及场址试验缺口；场址时期门点；外包和上游覆盖 |

每项限定信息在元数据或参考流备注声明。M 包括相同配置套装全部交付设备部件及设备支撑，排除运输支撑、包装和试验饲料。分段交付须保留整套校准净称量及逐项完整性记录；未经核实目录质量或容纳饲料量不是 M。管长、盘数、禽容量及电机 kW 不是质量换算因子。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `meter_conversion` | 公用工程和长度记录 | Mass; Net calorific value | kg; MJ | 使用各行参考属性。已核验能量单位组换算为 3.6 MJ/kWh。按长度记录的部件须用构造专用实测线密度换算；水体积须有实测密度及参考条件。流属性 meanValue 不是通用密度。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 设备制造场址接收外购指定板带树脂及成品部件 |
| starting_condition_role | 前景制造模块 |
| product_classification_scope | 仅配置自动家禽干料设备；较宽家禽机械参考按此范围限定 |
| recursive_input_rule | 同类别外购喂料模块按供应商完整性和属性只记录一次；仅计新增前景工作，排除重复组成采购 |
| upstream_dataset_requirement | 匹配供入金属表面状态、聚合物牌号、部件完整性、地域时期及参考属性；披露缺失供应商链接和经审查代理 |
| disclosure | 声明工厂接收到出厂门点、厂内及外包路线、运输覆盖、公用工程及缺失上游阶段。此前景模块本身不是完整摇篮到大门 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_actual` | all processes | 纳入可归属于交付配置的实际操作、拒收返工和工厂试验。外购总成跳过坯料成型操作；未链接供应商制造和外包仍为明确缺口。 |  |
| `boundary_complete` | all inventory rows | 核对完整配置物料表。将遗漏实际色料、脱模配方、工序润滑剂、紧固件、支腿、防栖钢丝、驱动油、防护、端子、试验饲料配方、包装和废物逐一增列具体原子卡。未知量不是零；本清单不作为缺席证明。 |  |
| `boundary_farm` | reference product | 分离制造和家禽作业、安装农场服务。饲料摄入、动物产量或农场粪便排放不属于此设备制造参考。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal` | 钣金制造与螺旋成形 | conditional | 报告场址实际实施这些操作。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `molding` | 聚合物部件成型 | conditional | 声明聚合物部件在前景内成型；外购成品跳过成型。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `mechanical` | 喂料分配机械装配 | required | 每套完整喂料设备配置。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `controls` | 专用控制与布线集成 | required | 每套自动喂料设备配置；须声明传感控制结构。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `acceptance` | 工厂验收与完整性核对 | required | 每套验收合格完整设备。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `packing` | 出厂包装 | conditional | 包装越过定义工厂出厂门。 | foreground | 一台验收合格配置机器，使用 M 归一化 |

实际金属制造和成型供入机械装配 → 专用控制 → 工厂验收 → 按条件出厂包装。外购成品在集成阶段进入。这些是设备制造操作，不是农场饲料输送。来源链接仅支持配置或候选技术；所有量及实际路线启用由链接前景协议确定。不从产品描述推定直接基础排放；将证实的制造排放按物质、环境介质及测量凭据逐一增列。

### 过程：钣金制造与螺旋成形 (`metal`)

按规格切割、冲孔和折弯外购镀锌板形成料斗或料槽；仅在厂内制造时将指定钢带成形为输送螺旋。不假定装配场址实施制管、镀锌、焊接或热处理。外购成品料斗、料槽和螺旋跳过对应坯料操作。送装配的内部零件不计新采购。

#### 输入

##### 产品流

###### 热浸锌碳钢板 (`galvanized_sheet`)

仅用于厂内料斗料槽制造的实际板材；记录钢牌号、厚度及单位面积锌镀层质量，投入质量包含锌。

- 选定流：热浸锌碳钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal`
- 来源：`roxell-pan`

###### 供喂料螺旋成形的未镀层冷轧碳钢带 (`carbon_strip`)

仅用于实际厂内螺旋制造；记录钢牌号、状态和尺寸，不假定上游热处理配方。

- 选定流：供喂料螺旋成形的未镀层冷轧碳钢带
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal`
- 来源：`roxell-pan`

###### 工厂进线处电网交流电 (`metal_power`)

仅计此阶段可归属工作，记录工厂进线电压、地域及提供者。纳入工厂空载试验电力，不计农场喂料作业。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal`
- 来源：`roxell-pan`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

仅用于离开过程的未处理洁净未镀层钢切割边角料；记录去向。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal`
- 来源：`roxell-pan`

###### 镀锌碳钢切割边角料 (`zinc_steel_offcut`)

仅限镀层板边角料；与未镀层钢带分开，记录锌含量和处理去向。

- 选定流：镀锌碳钢切割边角料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal`
- 来源：`roxell-pan`

### 过程：聚合物部件成型 (`molding`)

记录 PP 料盘本体及单独指定尼龙支撑、连接件的实际注塑、修边和调理。尼龙族证据不确定 PA6：PA6 行仅在实际牌号文件支持时使用。厂内配混时分别识别树脂、色料和添加剂配方，不将再生配方推定为原生树脂。Roxell 研发设备仅支持候选技术，不作为普遍量产路线。

#### 输入

##### 产品流

###### 聚丙烯 (`pp_resin`)

仅用于实际未填充 PP 聚合物原料；注明牌号及供应商树脂配方。实际色料或添加剂投入另列，不将成品盘作为树脂。

- 选定流：聚丙烯 `54802cfb-bd58-4f85-9ebf-9e0616529c1c`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_molding`
- 来源：`roxell-pan`

###### 未填充聚酰胺6成型粒料 (`pa6_resin`)

仅用实际文件确认的 PA6 牌号，不从尼龙或聚酰胺字样推定；实际实施时记录干燥及调理。

- 选定流：未填充聚酰胺6成型粒料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_molding`
- 来源：`roxell-pan`

###### 工艺用水 (`cooling_water`)

仅限作为冷却补水越过成型边界的新供处理工业水；内部循环不重复投入。记录数量及实际水规格。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_molding`
- 来源：`roxell-pan`

###### 工厂进线处电网交流电 (`molding_power`)

仅计此阶段可归属工作，记录工厂进线电压、地域及提供者。纳入工厂空载试验电力，不计农场喂料作业。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_molding`
- 来源：`roxell-pan`

#### 输出

##### 废物流

###### 聚丙烯废料 (`pp_purge`)

仅限扣除内部回料后分收并输出至机械回收的 PP 清机及修边料；混合聚合物或污染处置路线须另有明确废物。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_molding`
- 来源：`roxell-pan`

###### 分类聚酰胺6成型废料 (`pa6_scrap`)

仅限内部复用后实测输出的 PA6 修边清机料；识别实际水分、污染及去向。

- 选定流：分类聚酰胺6成型废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_molding`
- 来源：`roxell-pan`

###### 送处理的成型冷却水排污液 (`cooling_effluent`)

仅限冷却排污液实际移交处理；注明溶解处理剂及污染。不作水资源取用或直接河流排放。

- 选定流：送处理的成型冷却水排污液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_molding`
- 来源：`roxell-pan`

### 过程：喂料分配机械装配 (`mechanical`)

装配声明螺旋管道料盘布局或链式料槽转角轮回路。交付物料表保留进料斗、专用减速电机、支撑、悬挂及防护。线长、喂料点数、回路形状和支撑方法界定完整性，不作通用每只禽换算。外购完整子总成不重复其组成交换。

#### 输入

##### 产品流

###### 成品镀锌钢家禽饲料输送管 (`galvanized_tube`)

仅限实际管径、壁厚、接头及镀层的外购输送管；相同外购管不同时计板投入。

- 选定流：成品镀锌钢家禽饲料输送管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`roxell-pan`

###### 成品钢制家禽饲料输送螺旋 (`conveying_auger`)

仅用于与管道驱动匹配的外购螺旋；已由所记录钢带内部制造时省略采购。

- 选定流：成品钢制家禽饲料输送螺旋
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`bd-feeder`

###### 成品钢制家禽饲料输送链 (`feed_chain`)

仅用于安装链式回路，记录链节设计及实测长度质量；本交换不含螺旋。

- 选定流：成品钢制家禽饲料输送链
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`roxell-chain`

###### 成品镀锌钢家禽喂料进料斗 (`feed_hopper`)

仅用于外购完整料斗；记录上下段及延长段包含范围；内部板制造部件不再重复计量。

- 选定流：成品镀锌钢家禽喂料进料斗
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`bd-feeder`

###### 成品镀锌钢家禽喂料槽段 (`feed_trough`)

仅用于指定截面几何及质量的外购链式料槽；由前景板材成形时省略采购。

- 选定流：成品镀锌钢家禽喂料槽段
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`roxell-chain`

###### 成品聚丙烯家禽料盘本体 (`pan_body`)

仅用于单独外购 PP 盘本体，声明栅格铰接包含范围；内部成型时省略。含尼龙支撑的完整外购盘须按精确总成交换，不重复组成部件。

- 选定流：成品聚丙烯家禽料盘本体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`roxell-pan`

###### 成品尼龙家禽料盘顶部支撑 (`nylon_support`)

仅限供应商指定尼龙牌号的单独外购顶部支撑；避免重复盘总成已含支撑。

- 选定流：成品尼龙家禽料盘顶部支撑
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`roxell-pan`

###### 成品聚酰胺家禽料槽连接件 (`trough_connector`)

仅用于安装单独模塑连接件；声明实际聚合物牌号及称量质量，或记录其内部成型转入。

- 选定流：成品聚酰胺家禽料槽连接件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`roxell-chain`

###### 家禽喂料链转角轮轴承总成 (`corner_wheel`)

仅用于指定几何及所含轴承的安装链式转角单元；不规定所有其他部件必须或不得用润滑脂。

- 选定流：家禽喂料链转角轮轴承总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`roxell-chain`

###### 完整家禽喂料器电动减速电机总成 (`gear_motor`)

仅用于含减速齿轮及声明功率相数外壳完整性的外购专用电机；不进行功率质量换算。

- 选定流：完整家禽喂料器电动减速电机总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`bd-feeder`

###### 手动钢制喂料线悬挂绞盘 (`suspension_winch`)

仅用于交付安装的手动绞盘；固定支腿或电动绞盘须有自身精确行，不由本行表示。

- 选定流：手动钢制喂料线悬挂绞盘
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`bd-feeder`

###### 镀锌钢悬挂钢丝绳 (`suspension_rope`)

仅用于实际股绳结构镀锌钢丝绳，记录构造、直径及质量；裸单根钢丝不是钢丝绳。

- 选定流：镀锌钢悬挂钢丝绳
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`bd-feeder`

###### 钢螺钉 (`steel_screw`)

仅用于装配实际领用钢螺钉；实际使用的螺母、螺栓及其他紧固件须分别有精确交换。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`bd-feeder`

###### 工厂进线处电网交流电 (`mechanical_power`)

仅计此阶段可归属工作，记录工厂进线电压、地域及提供者。纳入工厂空载试验电力，不计农场喂料作业。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`bd-feeder`

#### 输出

### 过程：专用控制与布线集成 (`controls`)

安装声明专用料位传感器及喂料电机控制器、防护外壳和布线。服务其他系统的中央舍控器不得隐含纳入；声明增量设备边界及共用功能分配。按配置识别供电电压、相数、联锁和停机逻辑。

#### 输入

##### 产品流

###### 电容式家禽饲料料位传感器 (`feed_sensor`)

仅用于有文件支持的安装传感技术；其他传感原理须有自身行。声明外壳电缆包含范围。

- 选定流：电容式家禽饲料料位传感器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_controls`
- 来源：`bd-feeder`

###### 专用家禽喂料电机控制器模块 (`feeding_controller`)

仅用于实际硬件软件版本的单独专用控制器；外购驱动模块已含时省略。

- 选定流：专用家禽喂料电机控制器模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_controls`
- 来源：`bd-feeder`

###### 绝缘铜喂料设备控制电缆 (`control_cable`)

仅用于指定绝缘及质量的安装铜电缆；实测长度须用构造专用实测线密度换算。

- 选定流：绝缘铜喂料设备控制电缆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_controls`
- 来源：`bd-feeder`

###### 工厂进线处电网交流电 (`controls_power`)

仅计此阶段可归属工作，记录工厂进线电压、地域及提供者。纳入工厂空载试验电力，不计农场喂料作业。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_controls`
- 来源：`bd-feeder`

#### 输出

### 过程：工厂验收与完整性核对 (`acceptance`)

按配置布局核验交付数量、尺寸配合、驱动转动、传感停机联锁及声明防护，保留总成工厂试验凭据。记录须场址安装而未经工厂测试的功能；工厂验收不声称已投运农场性能。清除交付套装试验饲料。安装、建筑工程和禽群作业仍在门外。

#### 输入

##### 产品流

###### 工厂进线处电网交流电 (`acceptance_power`)

仅计此阶段可归属工作，记录工厂进线电压、地域及提供者。纳入工厂空载试验电力，不计农场喂料作业。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`bd-feeder`

#### 输出

##### 产品流

###### 家禽饲养机械 (`finished_machine`)

严格为 1 kg 验收合格配置完整喂料设备净质量。包含交付安装部件；饲料、包装和建筑结构排除。

- 选定流：家禽饲养机械 `f1ec443d-7549-4c44-b840-802dc1d73c5c`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`bd-feeder`

### 过程：出厂包装 (`packing`)

按聚合物及木材路线记录实际支撑和防护膜；设备 M 排除全部包装。其他箱、绑带或周转支撑须有自身材质交换及实测复用凭据。

#### 输入

##### 产品流

###### 窑干锯材（针叶材） (`timber_support`)

仅用于实际窑干针叶锯材运输支撑，记录树种路线；从 M 排除。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`roxell-chain`

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_film`)

仅用于越过出厂门的实际 LDPE 防护膜；记录聚合物厚度及质量；其他聚合物另列交换。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`roxell-chain`

#### 输出

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared operations | 按线结构和精确布局物料表分离工单。优先直接实测库存、成型周期及公用工程记录。共用操作采集并说明实际计量负荷或机时等工单因果驱动量，可归属总量按各工单驱动量除以完整覆盖驱动量总和分配。保留全部覆盖工单和在制库存；不用未经测量服务禽数作驱动量。 |  |
| `allocation_recovery` | regrind and waste | 核对内部树脂回料和金属退料，不将每次循环作为新采购。输出边角清机料记录实际质量及去向，不自动给予避免材料抵扣。单独识别可销售共产品，优先可行的物理工序分离，按采集基准审查剩余分配。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收净整套设备 | weighing_record | 型号；配置；序列号；验收净质量 M；布局物料表；分段交付；秤编号；包装皮重；完整性；验收编号 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 逐套或有代表性同配置批次 | 相同连续制造报告时期 | 声明工厂及同配置交付套装 | 每台验收净质量 | 校准称量、皮重、分段完整物料表及验收凭据 |
| `cp_metal` | metal | 各具体原子交换 | measured_order_record | 工单；序列号布局；精确物项牌号；供应商边界；领用；退回；库存变化；交换量；验收台数；部件质量；仪表单位；废物去向；共用驱动量 | 称量按图纸领退的板和带，核对合格部件质量及分收的镀层和未镀层边角料；计量切割成形工位。 | 按行 kg 或 MJ | 逐工单及批次 | 声明连续制造时期 | 钣金制造与螺旋成形 | 可归属交换数量 / 验收机器数量 | 部件称量、工单物料表、校准仪表及出口凭据 |
| `cp_molding` | molding | 各具体原子交换 | measured_order_record | 工单；序列号布局；精确物项牌号；供应商边界；领用；退回；库存变化；交换量；验收台数；部件质量；仪表单位；废物去向；共用驱动量 | 按树脂记录模具模腔、聚合物牌号、新树脂领用、内部回料、合格部件、清机修边废料及拒收质量；计量压机和干燥电力，只计新补处理冷却水及实际废液。 | 按行 kg 或 MJ | 逐工单及批次 | 声明连续制造时期 | 聚合物部件成型 | 可归属交换数量 / 验收机器数量 | 部件称量、工单物料表、校准仪表及出口凭据 |
| `cp_mechanical` | mechanical | 各具体原子交换 | measured_order_record | 工单；序列号布局；精确物项牌号；供应商边界；领用；退回；库存变化；交换量；验收台数；部件质量；仪表单位；废物去向；共用驱动量 | 将供应商模块边界、数量及实测零件净质量追溯布局物料表；分别核对内部转入和采购、紧固件领用及实际装配电力。 | 按行 kg 或 MJ | 逐工单及批次 | 声明连续制造时期 | 喂料分配机械装配 | 可归属交换数量 / 验收机器数量 | 部件称量、工单物料表、校准仪表及出口凭据 |
| `cp_controls` | controls | 各具体原子交换 | measured_order_record | 工单；序列号布局；精确物项牌号；供应商边界；领用；退回；库存变化；交换量；验收台数；部件质量；仪表单位；废物去向；共用驱动量 | 记录电子版本及供应商完整性、铜电缆构造和实际质量、端子连接器增列及电气测试记录；区分驱动内已含控制和单独供入控制。 | 按行 kg 或 MJ | 逐工单及批次 | 声明连续制造时期 | 专用控制与布线集成 | 可归属交换数量 / 验收机器数量 | 部件称量、工单物料表、校准仪表及出口凭据 |
| `cp_acceptance` | acceptance | 各具体原子交换 | measured_order_record | 工单；序列号布局；精确物项牌号；供应商边界；领用；退回；库存变化；交换量；验收台数；部件质量；仪表单位；废物去向；共用驱动量 | 采集序列号或工单关联的工厂试验结果及实测电力；用校准秤及包装皮重记录称量所有交付设备部件，核对精确布局和拒收返工记录。 | 按行 kg 或 MJ | 逐工单及批次 | 声明连续制造时期 | 工厂验收与完整性核对 | 可归属交换数量 / 验收机器数量 | 部件称量、工单物料表、校准仪表及出口凭据 |
| `cp_packing` | packing | 各具体原子交换 | measured_order_record | 工单；序列号布局；精确物项牌号；供应商边界；领用；退回；库存变化；交换量；验收台数；部件质量；仪表单位；废物去向；共用驱动量 | 逐出厂套装称量供入木材和 LDPE 膜并记录退回；区分设备支撑与运输支撑。 | 按行 kg 或 MJ | 逐工单及批次 | 声明连续制造时期 | 出厂包装 | 可归属交换数量 / 验收机器数量 | 部件称量、工单物料表、校准仪表及出口凭据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

各工单可归属量由领用减退回、实测库存变化、废物试验记录及有记录共用操作分配获得。除以验收完整套数采集 q_item，再用相同配置实测 M 归一化。时期内拒收和返工纳入验收产出负担并披露在制库存。同质配置内净质量变化时，用可归属交换总量除以验收净质量总量，保留序列号记录。分离不同布局，不在虚构标准线下混合长短线。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all rows | 追溯完整布局、喂料点数、交付分段、聚合物牌号、金属镀层和模块完整性。未解决供应商材料规格保留为缺口，不假定普遍配方。 | 图纸物料表和供应商规格 |
| `quality_balance` | stock and utilities | 核对金属、聚合物、外购总成、验收净质量、回料、拒收、废物和库存变化。解释不确定性及实测长度密度换算。记录驱动控制试验，不计农场电力。 | 称量、领退、仪表及废物移交 |
| `quality_coverage` | all processes | 声明场址和连续时期、提供者链接及外包门点。由实测记录建立配置专用 QA 限值；这些产品描述不提供制造强度或设备净质量范围。重要缺失量仍待采集。 | 工单覆盖、校准、边界和缺口清单 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 要求完整配置自动干料设备、正实测 M 及所有声明交付分段支撑。拒绝不完整备件及其他家禽饲养功能。披露未经执行的场址试验，设备净质量排除饲料包装。 |  |
| `validate_identity` | all inventory rows | 要求单一原子物理交换及匹配公开流身份、属性单位、聚合物牌号、金属表面状态和部件完整性。不以通用树脂替代成品零件、镀锌替代板坯、能量属性电缆替代电缆质量。完全链接数据集发布前解决缺失身份。 |  |
| `validate_collection` | all inventory rows | 核验链接协议、q_item/M 归一化、相同布局分母、库存返工分配及公用工程仪表覆盖。外购完整模块及内部成型制造转入不重复计量；所有实际遗漏原子投入产出均扩展清单。 |  |
| `validate_release` | measured environmental releases | 证实的制造排放按物质、必要时化石生物来源、接收介质子介质及实测数量或已核验适用因子逐一增列。送处理废水为技术圈出口；禽粪和农场粉尘在制造门外。相关未测排放不推定为零。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景配置自动家禽干料设备制造数据集 |
| downstream_use | secondary_dataset；background_dataset，合格审查后并明确上游覆盖 |
| allowed_use | 与布局、聚合物金属规格、模块完整性、场址时期和门点匹配的供应链制造 |
| excluded_use | 每只禽饲料产量比较；安装舍内服务等效；饮水清粪集蛋气候孵化代理；缺乏供应商链接的完整摇篮到大门 |
| required_metadata | 参考限定信息；实测 M；布局分段交付完整性；供应商材料牌号及边界；工厂场址试验凭据；实际路线、时期门点、采集分配及背景链接 |
| required_quality_disclosure | 缺失身份量值、测量不确定性、未启用路线、未经试验场址功能、来源日期范围、外包及上游缺口 |
| update_trigger | 布局喂料点数、驱动控制结构、聚合物牌号或金属镀层、模块完整性、实测 M、场址供给变化或证据缺口解决 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `bd-feeder` | handbook | [AugerMatic — The feeding system for successful poultry growing](https://cdn.bigdutchman.com/fileadmin/content/poultry/products/en/poultry-growing-Augermatic-Big-Dutchman-en.pdf) | en 11/2015，PDF 第 2 页部件清单图：料斗、管螺旋、盘、驱动传感及悬挂。仅历史配置案例；不推定当前能力、农场效益、整机净重或制造量。 |
| `roxell-pan` | handbook | [Boozzter technical information](https://www.roxell.com/sites/default/files/roxell/TD_Boozzter_EN.pdf) | 未标日期表，PDF 创建元数据 2025-02-10；PDF 第 1 页 Technical info 材料行识别 PP 盘、尼龙支撑及镀锌钢管。未提供牌号配方、制造量和完整设备质量。饲料容纳量及禽体重量不是设备质量。 |
| `roxell-chain` | literature | [Fortena chain feeding system for broiler breeders](https://www.roxell.com/fortena-chain-feeding-system) | 具名管理支撑、料槽连接件和转角轮段落：独立链式料槽结构、聚酰胺连接件、轴承转角单元和控制支撑选装。产品案例，不作通用 PA6 牌号、维护规定或制造范围。 |
| `roxell-factory` | literature | [Innovation, a cornerstone of Roxell’s corporate culture](https://www.roxell.com/innovation) | Infrastructure for innovation：研发设施中的注塑和模具。仅候选技术；不声称必需商业成型、机器能耗强度或行业生产配方。 |
