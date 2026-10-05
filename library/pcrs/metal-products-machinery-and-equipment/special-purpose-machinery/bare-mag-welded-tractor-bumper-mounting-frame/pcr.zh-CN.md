---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bare-mag-welded-tractor-bumper-mounting-frame
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 裸MAG焊接折弯钢制拖拉机保险杠安装框架制造

## 1. 范围与适用性

本候选稿覆盖指定农业拖拉机及保险杠模块的完整裸焊接折弯板安装框架组件，由所收未涂层非合金热轧钢板经氮气辅助激光下料折弯、外购82体积%氩18体积%CO2预混气实芯焊丝MAG制造。OEM图纸须识别拖拉机侧连接及保险杠侧支承接口；不是通用建筑支承框架。GMI列举拖拉机保险杠支架农业框架且提供这些工艺选项。选定组合路线裸移交状态须真实工单，不推断所有制造商产品遵循本路线。

通用下料成形焊接技术复用金属结构件方法。实质补充是双侧机械专用接口控制、拖拉机保险杠零件图纸兼容、焊缝图追溯完整配置组件放行同一配置净质量，而非仅为CPC44199新建身份。排除保险杠本体完整拖拉机农具建筑脚手架其他农业零件铸锻仅机加工构件钢管齿轮传动维修田间安装使用下游永久涂层其他切割连接气体路线。科学审查待完成；声明门点为所收钢板至验收裸焊接件，不是完整摇篮到工厂门清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bare-mag-welded-tractor-bumper-mounting-frame |
| classification_refs | CPC3.0 44199，更窄；不声称已接受映射 |
| covered_products | 同一声明OEM图纸接口配置的完整裸折弯板MAG焊接拖拉机保险杠安装框架组件 |
| excluded_products | 通用金属结构产品其他机械零件完整保险杠拖拉机钢管铸锻路线永久涂层田间使用维修 |
| representative_product | 证据选择GMI拖拉机保险杠支架框架供应中焊接安装框架子集；须真实同图纸工单，不虚构型号 |
| production_route | 收钢板→氮辅助激光下料边缘准备→折弯板件→夹具受控实芯MAG82/18装配→焊缝接口几何检验→完整净称重裸放行 |
| market_state | 涂装整机集成之前移交的新造验收裸焊接安装组件；全部图纸所需焊接板件完整 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收裸MAG焊接折弯钢制拖拉机保险杠安装框架 |
| How much | 1 kg净验收完整安装框架组件 |
| How well | 真实OEM图纸物料双侧专用连接接口焊缝验收原件；无普遍承载能力孔位公差 |
| How long or cycle | 一个制造验收周期；不假定拖拉机使用作物产量寿命使用阶段功能 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收裸MAG焊接折弯钢制拖拉机保险杠安装框架 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 指定农业拖拉机型号保险杠模块；OEM零件号图纸版次物料；真实受控图纸定义拖拉机侧保险杠侧连接孔型安装孔位基准载荷间隙接口；全部交付焊接板件、排除散装紧固件保险杠及未涂装裸状态；所收非合金热轧无涂层钢板牌号厚度证书；真实氮气下料折弯程序；批准锰硅实芯焊丝MAG工艺夹具焊缝图资格与真实82体积%氩18体积%CO2供应证书；尺寸焊缝验收准则原件；同一图纸配置完整净实测M kg及校准秤皮重不确定性；场址期间数量返工分配真实供应关联实测条件释放介质碳来源 |

全部限定信息须在元数据可寻源原件声明。等质量不等于接口兼容保险杠承载能力疲劳寿命。图纸版次焊接板件钢板厚度移交完成度变化即不同配置，不按平均可互换件处理。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集 M。 |
| `physical_mass` | all kg inventory rows | Mass | kg | 每项净交换独测领退库存变化。气体体积转质量须真实温压组成实测核实换算；体积混合百分比不是质量分数，不允许猜密度。 |
| `oil_volume` | hydraulic_oil | Volume | m3 | 按记录温度用校准计量器测净补换油；1 L =0.001 m3。独立质量核对须真实批次密度，不改写公开属性不假定值。 |
| `electric_energy` | cutting_electricity; forming_electricity; welding_electricity; release_electricity | Net calorific value | MJ | 计量真实可归属交流电；1 kWh =3.6 MJ。独立声明供应电压交付损失抽排支持归属。 |
| `mass_configuration` | cp_mass | Mass | kg | 按同一OEM零件号图纸版次物料称重完整验收裸焊接框架，含全部连接板件保留焊缝金属。排除拖拉机保险杠本体散装紧固件夹具运输架可移除包装；不以通用整车重量理论钢体积替代。 |
| `mass_original` | cp_mass | Mass | kg | 保留同配置校准秤读数零皮适合实际组件量程不确定性验收关联。核对收板边角保留焊丝捕集残渣报废返工件；解释失衡，不造闭合容差。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造工厂所收未涂层热轧非合金钢板独立供应消耗品 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | 指定拖拉机保险杠安装框架组件子集，不是全部44199机械零件 |
| recursive_input_rule | 外购完成框架是独立供应产品不是钢板输入；不重建上游炼钢轧制不重复内部下料折弯中间件 |
| upstream_dataset_requirement | 任何扩展供应链声明前关联真实兼容钢板焊丝供应气电力消耗品废物处理数据集 |
| disclosure | 仅收钢板至验收完整裸焊件。披露真实场内外包范围支持负荷供应状态缺关联 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | dataset | 纳入真实干式氮激光边缘准备折弯板件MAG组对焊接抽排返工、受控接口焊缝检验净称重。裸放行截止永久涂层农业整机集成之前。纳入真实外包操作须明确数据集不重复本地负荷。 | `gmi-weldments`; `gsm-agriculture` |
| `boundary_species` | all inventory rows | 不从电动制造推断燃料水废水燃烧排放必需空气释放量。条件Mn化石CO2须真实物质平衡证据；捕集粉尘是废物不是大气释放。实际场址若建立其他公用物料释放，量值覆盖完整前增列化学明确交换介质子介质实测数量。 | `hse-welding`; `hse-extraction` |
| `boundary_limits` | dataset | 上游炼钢气体消耗品电力供应、安装拖拉机保险杠使用维护放行后运输在本前景门点之外。缺上游关联不是零负荷，本稿不是完整摇篮到工厂门。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cutting` | 氮气辅助钢板激光下料与边缘准备 | required | 接收未涂层热轧非合金钢板，为图纸定义农业安装框架下料；仅氮气辅助。 | foreground | 每台验收完整设备按M归一化 |
| `forming` | 安装框架板件受控折弯 | required | 选定框架图纸包含折弯板件，纳入其真实门点内折弯。 | foreground | 每台验收完整设备按M归一化 |
| `welding` | 实芯焊丝MAG焊接与框架受控组对 | required | 未涂层非合金钢折弯板安装框架，以锰硅钢实芯焊丝MAG焊接，外购82体积%氩18体积%二氧化碳预混保护气。 | foreground | 每台验收完整设备按M归一化 |
| `release` | 裸安装框架尺寸焊缝验收净称重放行 | required | 图纸定义焊接裸板框架在涂装之前、安装至农业设备之前放行。 | foreground | 每台验收完整设备按M归一化 |

全部过程适用于同一声明拖拉机保险杠安装框架图纸物料；零件批次追溯将双侧专用接口经下料折弯焊缝图关联至最终放行。必需阶段不使可选磨料油包装物质释放普遍发生。报废件耗可归属资源，但不增加验收输出数量。

### 过程：氮气辅助钢板激光下料与边缘准备（`cutting`）

保留钢板牌号厚度材质证书排版文件。独测坯件骨架边角及真实熔渣滤尘收集。仅真实发生时纳入干式边缘去毛刺。氧气空气切割钢管输入湿锯切外购下料坯及除涂层改变路线，在本候选稿之外。GMI列出氮气辅助板材下料；不指定本工单或普遍排版成材率。

#### 输入

##### 产品流

###### 未涂层热轧非合金结构钢板（`steel_sheet`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：未涂层热轧非合金结构钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cutting。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cutting`
- 来源：`gmi-weldments`

###### 干式激光切割辅助气态氮（`nitrogen`）

仅真实空分供应气态氮用于干式激光辅助，CAS7727-37-9。不是液氮N2O基础资源。独称交付净消耗；真实体积读数须实际气温压力组成与核实换算，不将公开属性meanValue猜作密度。

- 选定流：氮气 `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cutting。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cutting`
- 来源：`gmi-weldments`

###### 固结氧化铝磨料去毛刺磨片（`abrasive_disc`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：固结氧化铝磨料去毛刺磨片
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cutting。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cutting`
- 来源：`gmi-weldments`

###### 真实交流电使用（`cutting_electricity`）

真实过程可归属交流电含声明抽排支持负荷；1 kWh =3.6 MJ。公开电流身份不建立电压电网发电路线上游地域；须真实供应关联。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cutting。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cutting`
- 来源：`gmi-weldments`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分离非合金钢激光下料骨架边角料（`steel_offcuts`）

实际从厂内下料成形转移的分离未处理钢生产废料。记录骨架边角净钢质量接收方；不是废车混合有色电池废物或假定下游回收收益。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cutting。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cutting`
- 来源：`gmi-weldments`

###### 固态非合金钢激光切割熔渣（`cutting_residue`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：固态非合金钢激光切割熔渣
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cutting。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cutting`
- 来源：`gmi-weldments`

###### 收集非合金钢激光切割滤尘（`cutting_dust`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：收集非合金钢激光切割滤尘
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cutting。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cutting`
- 来源：`gmi-weldments`

###### 含钢去毛刺污染的废固结氧化铝磨片（`spent_disc`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：含钢去毛刺污染的废固结氧化铝磨片
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cutting。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cutting`
- 来源：`gmi-weldments`

##### 基本流


### 过程：安装框架板件受控折弯（`forming`）

记录折弯程序模具真实角度安装接口。不规定普遍吨位减薄废料比例热处理。补换液压油与处置仅真实液压折弯机适用，由领退库存实测；电动折弯机不承继液压消耗。

#### 输入

##### 产品流

###### 实际液压折弯机用配制矿物液压油（`hydraulic_oil`）

仅实际矿物配方且有记录至少70%石油油组成，按记录温度真实净补换体积。保留计量器校准油箱库存。这是工厂消耗，不是钢框架质量；无普遍油密度每周期加油。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`gmi-weldments`

###### 真实交流电使用（`forming_electricity`）

真实过程可归属交流电含声明抽排支持负荷；1 kWh =3.6 MJ。公开电流身份不建立电压电网发电路线上游地域；须真实供应关联。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`gmi-weldments`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 液压折弯机废矿物润滑油（`spent_oil`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`gmi-weldments`

##### 基本流


### 过程：实芯焊丝MAG焊接与框架受控组对（`welding`）

使用真实批准焊接工艺焊丝炉批安全数据表气体证书焊缝图夹具顺序。Linde商业原件支持明确选定混合气，不是普遍农业焊接要求。GMI支持MAG为提供路线之一。纯CO2其他混合气药芯手工焊TIG激光连接钎焊均在本方法之外。纳入真实组对点焊焊缝抽排返工。不将工人暴露或生成烟尘等同环境释放；捕集最终排气分别记录。

#### 输入

##### 产品流

###### 实芯锰硅碳钢MAG焊丝（`weld_wire`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：实芯锰硅碳钢MAG焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

###### 压缩预混焊接气82体积%氩18体积%二氧化碳（`shielding_mix`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：压缩预混焊接气82体积%氩18体积%二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

###### 真实交流电使用（`welding_electricity`）

真实过程可归属交流电含声明抽排支持负荷；1 kWh =3.6 MJ。公开电流身份不建立电压电网发电路线上游地域；须真实供应关联。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 收集含铁锰固态MAG焊接抽排粉尘（`collected_fume`）

仅记录真实使用转移的具名物理交换。保留精确供应牌号配方状态、净领减退库存平衡实测数量。记录真实条件缺席；不以零替代缺证据。

- 选定流：收集含铁锰固态MAG焊接抽排粉尘
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

##### 基本流

###### 释放至空气未指定子介质的锰（`manganese_air`）

仅真实实测元素锰释放至外部空气未指定子介质时适用。保留气溶胶物质分析按Mn质量、尾气逸散采样流量时间捕集去向；总焊烟锰氧化物质量工作场所暴露浓度不建立本数量。无默认释放因子。

- 选定流：锰 `08a91e70-3ddc-11dd-9bc7-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

###### 化石二氧化碳释放至空气未指定子介质（`co2_air`）

仅保护气CO2有记录化石碳来源，且真实释放CO2由实测气库存组成保留转化建立时适用。仅混合气组成证书不建立碳来源大气数量。生物混合未知来源须单独身份行；无一律化石假定燃烧因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`


### 过程：裸安装框架尺寸焊缝验收净称重放行（`release`）

核验真实安装孔位基准几何变形焊缝覆盖工单特定验收准则。记录目视检查及仅真实指定附加试验；不推断普遍必需无损证明载荷疲劳试验。完整净M含连接钢材保留焊缝金属，排除夹具包装散装紧固件下游涂装。保护储存须符合真实买方移交规格；本裸中间组件不是完整可下田农业整机。

#### 输入

##### 产品流

###### 非黏性非泡沫无增强LDPE包装薄膜（`film`）

仅真实非黏性非泡沫无增强无层压无支承LDPE薄膜用作可移除包装。须供应组成净耗膜质量；本交换完整净M均排除运输架托盘。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`gmi-weldments`; `gsm-agriculture`

###### 真实交流电使用（`release_electricity`）

真实过程可归属交流电含声明抽排支持负荷；1 kWh =3.6 MJ。公开电流身份不建立电压电网发电路线上游地域；须真实供应关联。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`gmi-weldments`; `gsm-agriculture`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收裸MAG焊接折弯钢制拖拉机保险杠安装框架（`finished_machine`）

同一指定拖拉机保险杠接口配置的完整验收未涂装焊接安装框架组件固定1 kg。包含全部图纸定义折弯板件保留焊缝金属。排除保险杠本体拖拉机散装紧固件涂料夹具运输架可移除包装。M来自同一图纸版次物料验收状态校准称重；按件统计须将此配置分开。

- 选定流：验收裸MAG焊接折弯钢制拖拉机保险杠安装框架
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`gmi-weldments`; `gsm-agriculture`

##### 废物流

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | 按图纸工单排版细分工位分表避免分配。不可避免共用下料折弯焊接抽排检验负荷按证明实测机时负载或其他真实因果驱动分配。记录分子同配置验收数量库存变化待机返工归属敏感性。不同厚度焊长安装设计不自动质量等效。 | `ghg-allocation` |
| `allocation_scrap` | steel_offcuts; cutting_residue; collected_fume; spent_disc; spent_oil | 区分未用库存退回内部复用件转移废物审查真实联产品。不自动按出售价值判原生钢抵扣联产品。称废钢粉尘避免重复保留流体滤器硬件；须声明真实接收方处理边界。 | `ghg-allocation` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | release | reference product | weighing_record | 零件号；图纸版次；配置；拖拉机保险杠型号；序列批次；验收净质量 M；完整连接物料；秤校准零皮不确定性；验收关联 | 使用经校准的秤称量已验收的完整设备,排除运输包装；核对同一配置和验收记录。 | kg | 每验收配置批次 | 声明制造期间 | 完整裸组件放行工位 | 每台验收净质量 | 原始秤读数校准同图纸物料接口验收 |
| `cp_cutting` | cutting | individual inventory exchanges | production_record | row_id；图纸物料配置；工单批次；同一配置的验收设备数量；领退库存；实测数量单位；分表；报废返工；供应接收物质观察 | 记录独称净钢板领退库存、排版工单追溯、实测氮质量或真实计量体积换算、坯件边角质量、捕集切割残渣工位kWh。 汇总真实同一配置工单原件核对库存，按有记录因果驱动分配，并用同一配置的验收设备数量除可归属总量。区分真实零不适用缺原件。 | 质量kg；记录温度液压油m3；kWh换算后电力MJ | 每工单批次真实消耗释放观察 | 完整声明期间库存日期 | 真实纳入工位具名外包门点 | 可归属交换数量 / 验收设备数量 | 原始数量校准真实同配置数量供应证书安全数据表物质接收原件 |
| `cp_forming` | forming | individual inventory exchanges | production_record | row_id；图纸物料配置；工单批次；同一配置的验收设备数量；领退库存；实测数量单位；分表；报废返工；供应接收物质观察 | 保留板件工单路线折弯设定尺寸检查、真实加油体积温度、油箱平衡、独称废油工位电力。 汇总真实同一配置工单原件核对库存，按有记录因果驱动分配，并用同一配置的验收设备数量除可归属总量。区分真实零不适用缺原件。 | 质量kg；记录温度液压油m3；kWh换算后电力MJ | 每工单批次真实消耗释放观察 | 完整声明期间库存日期 | 真实纳入工位具名外包门点 | 可归属交换数量 / 验收设备数量 | 原始数量校准真实同配置数量供应证书安全数据表物质接收原件 |
| `cp_welding` | welding | individual inventory exchanges | production_record | row_id；图纸物料配置；工单批次；同一配置的验收设备数量；领退库存；实测数量单位；分表；报废返工；供应接收物质观察 | 记录焊丝净送退残端质量、净混合气消耗质量证实组成、焊接返工时间抽排能耗独称收集残渣。真实物质分析尾气逸散测试才建立元素锰释放；真实碳来源气体平衡才在有依据时建立化石CO2。 汇总真实同一配置工单原件核对库存，按有记录因果驱动分配，并用同一配置的验收设备数量除可归属总量。区分真实零不适用缺原件。 | 质量kg；记录温度液压油m3；kWh换算后电力MJ | 每工单批次真实消耗释放观察 | 完整声明期间库存日期 | 真实纳入工位具名外包门点 | 可归属交换数量 / 验收设备数量 | 原始数量校准真实同配置数量供应证书安全数据表物质接收原件 |
| `cp_release` | release | individual inventory exchanges | production_record | row_id；图纸物料配置；工单批次；同一配置的验收设备数量；领退库存；实测数量单位；分表；报废返工；供应接收物质观察 | 保留序列批次物料图纸版次验收数量几何焊缝检查校准完整净秤读数皮重。仅真实可移除LDPE包装独测。 汇总真实同一配置工单原件核对库存，按有记录因果驱动分配，并用同一配置的验收设备数量除可归属总量。区分真实零不适用缺原件。 | 质量kg；记录温度液压油m3；kWh换算后电力MJ | 每工单批次真实消耗释放观察 | 完整声明期间库存日期 | 真实纳入工位具名外包门点 | 可归属交换数量 / 验收设备数量 | 原始数量校准真实同配置数量供应证书安全数据表物质接收原件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| `electricity_conversion` | cutting_electricity; forming_electricity; welding_electricity; release_electricity | normalize_mass前按1 kWh =3.6 MJ换真实kWh为MJ；保留原始电表共用负荷原件。 | meter kWh | q_item in MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `interface_trace` | reference product | 按真实OEM图纸识别拖拉机保险杠型号零件号双侧接口基准连接孔间隙。放行前检验指定几何矫正变形；不推断普遍公差静疲劳载荷。 | 受控图纸版次物料真实测量签署 |
| `weld_quality` | welding; release | 保留材质证书批准工艺焊丝气证书焊工操作能力焊缝图真实目视指定附加检测修补最终焊缝处置。不将制造商认证或所有无损试验套作本工厂验收。 | 真实工艺资格检验原件 |
| `mass_and_completion` | cp_mass | 同一图纸配置验收裸完成度定义M；不完整套件独供散装螺栓涂料完整保险杠不是所测输出。保留原始校准称重真实验收数量。 | 物料工单验收秤原件 |
| `species_capture` | manganese_air; co2_air; collected_fume | 真实最终环境排放与工作场所暴露生成烟尘捕集残渣独测。保留物质按Mn而非氧化物总尘、即时空气子介质、气体碳来源真实释放平衡；不将职业限值当排放因子。 | 物质分析气体来源尾气时间流量残渣平衡 |
| `inventory_period` | all inventory rows | 须完整期间批次净领退库存变化返工报废归属因果分配。声明量值覆盖完整前原子化增列真实其他夹具维护磨削废物公用物料实测物质。 | 数量库存接收台账不确定性 |
| `evidence_gaps` | dataset | 未获得具体制造者真实M工单清单经验范围供应数据工厂质量原件。须后续前景采集科学审查。空UUID仍为具体物理流，不是数据库不存在证据。 | 后续原始记录兼容独立审查来源 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | dataset | 核验专用拖拉机保险杠双接口完整裸折弯板焊件真实氮激光折弯实芯82/18MAG路线明确排除；CPC本身不是适用性。 | `gmi-weldments`; `linde-corgon18` |
| `validate_measurement` | all inventory rows | 检查精确同图纸配置净M、cp_mass原始秤证据数量分母。每非参考行应用normalize_mass及真实采集协议；保留公开属性单位链不编造密度重量。 |  |
| `validate_acceptance` | release | 须受控接口测量焊缝质量处置关联同物料批次。缺图纸公差焊缝规格物理原件仍为采集科学缺口，即使机械检查通过。 |  |
| `validate_atomic` | all inventory rows | 检查独立气体配方残渣物质真实环境介质条件适用净质量接收边界；不以捕集粉尘替代释放Mn或以供应混合气替代化石CO2。 | `hse-welding`; `hse-extraction` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset仅真实量值完成独立审查后 |
| allowed_use | 声明兼容拖拉机保险杠安装框架零件制造门点供应输入 |
| excluded_use | 全部44199覆盖通用钢结构完整拖拉机保险杠田间性能寿命声明无条件仅质量比较 |
| required_metadata | 指定农业拖拉机型号保险杠模块；OEM零件号图纸版次物料；真实受控图纸定义拖拉机侧保险杠侧连接孔型安装孔位基准载荷间隙接口；全部交付焊接板件、排除散装紧固件保险杠及未涂装裸状态；所收非合金热轧无涂层钢板牌号厚度证书；真实氮气下料折弯程序；批准锰硅实芯焊丝MAG工艺夹具焊缝图资格与真实82体积%氩18体积%CO2供应证书；尺寸焊缝验收准则原件；同一图纸配置完整净实测M kg及校准秤皮重不确定性；场址期间数量返工分配真实供应关联实测条件释放介质碳来源 |
| required_quality_disclosure | 实测M不确定性完整同图纸配置；期间数量库存返工分配；接口焊缝覆盖；供应状态缺上游关联实测条件物质未解决身份范围科学审查状态 |
| update_trigger | OEM接口图纸物料牌号厚度焊丝气下料路线工艺验收完成涂层场址能耗供应变化 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| gmi-weldments | literature | Groupe Maillard Industrie, structural welding; https://www.groupgmi.com/en/expertise/metallurgy/machine-welding/ ; unpaginated Introductory workshops, Laser cutting, Cutting/folding/bending, Welding, Analysis and monitoring, Agricultural machinery | 农业拖拉机保险杠支架框架与提供制造路线尺寸焊缝控制。选定组合须真实前景工单；不采用产能重量碳声明。 |
| gsm-agriculture | literature | GSM, Agricultural Equipment; https://www.gsmwinc.com/agricultural-equipment/ ; unpaginated equipment and component list | 独立农业焊接框架安装支架供应背景，不是特定图纸普遍制造路线。 |
| linde-corgon18 | literature | Linde Austria CORGON18; https://produkte.linde.at/industriegase/cyl_techgas/schweiss_gas/corgon_18.html ; composition table and applications, unpaginated | 商业82%氩18%CO2 MAG保护混合气。不规定所有农业焊接或化石气来源。 |
| hse-welding | official_guidance | UK HSE, Health risks from welding; https://www.hse.gov.uk/welding/health-risks-welding.htm ; Neurological effects, unpaginated | 低碳钢焊烟含锰：条件物质核算。职业限值不用作环境排放因子全球法规。 |
| hse-extraction | official_guidance | UK HSE, Welding fume avoid/reduce exposure; https://www.hse.gov.uk/welding/protect-your-workers/avoid-reduce-exposure.htm ; LEV section, unpaginated | 捕集未捕集烟尘区别；不推断普遍去除效率排放数量。 |
| ghg-allocation | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; printed63 PDF65 Tables9.1–9.2 | 历史一般分配层级；真实因果驱动来自前景原件，不是现行农业法规。 |
