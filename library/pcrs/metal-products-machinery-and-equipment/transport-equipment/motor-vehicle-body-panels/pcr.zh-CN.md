---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.motor-vehicle-body-panels
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未装配冷冲压钢制机动车车身板件制造

## 1. 范围与适用性

新制单件机动车车身板件，以声明的未镀覆低碳深冲钢板或接收成品坯片冷冲压，按图纸修边冲孔整理边缘放行，未装配且未涂漆。声明件号、修订和左右侧。制造厂门前景覆盖实际落料、冷拉深整形、机械修边冲孔、条件清洗、尺寸净质量验收及条件保护。仅为 CPC 49231 较窄制造路线，不覆盖全部零件附件类别。

排除装配车身壳、白车身、焊接粘接多板闭合件、完整车门整车挂车集装箱；铝复合镀覆镀锌板、先进高强钢热冲压板、液压成形辊压及未声明切割路线、修理再制造、整车装配涂漆、运输使用碰撞服务及报废。不预设焊接电泳磷化涂漆固化属于裸单板门点。

BMW 提供冲压车身焊装区分及成形检查背景，不证明本板件牌号工厂用量。WorldAutoSteel 润滑指引面向先进高强钢：仅用润滑施用清洗概念，不将其负荷温度数值用于低碳路线。来源不提供实际板 M 或普遍配方。科学待审。未核验匹配上游数据集时，接收到验收不是完整从摇篮到厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.motor-vehicle-body-panels |
| classification_refs | CPC 3.0 49231；较窄冷冲压单钢车身板路线；仅背景 |
| covered_products | 新制单件机动车车身板件，以声明的未镀覆低碳深冲钢板或接收成品坯片冷冲压，按图纸修边冲孔整理边缘放行，未装配且未涂漆。声明件号、修订和左右侧。制造厂门前景覆盖实际落料、冷拉深整形、机械修边冲孔、条件清洗、尺寸净质量验收及条件保护。仅为 CPC 49231 较窄制造路线，不覆盖全部零件附件类别。 |
| excluded_products | 排除装配车身壳、白车身、焊接粘接多板闭合件、完整车门整车挂车集装箱；铝复合镀覆镀锌板、先进高强钢热冲压板、液压成形辊压及未声明切割路线、修理再制造、整车装配涂漆、运输使用碰撞服务及报废。不预设焊接电泳磷化涂漆固化属于裸单板门点。 |
| representative_product | 一个图纸定义验收单板件具有正实测 M |
| production_route | 条件落料；冷成形机械边孔整理；条件清洗；净称重验收；条件保护 |
| market_state | 声明门点新制验收未装配未涂漆单板 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一个指定验收单钢车身板件 |
| How much | 1 kg 验收板净质量；按件采集用实测 M 归一化 |
| How well | 实际受控图纸表面形孔边交付状态验收；等质量非等装配碰撞性能 |
| How long or cycle | 一次制造验收周期；无车辆寿命里程运输服务 |
| reference_flow_link | finished_panel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收未装配未涂漆冷冲压钢车身板件 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者场址时期；件号修订左右侧受控图纸实际形孔边；钢牌号炉批厚度未镀覆基板状态；卷料接收坯片供应完整性；压机模具实际冷成形切割顺序；清洗配方安全数据单残油状态；验收尺寸表面检查不合格返工；实际正同配置校准净质量 M kg 秤皮重校准不确定性放行；实际库存废钢溶剂水电记录分配；包装架排除上游匹配数据缺口 |

M 为声明残油交付状态的实际验收板件；排除包装架夹具废钢不合格板。记录清洗是否改变交付状态。具体数据集元数据说明须声明必需限定；缺失即参考定义不完整。目录几何面积厚度密度估计运输毛重不能建立 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 此处完整设备指一个成品单板，不是整车。使用适用校准秤实体称量每个验收同件号修订左右侧板；记录秤读数实测夹具皮重油清洗状态操作者日期不确定性正净 M，关联图纸放行。批数量记录须实际同配置数量及可追溯逐板计量分布；不假定平均件重。称重与库存废钢不合格件实测残油核对，不把油质量作钢收得率。 |
| `energy_units` | 各电力行 | Net calorific value | MJ | 用核验能量单位组换算 1 kWh = 3.6 MJ。记录实际电压供应商压机清洗检查仪表边界共用运行待机负荷。额定压机力电机额定功率标称行程不是电力计量。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明裸钢库存或接收成品坯片 |
| starting_condition_role | 接收到验收单板制造前景 |
| product_classification_scope | 新制单件机动车车身板件，以声明的未镀覆低碳深冲钢板或接收成品坯片冷冲压，按图纸修边冲孔整理边缘放行，未装配且未涂漆。声明件号、修订和左右侧。制造厂门前景覆盖实际落料、冷拉深整形、机械修边冲孔、条件清洗、尺寸净质量验收及条件保护。仅为 CPC 49231 较窄制造路线，不覆盖全部零件附件类别。 |
| recursive_input_rule | 不将同成品板作自身制造投入。接收成品坯片替代所含板及供应落料；自制内部坯片非边界投入。共用模架非板材料 |
| upstream_dataset_requirement | 匹配实际未镀覆牌号厚度板坯状态润滑清洗浓度路线场址时期供应商参考属性单位；披露缺链接 |
| disclosure | 制造者场址时期；件号修订左右侧受控图纸实际形孔边；钢牌号炉批厚度未镀覆基板状态；卷料接收坯片供应完整性；压机模具实际冷成形切割顺序；清洗配方安全数据单残油状态；验收尺寸表面检查不合格返工；实际正同配置校准净质量 M kg 秤皮重校准不确定性放行；实际库存废钢溶剂水电记录分配；包装架排除上游匹配数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | 所有阶段 | 包含实际落料成形边缘整理适用清洗可归属返工验收保护。外包整理服务与所含直接交换分开。车身装配后续涂漆在单板门点外。长期压机模具工厂设施在核心运行前景外；披露排除，独立建模资本贡献须可追溯实际生产适用。 |  |
| `boundary_completeness` | 实际工单库存 | 必需阶段不使各润滑清洗排放卡必需。补入候选卡未含各实际润滑化学配方液压液补加压缩空气供应热载体切削去毛刺耗材废物交换，具实测范围单位适用性。不因存在压机推断液压泄漏 CO2 油雾溶剂排放。液压回路与冲压油分开。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `blanking` | 卷料准备与落料 | conditional | 实际厂内板料落料；接收成品坯片时不纳入 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `forming` | 冷拉深与整形 | required | 声明冷冲压钢板件配置 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `trimming` | 修边冲孔与边缘整理 | required | 实际图纸规定成品形孔 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `cleaning` | 条件表面清洗 | conditional | 仅板件放行前实际清洗 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `acceptance` | 板件尺寸与质量验收 | required | 每个验收单板件 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `packing` | 厂门交付保护 | conditional | 仅声明门点前实际保护 | foreground | 一台验收同配置成品设备，使用 M 归一化 |

实际坯片供冷成形集成独立机械边缘整理；条件清洗后验收条件保护。集成压机作业仅采集一次。各卡须独立实际适用；无强制排放组合清洗配方。

### 过程：卷料准备与落料 (`blanking`)

识别卷炉批牌号厚度裸金属状态实际排样坯形。实测板净领用退回骨架边角废料；分开实际矫平落料公用记录。不假定通用排样效率。

#### 输入

##### 产品流

###### 未镀覆冷轧深冲钢板 (`steel_sheet`)

仅实际声明低碳裸板牌号厚度实测净领退；非镀覆先进高强钢热轧厚板铝。

- 选定流：未镀覆冷轧深冲钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_blanking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_blanking`
- 来源：`bmw-munich`

###### 工厂进线交流电 (`blanking_electricity`)

仅实际可归属仪表 kWh 换 MJ；记录进线电压供应路线压机待机运行共用。不用额定电机功率压机吨位估值。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_blanking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_blanking`
- 来源：`bmw-munich`

#### 输出

##### 废物流

###### 低碳钢冲压边角废料 (`blanking_steel_scrap`)

仅此阶段实际实测钢边角骨架废料转移；另记不合格整板内部返工，不给避免钢抵扣。

- 选定流：低碳钢冲压边角废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_blanking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_blanking`
- 来源：`bmw-munich`

### 过程：冷拉深与整形 (`forming`)

记录实际冷成形阶段模压机坯片供应状态力行程计划拉深整形工单不合格。润滑剂为实际安全数据单配方净施用，不是液压油或必然矿物配方。模夹具为共用生产资产，非板输出质量。

#### 输入

##### 产品流

###### 未镀覆冷轧钢汽车板件坯片 (`purchased_blank`)

仅外部接收实际成品坯片，替代所含上游板落料；自制内部转移坯片不作投入。

- 选定流：未镀覆冷轧钢汽车板件坯片
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_forming`
- 来源：`ahss-lubrication`

###### 矿物油基冲压润滑剂 (`stamping_oil`)

仅实际纯矿物基配方安全数据单施用平衡；预涂油接收板所含油不重复计。合成乳液配方须另身份浓度平衡。

- 选定流：矿物油基冲压润滑剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_forming`
- 来源：`ahss-lubrication`

###### 工厂进线交流电 (`forming_electricity`)

仅实际可归属仪表 kWh 换 MJ；记录进线电压供应路线压机待机运行共用。不用额定电机功率压机吨位估值。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_forming`
- 来源：`ahss-lubrication`

#### 输出

##### 废物流

###### 废矿物冲压油 (`spent_stamping_oil`)

仅实际排出收集废矿物冲压油目的实测质量；验收板保留油不是该废物。

- 选定流：废矿物冲压油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_forming`
- 来源：`ahss-lubrication`

### 过程：修边冲孔与边缘整理 (`trimming`)

记录实际修边冲孔翻边边缘工序不合格；可集成连续模。收集钢废料不重复落料废料及实际压机去毛刺公用。激光切割在声明机械切割路线外。

#### 输入

##### 产品流

###### 工厂进线交流电 (`trimming_electricity`)

仅实际可归属仪表 kWh 换 MJ；记录进线电压供应路线压机待机运行共用。不用额定电机功率压机吨位估值。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_trimming。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_trimming`
- 来源：`bmw-munich`

#### 输出

##### 废物流

###### 低碳钢冲压边角废料 (`trimming_steel_scrap`)

仅此阶段实际实测钢边角骨架废料转移；另记不合格整板内部返工，不给避免钢抵扣。

- 选定流：低碳钢冲压边角废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_trimming。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_trimming`
- 来源：`bmw-munich`

### 过程：条件表面清洗 (`cleaning`)

声明实际碱洗或 IPA 清洗、安全数据单浓度干燥路线。各化学卡为条件案例，不作必需组合处理。裸未涂漆交付不假定磷化电泳涂漆烘烤；保留声明残油状态。

#### 输入

##### 产品流

###### 工艺用水 (`cleaning_water`)

仅实际供应处理工艺水实测质量；非自然取水未指定基础水清洗废液。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`ahss-lubrication`

###### 碳酸钠粉末 (`sodium_carbonate`)

仅实际碳酸钠清洗成分 CAS497-19-8 质量槽浓度记录；不推断泛配方清洗剂身份。

- 选定流：碳酸钠粉末
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`ahss-lubrication`

###### 无水异丙醇清洗溶剂 (`isopropanol`)

仅实际 IPA 溶剂 CAS67-63-0 核验浓度化学平衡；非乙醇或70%消毒剂。

- 选定流：无水异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`ahss-lubrication`

###### 非织造聚酯清洁擦布 (`cleaning_wipe`)

仅实际成品聚酯擦布实测干领用包含；非原纺织基材，除非明确含转化。

- 选定流：非织造聚酯清洁擦布
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`ahss-lubrication`

###### 工厂进线交流电 (`cleaning_electricity`)

仅实际可归属仪表 kWh 换 MJ；记录进线电压供应路线压机待机运行共用。不用额定电机功率压机吨位估值。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`ahss-lubrication`

#### 输出

##### 废物流

###### 钢板件清洗含油水性废液 (`cleaning_effluent`)

仅实际含实测组成目的的废液处理转移；非基础水排放。

- 选定流：钢板件清洗含油水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`ahss-lubrication`

###### 异丙醇沾染聚酯擦布废物 (`spent_wipe`)

仅实际转移沾染擦布实测保留溶剂；区别空气排放。

- 选定流：异丙醇沾染聚酯擦布废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`ahss-lubrication`

#### 输出

##### 基本流

###### 异丙醇 (`isopropanol_air`)

仅实际有证据 IPA 排放 CAS67-63-0 即时未指定空气。用实测物种溶剂平衡或排放计量，不用总溶剂领用。室内长期水介质须另身份；非必然排放。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`ahss-lubrication`

### 过程：板件尺寸与质量验收 (`acceptance`)

使用同件号修订左右侧图纸检具或可追溯尺寸扫描、边缘孔表面检查、实际校准板净称重放行。按生产者准则记录皱裂回弹毛刺表面损伤；不虚构固定公差强度寿命碰撞等效。

#### 输入

##### 产品流

###### 工厂进线交流电 (`acceptance_electricity`)

仅实际可归属仪表 kWh 换 MJ；记录进线电压供应路线压机待机运行共用。不用额定电机功率压机吨位估值。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`bmw-press`

#### 输出

##### 产品流

###### 验收未装配未涂漆冷冲压钢车身板件 (`finished_panel`)

一个指定件号修订左右侧验收最终形板件含实际残油状态，排除架夹具包装。实体校准 M 与 cp_mass 建立归一化输出；不以几何密度标称质量代替。

- 选定流：验收未装配未涂漆冷冲压钢车身板件
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`bmw-press`

### 过程：厂门交付保护 (`packing`)

实测各实际包装项。周转架皮重垫料排除板 M；架服务返回负担以可追溯复用独立归属，不假定架寿命一次性。

#### 输入

##### 产品流

###### 瓦楞纸板箱 (`carton`)

仅实际一次性瓦楞箱净领用；非复用运输架。

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

仅实际 LDPE 保护膜净领用质量；膜排除板净 M。

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

仅实际可归属仪表 kWh 换 MJ；记录进线电压供应路线压机待机运行共用。不用额定电机功率压机吨位估值。

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
| `allocation_orders` | 共用公用模具占用 | 直接归属实际净领用仪表冲压清洗验收工单含返工。不可分公用用实测因果压机占用实际运行待机负荷或其他有证据物理驱动量：份额 = 工单驱动量 / 覆盖工单驱动量之和。保留时期完整分母；板数量模吨位目录面积本身非默认驱动。 |  |
| `allocation_trials` | 模具鉴定验收生产 | 独立原型研发与生产分开。生产模试破坏检查具有因果适用时归属实际覆盖验收工单；破坏不合格试板不入验收输出。记录实际复用鉴定范围敏感性，不假定模具寿命固定产数。 |  |
| `allocation_recovery` | 边角不合格返工 | 落料骨架修边边角分开，各实体转移仅计一次。返工归验收输出。确定实际废物共产品目的；钢可回收不支持避免原生钢替代抵扣。共产品分配须实际因果经济原件敏感性。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | 验收实体称重记录 | 型号；配置；序列号；验收净质量 M；件号修订左右侧；板秤读数；夹具皮重；油清洗状态；校准不确定性；图纸；签字放行 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 逐验收台 | 实际制造验收时期 | 声明板验收门点 | 每台验收净质量 | 实际校准实体单板称重实测皮重受控图纸放行 |
| `cp_blanking` | `blanking` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订左右侧精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取校准库存秤卷净领退排样落料工单公用仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_forming` | `forming` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订左右侧精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取成形工单公用仪表精确润滑规格安全数据单净施用退回 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_trimming` | `trimming` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订左右侧精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取修边冲孔边缘工单实测废料目的公用仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_cleaning` | `cleaning` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订左右侧精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际清洗配方安全数据单水能仪表溶剂平衡废物转移记录 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_acceptance` | `acceptance` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订左右侧精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取序列批验收受控图纸计量秤校准称重放行 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_packing` | `packing` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订左右侧精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取包装领退实际皮重架流转复用记录 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 依 mass_record_provenance 用实际同件号修订左右侧实体板称重，正 M kg 实测皮重记录残油。尺寸密度目录质量架毛重假定废钢比不替代。缺实际称重原件须科学数据审查。 | 实际秤校准图纸放行原件 |
| `quality_atomic` | 每一交换 | 核验一个实体化学身份牌号浓度加工供应状态原参考属性单位。未镀覆低碳板不是先进高强钢，热轧油不是冷冲压润滑剂，碳酸钠粉不是配方槽液，无水 IPA 不是消毒剂。保留精确未决行，不代以泛身份。 | 实际供应图纸规格安全数据单核验公开记录 |
| `quality_acceptance` | cp_acceptance | 使用实际受控图纸校准检具扫描、形孔位边毛刺表面裂皱回弹准则签字放行。记录实际失败件返工。厂商相机检查仅背景，不作强制传感器虚构普遍公差碰撞批准。 | 实际图纸检查计量放行报告 |
| `quality_balance` | 钢油溶剂水电 | 核对时期净库存所含验收不合格板废钢退回。实际残油与钢收得率分开。区别技术工艺水供应处理废液环境释放。IPA 空气须物种实测排放或闭合平衡含擦布废物回收溶剂，即时未指定空气；领用本身非释放。补各实际加热干燥载体具证据单位换算；不推断必然排放。 | 实际库存规格安全数据单平衡仪表转移 |
| `quality_coverage` | 数据集上游覆盖 | 区分实测计算缺失证实 not_applicable。审计实际完整过程图候选卡外交换供应所含落料资本排除分配不确定性。完整从摇篮到厂门声明须匹配核验上游链接。有限计量检查不建立实际工厂证据科学批准。 | 实际过程图原件透明缺口登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考输出 | 须当前实际正 M kg 及 cp_mass。精确参考名等于 finished_panel；空 UUID 须在 unresolved_flow_identities 登记该精确行。仅一个验收板；无架包装工具废钢不合格质量。 |  |
| `validate_basis` | 所有行协议 | 核验双语相同有序小写行规则协议标识及实际投影引用。q_item 按验收成品设备；M 为 kg；用明确 normalize_mass 同配置相同数量。不得将公开数量面积能量属性改写 Mass。 |  |
| `validate_boundary` | 过程图交换 | 核验接收坯片自产落料包含集成模资源计数不同落料修边废钢实际润滑清洗化学残油有证据排放。候选卡不建立工厂完整性；缺实际记录或未定适用须审查。 |  |
| `validate_use` | 数据集用途 | 披露实际图纸配置未装配裸交付状态制造门点质量出处未决身份缺口上游匹配。等 kg 不是等装配防腐碰撞性能寿命。候选非发表方法学批准。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际数据完成审查后为 secondary_dataset 和 background_dataset |
| downstream_use | 指定单车身板制造投入独立边界装配车身车辆模型 |
| allowed_use | 按 kg 比较匹配件配置门点制造，披露实际质量交付状态上游链接 |
| excluded_use | 排除装配车身壳、白车身、焊接粘接多板闭合件、完整车门整车挂车集装箱；铝复合镀覆镀锌板、先进高强钢热冲压板、液压成形辊压及未声明切割路线、修理再制造、整车装配涂漆、运输使用碰撞服务及报废。不预设焊接电泳磷化涂漆固化属于裸单板门点。 |
| required_metadata | 制造者场址时期；件号修订左右侧受控图纸实际形孔边；钢牌号炉批厚度未镀覆基板状态；卷料接收坯片供应完整性；压机模具实际冷成形切割顺序；清洗配方安全数据单残油状态；验收尺寸表面检查不合格返工；实际正同配置校准净质量 M kg 秤皮重校准不确定性放行；实际库存废钢溶剂水电记录分配；包装架排除上游匹配数据缺口 |
| required_quality_disclosure | 实测计算缺失状态称重验收原件身份缺口钢油溶剂平衡分配资本排除不确定性；候选科学待审 |
| update_trigger | 实际件修订左右侧牌号镀覆厚度供应坯片成形切割清洗路线称重验收场址上游数据变化 |


## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `bmw-munich` | literature | [BMW Group Plant Munich](https://www.bmwgroup-werke.com/content/grpw/websites/bmwgroup-werke_com/muenchen/en.html) | HTML Press Shop、Body Shop 章节：成形检查独立接合阶段。仅支持工序区分。材料混合镀覆车身质量产数工厂用量非本裸板配方净 M 质量范围。 |
| `bmw-press` | literature | [BMW Group Production](https://www.bmwgroup-werke.com/content/grpw/websites/bmwgroup_com/en/company/production.html) | HTML 生产工序 Press shop、Body shop、Paint shop 段：板坯成形与车身接合涂装分开。不证明本板钢牌号供应状态验收公差制造强度。不采用整车身质量。 |
| `ahss-lubrication` | extension_guidance | [WorldAutoSteel AHSS Insights — Lubrication](https://ahssinsights.org/forming/tooling/lubrication/) | HTML Lubricant Functions and Requirements、Lubricant Selection、坯片清洗施用段。先进高强钢行业指引仅支持润滑身份施用清洗选择，不作强制矿物配方低碳钢数值负荷温度。不提供实测前景用量净件质量普遍寿命。 |
