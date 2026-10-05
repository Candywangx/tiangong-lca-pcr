---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.motorcycle-structural-parts
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 裸 TIG 焊接钢制摩托车主车架制造

## 1. 范围与适用性

新制完整裸摩托车结构主车架，由声明低碳钢管整体钢安装座通过实际氩保护 TIG 焊接制造。含图纸定义转向头整体发动机后摇臂安装基准、接收自产子件范围、适用机械整理清洗、尺寸焊缝净质量验收及厂门保护。本记录为 CPC 49941 较窄路线；TIG 是所选适用路线，非声称全部摩托车采用 TIG。

排除完整摩托车边车发动机传动轴承悬架车轮油箱车身板螺栓后副架未装附件；铝铸造复合铬钼车架、MIG 激光钎焊未声明接合路线、修理架、整车装配磷化涂漆粉涂、骑行运输服务报废。替代材料接合涂覆供应状态须独立方法评估。

厂商工序说明仅支持区分焊接车架涂装整车装配，不建立低碳牌号 TIG 工艺净 M 车架专属工厂清单。TWI 提供通用 TIG 身份与可选填料气体背景；实际工厂规程建立适用性。来源不支持普遍架质量寿命碰撞疲劳验收范围。科学仍待审。未有匹配核验上游链接时，接收到验收前景不是完整从摇篮到厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.motorcycle-structural-parts |
| classification_refs | CPC 3.0 49941；较窄裸钢 TIG 摩托车主架路线；仅背景 |
| covered_products | 新制完整裸摩托车结构主车架，由声明低碳钢管整体钢安装座通过实际氩保护 TIG 焊接制造。含图纸定义转向头整体发动机后摇臂安装基准、接收自产子件范围、适用机械整理清洗、尺寸焊缝净质量验收及厂门保护。本记录为 CPC 49941 较窄路线；TIG 是所选适用路线，非声称全部摩托车采用 TIG。 |
| excluded_products | 排除完整摩托车边车发动机传动轴承悬架车轮油箱车身板螺栓后副架未装附件；铝铸造复合铬钼车架、MIG 激光钎焊未声明接合路线、修理架、整车装配磷化涂漆粉涂、骑行运输服务报废。替代材料接合涂覆供应状态须独立方法评估。 |
| representative_product | 一个验收完整图纸定义主架具有正实测 M |
| production_route | 库存子件准备；夹具 TIG 焊接；条件整理清洗；尺寸焊缝实体质量验收；条件保护 |
| market_state | 整车装配前新制验收裸未涂装主架 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一个指定完整裸结构主架 |
| How much | 1 kg 验收架净质量；按件采集用实测 M 归一化 |
| How well | 实际图纸基准鉴定焊接路线尺寸焊检验收；等质量非等结构性能 |
| How long or cycle | 一次制造验收周期；无距离碰撞周期骑行寿命服务单位 |
| reference_flow_link | finished_frame |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收未涂装 TIG 焊接钢制摩托车主车架 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号场址时期；车架件号修订序列号受控图纸；低碳牌号管截面壁厚库存供应状态；实际整体转向头安装座完整性外购子件自产区分；氩供应实际 TIG 规程焊图填料电极规格鉴定；实际整理清洗残油；尺寸焊检放行；实际同配置校准净架质量 M kg 秤皮重不确定性；实际库存仪表气废物记录返工分配供应上游匹配；包装架排除数据缺口 |

M 含实际焊接整体安装座转向头保留焊金属声明裸状态残油。排除发动机夹具松散轴承螺栓后副架备件架包装。具体数据集元数据说明须有必需限定；缺失即参考不完整。目录整车车架质量、管体积密度计算或运输毛重不能建立 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 此处完整设备为一个完整指定主架，不是摩托车。适用校准秤实体称量各验收同件修订架，扣实测夹具皮重；记录焊安装座完整性清洗油状态日期操作者不确定性正净 M 关联签字放行。同配置批数须实际数量可追溯架质量计量，不假定重量。核对管板填料所含不合格屑交付架状态，不将保护气计入所含质量。 |
| `energy_units` | 各电力行 | Net calorific value | MJ | 用核验能量单位换算 1 kWh = 3.6 MJ；保留实际进线电压供应商焊接机加通风待机运行仪表边界。电弧电流铭牌功率猜测焊时不能替代实测仪表电力。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定未镀覆低碳管板及接收成品子件 |
| starting_condition_role | 接收到验收裸主架运行制造前景 |
| product_classification_scope | 新制完整裸摩托车结构主车架，由声明低碳钢管整体钢安装座通过实际氩保护 TIG 焊接制造。含图纸定义转向头整体发动机后摇臂安装基准、接收自产子件范围、适用机械整理清洗、尺寸焊缝净质量验收及厂门保护。本记录为 CPC 49941 较窄路线；TIG 是所选适用路线，非声称全部摩托车采用 TIG。 |
| recursive_input_rule | 不将同成品架作自身制造投入。接收成品转向头支架替代所含库存机加；自制内部子件非边界投入 |
| upstream_dataset_requirement | 匹配实际牌号截面子件供应完整性 TIG 填料电极气状态清洗浓度场址时期供应商原参考属性单位；披露不匹配链接 |
| disclosure | 制造者型号场址时期；车架件号修订序列号受控图纸；低碳牌号管截面壁厚库存供应状态；实际整体转向头安装座完整性外购子件自产区分；氩供应实际 TIG 规程焊图填料电极规格鉴定；实际整理清洗残油；尺寸焊检放行；实际同配置校准净架质量 M kg 秤皮重不确定性；实际库存仪表气废物记录返工分配供应上游匹配；包装架排除数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | 所有阶段 | 含实际准备焊接适用整理清洗可归属返工检查净称重保护。避免外包服务交换与所含资源重复。后续涂装整车装配使用在外。长期设备夹具工厂设施排除核心运行前景；披露并对独立建模资本贡献补实际追溯适用性。 |  |
| `boundary_completeness` | 实际焊接生产记录 | 必需焊接不使各填料电极清洗卡必需。补候选卡未含各实际管润滑冷却液热载体刀具无损化学焊过滤粉尘核验单物种排放，具原规格计量。保留实际焊抽排过滤公用消耗电极记录。不因电弧推断 NOx 臭氧铁锰烟钨释放；仅有证据时指定物种目的数量。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `preparation` | 管材与支架准备 | required | 实际指定钢管车架 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `welding` | 夹具组对与 TIG 车架焊接 | required | 声明氩保护 TIG 钢车架路线 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `finishing` | 机械焊缝整理与基准机加 | conditional | 仅实际图纸规定焊后操作 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `cleaning` | 条件裸车架清洗 | conditional | 仅裸车架验收前实际清洗 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `acceptance` | 车架尺寸焊缝质量验收 | required | 每个验收完整主车架 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `packing` | 厂门保护 | conditional | 仅实际声明厂门保护 | foreground | 一台验收同配置成品设备，使用 M 归一化 |

准备供夹具组对 TIG 焊接，后实际整理清洗车架验收；保护条件纳入。各卡须实际路线化学适用性。接收子件与所含库存不可同时计。

### 过程：管材与支架准备 (`preparation`)

接收可追溯未镀覆低碳管板转向头支架状态。按受控图纸几何仅含实际厂内切口弯管机加步骤。外购成形子件替代所含库存加工。实际冷却液工具磨耗金属屑分开记录。

#### 输入

##### 产品流

###### 未镀覆低碳钢结构管 (`steel_tube`)

实际图纸牌号截面壁厚制管状态，实测净领退。非铬钼不锈铝镀覆管。

- 选定流：未镀覆低碳钢结构管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_preparation。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`yamaha`

###### 未镀覆低碳钢支架板 (`steel_plate`)

仅实际厂内支架板库存；外购成品支架替代所含板。

- 选定流：未镀覆低碳钢支架板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_preparation。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`yamaha`

###### 机加工低碳钢摩托车转向头管 (`steering_head`)

仅实际接收成品转向头管，无安装轴承；已含管材厂内制造则删除。

- 选定流：机加工低碳钢摩托车转向头管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_preparation。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`yamaha`

###### 成形低碳钢摩托车发动机安装支架 (`mounting_bracket`)

仅实际接收指定成形支架；非发动机附件集合；删除所含板成形。

- 选定流：成形低碳钢摩托车发动机安装支架
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_preparation。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`yamaha`

###### 工厂进线交流电 (`preparation_electricity`)

仅仪表可归属实际供电 kWh 换 MJ，具电压供应商实际运行待机共用驱动量。不以额定焊电流乘猜测时间。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_preparation。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`yamaha`

#### 输出

##### 废物流

###### 低碳钢机加工屑废物 (`preparation_steel_chips`)

仅实际阶段实测分选屑边角目的；不重复转移屑，不以返工作验收输出。

- 选定流：低碳钢机加工屑废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_preparation。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`yamaha`

### 过程：夹具组对与 TIG 车架焊接 (`welding`)

记录实际焊缝图组对夹具工厂焊接规程操作者鉴定及电弧前后送气工单保护气净消耗，仅实际使用时填料。TIG 来源说明工艺身份，非普遍摩托车工厂配方。不以 MIG 钎焊激光替代。保留实际抽排过滤记录，不虚构必然物种排放。

#### 输入

##### 产品流

###### 气态氩 TIG 保护供应 (`argon`)

仅实际纯氩气具供应状态、称量气瓶净消耗退回或实际匹配计量。不用未指定气密度因子液氩替代。

- 选定流：气态氩 TIG 保护供应
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_welding`
- 来源：`twi`

###### ER70S-6 碳钢 TIG 填充焊条 (`filler_rod`)

仅实际匹配工厂规程使用该填料时；精确规格净领退所含质量。自熔焊删除填料；非普遍牌号规定。

- 选定流：ER70S-6 碳钢 TIG 填充焊条
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_welding`
- 来源：`twi`

###### 纯钨 TIG 电极 (`tungsten_electrode`)

仅实际纯钨电极磨耗领用；掺杂钨须另身份；不默认钍钨。

- 选定流：纯钨 TIG 电极
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_welding`
- 来源：`twi`

###### 工厂进线交流电 (`welding_electricity`)

仅仪表可归属实际供电 kWh 换 MJ，具电压供应商实际运行待机共用驱动量。不以额定焊电流乘猜测时间。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_welding`
- 来源：`twi`

### 过程：机械焊缝整理与基准机加 (`finishing`)

记录实际去毛刺研磨孔基准机加变形修正及不合格返工。不预设热处理消应力喷砂去除全部焊道。用实际磨料冷却液身份收集残渣。

#### 输入

##### 产品流

###### 氧化铝粘结砂轮片 (`abrasive_disc`)

仅实际完整粘结磨片组成实测消耗；非纯散装氧化铝。

- 选定流：氧化铝粘结砂轮片
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`bmw`

###### 工厂进线交流电 (`finishing_electricity`)

仅仪表可归属实际供电 kWh 换 MJ，具电压供应商实际运行待机共用驱动量。不以额定焊电流乘猜测时间。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`bmw`

#### 输出

##### 废物流

###### 低碳钢机加工屑废物 (`finishing_steel_chips`)

仅实际阶段实测分选屑边角目的；不重复转移屑，不以返工作验收输出。

- 选定流：低碳钢机加工屑废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`bmw`

###### 废氧化铝砂轮片 (`spent_disc`)

仅实际转移用后磨片含钢沾染实测净废物；非基础氧化铝。

- 选定流：废氧化铝砂轮片
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`bmw`

### 过程：条件裸车架清洗 (`cleaning`)

声明实际清洗成分浓度水溶剂平衡干燥。水性 IPA 卡为独立条件案例，非必需配方。保留实际残油状态。粉涂磷化漆固化在本未涂装门点外。

#### 输入

##### 产品流

###### 工艺用水 (`cleaning_water`)

仅实际供应工艺水实测质量，非自然取水废液。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`yamaha`

###### 无水异丙醇清洗溶剂 (`isopropanol`)

仅实际 CAS67-63-0 无水 IPA 净领用回收；非70%消毒剂乙醇。

- 选定流：无水异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`yamaha`

###### 非织造聚酯清洁擦布 (`cleaning_wipe`)

仅实际成品擦布净干质量；不代以转化基材。

- 选定流：非织造聚酯清洁擦布
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`yamaha`

###### 工厂进线交流电 (`cleaning_electricity`)

仅仪表可归属实际供电 kWh 换 MJ，具电压供应商实际运行待机共用驱动量。不以额定焊电流乘猜测时间。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`yamaha`

#### 输出

##### 废物流

###### 钢车架清洗含油水性废液 (`cleaning_effluent`)

仅实际实测组成目的废液处理转移，非自然水释放。

- 选定流：钢车架清洗含油水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`yamaha`

###### 异丙醇沾染聚酯擦布废物 (`spent_wipe`)

仅实际用后擦布转移保留 IPA 实测，与空气释放分开。

- 选定流：异丙醇沾染聚酯擦布废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`yamaha`

#### 输出

##### 基本流

###### 异丙醇 (`isopropanol_air`)

仅有证据 CAS67-63-0 即时未指定空气，来自物种排放计量或闭合溶剂平衡；非全部领用室内水长期释放。非必然排放。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`yamaha`

### 过程：车架尺寸焊缝质量验收 (`acceptance`)

控制件修订转向头后摇臂发动机安装基准图纸尺寸焊检范围实际放行准则。实际无损方法人员耗材须记录；无普遍破坏疲劳碰撞试验虚构焊限。实体称量验收完整裸主架，排除夹具运输保护。

#### 输入

##### 产品流

###### 工厂进线交流电 (`acceptance_electricity`)

仅仪表可归属实际供电 kWh 换 MJ，具电压供应商实际运行待机共用驱动量。不以额定焊电流乘猜测时间。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`bmw`

#### 输出

##### 产品流

###### 验收未涂装 TIG 焊接钢制摩托车主车架 (`finished_frame`)

一个指定完整结构主车架含焊接转向头整体指定安装座；排除发动机轴承悬架螺栓后副架临时夹具包装松散备件。

- 选定流：验收未涂装 TIG 焊接钢制摩托车主车架
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`bmw`

### 过程：厂门保护 (`packing`)

实测各实际保护项；架垫包装排除 M。追溯周转架复用并独立归属实际服务，不假定寿命。

#### 输入

##### 产品流

###### 瓦楞纸板箱 (`carton`)

仅实际实测瓦楞运输箱，排除 M。

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

仅实际 LDPE 保护净领用，排除车架 M。

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

仅仪表可归属实际供电 kWh 换 MJ，具电压供应商实际运行待机共用驱动量。不以额定焊电流乘猜测时间。

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
| `allocation_orders` | 共用资源 | 直接归属配置库存填料气领用实际设备焊通风仪表检查含返工。不可分资源用实测因果设备夹具占用实际负荷：份额 = 工单驱动量 / 覆盖工单驱动量之和。保留覆盖时期分母；等架数目录质量额定电流本身非默认驱动。 |  |
| `allocation_qualification` | 鉴定验收生产 | 独立研发原型与实际生产鉴定分开。适用破坏焊疲劳鉴定归实际覆盖工单，具追溯范围驱动敏感性；破坏架不入验收输出。实际逐架检查直接归属。不假定试验程序夹具寿命普遍鉴定分配。 |  |
| `allocation_recovery` | 废钢不合格返工 | 各实体废钢屑废物转移仅计一次，具实际目的时期平衡。内部返工随验收制造。可回收不支持避免钢处置抵扣。实际可售共产品分配须有证据因果经济原件敏感性。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | 验收实体称重记录 | 型号；配置；序列号；验收净质量 M；件号修订；架秤读数；夹具皮重；油清洗状态；校准不确定性；图纸；签字放行 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 逐验收台 | 实际制造验收时期 | 声明架验收门点 | 每台验收净质量 | 实际校准实体单架称重实测皮重受控图纸放行 |
| `cp_preparation` | `preparation` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际校准库存领退管弯机加工单金属屑转移仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_welding` | `welding` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际规程焊图电气仪表填料净领用电极磨耗过滤废物记录 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_finishing` | `finishing` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取整理机加工单实际磨片磨耗金属屑修正返工仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_cleaning` | `cleaning` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际配方安全数据单清洗净供应干燥仪表溶剂平衡废物转移 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_acceptance` | `acceptance` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取受控图纸尺寸焊检校准实际实体净称重放行 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_packing` | `packing` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际包装领退皮重复用架流转 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 用 mass_record_provenance 实际实体架称重、同件修订完整性、校准秤皮重不确定性正 M kg。核对焊填料安装座残油，排除临时夹具发动机螺栓后副架保护。管密度和目录质量不替代；缺称重原件须科学数据审查。 | 实际称重校准架图纸放行 |
| `quality_identity` | 每一交换 | 核验一个实体化学身份实际供应牌号路线浓度。转向头管非泛摩托附件；ER70S-6 非不锈 MIG 丝；纯钨非钍钨；气氩非液氩；IPA 溶剂非消毒剂。保留原公开属性单位介质；未决身份保持具体。 | 实际供应规格安全数据单公开身份记录 |
| `quality_weld` | cp_welding; cp_acceptance | 保留实际焊图规程鉴定填料匹配准备组对气供应电极规格受控图纸基准实际外观无损放行计划。依生产者准则记录变形裂纹未熔合其他实际缺陷。不从通用 TIG 指引推断普遍架几何疲劳碰撞限焊能检查方法。 | 实际鉴定规程图纸计量无损验收原件 |
| `quality_balance` | 库存填料气溶剂水能量 | 分开核对实际库存净领用所含架填料不合格屑退回气瓶气净消耗。实测气体积须原压力温度状态有依据换算，不默认气密度。水供应处理废液环境取排分开。IPA 空气须物种介质实测或含保留回收溶剂闭合平衡，非全部领用。数据完成前焊抽排过滤尘各物种释放须实际证据。 | 实际库存气材料物种平衡仪表废物记录 |
| `quality_coverage` | 实际数据集上游链接 | 区分实测计算缺失有证据 not_applicable。审计实际完整焊生产图供应所含子件加工卡外无损干燥冷却过滤交换资本排除分配不确定性。完整从摇篮到厂门声明须匹配核验上游链接。契约检查不建立实际工厂完成科学批准。 | 实际全制造图透明缺口登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考输出 | 须当前正实际 M kg 及 cp_mass。精确参考名等于 finished_frame；空 UUID 在 unresolved_flow_identities 登记该精确行。实际裸主架完整性排除发动机夹具包装后副架；非车辆毛重。 |  |
| `validate_basis` | 所有行协议 | 核验双语相同有序小写行规则协议标识实际生成引用。q_item 按验收成品设备、M kg、明确 normalize_mass 同配置相同数量。不得改写公开数量面积能量属性为 Mass。 |  |
| `validate_route` | 焊接生产图 | 须实际低碳管库存路线 TIG 氩规程精确填料电极条件接收转向头支架包含适用整理无损实际排放证据。厂商车架车辆案例非本配置实证清单。缺实际记录适用须审查。 |  |
| `validate_use` | 数据集用途 | 披露精确架图纸配置未涂装门点质量证据遗漏实际交换未决身份上游匹配。等 kg 非等架刚度疲劳碰撞性能寿命。候选非发表科学批准。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际数据完成审查后为 secondary_dataset 和 background_dataset |
| downstream_use | 指定裸摩托主架投入独立边界涂装车辆制造 |
| allowed_use | 按 kg 比较匹配配置架路线门点，披露实际质量验收范围上游链接 |
| excluded_use | 排除完整摩托车边车发动机传动轴承悬架车轮油箱车身板螺栓后副架未装附件；铝铸造复合铬钼车架、MIG 激光钎焊未声明接合路线、修理架、整车装配磷化涂漆粉涂、骑行运输服务报废。替代材料接合涂覆供应状态须独立方法评估。 |
| required_metadata | 制造者型号场址时期；车架件号修订序列号受控图纸；低碳牌号管截面壁厚库存供应状态；实际整体转向头安装座完整性外购子件自产区分；氩供应实际 TIG 规程焊图填料电极规格鉴定；实际整理清洗残油；尺寸焊检放行；实际同配置校准净架质量 M kg 秤皮重不确定性；实际库存仪表气废物记录返工分配供应上游匹配；包装架排除数据缺口 |
| required_quality_disclosure | 实测计算缺失数据称重焊检原件身份范围缺口资本排除分配不确定性；候选科学待审 |
| update_trigger | 实际架图纸牌号截面供应子件状态接合填料气电极路线整理涂装门点质量检查场址上游变化 |


## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `yamaha` | literature | [Yamaha Motor manufacturing jobs/processes](https://global.yamaha-motor.com/jp/recruit/graduates/highschool/works-mc/) | HTML プレス、溶接、塗装、ユニット組付、車体・ユニット組立：厂商成形焊接涂装装配背景。不识别实际架钢 TIG 规程架 M 工厂强度。独立船外机发动机整车试验非车架专属证据。未标日期说明仅定性工序区分。 |
| `bmw` | literature | [BMW Group Plant Berlin](https://www.bmwgroup.jobs/content/grpw/websites/bmwgroup-werke_com/berlin/en.html) | HTML Welding shop、Assembly、Paint shop 区分架制造发动机车架结合后续架粉涂。铝油箱焊发动机公差整车测功检查厂产数不能用于本裸低碳 TIG 主架。不采用数值约束。 |
| `twi` | extension_guidance | [TWI: Tungsten inert gas TIG or GTA welding](https://www.twi-global.com/technical-knowledge/job-knowledge/tungsten-inert-gas-tig-or-gta-welding-006) | HTML Process characteristics、Electrode、Shielding gas：非熔化钨惰性保护独立可选填料；氩可焊钢。通用工艺指引非摩托工厂规格强制纯钨填料配方。不采用气率电极寿命功率效率焊鉴定排放因子。 |
