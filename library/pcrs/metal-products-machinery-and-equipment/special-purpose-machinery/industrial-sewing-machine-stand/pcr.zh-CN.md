---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.industrial-sewing-machine-stand
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非电动模块化钢管工业缝纫机机架装配

## 1. 范围与适用性

本候选稿覆盖独立供货非电动模块化钢管工业缝纫机机架，由外部已粉末涂装完成模块装配。选定配置含非倾斜台板支承、水平可调踏板安装横杆、固定橡胶隔振脚及螺纹地面调平装置。真实图纸工单须确定机械接头与高度锁定架构。KESSLER KES-B说明支持配置类别，但不提供生产清单，也不据此将本装配路线归于该制造商。

排除台板缝纫机头驱动控制电踏板线架抽屉脚轮倾斜支承电动或弹簧助力升降四柱变体通用家具建筑结构完整缝纫工作站本地原料加工涂装安装服务客户缝纫维护报废。不声明覆盖全部CPC44640。

实质方法补充为独供支承模块完整性及缝纫工作站接口踏板间隙高度锁定地面接触验收；复用一般加工技术，不另造技术。不重复完整平缝工作站方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.industrial-sewing-machine-stand |
| classification_refs | CPC:3.0:44640; narrower |
| covered_products | 本候选稿覆盖独立供货非电动模块化钢管工业缝纫机机架，由外部已粉末涂装完成模块装配。选定配置含非倾斜台板支承、水平可调踏板安装横杆、固定橡胶隔振脚及螺纹地面调平装置。真实图纸工单须确定机械接头与高度锁定架构。KESSLER KES-B说明支持配置类别，但不提供生产清单，也不据此将本装配路线归于该制造商。 |
| excluded_products | 排除台板缝纫机头驱动控制电踏板线架抽屉脚轮倾斜支承电动或弹簧助力升降四柱变体通用家具建筑结构完整缝纫工作站本地原料加工涂装安装服务客户缝纫维护报废。不声明覆盖全部CPC44640。 |
| representative_product | 一件同图纸完整配置结构供货的验收机架模块 |
| production_route | 接收已完成模块；机械连接调整；接口完整性验收；称量放行真实包装 |
| market_state | 运输拆卸前新装配验收机架，无台板机头电机包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明完整机架支承模块，不是缝纫织物或可调工作场所服务 |
| How much | 1 kg验收完整配置机架净质量；一件完整产品的归一化份额 |
| How well | 符合受控物料图纸签署验收计划接口几何调整锁定地面接触完整性；无通用载荷扭矩高度隔振阈值 |
| How long or cycle | 一个制造验收周期；不指定寿命缝纫产量 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格非电动模块化钢管工业缝纫机机架 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机架型号；图纸物料版次；工单批次；完整模块供货；非倾斜台板接口兼容缝纫工作站；踏板安装间隙；高度锁定地面调平配置；固定橡胶脚胶料；紧固件牌号尺寸涂层；模块保留涂层；实测净M校准；装配检验计划；真实接头设定试验条件；场址期间数量；供应门点运输上游关联；包装拆卸排除 |

声明每项限定；质量归一化不意味支承调整性能等效。未解决成品身份UUID保持空白，不以完整缝纫机通用钢结构代替。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集 M。 |
| `electricity_units` | assembly_electricity; acceptance_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 使用真实电表供应门点；按1 kWh = 3.6 MJ换算并保留原始读数。 |

M包含同一配置验收已装配机架全部必需保留模块涂层脚紧固件。排除台板机头选配附件运输固定件包装。保留校准秤读数皮重不确定性；运输拆卸核对已称验收物料，不以目录重量替代M。不用图纸推算或估计重量代替。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 装配场接收外部完成粉末涂装机架模块及已完成独立紧固件 |
| starting_condition_role | 声明前景装配模块 |
| product_classification_scope | 本候选稿覆盖独立供货非电动模块化钢管工业缝纫机机架，由外部已粉末涂装完成模块装配。选定配置含非倾斜台板支承、水平可调踏板安装横杆、固定橡胶隔振脚及螺纹地面调平装置。真实图纸工单须确定机械接头与高度锁定架构。KESSLER KES-B说明支持配置类别，但不提供生产清单，也不据此将本装配路线归于该制造商。 |
| recursive_input_rule | 接收模块停在准确供货状态；内含钢管涂层焊缝不作为新增装配投入。返工内部转移非重购。完整外购机架不属本装配路线。 |
| upstream_dataset_requirement | 扩大评价须关联真实兼容零件制造涂装供电入厂运输废物处理；未解决供应方仍为缺口 |
| disclosure | 本稿为收货至放行前景装配，非完整摇篮到大门；披露外包供应状态缺关联准确配置 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_included` | all processes | 纳入真实边界内收货搬运连接调整检验可归属工具支持活动返工报废包装。供应方加工涂装属上游，不暗含本清单。 |  |
| `boundary_emissions` | all inventory rows | 机械装配不预设过程排放。真实测得外排物质或新增化学品公用物料废物须增列独立具体交换介质供货状态真实采集。不将上游涂装烟气当装配排放。 |  |
| `boundary_config` | reference product | 仅覆盖非电动固定脚非倾斜机架。加台板机头升降倾斜脚轮改变产品边界，须复核适用性。 | `kessler-stand` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `assembly` | 收货与机架机械装配 | required | 声明装配路线；独立公用物料废物包装仍依实际条件 | foreground_process | 1 kg验收机架参考；按同一配置验收设备采集 |
| `acceptance` | 接口调整与完整性验收 | required | 声明装配路线；独立公用物料废物包装仍依实际条件 | foreground_process | 1 kg验收机架参考；按同一配置验收设备采集 |
| `release` | 净质量放行与实际包装 | required | 声明装配路线；独立公用物料废物包装仍依实际条件 | foreground_process | 1 kg验收机架参考；按同一配置验收设备采集 |

### 过程：收货与机架机械装配（`assembly`）

接收匹配已粉末涂装模块；检查供货状态，安装结构横撑支承脚踏板横杆，按真实图纸设工单几何锁定接头。不假定本地切割折弯焊接涂装。

#### 输入

##### 产品流

###### 粉末涂装钢管左侧伸缩支腿模块（`left_leg`）

一件外购已完成左侧结构模块含一体焊接底脚；核对零件号保留涂层。

- 选定流：粉末涂装钢管左侧伸缩支腿模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 粉末涂装钢管右侧伸缩支腿模块（`right_leg`）

同图纸配置匹配的一件右侧模块，非原钢材。

- 选定流：粉末涂装钢管右侧伸缩支腿模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 粉末涂装钢制后横撑（`back_brace`）

外购已完成后结构横撑；受控物料表确定长度连接接口。

- 选定流：粉末涂装钢制后横撑
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 粉末涂装钢制非倾斜台板支承条（`top_support`）

每件实体支承条，仅同零件号汇总；台板排除。

- 选定流：粉末涂装钢制非倾斜台板支承条
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 钢制水平可调踏板安装横杆（`treadle_bar`）

横杆及一体调整接口，非电踏板或电机控制系统。

- 选定流：钢制水平可调踏板安装横杆
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 硫化橡胶隔振脚垫（`rubber_foot`）

供应证书确认橡胶脚垫质量；保留胶料金属嵌件供货状态身份。

- 选定流：硫化橡胶隔振脚垫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 钢制螺纹地面调平脚杆（`levelling_foot`）

外购螺纹脚杆；记录调整锁定接口，不推定螺纹尺寸。

- 选定流：钢制螺纹地面调平脚杆
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 钢制六角头螺栓（`bolt`）

真实图纸螺栓牌号涂层尺寸；称供货数量或可追溯批次质量。

- 选定流：钢制六角头螺栓
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 钢制六角螺母（`nut`）

每数据集交换仅一种准确钢螺母规格，不是混合紧固包。

- 选定流：钢制六角螺母
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 钢制平垫圈（`washer`）

图纸确定平垫圈，与螺栓螺母质量分开。

- 选定流：钢制平垫圈
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

###### 交流电（`assembly_electricity`）

仅实际边界内工具照明搬运耗电，实测归属；上游涂装能耗排除。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`rejected_steel`）

仅真实拒收机架钢材分离转为制造废物；声明涂层橡胶拆除污染，复用退回模块不是废物。

- 选定流：工业后钢废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`kessler-stand`

##### 基本流

### 过程：接口调整与完整性验收（`acceptance`）

核验台板支承连接接口踏板安装位置间隙高度调整锁定地面接触调平及真实图纸紧固稳定检查，记录返工。载荷扭矩值须受控验收计划。

#### 输入

##### 产品流

###### 交流电（`acceptance_electricity`）

仅实际电测具或台架活动耗电；机架产品不要求缝纫运行试验。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`kessler-stand`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：净质量放行与实际包装（`release`）

称量已装配验收机架；运输拆卸须核对同一完整物料验收记录，再按真实交付包装。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD）（`pack_film`）

条件性非粘性非泡沫无加强未层压包膜；其他真实包装须增列独立具体行，排除净M。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`kessler-stand`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格非电动模块化钢管工业缝纫机机架（`finished_machine`）

完整验收框架含声明非倾斜支承踏板安装横杆固定橡胶脚调平调整全部必需紧固件，不含台板机头。

- 选定流：验收合格非电动模块化钢管工业缝纫机机架
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`kessler-stand`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | all processes | 分工单配置工位电表避免分配。不可避免共用工具检验支持电耗须实测因果时间负载或有记录驱动，记录分子待机返工同配置验收数量敏感性。不默认在不同调整机架间按质量分配。 | `ghg-allocation` |
| `allocation_rejects` | rejected_steel | 核对拒收模块退回修复分离废物；披露橡胶涂层污染。出售不自动形成联产品原生钢抵扣。无独立审查边界不加回收收益。 | `ghg-allocation` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | release | reference product | weighing_record | 型号；配置；图纸物料版次；序列批次；验收净质量 M；秤校准皮重不确定性；装配完整性验收关联 | 使用经校准的秤称量已验收的完整设备,排除运输包装；核对同一配置和验收记录。 | kg | 每验收配置批次 | 声明完整生产期间 | 已装配机架独供放行工位 | 每台验收净质量 | 原始秤读数校准完整物料验收 |
| `cp_assembly` | assembly | individual inventory exchanges | production_record | row_id；配置；图纸物料；批次；同一配置的验收设备数量；领退库存；实测数量单位；表覆盖；供应接收；检验返工 | 采集本工位真实净零件领用原始电表真实废物转移包装领用。核对库存变化，按真实因果原件归属共用负荷，并用同一配置的验收设备数量除可归属总量。区分真实零无此交换缺原件。 | 质量kg；原始kWh换算后电力MJ | 每工单批次真实交换 | 完整声明期间库存日期 | 真实具名装配验收放行工位 | 可归属交换数量 / 验收设备数量 | 物料交付证书表校准实测数量真实数量签署检验处置 |
| `cp_acceptance` | acceptance | individual inventory exchanges | production_record | row_id；配置；图纸物料；批次；同一配置的验收设备数量；领退库存；实测数量单位；表覆盖；供应接收；检验返工 | 采集本工位真实净零件领用原始电表真实废物转移包装领用。核对库存变化，按真实因果原件归属共用负荷，并用同一配置的验收设备数量除可归属总量。区分真实零无此交换缺原件。 | 质量kg；原始kWh换算后电力MJ | 每工单批次真实交换 | 完整声明期间库存日期 | 真实具名装配验收放行工位 | 可归属交换数量 / 验收设备数量 | 物料交付证书表校准实测数量真实数量签署检验处置 |
| `cp_release` | release | individual inventory exchanges | production_record | row_id；配置；图纸物料；批次；同一配置的验收设备数量；领退库存；实测数量单位；表覆盖；供应接收；检验返工 | 采集本工位真实净零件领用原始电表真实废物转移包装领用。核对库存变化，按真实因果原件归属共用负荷，并用同一配置的验收设备数量除可归属总量。区分真实零无此交换缺原件。 | 质量kg；原始kWh换算后电力MJ | 每工单批次真实交换 | 完整声明期间库存日期 | 真实具名装配验收放行工位 | 可归属交换数量 / 验收设备数量 | 物料交付证书表校准实测数量真实数量签署检验处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_interface` | reference product | 须现行台板安装孔型支承几何兼容机头台板工作站踏板安装行程间隙高度锁定调平配置；验收采用真实受控图纸紧固规格检验计划。不推断通用载荷扭矩隔振性能。 | 现行图纸物料实测接口签署检查 |
| `completion_mass` | cp_mass | 同图纸配置定义完整装配机架M含脚调整紧固件供应保留涂层。独供台板机头附件运输包装排除M。须真实校准完整称重同配置数量。 | 原始秤物料验收工单记录 |
| `supplier_states` | assembly | 核验已完成涂装模块准确橡胶胶料嵌件紧固供货状态。供应焊接涂装非本地过程。保留真实零件供货身份，扩大完整声明前补上游关联。 | 供应图纸证书门点原件 |
| `inventory_coverage` | all inventory rows | 核对净领用库存变化验收数量缺陷返工真实接收方。真实使用清洗化学品新增包装公用物料须原子化补列；缺数据非零。 | 完整期间台账电表工单证据 |
| `scientific_gaps` | dataset | 未取得具体制造者M真实接头图纸制造数量验收原件经验范围完整供应影响数据集。须后续前景采集独立科学审查；机械检查不批准这些内容。 | 后续物理原件审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | dataset | 核验准确独供固定脚非电动机架配置已完成模块路线专用台板踏板接口；不单凭分类确定适用性。 | `kessler-stand` |
| `validate_measurement` | all inventory rows | 参考名等于成品输出；真实同配置完整净M及cp_mass支持每非参考行q_item/M。核验公开属性单位链，不以Mass代件数面积体积。 |  |
| `validate_quality` | acceptance | 须真实图纸签署实测接口调整紧固完整验收。缺真实准则原件即使结构有效仍为科学采集缺口。 |  |
| `validate_boundary` | all processes | 不重复内含涂层钢材上游加工能耗，不编造本地焊接排放；量值完整声明前核对真实废物条件公用物料包装。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造装配数据集 |
| downstream_use | secondary_dataset；background_dataset仅量值完成独立审查后 |
| allowed_use | 兼容工业缝纫工作站制造的声明机架输入 |
| excluded_use | 排除台板缝纫机头驱动控制电踏板线架抽屉脚轮倾斜支承电动或弹簧助力升降四柱变体通用家具建筑结构完整缝纫工作站本地原料加工涂装安装服务客户缝纫维护报废。不声明覆盖全部CPC44640。 |
| required_metadata | 机架型号；图纸物料版次；工单批次；完整模块供货；非倾斜台板接口兼容缝纫工作站；踏板安装间隙；高度锁定地面调平配置；固定橡胶脚胶料；紧固件牌号尺寸涂层；模块保留涂层；实测净M校准；装配检验计划；真实接头设定试验条件；场址期间数量；供应门点运输上游关联；包装拆卸排除 |
| required_quality_disclosure | 实测M不确定性准确完整配置原始验收计划结果期间数量库存因果分配供货门点缺上游关联身份范围科学审查状态 |
| update_trigger | 模块设计接口升降脚支承变体供货完整性涂层胶料紧固状态供应门点验收计划变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| kessler-stand | literature | KESSLER, Sewing machine stand KES-B; https://www.kessler-ergo.com/en/sewing-machine_stands_sit-down-and-stand-up-workstations/ ; unpaginated description, technical data, options and versions | 模块钢管机架台板支承踏板调整固定脚调平供货涂层背景。不采用约重宣传尺寸载荷性能作实测M必需准则。真实接头装配路线验收须前景图纸；不推断制造商准确生产路线。 |
| ghg-allocation | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; printed63 PDF65 Tables9.1–9.2 | 历史一般分配层级；须真实因果实测，非现行产品法规或默认质量分配。 |
