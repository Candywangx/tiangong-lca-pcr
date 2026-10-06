---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.pedal-bicycle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 接头钎焊钢制人力自行车制造

## 1. 范围与适用性

新制完整非折叠人力两轮自行车，具有接头钎焊合金钢车架、刚性钢制前叉、变速链传动、拉索轮圈制动、带内胎充气开口外胎。声明实际公路日常车型几何车轮部件配置。无电动内燃推进。制造前景从声明坯料或接收成品总成开始，止于配置工厂验收保护。仅为 CPC 49921 较窄产品工艺路线，不覆盖全部非机动脚踏车。

排除电助力辅助马达车摩托车、三轮双人卧式折叠及货运专用多轮车、玩具人行道专用设计、场地竞赛固定齿轮车、避震盘式制动车、焊接铝复合钛及其他未声明车架路线、仅车架套件、旧修再制造品、骑行运输服务骑乘者食物代谢路线基础设施使用维修报废。

Mercian 提供接头钎焊涂装案例；Rivendell 提供铬钼接头车架叉肩前叉轮圈制动配置背景。案例不作普遍供应商合金燃料涂料配方标称自行车质量。CPSC 指引具有美国市场范围产品例外，不作普遍生产试验程序。科学待审。未核验匹配上游链接时，接收到验收前景不是完整从摇篮到厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.pedal-bicycle |
| classification_refs | CPC 3.0 49921；较窄接头钎焊钢制人力自行车路线；仅背景 |
| covered_products | 新制完整非折叠人力两轮自行车，具有接头钎焊合金钢车架、刚性钢制前叉、变速链传动、拉索轮圈制动、带内胎充气开口外胎。声明实际公路日常车型几何车轮部件配置。无电动内燃推进。制造前景从声明坯料或接收成品总成开始，止于配置工厂验收保护。仅为 CPC 49921 较窄产品工艺路线，不覆盖全部非机动脚踏车。 |
| excluded_products | 排除电助力辅助马达车摩托车、三轮双人卧式折叠及货运专用多轮车、玩具人行道专用设计、场地竞赛固定齿轮车、避震盘式制动车、焊接铝复合钛及其他未声明车架路线、仅车架套件、旧修再制造品、骑行运输服务骑乘者食物代谢路线基础设施使用维修报废。 |
| representative_product | 一台验收完整配置自行车具有正实测 M |
| production_route | 条件车架前叉制造涂装；机械装配净称重验收；条件包装 |
| market_state | 声明工厂门点新制完整验收自行车 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一台完整配置人力自行车 |
| How much | 1 kg 验收完整自行车净质量；按台采集使用实测 M 归一化 |
| How well | 声明机械安全配置验收；等质量不代表自行车性能等效 |
| How long or cycle | 一次制造验收周期；无距离寿命人公里服务单位 |
| reference_flow_link | finished_bicycle |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整接头钎焊钢制人力自行车 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号序列号；车架尺寸几何钢牌号管尺寸接头刚性前叉规格及外购厂内范围；涂装配方路线；车轮轮圈花鼓完整性充气外胎内胎规格实测充气状态；齿比实际链曲柄飞轮变速操纵；拉索轮圈制动配置；转向车座脚踏全部整体反光护罩附件安装润滑；实际市场型式生产验收计划；同序列号校准完整净质量 M kg 实测皮重整体拆卸件；制造门点场址时期供应完整性分配上游链接不确定性排除 |

M 含安装脚踏充气轮胎内胎所附整体护罩反光器附件实际安装润滑。排除包装骑乘者负载夹具松散工具备件。交付暂拆整体件须实测核对同序列号一次。不含脚踏的目录质量、车架质量、运输毛重或承载能力不能建立 M。具体数据集必须声明所需限定；缺失限定即参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 使用适用校准秤实测验收自行车，扣实测夹具皮重，具受控安装部件表序列号放行。记录脚踏安装轮胎压力状态润滑全部交付整体件。核对部件记录与整车计量、不确定性秤分辨率日期操作者及正净 M。拆卸整体件须实测记录；目录估值或单独部件和不替代实体称重。 |
| `energy_units` | 各电力行 | Net calorific value | MJ | 使用核验能量单位组换算 1 kWh = 3.6 MJ。保留实际供电电压路线，区别骑行功质量燃料能量；不提供热值密度因子。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定钢坯料及接收成品自行车部件 |
| starting_condition_role | 声明接收到验收自行车制造前景 |
| product_classification_scope | 新制完整非折叠人力两轮自行车，具有接头钎焊合金钢车架、刚性钢制前叉、变速链传动、拉索轮圈制动、带内胎充气开口外胎。声明实际公路日常车型几何车轮部件配置。无电动内燃推进。制造前景从声明坯料或接收成品总成开始，止于配置工厂验收保护。仅为 CPC 49921 较窄产品工艺路线，不覆盖全部非机动脚踏车。 |
| recursive_input_rule | 不将同成品自行车作自身制造投入。外购成品车架前叉完整车轮替代所含坯料件加工。厂内阶段具有独立实测交换 |
| upstream_dataset_requirement | 匹配实际钢牌号管状态部件规格供应完整性涂装场址时期供应商参考属性单位；披露不匹配缺失上游链接 |
| disclosure | 制造者型号序列号；车架尺寸几何钢牌号管尺寸接头刚性前叉规格及外购厂内范围；涂装配方路线；车轮轮圈花鼓完整性充气外胎内胎规格实测充气状态；齿比实际链曲柄飞轮变速操纵；拉索轮圈制动配置；转向车座脚踏全部整体反光护罩附件安装润滑；实际市场型式生产验收计划；同序列号校准完整净质量 M kg 实测皮重整体拆卸件；制造门点场址时期供应完整性分配上游链接不确定性排除 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | 全部过程 | 包含实际制造涂装装配可归属返工工厂验收保护。外包涂装试验服务以实际范围单位归属；不重复供应商所含过程。骑行运输服务报废在制造门点外。 |  |
| `boundary_completeness` | 物料表交付自行车 | 记录全部实际整体件供应完整性。补入候选卡未含的实际变速拉索外套制动块紧固保持件贴花护罩附件。完整车轮投入排除独立供应外胎内胎飞轮组，除非明确包含；如包含则删除相应独立卡。仅未由所建制造阶段自产时使用接收车架前叉。实际加热载体涂装物种排放须单独有证据交换；候选卡不是普遍穷尽配方。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 车架与刚性前叉制造 | conditional | 仅实际厂内管切割接头钎焊校形；外购成品车架前叉替代这些交换 | foreground | 一台验收配置完整自行车，使用 M 归一化 |
| `finishing` | 车架表面准备与涂装 | conditional | 仅实际厂内清洗涂装固化；排除供应商所含涂装 | foreground | 一台验收配置完整自行车，使用 M 归一化 |
| `assembly` | 自行车机械装配与调整 | required | 每台声明完整自行车；各卡以实际接收总成范围传动配置为准 | foreground | 一台验收配置完整自行车，使用 M 归一化 |
| `acceptance` | 完整配置净质量与安全验收 | required | 每台验收完整自行车 | foreground | 一台验收配置完整自行车，使用 M 归一化 |
| `packing` | 交付保护 | conditional | 仅制造门点实际包装 | foreground | 一台验收配置完整自行车，使用 M 归一化 |

条件制造涂装供装配；完整自行车验收后条件保护。共用资源一次归属。必需阶段的各行仍须实际配置化学适用性。不预设排放强制。

### 过程：车架与刚性前叉制造 (`fabrication`)

记录精确钢牌号管形接头图纸、钎料助焊剂配方、实际热源净领用。Mercian 记录特定明炉接头钎焊路线，不作普遍燃料合金。按实测证据逐一补入实际热载体物种排放；不虚构钎焊燃料需求。

#### 输入

##### 产品流

###### 合金钢自行车车架管 (`steel_tube`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：合金钢自行车车架管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`mercian-craft`

###### 钢制自行车头管接头 (`head_lug`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：钢制自行车头管接头
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`mercian-craft`

###### 钢制自行车前叉叉肩 (`fork_crown`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：钢制自行车前叉叉肩
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`mercian-craft`

###### 钢制自行车后叉端片 (`rear_dropout`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：钢制自行车后叉端片
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`mercian-craft`

###### 铜锌黄铜钎焊棒 (`brass_rod`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：铜锌黄铜钎焊棒
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`mercian-craft`

###### 硼酸盐氟化物钎焊助焊剂 (`brazing_flux`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：硼酸盐氟化物钎焊助焊剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`mercian-craft`

###### 工厂进线交流电 (`fabrication_electricity`)

仅实际可归属仪表 kWh 换 MJ；无骑行能量或铭牌功率估算。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`mercian-craft`

#### 输出

##### 废物流

###### 合金钢管边角废料 (`steel_offcut`)

仅实际实测制造废物转移；不默认为共产品或避免钢材抵扣。

- 选定流：合金钢管边角废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`mercian-craft`

### 过程：车架表面准备与涂装 (`finishing`)

按安全数据单声明实际底漆面漆配方喷丸磨料加热路线采集法。候选醇酸卡仅实际配方确认时适用。制造商烘漆案例不证明普遍醇酸化学溶剂物种；分别补入实际清漆磨料排放。

#### 输入

##### 产品流

###### 醇酸蚀刻底漆涂料 (`primer`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：醇酸蚀刻底漆涂料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

###### 醇酸烘烤面漆涂料 (`enamel`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：醇酸烘烤面漆涂料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

###### 工艺用水 (`cleaning_water`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

###### 无水异丙醇清洗溶剂 (`isopropanol`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：无水异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

###### 非织造聚酯清洁擦布 (`cleaning_wipe`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：非织造聚酯清洁擦布
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

###### 工厂进线交流电 (`finishing_electricity`)

仅实际可归属仪表 kWh 换 MJ；无骑行能量或铭牌功率估算。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

#### 输出

##### 废物流

###### 异丙醇沾染聚酯擦布废物 (`spent_wipe`)

仅实际沾染擦布目的质量；保留溶剂与实际空气释放分开。

- 选定流：异丙醇沾染聚酯擦布废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

###### 钢制车架清洗水性废液 (`cleaning_effluent`)

仅实际向处理转移废液，实测组成固体；不是自然水或基础水排放。

- 选定流：钢制车架清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

#### 输出

##### 基本流

###### 异丙醇 (`isopropanol_air`)

仅实际有证据 IPA 清洗排放，CAS 67-63-0、未指定空气即时；用实测物种溶剂平衡或核验排放计量，不用全部溶剂领用。无实际路线须有证据为 not_applicable；室内或长期排放须另身份。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`mercian-craft`

### 过程：自行车机械装配与调整 (`assembly`)

安装车架前叉转向车轮充气轮胎内胎脚踏链传动拉索轮圈制动座椅。完整外购车轮曲柄组只计一次，不再计所含轮圈花鼓辐条或曲柄链盘。按实际部件说明核查车轮正度轮胎就位校形轴承预紧链长变速限位拉索路由制动调整。

#### 输入

##### 产品流

###### 成品接头钎焊钢制自行车车架 (`received_frame`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：成品接头钎焊钢制自行车车架
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 成品刚性钢制自行车前叉 (`received_fork`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：成品刚性钢制自行车前叉
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车车头碗组轴承总成 (`headset`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车车头碗组轴承总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车车把立 (`stem`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车车把立
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 铝制自行车车把 (`handlebar`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：铝制自行车车把
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 橡胶自行车把套 (`grip`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：橡胶自行车把套
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 铝制自行车座杆 (`seatpost`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：铝制自行车座杆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 完整自行车车座 (`saddle`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：完整自行车车座
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 完整铝轮圈自行车车轮 (`wheel`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：完整铝轮圈自行车车轮
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 充气自行车外胎 (`pneumatic_tyre`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：充气自行车外胎
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 丁基橡胶自行车内胎 (`inner_tube`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：丁基橡胶自行车内胎
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 尼龙自行车轮圈衬带 (`rim_tape`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：尼龙自行车轮圈衬带
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车中轴轴承总成 (`bottom_bracket`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车中轴轴承总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 含链盘的自行车曲柄组 (`crankset`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：含链盘的自行车曲柄组
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 完整自行车脚踏 (`pedal`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：完整自行车脚踏
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车钢制滚子链 (`roller_chain`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车钢制滚子链
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车后飞轮组 (`cassette`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车后飞轮组
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车后变速器 (`rear_derailleur`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车后变速器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车变速操纵器 (`gear_shifter`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车变速操纵器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 拉索驱动自行车轮圈制动夹器 (`rim_brake`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：拉索驱动自行车轮圈制动夹器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车制动手柄 (`brake_lever`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车制动手柄
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 不锈钢自行车制动拉索 (`brake_cable`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：不锈钢自行车制动拉索
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车制动拉索外套管 (`brake_housing`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车制动拉索外套管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车无源反光器 (`reflector`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车无源反光器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 锂皂润滑脂 (`bearing_grease`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：锂皂润滑脂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 自行车链条用矿物润滑油 (`chain_oil`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：自行车链条用矿物润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

###### 工厂进线交流电 (`assembly_electricity`)

仅实际可归属仪表 kWh 换 MJ；无骑行能量或铭牌功率估算。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`rivendell-sam`

### 过程：完整配置净质量与安全验收 (`acceptance`)

记录完整配置机械外观验收同序列号校准实体净称重放行。区分生产检查与破坏法规型式鉴定。CPSC 要求适用于其美国市场范围产品；其他市场依实际市场部件验收准则。不提供普遍试验载荷寿命通过阈值。

#### 输入

##### 产品流

###### 工厂进线交流电 (`acceptance_electricity`)

仅实际可归属仪表 kWh 换 MJ；无骑行能量或铭牌功率估算。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`cpsc-bicycle`

#### 输出

##### 产品流

###### 验收完整接头钎焊钢制人力自行车 (`finished_bicycle`)

完整同配置自行车含整体脚踏声明充气轮胎状态，排除包装骑乘者松散备件。正实测 M 与 cp_mass 建立按 kg 输出；不假定目录质量。

- 选定流：验收完整接头钎焊钢制人力自行车
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`cpsc-bicycle`

### 过程：交付保护 (`packing`)

分别实测各包装件。交付拆卸整体脚踏前轮车把不改变验收完整自行车 M：实测核对同序列号这些部件只计一次。包装在产品 M 外。

#### 输入

##### 产品流

###### 瓦楞纸板箱 (`carton`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD） (`protective_film`)

仅计实际安装消耗且声明规格净领退记录的该项；排除完整外购总成所含件以防重复。

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

###### 工厂进线交流电 (`packing_electricity`)

仅实际可归属仪表 kWh 换 MJ；无骑行能量或铭牌功率估算。

- 选定流：工厂进线交流电
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

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | 共用工厂资源 | 优先直接归属配置净领用仪表电力涂装批装配验收工单含返工。不可分资源须实测因果设备夹具占用实际负荷或其他记录物理驱动量：份额 = 工单驱动量 / 覆盖工单驱动量之和。保留完整时期分母。等自行车数量目录质量涂色数量承载能力不是默认分配。 |  |
| `allocation_tests` | 型式鉴定生产验收 | 区分破坏鉴定原型与可售验收自行车。逐台生产检查直接归属；共用型式负担须记录实际产品适用因果分配替代敏感性。排除独立研发；破坏试验件质量不入验收输出。采购试验服务及所含电力不可重复表示同资源。 | `cpsc-bicycle` |
| `allocation_recovery` | 边角不合格返工 | 记录实际废物与可售共产品目的时期质量平衡。内部返工随验收制造。可回收性本身不支持避免原生钢处置替代抵扣。实际共产品分配须声明方法因果经济原件敏感性。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | 验收实体称重记录 | 型号；配置；序列号；验收净质量 M；安装物料表；整车秤读数；夹具皮重；脚踏充气轮胎状态；拆卸整体件；校准不确定性；签字放行 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 逐验收台 | 实际制造验收时期 | 声明自行车验收门点 | 每台验收净质量 | 实际校准实体称重实测皮重配置整体件核对 |
| `cp_fabrication` | `fabrication` | inventory | 实际阶段交换记录 | 序列号配置；精确交换规格；净领退库存；部件包含；kg；仪表 kWh；废物目的；排放方法；共用驱动量；试验阶段 | 读取切割钎焊校形工单供应规格净领用实际热量仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始规格校准清单领用仪表验收转移记录 |
| `cp_finishing` | `finishing` | inventory | 实际阶段交换记录 | 序列号配置；精确交换规格；净领退库存；部件包含；kg；仪表 kWh；废物目的；排放方法；共用驱动量；试验阶段 | 读取涂装批安全数据单清洗固化工单水能仪表溶剂平衡废物转移原件 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始规格校准清单领用仪表验收转移记录 |
| `cp_assembly` | `assembly` | inventory | 实际阶段交换记录 | 序列号配置；精确交换规格；净领退库存；部件包含；kg；仪表 kWh；废物目的；排放方法；共用驱动量；试验阶段 | 读取序列号物料表部件供应完整性净领退调整工单仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始规格校准清单领用仪表验收转移记录 |
| `cp_acceptance` | `acceptance` | inventory | 实际阶段交换记录 | 序列号配置；精确交换规格；净领退库存；部件包含；kg；仪表 kWh；废物目的；排放方法；共用驱动量；试验阶段 | 读取实际市场型式计划生产验收报告序列号放行秤校准净称重原件 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始规格校准清单领用仪表验收转移记录 |
| `cp_packing` | `packing` | inventory | 实际阶段交换记录 | 序列号配置；精确交换规格；净领退库存；部件包含；kg；仪表 kWh；废物目的；排放方法；共用驱动量；试验阶段 | 读取实际包装清单领退拆卸整体件核对 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始规格校准清单领用仪表验收转移记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 依 mass_record_provenance 使用当前同序列号实体称重。含安装脚踏充气润滑状态实测拆卸整体件；排除包装骑乘负载夹具。实际秤校准不确定性整车物料核对为前提。目录整车车架质量运输毛重假定部件和不能替代 M。缺原始计量须科学数据审查。 | 实际实体称重校准物料放行原件 |
| `quality_atomic` | 每一交换 | 核验一个物理配方身份化学浓度供应路线完整性。钢接头区别焊丝、成品前叉区别泛自行车件、矿物油区别 PAO、无水 IPA 区别消毒剂。保留实际公开参考属性单位物种介质；未决身份保留具体行原因。 | 实际图纸供应规格安全数据单收货核验流记录 |
| `quality_acceptance` | cp_acceptance | 声明实际市场产品例外装配说明序列号生产检查准则。记录机械校形转向车轮保持正度轮胎就位链变速运动拉索路由轮圈制动座椅脚踏必需护罩反光器。分开鉴定破坏试验；CPSC 美国指引不是普遍试验程序全球认证。记录失败可归属返工。 | 实际市场验收计划部件说明原始报告放行；CPSC 仅适用美国背景 |
| `quality_balance` | 材料水溶剂电力 | 核对时期投入所含实测退回库存不合格废物实际实测释放。技术工艺水废液处理转移自然取水分开。IPA 空气排放须化学即时未指定空气介质及闭合物种平衡或实测释放；溶剂领用不是排放。记录实际热源，数据完成前逐一补燃料热磨料涂料物种交换。不推断普遍燃料加热强度必然排放。 | 原始批规格安全数据单库存材料溶剂平衡仪表转移 |
| `quality_coverage` | 数据集上游链接 | 区分实测计算缺失证实 not_applicable。审计候选卡外全部实际硬件前景缺口供应边界不匹配未决身份分配不确定性。完整从摇篮到厂门覆盖须核验匹配上游链接；结构有限计量通过不建立实际数据安全方法学批准。 | 实际完整物料过程图透明数据缺口登记 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考验收输出 | 须正当前同配置实测 M 及 cp_mass。精确参考产品名等于 finished_bicycle；UUID 空时在 unresolved_flow_identities 登记该精确行。整体脚踏轮胎交付拆卸件核对一次；无包装骑乘者质量。 |  |
| `validate_basis` | 所有清单行 | 核验双语生成投影有序相同小写行规则协议标识、验收台 q_item、M kg、明确 normalize_mass 及一致分母。公开数量面积能量属性不得改写 Mass。 |  |
| `validate_boundary` | 过程图物料表 | 审计接收自产车架前叉供应所含涂装件、整车轮曲柄组包含、外包直接资源、验收鉴定、全部实际遗漏交换排放证据。缺实际工厂记录或未决适用须审查；候选卡本身不建立完整性。 |  |
| `validate_use` | 数据集用途 | 披露精确型号配置制造门点质量证据数据缺口分配上游匹配审查状态。等质量不是等骑行性能寿命运输服务。有限检查不是科学批准发表市场安全认证。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际数据完成审查后为 secondary_dataset 和 background_dataset |
| downstream_use | 配置自行车制造投入独立边界自行车生命周期模型 |
| allowed_use | 按 kg 比较匹配制造门点配置上游链接；披露性能质量状态差异 |
| excluded_use | 排除电助力辅助马达车摩托车、三轮双人卧式折叠及货运专用多轮车、玩具人行道专用设计、场地竞赛固定齿轮车、避震盘式制动车、焊接铝复合钛及其他未声明车架路线、仅车架套件、旧修再制造品、骑行运输服务骑乘者食物代谢路线基础设施使用维修报废。 |
| required_metadata | 制造者型号序列号；车架尺寸几何钢牌号管尺寸接头刚性前叉规格及外购厂内范围；涂装配方路线；车轮轮圈花鼓完整性充气外胎内胎规格实测充气状态；齿比实际链曲柄飞轮变速操纵；拉索轮圈制动配置；转向车座脚踏全部整体反光护罩附件安装润滑；实际市场型式生产验收计划；同序列号校准完整净质量 M kg 实测皮重整体拆卸件；制造门点场址时期供应完整性分配上游链接不确定性排除 |
| required_quality_disclosure | 实测计算缺失状态实际质量验收出处遗漏未决身份范围分配不确定性；候选科学待审 |
| update_trigger | 实际钢车架接合车轮制动传动配置供应完整性涂装路线质量协议市场验收工厂上游数据变化 |


## 11. 数据来源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `mercian-craft` | literature | [Mercian Our Craft](https://www.merciancycles.co.uk/our-craft) | Skilled/Traditional/Bespoke、Precision Brazing by Hand、Final Frame Details 及烘漆章节：实际厂商斜切校形定位接头钎焊喷丸分层涂漆固化案例。不采用普遍燃料合金涂料化学固定固化时间数字资源寿命产品质量。以实际前景规格为准。 |
| `rivendell-sam` | literature | [Rivendell Sam Hillborne 2025](https://www.rivbike.com/products/frame-sam-hillborne-2025) | FRAME、Frame Specification、BRAKES、LOOKS GOOD TO US：铬钼车架管轮圈制动兼容接头叉肩前叉。车架套件页面仅配置背景，不作完整自行车物料表质量验收证据。不将车轮尺寸几何负载价格骑乘限制寿命作 PCR 约束。 |
| `cpsc-bicycle` | official_guidance | [CPSC Bicycles FAQ](https://www.cpsc.gov/FAQ/Bicycles) | 目的定义例外一般试验装配制动转向脚踏链轮胎车轮花鼓车架前叉座椅反光说明章节：美国法规适用性及售卖装配状态。使用实际适用市场准则产品例外；不把数字阈值转成普遍生产质量净 M 方法寿命。本方法不是认证。 |
